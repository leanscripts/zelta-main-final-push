// const counter = document.querySelector(".counter");
// let count = 0;
// setInterval(() => {
//   if (count == 92) {
//     clearInterval(count);
//   } else {
//     count += 1;
//     counter.textContent = count + "%";
//   }
// }, 42);

// (function($){

//   function radialProgress($obj, options) {
//     var defaults = {
//       "inline": true,
//       "font-size": 40,
//       "font-family": "Helvetica, Arial, sans-serif",
//       "text-color": null,
//       "lines": 1,
//       "line": 0,
//       "symbol": "",
//       "margin": 0, 
//       "color": "rgb(55,123,181)",
//       "background": "rgba(0,0,0,0.1)",
//       "size": $obj.outerWidth(),
//       "fill": "5px",
//       "range": [0, 100]
//     };
//     this.options = $.extend(defaults, options);
  
//     this.first_rot_base = -135;
//     this.second_rot_base = -315;
    
//     this.options['size'] = parseInt(this.options['size'], 10);
//     this.options['fill'] = parseInt(this.options['fill'], 10);
//     this.options['font-size'] = parseInt(this.options['font-size'], 10);
//     this.options['margin'] = Math.max(0, parseInt(this.options['margin'], 10));
//     this.options['text-color'] = this.options['text-color'] || this.options['color'];
    
//     $obj.css({
//       "position": "relative",
//       "width": this.options['size'],
//       "height": this.options['size'],
//       "display": this.options['inline'] ? "inline-block" : "block"
//     });
      
//     this.$radialBackground = $("<div>").appendTo($obj).css({
//       "box-sizing": "border-box",
//       "-moz-box-sizing": "border-box",
//       "-webkit-box-sizing": "border-box",
//       "position": "absolute",
//       "top": this.options['margin'],
//       "left": this.options['margin'],
//       "width": this.options['size'] - this.options['margin'] * 2,
//       "height": this.options['size'] - this.options['margin'] * 2,
//       "border": this.options['fill'] + "px solid " + this.options['background'],
//       "border-radius": Math.ceil(this.options['size'] / 2) + "px",
//     });
    
//     this.$radialFirstHalfMask = $("<div>").appendTo($obj).css({
//       "position": "absolute",
//       "top": this.options['margin'],
//       "right": this.options['margin'],
//       "width": Math.round(this.options['size'] / 2) - this.options['margin'],
//       "height": this.options['size'] - this.options['margin'] * 2,
//       "overflow": "hidden"
//     });
  
//     this.$radialSecondHalfMask = $("<div>").appendTo($obj).css({
//       "position": "absolute",
//       "top": this.options['margin'],
//       "left": this.options['margin'],
//       "width": Math.round(this.options['size'] / 2) - this.options['margin'],
//       "height": this.options['size'] - this.options['margin'] * 2,
//       "overflow": "hidden"
//     });
    
//     this.$radialFirstHalf = $("<div>").appendTo(this.$radialFirstHalfMask).css({
//       "box-sizing": "border-box",
//       "-moz-box-sizing": "border-box",
//       "-webkit-box-sizing": "border-box",
//       "position": "absolute",
//       "top": "0px",
//       "border-width": this.options['fill'],
//       "border-style": "solid",
//       "border-color": this.options['color'] + " " + this.options['color'] + " transparent transparent",
//       "width": "200%",
//       "height": "100%",
//       "border-radius": "50%",
//       "left": "-100%",
//       "transform": "rotate(" + this.first_rot_base + "deg)"
//     });
  
//     this.$radialSecondHalf = $("<div>").appendTo(this.$radialSecondHalfMask).css({
//       "box-sizing": "border-box",
//       "-moz-box-sizing": "border-box",
//       "-webkit-box-sizing": "border-box",
//       "position": "absolute",
//       "top": "0px",
//       "border-width": this.options['fill'],
//       "border-style": "solid",
//       "border-color": this.options['color'] + " " + this.options['color'] + " transparent transparent",
//       "width": "200%",
//       "height": "100%",
//       "border-radius": "50%",
//       "left": "0px",
//       "transform": "rotate(" + this.second_rot_base + "deg)"
//     });
    
