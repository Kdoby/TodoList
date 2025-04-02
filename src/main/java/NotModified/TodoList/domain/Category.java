package NotModified.TodoList.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

@Data
@Entity
@Table(name = "category")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert  // default 값이 자동으로 들어가도록
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(name = "name")
    private String name;

    @Column(name = "category_color")
    private String categoryColor = "#FFFFFF";
}
