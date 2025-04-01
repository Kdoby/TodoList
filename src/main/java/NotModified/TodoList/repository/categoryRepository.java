package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Category;

public interface categoryRepository {
    Category save(Category category);
}
