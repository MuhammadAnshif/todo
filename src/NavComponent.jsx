import React from "react";


export default function NavComponent() {
    // const history=useHistory()
    // const follow=()=>{
    //     history.push('https://twitter.com/muhammedanshifp/likes')
    // }
    return(

       <div className="navComponent">
           <h1>ToDoList</h1>
           <div className="NavItem">
            <h3 onClick={()=>alert('we are happy to see your exitment stay tooned will come soon👍')}>History</h3>
            <h3 onClick={()=>alert('we are happy to see your exitment stay tooned will come soon👍')}>completed</h3>
           </div>
           <button onClick={() => window.location.href='https://twitter.com/muhammedanshifp/likes'}>Follow</button>
       </div>
    )
}