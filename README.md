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

# Docs
- [StoryBook](docs/storybook.md)
- [Atomic design](docs/atomic-design.md)
- [Dependências](docs/dependencies.md)
- [Bugs conhecidos](docs/bugs.md)
