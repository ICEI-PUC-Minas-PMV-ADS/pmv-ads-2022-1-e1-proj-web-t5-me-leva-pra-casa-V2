# Arquitetura da Solução

Os detalhes técnicos utilizados para a solução do projeto serão explicados abaixo 
no qual iremos abordar as linguagens utilizadas, Local Store e a hospedagem do Site.

## Diagrama de componentes

Abaixo iremos demonstrar através de uma figura os componentes que fazem parte da solução.

![NEWArquiteturaDeSolucao](https://user-images.githubusercontent.com/54327906/175758455-3a332aa5-cda8-4bd3-a980-699cea66aeeb.jpg)
<center>Figura 1 - Componentes</center>
<br>
<br>

Os tópicos abaixo descrevem os seguintes módulos que iremos utilizar para a implantação da solução:
- **Navegador** - A interface do sistema será básica. 
  - **Páginas Web** - O desenvolvimento de interfaces WEB irá utilizar as linguagens de um conjunto de arquivos como HTML, CSS, JavaScript e também iremos utilizar imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - O armazenamento será mantido no Navegador, onde serão implementados bancos de dados baseados em JSON. São eles: 
     - **Pesquisa** - As três últimas pesquisas.
     - **ONGs** - A lista de ongs.
     - **Animais** - Lista de animais para doação.
     - **Filtro** - Lista de opções de filtros.

 - **Hospedagem** - Será através do Heroku responsável por manter o site funcionando na internet onde as páginas são mantidas e acessadas pelo navegador.

## Hospedagem

Para hospedagem do site do projeto iremos utilizar o GitHub Pages, O GitHub Pages é um serviço de hospedagem de site estático que usa arquivos HTML, CSS e JavaScript diretamente de um repositório no GitHub e, como opção, executa os arquivos por meio de um processo e publica um site. Você pode ver exemplos de sites do GitHub Pages na coleção de exemplos do GitHub Pages.

> - [Heroku](https://dashboard.heroku.com/apps)
