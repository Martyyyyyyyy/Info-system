import React, { useEffect, useState } from 'react';
import { deleteProcessor, listProcessors } from '../services/ProcessorService';
import { useNavigate } from 'react-router-dom';

const ListProcessorComponent = () => {
  const [processors, setProcessors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProcessors();
  }, []);

  function getAllProcessors() {
    listProcessors()
      .then((response) => {
        setProcessors(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewProcessor() {
    navigate('/add-processor');
  }

  function updateProcessor(id) {
    navigate(`/edit-processor/${id}`);
  }

  function removeProcessor(id) {
    deleteProcessor(id)
      .then((response) => {
        setProcessors(processors.filter((processor) => processor.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Список Процесорів</h2>
      <button className='btn btn-primary mb-2' onClick={addNewProcessor}>
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
          {processors.map((processor, index) => (
            <tr key={processor.id}>
              <td>{index + 1}</td>
              <td>{processor.manufacturer}</td>
              <td>{processor.name}</td>
              <td>{processor.bought_price.toFixed(1)}</td>
              <td>{processor.selling_price.toFixed(1)}</td>
              <td>{processor.quantity_in_stock}</td>
              <td>
                <button className='btn btn-info' onClick={() => updateProcessor(processor.id)}>
                  Оновити товар
                </button>
                <button className='btn btn-danger' onClick={() => removeProcessor(processor.id)} style={{ marginLeft: '10px' }}>
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

export default ListProcessorComponent;
