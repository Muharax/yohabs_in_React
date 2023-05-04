import React from "react";
import Canvas from "./canvas";

    let canvasWidth = 620;
    let canvasHeight = 400;


const draw = (context) => {
    
    
    let znak = "/\\ANLO甶 男甸甹町!$%$#SWZ\\//";
    znak = znak.split("");

    const font_size = 8;
    let columns = canvasWidth/font_size;

    let drops = [];
    for(let x = 0; x < columns; x++)
        drops[x] = 1; 
    
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    
    context.fillStyle = "#0F0";
    context.font = font_size + "px arial";
    for(let i = 0; i < drops.length; i++){
        
        let text = znak[Math.floor(Math.random()*znak.length)];
        context.fillText(text, i*font_size, drops[i]*font_size);
        if(drops[i]*font_size > canvasHeight && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
    
  };

  

function Matrix(){
    return(
        <div className="windowLife">
            <div id="about">
                <Canvas draw={draw} width={canvasWidth} height={canvasHeight} />
            </div>


            <div className="underLink">
                <a class="matrix-fullscreen" target="_blank" href="matrix-fullscreen/index.html"> Pełny ekran </a>    
            </div>
        </div>
    )
}

export default Matrix;