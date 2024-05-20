import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Make sure this path is correct

const AllDataComponent = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className='app-container'>
      <header className='custom-header'>
      Управління всіма товарами
      </header>
      <div className='content'>
        <div className='button-group'>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/desktopComputers')}
          >
            Настільні комп'ютери
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/inputDevices')}
          >
            Пристрої введення
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/memoryDevices')}
          >
            Пристрої пам'яті
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/monitors')}
          >
            Монітори
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/notebooks')}
          >
            Ноутбуки
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/powerUnits')}
          >
            Блоки живлення
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/printers')}
          >
            Принтери
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/processors')}
          >
            Процесори
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/tablets')}
          >
            Планшети
          </button>
        </div>
      </div>
      <footer className='footer'>
        <div>© 2024 Your Company</div>
        <div>Privacy Policy</div>
        <div>Contact Us</div>
      </footer>
    </div>
  );
};

export default AllDataComponent;
