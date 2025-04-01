package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Todo;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

@Repository
public class JpaTodoRepository implements todoRepository {
    EntityManager em;

    @Override
    public Todo save(Todo todo) {
        em.persist(todo);
        return todo;
    }
}
