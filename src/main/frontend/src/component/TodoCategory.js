export default function TodoCategory(props){
    return (
        <div style={{width:"100%"}}>
            <div style={{
                    display:"inline",
                    width:"5px",
                    backgroundColor:props.color
            }}>{props.category}</div>
        </div>
    );
}