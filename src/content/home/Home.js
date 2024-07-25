import React from 'react';
import { getGroqChatCompletion } from '../../tools/aiTools';

const Home = () => {

    var userInput = prompt("Tell me the ingredients you currently have!")
    if (userInput !== '') {
        alert("Check the console by pressing Ctrl + Shift + J")
    }
    getGroqChatCompletion(userInput).then((res) => {
        console.log(res.choices[0].message.content)
    })

    return (
        <div>
            Home
        </div>
    );
};

export default Home;