(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{DzNV:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://covidtranslate.org"}}}}')},Kfvu:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.OutboundLink=s,t.trackCustomEvent=function(e){var t=e.category,a=e.action,n=e.label,l=e.value,o=e.nonInteraction,r=void 0===o||o,i=e.transport,s=e.hitCallback,c=e.callbackTimeout,u=void 0===c?1e3:c;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:a,eventLabel:n,eventValue:l,nonInteraction:r,transport:i};s&&"function"==typeof s&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var a=!1,n=function(){a||(a=!0,e())};return setTimeout(n,t),n}(s,u)),window.ga("send","event",d)}};var l=n(a("pVnL")),o=n(a("8OQS")),r=n(a("q1tI")),i=n(a("17x9"));function s(e){var t=e.eventCategory,a=e.eventAction,n=e.eventLabel,i=e.eventValue,s=(0,o.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return r.default.createElement("a",(0,l.default)({},s,{onClick:function(l){"function"==typeof e.onClick&&e.onClick(l);var o=!0;return(0!==l.button||l.altKey||l.ctrlKey||l.metaKey||l.shiftKey||l.defaultPrevented)&&(o=!1),e.target&&"_self"!==e.target.toLowerCase()&&(o=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:a||"click",eventLabel:n||e.href,eventValue:i,transport:o?"beacon":"",hitCallback:function(){o&&(document.location=e.href)}}):o&&(document.location=e.href),!1}}))}s.propTypes={href:i.default.string,target:i.default.string,eventCategory:i.default.string,eventAction:i.default.string,eventLabel:i.default.string,eventValue:i.default.number,onClick:i.default.func}},ujZQ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),o=a("Kfvu"),r=(a("f3/d"),a("DzNV")),i=a("Wbzz"),s=a("CxY0"),c=a.n(s),u=a("1Qp6"),d=a("7S7Y"),m=a("wCQ3"),p=a("uVWo"),f=function(e){var t=e.post,a=e.location,n=e.children,o=r.data.site.siteMetadata.siteUrl,s=c.a.resolve(o,a.pathname),f=t.feature_image,h=t.featureImageSharp&&t.featureImageSharp.childImageSharp&&t.featureImageSharp.childImageSharp.fluid,v=Object(p.b)({tags:t.tags,isFeatured:f,isImage:f&&!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{canonical:s,post:t,author:{}}),l.a.createElement(d.b,{isPost:!0,activeClass:"nav-post-title-active",render:function(e){return l.a.createElement(u.i,{isPost:!0,sticky:e,header:l.a.createElement(u.g,{sticky:e,title:t.title})},l.a.createElement("div",{className:"inner"},l.a.createElement("article",{className:"post-full "+v},l.a.createElement("header",{className:"post-full-header"},t.primary_tag&&l.a.createElement("section",{className:"post-full-tags"},l.a.createElement(i.Link,{to:"/kcdc-covid-19-response-guidelines/"},t.primary_tag.name)),l.a.createElement("h1",{ref:e&&e.anchorRef,className:"post-full-title"},t.title),t.custom_excerpt&&l.a.createElement("p",{className:"post-full-custom-excerpt"},t.custom_excerpt),l.a.createElement("div",{className:"post-full-byline"},l.a.createElement("section",{className:"post-full-byline-content"},l.a.createElement(u.a,{authors:t.authors,isPost:!0}),l.a.createElement("section",{className:"post-full-byline-meta"},l.a.createElement("h4",{className:"author-name"},t.authors.map((function(e,t){return l.a.createElement(i.Link,{key:t,to:"/about"},e.name)}))),l.a.createElement("div",{className:"byline-meta-content"},l.a.createElement("time",{className:"byline-meta-date",dateTime:t.published_at},t.published_at_pretty," ")))))),f&&l.a.createElement("figure",{className:"post-full-image"},l.a.createElement(u.h,{fluidClass:"kg-card kg-code-card",fluidImg:h,srcImg:f,title:t.title})),l.a.createElement("section",{className:"post-full-content"},l.a.createElement("div",{className:"post-content load-external-scripts"},n)))))}}))};t.default=function(e){var t=e.location,a=new Date("2020-04-06T22:00:00"),n={id:1,slug:"kcdc-covid-19-response-guidelines",title:"KCDC COVID-19 Response Guidelines translation v1.0 released",primary_author:{name:"COVID Translate Team",slug:"team"},authors:[{name:"COVID Translate Team",slug:"team"}],primary_tag:{name:"COVID-19 Response Guidelines"},published_at:a,published_at_pretty:a.toDateString()};return l.a.createElement(f,{location:t,post:n},l.a.createElement("p",{className:"post-cta"},l.a.createElement("b",null,l.a.createElement(o.OutboundLink,{href:"/CovidPlaybook_EN_v1.0.pdf"},"Download the v1.0 document"))),l.a.createElement("p",{className:"post-cta"},l.a.createElement("b",null,l.a.createElement(o.OutboundLink,{href:"/CovidPlaybook_Appendix_EN_v1.0.pdf"},"Download the Appendix"))),l.a.createElement("p",null,l.a.createElement("i",null,"* We'll also be uploading a glossary of terms soon.")),l.a.createElement("p",null,l.a.createElement("i",null,"Updated on ",a.toLocaleDateString("en")," ",a.toLocaleTimeString("en")," EST")),l.a.createElement("p",null,"This is an unofficial translation of a document from the"," ",l.a.createElement("a",{href:"https://www.cdc.go.kr/"},"Korea Centers for Disease Control and Prevention (KCDC)"),'. The original document, titled "코로나바이러스감염증-19 대응 지침 (지자체용) 7-3", has been updated by KCDC and is no longer available from its website; instead, a copy of the original document can be found'," ",l.a.createElement(o.OutboundLink,{href:"/archive/CovidPlaybook_KR.pdf"},"here"),'. The newest edition, titled "코로나바이러스감염증-19 대응 지침 (지자체용) 7-4", can be downloaded from the'," ",l.a.createElement("a",{href:"https://www.cdc.go.kr/board/board.es?mid=a20507020000&bid=0019&act=view&list_no=366712&tag=&nPage=1"},"KCDC website"),". They contain guidance to South Korean local governments concerning public health measures against COVID-19."),l.a.createElement("p",null,"It is a product of a team of volunteers working around the clock, who hope that the information will be useful to governments around the world as they devise their battle plans against COVID-19."),l.a.createElement("p",null,"We are releasing version 1.0 today after carefully reviewing, formatting, and correcting our"," ",l.a.createElement(o.OutboundLink,{href:"/assets/CovidPlaybook_EN_v0.9.pdf"},"previous version (v0.9)"),". We hope that this document will be a helpful reference to those who are seeking in-depth information on how to respond to this unprecendented crisis."),l.a.createElement("p",null,"— COVID Translate Team"))}}}]);
//# sourceMappingURL=component---src-pages-kcdc-covid-19-response-guidelines-js-f0b0ce37d0a6af3f159c.js.map