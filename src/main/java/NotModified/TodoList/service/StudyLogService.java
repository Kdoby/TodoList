package NotModified.TodoList.service;

import NotModified.TodoList.domain.StudyLog;
import NotModified.TodoList.dto.studyLog.StudyLogCreateRequest;
import NotModified.TodoList.repository.StudyLogRepository;
import NotModified.TodoList.util.CustomDateUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class StudyLogService {
    private final StudyLogRepository studyLogRepository;

    public StudyLog findById(Long id) {
        return studyLogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 기록입니다."));
    }

    public List<Long> registerStudyLog(StudyLogCreateRequest dto) {
        LocalDateTime start = dto.getStartTime();
        LocalDateTime end = dto.getEndTime();

        if(start.isAfter(end)) {
            throw new IllegalArgumentException("시잔 시간이 종료 시간보다 늦을 수 없습니다.");
        }

        if(dto.isManual() && !CustomDateUtils.isWithinCustomDay(start, end)) {
            throw new IllegalArgumentException("수동 기록은 하루(06:00~다음날 05:59) 범위 내여야 합니다.");
        }

        List<Long> savedIds = new ArrayList<>();

        while(start.isBefore(end)) {
            // 다음 오전 6시 기준 경계
            LocalDateTime nextSplit = CustomDateUtils.getCustomDayStart(start).plusDays(1);
            LocalDateTime splitEnd = end.isBefore(nextSplit) ? end : nextSplit;

            int durationMinutes = (int) Duration.between(start, splitEnd).toMinutes();

            StudyLog studyLog = StudyLog.builder()
                    .todoId(dto.getTodoId())
                    .startTime(dto.getStartTime())
                    .endTime(dto.getEndTime())
                    .logDate(CustomDateUtils.getCustomLogDate(start))
                    .duration(durationMinutes)
                    .build();

            studyLogRepository.save(studyLog);
            savedIds.add(studyLog.getId());
        }

        return savedIds;
    }

    public void removeStudyLog(Long id) {
        StudyLog studyLog = findById(id);
        studyLogRepository.delete(studyLog);
    }
}
