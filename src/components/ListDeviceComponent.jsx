import React, {useEffect, useState} from 'react'
import { deleteDevice, listDevices } from '../services/DeviceService'
import { useNavigate } from 'react-router-dom'

const ListDeviceComponent = () => {

   const [devices, setDevices] = useState([])

   const navigator = useNavigate();
      getAllDevices();
   useEffect(() => {

   }, [])

   function getAllDevices(){
      listDevices().then((response) => {
         setDevices(response.data);
      }).catch(error => {
            console.error(error);
      })

}

   function addNewDevice(){
      navigator("/add-device")
   }

   function updateDevice(id){
      navigator(`/edit-device/${id}`)
   }

   function removeDevice(id){
      console.log(id);

      deleteDevice(id).then((response) =>{

      }).catch(error => {
         console.error(error);
      })
   }

  return (
    <div className='container'>
      <h2 className='text-center'>Список пристроїв введення</h2>
      <button className='btn btn-primary mb-2' onClick={addNewDevice}>Додати товар</button>
      <table className='table table-striped table-bordered'>
         <thead>
            <tr>
               <th>Виробник</th>
               <th>Найменування моделі</th>
               <th>Ціна покупки</th>
               <th>Ціна продажу</th>
               <th>Кількість на складі</th>
               <th>Дії</th>
            </tr>
         </thead>
         <tbody>
            {
               devices.map(device =>
                  <tr key={device.id}>
                      <td>{device.manufacturer}</td>
                      <td>{device.name}</td>
                      <td>{device.bought_price}</td>
                      <td>{device.selling_price}</td>
                      <td>{device.quantity_in_stock}</td>
                      <td>
                        <button className='btn btn-info' 
                        onClick={() => updateDevice(device.id)}>Оновити товар</button>
                        <button className='btn btn-danger' 
                        onClick={() => removeDevice(device.id)}
                           style={{marginLeft: '10px'}}
                        >Видалити товар</button>
                      </td>
                  </tr>
               )
            }
         </tbody>
      </table>
    </div>
  )
}

export default ListDeviceComponent