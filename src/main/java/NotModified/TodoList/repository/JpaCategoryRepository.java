package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Category;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

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

    @Override
    public Optional<Category> findByUserId (String userId) {
        Category category = em.createQuery("select c from Category c where c.userId= :userId", Category.class)
                .setParameter("userId", userId)
                .getSingleResult();
        return Optional.ofNullable(category);
    }
}
