(this["webpackJsonpreact-firebase-auth"]=this["webpackJsonpreact-firebase-auth"]||[]).push([[0],{31:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(9),r=n.n(c),s=n(24),a=n.n(s),i=(n(31),n(11)),o=n(15),u=n(25),j=Object(u.a)({apiKey:"AIzaSyAwSFpIGSyZ12XLwAfHjnImHk6g-X_1JYA",authDomain:"chat-web-app-de636.firebaseapp.com",databaseURL:"https://chat-web-app-de636-default-rtdb.firebaseio.com",projectId:"chat-web-app-de636",storageBucket:"chat-web-app-de636.appspot.com",messagingSenderId:"201967405726",appId:"1:201967405726:web:95744a177746ff119f898f"}),l=Object(o.c)(j),b=n(6),d=Object(c.createContext)({}),f=function(){return Object(c.useContext)(d)},h=function(e){var t=e.children,n=Object(c.useState)(null),r=Object(i.a)(n,2),s=r[0],a=r[1],u=Object(c.useState)(!1),j=Object(i.a)(u,2),f=j[0],h=j[1],O=Object(c.useState)(""),p=Object(i.a)(O,2),m=p[0],x=p[1];Object(c.useEffect)((function(){return h(!0),Object(o.d)(l,(function(e){a(e||null),x(""),h(!1)}))}),[]);var g={user:s,loading:f,error:m,signInUser:function(e,t){h(!0),Object(o.f)(l,e,t).then((function(e){return console.log(e)})).catch((function(e){return x(e.code)})).finally((function(){return h(!1)}))},registerUser:function(e,t,n){h(!0),Object(o.b)(l,e,t).then((function(){return Object(o.i)(l.currentUser,{displayName:n})})).then((function(e){return console.log(e)})).catch((function(e){return setTimeout((function(){x(e.message)}),2e3)})).finally((function(){return h(!1)}))},logoutUser:function(){Object(o.h)(l)},forgotPassword:function(e){return Object(o.e)(l,e)}};return Object(b.jsx)(d.Provider,{value:g,children:t})},O=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=f(),r=n.signInUser,s=n.forgotPassword;return Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("h2",{children:" Login "}),Object(b.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=e.current.value,s=t.current.value;c&&s&&r(c,s)},children:[Object(b.jsx)("input",{placeholder:"Email",type:"email",ref:e}),Object(b.jsx)("input",{placeholder:"Password",type:"password",ref:t}),Object(b.jsx)("button",{type:"submit",children:"Sign In"}),Object(b.jsx)("p",{onClick:function(){var t=e.current.value;t&&s(t).then((function(){e.current.value=""}))},children:"Forgot Password?"})]})]})},p=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),r=f().registerUser;return Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("h2",{children:" New User"}),Object(b.jsxs)("form",{onSubmit:function(c){c.preventDefault();var s=e.current.value,a=t.current.value,i=n.current.value;s&&i&&a&&r(s,i,a)},children:[Object(b.jsx)("input",{placeholder:"Email",type:"email",ref:e}),Object(b.jsx)("input",{placeholder:"Name",type:"name",ref:t}),Object(b.jsx)("input",{placeholder:"Password",type:"password",ref:n}),Object(b.jsx)("button",{type:"submit",children:"Register"})]})]})},m=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{className:"container",children:[n?Object(b.jsx)(p,{}):Object(b.jsx)(O,{}),Object(b.jsx)("p",{onClick:function(){r((function(e){return!e}))},children:n?"Already have an acount?":"New user? Click here "})]})},x=function(){var e=f(),t=e.user,n=e.logoutUser;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Dashboard "}),Object(b.jsxs)("h2",{children:["Name : ",t.displayName]}),Object(b.jsxs)("h2",{children:["Email : ",t.email]}),Object(b.jsx)("button",{onClick:n,children:"Log out"})]})};var g=function(){var e=f(),t=e.user,n=e.loading,c=e.error;return Object(b.jsxs)("div",{className:"App",children:[c&&Object(b.jsx)("p",{className:"error",children:c}),t?"":Object(b.jsxs)("div",{className:"d-grid gap-2 d-md-block",children:[Object(b.jsx)("button",{type:"button",class:"btn btn-outline-success btn-lg",onClick:function(){var e=new o.a;Object(o.g)(l,e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:"Sign in with Google "}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-primary btn-lg mb-4",children:"Sign in with Facebook"})]}),n?Object(b.jsx)("h2",{children:"Loading..."}):Object(b.jsxs)(b.Fragment,{children:[" ",t?Object(b.jsx)(x,{}):Object(b.jsx)(m,{})," "]})]})};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(h,{children:Object(b.jsx)(g,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c4e0bef3.chunk.js.map