import './App.css';
import MySlider from './Comconents/MySlider/MySlider';
import Questions from './Comconents/Questions/Questions';
import YandexMap from './Comconents/Yandex/YandexMap';


function App() {
  

  return (
    <>

      <div className='mainDiv'>
      <YandexMap />
      </div>

      <MySlider />

      <Questions />

    </>
  );
}

export default App;
