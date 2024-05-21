import React, { useEffect, useState } from 'react';
import { deleteMemory, listMemory } from '../services/MemoryService';
import { useNavigate } from 'react-router-dom';

const ListMemoryComponent = () => {
  const [memories, setMemories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllMemories();
  }, []);

  function getAllMemories() {
    listMemory()
      .then((response) => {
        setMemories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewMemory() {
    navigate('/add-memory');
  }

  function updateMemory(id) {
    navigate(`/edit-memory/${id}`);
  }

  function removeMemory(id) {
    deleteMemory(id)
      .then((response) => {
        setMemories(memories.filter((memory) => memory.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Список пристроїв пам'яті</h2>
      <button className='btn btn-primary mb-2' onClick={addNewMemory}>
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
          {memories.map((memory, index) => (
            <tr key={memory.id}>
              <td>{index + 1}</td>
              <td>{memory.manufacturer}</td>
              <td>{memory.name}</td>
              <td>{memory.bought_price.toFixed(1)}</td>
              <td>{memory.selling_price.toFixed(1)}</td>
              <td>{memory.quantity_in_stock}</td>
              <td>
                <button className='btn btn-info' onClick={() => updateMemory(memory.id)}>
                  Оновити товар
                </button>
                <button className='btn btn-danger' onClick={() => removeMemory(memory.id)} style={{ marginLeft: '10px' }}>
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

export default ListMemoryComponent;
