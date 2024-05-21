import React, { useEffect, useState } from 'react';
import { deleteMonitor, listMonitors } from '../services/MonitorService';
import { useNavigate } from 'react-router-dom';

const ListMonitorComponent = () => {
  const [monitors, setMonitors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllMonitors();
  }, []);

  function getAllMonitors() {
    listMonitors()
      .then((response) => {
        setMonitors(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewMonitor() {
    navigate('/add-monitor');
  }

  function updateMonitor(id) {
    navigate(`/edit-monitor/${id}`);
  }

  function removeMonitor(id) {
    deleteMonitor(id)
      .then((response) => {
        setMonitors(monitors.filter((monitor) => monitor.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Список Моніторів</h2>
      <button className='btn btn-primary mb-2' onClick={addNewMonitor}>
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
          {monitors.map((monitor, index) => (
            <tr key={monitor.id}>
              <td>{index + 1}</td>
              <td>{monitor.manufacturer}</td>
              <td>{monitor.name}</td>
              <td>{monitor.bought_price.toFixed(1)}</td>
              <td>{monitor.selling_price.toFixed(1)}</td>
              <td>{monitor.quantity_in_stock}</td>
              <td>
                <button className='btn btn-info' onClick={() => updateMonitor(monitor.id)}>
                  Оновити товар
                </button>
                <button className='btn btn-danger' onClick={() => removeMonitor(monitor.id)} style={{ marginLeft: '10px' }}>
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

export default ListMonitorComponent;
