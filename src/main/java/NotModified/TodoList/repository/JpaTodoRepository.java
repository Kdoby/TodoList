package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Todo;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class JpaTodoRepository implements TodoRepository {
    EntityManager em;

    public JpaTodoRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public Todo save(Todo todo) {
        em.persist(todo);
        return todo;
    }

    @Override
    public List<Todo> findAll() {
        return em.createQuery("select t from Todo t", Todo.class)
                .getResultList();
    }
}
