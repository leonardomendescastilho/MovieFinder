# MovieFinder

## 🌐 Demonstração ao Vivo

Experimente o MovieFinder em ação! Visite o site ao vivo:  
👉 [MovieFinder](https://leonardomendescastilho.github.io/MovieFinder/)

---

## 📚 Por Que Este Projeto?

O MovieFinder é mais do que um simples aplicativo de busca de filmes — é uma vitrine das minhas habilidades em construir aplicações web modernas e centradas no usuário. Ao implementar a arquitetura MVVM e utilizar um stack tecnológico robusto, criei um projeto escalável e manutenível que destaca:

- Minha proficiência em **TypeScript** e **React** para construir interfaces dinâmicas.
- Minha capacidade de integrar APIs de terceiros (OMDb API) com **Axios** e **React Query**.
- Minha experiência em criar designs responsivos e visualmente atraentes com **Tailwind CSS**.
- Meu compromisso em escrever código limpo, modular e bem documentado.

## ✨ Funcionalidades

- **Pesquisa de Filmes**: Encontre filmes por seus títulos em inglês com resultados em tempo real, powered by OMDb API.
- **Informações Detalhadas**: Veja detalhes completos, como sinopse, elenco, ano de lançamento e pôsteres.
- **Gerenciamento de Favoritos**: Adicione ou remova filmes da sua lista de favoritos para acesso rápido.
- **Design Responsivo**: Experiência fluida em desktops, tablets e dispositivos móveis.
- **Stack Moderna**: Construído com ferramentas e bibliotecas de ponta para desempenho otimizado e experiência de desenvolvimento.

---

## 🛠️ Tecnologias Utilizadas

O MovieFinder foi construído com um stack tecnológico moderno e poderoso:

- **Vite**: Ferramenta de build ultrarrápida para uma experiência de desenvolvimento otimizada.
- **Tailwind CSS 4.0**: Framework CSS utilitário para desenvolvimento rápido e responsivo de interfaces.
- **TypeScript**: Adiciona tipagem estática para um código robusto e manutenível.
- **React**: Biblioteca para construção de interfaces dinâmicas baseadas em componentes.
- **React Router**: Gerencia navegação no lado do cliente para transições suaves.
- **React Query**: Gerencia busca, cache e sincronização de estado do servidor.
- **Axios**: Cliente HTTP baseado em promessas para requisições à API.

---

## 📂 Estrutura do Projeto

O projeto segue uma estrutura modular e limpa, aderindo à arquitetura **MVVM**. Veja uma visão geral das principais pastas:

```
src/
├── components/          # Componentes de UI reutilizáveis
│   ├── button/         # Componente de botão com estrutura MVVM
│   │   ├── model/      # Lógica de dados e interfaces
│   │   ├── view/       # JSX/TSX para renderização
│   │   ├── viewmodel/  # Lógica de negócios e gerenciamento de estado
│   │   └── index.tsx   # Ponto de entrada do componente
│   └── ...             # Outros componentes
├── pages/              # Componentes de nível de página
├── services/           # Chamadas à API e serviços externos
├── styles/             # Estilos globais e configuração do Tailwind
├── types/              # Definições de tipos TypeScript
└── App.tsx             # Componente principal da aplicação
```

Para mais detalhes, confira o [código-fonte](https://github.com/leonardomendescastilho/MovieFinder/tree/main/src).

---

## 🚀 Como Rodar o Projeto

Siga estas etapas para executar o MovieFinder localmente:

### Pré-requisitos

- **Node.js** (v16 ou superior)
- **npm** ou **yarn**

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/leonardomendescastilho/MovieFinder.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd MovieFinder
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse `http://localhost:5173` para explorar o MovieFinder!

---




## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.