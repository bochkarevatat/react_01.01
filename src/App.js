import ShopItemFunc from './components/ShopItemFunc';
import './App.css';

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

const item2 ={
  brand: 'Tiger of Moscow',
  title: 'Ватник',
  description: 'Ватник для прогулок',
  descriptionFull: 'Пошит в подвалах.',
  price: 9000,
  currency: '₽ '
}

const App = ()=> {
  return (
    <div className='container'>
      <div className='background-element'></div>
      <div className='highlight-window'>
        <div className='highlight-overlay'></div>
      </div>
      <div className='window'>
        <ShopItemFunc item={item2} />
      </div>
    </div>
  );
}

export default App;