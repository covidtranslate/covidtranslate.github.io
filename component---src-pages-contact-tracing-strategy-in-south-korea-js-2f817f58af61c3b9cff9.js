(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6qSS":function(e,t,a){"use strict";a("f3/d");var n=a("DzNV"),r=a("q1tI"),o=a.n(r),l=a("Wbzz"),i=a("CxY0"),c=a.n(i),s=a("1Qp6"),u=a("7S7Y"),m=a("wCQ3"),d=a("uVWo");t.a=function(e){var t=e.post,a=e.location,r=e.children,i=n.data.site.siteMetadata.siteUrl,f=c.a.resolve(i,a.pathname),h=t.feature_image,p=t.featureImageSharp&&t.featureImageSharp.childImageSharp&&t.featureImageSharp.childImageSharp.fluid,g=Object(d.b)({tags:t.tags,isFeatured:h,isImage:h&&!0});return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{canonical:f,post:t,author:{}}),o.a.createElement(u.b,{isPost:!0,activeClass:"nav-post-title-active",render:function(e){return o.a.createElement(s.j,{isPost:!0,sticky:e,header:o.a.createElement(s.g,{sticky:e,title:t.title})},o.a.createElement("div",{className:"inner"},o.a.createElement("article",{className:"post-full "+g},o.a.createElement("header",{className:"post-full-header"},t.primary_tag&&o.a.createElement("section",{className:"post-full-tags"},o.a.createElement(l.Link,{to:"/"+t.primary_tag.slug+"/"},t.primary_tag.name)),o.a.createElement("h1",{ref:e&&e.anchorRef,className:"post-full-title"},t.title),t.custom_excerpt&&o.a.createElement("p",{className:"post-full-custom-excerpt"},t.custom_excerpt),o.a.createElement("div",{className:"post-full-byline"},o.a.createElement("section",{className:"post-full-byline-content"},o.a.createElement(s.a,{authors:t.authors,isPost:!0}),o.a.createElement("section",{className:"post-full-byline-meta"},o.a.createElement("h4",{className:"author-name"},t.authors.map((function(e,t){return o.a.createElement(l.Link,{key:t,to:"/about"},e.name)}))),o.a.createElement("div",{className:"byline-meta-content"},o.a.createElement("time",{className:"byline-meta-date",dateTime:t.published_at},t.published_at_pretty," ")))))),h&&o.a.createElement("figure",{className:"post-full-image"},o.a.createElement(s.i,{fluidClass:"kg-card kg-code-card",fluidImg:p,srcImg:h,title:t.title})),o.a.createElement("section",{className:"post-full-content"},o.a.createElement("div",{className:"post-content load-external-scripts"},r)))))}}))}},DzNV:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://covidtranslate.org"}}}}')},Kfvu:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.OutboundLink=c,t.trackCustomEvent=function(e){var t=e.category,a=e.action,n=e.label,r=e.value,o=e.nonInteraction,l=void 0===o||o,i=e.transport,c=e.hitCallback,s=e.callbackTimeout,u=void 0===s?1e3:s;if("undefined"!=typeof window&&window.ga){var m={eventCategory:t,eventAction:a,eventLabel:n,eventValue:r,nonInteraction:l,transport:i};c&&"function"==typeof c&&(m.hitCallback=function(e,t){void 0===t&&(t=1e3);var a=!1,n=function(){a||(a=!0,e())};return setTimeout(n,t),n}(c,u)),window.ga("send","event",m)}};var r=n(a("pVnL")),o=n(a("8OQS")),l=n(a("q1tI")),i=n(a("17x9"));function c(e){var t=e.eventCategory,a=e.eventAction,n=e.eventLabel,i=e.eventValue,c=(0,o.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return l.default.createElement("a",(0,r.default)({},c,{onClick:function(r){"function"==typeof e.onClick&&e.onClick(r);var o=!0;return(0!==r.button||r.altKey||r.ctrlKey||r.metaKey||r.shiftKey||r.defaultPrevented)&&(o=!1),e.target&&"_self"!==e.target.toLowerCase()&&(o=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:a||"click",eventLabel:n||e.href,eventValue:i,transport:o?"beacon":"",hitCallback:function(){o&&(document.location=e.href)}}):o&&(document.location=e.href),!1}}))}c.propTypes={href:i.default.string,target:i.default.string,eventCategory:i.default.string,eventAction:i.default.string,eventLabel:i.default.string,eventValue:i.default.number,onClick:i.default.func}},Z5V9:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Kfvu"),l=a("6qSS");t.default=function(e){var t=e.location,a=new Date("2020-04-15T22:30:00"),n={id:3,slug:"contact-tracing-strategy-in-south-korea",title:"Contact tracing strategy in South Korea",primary_author:{name:"COVID Translate Team",slug:"SLUG"},authors:[{name:"COVID Translate Team",slug:"SLUG"}],primary_tag:{name:"COVID-19 Resources",slug:"covid-19-resources"},published_at:a.toISOString(),published_at_pretty:a.toDateString()};return r.a.createElement(l.a,{location:t,post:n},r.a.createElement("p",{className:"post-cta"},r.a.createElement("b",null,r.a.createElement(o.OutboundLink,{href:"/tracking-strategy-in-Korea.pdf"},"Contact tracing strategy in South Korea"))),r.a.createElement("p",null,r.a.createElement("i",null,"Last updated on ",a.toLocaleDateString("en")," ",a.toLocaleTimeString("en")," EST")),r.a.createElement("p",null,"This is another research report put together by the amazing team led by"," ",r.a.createElement("a",{href:"mailto:seungcheol.ohk@sciencespo.fr"},"SeungCheol Ohk"),". Thank you again to the team of volunteers for sharing this document!"),r.a.createElement("p",null,"An excerpt:"),r.a.createElement("blockquote",null,"[South Korea] tests many people quickly, and they are also swift to identify those that have had contact with the infected person, thus making their target of quarantine very clear and specific. But without such a system set in place, it is difficult to either identify the infected person or the people that have had contact with them. It is also hard to know what specific sites to block off and decontaminate. In this case, a nationwide lockdown and the closing of borders become the only viable method of control."))}}}]);
//# sourceMappingURL=component---src-pages-contact-tracing-strategy-in-south-korea-js-2f817f58af61c3b9cff9.js.map