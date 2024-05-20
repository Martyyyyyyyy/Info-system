import React, {useEffect, useState} from 'react'
import { deleteNotebook, listNotebooks } from '../services/NotebookService'
import { useNavigate } from 'react-router-dom'

const ListNotebookComponent = () => {
   
   const [notebooks, setNotebooks] = useState([])

   const navigator = useNavigate();
      getAllNotebooks();
   useEffect(() => {

   }, [])

   function getAllNotebooks(){
      listNotebooks().then((response) => {
         setNotebooks(response.data);
      }).catch(error => {
            console.error(error);
      })

}

   function addNewNotebook(){
      navigator("/add-notebook")
   }

   function updateNotebook(id){
      navigator(`/edit-notebook/${id}`)
   }

   function removeNotebook(id){
      console.log(id);

      deleteNotebook(id).then((response) =>{

      }).catch(error => {
         console.error(error);
      })
   }

  return (
    <div className='container'>
      <h2 className='text-center'>Список Ноутбкуів</h2>
      <button className='btn btn-primary mb-2' onClick={addNewNotebook}>Додати товар</button>
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
               notebooks.map(notebook =>
                  <tr key={notebook.id}>
                      <td>{notebook.manufacturer}</td>
                      <td>{notebook.name}</td>
                      <td>{notebook.bought_price}</td>
                      <td>{notebook.selling_price}</td>
                      <td>{notebook.quantity_in_stock}</td>
                      <td>
                        <button className='btn btn-info' 
                        onClick={() => updateNotebook(notebook.id)}>Оновити товар</button>
                        <button className='btn btn-danger' 
                        onClick={() => removeNotebook(notebook.id)}
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

export default ListNotebookComponent