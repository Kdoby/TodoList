package NotModified.TodoList.domain;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "study_log")
public class StudyLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



}
