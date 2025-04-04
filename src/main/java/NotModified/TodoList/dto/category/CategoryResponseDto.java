package NotModified.TodoList.dto.category;

import NotModified.TodoList.domain.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryResponseDto {
    private Long id;
    private String userId;
    private String name;
    private String color;
    private boolean isActive;

    // entity 정보와 맵핑해줌 (entity -> dto 변환 과정)
    public CategoryResponseDto(Category category) {
        this.id = category.getId();
        this.userId = category.getUserId();
        this.name = category.getName();
        this.color = category.getColor();
        this.isActive = category.getIsActive();
    }
}
