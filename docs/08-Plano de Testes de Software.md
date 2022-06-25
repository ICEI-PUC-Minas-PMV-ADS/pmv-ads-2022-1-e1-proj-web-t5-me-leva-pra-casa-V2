# Plano de Testes de Software

## Testes INICIO:
 Teste de Responsividade
  - Testar a responsividade da tela em outros tamanhos: Mobile, tablet e laptop.
   
  Resultado:
  - Tela responsiva em dispositivos mobile e navegadores diversos (Chrome, Firefox e Edge)


  Testes de Botões:
 Verificar se os botões estão realizando as funções de forma correta.


  Resultado:
  - O botão SAIBA MAIS do card CAMPANHA DE VACINAÇÃO não está executando nenhuma função
  - O botão SAIBA MAIS do card CAMPANHA DE ADOÇÃO não está executando nenhuma função
  
COPYRIGHT

Teste Funcionalidade cadastro


 Resultado:
- Botão CADASTRAR USUARIO funcionando corretamente.
- Caixa NOME está permitindo adicionar números e caracteres especiais
- Caixa CELULAR está permitindo adicionar letras e caracteres especiais
- Caixa CIDADE DO USUÁRIO está permitindo adicionar números e caracteres especiais

## Testes ADOTE:
Teste de Responsividade
  - Testar a responsividade dos elementos da tela em diferentes tamanhos e formatos.
   
  Resultado:
  - Tela responsiva em dispositivos mobile e navegadores diversos (Chrome, Firefox e Edge).


  Testes de Botões:
  - Verificar se os botões estão realizando as funções de forma correta.

  Resultado:
  - O botão ADICIONAR ANIMAIS funciona corretamente abrindo a janela modal para realizar o procedimento.
  - Na tela ADOTE, o botão CLICK ME dos cards de animais, não exibe nenhum resultado no momento.
  - Dentro do modal o botão SALVAR funciona corretamente.
  - Dentro do modal o botão FECHAR funciona corretamente.
  

  Teste de Preenchimento dos Campos
  - Verificar se os valores inseridos nos campos são validados.

  Resultado:
  - Não há restrição nos campos, quanto a letras, números, caracteres especiais ou campo vazio dentro da tela modal, sendo salvos normalmente.


  Teste de Funcionalidade
  - Verificar se os requisitos estabelecidos na programação de funcionalidades da tela ADOTE foram atendidos. 

  Resultado:
  - Os requisitos foram atendidos, porém a descrição não é exibida no card do pet. Se não houver inserido animais inicialmente, no Local Storage a tela não exibe nenhum pet para novos usuários que ainda não tenham se cadastrado. Deve-se clicar no ícone ADOTE e depois no ícone MINHA CONTA, então em ANIMAIS, abrindo-se o modal para Cadastro de Animais para a inserção dos pets.


  Teste de Integração
  - Verificar se as informações apresentadas na página estão de alguma forma vinculada com as informações das demais páginas.

  Resultado:
  - A tela ADOTE está vinculada à tela INICIAL e também à opção MINHA CONTA e ANIMAIS, onde são cadastrados os animais para adoção.


## Testes ONGS:
 Teste de Reponsividade
  - Testar a responsividade dos elementos da tela em diferentes tamanhos e formatos.
   
  Resultado:
  - Tela repsonsiva em dispositivos mobile e navegadores diversos (Chrome, Firefox e Edge)


  Testes de Botões:
  - Verficiar se os botões estão realizando as funções de forma correta.

  Resultado:
  - O botão DOAÇÃO funciona corretamente abrindo a janela modal para realizar o procedimento.
  - Dentro do modal o botão CANCELAR não funciona 100% uma vez que ao preencher os campos e clicar no botão, quando realizado o processo de clicar em DOAÇÃO novamente as informações preenchidas anteriormente são mantidas. Mas o botão cumpre em parte sua função uma vez que ao clicar sobre ele a janela modal é fechada.
  - Dentro do modal o botão CONFIRMAR funciona parcialmente, ele mostra uma mensagem de sucesso, contudo os dados preenchidos no formulário não são registrados no Local Storage.
  - Ainda dentro do modal o botão ANEXAR COMPROVANTE funciona adequadamente permitindo que o usuário escolha uma imagem ou arquivo PDF com o comprovante de pagamento.


  Teste de Preenchimento dos Campos
  - Verificar se os valores inseridos no campo do valor da doação são validados

  Resultado:
  - Dentro deste campo é possivel preencher apenas número, contudo não é feita a distinção entre número positivos e negativos, e não há obrigatoriedade de preencher a casa dos centavos.


  Teste de Funcionalidade
  - Verificar se os requisitos básicos para que seja feita a doação são verificados antes de efetivar a ação.

  Resultado:
  - Não há obrigatoriedade de fazer Login para eftivar a doação, consequentemente não há como identificar a transação feita pelo usuário.


  Teste de Integração
  - Verificar se as informações apresentadas na página estão de alguma forma vinculada com as informações das demais páginas.

  Resultado:
  - A tela das ONGs cadastradas para doação não puxa a informação dos usuários CNPJ cadastrados na plataforma para compor a página, ela ainda encontra-se estática sem receber dados de uma outra fonte.
  - O comprovante e valores informados para doação não são registrados na aba HISTÓRICO DE DOAÇÕES que se encontra dentro da janela MINHA CONTA.



## Testes LOGIN:

Objetivo: testar a responsividade no smartphone e navegabilidade.
- Dimensões smartphone (iPhone Se, XR, 12 Pro, Galaxy S8+,  Galaxy S20 Ultra): não responsivo,
- Dimensões da navegabilidade (1434 x 1776):  responsivo.

Execução da responsividade: Navegabilidade responsivo, dimensões de smartphones não responsivos.

Objetivo: testar os campos.
- Local do e-mail: aceita letras e números
- Local da senha: permitindo letras e números.
- Local cadastre-se: botão corresponde

Execução dos campos: permite inserir dados. 



Objetivo: testar a funcionalidade.
- Local vamos lá: com alerta correspondente.
- Local cadastre-se: leva para o local de cadastre-se.

Execução das funcionalidades: funcionam, falta local para recuperar a senha e deixar conectado. 
 


## Testes CADASTRE-SE:

Objetivo: Testar responsividade da tela em diferentes resoluções.
 - Data de início: 1/06/2022
 - Saída esperada: Os campos e botões serão ajustas sem quebrar o layout.
 - Saída real do sistema: O sistema ajustou sim os campos e botões, menus etc.
 - Registro de execução: Sucesso no teste


Objetivo: Testar inserção de informações nos campos.
 - Data de início: 1/06/2022
 - Saída esperada: Os campos receberem valores corretos e validados.
 - Saída real do sistema: O sistema recebeu os valores mas não validou os carácteres e tipos do campo, exemplo: CPF esta recebendo texto.
 - Registro de execução: Falha no teste


Objetivo: Testar cadastro de usuario.
 - Data de início: 1/06/2022
 - Saída esperada: Usuario ser cadastrado com as devidas informações.
 - Saída real do sistema: O sistema criou o usuário com todas as informações digitadas.
 - Registro de execução: Sucesso no teste


## Testes MINHA CONTA:
Teste de Responsividade
  - Testar a responsividade da tela em dispositivos diferentes: Mobile, tablet e laptop.
   
  Resultado:
  - Tela responsiva em dispositivos mobile, tablet e laptop. Além de navegadores diversos ( Opera GX, Google Chrome, Firefox e Microsoft Edge)


  Testes de Botões:
 Verificar se os botões estão realizando as funções de forma correta.


  Resultado:
- Na aba meu perfil, os botões ''Editar'' e ''Excluir cadastro'' não funcionaram.

-Na aba animais, o botão de adicionar um animal funcionou, sendo aberto um modal para preenchimento dos dados, onde é possível salvar as informções preenchidas ou fechar o modal. É possível excluir o cadastro, mas não edita-lo.



<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 