import React, { useEffect } from 'react'


function App() {
  useEffect(() => {
    const fps = 19;
    const interval = 1000/fps;
    let then;

    let c = document.querySelector("#c");
    let ctx = c.getContext("2d");
    let w = c.width = window.innerWidth;
    let h = c.height = window.innerHeight;

    let symbol = "/\\ANLO甶 男甸甹町!$%$#SWZ\\//";
    symbol = symbol.split("");

    let font_size = 8;
    let columns = w/font_size;

    let drops = [];
    for(let x = 0; x < columns; x++)
        drops[x] = 1;

draw();

function draw(timestamp){
    if(then === undefined){
      then = timestamp;
     }

    const delta = timestamp - then
  
    if (delta > interval) {
      then = timestamp - (delta % interval);


    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, w, h);
    
    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px arial";
    for(let i = 0; i < drops.length; i++)
    {
        let text = symbol[Math.floor(Math.random()*symbol.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        if(drops[i]*font_size > h && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
  }

      requestAnimationFrame(draw);
    }
  }, []);

  return (
    <div className='windowLife'>
        {/* <h1>hello world</h1> */}
            <div className='divaldo'>
                <canvas
                id="c"
                // width="900"
                // height="420"
            ></canvas>
        </div>
    </div>
  );
}
export default App;