import React from 'react';

function PostItem({ question, createdAt, answer }) {
  return (
    <div className="post">
      <div className="content">
        <p className="question">{question}</p>
        <p><b>R:</b> {answer ? answer : 'Aguarde a resposta do vendedor.'} <span>{createdAt}</span></p>
      </div>
      <hr />
    </div>
  )
}

export default PostItem;