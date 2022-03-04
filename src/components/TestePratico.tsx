import React, { useState } from 'react'
type eventos = React.ChangeEvent<HTMLInputElement>;

export const TestePratico = () => {
    const [data, setDate] = useState()
    new Date();
    

    return (
        <div>
            <p>Em Tempo Real</p>
            <div className="time">

            </div>

            <div className="r">
                <label htmlFor="">
                    <input id="newImage" type="text" required />
                    <button id="buttonAdd" type="button" >Adicionar</button>
                </label>
            </div>
            <hr />

        </div>
    );
}