const fps = 29;
const interval = 1000/fps;
let then;

let c = document.querySelector("#c");
let ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;

let znak = "/\\ANLO甶 男甸甹町!$%$#SWZ\\//";
znak = znak.split("");
const font_size = 8;
let columns = c.width/font_size;
let drops = [];
for(let x = 0; x < columns; x++)
    drops[x] = 1; 
  
function draw(timestamp) {    
    requestAnimationFrame(draw);
     
    if(then === undefined){
        then = timestamp;
    }

    const delta = timestamp - then
     
    if (delta > interval) {       
        then = timestamp - (delta % interval);
         
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);
        
        ctx.fillStyle = "#0F0";
        ctx.font = font_size + "px arial";
        for(let i = 0; i < drops.length; i++){
            let text = znak[Math.floor(Math.random()*znak.length)];
            ctx.fillText(text, i*font_size, drops[i]*font_size);
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;
    
            drops[i]++;
        }
        }
}
draw();