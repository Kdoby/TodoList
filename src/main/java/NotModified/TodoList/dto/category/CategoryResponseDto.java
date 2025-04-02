package NotModified.TodoList.dto.category;

import NotModified.TodoList.domain.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryResponseDto {
    private String userId;
    private String name;
    private String categoryColor;

    // entity 정보와 맵핑해줌 (entity -> dto 변환 과정)
    public CategoryResponseDto(Category category) {
        this.userId = category.getUserId();
        this.name = category.getName();
        this.categoryColor = category.getCategoryColor();
    }
}
