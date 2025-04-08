package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Todo;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface TodoRepository {
    Todo save(Todo todo);
    Optional<Todo> findById(Long id);
    List<Todo> findByDate(LocalDate date, String userId);
    List<Todo> findAll();
    void delete(Todo todo);
}
