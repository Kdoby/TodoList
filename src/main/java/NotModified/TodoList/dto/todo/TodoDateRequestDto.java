package NotModified.TodoList.dto.todo;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TodoDateRequestDto {
    private String userId;
    private LocalDate todoDate;
}
