package NotModified.TodoList.dto.todo;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TodoCreateRequestDto {
    private String userId;
    private Long categoryId;
    private String title;
    private LocalDate todoDate;
}
