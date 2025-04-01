package NotModified.TodoList.service;

import NotModified.TodoList.domain.StudyLog;
import NotModified.TodoList.repository.StudyLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class StudyLogService {
    private final StudyLogRepository studyLogRepository;

    public Long saveLog(StudyLog studyLog) {
        studyLogRepository.save(studyLog);
        return studyLog.getId();
    }

    public List<StudyLog> findStudyLogs() {
        return studyLogRepository.findAll();
    }
}
