create table category
(
    id bigint AUTO_INCREMENT PRIMARY KEY,
    user_id varchar(50) NOT NULL,
    name varchar(50) DEFAULT '프로젝트1',
    color CHAR(9) DEFAULT '#FFFFFF',
    is_active BOOLEAN DEFAULT true
);

create table todo
(
    id bigint AUTO_INCREMENT PRIMARY KEY,
    user_id varchar(50) NOT NULL,
    title varchar(255) NOT NULL,
    is_done BOOLEAN DEFAULT false,
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
insert into category (user_id, name, is_active) values('test1', 'cate1', true);
insert into category (user_id, name, is_active) values('test1', 'cate2', false);
insert into category (user_id, name, is_active) values('test1', 'cate3', true);
insert into category (user_id, name, is_active) values('test1', 'cate4', true);
insert into category (user_id, name, is_active) values('test1', 'cate1', false);

insert into todo (user_id, title, todo_date, category_id) values ('test1', 'todo1', '2025-01-01', 1);
insert into todo (user_id, title, todo_date, category_id) values ('test1', 'todo2', '2025-01-01', 1);
insert into todo (user_id, title, todo_date, category_id) values ('test1', 'todo3', '2025-01-01', 1);
insert into todo (user_id, title, todo_date, category_id) values ('test1', 'todo4', '2025-01-01', 2);
insert into todo (user_id, title, todo_date, category_id) values ('test1', 'todo1', '2025-01-01', 2);
insert into todo (user_id, title, todo_date, category_id) values ('test1', 'todo1', '2025-01-01', 3);
insert into todo (user_id, title, todo_date, category_id) values ('test1', 'todo2', '2025-01-01', 4);
insert into todo (user_id, title, todo_date, category_id) values ('test1', 'todo3', '2025-01-01', 3);
insert into todo (user_id, title, todo_date, category_id) values ('test1', 'todo4', '2025-01-01', 4);
insert into todo (user_id, title, todo_date, category_id) values ('test1', 'todo1', '2025-01-01', 5);

select * from todo, category where todo.category_id=category.id and todo.user_id='test1' and todo.todo_date='2025-01-01' order by is_active desc;
*/
//long duration = Duration.between(startedAt, endedAt).toMinutes();