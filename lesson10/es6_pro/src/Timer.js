//创建一个Timer类
class Timer{
    countDown(end,update,handle){
        //当前时间的毫秒数
        const now=new Date().getTime();
        //用一个常量self保存this(timer)
        const self=this;
        //当前时间的毫秒数减去结束时间的毫秒数 大于0 表示倒计时执行完了
        if(now-end>0){
          handle.call(self);
        }else{
          //用结束的时间 - 开始的时间 = 倒计时的时间
          let last_time=end-now;
          //获取一天的毫秒数
          const px_d=1000*60*60*24;
          //获取小时的毫秒数
          const px_h=1000*60*60;
          //获取分钟的毫秒数
          const px_m=1000*60;
          //获取秒的毫秒数
          const px_s=1000;
          //得到天数
          let d = Math.floor(last_time/px_d);
          //得到小时
          let h = Math.floor(last_time%px_d/px_h);
          //得到分钟
          let m = Math.floor(last_time%px_d%px_h/px_m)
          //得到秒数
          let s = Math.floor(last_time%px_d%px_h%px_m/px_s);
          //创建一个数组,用来保存时间
          let r = [];

          //如果有天数,就把天数添加到数组里面
          if(d>0){
              r.push(`<em>${d}</em>天`);
          }
          if(r.length||(h>0)){
            r.push(`<em>${h}</em>时`);
          }
          if(r.length||m>0){
            r.push(`<em>${m}</em>分`);
          }
          if(r.length||s>0){
            r.push(`<em>${s}</em>秒`);
          }
          //给当前的对象添加了last属性,last属性的值为倒计时的天,时,分,秒
          self.last=r.join('');
           //更新数据
          update.call(self,r.join(''));

          // setTimeout(function () {
          //   self.countdown(end,update,handle);
          // }, 1000);
        }
    }
}

export default Timer;

// 0时9分59秒
// 1546933139000 end()  3:38:59
// 1546932570542 strat  3:28:59
// -
// 倒计时已经执行完
//设置结束的时间
// let num = new Date("2019-1-15 17:58:59").getTime();
//
// let timer = new Timer();
// timer.countDown(num)
