const a = 'delta';


function sayHello(){
    console.log('Hello');
}



 function showCanvas(ctx,canvas){
    document.body.appendChild(canvas)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

module.exports =  {sayHello,a,showCanvas}
