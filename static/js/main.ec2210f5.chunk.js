(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e){e.exports={characters:[{id:"mayhem",name:"Jarvis<br/>Bennington",role:"Friend of the Duke",content:"Details"}]}},18:function(e,t,a){e.exports=a.p+"static/media/bg.d91f0018.png"},19:function(e,t,a){e.exports=a(31)},27:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),l=a.n(s),c=a(2),i=a(3),o=a(5),u=a(4),m=a(6),h=a(32),d=a(34),b=a(35),p=a(7),v=function(){function e(t,a,n){Object(c.a)(this,e),this.x=t,this.y=a,this.vx=0,this.vy=0,this.radius=0}return Object(i.a)(e,[{key:"getSpeed",value:function(){return Math.sqrt(this.vx*this.vx+this.vy*this.vy)}},{key:"setSpeed",value:function(e){var t=this.getHeading();this.vx=Math.cos(t)*e,this.vy=Math.sin(t)*e}},{key:"getHeading",value:function(){return Math.atan2(this.vy,this.vx)}},{key:"setHeading",value:function(e){var t=this.getSpeed();this.vx=Math.cos(e)*t,this.vy=Math.sin(e)*t}},{key:"update",value:function(){this.x+=this.vx,this.y+=this.vy}}]),e}();function E(e,t){return e+Math.random()*(t-e)}function g(e){return e/180*Math.PI}var f=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(o.a)(this,Object(u.a)(t).call(this,e));var n=r.a.createRef();return a.state={canvas:n,context:null,width:null,height:null,stars:[],shootingStars:[],layers:[{speed:0,scale:.2,count:320},{speed:0,scale:.5,count:50},{speed:0,scale:.75,count:10}],starsAngle:145,shootingStarSpeed:{min:5,max:12},shootingStarOpacityDelta:.01,trailLengthDelta:.01,shootingStarEmittingInterval:2e3,shootingStarLifeTime:350,maxTrailLength:300,starBaseRadius:2,shootingStarRadius:3,paused:!1},a.start=a.start.bind(Object(p.a)(Object(p.a)(a))),a.update=a.update.bind(Object(p.a)(Object(p.a)(a))),a.createShootingStar=a.createShootingStar.bind(Object(p.a)(Object(p.a)(a))),a.createStars=a.createStars.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"start",value:function(){var e=this,t=this.state.canvas.current,a=t.getContext("2d"),n=t.width=window.innerWidth,r=t.height=window.innerHeight;this.setState({context:a,width:n,height:r},function(){e.update(),setInterval(function(){e.state.paused||e.createShootingStar()},e.state.shootingStarEmittingInterval),window.onfocus=function(){return e.setState({paused:!1})},window.onblur=function(){return e.setState({paused:!0})}}),this.createStars()}},{key:"createStars",value:function(){for(var e=this.state,t=e.width,a=e.height,n=e.layers,r=e.starBaseRadius,s=e.starsAngle,l=0;l<n.length;++l)for(var c=n[l],i=0;i<c.count;++i){var o=new v(E(0,t+50),E(-50,a),0,0);o.radius=r*c.scale,o.setSpeed(c.speed),o.setHeading(g(s)),this.state.stars.push(o)}}},{key:"createShootingStar",value:function(){var e=this.state,t=e.width,a=e.height,n=e.shootingStarSpeed,r=e.starsAngle,s=e.shootingStarRadius,l=new v(E(t/2,t),E(0,a/2),0,0);l.setSpeed(E(n.min,n.max)),l.setHeading(g(r)),l.radius=s,l.opacity=0,l.trailLengthDelta=0,l.isSpawning=!0,l.isDying=!1,this.state.shootingStars.push(l)}},{key:"killShootingStar",value:function(e){var t=this.props.shootingStarLifeTime;setTimeout(function(){e.isDying=!0},t)}},{key:"update",value:function(){var e=this.state,t=e.stars,a=e.shootingStars,n=e.width,r=e.height,s=e.paused,l=e.context,c=e.shootingStarOpacityDelta,i=e.trailLengthDelta;if(!s){l.clearRect(0,0,n,r),l.fillStyle="transparent",l.fillRect(0,0,n,r),l.fill();for(var o=0;o<t.length;++o){var u=t[o];u.update(),this.drawStar(u),u.x>n&&(u.x=0),u.x<0&&(u.x=n),u.y>r&&(u.y=0),u.y<0&&(u.y=r)}for(var m=0;m<a.length;++m){var h=a[m];h.isSpawning&&(h.opacity+=c,h.opacity>=1&&(h.isSpawning=!1,this.killShootingStar(h))),h.isDying&&(h.opacity-=c,h.opacity<=0&&(h.isDying=!1,h.isDead=!0)),h.trailLengthDelta+=i,h.update(),h.opacity>0&&this.drawShootingStar(h)}for(var d=a.length-1;d>=0;d--)a[d].isDead&&a.splice(d,1)}requestAnimationFrame(this.update)}},{key:"drawStar",value:function(e){var t=this.state.context;t.fillStyle="rgb(255, 255, 255)",t.beginPath(),t.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),t.fill()}},{key:"drawShootingStar",value:function(e){var t,a,n,r,s=this.state,l=s.context,c=s.maxTrailLength,i=e.x,o=e.y,u=c*e.trailLengthDelta,m=(t=i,a=o,n=-u,r=e.getHeading(),{x:t+n*Math.cos(r),y:a+n*Math.sin(r)});l.fillStyle="rgba(255, 255, 255, "+e.opacity+")";l.beginPath(),l.moveTo(i-1,o+1),l.lineTo(i,o+5),l.lineTo(i+1,o+1),l.lineTo(i+5,o),l.lineTo(i+1,o-1),l.lineTo(i,o+1),l.lineTo(i,o-5),l.lineTo(i-1,o-1),l.lineTo(i-5,o),l.lineTo(i-1,o+1),l.lineTo(i-5,o),l.closePath(),l.fill(),l.fillStyle="rgba(255, 221, 157, "+e.opacity+")",l.beginPath(),l.moveTo(i-1,o-1),l.lineTo(m.x,m.y),l.lineTo(i+1,o+1),l.closePath(),l.fill()}},{key:"componentDidMount",value:function(){setTimeout(this.start,200)}},{key:"render",value:function(){return r.a.createElement("canvas",{id:"starfield",ref:this.state.canvas})}}]),t}(n.PureComponent),y=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.className;return t?r.a.createElement("span",{className:a},t.split("").map(function(e,t){return r.a.createElement("span",{key:"".concat(e).concat(t),className:"char".concat(t+1)},e)})):null}}]),t}(n.PureComponent),O=a(33),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={showForm:!1,redirectTo:null},a.goToSignUp=a.goToSignUp.bind(Object(p.a)(Object(p.a)(a))),a.goToFbEvent=a.goToFbEvent.bind(Object(p.a)(Object(p.a)(a))),a.showForm=a.showForm.bind(Object(p.a)(Object(p.a)(a))),a.submit=a.submit.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"goToSignUp",value:function(){window.open("https://goo.gl/forms/BCij5svd2iAvqZXT2","_blank")}},{key:"goToFbEvent",value:function(){window.open("https://www.facebook.com/events/239440540081107","_blank")}},{key:"showForm",value:function(){this.setState({showForm:!0})}},{key:"submit",value:function(e){e.preventDefault();var t=e.target.code.value;if(t){var a=encodeURIComponent(t.toLowerCase().trim());this.setState({redirectTo:"/".concat(a)})}}},{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(O.a,{push:!0,to:this.state.redirectTo}):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"header-card has-text-centered ".concat(this.props.className)},r.a.createElement("div",null,r.a.createElement("h3",{className:"title"},"Nov 3",r.a.createElement("sup",null,"rd")),r.a.createElement("button",{className:"button is-info",onClick:this.goToSignUp},"Sign Up"),r.a.createElement("button",{className:"button is-facebook",onClick:this.goToFbEvent},r.a.createElement("span",{className:"icon is-medium"},r.a.createElement("i",{className:"fab fa-facebook"}))," ",r.a.createElement("span",null,"Event"))),!this.state.showForm&&r.a.createElement("div",null,r.a.createElement("button",{className:"button is-primary",onClick:this.showForm},"View Character")),this.state.showForm&&r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submit},r.a.createElement("div",{class:"field has-addons centered-input"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",name:"code",placeholder:"Character Code"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-primary"},"Go")))))))}}]),t}(n.PureComponent),w=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"hero is-fullheight home-hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-mobile is-narrow"},r.a.createElement("h1",null,r.a.createElement("span",{className:"super-subtitle"},"Murder Mystery on"),r.a.createElement(y,{className:"super-title",text:"CEDAR GROVE"})))),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-full-mobile is-half-desktop"},r.a.createElement(j,{className:"sign-up"}))))))}}]),t}(n.PureComponent),N=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section has-background-info has-text-light"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"title has-text-light"},"Murder is Afoot"),r.a.createElement("p",null,"The groundskeeper found the pool boy murdered in cold blood. Nonetheless, the Duke's Banquet must go on.",r.a.createElement("br",null),r.a.createElement("br",null),"Can ",r.a.createElement("i",null,"you")," figure out who did it?")))}}]),t}(n.PureComponent),k=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section has-background-white-ter"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title"},"Event"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("h3",{className:"is-size-4"},"When"),r.a.createElement("p",null,"Nov 3rd ",r.a.createElement("br",null),"7pm to 10:30pm")),r.a.createElement("div",{className:"column"},r.a.createElement("h3",{className:"is-size-4"},"Where"),r.a.createElement("p",null,"Eric's Apartment",r.a.createElement("br",null),"3825 Cedar Grove Parkway",r.a.createElement("br",null),"Eagan, MN 55122")),r.a.createElement("div",{className:"column"},r.a.createElement("h3",{className:"is-size-4"},"Dress"),r.a.createElement("p",null,"Eccentric Victorian Formal")))))}}]),t}(n.PureComponent),S=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section has-background-white-ter"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title"},"Rules"),r.a.createElement("h3",{className:"is-size-4"},"Proceedings"),r.a.createElement("p",null,"The whole town has been invited to the Duke's estate. Rumor is, the Duke was looking to announce his will \u2014 as he certainly isn't getting any younger. Everyone and thier dog have been itching to get a slice of the pie, but so badly that someone was willing to commit murder? Word is, the Duke has been on the hunt for a new Dutchess as well, ever since the Old Lady passed a few years ago."),r.a.createElement("p",null,"The Duke's banquet is to be kept on a tight schedule. The night's itinerary includes dinner, games, and bustling conversationn \u2014 among ",r.a.createElement("i",null,"other")," things."),r.a.createElement("p",null,'You are about to become a suspect in a murder mystery. It is up to you to figure out "whodunit" by denouncing the guilty secrets of others while trying to prove your innocence.'),r.a.createElement("h3",{className:"is-size-4"},"How To Play"),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,"Attend!"),r.a.createElement("li",null,"Read your clues and character description."),r.a.createElement("li",null,"Please remain in character throughout the game."),r.a.createElement("li",null,"The game will take part in three Acts."),r.a.createElement("li",null,"The murderer(s) will not know that he or she is the murderer. Thus, all players should suspect even themselves."),r.a.createElement("li",null,"Some of your clues will come in sealed envelopes. Events throughout the night will always be accompanied by symbols appearing on a sign. If you see a symbol that matches a sealed envelope you have, open it!"),r.a.createElement("li",null,"SHARE YOUR CLUES! During the games, talk to everyone! See what clues they know, what their alibi might be, who they think is the murderer! Talk about your clues through the entire event. The more people you talk to, the more likely you will be to solve the mystery!"),r.a.createElement("li",null,"Before the final submission (which you will write on a notecard and put in a box), all guests will be allowed to share an accusation. For each unique accusation, the suspect may share their defense.")))))}}]),t}(n.PureComponent),T=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section has-background-info"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{class:"title has-text-right has-text-light"},"- Yours Truly,",r.a.createElement("br",null),"The Duke",r.a.createElement("br",null),r.a.createElement("span",{className:"duke-sig"},"Eric Lee"))))}}]),t}(n.PureComponent),x=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("strong",null,"Murder Mystery on Cedar Grove")," is an event hosted by Eric Lee. I also made this cool website,\xa0",r.a.createElement("a",{href:"https://github.com/ayrock-dev/murder-mystery"},"check out it's source code here.")))}}]),t}(n.PureComponent),C=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"moon"},r.a.createElement("ul",null,r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null)))}}]),t}(n.PureComponent),P=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cloud-wrapper"},r.a.createElement("div",{className:"cloud-container"},r.a.createElement("div",{className:"cloud"},r.a.createElement("div",{className:"cloud-inner"})),r.a.createElement("div",{className:"cloud"},r.a.createElement("div",{className:"cloud-inner"})),r.a.createElement("div",{className:"cloud"},r.a.createElement("div",{className:"cloud-inner"})),r.a.createElement("div",{className:"cloud"},r.a.createElement("div",{className:"cloud-inner"})),r.a.createElement("div",{className:"cloud"},r.a.createElement("div",{className:"cloud-inner"}))))}}]),t}(n.PureComponent),D=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"global-toast notification is-danger"},r.a.createElement("button",{className:"delete",onClick:this.props.close}),"Could not find any character for that code word.")}}]),t}(n.PureComponent),M=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(o.a)(this,Object(u.a)(t).call(this,e));var n=new URLSearchParams(a.props.location.search).get("e");return a.state={toast:"invalid"===n},a.closeToast=a.closeToast.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"closeToast",value:function(){this.setState({toast:!1})}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,this.state.toast&&r.a.createElement(D,{close:this.closeToast}),r.a.createElement(w,null),r.a.createElement(N,null),r.a.createElement(k,null),r.a.createElement(S,null),r.a.createElement(T,null),r.a.createElement(x,null),r.a.createElement(C,null),r.a.createElement(P,null),r.a.createElement(f,null))}}]),t}(n.PureComponent),L=a(17),F=a(18),R=a.n(F),I=function(e){return{__html:e}},A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={char:L.characters.find(function(t){return t.id.toLowerCase()===decodeURIComponent(e.match.params.id).toLowerCase()})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.char;return e?r.a.createElement("div",{className:"CharacterPage"},r.a.createElement("div",{className:"page-wrapper"},r.a.createElement("img",{className:"bg",src:R.a,alt:"Murder mansion"}),r.a.createElement("section",{className:"section identity"},r.a.createElement("div",{className:"name-wrapper"},r.a.createElement("span",{className:"name",dangerouslySetInnerHTML:I(e.name)})),r.a.createElement("div",{className:"role-wrapper"},r.a.createElement("span",{className:"role"},e.role)),r.a.createElement("div",{className:"see-more"},r.a.createElement("span",{className:"icon is-large"},r.a.createElement("i",{class:"fas fa-angle-double-down fa-3x"})))),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"content",dangerouslySetInnerHTML:I(e.content)}))))):r.a.createElement(O.a,{to:"/?e=invalid"})}}]),t}(n.PureComponent),H=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(d.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:M}),r.a.createElement(b.a,{path:"/:id",component:A})))}}]),t}(n.PureComponent);a(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.ec2210f5.chunk.js.map