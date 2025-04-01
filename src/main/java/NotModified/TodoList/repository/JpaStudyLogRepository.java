package NotModified.TodoList.repository;

import NotModified.TodoList.domain.StudyLog;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

@Repository
public class JpaStudyLogRepository implements studyLogRepository {
    EntityManager em;

    @Override
    public StudyLog save(StudyLog studyLog){
        em.persist(studyLog);
        return studyLog;
    }
}
