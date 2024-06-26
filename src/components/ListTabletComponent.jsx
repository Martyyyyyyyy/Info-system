import React, { useEffect, useState } from 'react';
import { deleteTablet, listTablets } from '../services/TabletService';
import { useNavigate } from 'react-router-dom';

const ListTabletComponent = () => {
  const [tablets, setTablets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllTablets();
  }, []);

  function getAllTablets() {
    listTablets()
      .then((response) => {
        setTablets(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewTablet() {
    navigate('/add-tablet');
  }

  function updateTablet(id) {
    navigate(`/edit-tablet/${id}`);
  }

  function removeTablet(id) {
    deleteTablet(id)
      .then((response) => {
        setTablets(tablets.filter((tablet) => tablet.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Список Планшетів</h2>
      <button className='btn btn-primary mb-2' onClick={addNewTablet}>
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
          {tablets.map((tablet, index) => (
            <tr key={tablet.id}>
              <td>{index + 1}</td>
              <td>{tablet.manufacturer}</td>
              <td>{tablet.name}</td>
              <td>{tablet.bought_price.toFixed(1)}</td>
              <td>{tablet.selling_price.toFixed(1)}</td>
              <td>{tablet.quantity_in_stock}</td>
              <td>
                <button className='btn btn-info' onClick={() => updateTablet(tablet.id)}>
                  Оновити товар
                </button>
                <button className='btn btn-danger' onClick={() => removeTablet(tablet.id)} style={{ marginLeft: '10px' }}>
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

export default ListTabletComponent;
