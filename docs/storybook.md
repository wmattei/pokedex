# Storybook
Este projeto usa storybook para facilitar o teste e desenvolvimento de componentes.

Para rodar o storybook:

1. `yarn run start-storybook` para rodar o react-native-server em modo storybook, que faz com que a aplicação não seja carregada, ao invés disso apenas a UI do próprio storybook será carregada.
2. `yarn run storybook` para iniciar a UI web do storybook, esse passo é opcional pois você pode interagir com o menu pelo simulador (menu inferior). Ao rodar esse comando, o browser abrirá uma janela que não terá nenhum componente para mostrar por enquanto.
3. No dashboard do expo no browser inicie um simulador, isso fará com que o dashboard do storybook mostre os componentes disponíveis:


> Caso não queria usar o dashboard do storybook web, voce pode apenas rodar o primeiro comando e abrir o app em um device físico

## Knobs add on
Eu utilizo o add on the knobs para alterar as `props` dos componentes em runtime
