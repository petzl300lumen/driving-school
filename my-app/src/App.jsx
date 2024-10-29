import './App.css';
import YandexMap from './YandexMap';
import YandexReviews from './YandexReviews';
function App() {
  

  return (
    <>

    <h1>Отзывы на кирова</h1>
      <div className='mainDiv'>
      <YandexMap />
      </div>

      <div className="Test"><YandexReviews /></div>
    </>
  );
}

export default App;
