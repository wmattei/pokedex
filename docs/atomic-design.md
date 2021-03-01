# Atomic design
Para organizar a estrutura dos componentes eu utilizei [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) que organiza os componentes baseados na sua visualização na tela baseado na experiência do usuário, por exemplo: um botão é um átomo, pois por si só não tem nenhum valor para o usuário, mas junto com outros átomos pode formar uma molécula, que traz uma importância ao componente, várias moléculas formam um organismos que pode ser um formulário usado em uma tela.


## Atoms
Átomos são componentes básicos da UI, como botões e inputs, por si só eles não são úteis e só fazem sentido quando juntos à outros átomos.

## Molecules
Moléculas são componentes mais tangíves que átomos, são um conjunto de átomos que já possuem uma certa lógica e gerenciamento de estado, um exemplo de moléculas são Cards e Sections.

## Organisms
Organismos criam parte de uma interface ou até mesmo interfaces completas, pode possuir toda a lógica de estado e é um conjunto de Moléculas e Átomos, um exemplo de organismos são listas, containers, heros, etc...

## Screens
Originalmente esse item é chamado de pages, mas num contexto mobile acredito que faça mais sentido chamar de scree. Screens controlam o estado geral de uma tela, fazem calls em API, e são usadas em lógicas de roteamento. Um exemplo de screen são telas de Login, telas de listagem, etc..

## Templates
Templates são esqueletos de telas que podem e devem ser reutilizados, por exemplo, se um screen tem um header e footer, isso deveria ser instanciado em um template, e assim ser reutilizado. Nesse projeto eu apenas criei um template que é o de autenticação, é uma casca ao redor da tela de login, e poderia muito bem ser reutilizada em telas de signup ou _esqueci minha senha_
