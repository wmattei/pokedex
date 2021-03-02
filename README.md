# Iniciar o projeto

1. Instale as dependências com `yarn install`
2. Inicie o react-native-server com `yarn start`
3. No browser inicie um simulador ou faça a leitura do código QR no seu dispositivo

## Login

As credenciais para login são:

> usuario@totvs.com
> totvs123

# Justificativas técnicas

## Expo

Como esse projeto compartilha 100% do código entre Android e iOS, eu decidi usar expo para facilitar o desenvolvimento, caso tivéssemos código nativo para cada plataforma eu usaria o comando `yarn export` e passaria a gerenciar código nativo.

## React native paper

Como a escolha de tema era livre, eu decidi usar `react-native-paper` como biblioteca UI para facilitar o desenvolvimento de componentes.

## Typescript

Para acelerar o desenvolvimento decidi usar typescript, pois não preciso criar jsDOC para ter autocomplete na IDE.

## Testes

Devido a deadline decidi não criar testes e2e, ao invés disso criei apenas testes unitários que testam o componente comparando com um snapshot anterior garantido que não houve mudanças não esperadas na forma que o componente é renderizado.

Para  rodar os testes
`yarn test`

Para rodar os testes e gerar snapshot novo
`yarn test -u`

## Scroll infinito

Para uma melhor experiência do usuário decidi usar scroll infinito para listar os pokemons.
Quando a lista atinge 20% antes do fim dela, eu faço uma nova requisição trazendo mais pokemons.
A lista é virtualizada para evitar leak de memória mesmo com uma lista gigante.

## Cache de imagens
Todas as images são cacheadas localmente quando carregadas pela primeira vez, fazendo com q as próximas vezes que forem carregadas seja muito mais rapido

# Docs

- [StoryBook](docs/storybook.md)
- [Atomic design](docs/atomic-design.md)
- [Dependências](docs/dependencies.md)
- [Bugs conhecidos](docs/bugs.md)
- [Bugs conhecidos](docs/bugs.md)
