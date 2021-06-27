import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import ReactionEditor from './ReactionEditor';
import TopicContext from './../../context/TopicContext';
import { MyContext } from '../../context/MyContext';

const textEllipsisStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}
const ReactionRenderer = (props) => {
  const [edit, setEdit] = useState(false)
  const myContext = useContext(MyContext)
  const isEditable = myContext.rootState.theUser.id === props.userid;

  function toggleEdit(){
    setEdit(!edit);
  }

  function onSave(){
    setEdit(false);
    props.onChange();
  }

  function deleteReaction(){
    TopicContext.deleteReaction(props.reactionid)
      .then(function (){
        props.onChange();
      });
  }

  return (
    <div style={{borderRadius: 8, display:'flex', padding:8, textAlign:'left', backgroundColor:'lightgray', marginTop:8}}>

    <span style={{...textEllipsisStyle, fontSize: 14}}>{props.username}</span>

    {
      edit? (
        <ReactionEditor reactionid={props.reactionid} content={props.content} onSave={onSave}/>
      ) : (
        <span style={{...textEllipsisStyle, fontSize: 12}}>{props.content}</span>
      )
    }

    {
      isEditable? (
        <>
          <button onClick={toggleEdit} >
            Wijzig reactie
          </button>
          <button onClick={deleteReaction} >
            Verwijder reactie
          </button>
        </>
      ) : null
    }
    </div>
  )
}

export default ReactionRenderer;