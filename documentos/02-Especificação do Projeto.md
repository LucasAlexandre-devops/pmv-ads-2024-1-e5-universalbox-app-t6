# Especificações do Projeto

## Arquitetura e Tecnologias
  | Tecnologia       | Descrição                             |
|------------------|-----------------------------------------|
| Visual Studio    | IDE                                     |
| HTML,css,javascricpt| Linguagem utilizadas no front -end   |
| C#      | Linguagem utilizada no back end                  |
| Frameworks        | Bootstrap,Asp.net, Entity Framework    |
| Banco de Dados NoSQL      | MongoDB                        |





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
|RF-001- Login de Acesso | O sistema deve liberar acesso apenas com login e senha | ALTA | 
|RF-002- Cátalogo| O sistema deve permitir inserir, alterar, deletar e pesquisar no catálogo de produtos   | ALTA |
|RF-003- Entrada de Pedidos | O sistema deve permitir receber pedidos de produtos | ALTA | 
| RF004 - Cadastro de produtos                    | Permitir o cadastro de produtos no sistema, incluindo nome, descrição e preço. | Alta       |
| RF005 - Controle de estoque                     | Manter registro do estoque atual de cada produto, com entradas e saídas.       | Alta       |
| RF006 - Alerta de estoque baixo                 | Emitir alertas quando a quantidade de um produto atingir um nível mínimo.      | Média      |
| RF007 - Geração de relatórios de estoque        | Gerar relatórios detalhados sobre o estoque atual da empresa.                  | Média      |
| RF008 - Rastreamento de produtos                | Permitir rastrear a localização e movimentação de produtos no estoque.         | Alta       |
| RF009 - Integração com fornecedores             | Integrar o sistema com fornecedores para atualização automática de estoque.    | Alta       |
| RF010 - Controle de acesso e permissões         | Definir diferentes níveis de acesso para funcionários do sistema.              | Alta       |
| RF011 - Histórico de transações                 | Manter histórico de todas as transações de entrada e saída de estoque.         | Alta       |


### Requisitos não Funcionais

| Requisito                                       | Descrição                                                                      | Prioridade |
|-------------------------------------------------|--------------------------------------------------------------------------------|------------|
| RNF001 - Desempenho                             | O sistema deve ser capaz de lidar com um grande volume de dados de forma eficiente. | Alta       |
| RNF002 - Usabilidade                            | A interface do usuário deve ser intuitiva e de fácil aprendizado.               | Alta       |
| RNF003 - Disponibilidade                        | O sistema deve estar disponível 24 horas por dia, 7 dias por semana.            | Alta       |
| RNF004 - Segurança                              | Garantir a segurança dos dados do estoque,controle de acesso. | Alta       |
| RNF005 - Escalabilidade                         | O sistema deve ser capaz de lidar com um aumento no número de usuários e volume de dados. | Alta       |
| RNF006 - Portabilidade                          | Deve ser possível acessar o sistema de diferentes dispositivos e plataformas.   | Média      |
| RNF007 - Confiabilidade                         | O sistema deve ser confiável e evitar falhas ou interrupções não planejadas.    | Alta       |
| RNF008 - Manutenibilidade                      | Facilidade de manutenção e atualização do sistema, com código bem documentado.  | Média      |



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



## Modelo ER (Projeto Conceitual)

![MODELO ER UNIVERSAL BOX](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-universalbox-app-t6/assets/91230711/3954484d-8b80-4114-96d6-81b446005d44)



## Projeto da Base de Dados


![PROJETO DE BASE DE DADOS ](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-universalbox-app-t6/assets/91230711/e9df73fc-4152-4fb1-8219-095343ea80bf)

