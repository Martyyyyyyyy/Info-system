import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineBulb, AiOutlineAppstore } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ReportButton from './ReportButton'; // Import ReportButton component
import './App.css'; // Make sure to import the updated CSS file

const HeaderComponent = () => {
  return (
    <div>
      <header className='custom-header-bar'>
        <div className='header-content'>
          <div className='header-title'>
            <AiOutlineBulb className='header-icon' />
            <span>Інформаційна система обліку товарів</span>
          </div>
          <div className='contact-info'>
            <div>
              <AiOutlinePhone /> +1 (123) 456-7890
            </div>
            <div>
              <AiOutlineMail /> info@example.com
            </div>
          </div>
        </div>
      </header>
      <nav className='custom-nav'>
        <Link to='/' className='btn-custom'>
          <AiOutlineAppstore /> На головну
        </Link>
        <ReportButton text="Оформити звіт" /> {/* Include the ReportButton component here */}
      </nav>
    </div>
  );
};

export default HeaderComponent;
