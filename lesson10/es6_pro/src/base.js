import Timer from "./Timer";
//倒计时功能
let timer = new Timer();
let date = new Date("2019-1-15 16:42:59").getTime();
function upDate(inner){
    h_time.innerHTML = inner;
}
function handle(){

    clearInterval(time);
    console.log("正在开奖");
    setTimeout(function(){
        time = setInterval(upTime,1000)
    },1000)
}
function upTime(){
    timer.countDown(date,upDate,handle);
}
let time = setInterval(upTime,1000)
