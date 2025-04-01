package NotModified.TodoList.service;

import NotModified.TodoList.domain.Category;
import NotModified.TodoList.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public Long saveCategory(Category category) {
        categoryRepository.save(category);
        return category.getId();
    }
}
