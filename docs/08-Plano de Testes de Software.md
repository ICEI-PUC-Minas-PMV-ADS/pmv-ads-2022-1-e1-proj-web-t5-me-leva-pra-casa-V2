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


## Testes DOE:


## Testes ADOTE:


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



## Testes MINHA CONTA:



<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
