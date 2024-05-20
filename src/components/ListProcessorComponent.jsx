import React, {useEffect, useState} from 'react'
import { deleteProcessor, listProcessors } from '../services/ProcessorService'
import { useNavigate } from 'react-router-dom'

const ListProcessorComponent = () => {

   const [processor, setProcessors] = useState([])

   const navigator = useNavigate();
      getAllProcessors();
   useEffect(() => {

   }, [])

   function getAllProcessors(){
      listProcessors().then((response) => {
         setProcessors(response.data);
      }).catch(error => {
            console.error(error);
      })

}

   function addNewProcessor(){
      navigator("/add-processor")
   }

   function updateProcessor(id){
      navigator(`/edit-processor/${id}`)
   }

   function removeProcessor(id){
      console.log(id);

      deleteProcessor(id).then((response) =>{

      }).catch(error => {
         console.error(error);
      })
   }


  return (
    <div className='container'>
      <h2 className='text-center'>Список Процесорів</h2>
      <button className='btn btn-primary mb-2' onClick={addNewProcessor}>Додати товар</button>
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
               processor.map(processor =>
                  <tr key={processor.id}>
                      <td>{processor.manufacturer}</td>
                      <td>{processor.name}</td>
                      <td>{processor.bought_price}</td>
                      <td>{processor.selling_price}</td>
                      <td>{processor.quantity_in_stock}</td>
                      <td>
                        <button className='btn btn-info' 
                        onClick={() => updateProcessor(processor.id)}>Оновити товар</button>
                        <button className='btn btn-danger' 
                        onClick={() => removeProcessor(processor.id)}
                           style={{marginLeft: '10px'}}
                        >Видалити товар
                        </button>
                      </td>
                  </tr>
               )
            }
         </tbody>
      </table>
    </div>
  )
}

export default ListProcessorComponent