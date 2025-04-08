package NotModified.TodoList.dto.todo;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TodoUpdateRequestDto {
    private String title;
    private Boolean isDone;
}
