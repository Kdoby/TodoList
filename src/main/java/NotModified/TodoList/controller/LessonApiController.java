package NotModified.TodoList.controller;

import NotModified.TodoList.dto.lesson.LessonCreateRequest;
import NotModified.TodoList.dto.lesson.LessonUpdateRequest;
import NotModified.TodoList.service.LessonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class LessonApiController {
    private final LessonService lessonService;

    // lesson 등록
    @PostMapping("/todo/lesson")
    public ResponseEntity<?> createLesson(@RequestBody LessonCreateRequest request) {
        lessonService.registerLesson(request);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "lesson 등록 성공"
        ));
    }

    // lesson 수정
    @PutMapping("/todo/lesson/{id}")
    public ResponseEntity<?> updateLesson(@PathVariable("id") Long id,
                                          @RequestBody LessonUpdateRequest request) {
        lessonService.updateLesson(id, request.getContent());

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "lesson 수정 성공"
        ));
    }

    // lesson 삭제
    @DeleteMapping("/todo/lesson/{id}")
    public ResponseEntity<?> deleteLesson(@PathVariable("id") Long id) {
        lessonService.removeLesson(id);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "lesson 삭제 성공"
        ));
    }
}
