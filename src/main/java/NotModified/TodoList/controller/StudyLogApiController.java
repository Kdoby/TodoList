package NotModified.TodoList.controller;

import NotModified.TodoList.dto.studyLog.StudyLogCreateRequest;
import NotModified.TodoList.service.StudyLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    // 공부 기록 삭제
    @DeleteMapping("/todo/log/{id}")
    public ResponseEntity<?> deleteStudyLog(@PathVariable("id") Long id) {
        studyLogService.removeStudyLog(id);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "공부 기록 삭제 성공"
        ));
    }

}
