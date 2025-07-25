package NotModified.TodoList.dto.todo;

import NotModified.TodoList.domain.Todo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TodoGroupedResponseDto {
    private Long categoryId;
    private String categoryName;
    private String categoryColor;
    private Boolean categoryIsActive;
    private List<TodoResponseDto> todos = new ArrayList<>();
    private String lesson;

    public TodoGroupedResponseDto(Long categoryId, String categoryName, String categoryColor, Boolean categoryIsActive, String lesson) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.categoryColor = categoryColor;
        this.categoryIsActive = categoryIsActive;
        this.todos = new ArrayList<>(); // 초기화
        this.lesson = lesson;
    }

    public void addTodo(Todo todo) {
        this.todos.add(new TodoResponseDto(todo));
    }
}
