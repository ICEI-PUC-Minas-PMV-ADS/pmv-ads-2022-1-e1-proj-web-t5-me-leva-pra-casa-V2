# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas
**Maria Emília**
<br>
![Maria Emilia](https://user-images.githubusercontent.com/103081269/164123028-373f40ec-530f-49a6-b529-cf8bab28b30c.JPG) 
| Idade    |Ocupação  | Participação    | Motivações | Dificuldades | História |  
|:---------------|:------------------|:---------------------|:-----------------|:-----------------|:------------------------|
|64 anos |Aposentada do Serviço Público Federal |Projetos que cuidam de animais abandonados, ONGs |Cuidar dos animais de rua e dar um lar para eles.| Divulgar o animal e arrecadar recursos para a ONG.| Quando um animal de rua achar um lar é emocionante.|

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

`Rafael Rodrigues`

Idade: 42 anos.
Ocupação: Graduando em Administração.

Participação:
Voluntário na zoonose de Betim.

Motivações:
Tratar os animais infectados.
Encontrar um lar para esse animal.

Dificuldades:
Quando a eutanásia é sugerida.
Falta de abrigos para os animais encontrados.

História:
Infelizmente a zoonose recolhe animais que de alguma forma são de risco para a saúde pública. Aí entra a importância das ONGs, pois elas recolhem o animal de rua e promovem a castração dos animais.

`Suelen Nogueira`

Idade: 19 anos.
Ocupação:Graduanda em Veterinária.

Participação:
Voluntária na Sociedade Protetora dos Animais de Minas Gerais.  

Motivações:
Complementar a formação acadêmica.
Fazer voluntariado.

Dificuldades:
Escassez de recursos nas ONGs para o manejo dos animais em situação de abandono.
Falta de conscientização da população quanto à importância da adoção de pets.

História:
Após realizar uma visita técnica em um abrigo para animais abandonados, decidiu participar ativamente do projeto.

`Carlos Gomes`

Idade: 25 anos.
Ocupação: Repositor.

Participação:
Está doando um cachorro.

Motivações:
Trazer mais pessoas a adotarem ao invés de comprarem. 
Conscientizar a não julgarem o animal pela raça e idade.

Dificuldades:
Desinformação sobre raças, o que gera preconceito.
Encontrar pessoas que adotem animais já de idade e de porte grande.

História:
Comprou um filhote de American Bull, porém com o crescimento exagerado, foi incapaz de manter o animal e deseja doá-lo. 

`Luiza Helena`

Idade: 21 anos.
Ocupação: Técnica de aparelhos eletrônicos.

Participação:
Divulgar o animal abandonado que foi resgatado.

Motivações:
Ver a felicidade de animais resgatados, que antes não conheciam o verdadeiro significado de amor.

Dificuldades:
Divulgação própria para conseguir encontrar uma nova família para o animal resgatado.
Conseguir manter a cachorra e seus filhotes alimentados e bem cuidados até encontrar um novo lar para o pet.

História:
Luiza resgatou uma cachorra abandonada com seus filhotes recém-nascidos.   

`Isabela Soares`

Idade: 38 anos.
Ocupação: Pedagoga.

Participação:
A procura de sua cachorrinha Lilica.

Motivações:
Encontrar sua cachorrinha que está perdida.

Dificuldades:
Não consegue achar sites confiáveis  que possam divulgar o animal.
Em encontrar sua cachorra perdida.

História:
Lilica se perdeu no ano novo, fugiu devido aos fogos de artifícios.


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

O escopo funcional do projeto é composto pelos requisitos funcionais com as necessidades, características e funcionalidades esperadas na Aplicação Web Front-End, bem como os requisitos não funcionais, os quais descrevem as condições e características técnicas mensuráveis da aplicação. Tais requisitos são apresentados a seguir. 


### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A plataforma deve promover a divulgação dos animais. | ALTA | 
|RF-002|A plataforma deve promover campanha de conscientização contra o abandono dos animais.| ALTA |
|RF-003| A plataforma deve divulgar campanhas para arrecadação de fundos para ONGs Abrigos e afins. | ALTA | 
|RF-004| A plataforma deve exibir um calendário de vacinação.  | ALTA | 
|RF-005| A plataforma deve divulgar campanhas de castração dos animais. | ALTA | 
|RF-006| A plataforma deve oferecer um menu adicional que permita ao usuário divulgar um animal para ser adotado | ALTA | 
|RF-007| A plataforma deve permitir ao usuário publicar um animal desaparecido para ser encontrado. | ALTA | 
|RF-008| O site deve apresentar na página principal fotos dinâmicas dos animais divulgados como prioridade aos animais mais antigos no site. | ALTA | 
|RF-009| O site deve apresentar, um cabeçalho com as seguintes guias: Sobre, Adote, Divulgue, dicas. | ALTA | 
|RF-010| No cabeçalho deve conter uma caixa destinada a login,senha cadastre-se  e recupere sua senha. | ALTA | 
|RF-011| A plataforma deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o animal de acordo com: espécie, gênero, raça, porte, cor e idade. | ALTA | 
|RF-012| A Plataforma deve apresentar, para cada animal, uma imagem correspondente e uma breve descrição sobre o mesmo. (Thumbnail) | ALTA | 
|RF-013| A plataforma deve oferecer um formulário para a adoção responsável. | ALTA | 
|RF-014| A plataforma deve oferecer a funcionalidade de cadastro para todos usuários. | ALTA | 
|RF-015| A plataforma deverá encaminhar os perfis criados para um moderador antes de serem publicados. | MÉDIA | 
|RF-016| A plataforma deve permitir ao usuário anexar vídeos e fotos dos animais. | MÉDIA | 
|RF-017| A plataforma deve conter um mecanismo para cadastro de anunciantes e adotantes. | MÉDIA | 
|RF-018| A plataforma deve permitir a publicação apenas de “cachorros” e “gatos” | MÉDIA | 
|RF-019| A plataforma deve oferecer a funcionalidade de denunciar uma má conduta/publicação que não esteja de acordo com as normas da plataforma. | MÉDIA | 
|RF-020| A plataforma deve permitir ao usuário criador do anúncio,a exclusão do perfil do animal. | BAIXA | 
|RF-021| A plataforma deve mostrar os animais que já foram adotados/encontrados.  | BAIXA | 
|RF-022| A plataforma deve permitir que os usuários entrem em contato com as ONGs. | BAIXA | 
|RF-023| O site deve permitir a comunicação entre o anunciante e adotante e vice-versa. | BAIXA | 
|RF-024| A plataforma deve oferecer a funcionalidade de compartilhamento dos perfis criados. | BAIXA | 
|RF-025| Consulta e alterações de dados pessoais dos usuários. | BAIXA |
|RF-026| A plataforma deve permitir que o usuário criador da divulgação altere o status do animal para “adotado” ou “encontrado” caso o animal tenha encontrado seu lar. | BAIXA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| O site irá rodar apenas via browser, sem a necessidade de ser responsivo. |  ALTA | 
|RNF-003| O site deverá ser programado usando as linguagens HTML, CSS e JavaScript |  ALTA |
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).  |  ALTA |
|RNF-005| O site terá um tempo de resposta rápido, para ser dinâmico e fácil para o usuário. |  ALTA |
|RNF-006| O sistema estará disponível em todas as horas do dia. |  ALTA |
|RNF-007| O sistema irá se comunicar com o banco via SQL. |  ALTA |
|RNF-008| O sistema deverá coletar informações pessoais dos usuários a fim de manter registro e prosseguir com os processos dentro do site. |  ALTA |
|RNF-009| Ter um algoritmo que associe as características de um cachorro perdido, com um cachorro encontrado publicados na plataforma para informar a pessoa sobre um possível animal que possa ser o dela. |  ALTA |



## Restrições
As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.
O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 03/04/2022. |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend        |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho        |

