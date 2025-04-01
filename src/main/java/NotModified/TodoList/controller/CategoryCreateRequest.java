package NotModified.TodoList.controller;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CategoryCreateRequest {
    private String userId;
    private String name;
    private String categoryColor;
}