//     if (this.options['text-color']) {
//       this.$radialLabel = $("<div>").appendTo($obj).css({
//         "position": "absolute",
//         "font-size": this.options['font-size'] + "px",
//         "font-family": this.options['font-family'],
//         "color": this.options['text-color'],
//         "left": "50%",
//         "top": "50%",
//         "transform": "translate(-50%, -50%)"
//       });
//     }
  
//     this.perc = 0;
//     this.queue = [];
//   }
  
  // radialProgress.prototype.toPerc = function(options) {
  //   var self = this,
  //       offset = options['offset'] || 0,
  //       interval_delay = 10,
  //       time = options['time'] || 1000,
  //       targetPerc = Math.max(0, Math.min(100, (options['perc'] - self.options['range'][0]) / (self.options['range'][1] - self.options['range'][0]) * 100)),
  //       diffPerc = targetPerc - this.perc,
  //       direction = diffPerc / Math.abs(diffPerc),
  //       step = diffPerc / (time / interval_delay);
  //   if (!this.animation) {
  //     this.animation = setInterval(function() {
  //       if ((direction > 0 && self.perc >= targetPerc) || (direction < 0 && self.perc <= targetPerc)) {
  //         window.clearInterval(self.animation);
  //         self.animation = null;
  //         var next = self.queue.shift();
  //         if (next) self.toPerc(next);
  //         return;
  //       }
  //       self.perc += step;
  //       var first_rot = self.first_rot_base;
  //       var second_rot = self.second_rot_base;
  //       if (self.perc < 50) {
  //         first_rot = self.first_rot_base + (self.perc / 50) * 180;
  //         second_rot = self.second_rot_base;
  //       } else {
  //         first_rot = self.first_rot_base + 1 * 180;
  //         second_rot = self.second_rot_base + ((self.perc - 50) / 50) * 180;
  //       }
  //       self.$radialFirstHalf.css({
  //         "transform": "rotate(" + first_rot + "deg)"
  //       });
  //       self.$radialSecondHalf.css({
  //         "transform": "rotate(" + second_rot + "deg)"
  //       });
  //       if (self.$radialLabel) {
  //         var value = targetPerc ? self.perc/targetPerc * (targetPerc - offset) : 0;
  //         value = self.options['range'][0] + value / 100 * (self.options['range'][1] - self.options['range'][0]);
  //         var text = Math.round(value + self.options['symbol']);
  //         for (var ti = 0; ti < self.options['line']; ti++) text = "&nbsp;<br>" + text;
  //         for (var ti = self.options['lines'] - (self.options['line'] + 1); ti > 0; ti--) text = text + "<br>&nbsp;";
  //         self.$radialLabel.html(text);
  //       }
  //     }, interval_delay);
  //   } else {
  //     this.queue.push(options);
  //   }
  // };
  
  // $.fn.radialProgress = function(func, options) {
  //   if (func === "init") {
  //     $(this).data("__radialProgress", new radialProgress($(this), options));
  //   } else if ($(this).data("__radialProgress")) {
  //     if (func === "to") $(this).data("__radialProgress").toPerc(options)
  //   }
  //   return this;
  // };
    
  // $.fn.radialPieChart = function(func, options) {
  //   if (func === "init") {
  //     var sum = options['data'].reduce(function(a, item) {
  //       return a + item.perc;
  //     }, 0);
  //     for (var i = 0; i < options['data'].length; i++) {
  //       $(this).data("__pieChartSegment" + i, new radialProgress($(this), $.extend(options, options['data'][i], {'lines': options['data'].length, 'line': i })));      
  //       $(this).data("__pieChartSegment" + i).toPerc({'perc': sum, 'offset': sum - options['data'][i].perc});
  //       sum -= options['data'][i].perc;
  //     }
  //   }
  //   return this;
  // };
  
  // $.fn.radialMultiProgress = function(func, options) {
  //   if (func === "init") {
  //     var space = options['space'] || 2,
  //         segmentFill = Math.floor(options['fill'] / options['data'].length) - space,
  //         margin = 0;
  //     for (var i = 0; i < options['data'].length; i++) {
  //       $(this).data("__multiProgress" + i, new radialProgress($(this), $.extend(options, options['data'][i], {'fill': segmentFill, 'margin': margin, 'lines': options['data'].length, 'line': i })));
  //       margin += segmentFill + space;
  //     }
  //   }
  //   else if (options['index'] !== undefined) {
  //     if ($(this).data("__multiProgress" + options['index'])) {
  //       if (func === "to") $(this).data("__multiProgress" + options['index']).toPerc(options);
  //     }
  //   }
  //   else if (options['list'] !== undefined) {
  //     for (var i = 0; i < options['list'].length; i++) {
  //       if (func === "to") $(this).data("__multiProgress" + options['list'][i]['index']).toPerc(options['list'][i]);
  //     }
  //   }
  //   return this;
  // };
    
  // })(jQuery);
  
  // jQuery("#example1").radialProgress("init", {
  //   'size': 100,
  //   'fill': 5
  // }).radialProgress("to", {'perc': 100, 'time': 10000}); 
  
  // jQuery("#pie").radialPieChart("init", {
  //   'font-size': 13,
  //   'fill': 20,
  //   'data': [
  //     {'color': "#2DB1E4", 'perc': 33},
  //     {'color': "#9CCA13", 'perc': 33},
  //     {'color': "#A4075E", 'perc': 33}
  //   ]
  // });
  
  // var clock = jQuery("#multi").radialMultiProgress("init", {
  //   'fill': 25,
  //   'font-size': 14,
  //   'data': [
  //     {'color': "#2DB1E4", 'range': [0, 12]},
  //     {'color': "#9CCA13", 'range': [0, 59]},
  //     {'color': "#A4075E", 'range': [0, 59]}
  //   ]
  // });
  
  var startClock = function() {
    var dh, dm, ds;
    setInterval(function() {
      var date = new Date(),
          h = date.getHours() % 12,
          m = date.getMinutes(),
          s = date.getSeconds();
      if (dh !== h) { clock.radialMultiProgress("to", {
        "index": 0, 'perc': h, 'time': (h ? 100 : 10)
      }); dh = h; }
      if (dm !== m) { clock.radialMultiProgress("to", {
        "index": 1, 'perc': m, 'time': (m ? 100 : 10)
      }); dm = m; }
      if (ds !== s) { clock.radialMultiProgress("to", {
        "index": 2, 'perc': s, 'time': (s ? 100 : 10)
      }); ds = s; }
    }, 1000);  
  };
  
  

