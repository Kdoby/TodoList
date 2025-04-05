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

    // 활성화된 카테고리 중에서 중복되는 이름이 있는지 체크
    public void validateDuplicateCategory(CategoryRequestDto categoryDto) {
        categoryRepository.findByCategoryName(categoryDto.getUserId(), categoryDto.getName())
                .ifPresent(c -> {
                    throw new IllegalStateException("이미 존재하는 카테고리 입니다.");
                });
    }

    // 중복 체크 후 저장
    public Long saveCategory(CategoryRequestDto categoryDto) {
        validateDuplicateCategory(categoryDto);
        Category category = categoryRepository.save(categoryDto.toEntity());
        return category.getId();
    }

    // 카테고리 목록 찾기 - 활성화 or 비활성화
    public List<CategoryResponseDto> findCategories(String userId, boolean isActive) {
       return categoryRepository.findByUserIdAndIsActive(userId, isActive)
               .stream()
               .map(CategoryResponseDto::new)
               .collect(Collectors.toList());
    }
}
