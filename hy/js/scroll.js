/**
 * Created by liang on 2016/7/26.
 */
var area = document.getElementById("f1");
var con1 = document.getElementById("con1");
var con2 = document.getElementById("con2");
var speed = 50;
area.scrollTop = 0;
con2.innerHTML = con1.innerHTML;
function scrollUp() {
    if (area.scrollTop >= con1.scrollHeight) {
        area.scrollTop = 0;
    } else {
        area.scrollTop++;
    }
}

var myScroll = setInterval("scrollUp()", speed);
area.onmouseover = function () {
    clearInterval(myScroll);
};
area.onmouseout = function () {
    myScroll = setInterval("scrollUp()", speed);
}
var area1 = document.getElementById("f2");
var con3 = document.getElementById("con3");
var con4 = document.getElementById("con4");
var speed = 50;
area.scrollTop = 0;
con4.innerHTML = con3.innerHTML;
function scrollUp1() {
    if (area1.scrollTop >= con3.scrollHeight) {
        area1.scrollTop = 0;
    } else {
        area1.scrollTop++;
    }
}

var myScroll1 = setInterval("scrollUp1()", speed);
area1.onmouseover = function () {
    clearInterval(myScroll1);
};
area1.onmouseout = function () {
    myScroll1 = setInterval("scrollUp1()", speed);
}