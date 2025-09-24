import { InventoryItem, Category } from '../types';

// Por enquanto, vamos usar armazenamento local simples
// Em produção, seria substituído por SQLite ou AsyncStorage
class DatabaseService {
  private items: InventoryItem[] = [];
  private categories: Category[] = [
    { id: '1', name: 'Eletrônicos', color: '#007AFF', icon: 'smartphone' },
    { id: '2', name: 'Ferramentas', color: '#FF9500', icon: 'build' },
    { id: '3', name: 'Móveis', color: '#34C759', icon: 'home' },
    { id: '4', name: 'Veículos', color: '#FF3B30', icon: 'car' },
    { id: '5', name: 'Equipamentos', color: '#5856D6', icon: 'construct' },
    { id: '6', name: 'Outros', color: '#8E8E93', icon: 'ellipsis-horizontal' },
  ];

  async initDatabase(): Promise<void> {
    // Simulação de inicialização do banco
    console.log('Database initialized');
    
    // Adicionar alguns itens de exemplo
    if (this.items.length === 0) {
      this.items = [
        {
          id: '1',
          name: 'Notebook Dell',
          description: 'Notebook Dell Inspiron 15 3000',
          category: '1',
          location: 'Escritório - Mesa 1',
          quantity: 1,
          tags: ['laptop', 'dell', 'trabalho'],
          photos: [],
          manuals: [],
          documents: [],
          trainings: [],
          createdAt: new Date(),
          updatedAt: new Date(),
          serialNumber: 'DL123456789',
          cost: 2500,
        },
        {
          id: '2',
          name: 'Furadeira Bosch',
          description: 'Furadeira de impacto Bosch GSB 13 RE',
          category: '2',
          location: 'Garagem - Bancada',
          quantity: 1,
          tags: ['furadeira', 'bosch', 'ferramentas'],
          photos: [],
          manuals: [],
          documents: [],
          trainings: [],
          createdAt: new Date(),
          updatedAt: new Date(),
          cost: 180,
        },
      ];
    }
  }

  async insertItem(item: InventoryItem): Promise<void> {
    this.items.push(item);
  }

  async getAllItems(): Promise<InventoryItem[]> {
    return [...this.items];
  }

  async deleteItem(id: string): Promise<void> {
    this.items = this.items.filter(item => item.id !== id);
  }

  async searchItems(searchTerm: string): Promise<InventoryItem[]> {
    const term = searchTerm.toLowerCase();
    return this.items.filter(item =>
      item.name.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.location.toLowerCase().includes(term)
    );
  }

  async updateItem(item: InventoryItem): Promise<void> {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.items[index] = item;
    }
  }

  async getCategories(): Promise<Category[]> {
    return [...this.categories];
  }
}

export const databaseService = new DatabaseService();