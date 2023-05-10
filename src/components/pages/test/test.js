import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx) => {
    const font_size = 14;
    const c = 300;
    const columns = 10;
    const Wwidth = 400;
    const Hheight = 200;

    let znak = "/\\ANLO甶 男甸甹町!$%$#SWZ\\//";
    znak = znak.split("");

    let drops = [];
    for(let x = 0; x < columns; x++)
    drops[x] = 1; 

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, Wwidth, Hheight);
    
    ctx.fillStyle = "#0F0";
    ctx.font = 6 + "px arial";
    for(let i = 0; i < drops.length; i++){
        let text = znak[Math.floor(Math.random()*znak.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas