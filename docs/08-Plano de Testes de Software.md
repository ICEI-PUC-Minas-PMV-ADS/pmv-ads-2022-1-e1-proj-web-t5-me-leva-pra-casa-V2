# Plano de Testes de Software


Os requisitos para realização dos testes de software são:
	-Site publicado na Internet
	-Navegador da Internet - Chrome, Firefox ou Edge
	-Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no site são descritos a seguir.

**Caso de Teste: CT-01 - Tela de Início**

Requisitos Associados:

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A plataforma deve promover a divulgação dos animais. | ALTA | 
|RF-002|A plataforma deve promover campanha de conscientização contra o abandono dos animais.| ALTA |
|RF-003| A plataforma deve divulgar campanhas para arrecadação de fundos para ONGs Abrigos e afins. | ALTA | 
|RF-004| A plataforma deve exibir um calendário de vacinação.  | ALTA | 
|RF-005| A plataforma deve divulgar campanhas de castração dos animais. | ALTA | 

Passos:

	- 1) Ao logar na aplicação, sera redirecionado para a tela de início

	- 2) Verificar as informações de animais e divulgações do site

	- 3) Visualizar a página principal e sua responsividade

Critérios de Êxito:
	- Visualizar alguns animais e diversas notícias como conscientizações, arrecadação de fundos para
	ONGs, calendário de vacínas e etc...


**Caso de Teste: CT-02 - Tela de Cadastro**

Requisitos Associados:

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-014| A plataforma deve oferecer a funcionalidade de cadastro para todos usuários. | ALTA | 


Passos:

	- 1) Na tela de login, clicar em cadastre-se

	- 2) Preencher as informações requeridas e criar o usuario

Critérios de Êxito:
	- Validar campos, informções, caracteres e se o usuario foi criado em local storage. Testar a funcionalidade
	de limpar e responsividade.


**Caso de Teste: CT-03 - Tela de ONGs**
Requisitos Associados:

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-003| A plataforma deve divulgar campanhas para arrecadação de fundos para ONGs Abrigos e afins. | ALTA | 
|RF-022| A plataforma deve permitir que os usuários entrem em contato com as ONGs. | BAIXA | 


Passos:

	- 1) Ao logar, clicar sobre a aba: ONGs

	- 2) Visualizar as opções de ONGs e testar a doação

Critérios de Êxito:
	- Validar as informações das ONGs listadas, e testar o modal e funcionalidades dentro dele para
	doação via PIX.



**Caso de Teste: CT-04 - Tela de Login**
Requisitos Associados:

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-010| No cabeçalho deve conter uma caixa destinada a login/sair, cadastre-se e minha conta. | ALTA | 


Passos:

	- 1) Ao realizar o cadastro, verificar se seu login ira ser executado

Critérios de Êxito:
	- Após preencher o email e senha informados anteriormente, validar se o seu usuário esta correto
	e se suas informações estão passando e sendo analisadas.


**Caso de Teste: CT-05 - Tela de Adote**
Requisitos Associados:

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A plataforma deve promover a divulgação dos animais. | ALTA | 
|RF-002|A plataforma deve promover campanha de conscientização contra o abandono dos animais.| ALTA |,
|RF-006| A plataforma deve oferecer um menu adicional que permita ao usuário divulgar um animal para ser adotado | ALTA | 
|RF-012| A Plataforma deve apresentar, para cada animal, uma imagem correspondente e uma breve descrição sobre o mesmo. (Thumbnail) | ALTA | 
|RF-013| A plataforma deve oferecer um formulário para a adoção responsável. | ALTA | 
|RF-016| A plataforma deve permitir ao usuário anexar fotos dos animais. | MÉDIA | 
|RF-018| A plataforma deve permitir a publicação apenas de “cachorros” e “gatos” | MÉDIA | 


Passos:

	- 1) Ao realizar o login, navegar ate a aba Adote

	- 2) Verificar a lista de animais e escolher um

	- 3) Testar o modal para adoção do animal

Critérios de Êxito:
	- Verificar a lista de animais disponíveis para a doção e após isso tentar agendar a adoção através
	da funcionalidade do modal. Testar os campos para envio da proposta.


**Caso de Teste: CT-06 - Tela de Minha Conta**
Requisitos Associados:

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-010| No cabeçalho deve conter uma caixa destinada a login/sair, cadastre-se e minha conta. | ALTA | 
|RF-020| A plataforma deve permitir ao usuário criador do anúncio,a exclusão do perfil do animal. | BAIXA | 
|RF-025| Consulta e alterações de dados pessoais dos usuários. | BAIXA |


Passos:

	- 1) Ao realizar o login, navegar ate o menu Minha Conta

	- 2) Verificar a opções de testar cada funcionalidade

Critérios de Êxito:
	- Verificar se as informações de sua conta estiverem corretas e testar se suas alterações em cada
	opção esta sendo feita e correta.