const SWITCH = document.querySelector(".switch");
const BODY = document.querySelector("body");
const WRAPPER = document.querySelector(".wrapper");
const LEFTISIDE = document.querySelector(".leftiside");
const HEADER = document.querySelector(".header");
const BUTTON = document.querySelector("#button");
const ACTIVITY = document.querySelector(".activity");
const DISCOUNT = document.querySelector(".discount");
const CARDS = document.querySelector("#cards");
const TITLET = document.querySelector(".titlet");
const ACCOUNT = document.querySelector(".account");
const CARDSIVIEW = document.querySelector(".cardsiview");
const CARD = document.querySelector("#contin");
const TITLEDATE = document.querySelector("#titledate");
const TRANSACTION = document.querySelector("#transaction");
const TYPE = document.querySelector("#type");
const TYPED = document.querySelector("#typed");
const TYPEK = document.querySelector("#typek");
const TYPEZ = document.querySelector("#typez");
const HEADTITLE = document.querySelector("#headtitle");
const HEADTITLEZ = document.querySelector("#headtitlez");
const DESTINATION = document.querySelector("#destinationicard");
const DESTINATIONZ = document.querySelector("#destinationicardz");
const ALERT = document.querySelector("#buttonz");
const INTER = document.querySelector("#intermediary");
const TYPE1 = document.querySelector("#type1");
const TYPE2 = document.querySelector("#type2");
const TYPE3 = document.querySelector("#type3");
const TYPE4 = document.querySelector("#type4");


