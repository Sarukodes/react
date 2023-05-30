import React, { useState } from 'react';

import './App.css';
function App() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  const [editId, seteditId] = useState(null);

  function addActivity() {
    // setlistData([...listData, activity])
    // console.log(listData)
    setlistData((listData) => {
      const updatedList = [...listData, activity]
      console.log(updatedList)
      setActivity('');
      return updatedList
    })
  }
  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    })
    setlistData(updatedListData);
  }
  function removeAll() {
    setlistData([])
  }
  function editActivity(id) {
 const editActivity= listData.find((i)=>i.id===id);
 setActivity(editActivity.activity);

  }
  return (
    <div className="container">
      <div className='box'>
        <div className='header'> TODO LIST</div>
        <input type="text" className='text' placeholder="Add Activity..." value={activity} onChange={(e) => setActivity(e.target.value)}></input>
        <button className='add' onClick={addActivity}>Add</button>
        <p className="list-heading"> Here is your list :{")"}</p>
        {listData != [] && listData.map((data, i) => {
          return (
            <>
              <p key={i}>
                <div className='listData'>{data}</div>
                <div><button onClick={() => removeActivity(i)} className='remove'>Remove</button>
                  <button onClick={() => editActivity(activity.id)} className='edit'>Edit</button>
                </div>
              </p>
            </>     
          )
        })}
        {listData.length >= 1 &&
          <button onClick={removeAll} className='all'>Remove All</button>}
      </div>
    </div>
  )
}
export default App;
