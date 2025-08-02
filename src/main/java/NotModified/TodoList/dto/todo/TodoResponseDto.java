package NotModified.TodoList.dto.todo;

import NotModified.TodoList.domain.Todo;
import NotModified.TodoList.util.DurationUtils;
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

    private Integer totalHours;
    private Integer totalMinutes;
    private Integer totalSeconds;

    public TodoResponseDto(Todo todo) {
        this.id = todo.getId();
        this.userId = todo.getUserId();
        this.title = todo.getTitle();
        this.isDone = todo.getIsDone();
        this.todoDate = todo.getTodoDate();

        int seconds = todo.getTotalDuration();
        this.totalHours = DurationUtils.getHours(seconds);
        this.totalMinutes = DurationUtils.getMinutes(seconds);
        this.totalSeconds = DurationUtils.getSeconds(seconds);
    }
}
