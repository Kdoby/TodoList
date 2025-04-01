package NotModified.TodoList.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "todo")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(name = "title")
    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT))
    private Category category;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "is_done")
    private Boolean is_done = false;

    @Column(name = "todo_date")
    private LocalDate todoDate;
}
