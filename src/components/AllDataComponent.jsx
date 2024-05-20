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
            style={{ '--btn-width': '200px', '--btn-height': '200px' }} // Adjust size
          >
            <img src='./desktop-computer.avif' alt="Настільні комп'ютери" />
            <span className='btn-text'>Настільні комп'ютери</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/inputDevices')}
            style={{ '--btn-width': '200px', '--btn-height': '200px' }} // Adjust size
          >
            <img src='./input-devices.avif' alt='Пристрої введення' />
            <span className='btn-text'>Пристрої введення</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/memoryDevices')}
            style={{ '--btn-width': '200px', '--btn-height': '200px' }} // Adjust size
          >
            <img src='./memory-devices.avif' alt="Пристрої пам'яті" />
            <span className='btn-text'>Пристрої пам'яті</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/monitors')}
            style={{ '--btn-width': '200px', '--btn-height': '200px' }} // Adjust size
          >
            <img src='./monitors.avif' alt='Монітори' />
            <span className='btn-text'>Монітори</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/notebooks')}
            style={{ '--btn-width': '200px', '--btn-height': '200px' }} // Adjust size
          >
            <img src='./notebooks.avif' alt='Ноутбуки' />
            <span className='btn-text'>Ноутбуки</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/powerUnits')}
            style={{ '--btn-width': '200px', '--btn-height': '200px' }} // Adjust size
          >
            <img src='./power-units.webp' alt='Блоки живлення' />
            <span className='btn-text'>Блоки живлення</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/printers')}
            style={{ '--btn-width': '200px', '--btn-height': '200px' }} // Adjust size
          >
            <img src='./printers.avif' alt='Принтери' />
            <span className='btn-text'>Принтери</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/processors')}
            style={{ '--btn-width': '200px', '--btn-height': '200px' }} // Adjust size
          >
            <img src='./processors.avif' alt='Процесори' />
            <span className='btn-text'>Процесори</span>
          </button>
          <button 
            className='btn-custom' 
            onClick={() => navigateTo('/tablets')}
            style={{ '--btn-width': '200px', '--btn-height': '200px' }} // Adjust size
          >
            <img src='./tablets.avif' alt='Планшети' />
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
