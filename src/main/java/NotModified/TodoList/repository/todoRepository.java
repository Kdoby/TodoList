package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Todo;

public interface todoRepository {
    Todo save(Todo todo);
}
