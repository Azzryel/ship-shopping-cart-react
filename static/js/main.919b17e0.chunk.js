(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{16:function(e,t,n){},23:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(17),r=n.n(i),c=n(6),o=n(2),h=(n(16),n(9)),l=(n(23),[]);var d=n(0),j=Object(o.h)((function(){var e=Object(a.useState)(l.length),t=Object(h.a)(e,2),n=t[0],s=t[1],i=Object(o.g)();return Object(a.useEffect)((function(){s(l.length)}),[i]),Object(d.jsxs)("nav",{children:[Object(d.jsx)("h5",{className:"h5-nav",children:" Jolly Roger! "}),Object(d.jsxs)("div",{className:"link-container",children:[Object(d.jsx)(c.b,{to:"/",children:Object(d.jsx)("span",{className:"nav-span",children:"Home"})}),Object(d.jsx)(c.b,{to:"/shop",children:Object(d.jsx)("span",{className:"nav-span",children:"Shop"})}),Object(d.jsx)(c.b,{to:"/cart",children:Object(d.jsxs)("span",{className:"nav-span",children:["Cart ",n>0?Object(d.jsxs)("em",{children:["(",n,") "]}):""," "]})})]})]})}));n(33);var m=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:" Welcome to Jolly Roger "}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("p",{className:"p-home",children:" Get your own ship and set sails to explore the world and discover treasures!"}),Object(d.jsx)(c.b,{to:"/shop",children:Object(d.jsx)("button",{class:"btn-home",children:" Check it out "})})]})]})},b=0;function u(){return Math.floor(1e5*Math.random())+1e4}function p(){return b+=1001}var g=[{name:"Black Pearl",img:"./images/black-pearl.jpg",descr:"An ornate fictional ship made famous in the Pirates of the Caribbean film franchise, the Black Pearl is a grand ship recognizable by her intimidating black hull and sails.  Known to be untouchable for her speed, thanks to the large amount of sails she uses, she was originally known as Wicked Wench until she was burned and sunk before being resurrected from the sea floor by Davy Jones and renamed by Jack Sparrow.",money:u(),id:p(),category:"ship"},{name:"Jolly Roger",img:"./images/jolly-roger.jpg",descr:"Another fictional ship, this one featured in Peter Pan, the Jolly Roger is the ship that Captain Hook, Mr. Smee and their crew of pirates call home.  Captain Hook uses the ship as headquarters for all of his pirate business and is the only place in Neverland, besides Skull Rock, considered to be pirate territory.",money:u(),id:p(),category:"ship"},{name:"Queen Anne\u2019s Revenge",img:"./images/queen-annes-revenge.jpg",descr:"Notorious English pirate Blackbeard seized the French-owned slave ship called the Concorde in 1717 and turned it into his flagship because of its ability to sail quickly, renaming the vessel Queen Anne\u2019s Revenge.  Following a raid on five merchant ships in Charleston, the ship became severely damaged when it encountered a sandbar.  Several historians suggest that because Blackbeard knew the area well, he deliberately ran the ship aground hoping to kill some of his crew, which would enlarge his slice of the fortune.",money:u(),id:p(),category:"ship"},{name:"Fancy",img:"./images/fancy.jpg",descr:"Henry Avery, who was a one-time Royal Navy midshipman, organized a successful mutiny while stationed aboard the privateer Charles II along the coast of Spain in 1694.  This takeover set his short-lived occupation as a pirate in motion, renaming the ship the Fancy and setting out with his crew in search of fortune, which they amassed working primarily in the Indian Ocean.  They headed to the Bahamas in late 1695 with an immense fortune to retire early, where they were granted refuge in exchange for treasure.",money:u(),id:p(),category:"ship"},{name:"Whydah",img:"./images/whydah.jpg",descr:"Originally launched as a slave ship from London in 1715, the Whydah was overtaken by pirates commanded by \u201cBlack Sam\u201d Bellamy during its second voyage.  Rumored to contain treasure collected by Bellamy\u2019s crew from more than 50 ships, the Whydah ran into a storm off the coast of Cape Cod where it hit a sandbar and sank, leaving just 2 surviving men out of 146.",money:u(),id:p(),category:"ship"},{name:"Royal Fortune",img:"./images/royal-fortune.jpg",descr:"First capturing a French brigantine near Newfoundland, Bartholomew Roberts upgraded and repaired the ship, headed south to the Caribbean, and renamed her the Royal Fortune.  He also used the same name for a subsequently captured French warship and when renaming the Onslow.  Roberts died in a blaze of glory on his final Royal Fortune when it sank in an attack by a British warship.",money:u(),id:p(),category:"ship"},{name:"Thousand Sunny",img:"./images/thousand-sunny.JPG",descr:" the second ship of the Straw Hat Pirates, built after the Going Merry was destroyed. It is often referred to as Sunny by the crew.",money:u(),id:p(),category:"ship"}],f=n(8),y=n.n(f),O=(n(35),function(){var e=Object(a.useState)(g),t=Object(h.a)(e,2),n=t[0];t[1];return Object(d.jsxs)("div",{className:"shop",children:[Object(d.jsx)("h1",{children:"Jolly Roger Ships"}),Object(d.jsx)("div",{className:"shop-container",children:n.map((function(e){return Object(d.jsx)(c.b,{to:"/shop/".concat(e.id),children:Object(d.jsxs)("div",{className:"item-container",children:[Object(d.jsx)("h5",{className:"h5-shop",children:e.name},y()()),Object(d.jsx)("img",{src:e.img},y()()),Object(d.jsxs)("p",{className:"p-shop",children:[" ",e.money," \xa4 "]},y()())]},y()())},y()())}))})]})}),x=(n(36),function(e){var t=e.match,n=g.find((function(e){return e.id==parseInt(t.params.id)})),s=Object(a.useState)(n),i=Object(h.a)(s,2),r=i[0],c=(i[1],Object(a.useState)(0)),j=Object(h.a)(c,2),m=j[0],b=j[1],u=Object(o.f)();return Object(d.jsx)("div",{className:"big-container",children:Boolean(r)?Object(d.jsxs)("div",{className:"container-itm",children:[Object(d.jsxs)("h2",{className:"h2-item",children:[" ",r.name," "]}),Object(d.jsxs)("div",{className:"small-container",children:[Object(d.jsx)("img",{src:r.img,id:"display"}),Object(d.jsxs)("div",{className:"pricetag",children:[Object(d.jsxs)("p",{className:"price",children:[" Price: ",r.money," \xa4 "]}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){if(0==l.length)l.push(e);else for(var t=0;t<=l.length;t++){if(t===l.length){l.push(e);break}if(l[t].item.name===e.item.name){l[t].amount+=e.amount;break}}}({item:r,amount:parseInt(m)}),u.push("/shop")},children:[Object(d.jsx)("input",{onChange:function(e){b(e.target.value)},type:"number",max:"10",min:"1",defaultValue:"0"}),Object(d.jsx)("button",{type:"submit",children:"Add to cart"})]})]}),Object(d.jsxs)("p",{className:"descr",children:[" ",r.descr," "]})]})]}):Object(d.jsx)("div",{children:"No items found."})})}),v=(n(37),function(){var e=Object(a.useState)(l),t=Object(h.a)(e,2),n=t[0],s=(t[1],l.map((function(e){return e.item.money}))),i=l.map((function(e){return e.amount})),r=Object(a.useState)(function(e,t){for(var n=0,a=0;a<e.length;a++)n+=e[a]*t[a];return n}(s,i)),c=Object(h.a)(r,2),j=c[0],m=(c[1],Object(o.f)());return Object(d.jsxs)("div",{className:"cart-container",children:[Object(d.jsx)("h2",{className:"h2-cart",children:"Your Cart"}),n.length>0?Object(d.jsxs)("div",{children:[Object(d.jsx)("table",{children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Price"})]}),n.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[" ",e.item.name," "]},y()()),Object(d.jsxs)("td",{children:[" ",e.amount," "]},y()()),Object(d.jsxs)("td",{children:[" ",e.item.money," \xa4"]},y()())]},y()())})),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{colSpan:"2",children:"Total"}),Object(d.jsxs)("th",{children:[" ",j," \xa4 "]})]})]})}),Object(d.jsx)("button",{onClick:function(){alert("May the wind favor you!"),m.push("/")},className:"buy-btn",children:" Buy and set sail! "})]}):Object(d.jsx)("div",{className:"empty",children:"Cart is empty"})]})}),w=function(){return Object(d.jsx)(c.a,{children:Object(d.jsxs)("div",{className:"cover",children:[Object(d.jsx)(j,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(d.jsx)(o.a,{exact:!0,path:"/shop",component:O}),Object(d.jsx)(o.a,{path:"/shop/:id",component:x}),Object(d.jsx)(o.a,{exact:!0,path:"/cart",component:v})]})]})})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.919b17e0.chunk.js.map