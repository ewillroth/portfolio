(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(t,e,n){t.exports=n.p+"static/media/DevIcons-01.0c3a2bb9.svg"},function(t,e,n){t.exports=n.p+"static/media/DevIcons-14.edd89d41.svg"},function(t,e,n){t.exports=n.p+"static/media/DevIcons-03.7b72a91f.svg"},function(t,e,n){t.exports=n.p+"static/media/DevIcons-04.2a47d0b2.svg"},function(t,e,n){t.exports=n.p+"static/media/DevIcons-06.465a6879.svg"},function(t,e,n){t.exports=n.p+"static/media/DevIcons-07.7d9becbd.svg"},function(t,e,n){t.exports=n.p+"static/media/DevIcons-08.cae35285.svg"},function(t,e,n){t.exports=n.p+"static/media/DevIcons-09.81214897.svg"},function(t,e,n){t.exports=n.p+"static/media/DevIcons-10.f12019c1.svg"},function(t,e,n){t.exports=n.p+"static/media/DevIcons-13.7963a678.svg"},function(t,e,n){t.exports=n.p+"static/media/DevIcons-15.5b9ab947.svg"},function(t,e,n){t.exports=n.p+"static/media/DevIcons-02.a1bc7347.svg"},function(t,e,n){t.exports=n.p+"static/media/DevIcons-11.cb2f65a2.svg"},function(t,e,n){t.exports=n.p+"static/media/ordeerLanding.f3314177.png"},function(t,e,n){t.exports=n.p+"static/media/settleLanding.cbd584e3.png"},function(t,e,n){t.exports=n.p+"static/media/ContactIcons-03.4097a5be.svg"},function(t,e,n){t.exports=n.p+"static/media/ContactIcons-04.b3385435.svg"},function(t,e,n){t.exports=n.p+"static/media/ContactIcons-02.ce49021a.svg"},function(t,e,n){t.exports=n.p+"static/media/ContactIcons-01.e9419679.svg"},,function(t,e,n){t.exports=n(43)},,,,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(3),l=n.n(i),c=n(1),o=n(7),s=n(2);function m(){var t=Object(c.a)(["\n\tcolor: #CCCECE;\n\t:hover {\n\t\t-webkit-animation: "," 0.4s infinite;\n\t\tanimation: "," 0.4s linear;\n\t\tcursor: pointer;\n\t}\n"]);return m=function(){return t},t}function u(){var t=Object(c.a)(["\n25% {\n\ttransform: rotate(6deg);\n}\n\n50% {\n\ttransform: rotate(0deg);\n}\n\n75% {\n\ttransform: rotate(-6deg);\n}\n\n100% {\n\ttransform: rotate(0deg);\n}\n"]);return u=function(){return t},t}function p(){var t=Object(c.a)(["\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\ttext-decoration: none;\n\twidth: 400px;\n\tfont-size: 22px;\n\tfont-family: 'Merriweather', serif;\n"]);return p=function(){return t},t}function d(){var t=Object(c.a)(["\n\tbackground: ",";\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tposition: sticky;\n\ttop: 0vh;\n\theight: 80px;\n\tcolor: #CCCECE;\n\tfont-family: 'Merriweather', serif;\n\tfont-weight: 400;\n\tz-index: 1000;\n\t@media (max-width: 1050px) {\n\t\tdisplay: none;\n\t}\n"]);return d=function(){return t},t}function f(){var t=Object(c.a)(["\n\tdisplay: ",";\n\tjustify-content: space-evenly;\n\tflex-direction: column;\n"]);return f=function(){return t},t}function g(){var t=Object(c.a)(["\n\tdisplay: none;\n\tcolor: #CCCECE;\n\tcursor: pointer\n\tmargin-right: 10px;\n\t@media (max-width: 1050px) {\n\t\tdisplay: ",";\n\t}\n\t@media (max-width: 700px) {\n\t\tdisplay: none;\n\t}\n\ti {\n\t\tfont-size: 40px;\n\t}\n"]);return g=function(){return t},t}function h(){var t=Object(c.a)(["\n\tdisplay: none;\n\tbackground: ",";\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tposition: sticky;\n\ttop: 0vh;\n\theight: 80px;\n\tcolor: #CCCECE;\n\tfont-family: 'Merriweather', serif;\n\tfont-weight: 400;\n\tz-index: 1000;\n\t@media (max-width: 1050px) {\n\t\tdisplay: flex;\n\t}\n\t@media (max-width: 700px) {\n\t\tdisplay: none;\n\t}\n\n"]);return h=function(){return t},t}var E=s.a.div(h(),function(t){return t.scroll>=600?"rgba(1,0,9,100)":"rgba(0, 0, 0, 0)"}),x=s.a.div(g(),function(t){return t.showMenu?"none":"flex"}),w=s.a.div(f(),function(t){return t.showMenu?"flex":"none"}),v=s.a.div(d(),function(t){return t.scroll>=600?"rgba(1,0,9,100)":"rgba(0, 0, 0, 0)"}),b=s.a.div(p()),C=Object(s.b)(u()),y=s.a.button(m(),C,C),j=function(t){var e=Object(a.useState)(window.scrollY),n=Object(o.a)(e,2),i=n[0],l=n[1],c=Object(a.useState)(!1),s=Object(o.a)(c,2),m=s[0],u=s[1],p=function(t){document.getElementById(t.target.name).scrollIntoView({behavior:"smooth",block:"start"})},d=function(){u(!m)};return Object(a.useEffect)(function(){return document.addEventListener("scroll",function(){console.log(window.scrollY),window.scrollY>=600?l(600):l(0)}),function(){document.removeEventListener("scroll",function(){console.log(window.scrollY)})}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{scroll:i},r.a.createElement(b,null,r.a.createElement(y,{name:"about",onClick:p},"About"),r.a.createElement(y,{name:"skills",onClick:p},"Skills"),r.a.createElement(y,{name:"projects",onClick:p},"Projects"),r.a.createElement(y,{name:"contact",onClick:p},"Contact"))),r.a.createElement(E,{scroll:i},r.a.createElement(w,{showMenu:m},r.a.createElement(y,{name:"about",onClick:p},"About"),r.a.createElement(y,{name:"skills",onClick:p},"Skills"),r.a.createElement(y,{name:"projects",onClick:p},"Projects"),r.a.createElement(y,{name:"contact",onClick:p},"Contact"),r.a.createElement(y,{onClick:d},"X")),r.a.createElement(x,{showMenu:m,onClick:d},r.a.createElement("i",{class:"material-icons"},"menu"))))};function k(){var t=Object(c.a)(["\n\tcolor: #CCCECE;\n\twidth: 50%;\n\tline-height: 1.75;\n\tfont-family: 'Open Sans', sans-serif;\n\tfont-size: 16px;\n\t@media (max-width: 645px){\n\t\tmargin-top: 20px;\n\t\ttext-align: center;\n\t\tfont-size: 14px;\n\t\twidth: 85%;\n\t}\n"]);return k=function(){return t},t}function O(){var t=Object(c.a)(["\n\tbackground: #010009;\n\twidth: 100%;\n\tpadding: 110px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-family: 'Nunito', sans-serif;\n\tposition: relative;\n\ttop: -80px;\n\tcolor: #CCCECE;\n\th1 {\n\t\tfont-size: 30px;\n\t\tmargin-bottom: 80px;\n\t}\n\timg {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t\tborder-radius: 50%;\n\t}\n\t.abtcontent {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-evenly;\n\t\t\t@media (max-width: 645px){\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\t}\n"]);return O=function(){return t},t}var I=s.a.div(O()),S=s.a.p(k()),M=function(){return r.a.createElement(I,{id:"about"},r.a.createElement("h1",null,"About Me"),r.a.createElement("div",{className:"abtcontent"},r.a.createElement("img",{src:"https://lh3.googleusercontent.com/Fk-MdFmjy_yYzTDGmCE-2x0qG79FqHNLqyrQVOC7rYGqsp2Ne3PysXXw8I5lOhtbfAURSqanP6sKyTQPcvaxH9njJMslpgD7nW1GQwpVQe6pwW-jwW8lox50OZEgb8dsOJJHJlv4G0qXpuWAcvQRbAbMmyQ3DuzRCaO9LVylwcsYkl_g5Dbttcuzere4AbuT9cyn_KvQaz_roGCzWSSbQax4_qdr7idcwUCp0y1ars0jtEM7HO3Jx583bdHYiQTsWiwP_InBAPSMF8Qyj8UaAVw6IkbyJOnSm1AGCECrzQDS03agxR-zvGN_rJDPwmfPL47W7-LKvEDLnDwr0n_MIgwihZeXE6roMXEF00EzIuwLN3_5BhCWU_YCxbpGrpFKB2Rg2OnNBDOK50QcuXgVC74mxFnsW6cplyN4JAfT0QudMFgkLGBl8-q-5SKiXUHE3DjZ4VICBLMZaG0XN-CvbyaeNmJCcbSGv5J49eC6-C6ZNb9elkZWkVVkSzrvLo5XLKeqJFJkzLESGIJwgK_uUu59nniXIhpjH_itOUmhy3gbjuek6Y8TSlO-_xRqYprU9Z_4MbB3zZO-UyC1HeTmqlQOIuOvrsItViL2O1fnhf_50AR4RDA3GtZOKrllq98UPGi04pfNNhmMWkCRH3QrLJvoeK7RHHM=s200-no",alt:"",width:"100px",height:"100px"}),r.a.createElement(S,null,"I am currently looking for a job as a web developer in the Dallas area. Prior to studying web development, I worked in a few different industries\u2014including the self-driving car and construction industries\u2014that utilize software in unique ways. I experienced firsthand the impact of software development in the real world and became interested in pursuing a career in web development because of this experience. I graduate from DevMountain's Web Development Immersive course on March 1st and look forward to the continuing to learn and grow as a developer.")))},N=n(11),z=n.n(N),D=n(12),L=n.n(D),G=n(13),H=n.n(G),J=n(14),Q=n.n(J),A=n(15),T=n.n(A),W=n(16),P=n.n(W),U=n(17),_=n.n(U),q=n(18),R=n.n(q),B=n(19),F=n.n(B),V=n(20),X=n.n(V),Y=n(21),K=n.n(Y),Z=n(22),$=n.n(Z),tt=n(23),et=n.n(tt);function nt(){var t=Object(c.a)(["\n\theight: 140px;\n\twidth: 140px;\n\tmargin: 10px\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tfont-family: 'Nunito', sans-serif;\n\talign-items: center;\n\timg {\n\t\twidth: 150px;\n\t\theight: 150px;\n\t}\n\t.smallimg {\n\t\twidth: 120px;\n\t\theight: 120px;\n\t\tmargin: 15px;\n\t}\n\t@media (max-width: 700px) {\n\t\theight: 120px;\n\t\twidth: 120px;\n\t\tmargin: 10px\n\t\timg {\n\t\t\t\twidth: 100px;\n\t\t\t\theight: 100px;\n\t\t}\n\t\t.smallimg {\n\t\t\t\twidth: 80px;\n\t\t\t\theight: 80px;\n\t\t\t\tmargin: 30px;\n\t\t\t}\n\t}\n"]);return nt=function(){return t},t}function at(){var t=Object(c.a)(["\n\twidth: 80%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-evenly;\n\t@media (max-width: 700px) {\n\t\twidth: 85%;\n\t}\n"]);return at=function(){return t},t}function rt(){var t=Object(c.a)(["\n\tbackground: #010009;\n\twidth: 100%;\n\tposition: relative;\n\ttop: -80px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\tfont-family: 'Nunito', sans-serif;\n\talign-items: center;\n\tcolor: #CCCECE;\n\t\th1 {\n\t\t\tfont-size: 30px;\n\t\t\tmargin-bottom: 80px;\n\t\t}\n"]);return rt=function(){return t},t}var it=s.a.div(rt()),lt=s.a.div(at()),ct=s.a.div(nt()),ot=function(){return r.a.createElement(it,{id:"skills"},r.a.createElement("h1",null,"Skills"),r.a.createElement(lt,null,r.a.createElement(ct,null,r.a.createElement("p",null,"React"),r.a.createElement("a",{href:"https://reactjs.org"},r.a.createElement("img",{src:z.a,alt:"React"}))),r.a.createElement(ct,null,r.a.createElement("p",null,"Redux"),r.a.createElement("a",{href:"https://redux.js.org"},r.a.createElement("img",{src:L.a,alt:"Redux"}))),r.a.createElement(ct,null,r.a.createElement("p",null,"ES6+"),r.a.createElement("a",{href:"https://es6.io"},r.a.createElement("img",{src:H.a,alt:"ES6+"}))),r.a.createElement(ct,null,r.a.createElement("p",null,"Express"),r.a.createElement("a",{href:"https://expressjs.com"},r.a.createElement("img",{src:Q.a,alt:"Express"}))),r.a.createElement(ct,null,r.a.createElement("p",null,"NPM"),r.a.createElement("a",{href:"https://www.npmjs.com"},r.a.createElement("img",{src:F.a,alt:"NPM"}))),r.a.createElement(ct,null,r.a.createElement("p",null,"Sass"),r.a.createElement("a",{href:"https://sass-lang.com/"},r.a.createElement("img",{className:"smallimg",src:$.a,alt:"Sass"}))),r.a.createElement(ct,null,r.a.createElement("p",null,"Git + GitHub"),r.a.createElement("a",{href:"https://git-scm.com"},r.a.createElement("img",{src:T.a,alt:"Git + GitHub"}))),r.a.createElement(ct,null,r.a.createElement("p",null,"Socket.io"),r.a.createElement("a",{href:"https://socket.io"},r.a.createElement("img",{src:P.a,alt:"Socket.io"}))),r.a.createElement(ct,null,r.a.createElement("p",null,"PostgreSQL"),r.a.createElement("a",{href:"https://www.postgresql.org"},r.a.createElement("img",{src:_.a,alt:"PostgreSQL"}))),r.a.createElement(ct,null,r.a.createElement("p",null,"Node.js"),r.a.createElement("a",{href:"https://nodejs.org/en"},r.a.createElement("img",{src:R.a,alt:"Node.js"}))),r.a.createElement(ct,null,r.a.createElement("p",null,"CSS3"),r.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"},r.a.createElement("img",{src:X.a,alt:"CSS3"}))),r.a.createElement(ct,null,r.a.createElement("p",null,"HTML5"),r.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"},r.a.createElement("img",{src:K.a,alt:"HTML5"}))),r.a.createElement(ct,null,r.a.createElement("p",null,"Material-UI"),r.a.createElement("a",{href:"https://material-ui.com/"},r.a.createElement("img",{className:"smallimg",src:et.a,alt:"Material-UI"})))))},st=n(24),mt=n.n(st),ut=n(25),pt=n.n(ut);function dt(){var t=Object(c.a)(["\n\tcolor: #CCCECE;\n\tfont-family: 'Nunito', sans-serif;\n\tmargin: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%\n\timg {\n\t\twidth: 380px;\n\t}\n\tdiv {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tli {\n\t\t\twidth: 35vw;\n\t\t\tmargin-top: 20px\n\t\t}\n\t\t@media (max-width: 830px){\n\t\t\tflex-direction: column;\n\t\t\tli {\n\t\t\t\twidth: 85vw;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\tp {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\timg {\n\t\t\t\twidth: 280px;\n\t\t\t}\n\t\t}\n\t}\n\ta {\n\t\tmargin-right: 20px;\n\t}\n\tp {\n\t\tmargin-bottom: 20px;\n\t}\n\n"]);return dt=function(){return t},t}function ft(){var t=Object(c.a)(["\n\tbackground: #010009;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: relative;\n\ttop: -80px;\n\tmargin-bottom: -80px\n\tpadding: 80px 0px;\n\tcolor: #CCCECE;\n\tfont-family: 'Nunito', sans-serif;\n\t\th1 {\n\t\t\tfont-size: 30px;\n\t\t\tmargin-bottom: 60px;\n\t\t}\n\t\t.projName {\n\t\t\tfont-size: 26px;\n\t\t\tmargin-top: 20px;\n\t\t}\n"]);return ft=function(){return t},t}var gt=s.a.div(ft()),ht=s.a.div(dt()),Et=function(){return r.a.createElement(gt,{id:"projects"},r.a.createElement("h1",null,"Projects"),r.a.createElement(ht,null,r.a.createElement("p",{className:"projName"},"Ordeer"),r.a.createElement("p",null,"An online ordering platform for restaurants"),r.a.createElement("div",null,r.a.createElement("a",{href:"http://www.ordeer.net"},r.a.createElement("img",{src:mt.a,alt:"project landing page"})),r.a.createElement("ul",null,r.a.createElement("li",null,"Group project built in 3 weeks with two other students"),r.a.createElement("li",null,"Contains only functional components to utilize React Hooks"),r.a.createElement("li",null,"Learned & implemented Material-UI to create display cards for each menu item"),r.a.createElement("li",null,"I focused on front-end code including the registration page, order page and Jest testing"),r.a.createElement("li",null,"Code: github.com/restaurant-ordering/ordeer")))),r.a.createElement(ht,null,r.a.createElement("p",{className:"projName"},"Settle"),r.a.createElement("p",null,"A tool to help groups make decisions"),r.a.createElement("div",null,r.a.createElement("a",{href:"https://settleit.app"},r.a.createElement("img",{src:pt.a,alt:"project landing page"})),r.a.createElement("ul",null,r.a.createElement("li",null,"Awarded most technical in my cohort"),r.a.createElement("li",null,"Learned & implemented socket.io to enable realtime updates for suggestions and participants"),r.a.createElement("li",null,"Used Firebase storage to enable users to upload images"),r.a.createElement("li",null,"Live site: settleit.app | Code: github.com/ewillroth/settle")))))},xt=n(26),wt=n.n(xt),vt=n(27),bt=n.n(vt),Ct=n(28),yt=n.n(Ct),jt=n(29),kt=n.n(jt);function Ot(){var t=Object(c.a)(["\n\tdisplay: flex;\n\tmargin: 20px 10px;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: #000;\n\t.contactText {\n\t\tdisplay: none;\n\t}\n\timg{\n\t\twidth: 100px;\n\t\tmargin-bottom: 20px;\n\t}\n\timg:hover {\n\t\ttransform: scale(.97);\n\t}\n\t@media (max-width: 700px) {\n\t\timg {\n\t\t\twidth: 70px;\n\t\t}\n\t\t.contactText {\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n"]);return Ot=function(){return t},t}function It(){var t=Object(c.a)(["\n\tbackground: #CCCECE;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tflex-wrap: wrap;\n"]);return It=function(){return t},t}var St=s.a.div(It()),Mt=s.a.div(Ot()),Nt=function(){return r.a.createElement(St,{id:"contact"},r.a.createElement(Mt,null,r.a.createElement("a",{href:"tel:+12816852086"},r.a.createElement("img",{src:yt.a,alt:"phone"})),r.a.createElement("p",{className:"contactText"},"281-685-2086")),r.a.createElement(Mt,null,r.a.createElement("a",{href:"mailto:ewillroth@gmail.com"},r.a.createElement("img",{alt:"email",src:kt.a})),r.a.createElement("p",{className:"contactText"},"ewillroth@gmail.com")),r.a.createElement(Mt,null,r.a.createElement("a",{href:"https://github.com/ewillroth"},r.a.createElement("img",{src:wt.a,alt:"github"})),r.a.createElement("p",{className:"contactText"},"github.com/ewillroth")),r.a.createElement(Mt,null,r.a.createElement("a",{href:"https://www.linkedin.com/in/ewillroth/"},r.a.createElement("img",{src:bt.a,alt:"linkedin"})),r.a.createElement("p",{className:"contactText"},"linkedin.com/in/ewillroth")))};function zt(){var t=Object(c.a)(["\n\tfont-size: 24px;\n\tfont-weight 300;\n\tmargin-top: 20px;\n\tfont-family: 'Merriweather', serif;\n"]);return zt=function(){return t},t}function Dt(){var t=Object(c.a)(["\n\tfont-size: 40px;\n\tfont-weight: 500;\n\t\tfont-family: 'Merriweather', serif;\n"]);return Dt=function(){return t},t}function Lt(){var t=Object(c.a)(["\n\tbackground-image: url(https://images.unsplash.com/photo-1540675990483-e5441d694ff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80);\n\tbackground-position: center;\n\tbackground-size: cover;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 700px;\n\tposition: relative;\n\ttop: -80px;\n\tcolor: #CCCECE;\n\t@media (max-width: 700px) {\n\t\theight: 500px;\n\t}\n\ti {\n\t\tmargin-top: 20px;\n\t\tfont-size: 50px;\n\t}\n\ti:hover {\n\t\tanimation: "," 0.2s linear forwards;\n\t\tcursor: pointer;\n\t}\n"]);return Lt=function(){return t},t}function Gt(){var t=Object(c.a)(["\n\n100% {\n\ttransform: scale(1.5)\n}\n"]);return Gt=function(){return t},t}var Ht=Object(s.b)(Gt()),Jt=s.a.div(Lt(),Ht),Qt=s.a.h1(Dt()),At=s.a.h1(zt()),Tt=function(t){return r.a.createElement(Jt,null,r.a.createElement(Qt,null,"Eric Willroth"),r.a.createElement(At,null,"Web Developer"),r.a.createElement("i",{className:"material-icons",onClick:function(){return document.getElementById("about").scrollIntoView({behavior:"smooth",block:"start"})}},"expand_more"))},Wt=(n(42),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(Tt,null),r.a.createElement(M,null),r.a.createElement(ot,null),r.a.createElement(Et,null),r.a.createElement(Nt,null))});l.a.render(r.a.createElement(Wt,null),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.cb4a96c0.chunk.js.map