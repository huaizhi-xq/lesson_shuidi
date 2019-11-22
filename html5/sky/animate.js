 var Animation = function(opts) {
  //  els参数
  var dur = 0.3,
    amount = '50%',
    tl = new TimelineMax({
      repeat: -1,
      yoyo: true,
      repeatDelay: 1
    });
    tl.add(fromLeft(opts.leftAnimated))
      .add(fromRight(opts.rightAnimated))

    function fromLeft(el) {
      return TweenMax.from(el, dur, {x: "-=" + amount, autoAlpha: 0.2})
    }
    function fromRight(el) {
      return TweenMax.from(el, dur, {x: "+=" + amount, autoAlpha: 0.2})
    }
 }
  // 流程式代码，不适合复用

 //  // 线性运动库 线性运动
  //  var tl = new TimelineMax({
  //   repeat: -1,  //-1 一直动
  //   yoyo: true,
  //   repeatDelay: 1,
  // });
  // tl.from(['#box1', '#box3'], 0.3, {x: '-=55%'});
  // tl.from(['#box2'], 0.3, {x: '+=55%'});
  
  // // 假如这个动画再其他一些地方也要 怎么办？