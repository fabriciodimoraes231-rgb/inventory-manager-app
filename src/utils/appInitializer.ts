import { databaseService } from '../services/DatabaseService';
import { store } from '../store';
import { setItems } from '../store/inventorySlice';
import { setCategories } from '../store/categoriesSlice';

export const initializeApp = async () => {
  try {
    // Inicializar banco de dados
    await databaseService.initDatabase();
    
    // Carregar itens do inventário
    const items = await databaseService.getAllItems();
    store.dispatch(setItems(items));
    
    // Carregar categorias
    const categories = await databaseService.getCategories();
    store.dispatch(setCategories(categories));
    
    console.log('App initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
};