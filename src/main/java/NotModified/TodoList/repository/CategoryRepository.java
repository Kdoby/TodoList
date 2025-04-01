package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Category;

import java.util.List;

public interface CategoryRepository {
    Category save(Category category);
    List<Category> findAll();
}

