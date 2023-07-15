import React, {useState} from "react";
import '../styles.css';
import { checked } from "./SpecsPswd";
import { useCopyToClipboard } from "usehooks-ts";

function GeneratePswd(){
    
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercase = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    var pswd = [];
    var strength = [];
    var [currentPswd, setCurrent] = useState();
    const [copied,setCopied] = useCopyToClipboard();
    
    function generate(){
        var range = document.getElementById("pswd-size").getAttribute("value");
        
        if(checked.length <= 4 && checked.length >= 1){
            pswd = [];
            strength = ((checked.length === 4 && range >= 8) ? "Strong" : (checked.length  === 3 && range >= 8) ? "Medium" : "Weak");
            const color = (strength==="Strong") ? "green" : (strength === "Medium") ? "orange" : "red";
            const included = [];
            for(let i = 0; i < checked.length; i++){
                if(checked[i].includes("uppercase")){
                    included.push(0);
                }else if(checked[i].includes("lowercase")){
                    included.push(1);
                }else if(checked[i].includes("numbers")){
                    included.push(2);
                }else if(checked[i].includes("special")){
                    included.push(3);
                }
            }

            for(let i = 0; i < range; i++){
                const picker = Math.floor(Math.random()*included.length);
                pswd.push(included[picker]);
            }
            
            for(let i = 0; i < range; i++){
                if(pswd[i]===0){
                    const randomLetter = Math.floor(Math.random()*uppercase.length);
                    pswd.splice(i, 1, uppercase[randomLetter]);
                    
                }else if(pswd[i]===1){
                    const randomLetter = Math.floor(Math.random()*lowercase.length);
                    pswd.splice(i, 1, lowercase[randomLetter]);
                }else if(pswd[i]===2){
                    const randomNumber = Math.floor(Math.random()*numbers.length);
                    pswd.splice(i, 1, numbers[randomNumber]);
                }else if(pswd[i]===3){
                    const randomSpecial = Math.floor(Math.random()*specials.length);
                    pswd.splice(i, 1, specials[randomSpecial]);
                }
            }
            document.getElementById("pswd-box").setAttribute("value", pswd.join(""));
            const pswdStrength = document.getElementById("pswd-strength");
            pswdStrength.classList.remove("hidden");
            pswdStrength.innerHTML=strength;
            pswdStrength.style.color=color;
            setCurrent(pswd.join(""));
        }
    }
    function editButton (){
        const notCopied = "<span class='fa-solid fa-copy'></span>Copy";
        const afterCopied = "<span><i class='fa-regular fa-clipboard'></i></span> Copied"

        document.getElementById("copy-btn").innerHTML=afterCopied;
        setTimeout(() => {
            document.getElementById("copy-btn").innerHTML="";
            document.getElementById("copy-btn").innerHTML=notCopied;
        }, 3000);
    }

    return(
        <div id='generate-container'>
            <div id='row-one' className='flex'>
                <div id='row-one-col-one'>
                    <input id="pswd-box" type="text" placeholder='your password'></input>
                    <span className="fa-solid fa-arrows-rotate" onClick={generate}></span>
                </div>

                <div id='row-one-col-two'>
                    <button id="copy-btn" onClick={()=> {
                            editButton();
                            return setCopied(currentPswd);
                    }}>
                    <span className="fa-solid fa-copy"></span>
                    Copy
                    </button>
                </div>

            </div>
            <div id='pswd-strength' className="hidden">Strong</div>
      </div>
    )
}

export default GeneratePswd;