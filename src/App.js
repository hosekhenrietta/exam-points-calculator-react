import './App.css';
import adatok from "./adatok.json"
import { Header } from "./Header";
import { TaskDivs } from "./TaskDivs";
import { TaskTable } from "./TaskTable";
import { useState } from 'react';
import { Buttons } from './Buttons';



function App() {

  const [id, setId] = useState(0)
  const [result, SetResult] = useState([])

  const handleTableChange = (id) =>{
    setId(id)
  }
  const handleTableChange2 = (bo) =>{
    if (bo) {
      if (id < adatok.tasks.length-1) {
        setId(id+1)
      }
      
    } else{
      if (id > 0) {
        setId(id-1)
      }
      
    }
  }

  const handleResultChange = (result) =>{
    SetResult(result)
  }

  return (

    <div className='container'>
    <Header adatok ={adatok}/>
    <TaskDivs adatok ={adatok} handleTableChange={handleTableChange}/>
    <Buttons handleTableChange2={handleTableChange2} result={result}/>
    <TaskTable id={id} adatok ={adatok} onChanged={handleResultChange} />

    
    </div>
    


  );
}

export default App;
