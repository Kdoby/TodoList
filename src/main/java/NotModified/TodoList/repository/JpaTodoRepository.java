package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Todo;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

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
    public Optional<Todo> findById(Long id) {
        Todo todo = em.find(Todo.class, id);
        return Optional.ofNullable(todo);
    }

    // 특정 날짜에 대한 todoList
    @Override
    public List<Todo> findByDate(LocalDate date, String userId) {
        return em.createQuery("select t from Todo t where t.todoDate = :date and t.userId = :userId", Todo.class)
                .setParameter("date", date)
                .setParameter("userId", userId)
                .getResultList();
    }

    @Override
    public List<Todo> findAll() {
        return em.createQuery("select t from Todo t", Todo.class)
                .getResultList();
    }
}
