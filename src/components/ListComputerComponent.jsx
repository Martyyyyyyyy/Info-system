import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteComputer, listComputers } from '../services/ComputerService';
import './Computer.css'; // Import the CSS file

const ListComputerComponent = () => {
  const [computers, setComputers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllComputers();
  }, []);

  function getAllComputers() {
    listComputers()
      .then((response) => {
        setComputers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewComputer() {
    navigate('/add-computer');
  }

  function updateComputer(id) {
    navigate(`/edit-computer/${id}`);
  }

  function removeComputer(id) {
    deleteComputer(id)
      .then((response) => {
        setComputers(computers.filter((computer) => computer.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='container'>
      <h2>Список настільних комп'ютерів</h2>
      <button className='btn btn-primary mb-2' onClick={addNewComputer}>
        Додати товар
      </button>
      <table className='table'>
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
          {computers.map((computer, index) => (
            <tr key={computer.id}>
              <td>{index + 1}</td>
              <td>{computer.manufacturer}</td>
              <td>{computer.name}</td>
              <td>{computer.bought_price.toFixed(1)}</td>
              <td>{computer.selling_price.toFixed(1)}</td>
              <td>{computer.quantity_in_stock}</td>
              <td>
                <button className='btn btn-info' onClick={() => updateComputer(computer.id)}>
                  Оновити товар
                </button>
                <button className='btn btn-danger' onClick={() => removeComputer(computer.id)}>
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

export default ListComputerComponent;
