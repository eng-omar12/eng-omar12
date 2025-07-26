// import React from 'react';

const InfoCard = (props) => {
    let namee = props.porpsValue
    return (
        <div className="text">
            <input type='text' placeholder= {namee}/>
            <img src='/logo192.png'
                alt='imag'
            />

            <ul>
                <p>🧡 Live video</p>
                <p>💚 Photo/video</p>
                <p>💛 Reel</p>
            </ul>
        </div>
    );
}

export default InfoCard;

