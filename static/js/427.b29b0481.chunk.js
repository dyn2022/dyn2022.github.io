"use strict";(self.webpackChunksamana_fe=self.webpackChunksamana_fe||[]).push([[427],{4427:(e,l,t)=>{t.r(l),t.d(l,{default:()=>A});var a=t(8372),n=t(9136),i=t(2435),s=t(9153),c=t(8491),r=t(3565),o=t(9906),h=t(9950),d=t(8429),m=t(3170),u=t(6900),p=t(4343),b=t(6772),y=t(1852),k=t(4414);function A(){const e=(0,m.GV)((e=>e.employee.list)),l=(0,d.Zp)(),t=(0,m.jL)();(0,h.useEffect)((()=>{t((0,u.b6)({}))}),[]);const[A,x]=(0,h.useState)({}),f=[{label:"T\xean nh\xe2n vi\xean",type:"text",key:"name",placeholder:"T\xecm ki\u1ebfm theo t\xean",lg:6,quickSearch:!0},{label:"Tr\u1ea1ng th\xe1i",type:"multiple-select",key:"status",lg:12,options:[{label:"Active",value:"Active"},{label:"Inactive",value:"Inactive"}]},{label:"Ch\u1ee9c v\u1ee5",type:"multiple-select",key:"role",lg:12,options:y._y}];return(0,k.jsx)(o.A,{pageAction:(0,k.jsxs)(a.A,{sx:{display:"flex",alignItems:"center",gap:1},children:[(0,k.jsx)(r.A,{filters:f,value:A,onChange:x}),(0,k.jsx)(i.A,{color:"primary",size:"sm",onClick:()=>l(p.A.EMPLOYEE_NEW),children:"T\u1ea1o m\u1edbi"})]}),pageName:"Nh\xe2n vi\xean",breadcrumb:[{label:"Nh\xe2n vi\xean"}],children:(0,k.jsx)(c.A,{filterFields:f,filterValue:A,data:e,columns:[{key:"name",label:"T\xean",width:200,render:e=>(0,k.jsxs)(a.A,{children:[(0,k.jsx)(n.A,{component:"button",onClick:()=>{l("".concat(p.A.EMPLOYEE_DETAIL.replace(":id",e._id)))},children:e.name}),(0,k.jsx)("br",{}),(0,k.jsx)("small",{children:y.eW[e.role]})]})},{key:"phone",label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",width:180},{key:"email",width:350,label:"Email"},{key:"status",label:"Status",width:100},{key:"created_at",label:"Ng\xe0y t\u1ea1o",width:150,render:e=>(0,k.jsx)(s.Ay,{children:(0,b.Yq)(e.created_at,!0)})}],sortKeys:["created_at","email","phone","name","status"]})})}}}]);