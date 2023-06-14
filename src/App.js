import React from 'react';
import './App.css';
import { useState } from 'react';
import List from './List';



function App(props) {
  const [check,setCheck]=useState(true)
  const [item,setItem]=useState('');
  const [list,setList]=useState([]);
  const [prevList,setPrev]=useState([])
  const [prev,setHistory]=useState(false);
  const AddItem=(e)=>{
    let a=e.target.value;
  
    console.log(a);
    setItem(a);
  }
  const Addtolist=()=>{
    if(item.trim()===''){
      alert('Oops!You Should Enter A Note In The Feild!')
    }
    else{
      if(list.includes(item)){
        alert('Oops!You  Entered  Note already exist In The Feild!')
      }else{
        setList([...list,item])
        setPrev([...list,item])
        console.log(prevList);
        console.log('prefwdfver');
        setItem('')
      }
     
    }
   
  }
  const Clear=(array)=>{
    setList(array);
  console.log(list)
  }
  const ClearALl=()=>{
   
    setList([])
   
    
  }
  
  const history=()=>{
   setCheck(false)
    setHistory(true);
   
    
  }
  const undo = () => {
    window.location.reload();
  }
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const d = new Date();
  let day = days[d.getDay()];
  return (
    <div className="app">
      <div className='contentMaim'>
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>

      {check&&<div className="input">
        <input value={item} type="text" onChange={AddItem} placeholder="🖊️ Add item..." />
        <i onClick={Addtolist} className="fas fa-plus"></i>
       
      </div>}
      

      </div>
   <div className='reset'> {check===false&& <button onClick={undo}>return</button> }    {check&& <button onClick={history}>History</button> }    {check&&   <button onClick={ClearALl}>Clear All</button>}
</div>
<List array={prev? prevList : list} Clear={Clear} check={check}/>   
 </div>
   
  );
}


export default App;