import { useState } from "react";
const Form2 = () => {
    const [date, setDate]=useState({
        firstname: '',
        lastname: '',
        course: '',
    })
    const handleInput=(e)=>{
        const {name, value} = e.target;
        setDate((prev)=>{
            return {...prev, [name]: value}
        })
    }

    const handleSubmit=(e)=>{
        //code handle submit
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>firstname</label><br/>
                <input type="text" name="firstname" onChange={handleInput}
                placeholder="enter your firstname"/><br/>

                <label>lastname</label><br/>
                <input type="text" name="lastname" onChange={handleInput}
                placeholder="enter your lastname"/><br/>

                 <label>course</label><br/>
                <input type="text" name="course" onChange={handleInput}
                placeholder="enter your course"/><br/>

                <button type="submit">Save Details</button>
                <p>{date.firstname}</p>
                <p>{date.lastname}</p>
                <p>{date.course}</p>

               </form>

        </div>
    )
}

export default Form2;