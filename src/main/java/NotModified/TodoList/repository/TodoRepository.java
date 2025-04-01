package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Todo;

import java.util.List;

public interface TodoRepository {
    Todo save(Todo todo);
    List<Todo> findAll();
}
