import React, { useState } from 'react';

const Target = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    return (
        <form>
            <input type="text" placeholder="name" value={name}
            onChange={(e) => setName(e.target.value)}/>
            <br />

            
            <input type="email" placeholder="email" value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
            <br />


            <input type="number" placeholder="age" value={age} 
            onChange={(e) => setAge(e.target.value)}/>


            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h1>Age: {age}</h1>
        </form>
    );
}

export default Target;
