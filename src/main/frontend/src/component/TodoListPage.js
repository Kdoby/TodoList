import TodayBtn from "./TodayBtn";
import InputDate from "./InputDate";
import Todo from "./Todo";
import TodoCategory from "./TodoCategory";

export default function TodoList() {
    return (
        <div>
            <h1>Todo List</h1>
            <div style={{
                 display:"grid",
                 gridTemplateColumns:"1fr 3fr"
                 }}
            >
                <div>
                    <div>Category</div>

                    <div style={{
                            marginTop:"20px"
                    }}>
                        <TodoCategory color={"#d4f0f0"} category={"todo"}/>
                        <TodoCategory color={"#d4f033"} category={"todo2"}/>
                        <TodoCategory color={"#d4f099"} category={"todo3"}/>

                    </div>

                </div>
                <div>
                    <div style={{
                            display:"block",
                            clear:"both",
                            overflow:"hidden"
                         }}
                    >
                        <div style={{float:"left"}}>Todo List</div>
                        <InputDate />
                        <TodayBtn></TodayBtn>
                    </div>

                    <div style={{
                            clear:"both",
                            marginTop:"20px"
                    }}>
                        <Todo title={"brush teeth"}/>
                        <Todo title={"market"}/>
                        <Todo title={"hello"}/>
                        <Todo title={"todolist"}/>
                    T</div>

                </div>
            </div>
        </div>

    );
}