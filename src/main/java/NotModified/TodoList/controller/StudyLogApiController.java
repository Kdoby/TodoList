package NotModified.TodoList.controller;

import NotModified.TodoList.dto.studyLog.StudyLogCreateRequest;
import NotModified.TodoList.dto.studyLog.StudyLogResponse;
import NotModified.TodoList.dto.studyLog.StudyLogUpdateRequest;
import NotModified.TodoList.service.StudyLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class StudyLogApiController {
    private final StudyLogService studyLogService;

    // 공부 기록 등록
    @PostMapping("/todo/log")
    public ResponseEntity<?> createStudyLog(@RequestBody StudyLogCreateRequest request) {
        studyLogService.registerStudyLog(request);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "공부 기록 등록 성공"
        ));
    }

    // 공부 기록 수정
   @PutMapping("/todo/log/{id}")
    public ResponseEntity<Map<String, Object>> updateStudyLog(@PathVariable("id") Long id,
                                            @RequestBody StudyLogUpdateRequest request) {
        studyLogService.updateStudyLog(id, request);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "공부 기록 수정 성공"
        ));
    }

    // 공부 기록 삭제
    @DeleteMapping("/todo/log/{id}")
    public ResponseEntity<?> deleteStudyLog(@PathVariable("id") Long id) {
        studyLogService.removeStudyLog(id);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "공부 기록 삭제 성공"
        ));
    }

    // 특정 날짜의 공부 기록 조회
    @GetMapping("/todo/log/{userId}/{date}")
    public ResponseEntity<List<StudyLogResponse>> getStudyLogList(@PathVariable("userId") String userId,
                                                                  @PathVariable("date") LocalDate date) {
        return ResponseEntity.ok(studyLogService.getStudyLogsByDate(userId, date));
    }
}
