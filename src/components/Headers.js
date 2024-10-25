import React from "react";
import customStyle from '../css/customStyle.module.css';

const Headers = (props) =>{
    return(

        <div className={customStyle.container}>
        <h1 className={customStyle.protest1}>Hi! I am {props.name}</h1>
        <span className={customStyle.typing}>I am a {props.skill}</span>
        <h2 className={customStyle.protest2}>“As a motivated student, I draw inspiration from others while also <br></br>seeking opportunities to 
            meet my financial needs. <br></br>Let’s explore how I can turn that inspiration into practical success!”</h2>

        <div style={{margin:"50px", marginLeft:'90px'}}>
             <button><a className={customStyle.protext2} href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRnXVTlXdnvxvVwHZtwNfFSQlMCQSwPSwnclJmllPQDSklfSXNQsQsQVnRcBkwXshffmdLB">Let's Connect! <i class="bi bi-reply-fill"></i></a>
            </button>
        </div>
        </div>
        
    )
}
export default Headers;