let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 150;
const particles = [];

const possibleColors = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Gold",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson"
];

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
  this.x = Math.random() * W; // x
  this.y = Math.random() * H - H; // y
  this.r = randomFromTo(11, 33); // radius
  this.d = Math.random() * maxConfettis + 11;
  this.color =
    possibleColors[Math.floor(Math.random() * possibleColors.length)];
  this.tilt = Math.floor(Math.random() * 33) - 11;
  this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
  this.tiltAngle = 0;

  this.draw = function() {
    context.beginPath();
    context.lineWidth = this.r / 2;
    context.strokeStyle = this.color;
    context.moveTo(this.x + this.tilt + this.r / 3, this.y);
    context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
    return context.stroke();
  };
}

function Draw() {
  const results = [];

  // Magical recursive functional love
  requestAnimationFrame(Draw);

  context.clearRect(0, 0, W, window.innerHeight);

  for (var i = 0; i < maxConfettis; i++) {
    results.push(particles[i].draw());
  }

  let particle = {};
  let remainingFlakes = 0;
  for (var i = 0; i < maxConfettis; i++) {
    particle = particles[i];

    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
    particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

    if (particle.y <= H) remainingFlakes++;

    // If a confetti has fluttered out of view,
    // bring it back to above the viewport and let if re-fall.
    if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
      particle.x = Math.random() * W;
      particle.y = -30;
      particle.tilt = Math.floor(Math.random() * 10) - 20;
    }
  }

  return results;
}

window.addEventListener(
  "resize",
  function() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },
  false
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
  particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;
Draw();


/*
  Eventually by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {

  "use strict";

  var $body = document.querySelector('body');

  // Methods/polyfills.

    // classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
      !function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

    // canUse
      window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

    // window.addEventListener
      (function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

  // Play initial animations on page load.
    window.addEventListener('load', function() {
      window.setTimeout(function() {
        $body.classList.remove('is-preload');
      }, 100);
    });

  // Slideshow Background.
    (function() {

      // Settings.
        var settings = {

          // Images (in the format of 'url': 'alignment').
            images: {
              'bg01.jpg': 'center',
              'bg02.jpg': 'center',
              'bg03.jpg': 'center',
              'bg04.jpg': 'center',
              'bg05.jpg': 'center',
              'bg06.jpg': 'center',
              'bg07.jpg': 'center',
              'bg08.jpg': 'center',
              'bg09.jpg': 'center',
              'bg10.jpg': 'center',
              'bg11.jpg': 'center',
              'bg12.jpg': 'center',
              'bg13.jpg': 'center',
              'bg14.jpg': 'center',
              'bg15.jpg': 'center'
            },

          // Delay.
            delay: 6000

        };

      // Vars.
        var pos = 0, lastPos = 0,
          $wrapper, $bgs = [], $bg,
          k, v;

      // Create BG wrapper, BGs.
        $wrapper = document.createElement('div');
          $wrapper.id = 'bg';
          $body.appendChild($wrapper);

        for (k in settings.images) {

          // Create BG.
            $bg = document.createElement('div');
              $bg.style.backgroundImage = 'url("' + k + '")';
              $bg.style.backgroundPosition = settings.images[k];
              $wrapper.appendChild($bg);

          // Add it to array.
            $bgs.push($bg);

        }

      // Main loop.
        $bgs[pos].classList.add('visible');
        $bgs[pos].classList.add('top');

        // Bail if we only have a single BG or the client doesn't support transitions.
          if ($bgs.length == 1
          ||  !canUse('transition'))
            return;

        window.setInterval(function() {

          lastPos = pos;
          pos++;

          // Wrap to beginning if necessary.
            if (pos >= $bgs.length)
              pos = 0;

          // Swap top images.
            $bgs[lastPos].classList.remove('top');
            $bgs[pos].classList.add('visible');
            $bgs[pos].classList.add('top');

          // Hide last image after a short delay.
            window.setTimeout(function() {
              $bgs[lastPos].classList.remove('visible');
            }, settings.delay / 2);

        }, settings.delay);

    })();

  // Signup Form.
    (function() {

      // Vars.
        var $form = document.querySelectorAll('#signup-form')[0],
          $submit = document.querySelectorAll('#signup-form input[type="submit"]')[0],
          $message;

      // Bail if addEventListener isn't supported.
        if (!('addEventListener' in $form))
          return;

      // Message.
        $message = document.createElement('span');
          $message.classList.add('message');
          $form.appendChild($message);

        $message._show = function(type, text) {

          $message.innerHTML = text;
          $message.classList.add(type);
          $message.classList.add('visible');

          window.setTimeout(function() {
            $message._hide();
          }, 3000);

        };

        $message._hide = function() {
          $message.classList.remove('visible');
        };

      // Events.
      // Note: If you're *not* using AJAX, get rid of this event listener.
        $form.addEventListener('submit', function(event) {

          event.stopPropagation();
          event.preventDefault();

          // Hide message.
            $message._hide();

          // Disable submit.
            $submit.disabled = true;

          // Process form.
          // Note: Doesn't actually do anything yet (other than report back with a "thank you"),
          // but there's enough here to piece together a working AJAX submission call that does.
            window.setTimeout(function() {

              // Reset form.
                $form.reset();

              // Enable submit.
                $submit.disabled = false;

              // Show message.
                $message._show('success', 'Thank you!');
                //$message._show('failure', 'Something went wrong. Please try again.');

            }, 750);

        });

    })();

})();
