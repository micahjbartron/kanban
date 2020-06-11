(function(t){function e(e){for(var s,i,n=e[0],c=e[1],l=e[2],u=0,m=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0998":function(t,e,a){"use strict";var s=a("a58d"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Kanban")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"boards"}}},[t._v("My-Dashboard")])],1):t._e()]),t._v(" "),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("\n        Login\n      ")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("bc3a"),l=a.n(c);l.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout({returnTo:window.location.origin})}}},u=d,m=a("2877"),p=Object(m["a"])(u,i,n,!1,null,null,null),h=p.exports,v=a("335d"),b={name:"App",async beforeCreate(){try{await Object(v["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")}catch(t){this.$router.push({name:"home"})}},components:{Navbar:h}},f=b,g=(a("5c0b"),Object(m["a"])(f,r,o,!1,null,null,null)),y=g.exports,_=a("8c4f"),k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v("this is my home")])])}],C={name:"home",data(){return{}},computed:{},methods:{},components:{}},B=C,$=Object(m["a"])(B,k,w,!1,null,"7ca2ac3e",null),T=$.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boards"},[t._v("\n  WELCOME TO THE BOARDS!!!\n  "),a("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),a("button",{attrs:{type:"submit"}},[t._v("Create Board")])]),t._v(" "),t._l(t.boards,(function(e){return a("div",{key:e.id},[a("button",{staticClass:"btn btn-outline-danger",on:{click:function(a){t.deleteBoard(e.id)}}},[t._v("delete")]),t._v(" "),a("router-link",{attrs:{to:{name:"board",params:{boardId:e.id}}}},[t._v("Title- "+t._s(e.title))])],1)}))],2)},x=[],I={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},deleteBoard(t){this.$store.dispatch("deleteBoard",t)}}},O=I,j=Object(m["a"])(O,L,x,!1,null,null,null),P=j.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board container fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.board.title?a("h1",[t._v(t._s(t.board.title))]):a("h1",[t._v("Loading...")])])]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],attrs:{type:"text",placeholder:"List Name",required:""},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),t._v(" "),a("button",{attrs:{type:"submit"}},[t._v("Create List")])]),t._v(" "),a("div",{staticClass:"row"},t._l(t.lists,(function(t){return a("list",{key:t.id,attrs:{list:t}})})))])},S=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-4 my-2"},[a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-header"},[t._v("\n      "+t._s(t.list.title)+"\n      "),a("button",{staticClass:"btn btn-outline-danger text light ml-5",on:{click:function(e){t.deleteList(t.list.id)}}},[t._v("X")])]),t._v(" "),a("form",{attrs:{action:"submit"},on:{submit:function(e){e.preventDefault(),t.addTask(t.list.id)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],attrs:{type:"text",placeholder:"Task",required:""},domProps:{value:t.newTask.title},on:{input:function(e){e.target.composing||t.$set(t.newTask,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"}},[t._v("Add")])]),t._v(" "),a("div",t._l(t.tasks,(function(t){return a("task",{key:t.id,attrs:{task:t}})})))])])},M=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component"},[a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[t._v("\n      "+t._s(t.task.title)+"\n      "),a("button",{staticClass:"btn btn-outline-danger",on:{click:function(e){t.deleteTask(t.task.id)}}},[t._v("X")]),t._v(" "),t._l(t.comments,(function(t){return a("comment",{key:t.id,attrs:{comment:t}})}))],2)])])},U=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component"},[a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[t._v("\n      "+t._s(t.comment.body)+"\n      "),a("button",{staticClass:"btn btn-outline-danger",on:{click:t.deleteComment}},[t._v("X")])])])])},D=[],R={name:"Comments",props:["comment"],data(){return{}},computed:{},methods:{},components:{}},H=R,J=Object(m["a"])(H,q,D,!1,null,"7713f493",null),W=J.exports,X={name:"Tasks",props:["task"],data(){return{}},methods:{deleteTask(t){this.$store.dispatch("deleteTask",t)}},components:{Comment:W}},z=X,K=Object(m["a"])(z,N,U,!1,null,"2a1e209c",null),V=K.exports,F={name:"Lists",props:["list"],data(){return{newTask:{title:"",listId:this.list.id}}},methods:{deleteList(t){this.$store.dispatch("deleteList",t)},addTask(){this.$store.dispatch("addTask",this.newTask),this.newTask={title:"",listId:this.list.id}}},mounted(){this.$store.dispatch("getTasksByListId",this.list.id)},computed:{tasks(){return this.$store.state.tasks[this.list.id]}},components:{Task:V}},G=F,Q=(a("0998"),Object(m["a"])(G,A,M,!1,null,"4dd1e1cc",null)),Y=Q.exports,Z={name:"board",mounted(){this.$store.dispatch("getActiveBoard",this.$route.params.boardId),this.$store.dispatch("getListsByBoardId",this.$route.params.boardId)},data(){return{newList:{title:"",boardId:this.$route.params.boardId}}},computed:{lists(){return this.$store.state.lists},board(){return this.$store.state.activeBoard}},methods:{addList(){this.$store.dispatch("addList",this.newList),this.newList={title:"",boardId:""}}},components:{List:Y}},tt=Z,et=Object(m["a"])(tt,E,S,!1,null,null,null),at=et.exports;s["a"].use(_["a"]);var st=new _["a"]({routes:[{path:"/",name:"home",component:T},{path:"/boards",name:"boards",component:P,beforeEnter:v["b"]},{path:"/boards/:boardId",name:"board",component:at,beforeEnter:v["b"]},{path:"*",redirect:"/"}]}),rt=a("2f62");let ot=window.location.host.includes("localhost")?"//localhost:3000/":"/",it=l.a.create({baseURL:ot+"api/",timeout:3e3,withCredentials:!0});var nt=it;const ct={actions:{getBoards({commit:t,dispatch:e}){nt.get("boards").then(e=>{t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},a){nt.post("boards",a).then(t=>{e("getBoards")})},async getActiveBoard({commit:t,dispatch:e},a){try{let e=await nt.get("boards/"+a);t("setActiveBoard",e.data)}catch(s){console.error(s)}},async deleteBoard({commit:t,dispatch:e},a){try{await nt.delete("boards/"+a);st.push({name:"home"})}catch(s){console.error(s)}},async editBoard({commit:t,dispatch:e},a){try{await nt.put("boards/"+a.boardId,a);e("getActiveBoard",a.boardId)}catch(s){console.error(s)}}}},lt={actions:{async getListsByBoardId({commit:t,dispatch:e},a){try{let e=await nt.get("boards/"+a+"/lists");t("setLists",e.data)}catch(s){console.error(s)}},async addList({commit:t,dispatch:e},a){try{let e=await nt.post("lists/",a);t("addList",e.data)}catch(s){console.error(s)}},async deleteList({commit:t,dispatch:e},a){try{await nt.delete("lists/"+a);t("removeList",a)}catch(s){console.error(s)}}}},dt={actions:{async getTasksByListId({commit:t,dispatch:e},a){try{let e=await nt.get("lists/"+a+"/tasks");t("setTasks",{listId:a,tasks:e.data})}catch(s){console.error(s)}},async addTask({commit:t,dispatch:e},a){try{let e=await nt.post("tasks/",a);t("addTask",e.data)}catch(s){console.error(s)}},async editTask({commit:t,dispatch:e},a){try{await nt.put("tasks/"+a.taskId,a)}catch(s){console.error(s)}},async deleteTask({commit:t,dispatch:e},a){try{await nt.delete("tasks/"+a);t("removeTask",a)}catch(s){console.error(s)}}}},ut={actions:{async getCommentsByTaskId({commit:t,dispatch:e},a){try{let e=await nt.get("tasks/"+a+"/comments");t("setComments",e.data)}catch(s){console.error(s)}},async addComment({commit:t,dispatch:e},a){try{let e=await nt.post("tasks/",a);t("addComment",e.data)}catch(s){console.error(s)}},async editComment({commit:t,dispatch:e},a){try{await nt.put("comments/"+a.commentId,a);e("getCommentsByTaskId",a.commentId)}catch(s){console.error(s)}},async deleteList({commit:t,dispatch:e},a){try{await nt.delete("comments/"+a);e("getCommentsByTaskId")}catch(s){console.error(s)}}}};s["a"].use(rt["a"]);var mt=new rt["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setLists(t,e){t.lists=e},addList(t,e){t.lists.push(e)},removeList(t,e){t.lists=t.lists.filter(t=>t.id!=e)},setTasks(t,e){s["a"].set(t.tasks,e.listId,e.tasks)},updateLists(t,e){t.lists=e},addTask(t,e){t.tasks[e.listId].push(e)},removeTask(t,e){t.tasks[e].delete(t=>t.id!=e)}},actions:{setBearer({},t){nt.defaults.headers.authorization=t},resetBearer(){nt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await nt.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}}},modules:{BoardsStore:ct,ListsStore:lt,TasksStore:dt,CommentsStore:ut}});const pt="brock303030.auth0.com",ht="https://brandon-student.com",vt="PAMW38wVttreSv9y0hxBqJPjMHi8RTLq";s["a"].use(v["a"],{domain:pt,clientId:vt,audience:ht,onRedirectCallback:t=>{st.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:st,store:mt,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"9c0c":function(t,e,a){},a58d:function(t,e,a){}});