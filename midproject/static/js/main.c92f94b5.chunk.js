(this.webpackJsonpmidproject=this.webpackJsonpmidproject||[]).push([[0],{32:function(e,t,a){e.exports=a(62)},37:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),s=a.n(l),c=(a(37),a(9)),o=a(10),i=a(12),u=a(11),d=a(2),m=a.n(d),p=a(8),v=a(13),E=a.n(v),b=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://jsonplaceholder.typicode.com/users/");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://jsonplaceholder.typicode.com/todos/");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f={getAllUsers:b,getAllPosts:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://jsonplaceholder.typicode.com/posts/");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllTodos:h,getUserTodos:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://jsonplaceholder.typicode.com/todos?userId="+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),userCompleted:function(e,t){var a=!1;return e.filter((function(e){return e.userId==t})).map((function(e){a=!!e.completed})),a}},y=(a(56),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).showAbout=function(){var t=e.props.about,a=!e.state.open;e.setState({about:a?t:"",open:a})},e.state={open:!1,about:""},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"button",onClick:this.showAbout},"About"),this.state.about)}}]),a}(n.Component)),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).addUser=function(t,a){var n=f.userCompleted(a,t.id)?"green":"";return r.a.createElement("div",{id:n,className:"entry "+String.fromCharCode(97+t.id),key:t.id},r.a.createElement("p",{onClick:e.openDetails(t.id,t.name)},t.id,". ",t.name),r.a.createElement("p",{onClick:e.openDetails(t.id,t.name)},t.email),r.a.createElement("div",{className:"buttons"},r.a.createElement(y,{about:r.a.createElement("div",{className:"about"},t.address.street,", ",t.address.city,r.a.createElement("p",null,t.address.zipcode))}),r.a.createElement("div",{className:"button",onClick:e.renderUser()},"Update"),r.a.createElement("div",{className:"button",onClick:e.deleteUser(String.fromCharCode(97+t.id))},"Delete")))},e.deleteUser=function(e){return function(t){document.querySelector("."+e).style.display="none"}},e.renderUser=function(e){return Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))},e.searchEntries=function(e){var t=e.target.value;document.querySelectorAll(".entry").forEach((function(e){e.children[0].innerHTML.includes(t)||e.children[1].innerHTML.includes(t)?e.classList.remove("filtered"):e.classList.add("filtered")}))},e.openDetails=function(t,a){return function(){document.querySelectorAll(".entry").forEach((function(e){e.classList.remove("selected")})),document.querySelector("."+String.fromCharCode(97+t)).classList.add("selected"),document.querySelector(".entries").style.width="50%",e.setState({name:a,id:t}),document.querySelector(".right").style.display="block"}},e.completeTask=function(t){return function(a){a.target.style.opacity=0;var n=e.state.todos.map((function(e){return e.id==t?(e.completed=!0,e):e}));e.setState({todos:n})}},e.open=function(t){return Object(p.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState({add:t});case 2:document.querySelector(".text").focus();case 3:case"end":return a.stop()}}),a)})))},e.close=function(){e.setState({add:!1})},e.addTodo=function(){var t=document.querySelector(".text").value,a=e.state.todos,n=0;a.map((function(e){n++})),a[n+1]={userId:e.state.id,id:n+2,title:t,completed:!1},e.setState({todos:a,add:!1})},e.addPost=function(){var t=document.querySelectorAll(".text")[0].value,a=document.querySelectorAll(".text")[1].value,n=e.state.posts,r=0;n.map((function(e){r++})),n[r+1]={userId:e.state.id,id:r+2,title:t,body:a},e.setState({posts:n,add:!1})},e.state={users:"",posts:[],todos:[],rendered:!1,name:"",id:0,add:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getAllUsers();case 2:return t=e.sent,e.next=5,f.getAllTodos();case 5:return a=e.sent,e.next=8,f.getAllPosts();case 8:n=e.sent,this.setState({users:t.data,posts:n.data,todos:a.data,rendered:!0}),document.querySelector(".entries").style.color="inherit";case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;e=this.state.rendered?this.state.users.map((function(e){return t.addUser(e,t.state.todos)})):r.a.createElement("div",{class:"entries"},r.a.createElement("div",{id:"green",class:"entry b"},r.a.createElement("p",null,"1. Leanne Graham"),r.a.createElement("p",null,"Sincere@april.biz"),r.a.createElement("div",{class:"buttons"},r.a.createElement("div",null,r.a.createElement("div",{class:"button"},"About")),r.a.createElement("div",{class:"button"},"Update"),r.a.createElement("div",{class:"button"},"Delete"))),r.a.createElement("div",{id:"green",class:"entry c"},r.a.createElement("p",null,"2. Ervin Howell"),r.a.createElement("p",null,"Shanna@melissa.tv"),r.a.createElement("div",{class:"buttons"},r.a.createElement("div",null,r.a.createElement("div",{class:"button"},"About")),r.a.createElement("div",{class:"button"},"Update"),r.a.createElement("div",{class:"button"},"Delete"))),r.a.createElement("div",{id:"green",class:"entry d"},r.a.createElement("p",null,"3. Clementine Bauch"),r.a.createElement("p",null,"Nathan@yesenia.net"),r.a.createElement("div",{class:"buttons"},r.a.createElement("div",null,r.a.createElement("div",{class:"button"},"About")),r.a.createElement("div",{class:"button"},"Update"),r.a.createElement("div",{class:"button"},"Delete"))),r.a.createElement("div",{id:"green",class:"entry e"},r.a.createElement("p",null,"4. Patricia Lebsack"),r.a.createElement("p",null,"Julianne.OConner@kory.org"),r.a.createElement("div",{class:"buttons"},r.a.createElement("div",null,r.a.createElement("div",{class:"button"},"About")),r.a.createElement("div",{class:"button"},"Update"),r.a.createElement("div",{class:"button"},"Delete"))),r.a.createElement("div",{id:"",class:"entry f"},r.a.createElement("p",null,"5. Chelsey Dietrich"),r.a.createElement("p",null,"Lucio_Hettinger@annie.ca"),r.a.createElement("div",{class:"buttons"},r.a.createElement("div",null,r.a.createElement("div",{class:"button"},"About")),r.a.createElement("div",{class:"button"},"Update"),r.a.createElement("div",{class:"button"},"Delete"))),r.a.createElement("div",{id:"",class:"entry g"},r.a.createElement("p",null,"6. Mrs. Dennis Schulist"),r.a.createElement("p",null,"Karley_Dach@jasper.info"),r.a.createElement("div",{class:"buttons"},r.a.createElement("div",null,r.a.createElement("div",{class:"button"},"About")),r.a.createElement("div",{class:"button"},"Update"),r.a.createElement("div",{class:"button"},"Delete"))),r.a.createElement("div",{id:"green",class:"entry h"},r.a.createElement("p",null,"7. Kurtis Weissnat"),r.a.createElement("p",null,"Telly.Hoeger@billy.biz"),r.a.createElement("div",{class:"buttons"},r.a.createElement("div",null,r.a.createElement("div",{class:"button"},"About")),r.a.createElement("div",{class:"button"},"Update"),r.a.createElement("div",{class:"button"},"Delete"))),r.a.createElement("div",{id:"",class:"entry i"},r.a.createElement("p",null,"8. Nicholas Runolfsdottir V"),r.a.createElement("p",null,"Sherwood@rosamond.me"),r.a.createElement("div",{class:"buttons"},r.a.createElement("div",null,r.a.createElement("div",{class:"button"},"About")),r.a.createElement("div",{class:"button"},"Update"),r.a.createElement("div",{class:"button"},"Delete"))),r.a.createElement("div",{id:"green",class:"entry j"},r.a.createElement("p",null,"9. Glenna Reichert"),r.a.createElement("p",null,"Chaim_McDermott@dana.io"),r.a.createElement("div",{class:"buttons"},r.a.createElement("div",null,r.a.createElement("div",{class:"button"},"About")),r.a.createElement("div",{class:"button"},"Update"),r.a.createElement("div",{class:"button"},"Delete"))),r.a.createElement("div",{id:"",class:"entry k"},r.a.createElement("p",null,"10. Clementina DuBuque"),r.a.createElement("p",null,"Rey.Padberg@karina.biz"),r.a.createElement("div",{class:"buttons"},r.a.createElement("div",null,r.a.createElement("div",{class:"button"},"About")),r.a.createElement("div",{class:"button"},"Update"),r.a.createElement("div",{class:"button"},"Delete"))));var a,n,l=this.state.todos.map((function(e){if(e.userId==t.state.id)return e.completed?r.a.createElement("div",{className:"entry"},e.title,": Completed."):r.a.createElement("div",{className:"entry"},e.title,": Not completed.",r.a.createElement("div",{className:"button",onClick:t.completeTask(e.id)},"Complete"))})),s=this.state.posts.map((function(e){if(e.userId==t.state.id)return r.a.createElement("div",{className:"entry"},e.title,r.a.createElement("br",null),e.body)}));return a="task"==this.state.add?r.a.createElement("div",null,r.a.createElement("p",null,"Add task"),r.a.createElement("input",{type:"text",className:"text",placeholder:"Title"}),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"add",onClick:this.close},"Close"),r.a.createElement("div",{className:"add",onClick:this.addTodo},"Add"))):r.a.createElement("div",null,r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("p",null,"Tasks"),r.a.createElement("div",{className:"add",onClick:this.open("task")},"Add")),l),n="post"==this.state.add?r.a.createElement("div",null,r.a.createElement("p",null,"Add post"),r.a.createElement("input",{type:"text",className:"text",placeholder:"Title"}),r.a.createElement("input",{type:"text",className:"text",placeholder:"Body"}),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"add",onClick:this.close},"Close"),r.a.createElement("div",{className:"add",onClick:this.addPost},"Add"))):r.a.createElement("div",null,r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("p",null,"Posts"),r.a.createElement("div",{className:"add",onClick:this.open("post")},"Add")),s),r.a.createElement("div",null,r.a.createElement("input",{className:"search",placeholder:"Type something...",onChange:this.searchEntries}),r.a.createElement("div",{className:"entries"},e),r.a.createElement("div",{className:"right"},r.a.createElement("p",{className:"title"},this.state.name),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"tasks"},a),r.a.createElement("div",{className:"posts"},n))))}}]),a}(n.Component),g=a(16),C=a(1),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=r.a.createElement("div",null,r.a.createElement("p",null,this.props.data.name),r.a.createElement("p",null,this.props.data.email),r.a.createElement("p",null,this.props.data.address.city));return r.a.createElement("div",null,e)}}]),a}(n.Component),N=(n.Component,function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.call(this)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null)}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g.a,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.c92f94b5.chunk.js.map