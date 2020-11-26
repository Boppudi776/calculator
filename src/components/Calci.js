import React, { useState } from 'react';
import '../App.css'


function Calci () {

    const elements = [0,1,2,3,4,5,6,7,8,9,'+','-','%','=','/','*']

    const [val,setVal] =useState("")

    const changehandler = e => {
        setVal(e.target.value)
    }

    const btnClick = (element) =>{
        let newVal = val.toString() + element
        setVal(newVal)
    }
    const Clr = () => {
        setVal('')
    }
    const submit = () =>{
        return( val[0] !== 0 ?  setVal( eval (val)) : null)
    }
    return (
        <div className="container">
            <h1>Calculator</h1>
            <div >
                <input type="text"
                    value={val}
                    onChange={() => changehandler}
                />
                <button onClick={() => Clr() }>C</button>
                <div className="calciFlex">
                {elements.map((element, index) => (
                        <div className="">
                            <button className="round" onClick={element !== '=' ? () => btnClick(element) : () => submit()} key={index}
                                style={{ width: '100px', height: '100px', backgroundColor: 'blue', color: 'red', boxShadow: ' ' }} >

                                {element}

                            </button>

                        </div>
                    )
                    )}
                </div>
            </div>

        </div>
    )
}
export default Calci