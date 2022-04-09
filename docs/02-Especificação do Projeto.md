# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

`Maria Emília`

Idade: 64 anos.
Ocupação: Aposentada do Serviço Público Federal.

Participação:
Projetos que cuidam de animais abandonados, ONGs.

Motivações:
Cuidar dos animais de rua.
E dar um lar para eles.

Dificuldades:
Divulgar o animal.
E arrecadar recursos para a ONG.

História:
Quando um animal de rua achar um lar é emocionante.

`Jéssica Santos`

Idade: 27 anos.
Ocupação: Trabalha em um escritório de contabilidade.

Participação:
Adotou uma cachorrinha.

Motivações:
Incentivar as pessoas a adotarem.
Ame mais os animais de rua.

Dificuldades:
Encontrar meios que divulguem os animais. 

História:
Não pretendia adotar, mas a história de um animal de rua acabou comovendo.











## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Maria Emília        | Incentivar as pessoas a não abandonarem os animais. | Para que o número de animais abandonados diminua. |
|Maria Emília        | Chamar a atenção das pessoas por meio de divulgações. | Para aumentar o número de animais sendo adotados. |
|Maria Emília        | Conseguir cuidar melhor dos animais através de doações . | Por que dessa forma os animais serão melhor tratados. |
|Jessica Santos      | Incentivar as pessoas a adotarem   | Discutir com meus familiares, amigos e colegas de trabalho.|
|Rafael Rodrigues    | Diminuir a transmissão de doenças, divulgando a importância da vacinação. | Por que tratar os animais infectados é uma questão de saúde pública. |
|Rafael Rodrigues    |Divulgar campanhas de castração feitas pelas ONGs. | Para diminuir o número de animais nas ruas. |
|Suelen Nogueira     | Incentivar amigos e colegas a importância da adoção responsável. | Para que os animais tenham um lar. |
|Suelen Nogueira     | Promover campanhas de arrecadação de alimentos e medicamentos para os abrigos. | Ajudar aos abrigos nos custos de manutenção dos animais.|
|Carlos Gomes        | Anunciar um animal de estimação. | Poder dar um lar ao animal de forma correta sem abandono. |
|Luiza Helena        | Divulgar um animal resgatado | Para que ela possa encontrar uma nova família. |
|Isabela Soares      | Encontrar  seu animal perdido.  | Por que ela sente falta do seu animal perdido. |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
