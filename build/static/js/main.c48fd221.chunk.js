(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports={priority:"TodoListTask_priority__1_AWY",taskText:"TodoListTask_taskText__26txn",todoListTask:"TodoListTask_todoListTask__2NfyB",done:"TodoListTask_done__WI3Ye"}},12:function(t,e,n){},16:function(t,e,n){t.exports={newTaskForm:"AddNewItemForm_newTaskForm__2XwTX",classNameForInput:"AddNewItemForm_classNameForInput__MSL6C",error:"AddNewItemForm_error__3HJPj"}},18:function(t,e,n){t.exports={filterActive:"TodoListFooter_filterActive__l7TUc"}},33:function(t,e,n){t.exports={todoList:"TodoList_todoList__1KsE9"}},34:function(t,e,n){t.exports={TodoListTasks:"TodoListTasks_TodoListTasks__RYP6B"}},38:function(t,e,n){t.exports={title:"TodoListTitle_title__mbKKo"}},40:function(t,e,n){t.exports=n(69)},45:function(t,e,n){},6:function(t,e,n){t.exports={button:"Button_button__3QF_k"}},69:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(17),s=n.n(r),i=(n(45),n(1)),c=n(8),l=n(3),u=n(2),d=n(13),p=n(4),f=(n(12),n(33)),T=n.n(f),k=n(34),h=n.n(k),m=n(10),b=n.n(m),v=n(6),g=n.n(v),O=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).drag=function(t){t.dataTransfer.setData("transfer",t.target.id)},n.noAllowDrop=function(t){t.stopPropagation()},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{id:this.props.id,draggable:"true",onDragStart:this.drag,style:this.props.style,onDragOver:this.noAllowDrop},this.props.children)}}]),e}(o.a.Component),E=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={editMode:!1,taskTitle:n.props.task.title},n.onIsDoneChanged=function(t){return n.props.changeStatus(n.props.task.id,t.currentTarget.checked?2:0)},n.updateTitle=function(t){n.setState({taskTitle:t.currentTarget.value})},n.activateEditMode=function(){return n.setState({editMode:!0})},n.deactivateEditMode=function(){n.setState({editMode:!1}),n.props.changeTitle(n.props.task.id,n.state.taskTitle)},n.onDeleteTask=function(){return n.props.deleteTask(n.props.tasksId,n.props.task.id)},n.render=function(){var t=2===n.props.task.status?"".concat(b.a.todoListTask," ").concat(b.a.done):"".concat(b.a.todoListTask);return o.a.createElement(O,{id:n.props.task.id},o.a.createElement("div",{className:"".concat(t," ").concat(b.a.todoListTask)},o.a.createElement("input",{type:"checkbox",checked:n.props.task.status,onChange:n.onIsDoneChanged}),"   ",o.a.createElement("span",{className:b.a.taskText},n.state.editMode?o.a.createElement("input",{onBlur:n.deactivateEditMode,onChange:n.updateTitle,autoFocus:!0,value:n.state.taskTitle}):o.a.createElement("span",{onClick:n.activateEditMode},n.props.task.title)),"   ",o.a.createElement("span",{className:b.a.priority}," (priority: ",n.props.task.priority,")"),o.a.createElement("button",{className:g.a.button,onClick:n.onDeleteTask},"X")))},n}return Object(p.a)(e,t),e}(o.a.Component),C=n(19),L=n(35),j=n(15),y=n.n(j),S=n(21),I=n(36),A=n.n(I).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/todo-lists/",withCredentials:!0,headers:{"API-KEY":"326adc8b-48be-4905-a33d-14875af1c491"}}),_=function(t){return A.post("",{title:t})},w=function(){return A.get("")},D=function(t){return A.get("".concat(t,"/tasks"))},N=function(t,e){return A.post("".concat(t,"/tasks"),{title:e})},F=function(t){return A.delete("".concat(t))},x=function(t,e){return A.delete("tasks/".concat(e))},M=function(t){return A.put("tasks",t)},P=function(t,e){return A.put("".concat(t),{title:e})};function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(n,!0).forEach(function(e){Object(L.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var R="TodoList/Reduser/ADD_TASK",B=function(t,e){return{type:"TodoList/Reduser/DELETE_TASK",todolistId:t,taskId:e}},V=function(t,e){return function(n){N(e,t).then(function(t){n(function(t,e){return{type:R,newTask:t,todolistId:e}}(t.data.data.item,e))})}},J=function(t,e){return function(){var n=Object(S.a)(y.a.mark(function n(a){return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x(t,e);case 2:a(B(t,e));case 3:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()},X={todolists:[],buttonTitle:"X"},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_TODOLISTS":return K({},t,{todolists:e.todoLists.map(function(t){return K({},t,{tasks:[]})})});case"SET_TASKS":return K({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?K({},t,{tasks:e.tasks}):t})});case"TodoList/Reduser/ADD_TODOLIST":return K({},t,{todolists:[e.newTodoList].concat(Object(C.a)(t.todolists))});case R:return K({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?K({},t,{tasks:[e.newTask].concat(Object(C.a)(t.tasks))}):t})});case"TodoList/Reduser/DELETE_LIST_TASK":return K({},t,{todolists:t.todolists.filter(function(t){return t.id!==e.tasksId})});case"TodoList/Reduser/DELETE_TASK":return K({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?K({},t,{tasks:Object(C.a)(t.tasks.filter(function(t){return t.id!==e.taskId}))}):t})});case"TodoList/Reduser/CHANGE_OBJ":return K({},t,{todolists:t.todolists.map(function(t){return t.id===e.tasksId?K({},t,{tasks:t.tasks.map(function(t){return t.id===e.taskId?K({},t,{},e.changeObj):t})}):t})});case"TodoList/Reduser/CHANGE_TODOLIST_TITLE":return K({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?K({},t,{title:e.title}):t})});default:return t}},W=n(9),Y=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).drop=function(t){t.preventDefault();var e=t.dataTransfer.getData("transfer");n.props.dragAndDropThunkCreator(n.props.id,e)},n.allowDrop=function(t){t.preventDefault()},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{id:this.props.id,onDrop:this.drop,onDragOver:this.allowDrop,style:this.props.style},this.props.children)}}]),e}(o.a.Component),U=Object(W.b)(null,{dragAndDropThunkCreator:function(t,e){return function(){var n=Object(S.a)(y.a.mark(function n(a,o){var r,s,i;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r="",s="",i="",console.log(o()),n.next=6,o().todolists.map(function(t){t.tasks.map(function(n){n.id===e&&(r=t.id,s=n.id,i=n.title)})});case 6:return n.next=8,a(V(i,t));case 8:return n.next=10,a(J(r,s));case 10:case"end":return n.stop()}},n)}));return function(t,e){return n.apply(this,arguments)}}()}})(Y),Q=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).render=function(){var t=n.props.tasks.map(function(t){return o.a.createElement(E,{key:t.id,task:t,tasksId:n.props.tasksId,changeStatus:n.props.changeStatus,changeTitle:n.props.changeTitle,deleteTask:n.props.deleteTask})});return o.a.createElement("div",{className:h.a.TodoListTasks},o.a.createElement(U,{id:n.props.tasksId,style:{height:"100%"}},t))},n}return Object(p.a)(e,t),e}(o.a.Component),$=n(18),q=n.n($),z=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={isHidden:!1},n.onAllFilterClick=function(){return n.props.changeFilter("All")},n.onCompletedFilterClick=function(){return n.props.changeFilter("Completed")},n.onActiveFilterClick=function(){return n.props.changeFilter("Active")},n.onShowFiltersClick=function(){return n.setState({isHidden:!0})},n.onHideFiltersClick=function(){return n.setState({isHidden:!1})},n.render=function(){var t="All"===n.props.filterValue?"".concat(g.a.button," ").concat(q.a.filterActive):"".concat(g.a.button),e="Completed"===n.props.filterValue?"".concat(g.a.button," ").concat(q.a.filterActive):"".concat(g.a.button),a="Active"===n.props.filterValue?"".concat(g.a.button," ").concat(q.a.filterActive):"".concat(g.a.button);return o.a.createElement("div",null,!n.state.isHidden&&o.a.createElement("div",{className:"center"},o.a.createElement("button",{onClick:n.onAllFilterClick,className:t},"All"),o.a.createElement("button",{onClick:n.onCompletedFilterClick,className:e},"Completed"),o.a.createElement("button",{onClick:n.onActiveFilterClick,className:a},"Active")),!n.state.isHidden&&o.a.createElement("span",{style:{color:"gold"},onClick:n.onShowFiltersClick},"Hide"),n.state.isHidden&&o.a.createElement("span",{style:{color:"gold"},onClick:n.onHideFiltersClick},"Show"))},n}return Object(p.a)(e,t),e}(o.a.Component),Z=n(38),tt=n.n(Z),et=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={editMode:!1,title:n.props.title},n.changeTitle=function(t){n.setState({title:t.currentTarget.value})},n.deactivateEditMode=function(){n.setState({editMode:!1}),n.props.changeTodoLIstTitle(n.state.title)},n.activateEditMode=function(){n.setState({editMode:!0})},n.render=function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("button",{className:g.a.button,onClick:n.props.deleteListTask},"X")),o.a.createElement("div",null,o.a.createElement("h3",{className:"".concat(tt.a.title," center")},n.state.editMode?o.a.createElement("input",{onBlur:n.deactivateEditMode,onChange:n.changeTitle,type:"text",autoFocus:!0,value:n.state.title}):o.a.createElement("span",{onClick:n.activateEditMode},n.props.title))))},n}return Object(p.a)(e,t),e}(o.a.Component),nt=n(16),at=n.n(nt),ot=function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:g.a.button,onClick:t.buttonCallBack},t.title))},rt=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={error:!1,title:""},n.onAddItemClick=function(){var t=n.state.title;n.setState({title:""}),""===t?n.setState({error:!0}):(n.setState({error:!1}),n.props.addItem(t))},n.onTitleChanged=function(t){n.setState({error:!1,title:t.currentTarget.value})},n.onKeyPress=function(t){"Enter"===t.key&&n.onAddItemClick()},n.render=function(){var t=n.state.error?"".concat(at.a.classNameForInput," ").concat(at.a.error):"".concat(at.a.classNameForInput);return o.a.createElement("div",{className:at.a.newTaskForm},o.a.createElement("input",{className:t,type:"text",placeholder:"New item name",onChange:n.onTitleChanged,onKeyPress:n.onKeyPress,value:n.state.title}),o.a.createElement(ot,{buttonCallBack:n.onAddItemClick.bind(Object(d.a)(n)),title:"Add"}))},n}return Object(p.a)(e,t),e}(o.a.Component),st=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).saveState=function(){var t=JSON.stringify(n.state);localStorage.setItem("our-state"+n.props.id,t)},n.nextTaskId=0,n.state={tasks:[],filterValue:"All",editMode:!1,todoListTitle:n.props.title},n.changeFilter=function(t){n.setState({filterValue:t},function(){n.saveState()})},n.restoreState=function(){return n.props.setTasksThunkCreator(n.props.id)},n.addNewTask=function(t){return n.props.addTaskThunkCreator(t,n.props.id)},n.deleteListTask=function(t){return n.props.deleteListTaskThunkCreator(t)},n.deleteTask=function(t,e){return n.props.deleteTaskThunkCreator(t,e)},n.changeTodoLIstTitle=function(t){return n.props.changeTodoListTitleACThunkCreator(n.props.id,t)},n.changeObjectAPI=function(t,e){return n.props.changeObjectThunkCreator(n.props.id,t,e)},n.changeTask=function(t,e){return n.changeObjectAPI(t,e)},n.changeStatus=function(t,e){return n.changeTask(t,{status:e})},n.changeTitle=function(t,e){return n.changeTask(t,{title:e})},n.deactivateEditMode=function(){return n.setState({editMode:!1})},n.activateEditMode=function(){return n.setState({editMode:!0})},n.render=function(){var t=n.props.tasks,e=void 0===t?[]:t;return o.a.createElement("div",{className:T.a.todoList},o.a.createElement("div",null,o.a.createElement(et,{title:n.props.title,todolistId:n.props.id,changeTodoLIstTitle:n.changeTodoLIstTitle,deleteListTask:function(){return n.deleteListTask(n.props.id)}}),o.a.createElement(rt,{addItem:n.addNewTask})),o.a.createElement(Q,{changeStatus:n.changeStatus,changeTitle:n.changeTitle,tasksId:n.props.id,deleteTask:n.deleteTask,tasks:e.filter(function(t){return"All"===n.state.filterValue||("Active"===n.state.filterValue?0===t.status:"Completed"===n.state.filterValue?2===t.status:void 0)})}),o.a.createElement(z,{changeFilter:n.changeFilter,filterValue:n.state.filterValue}))},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.restoreState()}}]),e}(o.a.Component),it=Object(W.b)(null,{addTaskThunkCreator:V,setTasksThunkCreator:function(t){return function(e){D(t).then(function(n){e(function(t,e){return{type:"SET_TASKS",todolistId:e,tasks:t}}(n.data.items,t))})}},deleteListTaskThunkCreator:function(t){return function(e){F(t).then(function(n){e({type:"TodoList/Reduser/DELETE_LIST_TASK",tasksId:t})})}},deleteTaskThunkCreator:J,changeTodoListTitleACThunkCreator:function(t,e){return function(n){P(t,e).then(function(a){n(function(t,e){return{type:"TodoList/Reduser/CHANGE_TODOLIST_TITLE",todolistId:t,title:e}}(t,e))})}},changeObjectThunkCreator:function(t,e,n){return function(a,o){o().todolists.find(function(e){return e.id===t}).tasks.forEach(function(o){o.id===e&&M(K({},o,{},n)).then(function(o){a(function(t,e,n){return{type:"TodoList/Reduser/CHANGE_OBJ",tasksId:t,taskId:e,changeObj:n}}(t,e,n))})})}}})(st),ct=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).nextTodoListId=0,n.state={todolists:[]},n.addTodoList=function(t){return n.props.addTodoListThunkCreator(t)},n.restoreState=function(){return n.props.setTodoListsThunkCreator()},n._addTodoList=function(t){n.nextTodoListId},n.saveState=function(){var t=JSON.stringify(n.state);localStorage.setItem("todolists-state",t)},n._restoreState=function(){var t=n.state,e=localStorage.getItem("todolists-state");null!=e&&(t=JSON.parse(e)),n.setState(t,function(){n.state.todolists.forEach(function(t){t.id>=n.nextTodoListId&&(n.nextTodoListId=t.id+1)})})},n.render=function(){var t=n.props.todolists.map(function(t){return o.a.createElement(it,{key:t.id,id:t.id,title:t.title,tasks:t.tasks})});return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"center"},o.a.createElement(rt,{addItem:n.addTodoList.bind(Object(d.a)(n))})),o.a.createElement("div",{className:"App"},t))},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.restoreState()}}]),e}(o.a.Component),lt=Object(W.b)(function(t){return{todolists:t.todolists,state:t}},{addTodoListThunkCreator:function(t){return function(e){_(t).then(function(t){return e({type:"TodoList/Reduser/ADD_TODOLIST",newTodoList:t.data.data.item})})}},setTodoListsThunkCreator:function(){return function(t){w().then(function(e){return t({type:"SET_TODOLISTS",todoLists:e.data})})}}})(ct);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ut=n(14),dt=n(39),pt=Object(ut.c)(G,Object(ut.a)(dt.a));s.a.render(o.a.createElement(W.a,{store:pt},o.a.createElement(lt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.c48fd221.chunk.js.map