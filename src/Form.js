import React, { useState } from 'react'
import './App.css'










const Form = () => {

    const [formInput, setformInput] = useState({ name: "", email: "", Age: "", gender: false, select: "", textarea: "", status: "" })
    return (
        <div>
            <form  onSubmit={(event) => { event.preventDefault(); console.log(formInput); }}>
                <div className='newLie'>
                    <label>Name:</label>
                    <br />
                    <input type='text' className='formInput' value={formInput.name} onChange={(event) => { setformInput({ ...formInput, name: event.target.value }) }} />
                </div>
                <div>
                    <label>Number:</label>
                    <br />
                    <input type='number' className='formInput' value={formInput.email} onChange={(event) => { setformInput({ ...formInput, email: event.target.value }) }} />
                </div>
                <div >
                    <label>Age:</label>
                    <br />
                    <input type='number' className='formInput' value={formInput.Age} onChange={(event) => { setformInput({ ...formInput, Age: event.target.value }) }} />
                </div>
                <div className='myForm'>
                    <label>gender:</label>
                    <input type='checkbox' checked={formInput.gender} value={formInput.gender} onChange={(event) => { setformInput({ ...formInput, gender: event.target.checked }) }} />
                </div>
                <div className='myForm'>
                    <label>Select:</label>
                    
                    <select className='formInput' value={formInput.select} onChange={(event) => { setformInput({ ...formInput, select: event.target.value }) }}>
                        <option>html</option>
                        <option>react</option>
                        <option>css</option>
                        <option>js</option>
                    </select>
                </div>
                <button className='myForm' >Submit</button>
            </form>
        </div>
    )
}

export default Form
