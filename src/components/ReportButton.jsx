import React, { useState } from 'react';
import { Modal, Button, Form, FormGroup, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ReportButton.css';

const ReportButton = ({ text }) => {
  const [modal, setModal] = useState(false);
  const [reportType, setReportType] = useState('Настільні комп’ютери'); // Default report type
  const [period, setPeriod] = useState('День'); // Default period
  const [resultModal, setResultModal] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const toggle = () => setModal(!modal);

  const handleGenerateReport = () => {
    console.log('Генерація звіту...');
    let profit = 0; // Placeholder for actual profit calculation logic

    if (reportType === 'Настільні комп’ютери') {
      profit = calculateProfit('Настільні комп’ютери', period);
    } else if (reportType === 'Вхідні пристрої') {
      profit = calculateProfit('Вхідні пристрої', period);
    } else if (reportType === 'Пристрої пам’яті') {
      profit = calculateProfit('Пристрої пам’яті', period);
    } else if (reportType === 'Монітори') {
      profit = calculateProfit('Монітори', period);
    } else if (reportType === 'Ноутбуки') {
      profit = calculateProfit('Ноутбуки', period);
    } else if (reportType === 'Блоки живлення') {
      profit = calculateProfit('Блоки живлення', period);
    } else if (reportType === 'Принтери') {
      profit = calculateProfit('Принтери', period);
    } else if (reportType === 'Процесори') {
      profit = calculateProfit('Процесори', period);
    } else if (reportType === 'Планшети') {
      profit = calculateProfit('Планшети', period);
    }

    setResultMessage(`Прибуток за цей період становить: ${profit} грн.`);
    setResultModal(true);
    toggle(); // Close the report generation modal
  };

  const calculateProfit = (type, period) => {
    switch (type) {
      case 'Настільні комп’ютери':
        switch (period) {
          case 'День':
            return 10059;
          case 'Тиждень':
            return 70413;
          case 'Місяць':
            return 300000;
          default:
            return 0;
        }
      case 'Вхідні пристрої':
        switch (period) {
          case 'День':
            return 4934;
          case 'Тиждень':
            return 34538;
          case 'Місяць':
            return 150000;
          default:
            return 0;
        }
      case 'Пристрої пам’яті':
        switch (period) {
          case 'День':
            return 8710;
          case 'Тиждень':
            return 60970;
          case 'Місяць':
            return 260000;
          default:
            return 0;
        }
      case 'Монітори':
        switch (period) {
          case 'День':
            return 4510;
          case 'Тиждень':
            return 31570;
          case 'Місяць':
            return 135000;
          default:
            return 0;
        }
      case 'Ноутбуки':
        switch (period) {
          case 'День':
            return 3000;
          case 'Тиждень':
            return 21000;
          case 'Місяць':
            return 90000;
          default:
            return 0;
        }
      case 'Блоки живлення':
        switch (period) {
          case 'День':
            return 4000;
          case 'Тиждень':
            return 28000;
          case 'Місяць':
            return 120000;
          default:
            return 0;
        }
      case 'Принтери':
        switch (period) {
          case 'День':
            return 10000;
          case 'Тиждень':
            return 70000;
          case 'Місяць':
            return 300000;
          default:
            return 0;
        }
      case 'Процесори':
        switch (period) {
          case 'День':
            return 6000;
          case 'Тиждень':
            return 42000;
          case 'Місяць':
            return 180000;
          default:
            return 0;
        }
      case 'Планшети':
        switch (period) {
          case 'День':
            return 6400;
          case 'Тиждень':
            return 44800;
          case 'Місяць':
            return 192000;
          default:
            return 0;
        }
      default:
        return 0;
    }
  };

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  const toggleResultModal = () => setResultModal(!resultModal);

  return (
    <>
      <button className='btn-custom' onClick={toggle}>
        {text}
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Генерація звіту</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for='reportType'>Тип звіту</Label>
              <Input type='select' name='reportType' id='reportType' value={reportType} onChange={handleReportTypeChange}>
                <option>Настільні комп’ютери</option>
                <option>Вхідні пристрої</option>
                <option>Пристрої пам’яті</option>
                <option>Монітори</option>
                <option>Ноутбуки</option>
                <option>Блоки живлення</option>
                <option>Принтери</option>
                <option>Процесори</option>
                <option>Планшети</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for='period'>Період</Label>
              <Input type='select' name='period' id='period' value={period} onChange={handlePeriodChange}>
                <option>День</option>
                <option>Тиждень</option>
                <option>Місяць</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleGenerateReport}>
            Генерувати
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Скасувати
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={resultModal} toggle={toggleResultModal}>
        <ModalHeader toggle={toggleResultModal}>Результат звіту</ModalHeader>
        <ModalBody>{resultMessage}</ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggleResultModal}>
            Закрити
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ReportButton;