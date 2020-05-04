import React, { useState, useEffect } from 'react';
import {
  format,
  parseISO
} from 'date-fns';

function PostItem({ question, createdAt, answer }) {

  const [formattedDate, setformattedDate] = useState('');

  useEffect(() => {
    function formatDate() {
      const parsedDate = parseISO(createdAt);
      const date = format(
        parsedDate,
        "'Dia' dd/MM', às ' HH:mm'h'"
      );

      setformattedDate(date);
    }

    formatDate();
  }, [createdAt])

  return (
    <div className="post">
      <div className="content">
        <p className="question">{question}</p>
        <p><b>R:</b> {answer ? answer : 'Aguarde a resposta do vendedor.'} <span>{answer ? formattedDate : null}</span></p>
      </div>
      <hr />
    </div>
  )
}

export default PostItem;