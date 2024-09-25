import './App.css';
import ShoppingList from './components/shopping_list';

const initialItems = [
    { id: 1, name: 'Apple', price: 1.5, quantity: 3 },
    { id: 2, name: 'Banana', price: 1.0, quantity: 6 },
    { id: 3, name: 'Orange', price: 2.0, quantity: 2 },
];

function App() {
    return <ShoppingList items={initialItems} />;
}

export default App;
