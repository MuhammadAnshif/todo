import React from "react";
import './App.css'
function List(props) {

  const Delete=(value,array)=>{
      const index=array.indexOf(value);
      let list=[]
      for(let i=0;i<array.length;i++){
            if (i !== index) {
              list.push(array[i]);
            }
      }
      props.Clear(list);
  }
    return (
        <div>
          <div className="todos">
            {props.array.map((value, index) => (
              <>
              <div className="todo" key={index}>
                <div className="left">
                  <ul type="checkbox" checked name="" id="" />
                  <div className="label">
                    <p>*{value}</p>
                  </div>
                </div>
                <div className="right">
                 {props.check&& <i className="fas  fa-times" onClick={()=>Delete(value,props.array)}></i>}
                </div>
              </div>
              {index !== props.array.length-1 && (
              <>
                <div className="effect">|</div>
                <div className="effect">|</div>
              </>
            )}
              </>
            ))}
          </div>
        </div>
      );
}

export default List;