function fontplusloadc32a3e3f(){var u8=['font_tsukushi_interview_1'],oth_fonts=[],nicknames=[],eot_files=['font_tsukushi_interview_1_h.eot'];var u7=document.getElementsByTagName("script");var u2=u7[u7.length-1].src;var H=u2.slice(0,u2.lastIndexOf("/")+1);var F=function(B,u,h){var K=B.toLowerCase();for(h=u.length;h--&&u[h].toLowerCase()!=K;);return h};var G=function(K){return K.replace(/^\s+|\s+$/g,'')};var S7=function(){var K=['MSIE','Firefox','Chrome','Safari','Opera'],agent=navigator.userAgent,name,ver,mode,n,i,os,fd='fontplus-unused';name=ver=mode=n='';for(i in K){if(!K.hasOwnProperty(i))continue;if(agent.indexOf(K[i])!=-1){name=K[i];n=K[i].substr(0,1);if(name=='Opera'&&agent.match(/; Opera (Mobi|Tablet)\/(.*) Version\/([0-9\.]+)/)){name+=' Mobile';ver=RegExp.$3;n='T'}else if(agent.match(/(iPad|iPhone); (.*) OS ([0-9_]+) like /)){name+=' iOS';ver=RegExp.$3.replace(/_/g,'.');n='I';os='iOS'}else if(agent.match(/Android ([0-9\.]+)/)){name=os='Android';ver=RegExp.$1;n='A'}else if(agent.match(/Version\/([0-9\.]+)/))ver=RegExp.$1;else if(agent.match(RegExp(name+"[\/ ]([0-9\.]+)")))ver=RegExp.$1;break}}if(!name){name='Unknown:'+agent;ver=99;n='U'}if(!os){if(agent.match(/Windows Phone/))os='Windows Phone';else if(agent.match(/Windows/)){if(agent.match(/NT 5.(1|2; (Win|WOW)64)/)){os='WindowsXP'}else{os='Windows'}}else if(agent.match(/Macintosh/))os='Macintosh';else if(agent.match(/Linux/))os='Linux';else os='Unknown:'+agent}if(n=='M'){mode=document.documentMode?document.documentMode:5;if(parseInt(ver)<9)fd='Courier New'}else if(n=='O')fd='Courier New';else if(n=='T')fd='Droid Sans';return{'name':name,'ver':ver,'mode':mode,'os':os,'fd':fd,'n':n,'v':parseFloat(ver)}};var u1=function(K){var B=[],i=0,n=K.firstChild;while((K=n)){if(K.nodeType===1)B[i++]=K;n=K.firstChild||K.nextSibling;while(!n&&(K=K.parentNode))n=K.nextSibling}return B};var f=function(g){var h6=new Array();if(!document.getElementsByTagName)return h6;g=g.replace(/\s*([^\w])\s*/g,"$1");var d=g.split(",");var r=function(h,u){if(!u)u='*';var P=new Array;for(var K=0,len=h.length;con=h[K],K<len;K++){var S;if(u=='*')S=con.all?con.all:con.getElementsByTagName("*");else S=con.getElementsByTagName(u);for(var B=0,leng=S.length;B<leng;B++)P.push(S[B])}return P};COMMA:for(var h0=0,len1=d.length;selector=d[h0],h0<len1;h0++){var q=new Array(document);var A=selector.split(" ");SPACE:for(var B0=0,len2=A.length;element=A[B0],B0<len2;B0++){var B4=element.indexOf("[");var s=element.indexOf("]");var p=element.indexOf("#");if(p+1&&!(p>B4&&p<s)){var h5=element.split("#");var l=h5[0];var c=h5[1];var h1=document.getElementById(c);if(!h1||(l&&h1.nodeName.toLowerCase()!=l)){continue COMMA}q=new Array(h1);continue SPACE}p=element.indexOf(".");if(p+1&&!(p>B4&&p<s)){var h5=element.split('.');var l=h5[0];var O=h5[1];var W=r(q,l);q=new Array;for(var h4=0,len=W.length;fnd=W[h4],h4<len;h4++){if(fnd.className&&fnd.className.match(new RegExp('(^|\s)'+O+'(\s|$)')))q.push(fnd)}continue SPACE}if(element.indexOf('[')+1){if(element.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?['"]?([^\]'"]*)['"]?\]$/)){var l=RegExp.$1;var m=RegExp.$2;var w=RegExp.$3;var h2=RegExp.$4}var W=r(q,l);q=new Array;for(var h4=0,len=W.length;fnd=W[h4],h4<len;h4++){if(w=='='&&fnd.getAttribute(m)!=h2)continue;if(w=='~'&&!fnd.getAttribute(m).match(new RegExp('(^|\\s)'+h2+'(\\s|$)')))continue;if(w=='|'&&!fnd.getAttribute(m).match(new RegExp('^'+h2+'-?')))continue;if(w=='^'&&fnd.getAttribute(m).indexOf(h2)!=0)continue;if(w=='$'&&fnd.getAttribute(m).lastIndexOf(h2)!=(fnd.getAttribute(m).length-h2.length))continue;if(w=='*'&&!(fnd.getAttribute(m).indexOf(h2)+1))continue;else if(!fnd.getAttribute(m))continue;q.push(fnd)}continue SPACE}var W=r(q,element);q=W}for(var h7=0,len=q.length;h7<len;h7++)h6.push(q[h7])}return h6};var u4=function(){var B=document;var K=u1(B);t(K);b(B)};var t=function(K){var B,k;for(k=K.length;k--;){if((B=h9(K[k]))==null)continue;u0(K[k],B)}};var b=function(K){for(var B=K.styleSheets.length;B--;)x(K.styleSheets[B])};var x=function(u){var K,sc,st,act,p_cls;try{K=u.cssRules?u.cssRules:u.rules}catch(e){K=null}if(!K)return;for(var B=K.length;B--;){try{sc=K[B].styleSheet}catch(e){sc=null}if(sc)x(sc);if(!K[B].selectorText)continue;var S=K[B].selectorText.match(/(:link|:visited|:hover|:active)/ig);if(S&&S.length&&K[B].style.fontFamily.length){act=K[B].selectorText.replace(/:link|:visited|:hover|:active/ig,"");p_cls=f(act);for(var h=p_cls.length;h--;){if((st=h9(p_cls[h]))==null||G(st)==G(K[B].style.fontFamily)){continue}u0(p_cls[h],K[B].style.fontFamily)}}}};var h9=function(K){return K.currentStyle?K.currentStyle['fontFamily']:(document.defaultView?document.defaultView.getComputedStyle(K,null).getPropertyValue('fontFamily'):null)};var u0=function(h,K){var B=K.replace(/'/g,"").replace(/"/g,"").split(","),idx,nst=false;for(var u=0;u<B.length;u++){B[u]=G(B[u]);if(F(B[u],oth_fonts)>=0){continue}idx=F(B[u],u8);if(idx<0){oth_fonts.push(B[u]);continue}if(!nst)nst=K.replace(/'/g,"").replace(/"/g,"");if(nicknames[idx]==null)nicknames[idx]='FP-'+C(16);ecp_fa=B[u].replace(/\+/g,"\\+").replace(/\^/g,"\\^").replace(/\$/g,"\\$").replace(/\*/g,"\\*").replace(/\?/g,"\\?").replace(/\./g,"\\.");nst=nst.replace(new RegExp(ecp_fa),nicknames[idx]);break}if(nst)h.style.fontFamily=nst};var C=function(K){var B='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',rand='',i,n=B.length;for(i=K;i--;)rand+=B.charAt(Math.floor(Math.random()*n));return rand};var u3=function(){var K=document.createElement('style');K.setAttribute('type','text/css');K.setAttribute('id','fontplus_ie_css');document.getElementsByTagName("head")[0].appendChild(K);var B="";for(var h=0;h<nicknames.length;h++){if(nicknames[h]){B+="@font-face { font-family: '"+nicknames[h]+"'; src: url('"+H+eot_files[h]+"'); }\n"}}K.styleSheet.cssText=B};var o=function(){if(N){u4();u3()}};var u9=S7();var N=(u9.n=='M'&&u9.v<=8&&eot_files.length>0);if(!N){var h8=document.createElement("link");h8.rel="stylesheet";h8.type="text/css";h8.charset="UTF-8";if(u9.os=='Windows'&&u9.n!='M'||u9.os=='WindowsXP'&&u9.n!='C'&&u9.n!='S'){h8.href=H+"font_interview_1_css_h.css"}else{h8.href=H+"font_interview_1_css.css"}document.getElementsByTagName("head")[0].appendChild(h8)}if(window.attachEvent){window.attachEvent("onload",o)}else if(window.addEventListener){window.addEventListener("load",o,false)}else{window.onload=o}}fontplusloadc32a3e3f();