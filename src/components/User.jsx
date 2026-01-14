import { useState } from "react";

function User() {
    const [name, setName] = useState("");
    const [skills, setSkills] = useState([]);

    const handleSkills = (e) => {
        if (e.target.checked) {
                setSkills([...skills, e.target.value])
        } else {
            setSkills([skills.filter(item => item==e.target.value)])
        }
    }

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
            <p>{name}</p>
            <button onClick={() => setName("")}>Clear</button>

            <h2>Skills</h2>
            <input type="checkbox" name="java" id="java" onChange={(e) => handleSkills(e)} value="java" />
            <label htmlFor="java">Java</label>
            <input type="checkbox" name="js" id="js" onChange={(e) => handleSkills(e)} value="js" />
            <label htmlFor="js">Js</label>
            <input type="checkbox" name="cpp" id="cpp" onChange={(e) => handleSkills(e)} value="cpp" />
            <label htmlFor="cpp">Cpp</label>
            <input type="checkbox" name="python" id="python" onChange={(e) => handleSkills(e)} value="python" />
            <label htmlFor="python">Python</label>
            <p>{skills.toString()}</p>
        </div>
    )
}

export default User;