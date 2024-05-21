import React, { useEffect, useState } from 'react';
import { deletePrinter, listPrinters } from '../services/PrinterService';
import { useNavigate } from 'react-router-dom';

const ListPrinterComponent = () => {
  const [printers, setPrinters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPrinters();
  }, []);

  function getAllPrinters() {
    listPrinters()
      .then((response) => {
        setPrinters(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewPrinter() {
    navigate('/add-printer');
  }

  function updatePrinter(id) {
    navigate(`/edit-printer/${id}`);
  }

  function removePrinter(id) {
    deletePrinter(id)
      .then((response) => {
        setPrinters(printers.filter((printer) => printer.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Список Принтерів</h2>
      <button className='btn btn-primary mb-2' onClick={addNewPrinter}>
        Додати товар
      </button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Нумерація</th>
            <th>Виробник</th>
            <th>Найменування моделі</th>
            <th>Ціна покупки</th>
            <th>Ціна продажу</th>
            <th>Кількість на складі</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {printers.map((printer, index) => (
            <tr key={printer.id}>
              <td>{index + 1}</td>
              <td>{printer.manufacturer}</td>
              <td>{printer.name}</td>
              <td>{printer.bought_price.toFixed(1)}</td>
              <td>{printer.selling_price.toFixed(1)}</td>
              <td>{printer.quantity_in_stock}</td>
              <td>
                <button className='btn btn-info' onClick={() => updatePrinter(printer.id)}>
                  Оновити товар
                </button>
                <button className='btn btn-danger' onClick={() => removePrinter(printer.id)} style={{ marginLeft: '10px' }}>
                  Видалити товар
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPrinterComponent;
