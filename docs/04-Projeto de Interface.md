
# Projeto de Interface

Dentre as preocupações para a montagem da interface do sistema, mantivemos o foco em questões como agilidade, acessibilidade e usabilidade. O projeto tem um padrão visual em todas as telas que são projetadas para funcionamento em desktops e dispositivos móveis.

## Fluxo de Usuários

O diagrama apresentado na Figura X mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o link: https://marvelapp.com/prototype/i3f082a

<div style="text-align:center">                             A figura X representa o Fluxo de Telas do Usuário.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164332077-26e03f9d-3747-4404-9cbd-d53bd7277314.jpg" width="1000px" />
</div>

## Wireframes

Conforme fluxo de telas do projeto apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem. Tais telas apresentam uma estrutura comum que é apresentada na Figura X. Nesta estrutura, existem 3 grandes blocos, descritos a seguir. 

- **Cabeçalho** - local onde são dispostos elementos fixos de identidade (logo) e navegação principal do site (menu da aplicação).
- **Banner** - Imagem que representa o conceito do projeto.
- **Conteúdo** - apresenta o conteúdo da tela em questão.

 A figura X Representa a Estrutura Padrão do Site.
<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103081269/162961549-8e815cc5-80fd-4780-bc34-86df162af6c3.PNG" width="700px" />
</div>

## Tela Home-Page

A tela de Home-page com base na estrutura padrão traz a Logo, o Menu de Aplicação e Banner, seguido pelo Bloco de conteúdo. Dentre os componentes do Menu estão:

- **Home** tela inicial.
- **Doe**  que leva o usuário à tela  Doações.
- **Adote**  que leva o usuário à tela de Descrição dos animais.
- **ONGs**  que leva o usuário à tela das ONGs e abrigos parceiras do site.
- **Pesquisar**  barra _search_ que leva o usuário à tela de Resultado de animais catalogados ou outras telas.
- **Login**  
- **Cadastre-se**  

O bloco de Conteúdo traz uma pequena descrição sobre o problema e a ideia do projeto. Seguido do subtítulo **Como ajudar?** Com os elementos que vinculam às telas posteriores. 
- **Campanhas de Doação**  que leva o usuário à tela Doações
- **Campanhas de Vacinação**  que leva o usuário à tela de Campanhas de vacinação ativas e suas respectivas datas.

<div style="text-align:center">                             A figura X representa a Tela Inicial.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164314363-fb73aa56-4751-4908-a986-2324a5545fb0.jpg" width="700px" />
</div>

## Tela Ongs

A Tela de Ongs apresenta, no Bloco de Conteúdo, uma descrição detalhada sobre as ONGs/abrigos, ao lado de cada ONG está o ícone que abre a tela Modal de doação para a respectiva instituição. O Bloco de Barra Lateral apresenta os mesmos elementos da Home-Page.

<div style="text-align:center">                             A figura X representa a Tela ONGs.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164315541-9158c746-bca5-4a34-a1c0-7a235b84c6b9.jpg" width="700px" />
</div>

## Tela Doações

A Tela de Doações permite o intermédio das pessoas interessadas em doar algum valor financeiro às Ongs,abrigos e afins. a tela de doações é uma janela modal (surge sobre outras janelas) quando o usuário pressiona o ícone “dinheiro com asas" na tela ONgs. Nesta tela, a intenção de doação é registrada e um número pix é exibido. É visualizada e o usuário pode informar um valor e buscar uma Ong específica ou escolher entre os já sugeridos. Em seguida deve confirmar ou cancelar a intenção. Na sequência, a tela é fechada voltando para o ambiente anterior.

<div style="text-align:center">                             A figura X representa a Tela Doações.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164325940-5e21c139-6085-4c9d-a504-9908c8950061.jpg" width="700px" />
</div>

## Tela Adote

A Tela adote exibe uma lista com diversas opções de animais disponíveis para adoção. A tela mantem um padrão de 3 colunas, cada uma delas possuem várias fotos de animas com uma pequena descrição sobre o mesmo. A pagina será rolável para motrar mais conteúdos que estão abaixo.

A lista é montada respeitando a categoria de escolha do usuário, seja ela cachorros, gatos, etc...
Ao clicar sobre o animal desejado, o usuário será levado ao modal feito para agendar a adoção.

<div style="text-align:center">                             A figura X representa a Tela de Adote.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164315337-bac10f2a-dca4-450d-9bbf-f697462059c5.jpg" width="700px" />
</div>

## Tela de Resultado da Busca

A Tela de Resultado da Busca será responsável por exibir os animais que estarão disponíveis para adoção. A tela possui diversas funções de filtragem e pesquisas para que o usuário consiga encontrar o animal perfeito que procura.

A barra superior esquerda será um campo livre usado para pesquisar os animais, como mostra o exemplo abaixo. Após a barra de pesquisa temos um campo em que o usuário poderá selecionar entre categorias de animais que ele tiver interesse. Após o campo de filtro temos então a paginação dos resultados de busca, quanto maior for a lista de animais disponníveis, maior será a quantidade de páginas.

Logo abaixo temos a lista de animais, formatada em 2 colunas, em que na esquerda será exibida a foto dos animais, acompanhado por seus nomes e um pequeno texto se apresentando, na direita.

<div style="text-align:center">                             A figura X representa a Tela Animais Catalogados.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164320654-fc9afe4f-8f1b-47c9-b0f9-3adc93ce763e.jpg" width="700px" />
</div>

## Processo Adoção

Após a escolha do animal, seja na tela de adote ou nos resultados de busca, o usuário será direcionado para a Tela de Processo de Adoção no qual o adotante terá que se cadastrar informando nome, email, CPF e número de celular, após informar seus dados será exibida na forma de uma janela modal tendo um botão de "cancelar ou salvar", se a tela for cancelada o usuário volta para a página de Descrição de Animais Selecionados, se a tela for salva o usuário receberá uma mensagem de confirmação por e-mail agendando a adoção, informando local e horário.

<div style="text-align:center">                             A figura X Representa a Tela de Inclusão de Comentários.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164325940-5e21c139-6085-4c9d-a504-9908c8950061.jpg" width="500px" />
</div>


