package NotModified.TodoList.service;

import NotModified.TodoList.domain.Todo;
import NotModified.TodoList.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;

    public Long saveTodo(Todo todo) {
        todoRepository.save(todo);
        return todo.getId();
    }

    public List<Todo> findTodos() {
        return todoRepository.findAll();
    }
}
