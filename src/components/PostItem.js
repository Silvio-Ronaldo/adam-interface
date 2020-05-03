import React from 'react';

function PostItem({ question, createdAt, answer }) {
  return (
    <div className="post">
      <div className="content">
        <p>{question}</p>
        <p>R: {answer} <span>{createdAt}</span></p>
      </div>
      <hr />
    </div>
  )
}

export default PostItem;