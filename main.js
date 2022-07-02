function setup()
{
    canvas=createCanvas(400,500);
    canvas.center();
}

function perload()
{
    img=loadImage('baby.jpg');
}

function draw()
{
    image=(image,0,0,400,500);
     fill("#FF0000");
     text("baby",45,75);

     noFill();
     stroke("#FF0000");
     rect(30,60,350,350); 
}

function status()
{
document.getElementById("status").innerHTML="status: detecting baby";
}

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
}