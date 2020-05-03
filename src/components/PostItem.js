import React from 'react';

function PostItem({ pergunta, date, resposta }) {
  return (
    <div className="post">
      <div className="content">
        <p>{pergunta}</p>
        <p>R: {resposta} <span>{date}</span></p>
      </div>
      <hr />
    </div>
  )
}

export default PostItem;