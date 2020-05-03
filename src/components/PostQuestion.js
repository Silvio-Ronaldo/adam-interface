import React, { useState } from 'react';
import api from '../services/api';

function PostQuestion() {
    const[valueQuestion, setValueQuestion] = useState('');

    async function readQuestion(e) {
      e.preventDefault();
      const response = await api.post('/storeQuestion/user/:userId/product/1', {
        question: valueQuestion
      });
      console.log(response.data._id);

      waitResponse(response.data.productId, response.data._id);
    }

    async function waitResponse(productID, questionID) {
      const response = await api.post('/sendMessage/user/1/product/1', {
        question: valueQuestion
      });
      
      searchQuestion(productID, questionID, response.data.answer);
    }

    async function searchQuestion(productID, questionID, answer) {
      await api.post(`/answerQuestion/product/${productID}/question/${questionID}`, {
        answer: answer
      });
    }

    return (  
      <div className="question">
        <center>
          <form onSubmit={(e) => readQuestion(e)}>
            <textarea placeholder="Escreva uma pergunta.." maxLength="2000" onChange={e => setValueQuestion(e.target.value)}></textarea>
            <input type="submit" value="Perguntar"/>
          </form>
        </center>
      </div>
    );
}

export default PostQuestion;