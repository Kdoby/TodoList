package NotModified.TodoList.service;

import NotModified.TodoList.domain.Category;
import NotModified.TodoList.dto.category.CategoryRequestDto;
import NotModified.TodoList.dto.category.CategoryResponseDto;
import NotModified.TodoList.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public Long saveCategory(CategoryRequestDto categoryDto) {
        categoryRepository.save(categoryDto.toEntity());
        Category category = categoryRepository.findByUserId(categoryDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("해당 유저의 카테고리를 찾을 수 없습니다."));

        return category.getId();
    }

    public List<CategoryResponseDto> findCategories() {
       return categoryRepository.findAll()
               .stream()
               .map(CategoryResponseDto::new)
               .collect(Collectors.toList());
    }
}
