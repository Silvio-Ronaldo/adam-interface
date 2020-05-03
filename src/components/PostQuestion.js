import React, { Component } from 'react';

class PostQuestion extends Component {
  render() {
    return (  
      <div className="question">
        <center>
            <textarea placeholder="Escreva uma pergunta.." maxLength="2000"></textarea>
            <input type="button" value="Perguntar"/>
        </center>
      </div>
    );
  }
}

export default PostQuestion;