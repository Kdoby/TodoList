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
    private String categoryId;
    private String categoryName;
    private String categoryColor;
    private Boolean categoryIsActive;
    private List<TodoResponseDto> todos = new ArrayList<>();

    public TodoGroupedResponseDto(Long categoryId, String categoryName, String categoryColor, Boolean categoryIsActive) {
        this.categoryId = (categoryId == null ? "deleted" : String.valueOf(categoryId));
        this.categoryName = categoryName;
        this.categoryColor = categoryColor;
        this.categoryIsActive = categoryIsActive;
        this.todos = new ArrayList<>(); // 초기화
    }

    public void addTodo(Todo todo) {
        this.todos.add(new TodoResponseDto(todo));
    }
}
