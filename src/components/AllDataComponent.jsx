import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Ensure the path is correct
import './Buttons.css'; // Ensure the path is correct

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
            style={{ backgroundImage: `url('./desktop-computer.avif')` }}
          >
            <span className='btn-text'>Настільні комп'ютери</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/inputDevices')}
            style={{ backgroundImage: `url('./input-devices.avif')` }}
          >
            <span className='btn-text'>Пристрої введення</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/memoryDevices')}
            style={{ backgroundImage: `url('./memory-devices.avif')` }}
          >
            <span className='btn-text'>Пристрої пам'яті</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/monitors')}
            style={{ backgroundImage: `url('./monitors.avif')` }}
          >
            <span className='btn-text'>Монітори</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/notebooks')}
            style={{ backgroundImage: `url('./notebooks.avif')` }}
          >
            <span className='btn-text'>Ноутбуки</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/powerUnits')}
            style={{ backgroundImage: `url('./power-units.webp')` }}
          >
            <span className='btn-text'>Блоки живлення</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/printers')}
            style={{ backgroundImage: `url('./printers.avif')` }}
          >
            <span className='btn-text'>Принтери</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/processors')}
            style={{ backgroundImage: `url('./processors.avif')` }}
          >
            <span className='btn-text'>Процесори</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/tablets')}
            style={{ backgroundImage: `url('./tablets.avif')` }}
          >
            <span className='btn-text'>Планшети</span>
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
