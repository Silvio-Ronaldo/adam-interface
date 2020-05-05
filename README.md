<p align="center">
  <img src="https://i.imgur.com/xHUt3SP.jpg" height="260" width="320" />
</p>

# ADAM

**Este é o repositório da interface para teste e simulação da seção de *Perguntas* disponível na página de um produto no Mercado Livre. O objetivo é interagir com o ADAM e sua capacidade de resposta. Tal interface não faz parte da solução oferecida pelo produto, mas ajuda a visualizar o poder da solução como se estivesse presente no marketplace.**

### Introdução
O ADAM surgiu de uma crescente necessidade de solucionar o problema da quantidade de perguntas que um lojista de marketplace recebe. O fluxo gerado é muito grande e, com isso, o lojista não tem como responder e prestar um bom atendimento a todos. No contexto da COVID-19, esse problema tornou-se urgente, considerando que as vendas online estão sendo mais procuradas.

### A Ideia
A ideia por trás do ADAM é simples, mas poderosa: automatizar respostas. O ADAM consegue responder grande parte das dúvidas dos clientes, pois a maioria das perguntas têm respostas fixas ou apresentam respostas na própria descrição do produto. Em breve, o ADAM também será capaz de aprender com respostas manuais que ele até então não sabia e aumentar o nível de automação.

### Estrutura do ADAM
O ADAM foi projetado utilizando algumas das ferramentas mais poderosas do mercado, tais como, IBM Watson Assistant e IBM Cloud Fuctions. Para saber mais sobre a infraestrutura do ADAM e detalhes de implementação, consulte o repositório e a documentação disponíveis no link abaixo:

**https://github.com/JoedSilva18/adam**

### Conceitos importantes
#### Níveis
No link disposto acima há uma explicação mais detalhada e completa sobre o conceito de níveis usado no ADAM. Porém, aqui vou dar uma explicação mais breve para contextualizar como o ADAM funciona e como ele divide a pergunta que chega até ele. 
Basicamente, o ADAM separa as perguntas em 3 (três) níveis de complexidade. Isso permite efetuar uma automação mais rápida e tratar assertivamente aquilo que não é passível de automação. Vamos dar uma olhada no que cada nível representa:

- Nível 1: Informações Comuns</br>
Nesse nível, estão classificadas as perguntas que têm respostas comuns, independente de produto, lojista ou informação descrita. Essas perguntas são previamente programadas e o ADAM consegue respondê-las com sucesso total. Alguns exemplos de perguntas desse nível são: 
  - *Tem garantia?*
  - *O produto é original?*
  
- Nível 2: Informações do Produto</br>
Em um segundo momento estão as perguntas que variam de produto para produto e de lojista para lojista. Porém, essas informações ainda têm uma característica em comum: estão presentes na descrição do produto. O ADAM é treinado e consegue ler a descrição do produto e buscar por uma resposta adequada à pergunta do cliente. As descrições não são padronizadas e isso faz esse nível apresentar uma complexidade maior. Alguns exemplos são:
  - *Qual a cor?*
  - *Qual o modelo?*
  
- Nível 3: Informações Extras</br>
Por fim, no último nível e mais complexo dos três, temos as perguntas que não são comuns e não estão presentes na descrição do produto. Estas perguntas não podem ser respondidas, inicialmente, pelo ADAM e são as únicas repassadas para resposta manual do lojista. Entram aqui, também, perguntas ou comentários não esperados que fogem do escopo do produto. Em breve, o ADAM poderá guardar a resposta do lojista e aprender com ela, para que aos poucos, possa automatizar esse nível também. Exemplos:
  - *Você vende outros produtos?*
  - *hhh*
  - *8sd7sdsdusk*
  
### Como testar
É possível testar o ADAM  e seu funcionamento. Você pode fazer uma pergunta para ele referente ao nível 1 e nível 2. Ele já tem uma certa autonomia para responder perguntas desses dois níveis (ainda baixa, considerando que é um teste e utilizamos uma base pequena de produtos e atributos para fins de hackathon). Perguntas de nível 3 ainda não retornarão respostas, mas em breve estarão disponíveis. Para acessar a interface de simulação e testes, clique no link a seguir:

**https://silvio-ronaldo.github.io/adam-interface/**

### Roadmap (Em breve)
Para o futuro pensamos em expandir o ADAM e oferecer novas funcionalidades. Segue uma imagem ilustrativa do que planejamos e esperamos para a vida próxima do ADAM:

<p align="center">
  <img src="https://i.imgur.com/BQ2EFvx.png" height="360" width="720" />
</p>

### Demonstração 
Para ver uma pequena demonstração do uso da interface sendo testada para várias perguntas diferentes e de níveis diferentes, acesse o link abaixo:

**https://www.youtube.com/watch?v=4lGKSAq--VA**

### Muito obrigado!
Se você gostou do ADAM, por favor deixe uma estrela ou entre em contato para saber mais. Não se esqueça de acessar os links disponibilizados acima para entender melhor o que ele é o que ele faz. Um forte abraço e até mais!
