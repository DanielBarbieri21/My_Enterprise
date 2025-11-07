# My Enterprise App

Uma aplicação Angular moderna e empresarial construída com as melhores práticas de desenvolvimento.

## 🚀 Stack Tecnológica

- **Angular 20** - Framework principal com Standalone Components
- **TypeScript** - Linguagem de programação
- **Angular Material** - Biblioteca de componentes UI
- **Tailwind CSS** - Framework CSS utilitário
- **NgRx** - Gerenciamento de estado (Store + Effects + Entity)
- **Jest** - Framework de testes unitários
- **Cypress** - Framework de testes end-to-end
- **Docker** - Containerização
- **GitHub Actions** - CI/CD

## 📋 Pré-requisitos

- **Node.js** v20.19.0 ou superior ([Download](https://nodejs.org/))
- **npm** ou **yarn**
- **Git**
- **Angular CLI** (opcional, pode ser instalado globalmente)

## 🛠️ Instalação

1. **Clone o repositório**
   ```bash
   git clone <repository-url>
   cd my-enterprise-app
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `src/environments/environment.ts` (já incluído) e ajuste conforme necessário:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:3000/api',
     appName: 'My Enterprise App',
     version: '1.0.0',
   };
   ```

## 🏃 Executando a Aplicação

### Modo de Desenvolvimento

```bash
npm start
```

A aplicação estará disponível em `http://localhost:4200`

### Modo de Desenvolvimento com HMR (Hot Module Replacement)

```bash
npm run start:hmr
```

### Build de Produção

```bash
npm run build:prod
```

Os arquivos compilados estarão em `dist/my-enterprise-app/browser`

## 🧪 Testes

### Testes Unitários (Jest)

```bash
# Executar testes uma vez
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

### Testes End-to-End (Cypress)

```bash
# Abrir interface interativa do Cypress
npm run e2e:open

# Executar testes em modo headless
npm run e2e
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── core/                    # Singletons: services, interceptors
│   │   ├── interceptors/        # HTTP interceptors (auth, error)
│   │   └── services/            # Core services (auth, logger)
│   ├── shared/                  # Componentes reutilizáveis
│   ├── features/                # Módulos de feature
│   │   ├── auth/                # Autenticação
│   │   ├── dashboard/           # Dashboard
│   │   └── products/            # Gestão de produtos
│   ├── state/                   # NgRx root state
│   ├── app.config.ts            # Configuração da aplicação
│   ├── app.routes.ts            # Rotas principais
│   └── app.ts                   # Componente raiz
├── assets/                      # Assets estáticos
└── environments/                # Configurações de ambiente
```

## 🔐 Autenticação

A aplicação inclui um sistema de autenticação com JWT. Por padrão, as credenciais de demonstração são:

- **Email**: `admin@example.com`
- **Password**: `admin123`

> **Nota**: Em produção, substitua o `AuthService` mock por uma integração real com sua API de autenticação.

## 🐳 Docker

### Build da Imagem

```bash
docker build -t my-enterprise-app .
```

### Executar Container

```bash
docker run -p 80:80 my-enterprise-app
```

A aplicação estará disponível em `http://localhost`

## 🔄 CI/CD

O projeto inclui um workflow do GitHub Actions (`.github/workflows/ci.yml`) que executa:

1. **Lint** - Verificação de código
2. **Testes Unitários** - Execução de testes Jest
3. **Build** - Compilação da aplicação
4. **Docker Build** - Construção da imagem Docker (apenas em `main`/`master`)

### Configuração de Secrets no GitHub

Para habilitar o push da imagem Docker, configure os seguintes secrets:

- `DOCKER_USERNAME` - Seu usuário do Docker Hub
- `DOCKER_PASSWORD` - Sua senha/token do Docker Hub

## 📦 Deploy

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Azure Static Web Apps

Siga o [guia oficial](https://docs.microsoft.com/azure/static-web-apps/) do Azure Static Web Apps.

## 🎨 Estilização

### Angular Material

O projeto utiliza Angular Material com o tema `azure-blue`. Para mudar o tema:

1. Edite `src/styles.scss` e altere o import do tema
2. Ou crie um tema customizado seguindo a [documentação do Angular Material](https://material.angular.io/guide/theming)

### Tailwind CSS

Tailwind está configurado e pode ser usado em conjunto com Angular Material. Use classes utilitárias do Tailwind para estilização rápida.

## 🔧 Scripts Disponíveis

- `npm start` - Inicia servidor de desenvolvimento
- `npm run start:hmr` - Inicia com HMR
- `npm run build` - Build de desenvolvimento
- `npm run build:prod` - Build de produção
- `npm test` - Executa testes unitários
- `npm run test:watch` - Executa testes em modo watch
- `npm run test:coverage` - Executa testes com cobertura
- `npm run lint` - Executa linter
- `npm run lint:fix` - Corrige problemas do linter
- `npm run e2e` - Executa testes e2e
- `npm run e2e:open` - Abre Cypress
- `npm run format` - Formata código com Prettier
- `npm run format:check` - Verifica formatação

## 📚 Arquitetura

### State Management (NgRx)

A aplicação utiliza NgRx para gerenciamento de estado:

- **Actions** - Eventos que descrevem algo que aconteceu
- **Reducers** - Funções puras que atualizam o estado
- **Effects** - Side effects (chamadas de API, etc.)
- **Selectors** - Funções para selecionar partes do estado

### Lazy Loading

Todas as features são carregadas sob demanda usando lazy loading:

```typescript
{
  path: 'products',
  loadChildren: () => import('./features/products/products.routes').then(m => m.productsRoutes)
}
```

### Interceptors

A aplicação inclui dois interceptors HTTP:

1. **AuthInterceptor** - Adiciona token JWT às requisições
2. **ErrorInterceptor** - Trata erros HTTP globalmente

## 🚨 Troubleshooting

### Erro ao instalar dependências

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de build

Verifique se todas as variáveis de ambiente estão configuradas corretamente.

### Problemas com Tailwind

Certifique-se de que o PostCSS está configurado corretamente e que o `styles.scss` importa o Tailwind.

## 📝 Licença

Este projeto é privado e proprietário.

## 👥 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📞 Suporte

Para suporte, entre em contato através do email: [dibarbieri21@gmil.com]

---
## 👨‍💻 Desenvolvedor

**Daniel Barbieri Dev**
- 🎮 Desenvolvedor de Jogos
- 💻 Especialista em C/C++
- 🚀 Entusiasta de Tecnologia
- 📧 Contato: [Daniel Barbieri](mailto:dibarbieri21@gmail.com)

