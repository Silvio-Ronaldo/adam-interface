import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import api from '../services/api';

function PostList() {
  const[questions, setQuestions] = useState([]);

  useEffect(() => {
    async function listItems() {
      const response = await api.get('/getQuestions/product/1');
      console.log(response);

      if(response.data) {
        setQuestions(response.data)
      }
    }

    listItems();
  }, []);

  return (
    <div className="postlist">
      {questions.map(question => (
        <PostItem key={question._id} {...question} />
      ))}
    </div>
  );
}

export default PostList;