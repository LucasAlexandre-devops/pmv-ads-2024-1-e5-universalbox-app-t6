# Especificações do Projeto

## Arquitetura e Tecnologias

![Captura de tela 2024-05-05 174940](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-universalbox-app-t6/assets/91230711/8946fb9b-920f-499e-a69d-88337e265e79)




## Project Model Canvas

![Project Canvas Universal Box](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-universalbox-app-t6/assets/91230711/48378c6f-4f82-405d-bff4-6a2fc88724bc)




> **Links Úteis**:
> Disponíveis em material de apoio do projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve liberar acesso apenas com login e senha | ALTA | 
|RF-002| O sistema deve permitir inserir, alterar, deletar e pesquisar no catálogo de produtos   | ALTA |
|RF-003| O sistema deve permitir receber pedidos de produtos | ALTA | 
|RF-004| O sistema deve permitir dar baixa de produtos de estoque  | ALTA |
|RF-005| O sistema deve permitir gerar relatórios de produtos no estoque | MÉDIA | 
|RF-006| O sistema deve permitir editar conta do usuário   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O usuário dos sistema deve necessitar de um navegador web com conexão com internet para acesso | ALTA |  
|RNF-004| O sistema deve permitir ter uma interface intuitiva e de fácil utilização| MÉDIA | 
|RNF-005| O sistema deve permitir a impelmentação de novas funcionalidades | MÉDIA | 
|RNF-006| O sistema deve garantir que apenas usuários cadastrados na base de dados tenham acesso | ALTA |
|RNF-007| O sistema deve fazer o registro de acesso do usuário | MÉDIA | 
|RNF-008| O sistema deve utilizar um banco de dados relacional para o armazenamento e controle de dados | MÉDIA |

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

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Diagrama de Casos de Uso](/documentos/img/casos-de-uso.png)

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

## Modelo ER (Projeto Conceitual)

![MODELO ER BOX](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-universalbox-app-t6/assets/91230711/3080dd0d-5b50-455f-9065-ab001e6f7ee8)


## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
