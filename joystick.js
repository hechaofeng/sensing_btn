function Joystick(opt) {
  if (!opt || !opt.zone) {throw "new Joystick must have params!";return};
  // debugger
  opt.size = opt.size*2/3;
  var disabledColor = opt && opt.disabledColor || true;

  this.options = {
    mode: opt.mode || 'static',
    size: opt.size || 300,
    color: disabledColor ? 'ddd' : (opt && opt.color || '#eee'),
    position: opt && opt.position || {
      left: '50%',
      top: '50%'
    },
    zone: opt && opt.zone
  };
  if(this.options.size){
    opt.zone.style.height = (3*this.options.size)/2+"px";
    opt.zone.style.width = (3*this.options.size)/2+"px";
  }
  this.distance = 0;
  this.angle = null;
  this.time = null;
}

Joystick.prototype.init = function() {
  var manager = nipplejs.create(this.options);
  this.manager = manager;
  this._on();
  return this;
}

Joystick.prototype._on = function() {
  var me = this;
  this.manager
    .on('start', function (evt, data) {
      clearInterval(me.time);
      me.time = setInterval(function(){
        if(me.manager[0] && me.manager[0].ui.active){
          me.manager[0].ui.active.style.opacity = '0.5';
          me.manager[0].ui.active.style.transform = "rotate("+(360-me.angle.degree)+"deg)";
        }
        if(me.angle){
          if((me.angle.degree <=22.5 && me.angle.degree > 0)  || (me.angle.degree > 337.5 && me.angle.degree <=360)){
            //右边
            me.direction = 'right';
          }else if(me.angle.degree <= 67.5 && me.angle.degree > 22.5){
            //右-上方向
            me.direction = 'right-up';
          }else if(me.angle.degree <= 112.5 && me.angle.degree > 67.5){
            //上方向
            me.direction = 'up';
          }else if(me.angle.degree <= 157.5 && me.angle.degree > 112.5){
            //左-上方向
            me.direction = 'left-up';
          }else if(me.angle.degree <= 202.5 && me.angle.degree > 157.5){
            //左方向
            me.direction = 'left';
          }else if(me.angle.degree <= 247.5 && me.angle.degree > 202.5){
            //左-下方向
            me.direction = 'left-down';
          }else if(me.angle.degree <= 292.5 && me.angle.degree > 247.5){
            //下方向
            me.direction = 'down';
          }else if(me.angle.degree <= 337.5 && me.angle.degree > 292.5){
            //右-下方向
            me.direction = 'right-down';
          }
        }
        me.onStart && me.onStart(me.distance, me.direction, me.angle.degree);
      }, 100);
    })
    .on('move', function (evt, data) {
      me.angle = data.angle;
      if (data.direction) {
        me.direction = data.direction.angle;
        me.distance = data.distance;
      }
    })
    .on('end', function (evt, data) {
      if(me.manager[0] && me.manager[0].ui.active){
        me.manager[0].ui.active.style.opacity = '0.1';
        me.manager[0].ui.active.style.transform = "rotate(0deg)";
      }
      clearInterval(me.time);
      me.onEnd && me.onEnd();
    });
}
