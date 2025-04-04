package NotModified.TodoList.dto.category;

import NotModified.TodoList.domain.Category;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryRequestDto {
    private String userId;
    private String name;
    private String color;

    // dto -> entity
    public Category toEntity() {
        return Category.builder()
                .userId(userId)
                .name(name)
                .color(color)
                .build();
    }
}
