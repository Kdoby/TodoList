package NotModified.TodoList.service;

import NotModified.TodoList.domain.Lesson;
import NotModified.TodoList.dto.lesson.LessonCreateRequest;
import NotModified.TodoList.repository.LessonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class LessonService {
    private final LessonRepository lessonRepository;

    public Lesson findById(Long id) {
        return lessonRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 격언입니다."));
    }

    // 격언 등록
    public Long registerLesson(LessonCreateRequest dto) {
        Lesson lesson = Lesson.builder()
                .userId(dto.getUserId())
                .todoDate(dto.getTodoDate())
                .build();

        lessonRepository.save(lesson);

        return lesson.getId();
    }
    
    // 격언 수정
    public void updateLesson(Long id, String content) {
        Lesson lesson = findById(id);
        lesson.setContent(content);
    }

    // 격언 삭제
    public void removeLesson(Long id) {
        Lesson lesson = findById(id);
        lessonRepository.delete(lesson);
    }
}
