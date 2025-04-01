package NotModified.TodoList.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.time.Duration;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "study_log")
public class StudyLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // StudyLog를 조회할 때 바로 Todo 객체까지 로딩하지 않고,
    // todo.getTitle() 등으로 접근할 때 그때서야 SELECT 쿼리 날림
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "todo_id", nullable = false)
    private Todo todo;

    @Column(name = "started_at", nullable = false)
    private LocalDateTime startedAt;

    @Column(name = "ended_at", nullable = false)
    private LocalDateTime endedAt;

    @PrePersist
    public void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        this.startedAt = now;
        this.endedAt = now;
    }

    @PreUpdate
    public void onUpdate() {
        this.endedAt = LocalDateTime.now();
    }

    public long getDurationInMinutes() {
        return Duration.between(startedAt, endedAt).toMinutes();
    }
}

