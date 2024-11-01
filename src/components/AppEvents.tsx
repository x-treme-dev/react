import { useState } from 'react'
import './AppEvents.css'

const App = () => {
  const [buttonClass, setButtonClass] = useState('default-button');
  const [linkClass, setLinkClass] = useState('default-link');

  const handleButtonClick = () => {
    // Изменить класс кнопки
    setButtonClass(prevClass => (prevClass === 'default-button' ? 'active-button' : 'default-button'));
  };

  const handleLinkClick = () => {
    // Изменить класс ссылки
    setLinkClass(prevClass => (prevClass === 'default-link' ? 'active-link' : 'default-link'));
  };

  return (
    <div className='container'>
      <button className={buttonClass} onClick={handleButtonClick}>
        Click button
      </button>
      <a href="#" className={linkClass} onClick={handleLinkClick}>
        Click reffer
      </a>
    </div>
  );
};

export default App;
