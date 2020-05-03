import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        pergunta: 'Qual a cor do produto?',
        date: '28/2/2020 17:26',
        resposta: 'Temos na cor preta'
      },
      {
        id: 2,
        pergunta: 'Obrigado',
        date: '30/1/2020 17:20',
        resposta: 'De nada '
      },
      {
        id: 3,
        pergunta: 'Catapimbas',
        date: '22/1/2020 10:26',
        resposta: 'Desculpe, não entendi sua pergunta'
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;