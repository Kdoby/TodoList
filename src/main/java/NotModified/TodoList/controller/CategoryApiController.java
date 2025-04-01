package NotModified.TodoList.controller;

import NotModified.TodoList.domain.Category;
import NotModified.TodoList.dto.category.CategoryRequestDto;
import NotModified.TodoList.dto.category.CategoryResponseDto;
import NotModified.TodoList.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class CategoryApiController {

    private final CategoryService categoryService;

    @PostMapping("/categories")
    public Long createCategory(@RequestBody CategoryRequestDto request) {
        return categoryService.saveCategory(request);
    }

    @GetMapping("/categories")
    public List<CategoryResponseDto> getAllCategories() {
        return categoryService.findCategories();
    }
}
