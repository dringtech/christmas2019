!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e,n){"use strict";var i="#431175";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r,o="#51361b";function a(){(r=createGraphics(width,height)).background(i),r.noStroke(),r.colorMode(HSB),r.fill(o),r.rect(-10,height-200,width+20,210)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"d",(function(){return m}));var i,r,o,a,c=n(6),s=n.n(c),u=n(7),h=n.n(u),f=n(8),l=n.n(f),d=n(9),p=n.n(d),v=n(10),g=n.n(v);function m(){loadFont(s.a),i=loadImage(l.a),r=loadImage(h.a),o=loadImage(p.a),a=loadImage(g.a)}},function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var i="sketch";function r(){var t=document.getElementById(i).getBoundingClientRect();return{containerWidth:t.width,containerHeight:t.height}}},function(t,e,n){"use strict";function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));var r,o="#009900",a=["red","yellow"];function c(t,e){var n=Math.random(a.length-1).toFixed(0);console.log(n),r.fill(a[n]),r.noStroke(),r.ellipse(t,e,3,3)}function s(){(r=createGraphics(240,360)).strokeWeight(4),r.scale(6),r.push(),r.translate(20,5),r.stroke("Brown"),r.line(0,0,0,50),r.stroke(o),r.fill(o),r.triangle(0,0,5,10,-5,10),r.translate(0,10),r.triangle(0,0,10,15,-10,15),r.translate(0,10),r.triangle(0,0,15,20,-15,20),r.pop();for(var t=[[18,10],[24,23],[15,34],[30,42],[16,25],[25,36],[10,40]],e=0;e<t.length;e++){var n=t[e];c.apply(void 0,i(n))}}},function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r,o,a,c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:width,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:height;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=random(e),this.y=random(n),this.maxY=n,this.speed=random(1,4)/2,this.noiseSeed=random(1e4),this.offsetRadius=100,this.turbulence=.01;var i=createGraphics(30,30),r=function(){i.push(),i.strokeWeight(2);for(var t=0;t<6;t++)i.line(0,0,0,8),i.line(0,5,2,7),i.line(0,5,-2,7),i.rotate(PI/3);i.pop()};i.translate(15,15),i.push(),i.stroke("blue"),i.strokeWeight(4),r(),i.pop(),i.stroke("white"),r(),this.flake=i}var e,n,r;return e=t,(n=[{key:"animate",value:function(){this.y+=this.speed,this.y>this.maxY+10&&(this.y=-10),this.noiseSeed+=this.turbulence}},{key:"draw",value:function(t){var e=(2*noise(this.noiseSeed,0)-1)*this.offsetRadius/2,n=(2*noise(0,this.noiseSeed)-1)*this.offsetRadius/2,i=20*noise(0,this.noiseSeed);t.push(),t.imageMode(CENTER),t.translate(this.x+e,this.y+n),t.rotate(i),t.image(this.flake,0,0),t.pop()}}])&&i(e.prototype,n),r&&i(e,r),t}();function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:width,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:height;return new c(t,e)}function u(t,e,n){t.beginShape(),t.vertex(0,windowHeight);for(var i=0;i<windowWidth;i++)t.vertex(i,noise(e+.005*i)*n+e);t.vertex(windowWidth,windowHeight),t.endShape()}function h(t){return lerpColor(color("#e5e5ff"),color("#ffffff"),t)}function f(t,e){r=createGraphics(t,e);var n=color("#adeeff"),i=round(r.width*r.height/4e3);a=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:width,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:height,i=[],r=0;r<t;r++)i[r]=s(e,n);return i}(i,r.width,r.height+20),r.background(n),r.noStroke(),r.colorMode(HSB),r.fill(h(0)),u(r,.1*r.height,100),r.fill(h(.33)),u(r,.3*r.height,100),r.fill(h(1)),u(r,r.height/2,25),o=createGraphics(r.width,r.height)}function l(t,e){o.image(r,0,0),a.forEach((function(t){t.animate(),t.draw(o)})),o.strokeWeight(10),o.stroke("black"),o.noFill(),o.rect(5,5,o.width-10,o.height-10),o.line(0,o.height/2,o.width,o.height/2),o.line(o.width/2,0,o.width/2,o.height),push(),image(o,t,e),pop()}n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return l}))},function(t,e,n){"use strict";var i=n(1);function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o,a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=e.x,i=e.y,r=e.size,o=void 0===r?100:r,a=e.wrapping,c=void 0===a?"red":a,s=e.ribbon,u=void 0===s?"yellow":s,h=e.face;this.x=n,this.y=i,this.size=o,this.wrapping=c,this.ribbon=u,this.face=h,this.face.resize(0,.8*this.size),this.offset=0,this.makeImage(),this.prime(),this.timer=void 0}var e,n,i;return e=t,(n=[{key:"makeImage",value:function(){var t=this.size;this.parcel=createGraphics(this.size+20,this.size+20),this.parcel.noStroke(),this.parcel.fill(this.wrapping),this.parcel.translate(10,10),this.parcel.rect(0,0,this.size,this.size),this.parcel.strokeCap(SQUARE),this.parcel.stroke(this.ribbon),this.parcel.strokeWeight(20),this.parcel.line(-2,t/2,t+2,t/2),this.parcel.line(t/2,-2,t/2,t+2)}},{key:"drawAnimation",value:function(){!0===this.active?this.offset=min(this.offset+15,this.size):this.offset=max(this.offset-2,0),0!==this.offset?(push(),translate(0,-this.offset),translate(-this.face.width/2,-this.face.height/2),image(this.face,0,0),pop()):this.primed||this.prime()}},{key:"explode",value:function(){this.primed=!1,this.active=!0;var t=this;this.timer=setTimeout((function(){return t.active=!1}),1e3)}},{key:"prime",value:function(){this.primed=!0;var t=this,e=100*function(t){var e=Math.exp(-1*t),n=0,i=1;do{i*=Math.random(),n++}while(i>e);return n-1}(50);this.timer=setTimeout((function(){return t.explode()}),e)}},{key:"draw",value:function(){push(),translate(this.x,this.y),this.drawAnimation(),image(this.parcel,-(this.size/2+10),-(this.size/2+10)),pop()}}])&&r(e.prototype,n),i&&r(e,i),t}();function c(){o=[{x:2.6*width/5,y:height-150,size:120,wrapping:"#62845c",ribbon:"#f9c013",face:i.b},{x:3.4*width/5,y:height-140,size:110,wrapping:"#c37fe2",ribbon:"#917fe2",face:i.e},{x:2*width/5,y:height-100,size:100,wrapping:"#63b3b7",face:i.c},{x:4*width/5,y:height-110,size:95,wrapping:"#c90404",ribbon:"#cbccef",face:i.a}].map((function(t){return new a(t)}))}n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}))},function(t,e,n){t.exports=n.p+"53e7427de4aaa693950c7a9c35de80e2.otf"},function(t,e,n){t.exports=n.p+"60eed9387274f29bcf0a798a2e6f456d.png"},function(t,e,n){t.exports=n.p+"32d7f05ee34815307a030009a2fe53a4.png"},function(t,e,n){t.exports=n.p+"24b984d50ac1845117336eecbdbb3460.png"},function(t,e,n){t.exports=n.p+"4dab56cbdf3b9b9a4433e26b510c7c8d.png"},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg>'},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(2),r=n(0);function o(){var t=i.a(),e=t.containerWidth,n=t.containerHeight;resizeCanvas(e,n),void 0!==r.a&&r.a.remove(),Object(r.b)()}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n(5),r=n(0),o=n(3),a=n(4);function c(){image(r.a,0,0),a.a(width/2,50),image(o.b,50,50);var t=!0,e=!1,n=void 0;try{for(var c,s=i.b[Symbol.iterator]();!(t=(c=s.next()).done);t=!0){c.value.draw()}}catch(t){e=!0,n=t}finally{try{t||null==s.return||s.return()}finally{if(e)throw n}}}},function(t,e,n){"use strict";var i=n(0),r=n(2),o=n(3),a=n(4),c=n(5),s={C:60,D:62,E:64,F:65,G:67,A:69,B:71};function u(t){return t.split(/\s+/).filter((function(t){return t.length>0}))}function h(t){if("0"===t)return 0;var e=s[t[0]];"+"===t[1]&&e++,"-"===t[1]&&e--;var n=12*(t[t.length-1]-4);return midiToFreq(e+n)}var f,l,d=u("\n             D4   0\n G4 0 G4 A4  G4 F+4\n E4 0 E4  0  E4   0\n A4 0 A4 B4  A4  G4\nF+4 0 D4  0  D4   0\n B4 0 B4 C5  B4  A4\n G4 0 E4  0  D4  D4\n E4 0 A4  0 F+4   0\n G4 0  0  0\n"),p=u("\n         0 0\n B2 0 0 0 0 0\n C3 0 0 0 0 0\nC+3 0 0 0 0 0\n D3 0 0 0 0 0\nD+3 0 0 0 0 0\n E3 0 0 0 B2 0\n C3 0 0 0 D3 0\n G2 0 0 0\n  "),v=u("\n           0 0\n   0 0 0 0 0 0\n   0 0 0 0 0 0\n   0 0 0 0 0 0\n   0 0 0 0 0 0\n   0 0 0 0 0 0\n   0 0 0 0 0 0\n   C4 0 0 0 C4 0\n   B3 0 0 0\n    "),g=u("\n            D4 0\n  G4 0 G4 0 G4 0\n  F+4 0 0 0 F+4 0\n  G4 0 F+4 0 E4 0\n  D4 0 0 0 A4 0\n  B4 0 A4 0 G4 0\n  D5 0 D4 0 D4 D4\n  E4 0 A4 0 F+4 0\n  G4 0 0 0\n  "),m=u("\n             0 0\n     G2 0 0 0 0 0\n     D3 0 0 0 0 0\n     A2 0 0 0 G3 0\n     F+3 0 0 0 0 0\n     G3 0 C3 0 C+3 0\n     D3 0 C3 0 B2 0\n     A2 0 0 0 D3 0\n     G3 0 0 0\n      "),b=u("\n             0 0\n     B3 0 0 0 0 0\n     D4 0 0 0 0 0\n     C-4 0 0 0 0 0\n     C4 0 0 0 0 0\n     D4 0 E4 0 0 0\n     0 0 0 0 0 0\n     C4 0 0 0 C4 0\n     D4 0 0 0\n      ");function w(t,e){l.play(e,.1,t,.2)}function y(){masterVolume(.3),(l=new p5.PolySynth(p5.MonoSynth,4)).setADSR(.1,.5,.2,1);var t={A:[d.map(h).concat(g.map(h)),p.map(h).concat(m.map(h)),v.map(h).concat(b.map(h))],B:[g.map(h),m.map(h),b.map(h)]},e=new p5.Part;t.A.forEach((function(t,n){e.addPhrase(new p5.Phrase("A".concat(n),w,t))})),(f=e).setBPM(70)}var x,k=n(11),C=n.n(k),S=n(12),A=n.n(S),z=!1;function G(){var t=z?A.a:C.a;!0===x.pressed?x.addClass("active"):x.removeClass("active"),x.html("Sound ".concat(t))}function D(){x.pressed=!0,(z=!z)?(getAudioContext().resume(),f.loop()):f.stop(),G()}function B(){x.pressed=!1,G()}function E(){y(),(x=createDiv()).pressed=!1,z=!1,G(),x.class("button"),x.mousePressed(D),x.mouseReleased(B),x;var t=r.a(),e=t.containerHeight,n=t.containerWidth;createCanvas(n,e).parent(r.b),Object(i.b)(),Object(o.a)(),Object(c.a)(),a.b(250,200),image(i.a,0,0)}n.d(e,"a",(function(){return E}))},function(t,e,n){"use strict";n.r(e),function(t){n(18);var e=n(1),i=n(15),r=n(13),o=n(14);t.preload=e.d,t.setup=i.a,t.windowResized=r.a,t.draw=o.a}.call(this,n(17))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){}]);