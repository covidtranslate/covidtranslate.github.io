(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6qSS":function(e,t,a){"use strict";a("f3/d");var n=a("DzNV"),l=a("q1tI"),r=a.n(l),o=a("Wbzz"),i=a("CxY0"),s=a.n(i),c=a("1Qp6"),u=a("7S7Y"),m=a("wCQ3"),d=a("uVWo");t.a=function(e){var t=e.post,a=e.location,l=e.children,i=n.data.site.siteMetadata.siteUrl,p=s.a.resolve(i,a.pathname),f=t.feature_image,g=t.featureImageSharp&&t.featureImageSharp.childImageSharp&&t.featureImageSharp.childImageSharp.fluid,v=Object(d.b)({tags:t.tags,isFeatured:f,isImage:f&&!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{canonical:p,post:t,author:{}}),r.a.createElement(u.b,{isPost:!0,activeClass:"nav-post-title-active",render:function(e){return r.a.createElement(c.j,{isPost:!0,sticky:e,header:r.a.createElement(c.g,{sticky:e,title:t.title})},r.a.createElement("div",{className:"inner"},r.a.createElement("article",{className:"post-full "+v},r.a.createElement("header",{className:"post-full-header"},t.primary_tag&&r.a.createElement("section",{className:"post-full-tags"},r.a.createElement(o.Link,{to:"/"+t.primary_tag.slug+"/"},t.primary_tag.name)),r.a.createElement("h1",{ref:e&&e.anchorRef,className:"post-full-title"},t.title),t.custom_excerpt&&r.a.createElement("p",{className:"post-full-custom-excerpt"},t.custom_excerpt),r.a.createElement("div",{className:"post-full-byline"},r.a.createElement("section",{className:"post-full-byline-content"},r.a.createElement(c.a,{authors:t.authors,isPost:!0}),r.a.createElement("section",{className:"post-full-byline-meta"},r.a.createElement("h4",{className:"author-name"},t.authors.map((function(e,t){return r.a.createElement(o.Link,{key:t,to:"/about"},e.name)}))),r.a.createElement("div",{className:"byline-meta-content"},r.a.createElement("time",{className:"byline-meta-date",dateTime:t.published_at},t.published_at_pretty," ")))))),f&&r.a.createElement("figure",{className:"post-full-image"},r.a.createElement(c.i,{fluidClass:"kg-card kg-code-card",fluidImg:g,srcImg:f,title:t.title})),r.a.createElement("section",{className:"post-full-content"},r.a.createElement("div",{className:"post-content load-external-scripts"},l)))))}}))}},DzNV:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://covidtranslate.org"}}}}')},Kfvu:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.OutboundLink=s,t.trackCustomEvent=function(e){var t=e.category,a=e.action,n=e.label,l=e.value,r=e.nonInteraction,o=void 0===r||r,i=e.transport,s=e.hitCallback,c=e.callbackTimeout,u=void 0===c?1e3:c;if("undefined"!=typeof window&&window.ga){var m={eventCategory:t,eventAction:a,eventLabel:n,eventValue:l,nonInteraction:o,transport:i};s&&"function"==typeof s&&(m.hitCallback=function(e,t){void 0===t&&(t=1e3);var a=!1,n=function(){a||(a=!0,e())};return setTimeout(n,t),n}(s,u)),window.ga("send","event",m)}};var l=n(a("pVnL")),r=n(a("8OQS")),o=n(a("q1tI")),i=n(a("17x9"));function s(e){var t=e.eventCategory,a=e.eventAction,n=e.eventLabel,i=e.eventValue,s=(0,r.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return o.default.createElement("a",(0,l.default)({},s,{onClick:function(l){"function"==typeof e.onClick&&e.onClick(l);var r=!0;return(0!==l.button||l.altKey||l.ctrlKey||l.metaKey||l.shiftKey||l.defaultPrevented)&&(r=!1),e.target&&"_self"!==e.target.toLowerCase()&&(r=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:a||"click",eventLabel:n||e.href,eventValue:i,transport:r?"beacon":"",hitCallback:function(){r&&(document.location=e.href)}}):r&&(document.location=e.href),!1}}))}s.propTypes={href:i.default.string,target:i.default.string,eventCategory:i.default.string,eventAction:i.default.string,eventLabel:i.default.string,eventValue:i.default.number,onClick:i.default.func}},rd7z:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Kfvu"),o=a("6qSS"),i=a("WdeC");t.default=function(e){var t=e.location,a=new Date("2020-04-19T23:30:00"),n=new Date("2020-04-20T22:00:00"),s={id:6,slug:"kcdc-covid-19-response-guidelines/more-languages",title:"KCDC COVID-19 Response Guidelines translated into more languages",primary_author:{name:"COVID Translate Team",slug:"SLUG"},authors:[{name:"COVID Translate Team",slug:"SLUG"}],primary_tag:{name:"COVID-19 Response Guidelines",slug:"kcdc-covid-19-response-guidelines/more-languages"},published_at:a.toISOString(),published_at_pretty:a.toDateString()};return l.a.createElement(o.a,{location:t,post:s},l.a.createElement("h3",{style:{marginBottom:"28px",marginTop:"16px"}},"KCDC COVID-19 Response Guidelines"),l.a.createElement("p",{className:"post-cta"},l.a.createElement("b",null,l.a.createElement(r.OutboundLink,{href:"https://www.proiectecovid.org/"},"Română (Romanian 🇷🇴)"),"  ",l.a.createElement(i.a,null))),l.a.createElement("p",{className:"post-cta"},l.a.createElement("b",null,l.a.createElement(r.OutboundLink,{href:"/CovidPlaybook_RU_v1.0.pdf"},"Русский (Russian 🇷🇺)"))),l.a.createElement("p",{className:"post-cta"},l.a.createElement("b",null,l.a.createElement(r.OutboundLink,{href:"/CovidPlaybook_IT_v1.0.pdf"},"Italiano (Italian 🇮🇹)"))),l.a.createElement("h3",{style:{marginBottom:"28px",marginTop:"16px"}},"Appendix to the Guidelines"),l.a.createElement("p",{className:"post-cta"},l.a.createElement("b",null,l.a.createElement(r.OutboundLink,{href:"/CovidPlaybook_Appendix_IT_v1.0.pdf"},"Italiano (Italian 🇮🇹)"))),l.a.createElement("p",null,l.a.createElement("i",null,"Last updated on ",n.toLocaleDateString("en")," ",n.toLocaleTimeString("en")," EST")),l.a.createElement("p",null,l.a.createElement("i",null,"* Stay tuned for more languages")," 🌐"))}}}]);
//# sourceMappingURL=component---src-pages-kcdc-covid-19-response-guidelines-more-languages-js-a13fd2cffe614116be56.js.map