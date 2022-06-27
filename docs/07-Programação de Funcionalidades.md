# Programação de Funcionalidades
Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são apresentadas na sequência.



**Tela Principal** `Dev Guilherme`

A tela principal do sistema apresenta diversas informações relevantes e divulgações. 

<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/173213695-ac9b5434-5057-4220-957d-1fd907b28e29.jpg" width="700px" />
</div>

**Requisitos atendidos**

RF-003, RF-004, RF-005, RF-009, RF-010

**Artefatos da funcionalidade**

	- home.html
	- home.css
	- style.css

**Tela Adote** `Dev Warlen`

Tela que será exibido diversas opções de animais para adoção. Todos os dados são armazenadas no LocalStorage.

<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/101758971/173205284-8033a943-7cbe-4d48-92aa-4d89a0f2ce79.jpg" width="700px" />
</div>

**Requisitos atendidos**

RF-01, RF-06, RF-07, RF-12, 

**Artefatos da funcionalidade**

	- adote.html
	- adote.js
      - style.css
	- template/

**Tela Minha Conta - Meu Perfil** `Dev Guilherme`

Tela quer permitirá o usuário alterar as informações referentes a própria conta ou fazer a exclusão da mesma, após efetuar o login.

<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/173213697-87ed5959-9ca2-43e1-b5ef-d3dd206aee94.jpg" width="700px" />
</div>

**Requisitos atendidos**

RF-025

**Artefatos da funcionalidade**

	- minha_conta_perfil.html
	- home.css
	- style.css

**Tela Minha Conta - Histórico de Doações** 
`Dev Guilherme fez o local e Jéssica fez as funcionalidades`

Tela quer permitirá o usuário ver informações referentes as doações feitas por ele através da ONGs, após efetuar o login.

<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103081069/173258038-e2712c7d-89cb-436b-bb15-46bcb2aa9088.png" width="700px" />
</div>

**Requisitos atendidos**

RF-03.

**Artefatos da funcionalidade**

	- minha_conta_historico.html
	- home.css
	- ONGs.html
	- ONGS_script.js
	- ONGS.css
	
**Tela modal cadastro de animais** `Dev Warlen`

Tela que será Feito o cadastro de animais para adoção. Todos os dados são armazenadas no LocalStorage.

<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/101758971/173205690-518212db-c345-4755-8dea-46cac9c41eca.jpg" width="700px" />
</div>

**Requisitos atendidos**

RF-13 

**Artefatos da funcionalidade**

	- minha_conta_animais.html
	- script.js
    - style.css
	- template/

**Tela cadastro animais** `Dev Warlen`

Tela que será feita a visualização e edição dos animais disponíveis para adoção. Todos os dados são armazenadas no LocalStorage.

<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/101758971/173205852-49f3138e-b288-4b24-b5ba-27b1b329c74a.jpg" width="700px" />
</div>

**Requisitos atendidos**

RF-01, RF-06, RF-07, RF-12, RF-17

**Artefatos da funcionalidade**

	- minha_conta_animais.html
	- script.js
    - style.css
	- template/


**Tela ONGs** `Dev Jéssica`

Tela onde será exibido as ONGs cadatradas. Todos os dados são armazenadas no LocalStorage com estruturas dados baseada em JSON.

<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103081069/173258284-8002c4e6-2b9d-42a3-a230-24a0a1f04a02.png"
 width="700px" />
</div>

**Requisitos atendidos**

RF-03, RF-09, RF-10, RF-11, RF-22, RF-23, RF-24.

**Artefatos da funcionalidade**

	- ONGs.html
	- ONGS_script.js
	- ONGS.css


**Tela Doação** `Dev Jéssica`

Tela será exibido no local ONGs, após clicar no botão para fazer a doação ela permite armazenar o valor que será doado juntamento com o compronte essas informações serão salvas em Minha Conta - Histórico de Doações.

<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103081069/173258316-dfc25af1-e530-4c88-9102-6723efd3f3f9.png" width="700px" />
</div>

**Requisitos atendidos**

RF-003, RF-09, RF-10, RF-11, RF-22, RF-23, RF-24

**Artefatos da funcionalidade**

    - ONGs.html
	- ONGS_script.js
	- ONGS.css
	
**Tela Cadastro** `Dev Elizangela e Ian`

Tela onde será exibido o formulário de cadastro, com ferramentas de cadastrar, alterar, excluir, limpar formulário ou pesquisar usuários. Todos os dados são armazenadas no LocalStorage com estruturas dados baseada em JSON.

<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103081269/173230154-d3b36709-ef61-4bb2-9425-30b48683f1e6.PNG" width="700px" />
</div>

**Requisitos atendidos**

RF-06, RF-13, RF-14, RF-17 e RF-25.

**Artefatos da funcionalidade**

	- cadastr_Crud.html
	- script.js
	- app.js
	- cadastro_style.css
	- img/
	- template/
	

**Tela CRUD ADM** `Dev Guilherme`

Tela quer permitirá aos administradores acessar os usuários cadastrados na plataforma e fazer alterações nos dados deles e eventuais exclusões que venham a se fazer necessárias.

<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103080396/173213699-3bb39a71-9f8b-4394-9b98-c07829b15f48.jpg" width="700px" />
</div>

**Requisitos atendidos**



**Artefatos da funcionalidade**

	- CRUD_usuarios.html
	- CRUD_usuarios.js
	- home.css


**Tela Login** `Dev Breno`

Tela onde será exibido o formulário de login, com campos para preenchimento de e-mail e senha, link direcionado para a tela de cadastro e botão entrar.

<div style="text-align:center">                            
</div>
<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/103541502/173262046-95f9387a-ccfa-4ae2-9acb-df444a02b7bb.png" width="700px" />
</div>

**Requisitos atendidos**



**Artefatos da funcionalidade**

	- homelogin.css
	- login_style.css
	- login.html
	- login.js
