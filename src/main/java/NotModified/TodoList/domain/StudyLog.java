package NotModified.TodoList.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@Entity
@Table(name = "study_log")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
public class StudyLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(name = "todo_id")
    private Long todoId;

    @Column(name = "todo_title")
    private String todoTitle;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "category_color")
    private String categoryColor;

    @Column(name = "start_time")
    private LocalDateTime startTime;

    @Column(name = "end_time")
    private LocalDateTime endTime;

    @Column(name = "log_date")
    private LocalDate logDate;

    @Column(name = "duration", nullable = false)
    private Integer duration;

    @Column(name = "is_manual")
    private Boolean isManual;
}

