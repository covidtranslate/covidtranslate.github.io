(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Kfvu:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.OutboundLink=s,t.trackCustomEvent=function(e){var t=e.category,a=e.action,n=e.label,o=e.value,r=e.nonInteraction,i=void 0===r||r,l=e.transport,s=e.hitCallback,c=e.callbackTimeout,u=void 0===c?1e3:c;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:a,eventLabel:n,eventValue:o,nonInteraction:i,transport:l};s&&"function"==typeof s&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var a=!1,n=function(){a||(a=!0,e())};return setTimeout(n,t),n}(s,u)),window.ga("send","event",d)}};var o=n(a("pVnL")),r=n(a("8OQS")),i=n(a("q1tI")),l=n(a("17x9"));function s(e){var t=e.eventCategory,a=e.eventAction,n=e.eventLabel,l=e.eventValue,s=(0,r.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return i.default.createElement("a",(0,o.default)({},s,{onClick:function(o){"function"==typeof e.onClick&&e.onClick(o);var r=!0;return(0!==o.button||o.altKey||o.ctrlKey||o.metaKey||o.shiftKey||o.defaultPrevented)&&(r=!1),e.target&&"_self"!==e.target.toLowerCase()&&(r=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:a||"click",eventLabel:n||e.href,eventValue:l,transport:r?"beacon":"",hitCallback:function(){r&&(document.location=e.href)}}):r&&(document.location=e.href),!1}}))}s.propTypes={href:l.default.string,target:l.default.string,eventCategory:l.default.string,eventAction:l.default.string,eventLabel:l.default.string,eventValue:l.default.number,onClick:l.default.func}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("oUAV"),o=a("q1tI"),r=a.n(o),i=a("Wbzz"),l=a("CxY0"),s=a.n(l),c=a("Kfvu"),u=a("1Qp6"),d=a("7S7Y"),m=a("wCQ3"),p=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 22 22",fill:"none",stroke:"#15171A",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.a.createElement("polyline",{points:"12 5 19 12 12 19"}))},g=a("WdeC");t.default=function(e){var t=e.location,a=n.data.site.siteMetadata,o=a.description,l=a.siteUrl,v=s.a.resolve(l,t.pathname),h=new Date("2020-04-06T22:00:00"),f=[{id:1,slug:"kcdc-covid-19-response-guidelines",title:"KCDC COVID-19 Response Guidelines translation v1.0 released",excerpt:"Today, we're releasing the English version 1.0 of Korea CDC’s COVID-19 playbook for local governments, complete with appendices. This is the amazing work of global volunteers working around the clock since March 28, 2020. This playbook contains detailed, updated protocols for healthcare providers, government officials and ordinary citizens regarding quarantine, treatment, disinfection, funeral arrangements, and more from both a policy and a patient care perspective. We hope making this document available to a broader audience will save lives and help fight this pandemic.",primary_author:{name:"COVID Translate Team",slug:"SLUG"},authors:[{name:"COVID Translate Team",slug:"SLUG"}],primary_tag:{name:"COVID-19 Response Guidelines"},published_at:h.toISOString(),published_at_pretty:h.toDateString()}],b=new Date("2020-04-09T22:30:00"),y=new Date("2020-04-15T22:30:00"),w=[{id:3,slug:"contact-tracing-strategy-in-south-korea",title:"Contact tracing strategy in South Korea",excerpt:"Contact tracing has been a key component of South Korea's strategy to fight COVID-19. Find out how the balance between privacy and public health concerns are managed through institutional boundaries, strict guidelines around sharing information, and legal grounds. You can also learn about the role local governments play and how various smartphone applications developed by both government agencies and private individuals have kept citizens informed.",primary_author:{name:"COVID Translate Team",slug:"SLUG"},authors:[{name:"COVID Translate Team",slug:"SLUG"}],primary_tag:{name:"COVID-19 Resources"},published_at:y.toISOString(),published_at_pretty:y.toDateString()},{id:2,slug:"covid-19-test-site-installation-guide",title:"COVID-19 test site installation guide",excerpt:"While we were focused on getting v1.0 out, a graduate student from France reached out to us about a test site installation guide that his group of volunteers worked on. Thank you for sharing! Click here to download the guides.",primary_author:{name:"COVID Translate Team",slug:"SLUG"},authors:[{name:"COVID Translate Team",slug:"SLUG"}],primary_tag:{name:"COVID-19 Resources"},published_at:b.toISOString(),published_at_pretty:b.toDateString()}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,{type:"WebSite",canonical:v,title:"Home",description:o}),r.a.createElement(d.b,{activeClass:"fixed-nav-active",render:function(e){return r.a.createElement(u.j,{isHome:!0,header:r.a.createElement(u.e,null),sticky:e},r.a.createElement("div",{className:"inner posts"},r.a.createElement("div",{className:"home-cta-1"},r.a.createElement(c.OutboundLink,{href:"https://docs.google.com/forms/d/e/1FAIpQLScvWqH-t7sUdebVFgfeqOoK8FcUKiFcUCLlH_UUuUPzy69FtQ/viewform"},r.a.createElement("b",null,"Give your feedback on next translations")),"  ",r.a.createElement(g.a,null)),r.a.createElement("div",{className:"home-cta-2"},r.a.createElement(i.Link,{to:"/kcdc-covid-19-response-guidelines/"},r.a.createElement("b",null,"Get the playbook & glossary")),"  ",r.a.createElement(p,null)),r.a.createElement("div",{className:"home-cta-2"},r.a.createElement(i.Link,{to:"/covid-19-resources/"},r.a.createElement("b",null,"More resources")),"  ",r.a.createElement(p,null)),r.a.createElement("div",{className:"post-feed"},f.map((function(e,t){return r.a.createElement(u.l,{key:e.id,post:e,num:t,isHome:!0,label:r.a.createElement(u.p,{label:"Updated"})})}))),r.a.createElement("div",{className:"post-feed"},w.map((function(e,t){return r.a.createElement(u.l,{key:e.id,post:e,num:t,isHome:!0,label:r.a.createElement(u.p,{label:"New",isNew:!0})})})))))}}))}},oUAV:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"description":"Spreading knowledge worldwide to fight COVID-19","siteUrl":"https://covidtranslate.org"}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-46a4656734326724b73d.js.map