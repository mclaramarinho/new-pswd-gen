import React from "react";
import '../styles.css';

function Checklist (props){
    
    return(
            <div id={props.name} className='flex checklist'>
                <div className='cl-col-one'>
                    <label htmlFor={props.name}>{props.text}</label>
                </div>
                <div className="cl-col-two">
                    <input className='checks' id={props.name} type="checkbox" name={props.name} value={props.name} onChange={props.handler} checked={props.check}/>
                </div>
            </div>

        )
    
}

export default Checklist;