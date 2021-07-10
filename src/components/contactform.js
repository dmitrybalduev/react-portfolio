import React from 'react';


function Contact(){

    function renderSubmit(event) {
        event.preventDefault();
      };

    return (
        <div>
            <p>Contact form:</p>

            <form>
                <label>Name: </label>
                <br></br>
                <input id='nameInput' placeholder='Enter your name'></input>
                <br></br>
                <label>Email: </label>
                <br></br>
                <input id='emailInput' placeholder='Enter your email'></input>
                <br></br>
                <label>Message: </label>
                <br></br>
                <input id='messageInput' placeholder='Enter your message'></input>
                <br></br>
                <button id='contactSubmitButton' type="button"  onClick={renderSubmit} >Submit</button>
            </form>
        </div>
    )
}
export default Contact;