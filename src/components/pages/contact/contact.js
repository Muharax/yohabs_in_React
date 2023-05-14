import React from "react";


function Contact (){
    return(
        
        <div class="container">

            <div className="wew">

                <div class="row">
                <div class="col-25 clear-both">
                    <label for="fname">E-mail</label>
                </div>
                <div class="col-75">
                    <input type="email" id="email" name="email" />
                </div>
                </div>
                <div class="row">
                <div class="col-25">
                    <label for="temat">Temat</label>
                </div>
                <div class="col-75">
                    <select id="temat">
                    <option value="Mam Pytanie">Mam pytanie</option>
                    <option value="Coś nie działa na stronie">Coś nie działa na stronie</option>
                    <option value="Inne">Inne</option>
                    </select>
                </div>
                </div>
                <div class="row">
                <div class="col-25">
                    <label for="subject">Wiadomość
                </label>
                </div>
                <div class="col-75">
                    <textarea id="wiadomosc" placeholder="Write something.."></textarea>
                </div>
                </div>

                <div class="row">
                <div class="col-75">
                    <button type="submit" id="msgSend">Wyślij</button>
                    </div>
                </div>

                
                
            </div>
        </div>
        
    )
}


export default Contact;
