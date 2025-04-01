package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Category;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

@Repository
public class JpaCategoryRepository implements categoryRepository{
    EntityManager em;

    @Override
    public Category save(Category category) {
        em.persist(category);
        return category;
    }
}
