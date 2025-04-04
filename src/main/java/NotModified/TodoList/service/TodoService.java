package NotModified.TodoList.service;

import NotModified.TodoList.domain.Category;
import NotModified.TodoList.domain.Todo;
import NotModified.TodoList.dto.todo.TodoCreateRequestDto;
import NotModified.TodoList.dto.todo.TodoDateRequestDto;
import NotModified.TodoList.dto.todo.TodoGroupedResponseDto;
import NotModified.TodoList.dto.todo.TodoResponseDto;
import NotModified.TodoList.repository.CategoryRepository;
import NotModified.TodoList.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;
    private final CategoryRepository categoryRepository;

    public Long saveTodo(TodoCreateRequestDto todoDto) {
        // 존재하지 않거나, 비활성화된 카테고리에 대해서는 등록할 수 없음
        Category category = categoryRepository.findById(todoDto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("카테고리를 찾을 수 없습니다."));

        // dto -> entity
        Todo todo = Todo.builder()
                .userId(todoDto.getUserId())
                .title(todoDto.getTitle())
                .category(category)
                .todoDate(todoDto.getTodoDate())
                .build();

        todoRepository.save(todo);
        return todo.getId();
    }

    public List<TodoGroupedResponseDto> findDateList(TodoDateRequestDto todoDto) {
        List<Todo> todos = todoRepository.findByDate(todoDto.getTodoDate(), todoDto.getUserId());

        Map<String, TodoGroupedResponseDto> groupedMap = new LinkedHashMap<>();

        // 특정 날짜의 todo 목록을 추출
        for (Todo todo : todos) {
            // todo 가 속한 category 분류의 id 값 가져옴
            Long categoryId = todo.getCategory().getId();

            // 그룹 키 = categoryId
            String key = String.valueOf(categoryId);

            // key 값이 존재하지 않으면 새로운 그룹화 배열을 생성
            groupedMap.computeIfAbsent(key, k -> new TodoGroupedResponseDto(categoryId, todo.getCategory().getName(), todo.getCategory().getColor(), todo.getCategory().getIsActive()));
            // 해당하는 categoryName 그룹에 Todo 객체를 추가
            groupedMap.get(key).addTodo(todo);
        }
        return new ArrayList<>(groupedMap.values());
    }

    public List<Todo> findTodos() {
        return todoRepository.findAll();
    }
}
