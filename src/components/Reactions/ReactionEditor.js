import { useState } from 'react';
import TopicContext from './../../context/TopicContext';

function ReactionEditor(props) {
  const [content, setContent] = useState(props.content);

  function onChangeValue(event) {
    setContent(event.target.value);
  }

  function onSave() {
    TopicContext.updateReaction(props.reactionid, {content:content})
      .then(function() {
        props.onSave();
    });
  }

  return (
    <>
      <textarea onChange={onChangeValue} >
        {content}
      </textarea>
      <button onClick={onSave}>
        save
      </button>
    </>
  );
}

export default ReactionEditor;