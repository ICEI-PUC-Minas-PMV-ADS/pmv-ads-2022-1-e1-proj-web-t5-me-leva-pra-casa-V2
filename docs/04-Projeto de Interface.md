
# Projeto de Interface

Dentre as preocupações para a montagem da interface do sistema, mantivemos o foco em questões como agilidade, acessibilidade e usabilidade. O projeto tem um padrão visual em todas as telas que são projetadas para funcionamento em desktops e dispositivos móveis.

## Fluxo de Usuários

O diagrama apresentado na Figura 1 mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o link: https://marvelapp.com/prototype/i3f082a

<div style="text-align:center">                             A figura 1 representa o Fluxo de Telas do Usuário.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164332077-26e03f9d-3747-4404-9cbd-d53bd7277314.jpg" width="1000px" />
</div>

## Wireframes

Conforme fluxo de telas do projeto apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem. Tais telas apresentam uma estrutura comum que é apresentada na Figura 1. Nesta estrutura, existem 3 grandes blocos, descritos a seguir. 

- **Cabeçalho** - local onde são dispostos elementos fixos de identidade (logo) e navegação principal do site (menu da aplicação).
- **Banner** - Imagem que representa o conceito do projeto.
- **Conteúdo** - apresenta o conteúdo da tela em questão.

 A figura 2 representa a Estrutura Padrão do Site.
<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103081269/162961549-8e815cc5-80fd-4780-bc34-86df162af6c3.PNG" width="700px" />
</div>

## Tela Início

A tela de Início com base na estrutura padrão traz a Logo, o Menu de Aplicação e Banner, seguido pelo Bloco de conteúdo. Dentre os componentes do Menu estão:

- **Início** tela inicial.
- **Sobre** que leva o usuário a tela de informações sobre o grupo responsável pelo site.
- **Adote**  que leva o usuário à tela de Descrição dos animais.
- **ONGs**  que leva o usuário à tela das ONGs e abrigos parceiras do site.
- **Pesquisar**  barra _search_ que leva o usuário à tela de Resultado de animais catalogados ou outras telas.
- **Login**  
- **Cadastre-se**
- **Minha Conta**  

O bloco de Conteúdo traz uma pequena descrição sobre o problema e a ideia do projeto.

<div style="text-align:center">                             A figura 3 representa a Tela Inicial.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/167305391-7ae59281-207a-4b9d-a746-cf4ef48c1025.jpg" width="700px" />
</div>

## Tela Ongs

A Tela de Ongs apresenta, no Bloco de Conteúdo, uma descrição detalhada sobre as ONGs/abrigos, ao lado de cada ONG está o ícone que abre a tela Modal de doação para a respectiva instituição. O Bloco de Barra Lateral apresenta os mesmos elementos da Home-Page.

<div style="text-align:center">                             A figura 4 representa a Tela ONGs.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164315541-9158c746-bca5-4a34-a1c0-7a235b84c6b9.jpg" width="700px" />
</div>

Na tela Ong's o usuário poderá fazer uma doação a qualquer instituição que deseja, basta selecionar alguma Ong conforme imagem abaixo:

<div style="text-align:center">                             A figura 5 representa a Tela Doações.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/101758971/164950363-12edaeb2-41dd-4f4b-b9e4-fdf140382cea.jpeg" width="300px" />
</div>


## Tela Adote

A Tela Adote exibe uma lista com diversas opções de animais disponíveis para adoção. A tela mantém um padrão de 3 colunas, cada uma delas possuem várias fotos de animais com uma pequena descrição sobre o mesmo. A página será rolável para motrar mais conteúdos que estão abaixo.

A lista é montada respeitando a categoria de escolha do usuário, seja ela cachorros, gatos, etc...
Ao clicar sobre o animal desejado, o usuário será levado ao modal feito para agendar a adoção.

<div style="text-align:center">                             A figura 6 representa a Tela de Adote.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164315337-bac10f2a-dca4-450d-9bbf-f697462059c5.jpg" width="700px" />
</div>

Quando o usuário clicar em adotar aparecerá uma tela de cadastro e nessa tela terá que ser preenchido o nome, CPF, telefone e o e-mail logo abaixo ficaram informações dos dados para adoção como o endereço da Ong e o horário de atendimento conforme imagem abaixo:
 
 <div style="text-align:center">                     A figura 7 representa a Tela de Cadastro Dentro de Adote        
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164325940-5e21c139-6085-4c9d-a504-9908c8950061.jpg" width="700px" />
</div>


## Tela de Resultado da Busca

A Tela de Resultado da Busca será responsável por exibir os animais que estarão disponíveis para adoção. A tela possui diversas funções de filtragem e pesquisas para que o usuário consiga encontrar o animal perfeito que procura.

A barra superior esquerda será um campo livre usado para pesquisar os animais, como mostra o exemplo abaixo. Após a barra de pesquisa temos um campo em que o usuário poderá selecionar entre categorias de animais que ele tiver interesse. Após o campo de filtro temos então a paginação dos resultados de busca, quanto maior for a lista de animais disponníveis, maior será a quantidade de páginas.

Logo abaixo temos a lista de animais, formatada em 2 colunas, em que na esquerda será exibida a foto dos animais, acompanhado por seus nomes e um pequeno texto se apresentando, na direita.

<div style="text-align:center">                             A figura 9 representa a Tela Animais Catalogados.
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164320654-fc9afe4f-8f1b-47c9-b0f9-3adc93ce763e.jpg" width="700px" />
</div>

## Tela Login

Tela Login está inclusa no Menu de Aplicação da Home Page, que permite ao usuário cadastrado fazer o login no site. Após a confirmação abre-se a tela modal de confirmação.

A figura 10 representa a Tela Login.
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164802699-5f345068-8838-4a04-9167-9436ee8d754f.jpg"  width="700px" />
</div>

## Tela Cadastre-se

Tela Cadastre-se está inclusa no Menu de Aplicação da Home Page, que permite ao usuário se cadastrar no site para postagem de animais, adoção ou atualizar dados das ONGs.

A figura 11 representa a Tela Cadastre-se.
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164802783-6b007924-501d-416a-b109-22afa629d76b.jpg" width="700px" />
</div>

Após a confirmação do usuário, a tela modal de confirmação vem na sequência.

A figura 12 representa a Tela Modal de confirmação.
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/164802820-283798b4-d0f0-478a-8ca6-8584c98596b2.jpg" width="500px" />
</div>
