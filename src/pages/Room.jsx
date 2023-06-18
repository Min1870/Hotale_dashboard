import { useFormik } from 'formik'
import React, { useState } from 'react'

const Room = () => {
    const [rooms,setRooms] = useState([])
    const addRoomForm = useFormik({
      initialValues:{
        room_no:"",
        room_type:"",
        ac:"",
        meal:"",
        bed_capacity:"",
        rent:"",
        status:"",
      },
      onSubmit:(values)=>{
        console.log(values)
      }
    })

  console.log(addRoomForm)
  return (
    <div>
      <div>
        <form onSubmit={addRoomForm.handleSubmit}>
          <div>
            <label htmlFor="room_no">room no</label>
            <input className="bg-red-300 ms-5" type="text" id='room_no' name='room_no' value={addRoomForm.values.room_no} onChange={addRoomForm.handleChange}/>
          </div>
          <div>
            <label htmlFor="room_type">room type</label>
            <input className="bg-red-300 ms-5" type="text" id="room_type" name='room_type'  value={addRoomForm.values?.room_type} onChange={addRoomForm.handleChange}/>
          </div>
          <div>
            <label htmlFor="ac">air condition</label>
            <input className="bg-red-300 ms-5" type="text" id="ac" name='ac'  value={addRoomForm.values?.ac} onChange={addRoomForm.handleChange}/>
          </div>
          <div>
            <label htmlFor="meal">meal</label>
            <input className="bg-red-300 ms-5" type="text" id='meal' name='meal'  value={addRoomForm.values?.meal} onChange={addRoomForm.handleChange}/>
          </div>
          <div>
            <label htmlFor="bed_capacity">bed capacity</label>
            <input className="bg-red-300 ms-5" type="text" id='bed_capacity' name='bed_capacity' value={addRoomForm.values?.bed_capacity} onChange={addRoomForm.handleChange}/>
          </div>
          <div>
            <label htmlFor="rent">rent</label>
            <input className="bg-red-300 ms-5" type="text" id='rent' name='rent' value={addRoomForm.values?.rent} onChange={addRoomForm.handleChange}/>
          </div>
          <div>
            <label htmlFor="status">status</label>
            <input className="bg-red-300 ms-5" type="text" id='status' name='status' value={addRoomForm.values?.status} onChange={addRoomForm.handleChange}/>
          </div>
          <button type='submit' className="bg-blue-300">add room</button>
        </form>
      </div>
    </div>
  )
}

export default Room