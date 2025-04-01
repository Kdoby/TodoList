package NotModified.TodoList.repository;

import NotModified.TodoList.domain.StudyLog;

import java.util.List;

public interface StudyLogRepository {
    StudyLog save(StudyLog studyLog);
    List<StudyLog> findAll();
}
