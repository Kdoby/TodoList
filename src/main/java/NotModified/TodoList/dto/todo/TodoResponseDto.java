package NotModified.TodoList.dto.todo;

import NotModified.TodoList.domain.Todo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TodoResponseDto {
    private Long id;
    private String userId;
    private String title;
    private Boolean isDone;
    private LocalDate todoDate;

    public TodoResponseDto(Todo todo) {
        this.id = todo.getId();
        this.userId = todo.getUserId();
        this.title = todo.getTitle();
        this.isDone = todo.getIsDone();
        this.todoDate = todo.getTodoDate();
    }
}
