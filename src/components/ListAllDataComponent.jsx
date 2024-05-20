import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  listComputers, deleteComputer,
  listDevices, deleteDevice,
  listMemory, deleteMemory,
  listMonitors, deleteMonitor,
  listNotebooks, deleteNotebook,
  listPowers, deletePower,
  listPrinters, deletePrinter,
  listProcessors, deleteProcessor,
  listTablets, deleteTablet
} from '../services';

const ListAllDataComponent = ({ data, listFunction, deleteFunction, title, addRoute, editRoute }) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listFunction().then(response => setItems(response.data)).catch(error => console.error(error));
  }, [listFunction]);

  const addItem = () => navigate(addRoute);
  const updateItem = id => navigate(`${editRoute}/${id}`);
  const removeItem = id => {
    deleteFunction(id).then(() => setItems(items.filter(item => item.id !== id))).catch(error => console.error(error));
  };

  return (
    <div className='container'>
      <h2 className='text-center'>List of {title}</h2>
      <button className='btn btn-primary mb-2' onClick={addItem}>Add {title}</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Name</th>
            <th>Bought Price</th>
            <th>Selling Price</th>
            <th>Quantity In Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item => (
              <tr key={item.id}>
                <td>{item.manufacturer}</td>
                <td>{item.name}</td>
                <td>{item.bought_price}</td>
                <td>{item.selling_price}</td>
                <td>{item.quantity_in_stock}</td>
                <td>
                  <button className='btn btn-info' onClick={() => updateItem(item.id)}>Update</button>
                  <button className='btn btn-danger' onClick={() => removeItem(item.id)} style={{ marginLeft: '10px' }}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListAllDataComponent;

// Example usage for computers
export const ListComputerComponent = () => (
  <ListAllDataComponent
    data={computers}
    listFunction={listComputers}
    deleteFunction={deleteComputer}
    title="Desktop Computers"
    addRoute="/add-computer"
    editRoute="/edit-computer"
  />
);
