import React, { useEffect, useState } from 'react';
import { createMonitor, getMonitor, updateMonitor } from '../services/MonitorService';
import { useNavigate, useParams } from 'react-router-dom';

function MonitorComponent() {

  const [manufacturer, setManufacturer] = useState('');
  const [name, setName] = useState('');
  const [bought_price, setBoughtPrice] = useState('');
  const [selling_price, setSellingPrice] = useState('');
  const [quantity_in_stock, setInStock] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();
  const [errors, setErrors] = useState({
    manufacturer: '',
    name: '',
    bought_price: '',
    selling_price: '',
    quantity_in_stock: ''
  });

  useEffect(() => {
    if (id) {
      getMonitor(id).then((response) => {
        setManufacturer(response.data.manufacturer);
        setName(response.data.name);
        setBoughtPrice(response.data.bought_price.toString());
        setSellingPrice(response.data.selling_price.toString());
        setInStock(response.data.quantity_in_stock.toString());
      }).catch(error => {
        console.error(error);
      });
    }
  }, [id]);

  function handleManufacturer(e) {
    setManufacturer(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleBoughtPrice(e) {
    setBoughtPrice(e.target.value);
  }

  function handleSellingPrice(e) {
    setSellingPrice(e.target.value);
  }

  function handleInStock(e) {
    setInStock(e.target.value);
  }

  function saveMonitor(e) {
    e.preventDefault();

    if (validateForm()) {
      const monitor = { manufacturer, name, bought_price, selling_price, quantity_in_stock };
      console.log(monitor);

      if (id) {
        updateMonitor(id, monitor).then((response) => {
          console.log(response.data);
          navigate('/monitors');
        }).catch(error => {
          console.error(error);
        });
      } else {
        createMonitor(monitor).then((response) => {
          console.log(response.data);
          navigate('/monitors');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

  function goBack(e) {
    e.preventDefault();
    navigate('/monitors');
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (manufacturer.trim()) {
      errorsCopy.manufacturer = '';
    } else {
      errorsCopy.manufacturer = "Поле є обов'язковим";
      valid = false;
    }

    if (name.trim()) {
      errorsCopy.name = '';
    } else {
      errorsCopy.name = "Поле є обов'язковим";
      valid = false;
    }

    if (bought_price.trim()) {
      errorsCopy.bought_price = '';
    } else {
      errorsCopy.bought_price = "Поле є обов'язковим";
      valid = false;
    }

    if (selling_price.trim()) {
      errorsCopy.selling_price = '';
    } else {
      errorsCopy.selling_price = "Поле є обов'язковим";
      valid = false;
    }

    if (quantity_in_stock.trim()) {
      errorsCopy.quantity_in_stock = '';
    } else {
      errorsCopy.quantity_in_stock = "Поле є обов'язковим";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Оновити товар</h2>;
    } else {
      return <h2 className='text-center'>Додати товар</h2>;
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Виробник:</label>
                <input
                  type='text'
                  placeholder='Введіть виробника'
                  name='manufacturer'
                  value={manufacturer}
                  className={`form-control ${errors.manufacturer ? 'is-invalid' : ''}`}
                  onChange={handleManufacturer}
                />
                {errors.manufacturer && <div className='invalid-feedback'>{errors.manufacturer}</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Найменування товару:</label>
                <input
                  type='text'
                  placeholder='Введіть найменування товару'
                  name='name'
                  value={name}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  onChange={handleName}
                />
                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Ціна покупки:</label>
                <input
                  type='text'
                  placeholder='Введіть ціну покупки'
                  name='bought_price'
                  value={bought_price}
                  className={`form-control ${errors.bought_price ? 'is-invalid' : ''}`}
                  onChange={handleBoughtPrice}
                />
                {errors.bought_price && <div className='invalid-feedback'>{errors.bought_price}</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Ціна продажу:</label>
                <input
                  type='text'
                  placeholder='Введіть ціну продажу'
                  name='selling_price'
                  value={selling_price}
                  className={`form-control ${errors.selling_price ? 'is-invalid' : ''}`}
                  onChange={handleSellingPrice}
                />
                {errors.selling_price && <div className='invalid-feedback'>{errors.selling_price}</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Кількість на складі:</label>
                <input
                  type='text'
                  placeholder='Введіть кількість на складі'
                  name='quantity_in_stock'
                  value={quantity_in_stock}
                  className={`form-control ${errors.quantity_in_stock ? 'is-invalid' : ''}`}
                  onChange={handleInStock}
                />
                {errors.quantity_in_stock && <div className='invalid-feedback'>{errors.quantity_in_stock}</div>}
              </div>
              <button className='btn btn-success' onClick={saveMonitor}>Підтвердити</button>
              <br/><br/>
              <button className='btn btn-primary mb-2' onClick={goBack}>Повернутись назад</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonitorComponent;
