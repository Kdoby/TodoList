create table category
(
    id bigint AUTO_INCREMENT PRIMARY KEY,
    user_id varchar(50) NOT NULL,
    name varchar(50) DEFAULT '프로젝트1',
    category_color CHAR(9) DEFAULT '#FFFFFF'
);

create table todo
(
    id bigint AUTO_INCREMENT PRIMARY KEY,
    user_id varchar(50) NOT NULL,
    title varchar(255) NOT NULL,
    category_id bigint,
    category_name varchar(50),
    is_done tinyint DEFAULT 0,
    todo_date DATE,
    FOREIGN KEY(category_id) REFERENCES category(id) ON DELETE SET NULL
);

create table study_log
(
    id bigint AUTO_INCREMENT PRIMARY KEY,
    todo_id bigint NOT NULL,
    started_at DATETIME NOT NULL,
    ended_at DATETIME NOT NULL,
    FOREIGN KEY(todo_id) REFERENCES todo(id)
);

//long duration = Duration.between(startedAt, endedAt).toMinutes();