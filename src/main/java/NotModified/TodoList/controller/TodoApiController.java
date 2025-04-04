package NotModified.TodoList.controller;

import NotModified.TodoList.dto.todo.TodoCreateRequestDto;
import NotModified.TodoList.dto.todo.TodoDateRequestDto;
import NotModified.TodoList.dto.todo.TodoGroupedResponseDto;
import NotModified.TodoList.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class TodoApiController {

    private final TodoService todoService;


    @PostMapping("/todos")
    public ResponseEntity<?> createTodo(@RequestBody TodoCreateRequestDto request) {
        todoService.saveTodo(request);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "todo 생성 성공"
        ));
    }

    @PostMapping("/todos/list")
    public ResponseEntity<?> getTodosGroupedByDateAndCategory(@RequestBody TodoDateRequestDto request) {
        List<TodoGroupedResponseDto> todos = todoService.findDateList(request);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "날짜/그룹별 todoList 조회 성공",
                "data", todos
        ));
    }
}