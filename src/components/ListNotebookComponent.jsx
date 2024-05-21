import React, { useEffect, useState } from 'react';
import { deleteNotebook, listNotebooks } from '../services/NotebookService';
import { useNavigate } from 'react-router-dom';

const ListNotebookComponent = () => {
  const [notebooks, setNotebooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllNotebooks();
  }, []);

  function getAllNotebooks() {
    listNotebooks()
      .then((response) => {
        setNotebooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewNotebook() {
    navigate('/add-notebook');
  }

  function updateNotebook(id) {
    navigate(`/edit-notebook/${id}`);
  }

  function removeNotebook(id) {
    deleteNotebook(id)
      .then((response) => {
        setNotebooks(notebooks.filter((notebook) => notebook.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Список Ноутбуків</h2>
      <button className='btn btn-primary mb-2' onClick={addNewNotebook}>
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
          {notebooks.map((notebook, index) => (
            <tr key={notebook.id}>
              <td>{index + 1}</td>
              <td>{notebook.manufacturer}</td>
              <td>{notebook.name}</td>
              <td>{notebook.bought_price.toFixed(1)}</td>
              <td>{notebook.selling_price.toFixed(1)}</td>
              <td>{notebook.quantity_in_stock}</td>
              <td>
                <button className='btn btn-info' onClick={() => updateNotebook(notebook.id)}>
                  Оновити товар
                </button>
                <button className='btn btn-danger' onClick={() => removeNotebook(notebook.id)} style={{ marginLeft: '10px' }}>
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

export default ListNotebookComponent;
