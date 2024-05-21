import React, { useEffect, useState } from 'react';
import { deletePower, listPowers } from '../services/PowerService';
import { useNavigate } from 'react-router-dom';

const ListPowerComponent = () => {
  const [powers, setPowers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPowers();
  }, []);

  function getAllPowers() {
    listPowers()
      .then((response) => {
        setPowers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewPower() {
    navigate('/add-powerUnit');
  }

  function updatePower(id) {
    navigate(`/edit-powerUnit/${id}`);
  }

  function removePower(id) {
    deletePower(id)
      .then((response) => {
        setPowers(powers.filter((power) => power.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Список Блоків Живлення</h2>
      <button className='btn btn-primary mb-2' onClick={addNewPower}>
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
          {powers.map((power, index) => (
            <tr key={power.id}>
              <td>{index + 1}</td>
              <td>{power.manufacturer}</td>
              <td>{power.name}</td>
              <td>{power.bought_price.toFixed(1)}</td>
              <td>{power.selling_price.toFixed(1)}</td>
              <td>{power.quantity_in_stock}</td>
              <td>
                <button className='btn btn-info' onClick={() => updatePower(power.id)}>
                  Оновити товар
                </button>
                <button className='btn btn-danger' onClick={() => removePower(power.id)} style={{ marginLeft: '10px' }}>
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

export default ListPowerComponent;
