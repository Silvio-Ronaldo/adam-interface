<p align="center">
  <img src="https://i.imgur.com/xHUt3SP.jpg" height="260" width="320" />
</p>

<p align="center">
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue" alt="ADAM interface is released under the MIT license" />
  </a>
  <a href="https://GitHub.com/Silvio-Ronaldo/adam-interface/graphs/commit-activity">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen" alt="ADAM interface is currently maintained by Silvio Ronaldo" />
  </a>
  <a href="https://silvio-ronaldo.github.io/adam-interface/">
    <img src="https://img.shields.io/badge/website-up-brightgreen" alt="ADAM interface website is active" />
  </a>
  <a href="https://GitHub.com/Silvio-Ronaldo/adam-interface/network/">
    <img src="https://img.shields.io/github/forks/Silvio-Ronaldo/adam-interface?style=social" alt="This is the number of forks in this repository" />
  </a>
  <a href="https://GitHub.com/Silvio-Ronaldo/adam-interface/stargazers/">
    <img src="https://img.shields.io/github/stars/Silvio-Ronaldo/adam-interface?style=social" alt="This is the number of stars in this repository" />
  </a>
  <a href="https://github.com/Naereen/badges">
    <img src="https://img.shields.io/badge/badge-awesome-brightgreen" alt="Badges are awesome" />
  </a>
</p>

<h1>🤖 ADAM</h1>

<p><strong>Este é o repositório da interface para teste e simulação da seção de <i>Perguntas</i> disponível na página de um produto no Mercado Livre. O objetivo é interagir com o ADAM e sua capacidade de resposta. Tal interface não faz parte da solução oferecida pelo produto, mas ajuda a visualizar o poder da solução como se estivesse presente no marketplace.</strong></p>


<h2>
  📋 Tabela de conteúdos
</h2>
<ul>
  <li><a href="https://github.com/Silvio-Ronaldo/adam-interface#-introdução">Introdução</a></li>
  <li><a href="https://github.com/Silvio-Ronaldo/adam-interface#-a-ideia">A ideia</a></li>
  <li><a href="https://github.com/Silvio-Ronaldo/adam-interface#%EF%B8%8F-estrutura-do-adam">Estrutura do ADAM</a></li>
  <li><a href="https://github.com/Silvio-Ronaldo/adam-interface#-conceitos-importantes">Conceitos importantes</a></li>
  <li><a href="https://github.com/Silvio-Ronaldo/adam-interface#-como-testar">Como testar</a></li>
  <li><a href="https://github.com/Silvio-Ronaldo/adam-interface#-roadmap-em-breve">Roadmap</a></li>
  <li><a href="https://github.com/Silvio-Ronaldo/adam-interface#%EF%B8%8F-demonstração">Demonstração</a></li>
  <li><a href="https://github.com/Silvio-Ronaldo/adam-interface#-contribuidores">Contribuidores</a></li>
  <li><a href="https://github.com/Silvio-Ronaldo/adam-interface#-autor">Autor</a></li>
  <li><a href="https://github.com/Silvio-Ronaldo/adam-interface#%EF%B8%8F-license">Licença</a></li>
</ul>


<h2>📯 Introdução</h2>
<p>O ADAM surgiu de uma crescente necessidade de solucionar o problema da quantidade de perguntas que um lojista de marketplace recebe. O fluxo gerado é muito grande e, com isso, o lojista não tem como responder e prestar um bom atendimento a todos. No contexto da COVID-19, esse problema tornou-se urgente, considerando que as vendas online estão sendo mais procuradas.</p>


<h2>💡 A Ideia</h2>
<p>A ideia por trás do ADAM é simples, mas poderosa: automatizar respostas. O ADAM consegue responder grande parte das dúvidas dos clientes, pois a maioria das perguntas têm respostas fixas ou apresentam respostas na própria descrição do produto. Em breve, o ADAM também será capaz de aprender com respostas manuais que ele até então não sabia e aumentar o nível de automação.</p>


<h2>⛓️ Estrutura do ADAM</h2>
<p>O ADAM foi projetado utilizando algumas das ferramentas mais poderosas do mercado, tais como, IBM Watson Assistant e IBM Cloud Fuctions. Para saber mais sobre a infraestrutura do ADAM e detalhes de implementação, consulte o repositório e a documentação disponíveis no link a seguir: <strong>https://github.com/JoedSilva18/adam</strong></p>


<h2>❗ Conceitos importantes</h2>
<h3>Níveis</h3>
<p>No link disposto acima há uma explicação mais detalhada e completa sobre o conceito de níveis usado no ADAM. Porém, aqui vou dar uma explicação mais breve para contextualizar como o ADAM funciona e como ele divide a pergunta que chega até ele.</p>
<p>Basicamente, o ADAM separa as perguntas em 3 (três) níveis de complexidade. Isso permite efetuar uma automação mais rápida e tratar assertivamente aquilo que não é passível de automação. Vamos dar uma olhada no que cada nível representa:</p>

