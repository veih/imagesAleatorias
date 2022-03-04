import React, { useState } from 'react'
type eventos = React.ChangeEvent<HTMLInputElement>;

export const TestePratico = () => {

    function showTime() {
        let time = new Date();
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        let infor = hour + ':' + minute + ':' + second;

        document.querySelector('.time').innerHTML = infor;
    }
    const time = setInterval(showTime, 999);
    return (
        <div>
            <p>Em Tempo Real</p>
            <div className="time" >

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
            <h2 id="texto">A data e a hora atual do click é:</h2>
            <hr />
            <div className="r1">
                <div >
                    <img id="imageToChange" alt="" type="button"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXSJtTRtjBzIrXaFDZjcw_dQ-rodjt9HYBMvC5Kj6vxkSJm-ONvN-cSpm86ackar5Cik&usqp=CAU"
                        width="250px" />
                </div>
            </div>

        </div>
    );
}