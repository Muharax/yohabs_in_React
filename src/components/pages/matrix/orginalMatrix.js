let c = document.querySelector("#c");
let ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;

let chinese = "/\\ANLO甶 男甸甹町!$%$#SWZ\\//";
chinese = chinese.split("");

let font_size = 8;
let columns = c.width/font_size;

let drops = [];
for(let x = 0; x < columns; x++)
    drops[x] = 1; 

function draw()
{
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px arial";
    for(let i = 0; i < drops.length; i++)
    {
        let text = chinese[Math.floor(Math.random()*chinese.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(draw, 43);
