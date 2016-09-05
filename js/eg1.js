/**
 * Created by Administrator on 2016/9/1.
 */
var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),

    sky = new Image(),

    paused = false,
    lastTime = 0,
    lastFpsUpdate = {time:0,value:0},
    fps = 60,

    skyOffset = 0,

    SKY_VELOCITY=30;
/**/
    canvas.width=window.innerWidth/*document.body.clientWidth*/;
    canvas.height=window.innerHeight;
/**/
function erase(){
    context.clearRect(0,0,canvas.width,canvas.height);
}

function draw() {
    context.save();
    //计算出绘制四个图层时需要对坐标系进行平移的距离
    skyOffset = skyOffset < canvas.width ? skyOffset + SKY_VELOCITY / fps : 0;


    context.save();
    context.translate(-skyOffset, 0);
    context.drawImage(sky, 0, 0);
    context.drawImage(sky, 985, 0);
    context.drawImage(sky, 985*2, 0);
    context.drawImage(sky, 985*3, 0);
    context.drawImage(sky, 0, 985);
    context.drawImage(sky, 985, 985);
    context.drawImage(sky, 985*2, 985);
    context.drawImage(sky, 985*3, 985);
    context.restore();
}


function calculateFps(now){
    var fps = 1000/(now-lastTime);
    lastTime = now;
    return fps;
}
function animate(now){
    if(now===undefined){
        now=+new Date;
    }
    fps = calculateFps(now);
    if(!paused){
        erase();
        draw();
    }
    requestNextAnimationFrame(animate);
}
canvas.onclick = function(e){
    paused = paused ? true:false;
}

context.font="48px Helvetia";

sky.src = "img/02.jpg";

sky.onload = function(e){
    draw();
};

requestNextAnimationFrame(animate);
