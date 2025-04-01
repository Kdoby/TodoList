package NotModified.TodoList.repository;

import NotModified.TodoList.domain.StudyLog;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class JpaStudyLogRepository implements StudyLogRepository {
    EntityManager em;

    public JpaStudyLogRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public StudyLog save(StudyLog studyLog){
        em.persist(studyLog);
        return studyLog;
    }

    @Override
    public List<StudyLog> findAll() {
        return em.createQuery("select s from StudyLog s", StudyLog.class)
                .getResultList();
    }
}
