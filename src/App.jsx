import './App.css'
import Store from './components/Store';
import products from './components/products';

export default function App() {
    return (
      <div className='App'>
        <Store products={products} />
      </div>
    );
}