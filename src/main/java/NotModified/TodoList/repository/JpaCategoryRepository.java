package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Category;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class JpaCategoryRepository implements CategoryRepository {
    EntityManager em;

    public JpaCategoryRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public Category save(Category category) {
        em.persist(category);
        return category;
    }

    @Override
    public List<Category> findAll() {
        return em.createQuery("select c from Category c", Category.class)
                .getResultList();
    }

}
