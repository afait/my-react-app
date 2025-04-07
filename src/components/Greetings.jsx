import React from "react";

// Created a Greeting for customers
function Greetings({name}) {
    return (
        <div>
        <h3>hello,{name}!</h3>
        <p>Please take a look at our products below!</p>
        </div>
    );

}
export default Greetings;