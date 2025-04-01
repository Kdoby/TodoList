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
                    </div>

                </div>
            </div>
        </div>

    );
}