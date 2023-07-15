import React, {useState} from "react";
import Checklist from './Checklist';
import '../styles.css';

var checked = [];
function Specify (){
    const [rangeValue, setRangeValue] = useState(15);
    function handleRangeInput (e){
        const newValue = e.target.value;
        
        return setRangeValue(newValue);
    }
    
    function handler (e){
        const eValue = e.target.value;
        
        if(e.target.checked){
            checked.push(eValue);
        }else{
            if(checked.includes(eValue)){
                const index = checked.indexOf(eValue);
                checked.splice(index, 1)
            }
        }
    }
    
    return(
        {rangeValue},
        <div>
            <div id="pswd-length">Password Length: {rangeValue}</div>
            <div id="range-container">
                <input onChange={handleRangeInput} value={rangeValue} id='pswd-size' type='range' min={1} max={30}></input>
            </div>
            <div id="checklist">
                <Checklist name="uppercase" text="Uppercase" handler={handler} />
                <Checklist name="lowercase" text="Lowercase" handler={handler} />
                <Checklist name="numbers" text="Numbers" handler={handler} />
                <Checklist name="special" text="Special Characters" handler={handler} />
            </div>
        </div>
    )
}

export default Specify;
export {checked};