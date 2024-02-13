import { useState } from "react"
const Gradingsystem = () => {
    const [grade, setGrade] = useState('');
    const [letterGrade, setLetterGrade] = useState(''); //holds the calculated letter grade 

    // checking grade and assign letter grade
    const checkGrade = () => {
        const numericGrade = parseInt(grade);

        if (isNaN(numericGrade)) {
            setLetterGrade('Invalid Grade');
        } 
        else if (numericGrade >= 0 && numericGrade <= 39) {
            setLetterGrade('Fail');
        } 
        else if (numericGrade >= 40 && numericGrade <= 49) {
            setLetterGrade('D');
        } 
        else if (numericGrade >= 50 && numericGrade <= 59) {
            setLetterGrade('C');
        } 
        else if (numericGrade >= 60 && numericGrade <= 69) {
            setLetterGrade('B');
        } 
        else if (numericGrade >= 70 && numericGrade <= 100) {
            setLetterGrade('A');
        }
    };

    //triggered when form is submitted
    //handle - form whre it prevents default form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        checkGrade();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Grade</label><br/>
                <input type="grade" name="grade" value={grade} onChange={(e)=>setGrade(e.target.value)}
                 placeholder="Grade" />
                <br/>
                <button>Submit</button>
                <p>Letter Grade :{ letterGrade  }</p>
            </form>
        </div>
    )
}

export default Gradingsystem;
