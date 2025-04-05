package NotModified.TodoList.controller;

import NotModified.TodoList.dto.category.CategoryRequestDto;
import NotModified.TodoList.dto.category.CategoryResponseDto;
import NotModified.TodoList.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class CategoryApiController {

    private final CategoryService categoryService;

    @PostMapping("/categories")
    public ResponseEntity<?> createCategory(@RequestBody CategoryRequestDto request) {
        Long id = categoryService.saveCategory(request);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "카테고리 생성 성공"
        ));
    }

    @GetMapping("/categories/{userId}")
    public List<CategoryResponseDto> getAllCategories(@PathVariable("userId") String userId, @RequestParam("is_active") Boolean isActive) {
        return categoryService.findCategories(userId, isActive);
    }
}
