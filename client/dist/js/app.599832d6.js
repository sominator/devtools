(function(e){function t(t){for(var a,r,c=t[0],s=t[1],l=t[2],d=0,m=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},i=[];function r(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-e97dc206":"743f2631"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(e);var l=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}o[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"045a":function(e,t,n){"use strict";var a=n("ac31"),o=n.n(a);o.a},"07b2":function(e,t,n){"use strict";var a=n("b8c5"),o=n.n(a);o.a},"0ed5":function(e,t,n){"use strict";var a=n("ac1f"),o=n.n(a);o.a},1:function(e,t){},1519:function(e,t,n){"use strict";var a=n("b482"),o=n.n(a);o.a},1685:function(e,t,n){},"1a51":function(e,t,n){},"1b69":function(e,t,n){},"23db":function(e,t,n){"use strict";var a=n("1b69"),o=n.n(a);o.a},"24e6":function(e,t,n){},"3e9f":function(e,t,n){"use strict";var a=n("6dc5"),o=n.n(a);o.a},"436d":function(e,t,n){"use strict";var a=n("8b74"),o=n.n(a);o.a},4697:function(e,t,n){},"4a21":function(e,t,n){"use strict";var a=n("24e6"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a"),n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var a=n("2b0e"),o=n("2f62"),i=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(i["a"]);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"menu-container"}},[n("b-button-group",[n("b-button",{directives:[{name:"show",rawName:"v-show",value:"games"===e.rootToggle,expression:"rootToggle==='games'"}],attrs:{variant:"info"}},[e._v("Designer")]),n("b-button",{directives:[{name:"show",rawName:"v-show",value:"simulator"===e.rootToggle,expression:"rootToggle==='simulator'"}],on:{click:function(t){return e.toggleRoot("games")}}},[e._v("Designer")]),n("b-button",{directives:[{name:"show",rawName:"v-show",value:"simulator"===e.rootToggle,expression:"rootToggle==='simulator'"}],attrs:{variant:"info"}},[e._v("Simulator")]),n("b-button",{directives:[{name:"show",rawName:"v-show",value:"games"===e.rootToggle,expression:"rootToggle==='games'"}],on:{click:function(t){return e.toggleRoot("simulator")}}},[e._v("Simulator")])],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"games"===e.rootToggle,expression:"rootToggle === 'games'"}],attrs:{id:"games-container"}},[n("Games",{on:{displayModal:e.displayModal}}),n("div",{directives:[{name:"show",rawName:"v-show",value:null!=e.modalToggle,expression:"modalToggle != null"}],class:{"modal-create-card":"createCard"===e.modalToggle,"modal-create-container":"createContainer"===e.modalToggle,"modal-create-game":"createGame"===e.modalToggle,"modal-create-list-item":"createListItem"===e.modalToggle,"modal-create-mechanic":"createMechanic"===e.modalToggle},attrs:{id:"modal-container"}},["createGame"===e.modalToggle?n("CreateGame",{on:{createGame:e.createGame,cancelModal:e.cancelModal}}):"createContainer"===e.modalToggle?n("CreateContainer",{on:{createContainer:e.createContainer,cancelModal:e.cancelModal}}):"createCard"===e.modalToggle?n("CreateCard",{on:{createCard:e.createCard,cancelModal:e.cancelModal}}):"createListItem"===e.modalToggle?n("CreateListItem",{on:{createListItem:e.createListItem,cancelModal:e.cancelModal}}):"createMechanic"===e.modalToggle?n("CreateMechanic",{on:{createMechanic:e.createMechanic,cancelModal:e.cancelModal}}):e._e()],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"simulator"===e.rootToggle,expression:"rootToggle === 'simulator'"}],attrs:{id:"simulator-container"}},[n("Simulator")],1),e._m(0)])},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"img-footer"}},[a("a",{attrs:{href:"https://www.nightpathpub.com",target:"_blank"}},[a("img",{attrs:{src:n("a5ee"),alt:"Nightpath Publishing Logo"}})]),a("a",{attrs:{href:"mailto:info@entromancy.com"}},[a("p",{staticStyle:{color:"#f8f9fa","margin-right":"1vw","margin-top":"1vh"}},[e._v("Send Us Feedback!")])])])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:{"modal-showing":this.$store.state.modalState},attrs:{id:"games-container"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"allGames"===e.toggle,expression:"toggle === 'allGames'"}]},[n("p",[n("b-button",{attrs:{pill:"",variant:"secondary"},on:{click:function(t){return e.displayModal("createGame")}}},[e._v("+ Create Game")])],1),n("div",{attrs:{id:"all-games"}},[n("b-card-group",{attrs:{deck:""}},e._l(this.$store.state.games,(function(t){return n("Game",{key:t.id,attrs:{game:t},on:{selectGame:e.selectGame}})})),1)],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:"viewGame"===e.toggle,expression:"toggle === 'viewGame'"}]},[n("div",{attrs:{id:"view-game"}},[n("p",[n("b-button",{directives:[{name:"show",rawName:"v-show",value:!1===this.$store.state.containerShowing,expression:"this.$store.state.containerShowing===false"}],attrs:{pill:"",variant:"secondary"},on:{click:function(t){return e.changeToggle("allGames")}}},[e._v("Back to Games")])],1),n("Containers",{on:{displayModal:e.displayModal}})],1)])])])},l=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-card",{attrs:{"bg-variant":"info","text-variant":"white","header-tag":"header","footer-tag":"footer",id:"game"},scopedSlots:e._u([{key:"header",fn:function(){return[n("h3",[e._v(e._s(e.game.name))])]},proxy:!0},{key:"footer",fn:function(){return[n("em",[e._v(e._s(e.game.description))])]},proxy:!0}])},[n("b-button",{attrs:{variant:"secondary"},on:{click:e.selectGame}},[e._v("Select Game")])],1)],1)},u=[],m={name:"Game",props:{game:Object},methods:{selectGame:function(){this.$emit("selectGame",this.game.id)}}},g=m,p=(n("8207"),n("2877")),h=Object(p["a"])(g,d,u,!1,null,"ad395d54",null),f=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:{"modal-showing":this.$store.state.modalState},attrs:{id:"containers-container"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"allContainers"===e.toggle,expression:"toggle === 'allContainers'"}]},[n("p",[n("b-button",{attrs:{pill:"",variant:"secondary"},on:{click:function(t){return e.displayModal("createContainer")}}},[e._v("+ Create Container")])],1),null!==this.$store.state.selectedGameId?n("div",{attrs:{id:"all-containers"}},[n("b-card-group",{attrs:{deck:""}},e._l(this.$store.getters.selectedGame.containers,(function(t){return n("Container",{key:t.id,attrs:{container:t},on:{selectContainer:e.selectContainer}})})),1)],1):e._e()]),n("div",{directives:[{name:"show",rawName:"v-show",value:"viewDeck"===e.toggle,expression:"toggle === 'viewDeck'"}]},[n("div",{staticClass:"view-container"},[n("Deck",{on:{displayModal:e.displayModal,changeToggle:e.changeToggle}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:"viewList"===e.toggle,expression:"toggle === 'viewList'"}]},[n("div",{staticClass:"view-container"},[n("List",{on:{displayModal:e.displayModal,changeToggle:e.changeToggle}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:"viewMechanicsGroup"===e.toggle,expression:"toggle === 'viewMechanicsGroup'"}]},[n("div",{staticClass:"view-container"},[n("Mechanics",{on:{displayModal:e.displayModal,changeToggle:e.changeToggle}})],1)])])])},b=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-card",{attrs:{"bg-variant":"info","text-variant":"white","header-tag":"header","footer-tag":"footer",id:"container"},scopedSlots:e._u([{key:"header",fn:function(){return[n("h3",[e._v(e._s(e.container.name))])]},proxy:!0},{key:"footer",fn:function(){return[n("em",[e._v(e._s(e.container.description))])]},proxy:!0}])},["deck"===e.container.type?n("b-button",{attrs:{variant:"secondary"},on:{click:e.selectContainer}},[e._v("Select Deck")]):e._e(),"list"===e.container.type?n("b-button",{attrs:{variant:"secondary"},on:{click:e.selectContainer}},[e._v("Select List")]):e._e(),"mechanics-group"===e.container.type?n("b-button",{attrs:{variant:"secondary"},on:{click:e.selectContainer}},[e._v("Select Mechanics Group")]):e._e()],1)],1)},_=[],y={name:"Container",props:{container:Object},methods:{selectContainer:function(){this.$emit("selectContainer",this.container.id,this.container.type)}}},w=y,x=(n("3e9f"),Object(p["a"])(w,C,_,!1,null,"68df0608",null)),M=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:{"modal-showing":this.$store.state.modalState},attrs:{id:"deck-container"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"allCards"===e.toggle,expression:"toggle==='allCards'"}]},[n("p",[n("b-button",{attrs:{pill:"",variant:"secondary"},on:{click:function(t){return e.changeToggle("allContainers")}}},[e._v("Back to Containers")])],1),n("p",[n("b-button",{attrs:{pill:"",variant:"secondary"},on:{click:function(t){return e.displayModal("createCard")}}},[e._v("+ Create Card")]),null!==this.$store.state.selectedContainerId?n("b-button",{attrs:{pill:"",variant:"danger"},on:{click:e.exportDeck}},[e._v("Export into Simulator")]):e._e()],1),null!==this.$store.state.selectedContainerId?n("div",{attrs:{id:"all-cards"}},[n("b-card-group",{attrs:{deck:""}},e._l(this.$store.getters.selectedContainer.cards,(function(e){return n("Card",{key:e.id,attrs:{card:e}})})),1)],1):e._e()])])])},I=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-card",{attrs:{"bg-variant":"info","text-variant":"white","header-tag":"header","footer-tag":"footer",id:"card"},scopedSlots:e._u([{key:"header",fn:function(){return[n("h3",[e._v(e._s(e.card.name))])]},proxy:!0}])},[n("b-card-text",[n("p",[n("em",[e._v(e._s(e.card.description))])])])],1)],1)},S=[],G={name:"Card",props:{card:Object}},T=G,L=(n("a1ec"),Object(p["a"])(T,$,S,!1,null,"67dd70c4",null)),j=L.exports,O=n("8055"),D=n.n(O),N=D()("http://localhost:3000"),E={name:"Deck",components:{Card:j},data:function(){return{toggle:"allCards"}},methods:{changeToggle:function(e){this.$emit("changeToggle",e),this.$store.commit("toggleContainerShowing")},displayModal:function(e){this.$emit("displayModal",e)},exportDeck:function(){N.emit("exportDeck",this.$store.getters.selectedContainer,this.$store.state.roomId)}},created:function(){var e=this;N.on("connect",(function(){console.log("Vue connected!"),e.$store.commit("storeRoomId",N.id)}))}},q=E,P=(n("78ff"),Object(p["a"])(q,k,I,!1,null,"394d4e1a",null)),R=P.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:{"modal-showing":this.$store.state.modalState},attrs:{id:"deck-container"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"allListItems"===e.toggle,expression:"toggle==='allListItems'"}]},[n("p",[n("b-button",{attrs:{pill:"",variant:"secondary"},on:{click:function(t){return e.changeToggle("allContainers")}}},[e._v("Back to Containers")])],1),n("p",[n("b-button",{attrs:{pill:"",variant:"secondary"},on:{click:function(t){return e.displayModal("createListItem")}}},[e._v("+ Create List Item")]),null!==this.$store.state.selectedContainerId?n("b-button",{attrs:{pill:"",variant:"danger"},on:{click:e.randomListItem}},[e._v("Select a Random List Item")]):e._e(),n("b-modal",{attrs:{scrollable:"",centered:"","header-bg-variant":"secondary","header-text-variant":"light","body-bg-variant":"info","body-text-variant":"light","footer-bg-variant":"secondary","footer-text-variant":"light","cancel-disabled":"",title:"Random List Item"},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("b-button",{attrs:{variant:"danger"},on:{click:function(t){e.modalShow=!e.modalShow}}},[e._v("Close")])]},proxy:!0}]),model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[n("h1",[e._v(e._s(e.randomObj.name))]),n("p",{staticStyle:{"overflow-wrap":"break-word"}},[n("em",[e._v(e._s(e.randomObj.description))])])])],1),null!==this.$store.state.selectedContainerId?n("div",{attrs:{id:"all-list-items"}},[n("b-card-group",{attrs:{deck:""}},e._l(this.$store.getters.selectedContainer.listItems,(function(e){return n("ListItem",{key:e.id,attrs:{listItem:e}})})),1)],1):e._e()])])])},B=[],J=(n("b64b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-card",{attrs:{"bg-variant":"info","text-variant":"white","header-tag":"header","footer-tag":"footer",id:"list-item"},scopedSlots:e._u([{key:"header",fn:function(){return[n("h3",[e._v(e._s(e.listItem.name))])]},proxy:!0}])},[n("b-card-text",[n("p",[n("em",[e._v(e._s(e.listItem.description))])])])],1)],1)}),F=[],U={name:"ListItem",props:{listItem:Object}},V=U,W=(n("23db"),Object(p["a"])(V,J,F,!1,null,"70dbb71d",null)),z=W.exports,H={name:"List",components:{ListItem:z},data:function(){return{toggle:"allListItems",modalShow:!1,randomObj:{name:"",description:"Create some list items to select one at random."}}},methods:{changeToggle:function(e){this.$emit("changeToggle",e),this.$store.commit("toggleContainerShowing")},displayModal:function(e){this.$emit("displayModal",e)},randomListItem:function(){if(this.$store.getters.selectedContainer.listItemsId>0){var e=this.$store.getters.selectedContainer.listItems,t=Object.keys(e);this.randomObj=e[t[t.length*Math.random()<<0]]}this.modalShow=!this.modalShow}}},K=H,Q=(n("436d"),Object(p["a"])(K,A,B,!1,null,"43cc9465",null)),X=Q.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:{"modal-showing":this.$store.state.modalState},attrs:{id:"mechanics-container"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"allMechanics"===e.toggle,expression:"toggle==='allMechanics'"}]},[n("p",[n("b-button",{attrs:{pill:"",variant:"secondary"},on:{click:function(t){return e.changeToggle("allContainers")}}},[e._v("Back to Containers")])],1),n("p",[n("b-button",{attrs:{pill:"",variant:"secondary"},on:{click:function(t){return e.displayModal("createMechanic")}}},[e._v("+ Create Mechanic")])],1),null!==this.$store.state.selectedContainerId?n("div",{attrs:{id:"all-mechanics"}},[n("b-card-group",{attrs:{deck:""}},e._l(this.$store.getters.selectedContainer.mechanics,(function(e){return n("Mechanic",{key:e.id,attrs:{mechanic:e}})})),1)],1):e._e()])])])},Z=[],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-card",{attrs:{"bg-variant":"info","text-variant":"white","header-tag":"header","footer-tag":"footer",id:"mechanic"},scopedSlots:e._u([{key:"header",fn:function(){return[n("h3",[e._v(e._s(e.mechanic.name))])]},proxy:!0},{key:"footer",fn:function(){return[n("em",[e._v(e._s(e.mechanic.description))])]},proxy:!0}])},[n("b-card-text",[n("p",[e._v("Dice Model: "),e.mechanic.y>=0?n("span",[e._v(e._s(e.mechanic.x)+"d"+e._s(e.mechanic.diceModel)+"+"+e._s(e.mechanic.y))]):n("span",[e._v(e._s(e.mechanic.x)+"d"+e._s(e.mechanic.diceModel)+e._s(e.mechanic.y))])])]),n("b-button",{attrs:{variant:"danger"},on:{click:e.roll}},[e._v("Roll Mechanic")]),n("br"),n("br"),n("p",[e._v(e._s(e.output))])],1)],1)},te=[],ne={name:"Mechanic",props:{mechanic:Object},data:function(){return{output:"Click 'roll mechanic' to generate a result."}},methods:{roll:function(){var e=Math.floor(1+Math.random()*this.mechanic.diceModel)*this.mechanic.x+parseInt(this.mechanic.y);this.output="Rolled "+this.mechanic.x+"d"+this.mechanic.diceModel+" + "+this.mechanic.y+" = "+e}}},ae=ne,oe=(n("4a21"),Object(p["a"])(ae,ee,te,!1,null,"689186b0",null)),ie=oe.exports,re={name:"Mechanics",components:{Mechanic:ie},data:function(){return{toggle:"allMechanics"}},methods:{changeToggle:function(e){this.$emit("changeToggle",e),this.$store.commit("toggleContainerShowing")},displayModal:function(e){this.$emit("displayModal",e)}}},ce=re,se=(n("1519"),Object(p["a"])(ce,Y,Z,!1,null,"f70dee38",null)),le=se.exports,de={name:"Containers",components:{Container:M,Deck:R,List:X,Mechanics:le},data:function(){return{toggle:"allContainers"}},methods:{changeToggle:function(e){this.toggle=e},displayModal:function(e){this.$emit("displayModal",e)},selectContainer:function(e,t){"deck"===t?this.changeToggle("viewDeck"):"list"===t?this.changeToggle("viewList"):"mechanics-group"===t&&this.changeToggle("viewMechanicsGroup"),this.$store.commit("selectContainer",e),this.$store.commit("toggleContainerShowing")}}},ue=de,me=(n("ef79"),Object(p["a"])(ue,v,b,!1,null,"220ee349",null)),ge=me.exports,pe={name:"Games",components:{Game:f,Containers:ge},data:function(){return{toggle:"allGames"}},methods:{changeToggle:function(e){this.toggle=e},displayModal:function(e){this.$emit("displayModal",e)},selectGame:function(e){this.changeToggle("viewGame"),this.$store.commit("selectGame",e)}}},he=pe,fe=(n("e29f"),Object(p["a"])(he,s,l,!1,null,"090fe468",null)),ve=fe.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.downloaded?n("div",{staticClass:"simulator",attrs:{id:e.containerId}}):n("div",{staticClass:"placeholder"},[e._v(" Starting simulator! ")])},Ce=[],_e=(n("d3b7"),n("96cf"),n("1da1")),ye={name:"Simulator",data:function(){return{containerId:"simulator",downloaded:!1,gameInstance:null}},mounted:function(){var e=this;return Object(_e["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e("chunk-e97dc206").then(n.bind(null,"4c1b"));case 2:a=t.sent,e.downloaded=!0,e.$nextTick((function(){e.gameInstance=a.launch(e.containerId,e.$store.state.roomId)}));case 5:case"end":return t.stop()}}),t)})))()},destroyed:function(){this.gameInstance.destroy(!1)}},we=ye,xe=(n("5786"),Object(p["a"])(we,be,Ce,!1,null,"22043fd4",null)),Me=xe.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"create-game"}},[n("b-form",{on:{submit:e.onSubmit}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Game Name:","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",placeholder:"e.g. 'Entromancy'",required:""},model:{value:e.game.name,callback:function(t){e.$set(e.game,"name",t)},expression:"game.name"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Game Description:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",placeholder:"e.g. 'New TTRPG'",required:""},model:{value:e.game.description,callback:function(t){e.$set(e.game,"description",t)},expression:"game.description"}})],1),n("b-button",{attrs:{type:"submit",variant:"info"}},[e._v("Add Game")]),n("b-button",{attrs:{variant:"danger"},on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)},Ie=[],$e={name:"CreateGame",data:function(){return{game:{name:"",description:""}}},methods:{onSubmit:function(e){e.preventDefault(),this.$emit("createGame",this.game)},onCancel:function(e){e.preventDefault(),this.$emit("cancelModal")}}},Se=$e,Ge=(n("045a"),Object(p["a"])(Se,ke,Ie,!1,null,"3c7e1f03",null)),Te=Ge.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"create-container"}},[n("b-form",{on:{submit:e.onSubmit}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Container Name:","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",placeholder:"e.g. 'Core Deck' or 'NPC List'",required:""},model:{value:e.container.name,callback:function(t){e.$set(e.container,"name",t)},expression:"container.name"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Container Description:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",placeholder:"e.g. 'List of all local NPCs'",required:""},model:{value:e.container.description,callback:function(t){e.$set(e.container,"description",t)},expression:"container.description"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Container Type:","label-for":"input-3"}},[n("b-form-radio-group",{attrs:{id:"input-3",required:""},model:{value:e.container.type,callback:function(t){e.$set(e.container,"type",t)},expression:"container.type"}},[n("b-form-radio",{attrs:{value:"deck"}},[e._v("Deck")]),n("b-form-radio",{attrs:{value:"list"}},[e._v("List")]),n("b-form-radio",{attrs:{value:"mechanics-group"}},[e._v("Mechanics Group")])],1)],1),n("b-button",{attrs:{type:"submit",variant:"info"}},[e._v("Add Container")]),n("b-button",{attrs:{variant:"danger"},on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)},je=[],Oe={name:"CreateContainer",data:function(){return{container:{name:"",description:"",type:""}}},methods:{onSubmit:function(e){e.preventDefault(),this.$emit("createContainer",this.container)},onCancel:function(e){e.preventDefault(),this.$emit("cancelModal")}}},De=Oe,Ne=(n("0ed5"),Object(p["a"])(De,Le,je,!1,null,"e9cbce02",null)),Ee=Ne.exports,qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"create-card"}},[n("b-form",{on:{submit:e.onSubmit}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Card Name:","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",placeholder:"e.g. 'Shadow Bolt'",required:""},model:{value:e.card.name,callback:function(t){e.$set(e.card,"name",t)},expression:"card.name"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Card Description:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",placeholder:"e.g. 'Deals 1d6 damage.'",required:""},model:{value:e.card.description,callback:function(t){e.$set(e.card,"description",t)},expression:"card.description"}})],1),n("b-button",{attrs:{type:"submit",variant:"info"}},[e._v("Add Card")]),n("b-button",{attrs:{variant:"danger"},on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)},Pe=[],Re={name:"CreateCard",data:function(){return{card:{name:"",description:""}}},methods:{onSubmit:function(e){e.preventDefault(),this.$emit("createCard",this.card)},onCancel:function(e){e.preventDefault(),this.$emit("cancelModal")}}},Ae=Re,Be=(n("b374"),Object(p["a"])(Ae,qe,Pe,!1,null,"6c5a5c14",null)),Je=Be.exports,Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"create-list-item"}},[n("b-form",{on:{submit:e.onSubmit}},[n("b-form-group",{attrs:{id:"input-group-1",label:"List Item Name:","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",placeholder:"e.g. 'Marty & Marta Barkeep'",required:""},model:{value:e.listItem.name,callback:function(t){e.$set(e.listItem,"name",t)},expression:"listItem.name"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"List Item Description:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",placeholder:"e.g. 'Town Tavernkeeps.'",required:""},model:{value:e.listItem.description,callback:function(t){e.$set(e.listItem,"description",t)},expression:"listItem.description"}})],1),n("b-button",{attrs:{type:"submit",variant:"info"}},[e._v("Add List Item")]),n("b-button",{attrs:{variant:"danger"},on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)},Ue=[],Ve={name:"CreateListItem",data:function(){return{listItem:{name:"",description:""}}},methods:{onSubmit:function(e){e.preventDefault(),this.$emit("createListItem",this.listItem)},onCancel:function(e){e.preventDefault(),this.$emit("cancelModal")}}},We=Ve,ze=(n("07b2"),Object(p["a"])(We,Fe,Ue,!1,null,"0328df3e",null)),He=ze.exports,Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"create-mechanic"}},[n("b-form",{on:{submit:e.onSubmit}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Mechanic Name:","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",placeholder:"e.g. 'Athletics Check'",required:""},model:{value:e.mechanic.name,callback:function(t){e.$set(e.mechanic,"name",t)},expression:"mechanic.name"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Mechanic Description:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",placeholder:"e.g. 'Core class skill check.'",required:""},model:{value:e.mechanic.description,callback:function(t){e.$set(e.mechanic,"description",t)},expression:"mechanic.description"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Dice Model:","label-for":"input-3"}},[n("b-container",{attrs:{fluid:""}},[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{attrs:{sm:"auto"}},[n("b-form-spinbutton",{attrs:{min:"1",max:"100",required:""},model:{value:e.mechanic.x,callback:function(t){e.$set(e.mechanic,"x",t)},expression:"mechanic.x"}})],1),n("b-col",{attrs:{sm:"auto"}},[n("b-form-select",{attrs:{options:e.diceModels,required:""},model:{value:e.mechanic.diceModel,callback:function(t){e.$set(e.mechanic,"diceModel",t)},expression:"mechanic.diceModel"}})],1),n("b-col",{attrs:{sm:"auto"}},[n("b-form-spinbutton",{attrs:{min:"-100",max:"100",required:""},model:{value:e.mechanic.y,callback:function(t){e.$set(e.mechanic,"y",t)},expression:"mechanic.y"}})],1)],1)],1)],1),n("b-button",{attrs:{type:"submit",variant:"info"}},[e._v("Add Mechanic")]),n("b-button",{attrs:{variant:"danger"},on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)},Qe=[],Xe={name:"CreateMechanic",data:function(){return{mechanic:{name:"",description:"",diceModel:null,x:1,y:0},diceModels:[{value:null,text:"Select a dice model",disabled:!0},{value:2,text:"d2"},{value:4,text:"d4"},{value:6,text:"d6"},{value:8,text:"d8"},{value:10,text:"d10"},{value:12,text:"d12"},{value:20,text:"d20"},{value:100,text:"d100"}]}},methods:{onSubmit:function(e){e.preventDefault(),this.$emit("createMechanic",this.mechanic)},onCancel:function(e){e.preventDefault(),this.$emit("cancelModal")}}},Ye=Xe,Ze=(n("58f3"),Object(p["a"])(Ye,Ke,Qe,!1,null,"64f8f0aa",null)),et=Ze.exports,tt={name:"App",components:{Games:ve,Simulator:Me,CreateGame:Te,CreateContainer:Ee,CreateCard:Je,CreateListItem:He,CreateMechanic:et},data:function(){return{modalToggle:null,rootToggle:"games"}},methods:{cancelModal:function(){this.modalToggle=null,this.$store.commit("modalInactive")},createGame:function(e){this.$store.commit("createGame",e),this.cancelModal()},createContainer:function(e){this.$store.commit("createContainer",e),this.cancelModal()},createCard:function(e){this.$store.commit("createCard",e),this.cancelModal()},createListItem:function(e){this.$store.commit("createListItem",e),this.cancelModal()},createMechanic:function(e){this.$store.commit("createMechanic",e),this.cancelModal()},displayModal:function(e){this.modalToggle=e,this.$store.commit("modalActive")},toggleRoot:function(e){this.rootToggle=e}}},nt=tt,at=(n("034f"),Object(p["a"])(nt,r,c,!1,null,null,null)),ot=at.exports;a["default"].config.productionTip=!1,a["default"].use(o["a"]);var it=new o["a"].Store({state:{containerShowing:!1,gamesId:0,games:{},modalState:!1,selectedGameId:null,selectedContainerId:null,roomId:null},getters:{selectedGame:function(e){return e.games[e.selectedGameId]},selectedContainer:function(e){return it.getters.selectedGame.containers[e.selectedContainerId]}},mutations:{createGame:function(e,t){e.games[e.gamesId]={id:e.gamesId,name:t.name,description:t.description,containersId:0,containers:{}},e.gamesId++},createContainer:function(e,t){"deck"===t.type?it.getters.selectedGame.containers[it.getters.selectedGame.containersId]={id:it.getters.selectedGame.containersId,name:t.name,description:t.description,type:t.type,cardsId:0,cards:{}}:"list"===t.type?it.getters.selectedGame.containers[it.getters.selectedGame.containersId]={id:it.getters.selectedGame.containersId,name:t.name,description:t.description,type:t.type,listItemsId:0,listItems:{}}:"mechanics-group"===t.type&&(it.getters.selectedGame.containers[it.getters.selectedGame.containersId]={id:it.getters.selectedGame.containersId,name:t.name,description:t.description,type:t.type,mechanicsId:0,mechanics:{}}),it.getters.selectedGame.containersId++},createCard:function(e,t){it.getters.selectedContainer.cards[it.getters.selectedContainer.cardsId]={id:it.getters.selectedContainer.cardsId,name:t.name,description:t.description},it.getters.selectedContainer.cardsId++},createListItem:function(e,t){it.getters.selectedContainer.listItems[it.getters.selectedContainer.listItemsId]={id:it.getters.selectedContainer.listItemsId,name:t.name,description:t.description},it.getters.selectedContainer.listItemsId++},createMechanic:function(e,t){it.getters.selectedContainer.mechanics[it.getters.selectedContainer.mechanicsId]={id:it.getters.selectedContainer.mechanicsId,name:t.name,description:t.description,diceModel:t.diceModel,x:t.x,y:t.y},it.getters.selectedContainer.mechanicsId++},modalActive:function(e){e.modalState=!0},modalInactive:function(e){e.modalState=!1},selectGame:function(e,t){e.selectedGameId=t},selectContainer:function(e,t){e.selectedContainerId=t},storeRoomId:function(e,t){e.roomId=t},toggleContainerShowing:function(e){e.containerShowing=!e.containerShowing}}});new a["default"]({render:function(e){return e(ot)},store:it}).$mount("#app")},5786:function(e,t,n){"use strict";var a=n("4697"),o=n.n(a);o.a},"58f3":function(e,t,n){"use strict";var a=n("1a51"),o=n.n(a);o.a},"5e98":function(e,t,n){},"629e":function(e,t,n){},"6dc5":function(e,t,n){},"78ff":function(e,t,n){"use strict";var a=n("a595"),o=n.n(a);o.a},8207:function(e,t,n){"use strict";var a=n("5e98"),o=n.n(a);o.a},"85ec":function(e,t,n){},"8b74":function(e,t,n){},a1ec:function(e,t,n){"use strict";var a=n("d49d"),o=n.n(a);o.a},a595:function(e,t,n){},a5ee:function(e,t,n){e.exports=n.p+"img/Nightpath-Publishing-Logo-Blue-White-Stacked.f6cf715d.png"},a957:function(e,t,n){},ac1f:function(e,t,n){},ac31:function(e,t,n){},b374:function(e,t,n){"use strict";var a=n("629e"),o=n.n(a);o.a},b482:function(e,t,n){},b8c5:function(e,t,n){},d49d:function(e,t,n){},e29f:function(e,t,n){"use strict";var a=n("a957"),o=n.n(a);o.a},ef79:function(e,t,n){"use strict";var a=n("1685"),o=n.n(a);o.a}});
//# sourceMappingURL=app.599832d6.js.map