- Nível 1: <strong>Informações Comuns</strong></br>
Nesse nível, estão classificadas as perguntas que têm respostas comuns, independente de produto, lojista ou informação descrita. Essas perguntas são previamente programadas e o ADAM consegue respondê-las com sucesso total. Alguns exemplos de perguntas desse nível são:
  - *Tem garantia?*
  - *O produto é original?*
  
- Nível 2: <strong>Informações do Produto</strong></br>
Em um segundo momento estão as perguntas que variam de produto para produto e de lojista para lojista. Porém, essas informações ainda têm uma característica em comum: estão presentes na descrição do produto. O ADAM é treinado e consegue ler a descrição do produto e buscar por uma resposta adequada à pergunta do cliente. As descrições não são padronizadas e isso faz esse nível apresentar uma complexidade maior. Alguns exemplos são:
  - *Qual a cor?*
  - *Qual o modelo?*
  
- Nível 3: <strong>Informações Extras</strong></br>
Por fim, no último nível e mais complexo dos três, temos as perguntas que não são comuns e não estão presentes na descrição do produto. Estas perguntas não podem ser respondidas, inicialmente, pelo ADAM e são as únicas repassadas para resposta manual do lojista. Entram aqui, também, perguntas ou comentários não esperados que fogem do escopo do produto. Em breve, o ADAM poderá guardar a resposta do lojista e aprender com ela, para que aos poucos, possa automatizar esse nível também. Exemplos:
  - *Você vende outros produtos?*
  - *hhh*
  - *8sd7sdsdusk*
  
  
<h2>🔬 Como testar</h2>
<p>É possível testar o ADAM  e seu funcionamento. Você pode fazer uma pergunta para ele referente ao nível 1 e nível 2. Ele já tem uma certa autonomia para responder perguntas desses dois níveis (ainda baixa, considerando que é um teste e utilizamos uma base pequena de produtos e atributos para fins de hackathon). Perguntas de nível 3 ainda não retornarão respostas, mas em breve estarão disponíveis. Para acessar a interface de simulação e testes, clique no link a seguir: <strong>https://silvio-ronaldo.github.io/adam-interface/</strong></p>


<h2>🔮 Roadmap (Em breve)</h2>
<p>Para o futuro pensamos em expandir o ADAM e oferecer novas funcionalidades. Segue uma imagem ilustrativa do que planejamos e esperamos para a vida próxima do ADAM:</p>

<p align="center">
  <img src="https://i.imgur.com/BQ2EFvx.png" height="360" width="720" />
</p>


<h2>🖥️ Demonstração</h2>
<p>Para ver uma pequena demonstração do uso da interface sendo testada para várias perguntas diferentes e de níveis diferentes, acesse o link: <strong>https://www.youtube.com/watch?v=4lGKSAq--VA</strong></p>


<h2>🤝 Contribuidores</h2>
<table>
  <tr>
    <td align="center"><a href="https://github.com/JoedSilva18"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/41526188?v=4" width="100px;" alt="Joed Silva"/><br /><sub><b>Joed Silva</b></sub></a><br /><a href="https://github.com/JoedSilva18" title="Joed Silva">☕</a></td>
    <td align="center"><a href="https://github.com/Dorivis"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/15651259?v=4" width="100px;" alt="Dorival"/><br /><sub><b>Dorival</b></sub></a><br /><a href="https://github.com/Dorivis" title="Dorival">☕</a></td>
  </tr>
</table>


<h2>👽 Autor</h2>
<table>
  <tr>
    <td align="center"><a href="https://github.com/Silvio-Ronaldo"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/48893927?v=4" width="100px;" alt="Silvio Ronaldo"/><br /><sub><b>Silvio Ronaldo</b></sub></a><br /><a href="https://github.com/Silvio-Ronaldo" title="Silvio Ronaldo">🍀</a></td>
  </tr>
</table>

<p>Leave your star, fork the project or open a pull request ❤️</p>
<p>Contact me on social networks: </p>
<p><a href="https://twitter.com/sivirinoo"><img src="https://img.shields.io/twitter/follow/sivirinoo?style=social" alt="Silvio Ronaldo's Twitter" /></a>
<a href="https://br.linkedin.com/in/silvio-ronaldo77"><img src="https://img.shields.io/badge/-Silvio-blue?style=flat&logo=Linkedin&logoColor=white" alt="Silvio Ronaldo's LinkedIn" /></a></p> 


<h2>⚖️ License</h2>
<p><strong>Podcastr is MIT licensed, as found in the <a href="./LICENSE">LICENSE file</a>.</strong></p>
