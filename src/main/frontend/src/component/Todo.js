export default function Todo(props){
    return (
        <div>
            <input type="checkbox"></input> <span>{props.title}</span>
        </div>
    );
}