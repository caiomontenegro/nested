<h1> Olá você!! </h1>

<h2>Introdução</h2>

<p>Este é um um teste de desenvolvimento front-end Vue.js</p>
<img src="assets/img/capturar.png" alt="nest">

Trata-se do consumo de um arquivo.json, onde o usuário tem a liberdade
para selecionar o usuário e seus dependentes. Funcionalidades:

- Selecionar usuário.
- Selecionar usuário pai e dependentes.
- Ocultar ou exibir dependentes do usuário pai, ao clicar no mesmo.
- Consumo de dados de arquivos.json dinamico.

Tecnologias usadas:

- Javascript
- HTML
- CSS
- SASS pre processor
- Vue.js
- Nuxt.js

A aplicação foi desenvolvida em inglês para prática da língua. 
Extras:

- Componentização
- Nuxt 3 
- Arquitetura BEM CSS 1001
- Componentes feitos manualmente, sem o uso de bootstrap ou tailwind
- Conventional Commits

Desafios auto impostos:

- Trabalhar sem utilizar memórias de cache, cookies, ou gerenciamento de estados (Vuex, Pinia, useState)
- Trabalhar apenas com um component recursivo, que faça a renderização dos dados de forma
dinânima
- Todos os dados devem ser passados via props e emits, trafegando exclusivamente nos componentes.

</br></br></br>

<h2>Rodar o sistema</h2>

Tutorial para rodar a aplicação localmente:

1 - Abra um terminal em sua máquina, e certifique-se de ter instalado o 
programa de versionamento de código Git. Para baixar acesse:

https://git-scm.com/

2 - Navegue para a pasta que deseja baixar estes repositório, utilizando:

    cd + nome da pasta - Para avançar o diretório.
    cd .. - Para voltar um diretório
    ls - Para visualizar as pastar do diretório atual
    mkdir + "nome" - Para criar uma nova pasta com nome informado

3 - Rode abaixo, para baixar o projeto:

    git clone https://github.com/caiomontenegro/nest.git

4 - Abra o projeto no terminal:

    cd nest

5 - Após baixar o projeto, rode o abaixo para instalar todos os pacotes
e dependências necessárias para rodar o projeto:

    yarn 

6 - Em seguida, rode o comando abaixo, para buildar o projeto em localhost.:

    yarn dev

Obs: A porta na qual o sistema irá a aplicação pode variar. Verique no terminal
em portal localhost o projeto será aberto. Por padrão a rota será:

http://localhost:3000/

Alguns terminais podem gerar conflitos, recomendo o terminal cmd do editor 
VSCode, no qual esta aplicação foi desenvolvida.

</br></br></br>

<h2>Uso da Aplicação</h2>

Apesar do conceito da aplicação ser extremamente forte e usado no mercado de 
sistemas WEB, a aplicação é bem simples. 

O objetivo do desenvolvedor, foi criar algo que usuário possa acessar e interagir
sem a necessidade de um manual ou tutorial de uso. 

Sendo assim, fique a vontade para "esmiuçar". Caso não entenda algo, ou fique
com dúvidas em determinado ponto, significa que o teste foi falho neste ponto.
Porém não hesite em entrar em contato comigo para expor o erro. Meus contatos
estão no rodapé deste documento.


</br></br></br>

<h2>Melhorias</h2>

Observações:

Infelizmente, devido a tempo escasso. Somente as principais funcionalidades 
serão entregues no prazo da data (19/03). Bugs e melhorias ainda serão feitas!

Bugs encontrados, e que serão corrigidos:

- A funcionalidade para determinar o checkbox como indeterminate tem um comportamento
inadequado, como um component pai é ativado em decorrencia de seus usuários filhos.
- Ao desabilitar um usuário filho, o usuário pai permanece ativado.

Possíveis melhorias:

- Utilizar gerenciamento de estados para melhor manutenção de código
- Realizar uma estilização mais refinada, manualmente ou com Bootstrap ou Tailwind
- SASS - A aplicação foi estilizada por SCSS, que oferece inúmeras funcionalidades nas quais
não foram implementadas, por se tratar de projeto pequeno. Por exemplo:
Fazer uso das propriedades SASS.  (Padronização e desempenho)
- Cypress - Escrever testes e2e, de todas as funcionadalides, âncoras, botões, intereções
e também um mock local para consultas, em caso de API FIrebase fora do ar.
A princípio, os testes seriam feitos, porém devido a falta de tempo para o desenvolvimento, 
será feito posteriormente.
- Uitilizar cookies e cache para armazenar os dados preenchidos pelo usuário.
- Eslint - Para padronização, escalabilidade e melhoria na manutenção do código. Essencial
para todos os tipos de desenvolvimentos.


Contato:
email: caio.dev17@gmail.com </br>
linkedin: https://www.linkedin.com/in/caio-montenegro/
