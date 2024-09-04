import React from "react";

let number = 0;
const Counter = () =>{
    number++;
    console.log(number)
    return(
        <>
            <div className="p-4 d-flex bg-black text-white rounded-2" style={{fontSize: "55px"}}>
                <div className="p-5 m-3 bg-dark rounded-4 "><i className="far fa-clock"></i></div>
                <div className="p-5 m-3 bg-dark rounded-4">{Math.floor(number/100000)%10}</div>
                <div className="p-5 m-3 bg-dark rounded-4">{Math.floor(number/10000)%10}</div>
                <div className="p-5 m-3 bg-dark rounded-4">{Math.floor(number/1000)%10}</div>
                <div className="p-5 m-3 bg-dark rounded-4">{Math.floor(number/100)%10}</div>
                <div className="p-5 m-3 bg-dark rounded-4">{Math.floor(number/10)%10}</div>
                <div className="p-5 m-3 bg-dark rounded-4">{Math.floor(number%10)}</div> 
            </div> 
        </>
    );
       
}

export default Counter;