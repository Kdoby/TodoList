package NotModified.TodoList.repository;

import NotModified.TodoList.domain.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Long> {
    @Query("SELECT l FROM Lesson l " +
            "WHERE l.todoDate = :date")
    Lesson findByTodoDate(@Param("date") LocalDate date);
}
