(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),s=a.n(r),o=a(1),c=a(2),l=a(6),u=a(4),h=a(5),d=a(3),m=function(){function e(t,a,n){Object(o.a)(this,e),this.x=t,this.y=a,this.vx=0,this.vy=0,this.radius=0}return Object(c.a)(e,[{key:"getSpeed",value:function(){return Math.sqrt(this.vx*this.vx+this.vy*this.vy)}},{key:"setSpeed",value:function(e){var t=this.getHeading();this.vx=Math.cos(t)*e,this.vy=Math.sin(t)*e}},{key:"getHeading",value:function(){return Math.atan2(this.vy,this.vx)}},{key:"setHeading",value:function(e){var t=this.getSpeed();this.vx=Math.cos(e)*t,this.vy=Math.sin(e)*t}},{key:"update",value:function(){this.x+=this.vx,this.y+=this.vy}}]),e}();function g(e,t){return e+Math.random()*(t-e)}function v(e){return e/180*Math.PI}var p=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e));var n=i.a.createRef();return a.state={canvas:n,context:null,width:null,height:null,stars:[],shootingStars:[],layers:[{speed:0,scale:.2,count:320},{speed:0,scale:.5,count:50},{speed:0,scale:.75,count:10}],starsAngle:145,shootingStarSpeed:{min:15,max:20},shootingStarOpacityDelta:.01,trailLengthDelta:.01,shootingStarEmittingInterval:2e3,shootingStarLifeTime:500,maxTrailLength:300,starBaseRadius:2,shootingStarRadius:3,paused:!1},a.start=a.start.bind(Object(d.a)(Object(d.a)(a))),a.update=a.update.bind(Object(d.a)(Object(d.a)(a))),a.createShootingStar=a.createShootingStar.bind(Object(d.a)(Object(d.a)(a))),a.createStars=a.createStars.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"start",value:function(){var e=this,t=this.state.canvas.current,a=t.getContext("2d"),n=t.width=window.innerWidth,i=t.height=window.innerHeight;this.setState({context:a,width:n,height:i},function(){e.update(),setInterval(function(){e.state.paused||e.createShootingStar()},e.state.shootingStarEmittingInterval),window.onfocus=function(){return e.setState({paused:!1})},window.onblur=function(){return e.setState({paused:!0})}}),this.createStars()}},{key:"createStars",value:function(){for(var e=this.state,t=e.width,a=e.height,n=e.layers,i=e.starBaseRadius,r=e.starsAngle,s=0;s<n.length;s+=1)for(var o=n[s],c=0;c<o.count;c+=1){var l=new m(g(0,t),g(0,a),0,0);l.radius=i*o.scale,l.setSpeed(o.speed),l.setHeading(v(r)),this.state.stars.push(l)}}},{key:"createShootingStar",value:function(){var e=this.state,t=e.width,a=e.height,n=e.shootingStarSpeed,i=e.starsAngle,r=e.shootingStarRadius,s=new m(g(t/2,t),g(0,a/2),0,0);s.setSpeed(g(n.min,n.max)),s.setHeading(v(i)),s.radius=r,s.opacity=0,s.trailLengthDelta=0,s.isSpawning=!0,s.isDying=!1,this.state.shootingStars.push(s)}},{key:"killShootingStar",value:function(e){var t=this.props.shootingStarLifeTime;setTimeout(function(){e.isDying=!0},t)}},{key:"update",value:function(){var e=this.state,t=e.stars,a=e.shootingStars,n=e.width,i=e.height,r=e.paused,s=e.context,o=e.shootingStarOpacityDelta,c=e.trailLengthDelta;if(!r){s.clearRect(0,0,n,i),s.fillStyle="transparent",s.fillRect(0,0,n,i),s.fill();for(var l=0;l<t.length;l+=1){var u=t[l];u.update(),this.drawStar(u),u.x>n&&(u.x=0),u.x<0&&(u.x=n),u.y>i&&(u.y=0),u.y<0&&(u.y=i)}for(var h=0;h<a.length;h+=1){var d=a[h];d.isSpawning&&(d.opacity+=o,d.opacity>=1&&(d.isSpawning=!1,this.killShootingStar(d))),d.isDying&&(d.opacity-=o,d.opacity<=0&&(d.isDying=!1,d.isDead=!0)),d.trailLengthDelta+=c,d.update(),d.opacity>0&&this.drawShootingStar(d)}for(var m=a.length-1;m>=0;m--)a[m].isDead&&a.splice(m,1)}requestAnimationFrame(this.update)}},{key:"drawStar",value:function(e){var t=this.state.context;t.fillStyle="rgb(255, 255, 255)",t.beginPath(),t.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),t.fill()}},{key:"drawShootingStar",value:function(e){var t,a,n,i,r=this.state,s=r.context,o=r.maxTrailLength,c=e.x,l=e.y,u=o*e.trailLengthDelta,h=(t=c,a=l,n=-u,i=e.getHeading(),{x:t+n*Math.cos(i),y:a+n*Math.sin(i)});s.fillStyle="rgba(255, 255, 255, "+e.opacity+")";s.beginPath(),s.moveTo(c-1,l+1),s.lineTo(c,l+5),s.lineTo(c+1,l+1),s.lineTo(c+5,l),s.lineTo(c+1,l-1),s.lineTo(c,l+1),s.lineTo(c,l-5),s.lineTo(c-1,l-1),s.lineTo(c-5,l),s.lineTo(c-1,l+1),s.lineTo(c-5,l),s.closePath(),s.fill(),s.fillStyle="rgba(255, 221, 157, "+e.opacity+")",s.beginPath(),s.moveTo(c-1,l-1),s.lineTo(h.x,h.y),s.lineTo(c+1,l+1),s.closePath(),s.fill()}},{key:"componentDidMount",value:function(){setTimeout(this.start,200)}},{key:"render",value:function(){return i.a.createElement("canvas",{id:"starfield",ref:this.state.canvas})}}]),t}(n.PureComponent),f=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.className;return t?i.a.createElement("span",{className:a},t.split("").map(function(e,t){return i.a.createElement("span",{key:"".concat(e).concat(t),className:"char".concat(t+1)},e)})):null}}]),t}(n.PureComponent),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).goToSignUp=a.goToSignUp.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"goToSignUp",value:function(){window.open("https://goo.gl/forms/BCij5svd2iAvqZXT2","_blank")}},{key:"render",value:function(){return i.a.createElement("div",{className:"hero is-fullheight home-hero"},i.a.createElement("div",{className:"hero-body"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"columns is-centered"},i.a.createElement("h1",{className:"column is-narrow"},i.a.createElement("span",{className:"home-hero-subtitle"},"Murder Mystery at"),i.a.createElement(f,{className:"home-hero-title",text:"CEDAR GROVE"}))),i.a.createElement("div",{className:"columns is-centered"},i.a.createElement("div",{className:"column is-narrow"},i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("div",{className:"control"},i.a.createElement("button",{className:"button is-link",onClick:this.goToSignUp},"Sign Up"))))))))}}]),t}(n.PureComponent),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"moon"},i.a.createElement("ul",null,i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null)))}}]),t}(n.PureComponent),S=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"cloud-container"},i.a.createElement("div",{className:"cloud"}),i.a.createElement("div",{className:"cloud"}),i.a.createElement("div",{className:"cloud"}),i.a.createElement("div",{className:"cloud"}),i.a.createElement("div",{className:"cloud"}))}}]),t}(n.PureComponent),O=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement(y,null),i.a.createElement(b,null),i.a.createElement(S,null),i.a.createElement(p,null))}}]),t}(n.PureComponent);a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.e16daacf.chunk.js.map