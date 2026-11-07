# Inventory Manager

![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Status](https://img.shields.io/badge/status-prot%C3%B3tipo-orange)
![License](https://img.shields.io/badge/license-Apache%202.0-blue)

App mobile (Android e iOS) para organizar um inventário de equipamentos: cada item guarda categoria, localização, quantidade, tags e, no modelo de dados, fotos, manuais, documentos de treinamento, número de série, garantia e fornecedor.

> **Status: protótipo.** A navegação, o estado global e as duas primeiras telas estão prontos. Cadastro e edição de itens, câmera, anexos e banco de dados local ainda não foram implementados (veja o roteiro abaixo).

## O que já funciona

- **Tela inicial** com o resumo do inventário.
- **Lista de itens** com busca por nome, descrição, categoria ou localização.
- **Categorias coloridas** para organizar os itens.
- **Estado global com Redux Toolkit** em três slices: `inventory`, `categories` e `settings`.
- **Modelo de dados tipado** (`src/types`): `InventoryItem`, `Category`, `Document` e os filtros de busca.

Os dados ficam em memória (`src/services/DatabaseService.ts`), que é o ponto onde entra o SQLite na próxima fase.

## Tecnologias

React Native 0.81 · TypeScript · Redux Toolkit · React Navigation (stack e bottom tabs) · React Native Vector Icons · Jest

## Estrutura

```
src/
├── screens/    # HomeScreen, ItemListScreen
├── store/      # Redux: index, inventorySlice, categoriesSlice, settingsSlice
├── services/   # DatabaseService (em memória, por enquanto)
├── types/      # modelo de dados
└── utils/      # hooks tipados do Redux e inicialização do app
```

## Como rodar

Requer Node.js 20+, o ambiente do React Native ([guia oficial](https://reactnative.dev/docs/set-up-your-environment)) e um emulador ou aparelho.

```bash
npm install
npx react-native start          # Metro
npx react-native run-android    # em outro terminal
# iOS: cd ios && pod install && cd .. && npx react-native run-ios
npm test                        # Jest
```

## Roteiro

- [x] Navegação, Redux, telas Início e Lista, categorias
- [ ] Telas de adicionar e editar itens
- [ ] Fotos pela câmera e anexos (manuais, documentos)
- [ ] Banco de dados SQLite e modo offline
- [ ] Leitor de código de barras
- [ ] Relatórios e backup

## Licença

[Apache 2.0](LICENSE) © Manuel Moraes
