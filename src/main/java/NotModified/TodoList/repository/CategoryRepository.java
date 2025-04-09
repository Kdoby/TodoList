package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryRepository {
    Category save(Category category);
    List<Category> findAll();
    void delete(Category category);
    Optional<Category> findById(Long id);
    Optional<Category> findByCategoryName(String userId, String categoryName);
    List<Category> findByUserIdAndIsActive(String userId, Boolean isActive);
}

