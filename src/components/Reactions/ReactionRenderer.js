import {Link} from "react-router-dom";

const textEllipsisStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
}
const ReactionRenderer = (props) => {
    return (
        <div style={{borderRadius: 8, display:"flex", padding:8, textAlign:"left", backgroundColor:"lightgray", marginTop:8}} >

            <span style={{...textEllipsisStyle, fontSize: 14}}>{props.username}</span>
            <span style={{...textEllipsisStyle, fontSize: 12}}>{props.content}</span>

        </div>
    )
}

export default ReactionRenderer