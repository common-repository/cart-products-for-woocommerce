!function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(1)},function(e,t,o){"use strict";var n=o(2),a=(o.n(n),o(3));o.n(a);!function(e){function t(t){var o=t.attributes,s=t.setAttributes;t.setState,t.status;console.log("category",o);var i=(c({category_txt:o.category})(function(t){t.category,t.setState;return e.element.createElement(a,{label:"Categories",value:o.category,onChange:function(e){return s({category_txt:e})}})}),c({actions:o.actions})(function(t){t.actions,t.setState;return e.element.createElement(r,{label:"Show Footer",value:o.actions,options:[{label:"Yes",value:"true"},{label:"No",value:"false"}],onChange:function(e){s({actions:e})}})})),f=c({footer_total:o.footer_total})(function(t){t.footer_total,t.setState;return e.element.createElement(r,{label:"Show Total Price",value:o.footer_total,options:[{label:"Yes",value:"true"},{label:"No",value:"false"}],onChange:function(e){s({footer_total:e})}})}),p=c({show_thumb:o.show_thumb})(function(t){t.show_thumb,t.setState;return e.element.createElement(r,{label:"Show Product Thumb",value:o.show_thumb,options:[{label:"Yes",value:"true"},{label:"No",value:"false"}],onChange:function(e){s({show_thumb:e})}})}),m=c({type:o.type})(function(t){t.type,t.setState;return e.element.createElement(r,{label:"Type",value:o.type,options:[{label:"Default",value:"default"},{label:"By Category",value:"bycategory"}],onChange:function(e){s({type:e})}})}),g=c({category:o.category})(function(t){t.category,t.setState;return e.element.createElement(r,{multiple:!0,label:"Category",value:o.category,options:u,onChange:function(e){s({category:e})}})}),b=l(n,{},l(g),l(m),l(p),l(i),l(f),l("a",{href:"https://www.cloudways.com/en/wordpress-cloud-hosting.php?id=151244&amp;a_bid=08e2b8f4",target:"_top"},l("img",{src:"//www.cloudways.com/affiliate/accounts/default1/banners/08e2b8f4.jpg",title:"Load WordPress Sites in as fast as 37ms!"})),l("img",{src:"https://www.cloudways.com/affiliate/scripts/imp.php?id=151244&amp;a_bid=08e2b8f4",width:"1",height:"1"}));return l("div",{className:"wccp-cart-products-store-block"},l("h3",{className:"strong"},"Cart Products for Woocommerce"),l("p",{className:""},"You can configure this block under Block Settings."),l("p",{className:"italic"},"Changes are visible on front-end."),b)}var o=e.blocks.registerBlockType,n=e.editor.InspectorControls,a=(e.components.PanelBody,e.components.TextControl),r=(e.components.ColorPicker,e.components.ColorPalette,e.components.SelectControl),l=(e.components.Dashicon,e.element.createElement),c=e.compose.withState,s=e.i18n.__,u=[];e.apiFetch({path:"/wc/v3/products/categories/"}).then(function(e){return $.each(e,function(e,t){u.push({label:t.name,value:t.slug})}),u});o("wccp/shortcode-block",{title:s("Cart Products"),category:"embed",icon:{foreground:"#46aaf8",src:"store"},attributes:{type:{type:"string",default:null},category:{type:"array",default:null},actions:{type:"string",default:"true"},footer_total:{type:"string",default:"true"},show_thumb:{type:"string",default:"true"}},edit:t,save:function(e){return null}})}(window.wp)},function(e,t){},function(e,t){}]);