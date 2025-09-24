# Inventory Manager - App de Gerenciamento de Inventário

Um aplicativo React Native para gerenciar inventários com recursos avançados como câmera integrada, upload de arquivos, busca e armazenamento offline.

## 🚀 Funcionalidades

- ✅ **Gerenciamento de Inventário**: Adicione, edite, visualize e exclua itens
- ✅ **Busca Inteligente**: Busque por nome, descrição, categoria ou localização
- ✅ **Categorização**: Organize itens em categorias coloridas
- ✅ **Interface Intuitiva**: Design moderno e fácil de usar
- 🔄 **Câmera Integrada**: Tire fotos dos itens (em desenvolvimento)
- 🔄 **Upload de Documentos**: Anexe manuais e documentos (em desenvolvimento)
- 🔄 **Armazenamento Offline**: Funciona sem internet (em desenvolvimento)

## 🛠 Tecnologias Utilizadas

- **React Native** 0.81.4 - Framework mobile multiplataforma
- **TypeScript** - Tipagem estática para JavaScript
- **Redux Toolkit** - Gerenciamento de estado
- **React Navigation** - Navegação entre telas
- **React Native Vector Icons** - Ícones
- **Styled Components** - Estilização

## 📱 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── screens/            # Telas da aplicação
│   ├── HomeScreen.tsx
│   └── ItemListScreen.tsx
├── store/              # Redux store e slices
│   ├── index.ts
│   ├── inventorySlice.ts
│   ├── categoriesSlice.ts
│   └── settingsSlice.ts
├── services/           # Serviços e APIs
│   └── DatabaseService.ts
├── types/              # Definições de tipos TypeScript
│   └── index.ts
└── utils/              # Utilitários e helpers
    ├── hooks.ts
    └── appInitializer.ts
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (v16 ou superior)
- React Native CLI
- Android Studio (para Android) ou Xcode (para iOS)
- Emulador ou device físico

### Instalação

1. **Clone o projeto**:
   ```bash
   cd app/organizor
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Para Android**:
   ```bash
   # Inicie o Metro Server (já rodando em background)
   npx react-native start

   # Em outro terminal, execute:
   npx react-native run-android
   ```

4. **Para iOS**:
   ```bash
   cd ios && pod install && cd ..
   npx react-native run-ios
   ```

### Comandos Úteis

```bash
# Recarregar o app
npx react-native reload

# Limpar cache
npx react-native start --reset-cache

# Verificar configuração
npx react-native doctor

# Build de produção para Android
npx react-native build-android --mode=release
```

## 📊 Estrutura de Dados

### InventoryItem
```typescript
interface InventoryItem {
  id: string;
  name: string;
  description: string;
  category: string;
  location: string;
  quantity: number;
  tags: string[];
  photos: string[];
  manuals: Document[];
  documents: Document[];
  trainings: Document[];
  createdAt: Date;
  updatedAt: Date;
  barcode?: string;
  serialNumber?: string;
  purchaseDate?: Date;
  warrantyExpiry?: Date;
  supplier?: string;
  cost?: number;
}
```

## 🎯 Próximos Passos

### Fase 1: Funcionalidades Básicas (✅ Concluído)
- [x] Configuração inicial do projeto
- [x] Navegação entre telas
- [x] Gerenciamento de estado com Redux
- [x] Telas Home e Lista de Itens
- [x] Sistema de categorias

### Fase 2: Recursos Avançados (🔄 Em Desenvolvimento)
- [ ] Tela de adicionar/editar itens
- [ ] Integração com câmera
- [ ] Upload de documentos e manuais
- [ ] Sistema de busca avançada
- [ ] Filtros por categoria

### Fase 3: Melhorias (📋 Planejado)
- [ ] Banco de dados SQLite
- [ ] Sincronização em nuvem
- [ ] Scanner de código de barras
- [ ] Relatórios e gráficos
- [ ] Backup automático
- [ ] Modo offline completo

## 🐛 Troubleshooting

### Problemas Comuns

1. **Metro server não inicia**:
   ```bash
   npx react-native start --reset-cache
   ```

2. **Erro de permissões no Android**:
   ```bash
   adb shell pm grant com.organizor android.permission.CAMERA
   ```

3. **Build falha no iOS**:
   ```bash
   cd ios && pod install && cd ..
   ```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

Desenvolvido com ❤️ usando React Native

---

**Status do Projeto**: ✅ Base funcional | 🔄 Em desenvolvimento ativo