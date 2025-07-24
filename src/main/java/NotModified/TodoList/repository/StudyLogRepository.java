package NotModified.TodoList.repository;

import NotModified.TodoList.domain.StudyLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudyLogRepository extends JpaRepository<StudyLog, Long> {
}
