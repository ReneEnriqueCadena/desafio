import React from "react";
import { useState } from "react";
import './SecondScreen.css';

export default function SecondScreen() {

    const [show, setShow] = useState(false);
    const [print, setPrint] = useState({
        name: '',
        age: '',
        profession: ''
    });

    const handleSubmit = () => {
        console.log(print)
        setShow(true);
    };


    //  

    const handleName = (ev) => {
        setPrint({ ...print, name: ev.target.value })
    };

    const handleAge = (ev) => {
        if(/^[0-9]*$/.test(ev.target.value)){
            setPrint({ ...print, age: ev.target.value })
        }
    };

    const handleProfession = (ev) => {
        setPrint({ ...print, profession: ev.target.value })
    };

    const clear = () => {
        setShow(false);
        setPrint({
            name: '',
            age: '',
            profession: ''
        })
    }

    return (
        <div>
            <h4 className="text">All fields must be complete</h4>
            <form>
                <input
                    className="inputs"
                    value={print.name}
                    placeholder='Name'
                    onChange={handleName}
                ></input>

                <input
                    className="inputs"
                    value={print.age}
                    placeholder='Age, only numbers'
                    onChange={handleAge}
                ></input>

                <input
                    className="inputs"
                    value={print.carrera}
                    placeholder='Profession'
                    onChange={handleProfession}
                ></input>
            </form>

            <button  
                className={print.name === '' || print.age === '' || print.profession === ''? 'buttonFail' : "button" }
                disabled={print.name === '' || print.age === '' || print.profession === ''} 
                onClick={handleSubmit}
            >Submit</button>

            <button className="button" onClick={clear}>Clear</button>

            <div>
                {
                    show &&
                    <div className="Response">
                        Name: {print.name} <br/>
                        Age: {print.age} <br/>
                        Profession: {print.profession}
                    </div>
                }
            </div>
        </div>
    )
};