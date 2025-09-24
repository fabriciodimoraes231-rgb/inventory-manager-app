import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, InventoryItem } from '../types';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { setSearchQuery } from '../store/inventorySlice';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const ItemListScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();
  const { items, searchQuery } = useAppSelector((state) => state.inventory);
  const { categories } = useAppSelector((state) => state.categories);

  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [filteredItems, setFilteredItems] = useState<InventoryItem[]>(items);

  useEffect(() => {
    filterItems();
  }, [items, localSearchQuery]);

  const filterItems = () => {
    if (!localSearchQuery.trim()) {
      setFilteredItems(items);
      return;
    }

    const filtered = items.filter((item: InventoryItem) =>
      item.name.toLowerCase().includes(localSearchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(localSearchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(localSearchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(localSearchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category?.name || 'Sem categoria';
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category?.color || '#8E8E93';
  };

  const renderItem = ({ item }: { item: InventoryItem }) => (
    <TouchableOpacity
      style={styles.itemCard}
      onPress={() => navigation.navigate('ItemDetail', { itemId: item.id })}
    >
      <View style={styles.itemHeader}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
        {item.photos.length > 0 && (
          <Image source={{ uri: item.photos[0] }} style={styles.itemImage} />
        )}
      </View>
      
      <View style={styles.itemDetails}>
        <View style={styles.itemMeta}>
          <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(item.category) }]}>
            <Text style={styles.categoryText}>{getCategoryName(item.category)}</Text>
          </View>
          <Text style={styles.quantityText}>Qtd: {item.quantity}</Text>
        </View>
        
        <View style={styles.itemLocation}>
          <Text style={styles.locationText}>📍 {item.location}</Text>
          {item.cost && (
            <Text style={styles.priceText}>R$ {(item.cost * item.quantity).toFixed(2)}</Text>
          )}
        </View>
      </View>

      {(item.manuals.length > 0 || item.documents.length > 0 || item.trainings.length > 0) && (
        <View style={styles.attachmentsBadge}>
          <Text style={styles.attachmentsText}>
            📎 {item.manuals.length + item.documents.length + item.trainings.length} anexos
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const EmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateIcon}>📦</Text>
      <Text style={styles.emptyStateTitle}>Nenhum item encontrado</Text>
      <Text style={styles.emptyStateText}>
        {localSearchQuery ? 'Tente ajustar sua busca' : 'Adicione seu primeiro item ao inventário'}
      </Text>
      {!localSearchQuery && (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddItem')}
        >
          <Text style={styles.addButtonText}>Adicionar Item</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Itens</Text>
        <Text style={styles.subtitle}>{filteredItems.length} itens encontrados</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar itens..."
          value={localSearchQuery}
          onChangeText={setLocalSearchQuery}
          onSubmitEditing={() => dispatch(setSearchQuery(localSearchQuery))}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => dispatch(setSearchQuery(localSearchQuery))}
        >
          <Text style={styles.searchButtonText}>🔍</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={EmptyState}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.fabButton}
        onPress={() => navigation.navigate('AddItem')}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  searchContainer: {
    flexDirection: 'row',
    margin: 15,
    marginTop: -20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  searchButton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 18,
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 80,
  },
  itemCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  itemInfo: {
    flex: 1,
    marginRight: 12,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  itemDetails: {
    gap: 8,
  },
  itemMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  quantityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  itemLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
  },
  priceText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  attachmentsBadge: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  attachmentsText: {
    fontSize: 12,
    color: '#666',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  fabButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ItemListScreen;