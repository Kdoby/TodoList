create table category
(
    id bigint AUTO_INCREMENT PRIMARY KEY,
    user_id varchar(50) NOT NULL,
    name varchar(50) DEFAULT '프로젝트1',
    color CHAR(9) DEFAULT '#FFFFFF',
    is_active TINYINT DEFAULT 1
);

create table todo
(
    id bigint AUTO_INCREMENT PRIMARY KEY,
    user_id varchar(50) NOT NULL,
    title varchar(255) NOT NULL,
    is_done TINYINT DEFAULT 0,
    todo_date DATE,
    category_id bigint,
    FOREIGN KEY(category_id) REFERENCES category(id) ON DELETE CASCADE
);

create table study_log
(
    id bigint AUTO_INCREMENT PRIMARY KEY,
    todo_id bigint NOT NULL,
    started_at DATETIME NOT NULL,
    ended_at DATETIME NOT NULL,
    FOREIGN KEY(todo_id) REFERENCES todo(id) ON DELETE CASCADE
);

// test query
/*
insert into category (user_id, name) values ('test1', 'cate1');
insert into todo (user_id, title, todo_date, category_id) values ('test1', 'todo1', '2025-01-01', 1);
*/
//long duration = Duration.between(startedAt, endedAt).toMinutes();