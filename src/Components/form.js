import { useState } from "react";
const Form = () => {
    const [firstname, setfirstname]= useState('');
    const [lastname, setlastname]= useState('');
    const [course, setcourse]= useState('');

    return (
        <div>
            <form>
            
            <label>firstname</label><br/>
            <input type="text" name="firstname" value={firstname} onChange={(e)=>setfirstname(e.target.value)}
            placeholder="enter your firstname"/><br/>

             <label>lastname</label><br/>
            <input type="text" name="lastname" value={lastname} onChange={(e)=>setlastname(e.target.value)}
            placeholder="enter your lastname"/><br/>

           <label>course</label><br/>
            <input type="text" name="course" value={course} onChange={(e)=>setcourse(e.target.value)}
            placeholder="enter your course"/><br/>

            <button>save Details</button>
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{course}</p>

            </form>
            
            </div>
    );
}
export default Form;




