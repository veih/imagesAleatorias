import React, { useState } from 'react'
type eventos = React.ChangeEvent<HTMLInputElement>;

export const TestePratico = () => {
    const [data, setDate] = useState()
    
    const = new Date()
    
    return (
        <div>
            <p>Em Tempo Real</p>
            <div className="time">

            </div>

            <div className="r">
                <label htmlFor="">
                    <input id="newImage" type="text" required />
                    <button id="buttonAdd" type="button" >Adicionar</button>
                    <button id="" type="button" >Deletar</button>
                    <button id="" type="button" >Históricos</button>
                </label>
            </div>
            <hr />
            <select name="" id="historic">
                <option value=""></option>
            </select>

        </div>
    );
}