import React from 'react'
import './UserList.css'

const UserList = () => {
  return (
    
        <div className='list add flex-col'>
          <p>All List Users</p>
          <div className="list-tabel">
            <div className="list-table-format users">
             
              <b>Name</b>
              <b>Email</b>
              <b>CartData</b>
              
    
            </div>
    {list.map((item,index)=>{
      return(
        <div key={index} className='list-table-format'>
          
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>birr:{item.cartData}</p>
          <p onClick={()=>removedUser(item._id)} className='cursor'>❌</p>
    
        </div>
      )
    })}
          </div>
         
        </div>
      )
    
  
}

export default UserList
