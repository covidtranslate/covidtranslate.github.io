(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Kfvu:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.OutboundLink=u,t.trackCustomEvent=function(e){var t=e.category,a=e.action,n=e.label,r=e.value,o=e.nonInteraction,i=void 0===o||o,l=e.transport,u=e.hitCallback,s=e.callbackTimeout,c=void 0===s?1e3:s;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:a,eventLabel:n,eventValue:r,nonInteraction:i,transport:l};u&&"function"==typeof u&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var a=!1,n=function(){a||(a=!0,e())};return setTimeout(n,t),n}(u,c)),window.ga("send","event",d)}};var r=n(a("pVnL")),o=n(a("8OQS")),i=n(a("q1tI")),l=n(a("17x9"));function u(e){var t=e.eventCategory,a=e.eventAction,n=e.eventLabel,l=e.eventValue,u=(0,o.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return i.default.createElement("a",(0,r.default)({},u,{onClick:function(r){"function"==typeof e.onClick&&e.onClick(r);var o=!0;return(0!==r.button||r.altKey||r.ctrlKey||r.metaKey||r.shiftKey||r.defaultPrevented)&&(o=!1),e.target&&"_self"!==e.target.toLowerCase()&&(o=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:a||"click",eventLabel:n||e.href,eventValue:l,transport:o?"beacon":"",hitCallback:function(){o&&(document.location=e.href)}}):o&&(document.location=e.href),!1}}))}u.propTypes={href:l.default.string,target:l.default.string,eventCategory:l.default.string,eventAction:l.default.string,eventLabel:l.default.string,eventValue:l.default.number,onClick:l.default.func}},qJVd:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Kfvu"),i=a("xH3h"),l=a("CxY0"),u=a.n(l),s=a("1Qp6"),c=a("wCQ3"),d=function(e){var t=e.location,a=e.tag,n=e.title,o=e.posts,l=e.children,d=i.data.site.siteMetadata.siteUrl,g=u.a.resolve(d,t.pathname);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{type:"Series",canonical:g,title:n}),r.a.createElement(s.j,{header:r.a.createElement(s.h,{tag:a,numberOfPosts:o.length})},r.a.createElement("div",{className:"inner posts"},r.a.createElement("div",{className:"tag-cta"},l),r.a.createElement("div",{className:"post-feed"},o.map((function(e,t){return r.a.createElement(s.l,{key:e.id,post:e,num:t,isHome:!0,label:r.a.createElement(s.p,{label:"New",isNew:!0})})}))))))};t.default=function(e){var t=e.location,a=new Date("2020-04-09T22:30:00"),n=new Date("2020-04-15T22:30:00"),i=[{id:3,slug:"contact-tracing-strategy-in-south-korea",title:"Contact tracing strategy in South Korea",excerpt:"Contact tracing has been a key component of South Korea's strategy to fight COVID-19. Find out how the balance between privacy and public health concerns are managed through institutional boundaries, strict guidelines around sharing information, and legal grounds. You can also learn about the role local governments play and how various smartphone applications developed by both government agencies and private individuals have kept citizens informed.",primary_author:{name:"COVID Translate Team",slug:"SLUG"},authors:[{name:"COVID Translate Team",slug:"SLUG"}],primary_tag:{name:"COVID-19 Resources",slug:"covid-19-resources"},published_at:n.toISOString(),published_at_pretty:n.toDateString()},{id:2,slug:"covid-19-test-site-installation-guide",title:"COVID-19 test site installation guide",excerpt:"While we were focused on getting v1.0 out, a graduate student from France reached out to us about a test site installation guide that his group of volunteers worked on. Thank you for sharing! Click here to download the guides.",primary_author:{name:"COVID Translate Team",slug:"SLUG"},authors:[{name:"COVID Translate Team",slug:"SLUG"}],primary_tag:{name:"COVID-19 Resources",slug:"covid-19-resources"},published_at:a,published_at_pretty:a.toDateString()}],l="COVID-19 Resources",u={name:l,description:"A collection of external resources in English curated by the COVID Translate Team"};return r.a.createElement(d,{location:t,tag:u,title:l,posts:i},r.a.createElement("h2",null,"Quick download links:"),r.a.createElement("p",null,r.a.createElement("b",null,r.a.createElement(o.OutboundLink,{href:"/tracking-strategy-in-Korea.pdf"},"Contact tracing strategy in South Korea"))),r.a.createElement("p",null,r.a.createElement("b",null,r.a.createElement(o.OutboundLink,{href:"/COVID19-drive-through-test-site-instruction.pdf"},"Drive-through guide"))),r.a.createElement("p",null,r.a.createElement("b",null,r.a.createElement(o.OutboundLink,{href:"/COVID19-walk-through-test-site-instruction.pdf"},"Walk-through guide"))))}},xH3h:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://covidtranslate.org"}}}}')}}]);
//# sourceMappingURL=component---src-pages-covid-19-resources-js-35e5760dcec147837fa5.js.map