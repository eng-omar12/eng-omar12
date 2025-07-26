import { useState } from "react";


const ShowButton = () => {
    const state = useState("Ali")
    const name = state[0]
    const setName = state[1]
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={BtnClicked}>clikc</button>
        </div>
    );
    function BtnClicked() {
        if(name==="Ali"){
            setName("Mostafa")
        }else{
            setName("Ali")
        }
    }
}

export default ShowButton;
