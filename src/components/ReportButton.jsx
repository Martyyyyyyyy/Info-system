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
    let profit = calculateProfit(reportType, period);

    setResultMessage(`Прибуток за цей період становить: ${profit} грн.`);
    setResultModal(true);
    toggle(); // Close the report generation modal
  };

  const calculateProfit = (type, period) => {
    const profits = {
      'Настільні комп’ютери': { День: 10059, Тиждень: 70413, Місяць: 300000 },
      'Вхідні пристрої': { День: 4934, Тиждень: 34538, Місяць: 150000 },
      'Пристрої пам’яті': { День: 8710, Тиждень: 60970, Місяць: 260000 },
      'Монітори': { День: 4510, Тиждень: 31570, Місяць: 135000 },
      'Ноутбуки': { День: 3000, Тиждень: 21000, Місяць: 90000 },
      'Блоки живлення': { День: 4000, Тиждень: 28000, Місяць: 120000 },
      'Принтери': { День: 10000, Тиждень: 70000, Місяць: 300000 },
      'Процесори': { День: 6000, Тиждень: 42000, Місяць: 180000 },
      'Планшети': { День: 6400, Тиждень: 44800, Місяць: 192000 }
    };
    return profits[type][period] || 0;
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
      <button className='btn-custom custom-button-size' onClick={toggle}>
        <img src='./report.avif' alt={text} />
        <span className='btn-text'>{text}</span>
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
          <Button color='primary' onClick={handleGenerateReport}>Генерувати</Button>{' '}
          <Button color='secondary' onClick={toggle}>Скасувати</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={resultModal} toggle={toggleResultModal}>
        <ModalHeader toggle={toggleResultModal}>Результат звіту</ModalHeader>
        <ModalBody>{resultMessage}</ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggleResultModal}>Закрити</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ReportButton;
