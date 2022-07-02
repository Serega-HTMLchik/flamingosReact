import React from "react";
import s from "./TestPage.module.css";
function TestPage(props) {
    let onChangeValueEmail = (e) => {
        let body = e.target.value;
        props.updateEmailValue(body);
    }

    let onClickCounter = (e) => {
        props.onClickCounter();
    }

    return (
        <div>
            <div className={s.email_container}>
                <div className={s.label}>Email:</div>
                <input className={s.input_email} name="email" placeholder="Input email" value={props.emailValue} onChange={onChangeValueEmail}></input>
            </div>
            <div className={s.email_container}>
                <div className={s.label}>HTML code:</div>
                <textarea className={s.input_email} name="code" placeholder="Paste html code" value="" rows="10"></textarea>
            </div>
            <div className={s.btn_send_wrapper}>
                <button className={s.btn_send} onClick={onClickCounter}>Send</button>
            </div>
            <div>{props.counter}</div>
        </div>
    );
}

export default TestPage;