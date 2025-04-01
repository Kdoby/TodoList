package NotModified.TodoList.controller;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class TodoCreateRequest {
    private String userId;
    private String title;
    private Long categoryId;
    private String categoryName;
    private LocalDate todoDate;
}