SWITCH.addEventListener("click", function () {
  if (this.classList.contains("on")) {
    this.classList.remove("on");
    BODY.classList.remove("on");
    WRAPPER.classList.remove("on");
    LEFTISIDE.classList.remove("on");
    HEADER.classList.remove("on");
    BUTTON.classList.remove("on");
    ACTIVITY.classList.remove("on");
    DISCOUNT.classList.remove("on");
    CARDS.classList.remove("on");
    TITLET.classList.remove("on");
    ACCOUNT.classList.remove("on");
    CARDSIVIEW.classList.remove("on");
    CARD.classList.remove("on");
    TITLEDATE.classList.remove("on");
    TRANSACTION.classList.remove("on");
    TYPE.classList.remove("on");
    TYPED.classList.remove("on");
    TYPEK.classList.remove("on");
    TYPEZ.classList.remove("on");
    HEADTITLE.classList.remove("on");
    HEADTITLEZ.classList.remove("on");
    DESTINATION.classList.remove("on");
    DESTINATIONZ.classList.remove("on");
    ALERT.classList.remove("on");
    INTER.classList.remove("on");
    TYPE1.classList.remove("on");
    TYPE2.classList.remove("on");
    TYPE3.classList.remove("on");
    TYPE4.classList.remove("on");
  } else {
    this.classList.add("on");
    BODY.classList.add("on");
    WRAPPER.classList.add("on");
    LEFTISIDE.classList.add("on");
    HEADER.classList.add("on");
    BUTTON.classList.add("on");
    ACTIVITY.classList.add("on");
    DISCOUNT.classList.add("on");
    CARDS.classList.add("on");
    TITLET.classList.add("on");
    ACCOUNT.classList.add("on");
    CARDSIVIEW.classList.add("on");
    CARD.classList.add("on");
    TITLEDATE.classList.add("on");
    TRANSACTION.classList.add("on");
    TYPE.classList.add("on");
    TYPED.classList.add("on");
    TYPEK.classList.add("on");
    TYPEZ.classList.add("on");
    HEADTITLE.classList.add("on");
    HEADTITLEZ.classList.add("on");
    DESTINATION.classList.add("on");
    DESTINATIONZ.classList.add("on");
    ALERT.classList.add("on");
    INTER.classList.add("on");
    TYPE1.classList.add("on");
    TYPE2.classList.add("on");
    TYPE3.classList.add("on");
    TYPE4.classList.add("on");
  }
});



document.querySelectorAll('.button').forEach(button => {

    let duration = 3000,
        svg = button.querySelector('svg'),
        svgPath = new Proxy({
            y: null,
            smoothing: null
        }, {
            set(target, key, value) {
                target[key] = value;
                if(target.y !== null && target.smoothing !== null) {
                    svg.innerHTML = getPath(target.y, target.smoothing, null);
                }
                return true;
            },
            get(target, key) {
                return target[key];
            }
        });

    button.style.setProperty('--duration', duration);

    svgPath.y = 20;
    svgPath.smoothing = 0;

    button.addEventListener('click', e => {
        
        e.preventDefault();

        if(!button.classList.contains('loading')) {

            button.classList.add('loading');

            gsap.to(svgPath, {
                smoothing: .3,
                duration: duration * .065 / 1000
            });

            gsap.to(svgPath, {
                y: 12,
                duration: duration * .265 / 1000,
                delay: duration * .065 / 1000,
                ease: Elastic.easeOut.config(1.12, .4)
            });

            setTimeout(() => {
                svg.innerHTML = getPath(0, 0, [
                    [3, 14],
                    [8, 19],
                    [21, 6]
                ]);
            }, duration / 2);

        }

    });

});

function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
            let p = previous || current,
                n = next || current,
                o = {
                    length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                    angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                },
                angle = o.angle + (reverse ? Math.PI : 0),
                length = o.length * smoothing;
            return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
        },
        cps = cp(a[i - 1], a[i - 2], point, false),
        cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, smoothing, pointsNew) {
    let points = pointsNew ? pointsNew : [
            [4, 12],
            [12, update],
            [20, 12]
        ],
        d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
}




function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field


  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Copied the text: 0x5376F1dB6c60828ae02F03Ec6E8b2E619019C888" + copyText.value);
}

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: 0x5376F1dB6c60828ae02F03Ec6E8b2E619019C888" + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

/* global bootstrap: false */
(() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })()
  