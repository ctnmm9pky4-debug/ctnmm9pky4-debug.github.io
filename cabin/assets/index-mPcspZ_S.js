(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ro="186",ki={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uh=0,Ko=1,dh=2,ir=1,ac=2,fs=3,di=0,He=1,In=2,Nn=0,ms=1,Zo=2,Jo=3,Qo=4,fh=5,zi=100,ph=101,mh=102,gh=103,_h=104,xh=200,vh=201,Mh=202,Sh=203,oc=204,lc=205,Eh=206,yh=207,Ah=208,bh=209,Th=210,wh=211,Rh=212,Ch=213,Ph=214,ga=0,_a=1,xa=2,_s=3,va=4,Ma=5,Sa=6,Ea=7,ao=0,Dh=1,Lh=2,Mn=0,cc=1,hc=2,uc=3,dc=4,fc=5,pc=6,mc=7,gc=300,fi=301,Yi=302,Dr=303,Lr=304,Tr=306,Ki=1e3,Un=1001,ya=1002,Re=1003,Ih=1004,Rs=1005,Ne=1006,Ir=1007,hi=1008,Ye=1009,_c=1010,xc=1011,xs=1012,oo=1013,Sn=1014,cn=1015,En=1016,lo=1017,co=1018,vs=1020,vc=35902,Mc=35899,Sc=1021,Ec=1022,hn=1023,On=1026,ui=1027,ho=1028,uo=1029,pi=1030,fo=1031,po=1033,sr=33776,rr=33777,ar=33778,or=33779,Aa=35840,ba=35841,Ta=35842,wa=35843,Ra=36196,Ca=37492,Pa=37496,Da=37488,La=37489,ur=37490,Ia=37491,Ua=37808,Na=37809,Fa=37810,Oa=37811,Ba=37812,za=37813,Ha=37814,Ga=37815,Va=37816,ka=37817,Wa=37818,Xa=37819,qa=37820,Ya=37821,Ka=36492,Za=36494,Ja=36495,Qa=36283,ja=36284,dr=36285,$a=36286,Uh=3200,fr=0,Nh=1,Jn="",je="srgb",pr="srgb-linear",mr="linear",jt="srgb",Ur=7680,Fh=519,Oh=512,Bh=513,zh=514,mo=515,Hh=516,Gh=517,go=518,Vh=519,yc=35044,jo="300 es",vn=2e3,Ms=2001;function kh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wh(){const i=Ss("canvas");return i.style.display="block",i}const $o={};function gr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ac(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pt(...i){i=Ac(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=Ac(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Wi(...i){const t=i.join(" ");t in $o||($o[t]=!0,Pt(...i))}function Xh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const qh={[ga]:_a,[xa]:Sa,[va]:Ea,[_s]:Ma,[_a]:ga,[Sa]:xa,[Ea]:va,[Ma]:_s};class $n{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lr=Math.PI/180,to=180/Math.PI;function Qn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Bt(i,t,e){return Math.max(t,Math.min(e,i))}function Yh(i,t){return(i%t+t)%t}function Nr(i,t,e){return(1-e)*i+e*t}function xn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Kh={DEG2RAD:lr},Io=class Io{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Bt(this.x,t.x,e.x),this.y=Bt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Bt(this.x,t,e),this.y=Bt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Bt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Io.prototype.isVector2=!0;let wt=Io;class jn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],_=r[a+2],M=r[a+3];if(f!==M||c!==u||l!==d||h!==_){let g=c*u+l*d+h*_+f*M;g<0&&(u=-u,d=-d,_=-_,M=-M,g=-g);let p=1-o;if(g<.9995){const T=Math.acos(g),U=Math.sin(T);p=Math.sin(p*T)/U,o=Math.sin(o*T)/U,c=c*p+u*o,l=l*p+d*o,h=h*p+_*o,f=f*p+M*o}else{c=c*p+u*o,l=l*p+d*o,h=h*p+_*o,f=f*p+M*o;const T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+h*f+c*d-l*u,t[e+1]=c*_+h*u+l*f-o*d,t[e+2]=l*_+h*d+o*u-c*f,t[e+3]=h*_-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),d=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*_,this._y=l*d*f-u*h*_,this._z=l*h*_+u*d*f,this._w=l*h*f-u*d*_;break;case"YXZ":this._x=u*h*f+l*d*_,this._y=l*d*f-u*h*_,this._z=l*h*_-u*d*f,this._w=l*h*f+u*d*_;break;case"ZXY":this._x=u*h*f-l*d*_,this._y=l*d*f+u*h*_,this._z=l*h*_+u*d*f,this._w=l*h*f-u*d*_;break;case"ZYX":this._x=u*h*f-l*d*_,this._y=l*d*f+u*h*_,this._z=l*h*_-u*d*f,this._w=l*h*f+u*d*_;break;case"YZX":this._x=u*h*f+l*d*_,this._y=l*d*f+u*h*_,this._z=l*h*_-u*d*f,this._w=l*h*f-u*d*_;break;case"XZY":this._x=u*h*f-l*d*_,this._y=l*d*f-u*h*_,this._z=l*h*_+u*d*f,this._w=l*h*f+u*d*_;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Bt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Uo=class Uo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Bt(this.x,t.x,e.x),this.y=Bt(this.y,t.y,e.y),this.z=Bt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Bt(this.x,t,e),this.y=Bt(this.y,t,e),this.z=Bt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fr.copy(this).projectOnVector(t),this.sub(Fr)}reflect(t){return this.sub(Fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Bt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uo.prototype.isVector3=!0;let C=Uo;const Fr=new C,tl=new jn,No=class No{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],_=n[8],M=s[0],g=s[3],p=s[6],T=s[1],U=s[4],S=s[7],A=s[2],b=s[5],w=s[8];return r[0]=a*M+o*T+c*A,r[3]=a*g+o*U+c*b,r[6]=a*p+o*S+c*w,r[1]=l*M+h*T+f*A,r[4]=l*g+h*U+f*b,r[7]=l*p+h*S+f*w,r[2]=u*M+d*T+_*A,r[5]=u*g+d*U+_*b,r[8]=u*p+d*S+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,_=e*f+n*u+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=f*M,t[1]=(s*l-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Or.makeScale(t,e)),this}rotate(t){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Or.makeRotation(-t)),this}translate(t,e){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Or.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};No.prototype.isMatrix3=!0;let It=No;const Or=new It,el=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zh(){const i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:t,whitePoint:n,transfer:mr,toXYZ:el,fromXYZ:nl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:jt,toXYZ:el,fromXYZ:nl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),i}const kt=Zh();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class Jh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vi===void 0&&(vi=Ss("canvas")),vi.width=t.width,vi.height=t.height;const s=vi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ss("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qh=0;class _o{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Br(s[a].image)):r.push(Br(s[a]))}else r=Br(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}let jh=0;const zr=new C;class Pe extends $n{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=Un,s=Un,r=Ne,a=hi,o=hn,c=Ye,l=Pe.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Qn(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zr).x}get height(){return this.source.getSize(zr).y}get depth(){return this.source.getSize(zr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ki:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ki:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=gc;Pe.DEFAULT_ANISOTROPY=1;const Fo=class Fo{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],_=c[9],M=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(_+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const U=(l+1)/2,S=(d+1)/2,A=(p+1)/2,b=(h+u)/4,w=(f+M)/4,x=(_+g)/4;return U>S&&U>A?U<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(U),s=b/n,r=w/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=b/s,r=x/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=x/r),this.set(n,s,r,e),this}let T=Math.sqrt((g-_)*(g-_)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(f-M)/T,this.z=(u-h)/T,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Bt(this.x,t.x,e.x),this.y=Bt(this.y,t.y,e.y),this.z=Bt(this.z,t.z,e.z),this.w=Bt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Bt(this.x,t,e),this.y=Bt(this.y,t,e),this.z=Bt(this.z,t,e),this.w=Bt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fo.prototype.isVector4=!0;let pe=Fo;class $h extends $n{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Pe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _o(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends $h{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bc extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tu extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const br=class br{constructor(t,e,n,s,r,a,o,c,l,h,f,u,d,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,u,d,_,M,g)}set(t,e,n,s,r,a,o,c,l,h,f,u,d,_,M,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=_,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new br().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,_=o*h,M=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+_*l,e[5]=u-M*l,e[9]=-o*c,e[2]=M-u*l,e[6]=_+d*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,_=l*h,M=l*f;e[0]=u+M*o,e[4]=_*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=M+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,_=l*h,M=l*f;e[0]=u-M*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,d=a*f,_=o*h,M=o*f;e[0]=c*h,e[4]=_*l-d,e[8]=u*l+M,e[1]=c*f,e[5]=M*l+u,e[9]=d*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,d=a*l,_=o*c,M=o*l;e[0]=c*h,e[4]=M-u*f,e[8]=_*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+_,e[10]=u-M*f}else if(t.order==="XZY"){const u=a*c,d=a*l,_=o*c,M=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+M,e[5]=a*h,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*h,e[10]=M*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eu,t,nu)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),kn.crossVectors(n,We),kn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),kn.crossVectors(n,We)),kn.normalize(),Cs.crossVectors(We,kn),s[0]=kn.x,s[4]=Cs.x,s[8]=We.x,s[1]=kn.y,s[5]=Cs.y,s[9]=We.y,s[2]=kn.z,s[6]=Cs.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],_=n[2],M=n[6],g=n[10],p=n[14],T=n[3],U=n[7],S=n[11],A=n[15],b=s[0],w=s[4],x=s[8],y=s[12],D=s[1],N=s[5],O=s[9],V=s[13],I=s[2],H=s[6],Z=s[10],W=s[14],nt=s[3],q=s[7],$=s[11],et=s[15];return r[0]=a*b+o*D+c*I+l*nt,r[4]=a*w+o*N+c*H+l*q,r[8]=a*x+o*O+c*Z+l*$,r[12]=a*y+o*V+c*W+l*et,r[1]=h*b+f*D+u*I+d*nt,r[5]=h*w+f*N+u*H+d*q,r[9]=h*x+f*O+u*Z+d*$,r[13]=h*y+f*V+u*W+d*et,r[2]=_*b+M*D+g*I+p*nt,r[6]=_*w+M*N+g*H+p*q,r[10]=_*x+M*O+g*Z+p*$,r[14]=_*y+M*V+g*W+p*et,r[3]=T*b+U*D+S*I+A*nt,r[7]=T*w+U*N+S*H+A*q,r[11]=T*x+U*O+S*Z+A*$,r[15]=T*y+U*V+S*W+A*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],_=t[3],M=t[7],g=t[11],p=t[15],T=c*d-l*u,U=o*d-l*f,S=o*u-c*f,A=a*d-l*h,b=a*u-c*h,w=a*f-o*h;return e*(M*T-g*U+p*S)-n*(_*T-g*A+p*b)+s*(_*U-M*A+p*w)-r*(_*S-M*b+g*w)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],_=t[12],M=t[13],g=t[14],p=t[15],T=e*o-n*a,U=e*c-s*a,S=e*l-r*a,A=n*c-s*o,b=n*l-r*o,w=s*l-r*c,x=h*M-f*_,y=h*g-u*_,D=h*p-d*_,N=f*g-u*M,O=f*p-d*M,V=u*p-d*g,I=T*V-U*O+S*N+A*D-b*y+w*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return t[0]=(o*V-c*O+l*N)*H,t[1]=(s*O-n*V-r*N)*H,t[2]=(M*w-g*b+p*A)*H,t[3]=(u*b-f*w-d*A)*H,t[4]=(c*D-a*V-l*y)*H,t[5]=(e*V-s*D+r*y)*H,t[6]=(g*S-_*w-p*U)*H,t[7]=(h*w-u*S+d*U)*H,t[8]=(a*O-o*D+l*x)*H,t[9]=(n*D-e*O-r*x)*H,t[10]=(_*b-M*S+p*T)*H,t[11]=(f*S-h*b-d*T)*H,t[12]=(o*y-a*N-c*x)*H,t[13]=(e*N-n*y+s*x)*H,t[14]=(M*U-_*A-g*T)*H,t[15]=(h*A-f*U+u*T)*H,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,_=r*f,M=a*h,g=a*f,p=o*f,T=c*l,U=c*h,S=c*f,A=n.x,b=n.y,w=n.z;return s[0]=(1-(M+p))*A,s[1]=(d+S)*A,s[2]=(_-U)*A,s[3]=0,s[4]=(d-S)*b,s[5]=(1-(u+p))*b,s[6]=(g+T)*b,s[7]=0,s[8]=(_+U)*w,s[9]=(g-T)*w,s[10]=(1-(u+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Mi.set(s[0],s[1],s[2]).length();const o=Mi.set(s[4],s[5],s[6]).length(),c=Mi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),sn.copy(this);const l=1/a,h=1/o,f=1/c;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,e.setFromRotationMatrix(sn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=vn,c=!1){const l=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let _,M;if(c)_=r/(a-r),M=a*r/(a-r);else if(o===vn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ms)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn,c=!1){const l=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s);let _,M;if(c)_=1/(a-r),M=a/(a-r);else if(o===vn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ms)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};br.prototype.isMatrix4=!0;let ne=br;const Mi=new C,sn=new ne,eu=new C(0,0,0),nu=new C(1,1,1),kn=new C,Cs=new C,We=new C,il=new ne,sl=new jn;class Bn{constructor(t=0,e=0,n=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return il.makeRotationFromQuaternion(t),this.setFromRotationMatrix(il,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sl.setFromEuler(this),this.setFromQuaternion(sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iu=0;const rl=new C,Si=new jn,bn=new ne,Ps=new C,ts=new C,su=new C,ru=new jn,al=new C(1,0,0),ol=new C(0,1,0),ll=new C(0,0,1),cl={type:"added"},au={type:"removed"},Ei={type:"childadded",child:null},Hr={type:"childremoved",child:null};class Me extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new C,e=new Bn,n=new jn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new It}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(al,t)}rotateY(t){return this.rotateOnAxis(ol,t)}rotateZ(t){return this.rotateOnAxis(ll,t)}translateOnAxis(t,e){return rl.copy(t).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(al,t)}translateY(t){return this.translateOnAxis(ol,t)}translateZ(t){return this.translateOnAxis(ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ts,Ps,this.up):bn.lookAt(Ps,ts,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(bn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(au),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,su),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Me.DEFAULT_UP=new C(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class un extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ou={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const g=e.getJointPose(M,n),p=this._getHandJoint(l,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&u>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ou)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Vr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=kt.workingColorSpace){if(t=Yh(t,1),e=Bt(e,0,1),n=Bt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Vr(a,r,t+1/3),this.g=Vr(a,r,t),this.b=Vr(a,r,t-1/3)}return kt.colorSpaceToWorking(this,s),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return kt.workingToColorSpace(Ue.copy(this),t),Math.round(Bt(Ue.r*255,0,255))*65536+Math.round(Bt(Ue.g*255,0,255))*256+Math.round(Bt(Ue.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.workingToColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=kt.workingColorSpace){return kt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=je){kt.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Ds);const n=Nr(Wn.h,Ds.h,e),s=Nr(Wn.s,Ds.s,e),r=Nr(Wn.l,Ds.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Dt;Dt.NAMES=wc;class xo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new xo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rc extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const rn=new C,Tn=new C,kr=new C,wn=new C,yi=new C,Ai=new C,hl=new C,Wr=new C,Xr=new C,qr=new C,Yr=new pe,Kr=new pe,Zr=new pe;class $e{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),Tn.subVectors(n,e),kr.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(Tn),c=rn.dot(kr),l=Tn.dot(Tn),h=Tn.dot(kr),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(l*c-o*h)*u,_=(a*h-o*c)*u;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Yr.setScalar(0),Kr.setScalar(0),Zr.setScalar(0),Yr.fromBufferAttribute(t,e),Kr.fromBufferAttribute(t,n),Zr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Yr,r.x),a.addScaledVector(Kr,r.y),a.addScaledVector(Zr,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),Tn.subVectors(t,e),rn.cross(Tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),rn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;yi.subVectors(s,n),Ai.subVectors(r,n),Wr.subVectors(t,n);const c=yi.dot(Wr),l=Ai.dot(Wr);if(c<=0&&l<=0)return e.copy(n);Xr.subVectors(t,s);const h=yi.dot(Xr),f=Ai.dot(Xr);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(yi,a);qr.subVectors(t,r);const d=yi.dot(qr),_=Ai.dot(qr);if(_>=0&&d<=_)return e.copy(r);const M=d*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(Ai,o);const g=h*_-d*f;if(g<=0&&f-h>=0&&d-_>=0)return hl.subVectors(r,s),o=(f-h)/(f-h+(d-_)),e.copy(s).addScaledVector(hl,o);const p=1/(g+M+u);return a=M*p,o=u*p,e.copy(n).addScaledVector(yi,a).addScaledVector(Ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class gi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),Is.subVectors(this.max,es),bi.subVectors(t.a,es),Ti.subVectors(t.b,es),wi.subVectors(t.c,es),Xn.subVectors(Ti,bi),qn.subVectors(wi,Ti),ri.subVectors(bi,wi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ri.z,ri.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ri.z,0,-ri.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ri.y,ri.x,0];return!Jr(e,bi,Ti,wi,Is)||(e=[1,0,0,0,1,0,0,0,1],!Jr(e,bi,Ti,wi,Is))?!1:(Us.crossVectors(Xn,qn),e=[Us.x,Us.y,Us.z],Jr(e,bi,Ti,wi,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Rn=[new C,new C,new C,new C,new C,new C,new C,new C],an=new C,Ls=new gi,bi=new C,Ti=new C,wi=new C,Xn=new C,qn=new C,ri=new C,es=new C,Is=new C,Us=new C,ai=new C;function Jr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ai.fromArray(i,r);const o=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),c=t.dot(ai),l=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const xe=new C,Ns=new wt;let lu=0;class en extends $n{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yc,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Cc extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pc extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}const cu=new gi,ns=new C,Qr=new C;class ji{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);const e=ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(Qr)),this.expandByPoint(ns.copy(t.center).sub(Qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let hu=0;const Ze=new ne,jr=new Me,Ri=new C,Xe=new gi,is=new gi,Te=new C;class ke extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kh(t)?Pc:Cc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return jr.lookAt(t),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];is.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Xe.min,is.min),Xe.expandByPoint(Te),Te.addVectors(Xe.max,is.max),Xe.expandByPoint(Te)):(Xe.expandByPoint(is.min),Xe.expandByPoint(is.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Te.fromBufferAttribute(o,l),c&&(Ri.fromBufferAttribute(t,l),Te.add(Ri)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new C,c[x]=new C;const l=new C,h=new C,f=new C,u=new wt,d=new wt,_=new wt,M=new C,g=new C;function p(x,y,D){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,D),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,y),_.fromBufferAttribute(r,D),h.sub(l),f.sub(l),d.sub(u),_.sub(u);const N=1/(d.x*_.y-_.x*d.y);isFinite(N)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(N),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(N),o[x].add(M),o[y].add(M),o[D].add(M),c[x].add(g),c[y].add(g),c[D].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let x=0,y=T.length;x<y;++x){const D=T[x],N=D.start,O=D.count;for(let V=N,I=N+O;V<I;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const U=new C,S=new C,A=new C,b=new C;function w(x){A.fromBufferAttribute(s,x),b.copy(A);const y=o[x];U.copy(y),U.sub(A.multiplyScalar(A.dot(y))).normalize(),S.crossVectors(b,y);const N=S.dot(c[x])<0?-1:1;a.setXYZW(x,U.x,U.y,U.z,N)}for(let x=0,y=T.length;x<y;++x){const D=T[x],N=D.start,O=D.count;for(let V=N,I=N+O;V<I;V+=3)w(t.getX(V+0)),w(t.getX(V+1)),w(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,f=new C;if(t)for(let u=0,d=t.count;u<d;u+=3){const _=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let d=0,_=0;for(let M=0,g=c.length;M<g;M++){o.isInterleavedBufferAttribute?d=c[M]*o.data.stride+o.offset:d=c[M]*h;for(let p=0;p<h;p++)u[_++]=l[d++]}return new en(u,h,f)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yc,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Be=new C;class _r{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){gr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){gr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $r=new C,du=new C,fu=new It;class Dn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$r.subVectors(n,e).cross(du.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta($r),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fu.getNormalMatrix(t),s=this.coplanarPoint($r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let pu=0;class ti extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=ms,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=lc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Dn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Dc extends ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ci;const ss=new C,Pi=new C,Di=new C,Li=new wt,rs=new wt,Lc=new ne,Fs=new C,as=new C,Os=new C,ul=new wt,ta=new wt,dl=new wt;class mu extends Me{constructor(t=new Dc){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uu(e,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new _r(n,3,0,!1)),Ci.setAttribute("uv",new _r(n,2,3,!1))}this.geometry=Ci,this.material=t,this.center=new wt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),Lc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Di.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Bs(Fs.set(-.5,-.5,0),Di,a,Pi,s,r),Bs(as.set(.5,-.5,0),Di,a,Pi,s,r),Bs(Os.set(.5,.5,0),Di,a,Pi,s,r),ul.set(0,0),ta.set(1,0),dl.set(1,1);let o=t.ray.intersectTriangle(Fs,as,Os,!1,ss);if(o===null&&(Bs(as.set(-.5,.5,0),Di,a,Pi,s,r),ta.set(0,1),o=t.ray.intersectTriangle(Fs,Os,as,!1,ss),o===null))return;const c=t.ray.origin.distanceTo(ss);c<t.near||c>t.far||e.push({distance:c,point:ss.clone(),uv:$e.getInterpolation(ss,Fs,as,Os,ul,ta,dl,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bs(i,t,e,n,s,r){Li.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(rs.x=r*Li.x-s*Li.y,rs.y=s*Li.x+r*Li.y):rs.copy(Li),i.copy(t),i.x+=rs.x,i.y+=rs.y,i.applyMatrix4(Lc)}const Cn=new C,ea=new C,zs=new C,Hs=new C;class vo{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ea.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Hs.copy(this.origin).sub(ea);const r=t.distanceTo(e)*.5,a=-this.direction.dot(zs),o=Hs.dot(this.direction),c=-Hs.dot(zs),l=Hs.lengthSq(),h=Math.abs(1-a*a);let f,u,d,_;if(h>0)if(f=a*c-o,u=a*o-c,_=r*h,f>=0)if(u>=-_)if(u<=_){const M=1/h;f*=M,u*=M,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-_?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=_?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ea).addScaledVector(zs,u),d}intersectSphere(t,e){if(t.radius<0)return null;Cn.subVectors(t.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,_=e.x-a.x,M=e.y-a.y,g=e.z-a.z,p=n.x-a.x,T=n.y-a.y,U=n.z-a.z,S=Math.abs(c),A=Math.abs(l),b=Math.abs(h);let w,x,y,D,N,O,V,I,H,Z,W,nt;if(S>=A&&S>=b?(y=c,O=f,H=_,nt=p,c>=0?(w=l,x=h,D=u,N=d,V=M,I=g,Z=T,W=U):(w=h,x=l,D=d,N=u,V=g,I=M,Z=U,W=T)):A>=b?(y=l,O=u,H=M,nt=T,l>=0?(w=h,x=c,D=d,N=f,V=g,I=_,Z=U,W=p):(w=c,x=h,D=f,N=d,V=_,I=g,Z=p,W=U)):(y=h,O=d,H=g,nt=U,h>=0?(w=c,x=l,D=f,N=u,V=_,I=M,Z=p,W=T):(w=l,x=c,D=u,N=f,V=M,I=_,Z=T,W=p)),y===0)return null;const q=w/y,$=x/y,et=1/y,Rt=D-q*O,bt=N-$*O,re=V-q*H,Wt=I-$*H,Kt=Z-q*nt,Y=W-$*nt,j=Kt*Wt-Y*re,_t=Rt*Y-bt*Kt,Lt=re*bt-Wt*Rt;if(s){if(j<0||_t<0||Lt<0)return null}else if((j<0||_t<0||Lt<0)&&(j>0||_t>0||Lt>0))return null;const mt=j+_t+Lt;if(mt===0)return null;const zt=et*(j*O+_t*H+Lt*nt);return(mt>0?zt<0:zt>0)?null:this.at(zt/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zi extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fl=new ne,oi=new vo,Gs=new ji,pl=new C,Vs=new C,ks=new C,Ws=new C,na=new C,Xs=new C,ml=new C,qs=new C;class se extends Me{constructor(t=new ke,e=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(na.fromBufferAttribute(f,t),a?Xs.addScaledVector(na,h):Xs.addScaledVector(na.sub(e),h))}e.add(Xs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(Gs.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Gs,pl)===null||oi.origin.distanceToSquared(pl)>(t.far-t.near)**2))&&(fl.copy(r).invert(),oi.copy(t.ray).applyMatrix4(fl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const g=u[_],p=a[g.materialIndex],T=Math.max(g.start,d.start),U=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=T,A=U;S<A;S+=3){const b=o.getX(S),w=o.getX(S+1),x=o.getX(S+2);s=Ys(this,p,t,n,l,h,f,b,w,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=_,p=M;g<p;g+=3){const T=o.getX(g),U=o.getX(g+1),S=o.getX(g+2);s=Ys(this,a,t,n,l,h,f,T,U,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const g=u[_],p=a[g.materialIndex],T=Math.max(g.start,d.start),U=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let S=T,A=U;S<A;S+=3){const b=S,w=S+1,x=S+2;s=Ys(this,p,t,n,l,h,f,b,w,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let g=_,p=M;g<p;g+=3){const T=g,U=g+1,S=g+2;s=Ys(this,a,t,n,l,h,f,T,U,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function gu(i,t,e,n,s,r,a,o){let c;if(t.side===He?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===di,o),c===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(qs);return l<e.near||l>e.far?null:{distance:l,point:qs.clone(),object:i}}function Ys(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Vs),i.getVertexPosition(c,ks),i.getVertexPosition(l,Ws);const h=gu(i,t,e,n,Vs,ks,Ws,ml);if(h){const f=new C;$e.getBarycoord(ml,Vs,ks,Ws,f),s&&(h.uv=$e.getInterpolatedAttribute(s,o,c,l,f,new wt)),r&&(h.uv1=$e.getInterpolatedAttribute(r,o,c,l,f,new wt)),a&&(h.normal=$e.getInterpolatedAttribute(a,o,c,l,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new C,materialIndex:0};$e.getNormal(Vs,ks,Ws,u.normal),h.face=u,h.barycoord=f}return h}class Ic extends Pe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Re,h=Re,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ii=new ne,_l=new ne,Ks=[],xl=new gi,_u=new ne,os=new se,ls=new ji;class xu extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_u)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),xl.copy(t.boundingBox).applyMatrix4(Ii),this.boundingBox.union(xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),ls.copy(t.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(n),t.ray.intersectsSphere(ls)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ii),_l.multiplyMatrices(n,Ii),os.matrixWorld=_l,os.raycast(t,Ks);for(let a=0,o=Ks.length;a<o;a++){const c=Ks[a];c.instanceId=r,c.object=this,e.push(c)}Ks.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new gl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ic(new Float32Array(s*this.count),s,this.count,ho,cn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const li=new ji,vu=new wt(.5,.5),Zs=new C;class Mo{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,a=new Dn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],_=r[8],M=r[9],g=r[10],p=r[11],T=r[12],U=r[13],S=r[14],A=r[15];if(s[0].setComponents(l-a,d-h,p-_,A-T).normalize(),s[1].setComponents(l+a,d+h,p+_,A+T).normalize(),s[2].setComponents(l+o,d+f,p+M,A+U).normalize(),s[3].setComponents(l-o,d-f,p-M,A-U).normalize(),n)s[4].setComponents(c,u,g,S).normalize(),s[5].setComponents(l-c,d-u,p-g,A-S).normalize();else if(s[4].setComponents(l-c,d-u,p-g,A-S).normalize(),e===vn)s[5].setComponents(l+c,d+u,p+g,A+S).normalize();else if(e===Ms)s[5].setComponents(c,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);const e=vu.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class So extends ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xr=new C,vr=new C,vl=new ne,cs=new vo,Js=new ji,ia=new C,Ml=new C;class Uc extends Me{constructor(t=new ke,e=new So){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)xr.fromBufferAttribute(e,s-1),vr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=xr.distanceTo(vr);t.setAttribute("lineDistance",new Fe(n,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;vl.copy(s).invert(),cs.copy(t.ray).applyMatrix4(vl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=d,g=_-1;M<g;M+=l){const p=h.getX(M),T=h.getX(M+1),U=Qs(this,t,cs,c,p,T,M);U&&e.push(U)}if(this.isLineLoop){const M=h.getX(_-1),g=h.getX(d),p=Qs(this,t,cs,c,M,g,_-1);p&&e.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=d,g=_-1;M<g;M+=l){const p=Qs(this,t,cs,c,M,M+1,M);p&&e.push(p)}if(this.isLineLoop){const M=Qs(this,t,cs,c,_-1,d,_-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qs(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(xr.fromBufferAttribute(o,s),vr.fromBufferAttribute(o,r),e.distanceSqToSegment(xr,vr,ia,Ml)>n)return;ia.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ia);if(!(l<t.near||l>t.far))return{distance:l,point:Ml.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Sl=new C,El=new C;class Mu extends Uc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Sl.fromBufferAttribute(e,s),El.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sl.distanceTo(El);t.setAttribute("lineDistance",new Fe(n,1))}else Pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nc extends Pe{constructor(t=[],e=fi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class As extends Pe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Es extends Pe{constructor(t,e,n=Sn,s,r,a,o=Re,c=Re,l,h=On,f=1){if(h!==On&&h!==ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _o(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Su extends Es{constructor(t,e=Sn,n=fi,s,r,a=Re,o=Re,c,l=On){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Fc extends Pe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class yn extends ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,d=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(f,2));function _(M,g,p,T,U,S,A,b,w,x,y){const D=S/w,N=A/x,O=S/2,V=A/2,I=b/2,H=w+1,Z=x+1;let W=0,nt=0;const q=new C;for(let $=0;$<Z;$++){const et=$*N-V;for(let Rt=0;Rt<H;Rt++){const bt=Rt*D-O;q[M]=bt*T,q[g]=et*U,q[p]=I,l.push(q.x,q.y,q.z),q[M]=0,q[g]=0,q[p]=b>0?1:-1,h.push(q.x,q.y,q.z),f.push(Rt/w),f.push(1-$/x),W+=1}}for(let $=0;$<x;$++)for(let et=0;et<w;et++){const Rt=u+et+H*$,bt=u+et+H*($+1),re=u+(et+1)+H*($+1),Wt=u+(et+1)+H*$;c.push(Rt,bt,Wt),c.push(bt,re,Wt),nt+=6}o.addGroup(d,nt,y),d+=nt,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Eo extends ke{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let _=0;const M=[],g=n/2;let p=0;T(),a===!1&&(t>0&&U(!0),e>0&&U(!1)),this.setIndex(h),this.setAttribute("position",new Fe(f,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(d,2));function T(){const S=new C,A=new C;let b=0;const w=(e-t)/n;for(let x=0;x<=r;x++){const y=[],D=x/r,N=D*(e-t)+t;for(let O=0;O<=s;O++){const V=O/s,I=V*c+o,H=Math.sin(I),Z=Math.cos(I);A.x=N*H,A.y=-D*n+g,A.z=N*Z,f.push(A.x,A.y,A.z),S.set(H,w,Z).normalize(),u.push(S.x,S.y,S.z),d.push(V,1-D),y.push(_++)}M.push(y)}for(let x=0;x<s;x++)for(let y=0;y<r;y++){const D=M[y][x],N=M[y+1][x],O=M[y+1][x+1],V=M[y][x+1];(t>0||y!==0)&&(h.push(D,N,V),b+=3),(e>0||y!==r-1)&&(h.push(N,O,V),b+=3)}l.addGroup(p,b,0),p+=b}function U(S){const A=_,b=new wt,w=new C;let x=0;const y=S===!0?t:e,D=S===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,g*D,0),u.push(0,D,0),d.push(.5,.5),_++;const N=_;for(let O=0;O<=s;O++){const I=O/s*c+o,H=Math.cos(I),Z=Math.sin(I);w.x=y*Z,w.y=g*D,w.z=y*H,f.push(w.x,w.y,w.z),u.push(0,D,0),b.x=H*.5+.5,b.y=Z*.5*D+.5,d.push(b.x,b.y),_++}for(let O=0;O<s;O++){const V=A+O,I=N+O;S===!0?h.push(I,I+1,V):h.push(I+1,I,V),x+=3}l.addGroup(p,x,S===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Eu{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new wt:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new C,s=[],r=[],a=[],o=new C,c=new ne;for(let d=0;d<=t;d++){const _=d/t;s[d]=this.getTangentAt(_,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Bt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Bt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function yo(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const yl=new C,Al=new C,sa=new yo,ra=new yo,aa=new yo;class yu extends Eu{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Al.subVectors(s[0],s[1]).add(s[0]),l=Al);const f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(yl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),_<1e-4&&(_=M),g<1e-4&&(g=M),sa.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,_,M,g),ra.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,_,M,g),aa.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,_,M,g)}else this.curveType==="catmullrom"&&(sa.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),ra.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),aa.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(sa.calc(c),ra.calc(c),aa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class ei extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,d=[],_=[],M=[],g=[];for(let p=0;p<h;p++){const T=p*u-a;for(let U=0;U<l;U++){const S=U*f-r;_.push(S,-T,0),M.push(0,0,1),g.push(U/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){const U=T+l*p,S=T+l*(p+1),A=T+1+l*(p+1),b=T+1+l*p;d.push(U,S,b),d.push(S,A,b)}this.setIndex(d),this.setAttribute("position",new Fe(_,3)),this.setAttribute("normal",new Fe(M,3)),this.setAttribute("uv",new Fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.width,t.height,t.widthSegments,t.heightSegments)}}function Ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(bl(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=Ji(i[e]);for(const s in n)t[s]=n[s]}return t}function bl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Au(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const bu={clone:Ji,merge:ze};var Tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tu,this.fragmentShader=wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new It().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ru extends An{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mi extends ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cu extends mi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Pu extends ti{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=ao,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Du extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lu extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Tl(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Tl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Tl(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Iu{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){const d=l[f],_=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Uu=new Iu;class Ao{constructor(t){this.manager=t!==void 0?t:Uu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui=new WeakMap;class Nu extends Ao{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=oa.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=Ui.get(a);f===void 0&&(f=[],Ui.set(a,f)),f.push({onLoad:e,onError:s})}return a}const o=Ss("img");function c(){h(),e&&e(this);const f=Ui.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Ui.delete(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),oa.remove(`image:${t}`);const u=Ui.get(this)||[];for(let d=0;d<u.length;d++){const _=u[d];_.onError&&_.onError(f)}Ui.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),oa.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Bc extends Ao{constructor(t){super(t)}load(t,e,n,s){const r=new Pe,a=new Nu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class bo extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Fu extends bo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const la=new ne,wl=new C,Rl=new C;class zc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(wl),Rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){la.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(la,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(la)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const js=new C,$s=new jn,mn=new C;class Hc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(js,$s,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,$s,mn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(js,$s,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,$s,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new C,Cl=new wt,Pl=new wt;class qe extends Hc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=to*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return to*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Cl,Pl),e.subVectors(Pl,Cl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ou extends zc{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}}class Gc extends bo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ou}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class To extends Hc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Bu extends zc{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vc extends bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Bu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ni=-90,Fi=1;class zu extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(Ni,Fi,t,e);s.layers=this.layers,this.add(s);const r=new qe(Ni,Fi,t,e);r.layers=this.layers,this.add(r);const a=new qe(Ni,Fi,t,e);a.layers=this.layers,this.add(a);const o=new qe(Ni,Fi,t,e);o.layers=this.layers,this.add(o);const c=new qe(Ni,Fi,t,e);c.layers=this.layers,this.add(c);const l=new qe(Ni,Fi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Hu extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Gu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Pt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Dl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Bt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Bt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Oo=class Oo{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Oo.prototype.isMatrix2=!0;let Ll=Oo;class Vu extends Mu{constructor(t=10,e=10,n=4473924,s=8947848){n=new Dt(n),s=new Dt(s);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let u=0,d=0,_=-o;u<=e;u++,_+=a){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const M=u===r?n:s;M.toArray(l,d),d+=3,M.toArray(l,d),d+=3,M.toArray(l,d),d+=3,M.toArray(l,d),d+=3}const h=new ke;h.setAttribute("position",new Fe(c,3)),h.setAttribute("color",new Fe(l,3));const f=new So({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class ku extends $n{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Il(i,t,e,n){const s=Wu(n);switch(e){case Sc:return i*t;case ho:return i*t/s.components*s.byteLength;case uo:return i*t/s.components*s.byteLength;case pi:return i*t*2/s.components*s.byteLength;case fo:return i*t*2/s.components*s.byteLength;case Ec:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case po:return i*t*4/s.components*s.byteLength;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:case wa:return Math.max(i,16)*Math.max(t,8)/4;case Aa:case Ta:return Math.max(i,8)*Math.max(t,8)/2;case Ra:case Ca:case Da:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:case ur:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ka:case Za:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qa:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case dr:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wu(i){switch(i){case Ye:case _c:return{byteLength:1,components:1};case xs:case xc:case En:return{byteLength:2,components:1};case lo:case co:return{byteLength:2,components:4};case Sn:case oo:case cn:return{byteLength:4,components:1};case vc:case Mc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);function kc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xu(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<f.length;d++){const _=f[u],M=f[d];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,_=f.length;d<_;d++){const M=f[d];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ju=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,td=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ad=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,md=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_d=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Id=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Od=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Bd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,of=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,df=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,If=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ff=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ep=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:qu,alphahash_pars_fragment:Yu,alphamap_fragment:Ku,alphamap_pars_fragment:Zu,alphatest_fragment:Ju,alphatest_pars_fragment:Qu,aomap_fragment:ju,aomap_pars_fragment:$u,batching_pars_vertex:td,batching_vertex:ed,begin_vertex:nd,beginnormal_vertex:id,bsdfs:sd,iridescence_fragment:rd,bumpmap_pars_fragment:ad,clipping_planes_fragment:od,clipping_planes_pars_fragment:ld,clipping_planes_pars_vertex:cd,clipping_planes_vertex:hd,color_fragment:ud,color_pars_fragment:dd,color_pars_vertex:fd,color_vertex:pd,common:md,cube_uv_reflection_fragment:gd,defaultnormal_vertex:_d,displacementmap_pars_vertex:xd,displacementmap_vertex:vd,emissivemap_fragment:Md,emissivemap_pars_fragment:Sd,colorspace_fragment:Ed,colorspace_pars_fragment:yd,envmap_fragment:Ad,envmap_common_pars_fragment:bd,envmap_pars_fragment:Td,envmap_pars_vertex:wd,envmap_physical_pars_fragment:Bd,envmap_vertex:Rd,fog_vertex:Cd,fog_pars_vertex:Pd,fog_fragment:Dd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Id,lightmap_pars_fragment:Ud,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Fd,lights_pars_begin:Od,lights_toon_fragment:zd,lights_toon_pars_fragment:Hd,lights_phong_fragment:Gd,lights_phong_pars_fragment:Vd,lights_physical_fragment:kd,lights_physical_pars_fragment:Wd,lights_fragment_begin:Xd,lights_fragment_maps:qd,lights_fragment_end:Yd,lightprobes_pars_fragment:Kd,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:Jd,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:jd,map_fragment:$d,map_pars_fragment:tf,map_particle_fragment:ef,map_particle_pars_fragment:nf,metalnessmap_fragment:sf,metalnessmap_pars_fragment:rf,morphinstance_vertex:af,morphcolor_vertex:of,morphnormal_vertex:lf,morphtarget_pars_vertex:cf,morphtarget_vertex:hf,normal_fragment_begin:uf,normal_fragment_maps:df,normal_pars_fragment:ff,normal_pars_vertex:pf,normal_vertex:mf,normalmap_pars_fragment:gf,clearcoat_normal_fragment_begin:_f,clearcoat_normal_fragment_maps:xf,clearcoat_pars_fragment:vf,iridescence_pars_fragment:Mf,opaque_fragment:Sf,packing:Ef,premultiplied_alpha_fragment:yf,project_vertex:Af,dithering_fragment:bf,dithering_pars_fragment:Tf,roughnessmap_fragment:wf,roughnessmap_pars_fragment:Rf,shadowmap_pars_fragment:Cf,shadowmap_pars_vertex:Pf,shadowmap_vertex:Df,shadowmask_pars_fragment:Lf,skinbase_vertex:If,skinning_pars_vertex:Uf,skinning_vertex:Nf,skinnormal_vertex:Ff,specularmap_fragment:Of,specularmap_pars_fragment:Bf,tonemapping_fragment:zf,tonemapping_pars_fragment:Hf,transmission_fragment:Gf,transmission_pars_fragment:Vf,uv_pars_fragment:kf,uv_pars_vertex:Wf,uv_vertex:Xf,worldpos_vertex:qf,background_vert:Yf,background_frag:Kf,backgroundCube_vert:Zf,backgroundCube_frag:Jf,cube_vert:Qf,cube_frag:jf,depth_vert:$f,depth_frag:tp,distance_vert:ep,distance_frag:np,equirect_vert:ip,equirect_frag:sp,linedashed_vert:rp,linedashed_frag:ap,meshbasic_vert:op,meshbasic_frag:lp,meshlambert_vert:cp,meshlambert_frag:hp,meshmatcap_vert:up,meshmatcap_frag:dp,meshnormal_vert:fp,meshnormal_frag:pp,meshphong_vert:mp,meshphong_frag:gp,meshphysical_vert:_p,meshphysical_frag:xp,meshtoon_vert:vp,meshtoon_frag:Mp,points_vert:Sp,points_frag:Ep,shadow_vert:yp,shadow_frag:Ap,sprite_vert:bp,sprite_frag:Tp},ht={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},_n={basic:{uniforms:ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:ze([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:ze([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:ze([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:ze([ht.points,ht.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:ze([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:ze([ht.common,ht.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:ze([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:ze([ht.sprite,ht.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:ze([ht.common,ht.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:ze([ht.lights,ht.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};_n.physical={uniforms:ze([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const tr={r:0,b:0,g:0},wp=new ne,Wc=new It;Wc.set(-1,0,0,0,1,0,0,0,1);function Rp(i,t,e,n,s,r){const a=new Dt(0);let o=s===!0?0:1,c,l,h=null,f=0,u=null;function d(T){let U=T.isScene===!0?T.background:null;if(U&&U.isTexture){const S=T.backgroundBlurriness>0;U=t.get(U,S)}return U}function _(T){let U=!1;const S=d(T);S===null?g(a,o):S&&S.isColor&&(g(S,1),U=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||U)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(T,U){const S=d(U);S&&(S.isCubeTexture||S.mapping===Tr)?(l===void 0&&(l=new se(new yn(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Ji(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(wp.makeRotationFromEuler(U.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Wc),l.material.toneMapped=kt.getTransfer(S.colorSpace)!==jt,(h!==S||f!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new se(new ei(2,2),new An({name:"BackgroundMaterial",uniforms:Ji(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.toneMapped=kt.getTransfer(S.colorSpace)!==jt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function g(T,U){T.getRGB(tr,Oc(i)),e.buffers.color.setClear(tr.r,tr.g,tr.b,U,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,U=1){a.set(T),o=U,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(a,o)},render:_,addToRenderList:M,dispose:p}}function Cp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(N,O,V,I,H){let Z=!1;const W=f(N,I,V,O);r!==W&&(r=W,l(r.object)),Z=d(N,I,V,H),Z&&_(N,I,V,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(N,O,V,I),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,O,V,I){const H=I.wireframe===!0;let Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);const W=N.isInstancedMesh===!0?N.id:0;let nt=Z[W];nt===void 0&&(nt={},Z[W]=nt);let q=nt[V.id];q===void 0&&(q={},nt[V.id]=q);let $=q[H];return $===void 0&&($=u(c()),q[H]=$),$}function u(N){const O=[],V=[],I=[];for(let H=0;H<e;H++)O[H]=0,V[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:I,object:N,attributes:{},index:null}}function d(N,O,V,I){const H=r.attributes,Z=O.attributes;let W=0;const nt=V.getAttributes();for(const q in nt)if(nt[q].location>=0){const et=H[q];let Rt=Z[q];if(Rt===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Rt=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Rt=N.instanceColor)),et===void 0||et.attribute!==Rt||Rt&&et.data!==Rt.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function _(N,O,V,I){const H={},Z=O.attributes;let W=0;const nt=V.getAttributes();for(const q in nt)if(nt[q].location>=0){let et=Z[q];et===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(et=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(et=N.instanceColor));const Rt={};Rt.attribute=et,et&&et.data&&(Rt.data=et.data),H[q]=Rt,W++}r.attributes=H,r.attributesNum=W,r.index=I}function M(){const N=r.newAttributes;for(let O=0,V=N.length;O<V;O++)N[O]=0}function g(N){p(N,0)}function p(N,O){const V=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;V[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),H[N]!==O&&(i.vertexAttribDivisor(N,O),H[N]=O)}function T(){const N=r.newAttributes,O=r.enabledAttributes;for(let V=0,I=O.length;V<I;V++)O[V]!==N[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function U(N,O,V,I,H,Z,W){W===!0?i.vertexAttribIPointer(N,O,V,H,Z):i.vertexAttribPointer(N,O,V,I,H,Z)}function S(N,O,V,I){M();const H=I.attributes,Z=V.getAttributes(),W=O.defaultAttributeValues;for(const nt in Z){const q=Z[nt];if(q.location>=0){let $=H[nt];if($===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&($=N.instanceColor)),$!==void 0){const et=$.normalized,Rt=$.itemSize,bt=t.get($);if(bt===void 0)continue;const re=bt.buffer,Wt=bt.type,Kt=bt.bytesPerElement,Y=Wt===i.INT||Wt===i.UNSIGNED_INT||$.gpuType===oo;if($.isInterleavedBufferAttribute){const j=$.data,_t=j.stride,Lt=$.offset;if(j.isInstancedInterleavedBuffer){for(let mt=0;mt<q.locationSize;mt++)p(q.location+mt,j.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let mt=0;mt<q.locationSize;mt++)g(q.location+mt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let mt=0;mt<q.locationSize;mt++)U(q.location+mt,Rt/q.locationSize,Wt,et,_t*Kt,(Lt+Rt/q.locationSize*mt)*Kt,Y)}else{if($.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)p(q.location+j,$.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let j=0;j<q.locationSize;j++)g(q.location+j);i.bindBuffer(i.ARRAY_BUFFER,re);for(let j=0;j<q.locationSize;j++)U(q.location+j,Rt/q.locationSize,Wt,et,Rt*Kt,Rt/q.locationSize*j*Kt,Y)}}else if(W!==void 0){const et=W[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(q.location,et);break;case 3:i.vertexAttrib3fv(q.location,et);break;case 4:i.vertexAttrib4fv(q.location,et);break;default:i.vertexAttrib1fv(q.location,et)}}}}T()}function A(){y();for(const N in n){const O=n[N];for(const V in O){const I=O[V];for(const H in I){const Z=I[H];for(const W in Z)h(Z[W].object),delete Z[W];delete I[H]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;const O=n[N.id];for(const V in O){const I=O[V];for(const H in I){const Z=I[H];for(const W in Z)h(Z[W].object),delete Z[W];delete I[H]}}delete n[N.id]}function w(N){for(const O in n){const V=n[O];for(const I in V){const H=V[I];if(H[N.id]===void 0)continue;const Z=H[N.id];for(const W in Z)h(Z[W].object),delete Z[W];delete H[N.id]}}}function x(N){for(const O in n){const V=n[O],I=N.isInstancedMesh===!0?N.id:0,H=V[I];if(H!==void 0){for(const Z in H){const W=H[Z];for(const nt in W)h(W[nt].object),delete W[nt];delete H[Z]}delete V[I],Object.keys(V).length===0&&delete n[O]}}}function y(){D(),a=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:g,disableUnusedAttributes:T}}function Pp(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Dp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==hn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ye&&w!==cn&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Pt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:U,maxFragmentUniforms:S,maxSamples:A,samples:b}}function Lp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Dn,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const _=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||_===null||_.length===0||r&&!g)r?h(null):l();else{const T=r?0:n,U=T*4;let S=p.clippingState||null;c.value=S,S=h(_,u,U,d);for(let A=0;A!==U;++A)S[A]=e[A];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,_){const M=f!==null?f.length:0;let g=null;if(M!==0){if(g=c.value,_!==!0||g===null){const p=d+M*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let U=0,S=d;U!==M;++U,S+=4)a.copy(f[U]).applyMatrix4(T,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}const Vi=4,Ip=6,Up=20,Np=256,hs=new To,Ul=new Dt;let ca=null,ha=0,ua=0,da=!1;const Fp=new C,ci=new C;class eo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Fp}=r;ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,ha,ua),this._renderer.xr.enabled=da,t.scissorTest=!1,Oi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:En,format:hn,colorSpace:pr,depthBuffer:!1},s=Nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Op(r)),this._blurMaterial=zp(r,t,e),this._ggxMaterial=Bp(r,t,e)}return s}_compileMaterial(t){const e=new se(new ke,t);this._renderer.compile(e,hs)}_sceneToCubeUV(t,e,n,s,r){const c=new qe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Ul),f.toneMapping=Mn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new se(new yn,new Zi({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let p=!1;const T=t.background;T?T.isColor&&(g.color.copy(T),t.background=null,p=!0):(g.color.copy(Ul),p=!0);for(let U=0;U<6;U++){const S=U%3;S===0?(c.up.set(0,l[U],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[U],r.y,r.z)):S===1?(c.up.set(0,0,l[U]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[U],r.z)):(c.up.set(0,l[U],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[U]));const A=this._cubeSize;Oi(s,S*A,U>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(M,c),f.render(t,c)}f.toneMapping=d,f.autoClear=u,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===fi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Oi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,hs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,d=f*u,{_lodMax:_}=this,M=this._sizeLods[n],g=3*M*(n>_-Vi?n-_+Vi:0),p=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=_-e,Oi(r,g,p,3*M,2*M),s.setRenderTarget(r),s.render(o,hs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Oi(t,g,p,3*M,2*M),s.setRenderTarget(t),s.render(o,hs)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-Vi?s-this._lodMax+Vi:0),u=4*(this._cubeSize-h);Oi(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(c,hs)}}function Op(i){const t=[],e=[];let n=i;const s=i-Vi+1+Ip;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,d=3,_=new Float32Array(d*u*f),M=new Float32Array(d*u*f);for(let p=0;p<f;p++){const T=p%3*2/3-1,U=p>2?0:-1,S=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];_.set(S,d*u*p);for(let A=0;A<u;A++){const b=h[A*2]*2-1,w=h[A*2+1]*2-1;p===0?ci.set(1,w,b):p===1?ci.set(-b,1,-w):p===2?ci.set(-b,w,1):p===3?ci.set(-1,w,-b):p===4?ci.set(-b,-1,w):ci.set(b,w,-1),ci.toArray(M,(p*u+A)*d)}}const g=new ke;g.setAttribute("position",new en(_,d)),g.setAttribute("outputDirection",new en(M,d)),e.push(new se(g,null)),n>Vi&&n--}return{lodMeshes:e,sizeLods:t}}function Nl(i,t,e){const n=new dn(i,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bp(i,t,e){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Np,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function zp(i,t,e){return new An({name:"SphericalGaussianBlur",defines:{SAMPLES:Up,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Fl(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ol(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function wr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Xc extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Nc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yn(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Nn});r.uniforms.tEquirect.value=e;const a=new se(s,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=Ne),new zu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function Hp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Dr||d===Lr)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const M=new Xc(_.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",l),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,_=d===Dr||d===Lr,M=d===fi||d===Yi;if(_||M){let g=e.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new eo(i)),g=_?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const T=u.image;return _&&T&&T.height>0||M&&T&&c(T)?(n===null&&(n=new eo(i)),g=_?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Dr?u.mapping=fi:d===Lr&&(u.mapping=Yi),u}function c(u){let d=0;const _=6;for(let M=0;M<_;M++)u[M]!==void 0&&d++;return d===_}function l(u){const d=u.target;d.removeEventListener("dispose",l);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Gp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Wi("WebGLRenderer: "+n+" extension not supported."),s}}}function Vp(i,t,e,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function l(f){const u=[],d=f.index,_=f.attributes.position;let M=0;if(_===void 0)return;if(d!==null){const T=d.array;M=d.version;for(let U=0,S=T.length;U<S;U+=3){const A=T[U+0],b=T[U+1],w=T[U+2];u.push(A,b,b,w,w,A)}}else{const T=_.array;M=_.version;for(let U=0,S=T.length/3-1;U<S;U+=3){const A=U+0,b=U+1,w=U+2;u.push(A,b,b,w,w,A)}}const g=new(_.count>=65535?Pc:Cc)(u,1);g.version=M;const p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function kp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function l(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let M=0;for(let g=0;g<d;g++)M+=u[g];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Wp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xp(i,t,e){const n=new WeakMap,s=new pe;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let D=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var d=D;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],U=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),g===!0&&(S=3);let A=o.attributes.position.count*S,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*b*4*f),x=new bc(w,A,b,f);x.type=cn,x.needsUpdate=!0;const y=S*4;for(let N=0;N<f;N++){const O=p[N],V=T[N],I=U[N],H=A*b*4*N;for(let Z=0;Z<O.count;Z++){const W=Z*y;_===!0&&(s.fromBufferAttribute(O,Z),w[H+W+0]=s.x,w[H+W+1]=s.y,w[H+W+2]=s.z,w[H+W+3]=0),M===!0&&(s.fromBufferAttribute(V,Z),w[H+W+4]=s.x,w[H+W+5]=s.y,w[H+W+6]=s.z,w[H+W+7]=0),g===!0&&(s.fromBufferAttribute(I,Z),w[H+W+8]=s.x,w[H+W+9]=s.y,w[H+W+10]=s.z,w[H+W+11]=I.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new wt(A,b)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let g=0;g<l.length;g++)_+=l[g];const M=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function qp(i,t,e,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Yp={[cc]:"LINEAR_TONE_MAPPING",[hc]:"REINHARD_TONE_MAPPING",[uc]:"CINEON_TONE_MAPPING",[dc]:"ACES_FILMIC_TONE_MAPPING",[pc]:"AGX_TONE_MAPPING",[mc]:"NEUTRAL_TONE_MAPPING",[fc]:"CUSTOM_TONE_MAPPING"};function Kp(i,t,e,n,s,r){const a=new dn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new ke;l.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Fe([0,2,0,0,2,0],2));const h=new Ru({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new se(l,h),u=new To(-1,1,1,-1,0,1);let d=null,_=null,M=!1,g,p=null,T=[],U=!1;this.setSize=function(S,A){a.setSize(S,A),o!==null&&o.setSize(S,A),c!==null&&c.setSize(S,A);for(let b=0;b<T.length;b++){const w=T[b];w.setSize&&w.setSize(S,A)}},this.setEffects=function(S){T=S,U=T.length>0&&T[0].isRenderPass===!0;const A=a.width,b=a.height;T.length>0&&o===null&&(o=new dn(A,b,{type:En,depthBuffer:!1,stencilBuffer:!1}),c=new dn(A,b,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<T.length;w++){const x=T[w];x.setSize&&x.setSize(A,b)}},this.begin=function(S,A){if(M||S.toneMapping===Mn&&T.length===0)return!1;if(p=A,A!==null){const b=A.width,w=A.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return U===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=Mn,!0},this.hasRenderPass=function(){return U},this.end=function(S,A){S.toneMapping=g,M=!0;let b=a,w=o;for(let x=0;x<T.length;x++){const y=T[x];y.enabled!==!1&&(y.render(S,w,b,A),y.needsSwap!==!1&&(b=w,w=w===o?c:o))}if(d!==S.outputColorSpace||_!==S.toneMapping){d=S.outputColorSpace,_=S.toneMapping,h.defines={},kt.getTransfer(d)===jt&&(h.defines.SRGB_TRANSFER="");const x=Yp[_];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(p),S.render(f,u),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const qc=new Pe,no=new Es(1,1),Yc=new bc,Kc=new tu,Zc=new Nc,Bl=[],zl=[],Hl=new Float32Array(16),Gl=new Float32Array(9),Vl=new Float32Array(4);function $i(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Bl[s];if(r===void 0&&(r=new Float32Array(s),Bl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rr(i,t){let e=zl[t];e===void 0&&(e=new Int32Array(t),zl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function $p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(ye(e,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),Ae(e,n)}}function tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(ye(e,n))return;Gl.set(n),i.uniformMatrix3fv(this.addr,!1,Gl),Ae(e,n)}}function em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(ye(e,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),Ae(e,n)}}function nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function am(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(no.compareFunction=e.isReversedDepthBuffer()?go:mo,r=no):r=qc,e.setTexture2D(t||r,s)}function um(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kc,s)}function dm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zc,s)}function fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yc,s)}function pm(i){switch(i){case 5126:return Zp;case 35664:return Jp;case 35665:return Qp;case 35666:return jp;case 35674:return $p;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}function mm(i,t){i.uniform1fv(this.addr,t)}function gm(i,t){const e=$i(t,this.size,2);i.uniform2fv(this.addr,e)}function _m(i,t){const e=$i(t,this.size,3);i.uniform3fv(this.addr,e)}function xm(i,t){const e=$i(t,this.size,4);i.uniform4fv(this.addr,e)}function vm(i,t){const e=$i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mm(i,t){const e=$i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sm(i,t){const e=$i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Em(i,t){i.uniform1iv(this.addr,t)}function ym(i,t){i.uniform2iv(this.addr,t)}function Am(i,t){i.uniform3iv(this.addr,t)}function bm(i,t){i.uniform4iv(this.addr,t)}function Tm(i,t){i.uniform1uiv(this.addr,t)}function wm(i,t){i.uniform2uiv(this.addr,t)}function Rm(i,t){i.uniform3uiv(this.addr,t)}function Cm(i,t){i.uniform4uiv(this.addr,t)}function Pm(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=no:a=qc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Dm(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Kc,r[a])}function Lm(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zc,r[a])}function Im(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yc,r[a])}function Um(i){switch(i){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return xm;case 35674:return vm;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return Em;case 35667:case 35671:return ym;case 35668:case 35672:return Am;case 35669:case 35673:return bm;case 5125:return Tm;case 36294:return wm;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Im}}class Nm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pm(e.type)}}class Fm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Um(e.type)}}class Om{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function kl(i,t){i.seq.push(t),i.map[t.id]=t}function Bm(i,t,e){const n=i.name,s=n.length;for(fa.lastIndex=0;;){const r=fa.exec(n),a=fa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){kl(e,l===void 0?new Nm(o,i,t):new Fm(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Om(o),kl(e,f)),e=f}}}class cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Bm(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Wl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const zm=37297;let Hm=0;function Gm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Xl=new It;function Vm(i){kt._getMatrix(Xl,kt.workingColorSpace,i);const t=`mat3( ${Xl.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(i)){case mr:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ql(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Gm(i.getShaderSource(t),o)}else return r}function km(i,t){const e=Vm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Wm={[cc]:"Linear",[hc]:"Reinhard",[uc]:"Cineon",[dc]:"ACESFilmic",[pc]:"AgX",[mc]:"Neutral",[fc]:"Custom"};function Xm(i,t){const e=Wm[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const er=new C;function qm(){kt.getLuminanceCoefficients(er);const i=er.x.toFixed(4),t=er.y.toFixed(4),e=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function Km(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ps(i){return i!==""}function Yl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(i){return i.replace(Jm,jm)}const Qm=new Map;function jm(i,t){let e=Ot[t];if(e===void 0){const n=Qm.get(t);if(n!==void 0)e=Ot[n],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return io(e)}const $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(i){return i.replace($m,tg)}function tg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const eg={[ir]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function ng(i){return eg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ig={[fi]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE_UV"};function sg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ig[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const rg={[Yi]:"ENVMAP_MODE_REFRACTION"};function ag(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const og={[ao]:"ENVMAP_BLENDING_MULTIPLY",[Dh]:"ENVMAP_BLENDING_MIX",[Lh]:"ENVMAP_BLENDING_ADD"};function lg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":og[i.combine]||"ENVMAP_BLENDING_NONE"}function cg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=ng(e),l=sg(e),h=ag(e),f=lg(e),u=cg(e),d=Ym(e),_=Km(r),M=s.createProgram();let g,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ps).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ps).join(`
`),p.length>0&&(p+=`
`)):(g=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),p=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Mn?Xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,km("linearToOutputTexel",e.outputColorSpace),qm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),a=io(a),a=Yl(a,e),a=Kl(a,e),o=io(o),o=Yl(o,e),o=Kl(o,e),a=Zl(a),o=Zl(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const U=T+g+a,S=T+p+o,A=Wl(s,s.VERTEX_SHADER,U),b=Wl(s,s.FRAGMENT_SHADER,S);s.attachShader(M,A),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(N){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(M)||"",V=s.getShaderInfoLog(A)||"",I=s.getShaderInfoLog(b)||"",H=O.trim(),Z=V.trim(),W=I.trim();let nt=!0,q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,A,b);else{const $=ql(s,A,"vertex"),et=ql(s,b,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+$+`
`+et)}else H!==""?Pt("WebGLProgram: Program Info Log:",H):(Z===""||W==="")&&(q=!1);q&&(N.diagnostics={runnable:nt,programLog:H,vertexShader:{log:Z,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(A),s.deleteShader(b),x=new cr(s,M),y=Zm(s,M)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(M,zm)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=b,this}let ug=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fg(t),e.set(t,n)),n}}class fg{constructor(t){this.id=ug++,this.code=t,this.usedTimes=0}}function pg(i){return i===pi||i===ur||i===dr}function mg(i,t,e,n,s,r){const a=new Tc,o=new dg,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function M(x,y,D,N,O,V){const I=N.fog,H=O.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||Z,W),q=nt&&nt.mapping===Tr?nt.image.height:null,$=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Pt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Rt=et!==void 0?et.length:0;let bt=0;H.morphAttributes.position!==void 0&&(bt=1),H.morphAttributes.normal!==void 0&&(bt=2),H.morphAttributes.color!==void 0&&(bt=3);let re,Wt,Kt,Y;if($){const oe=_n[$];re=oe.vertexShader,Wt=oe.fragmentShader}else{re=x.vertexShader,Wt=x.fragmentShader;const oe=o.getVertexShaderStage(x),Zt=o.getFragmentShaderStage(x);o.update(x,oe,Zt),Kt=oe.id,Y=Zt.id}const j=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Lt=O.isInstancedMesh===!0,mt=O.isBatchedMesh===!0,zt=!!x.map,Se=!!x.matcap,Ht=!!nt,Yt=!!x.aoMap,ae=!!x.lightMap,Vt=!!x.bumpMap&&x.wireframe===!1,he=!!x.normalMap,be=!!x.displacementMap,Ge=!!x.emissiveMap,fe=!!x.metalnessMap,ge=!!x.roughnessMap,L=x.anisotropy>0,De=x.clearcoat>0,Qt=x.dispersion>0,E=x.retroreflectivity>0,m=x.iridescence>0,F=x.sheen>0,G=x.transmission>0,X=L&&!!x.anisotropyMap,it=De&&!!x.clearcoatMap,st=De&&!!x.clearcoatNormalMap,K=De&&!!x.clearcoatRoughnessMap,Q=m&&!!x.iridescenceMap,rt=m&&!!x.iridescenceThicknessMap,yt=F&&!!x.sheenColorMap,ct=F&&!!x.sheenRoughnessMap,at=!!x.specularMap,At=!!x.specularColorMap,Ct=!!x.specularIntensityMap,Ut=G&&!!x.transmissionMap,P=G&&!!x.thicknessMap,ot=!!x.gradientMap,J=!!x.alphaMap,lt=x.alphaTest>0,ft=!!x.alphaHash,tt=!!x.extensions;let Tt=Mn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Tt=i.toneMapping);const St={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:re,fragmentShader:Wt,defines:x.defines,customVertexShaderID:Kt,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:mt,batchingColor:mt&&O._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&O.instanceColor!==null,instancingMorph:Lt&&O.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:Se,envMap:Ht,envMapMode:Ht&&nt.mapping,envMapCubeUVHeight:q,aoMap:Yt,lightMap:ae,bumpMap:Vt,normalMap:he,displacementMap:be,emissiveMap:Ge,normalMapObjectSpace:he&&x.normalMapType===Nh,normalMapTangentSpace:he&&x.normalMapType===fr,packedNormalMap:he&&x.normalMapType===fr&&pg(x.normalMap.format),metalnessMap:fe,roughnessMap:ge,anisotropy:L,anisotropyMap:X,clearcoat:De,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:K,dispersion:Qt,retroreflection:E,iridescence:m,iridescenceMap:Q,iridescenceThicknessMap:rt,sheen:F,sheenColorMap:yt,sheenRoughnessMap:ct,specularMap:at,specularColorMap:At,specularIntensityMap:Ct,transmission:G,transmissionMap:Ut,thicknessMap:P,gradientMap:ot,opaque:x.transparent===!1&&x.blending===ms&&x.alphaToCoverage===!1,alphaMap:J,alphaTest:lt,alphaHash:ft,combine:x.combine,mapUv:zt&&_(x.map.channel),aoMapUv:Yt&&_(x.aoMap.channel),lightMapUv:ae&&_(x.lightMap.channel),bumpMapUv:Vt&&_(x.bumpMap.channel),normalMapUv:he&&_(x.normalMap.channel),displacementMapUv:be&&_(x.displacementMap.channel),emissiveMapUv:Ge&&_(x.emissiveMap.channel),metalnessMapUv:fe&&_(x.metalnessMap.channel),roughnessMapUv:ge&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:it&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ct&&_(x.sheenRoughnessMap.channel),specularMapUv:at&&_(x.specularMap.channel),specularColorMapUv:At&&_(x.specularColorMap.channel),specularIntensityMapUv:Ct&&_(x.specularIntensityMap.channel),transmissionMapUv:Ut&&_(x.transmissionMap.channel),thicknessMapUv:P&&_(x.thicknessMap.channel),alphaMapUv:J&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(he||L),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(zt||J),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&he===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_t,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:bt,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&kt.getTransfer(x.map.colorSpace)===jt,decodeVideoTextureEmissive:Ge&&x.emissiveMap.isVideoTexture===!0&&kt.getTransfer(x.emissiveMap.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===In,flipSided:x.side===He,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&x.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function g(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)y.push(D),y.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(p(y,x),T(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function T(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function U(x){const y=d[x.type];let D;if(y){const N=_n[y];D=bu.clone(N.uniforms)}else D=x.uniforms;return D}function S(x,y){let D=h.get(y);return D!==void 0?++D.usedTimes:(D=new hg(i,y,x,s),l.push(D),h.set(y,D)),D}function A(x){if(--x.usedTimes===0){const y=l.indexOf(x);l[y]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function w(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:U,acquireProgram:S,releaseProgram:A,releaseShaderCache:b,programs:l,dispose:w}}function gg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ql(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,M,g,p){let T=i[t];return T===void 0?(T={id:u.id,object:u,geometry:d,material:_,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:p},i[t]=T):(T.id=u.id,T.object=u,T.geometry=d,T.material=_,T.materialVariant=a(u),T.groupOrder=M,T.renderOrder=u.renderOrder,T.z=g,T.group=p),t++,T}function c(u,d,_,M,g,p,T){T.reversedDepth===!0&&(g=-g);const U=o(u,d,_,M,g,p);_.transmission>0?n.push(U):_.transparent===!0?s.push(U):e.push(U)}function l(u,d,_,M,g,p){const T=o(u,d,_,M,g,p);_.transmission>0?n.unshift(T):_.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,d){e.length>1&&e.sort(u||_g),n.length>1&&n.sort(d||Ql),s.length>1&&s.sort(d||Ql)}function f(){for(let u=t,d=i.length;u<d;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function xg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new jl,i.set(n,[a])):s>=r.length?(a=new jl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Dt};break;case"SpotLight":e={position:new C,direction:new C,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Sg=0;function Eg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yg(i){const t=new vg,e=Mg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new ne,a=new ne;function o(l){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,_=0,M=0,g=0,p=0,T=0,U=0,S=0,A=0,b=0,w=0,x=0,y=0,D=0;l.sort(Eg);for(let O=0,V=l.length;O<V;O++){const I=l[O],H=I.color,Z=I.intensity,W=I.distance;let nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===pi?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=H.r*Z,f+=H.g*Z,u+=H.b*Z;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],Z);D++}else if(I.isSunLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,et=e.get(I);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[_]=et,n.sunShadowMap[_]=nt;const Rt=$.getViewportCount();for(let bt=0;bt<Rt;bt++)n.sunShadowMatrix[M+bt]=$.getMatrix(bt),n.sunShadowCascade[M+bt]=$._cascadeData[bt];M+=Rt,_++}n.sun[d]=q,d++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,et=e.get(I);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,n.directionalShadow[g]=et,n.directionalShadowMap[g]=nt,n.directionalShadowMatrix[g]=I.shadow.matrix,A++}n.directional[g]=q,g++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(H).multiplyScalar(Z),q.distance=W,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[T]=q;const $=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,$.updateMatrices(I),I.castShadow&&y++),n.spotLightMatrix[T]=$.matrix,I.castShadow){const et=e.get(I);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,n.spotShadow[T]=et,n.spotShadowMap[T]=nt,w++}T++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(H).multiplyScalar(Z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[U]=q,U++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const $=I.shadow,et=e.get(I);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=I.shadow.matrix,b++}n.point[p]=q,p++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(Z),q.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[S]=q,S++}}U>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const N=n.hash;(N.sunLength!==d||N.directionalLength!==g||N.pointLength!==p||N.spotLength!==T||N.rectAreaLength!==U||N.hemiLength!==S||N.numSunShadows!==_||N.numDirectionalShadows!==A||N.numPointShadows!==b||N.numSpotShadows!==w||N.numSpotMaps!==x||N.numLightProbes!==D)&&(n.sun.length=d,n.directional.length=g,n.spot.length=T,n.rectArea.length=U,n.point.length=p,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-y,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=D,N.sunLength=d,N.directionalLength=g,N.pointLength=p,N.spotLength=T,N.rectAreaLength=U,N.hemiLength=S,N.numSunShadows=_,N.numDirectionalShadows=A,N.numPointShadows=b,N.numSpotShadows=w,N.numSpotMaps=x,N.numLightProbes=D,n.version=Sg++)}function c(l,h){let f=0,u=0,d=0,_=0,M=0,g=0;const p=h.matrixWorldInverse;for(let T=0,U=l.length;T<U;T++){const S=l[T];if(S.isSunLight){const A=n.sun[f];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),f++}else if(S.isDirectionalLight){const A=n.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(S.isSpotLight){const A=n.spot[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const A=n.rectArea[M];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const A=n.hemi[g];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function $l(i){const t=new yg(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Ag(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new $l(i),t.set(s,[o])):r>=a.length?(o=new $l(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wg=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Rg=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],tc=new ne,us=new C,pa=new C;function Cg(i,t,e){let n=new Mo;const s=new wt,r=new wt,a=new pe,o=new Du,c=new Lu,l={},h=e.maxTextureSize,f={[di]:He,[He]:di,[In]:In},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:bg,fragmentShader:Tg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const _=new ke;_.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new se(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let p=this.type;this.render=function(b,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===ac&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);const y=i.getRenderTarget(),D=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Nn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=p!==this.type;V&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=b.length;I<H;I++){const Z=b[I],W=Z.shadow;if(W===void 0){Pt("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const nt=W.getFrameExtents();s.multiply(nt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,W.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||V===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===fs){if(Z.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new dn(s.x,s.y,{format:pi,type:En,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new Es(s.x,s.y,cn),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=On,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Re,W.map.depthTexture.magFilter=Re}else Z.isPointLight?(W.map=new Xc(s.x),W.map.depthTexture=new Su(s.x,Sn)):(W.map=new dn(s.x,s.y),W.map.depthTexture=new Es(s.x,s.y,Sn)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=On,this.type===ir?(W.map.depthTexture.compareFunction=q?go:mo,W.map.depthTexture.minFilter=Ne,W.map.depthTexture.magFilter=Ne):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Re,W.map.depthTexture.magFilter=Re);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const $=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Z.isPointLight!==!0&&W.updateMatrices(Z,x);for(let et=0;et<$;et++){const Rt=W.getCamera(et);if(Z.isPointLight){const bt=W.camera,re=W.matrix,Wt=Z.distance||bt.far;Wt!==bt.far&&(bt.far=Wt,bt.updateProjectionMatrix()),us.setFromMatrixPosition(Z.matrixWorld),bt.position.copy(us),pa.copy(bt.position),pa.add(wg[et]),bt.up.copy(Rg[et]),bt.lookAt(pa),bt.updateMatrixWorld(),re.makeTranslation(-us.x,-us.y,-us.z),tc.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(tc,bt.coordinateSystem,bt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,et),i.clear();else{et===0&&(i.setRenderTarget(W.map),i.clear());const bt=W.getViewport(et);a.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),O.viewport(a)}n=W.getFrustum(et),S(w,x,Rt,Z,this.type)}W.isPointLightShadow!==!0&&this.type===fs&&T(W,x),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,D,N)};function T(b,w){const x=t.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new dn(s.x,s.y,{format:pi,type:En}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,x,u,M,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,x,d,M,null)}function U(b,w,x,y){let D=null;const N=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)D=N;else if(D=x.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=D.uuid,V=w.uuid;let I=l[O];I===void 0&&(I={},l[O]=I);let H=I[V];H===void 0&&(H=D.clone(),I[V]=H,w.addEventListener("dispose",A)),D=H}if(D.visible=w.visible,D.wireframe=w.wireframe,y===fs?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:f[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const O=i.properties.get(D);O.light=x}return D}function S(b,w,x,y,D){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===fs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const V=t.update(b),I=b.material;if(Array.isArray(I)){const H=V.groups;for(let Z=0,W=H.length;Z<W;Z++){const nt=H[Z],q=I[nt.materialIndex];if(q&&q.visible){const $=U(b,q,y,D);b.onBeforeShadow(i,b,w,x,V,$,nt),i.renderBufferDirect(x,null,V,$,b,nt),b.onAfterShadow(i,b,w,x,V,$,nt)}}}else if(I.visible){const H=U(b,I,y,D);b.onBeforeShadow(i,b,w,x,V,H,null),i.renderBufferDirect(x,null,V,H,b,null),b.onAfterShadow(i,b,w,x,V,H,null)}}const O=b.children;for(let V=0,I=O.length;V<I;V++)S(O[V],w,x,y,D)}function A(b){b.target.removeEventListener("dispose",A);for(const x in l){const y=l[x],D=b.target.uuid;D in y&&(y[D].dispose(),delete y[D])}}}function Pg(i,t){function e(){let P=!1;const ot=new pe;let J=null;const lt=new pe(0,0,0,0);return{setMask:function(ft){J!==ft&&!P&&(i.colorMask(ft,ft,ft,ft),J=ft)},setLocked:function(ft){P=ft},setClear:function(ft,tt,Tt,St,oe){oe===!0&&(ft*=St,tt*=St,Tt*=St),ot.set(ft,tt,Tt,St),lt.equals(ot)===!1&&(i.clearColor(ft,tt,Tt,St),lt.copy(ot))},reset:function(){P=!1,J=null,lt.set(-1,0,0,0)}}}function n(){let P=!1,ot=!1,J=null,lt=null,ft=null;return{setReversed:function(tt){if(ot!==tt){const Tt=t.get("EXT_clip_control");tt?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),ot=tt;const St=ft;ft=null,this.setClear(St)}},getReversed:function(){return ot},setTest:function(tt){tt?j(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(tt){J!==tt&&!P&&(i.depthMask(tt),J=tt)},setFunc:function(tt){if(ot&&(tt=qh[tt]),lt!==tt){switch(tt){case ga:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=tt}},setLocked:function(tt){P=tt},setClear:function(tt){ft!==tt&&(ft=tt,ot&&(tt=1-tt),i.clearDepth(tt))},reset:function(){P=!1,J=null,lt=null,ft=null,ot=!1}}}function s(){let P=!1,ot=null,J=null,lt=null,ft=null,tt=null,Tt=null,St=null,oe=null;return{setTest:function(Zt){P||(Zt?j(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Zt){ot!==Zt&&!P&&(i.stencilMask(Zt),ot=Zt)},setFunc:function(Zt,nn,fn){(J!==Zt||lt!==nn||ft!==fn)&&(i.stencilFunc(Zt,nn,fn),J=Zt,lt=nn,ft=fn)},setOp:function(Zt,nn,fn){(tt!==Zt||Tt!==nn||St!==fn)&&(i.stencilOp(Zt,nn,fn),tt=Zt,Tt=nn,St=fn)},setLocked:function(Zt){P=Zt},setClear:function(Zt){oe!==Zt&&(i.clearStencil(Zt),oe=Zt)},reset:function(){P=!1,ot=null,J=null,lt=null,ft=null,tt=null,Tt=null,St=null,oe=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},f={},u={},d=new WeakMap,_=[],M=null,g=!1,p=null,T=null,U=null,S=null,A=null,b=null,w=null,x=new Dt(0,0,0),y=0,D=!1,N=null,O=null,V=null,I=null,H=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,nt=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=nt>=2);let $=null,et={};const Rt=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),re=new pe().fromArray(Rt),Wt=new pe().fromArray(bt);function Kt(P,ot,J,lt){const ft=new Uint8Array(4),tt=i.createTexture();i.bindTexture(P,tt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<J;Tt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ot+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return tt}const Y={};Y[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(_s),Vt(!1),he(Ko),j(i.CULL_FACE),Yt(Nn);function j(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function _t(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Lt(P,ot){return u[P]!==ot?(i.bindFramebuffer(P,ot),u[P]=ot,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function mt(P,ot){let J=_,lt=!1;if(P){J=d.get(ot),J===void 0&&(J=[],d.set(ot,J));const ft=P.textures;if(J.length!==ft.length||J[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Tt=ft.length;tt<Tt;tt++)J[tt]=i.COLOR_ATTACHMENT0+tt;J.length=ft.length,lt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,lt=!0);lt&&i.drawBuffers(J)}function zt(P){return M!==P?(i.useProgram(P),M=P,!0):!1}const Se={[zi]:i.FUNC_ADD,[ph]:i.FUNC_SUBTRACT,[mh]:i.FUNC_REVERSE_SUBTRACT};Se[gh]=i.MIN,Se[_h]=i.MAX;const Ht={[xh]:i.ZERO,[vh]:i.ONE,[Mh]:i.SRC_COLOR,[oc]:i.SRC_ALPHA,[Th]:i.SRC_ALPHA_SATURATE,[Ah]:i.DST_COLOR,[Eh]:i.DST_ALPHA,[Sh]:i.ONE_MINUS_SRC_COLOR,[lc]:i.ONE_MINUS_SRC_ALPHA,[bh]:i.ONE_MINUS_DST_COLOR,[yh]:i.ONE_MINUS_DST_ALPHA,[wh]:i.CONSTANT_COLOR,[Rh]:i.ONE_MINUS_CONSTANT_COLOR,[Ch]:i.CONSTANT_ALPHA,[Ph]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(P,ot,J,lt,ft,tt,Tt,St,oe,Zt){if(P===Nn){g===!0&&(_t(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),P!==fh){if(P!==p||Zt!==D){if((T!==zi||A!==zi)&&(i.blendEquation(i.FUNC_ADD),T=zi,A=zi),Zt)switch(P){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zo:i.blendFunc(i.ONE,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",P);break}else switch(P){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jo:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",P);break}U=null,S=null,b=null,w=null,x.set(0,0,0),y=0,p=P,D=Zt}return}ft=ft||ot,tt=tt||J,Tt=Tt||lt,(ot!==T||ft!==A)&&(i.blendEquationSeparate(Se[ot],Se[ft]),T=ot,A=ft),(J!==U||lt!==S||tt!==b||Tt!==w)&&(i.blendFuncSeparate(Ht[J],Ht[lt],Ht[tt],Ht[Tt]),U=J,S=lt,b=tt,w=Tt),(St.equals(x)===!1||oe!==y)&&(i.blendColor(St.r,St.g,St.b,oe),x.copy(St),y=oe),p=P,D=!1}function ae(P,ot){P.side===In?_t(i.CULL_FACE):j(i.CULL_FACE);let J=P.side===He;ot&&(J=!J),Vt(J),P.blending===ms&&P.transparent===!1?Yt(Nn):Yt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const lt=P.stencilWrite;o.setTest(lt),lt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ge(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(P){N!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),N=P)}function he(P){P!==uh?(j(i.CULL_FACE),P!==O&&(P===Ko?i.cullFace(i.BACK):P===dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),O=P}function be(P){P!==V&&(W&&i.lineWidth(P),V=P)}function Ge(P,ot,J){P?(j(i.POLYGON_OFFSET_FILL),(I!==ot||H!==J)&&(I=ot,H=J,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,J))):_t(i.POLYGON_OFFSET_FILL)}function fe(P){P?j(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function ge(P){P===void 0&&(P=i.TEXTURE0+Z-1),$!==P&&(i.activeTexture(P),$=P)}function L(P,ot,J){J===void 0&&($===null?J=i.TEXTURE0+Z-1:J=$);let lt=et[J];lt===void 0&&(lt={type:void 0,texture:void 0},et[J]=lt),(lt.type!==P||lt.texture!==ot)&&($!==J&&(i.activeTexture(J),$=J),i.bindTexture(P,ot||Y[P]),lt.type=P,lt.texture=ot)}function De(){const P=et[$];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Qt(){try{i.compressedTexImage2D(...arguments)}catch(P){qt("WebGLState:",P)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(P){qt("WebGLState:",P)}}function m(){try{i.texSubImage2D(...arguments)}catch(P){qt("WebGLState:",P)}}function F(){try{i.texSubImage3D(...arguments)}catch(P){qt("WebGLState:",P)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(P){qt("WebGLState:",P)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(P){qt("WebGLState:",P)}}function it(){try{i.texStorage2D(...arguments)}catch(P){qt("WebGLState:",P)}}function st(){try{i.texStorage3D(...arguments)}catch(P){qt("WebGLState:",P)}}function K(){try{i.texImage2D(...arguments)}catch(P){qt("WebGLState:",P)}}function Q(){try{i.texImage3D(...arguments)}catch(P){qt("WebGLState:",P)}}function rt(P){return f[P]!==void 0?f[P]:i.getParameter(P)}function yt(P,ot){f[P]!==ot&&(i.pixelStorei(P,ot),f[P]=ot)}function ct(P){re.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),re.copy(P))}function at(P){Wt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Wt.copy(P))}function At(P,ot){let J=l.get(ot);J===void 0&&(J=new WeakMap,l.set(ot,J));let lt=J.get(P);lt===void 0&&(lt=i.getUniformBlockIndex(ot,P.name),J.set(P,lt))}function Ct(P,ot){const lt=l.get(ot).get(P);c.get(ot)!==lt&&(i.uniformBlockBinding(ot,lt,P.__bindingPointIndex),c.set(ot,lt))}function Ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},$=null,et={},u={},d=new WeakMap,_=[],M=null,g=!1,p=null,T=null,U=null,S=null,A=null,b=null,w=null,x=new Dt(0,0,0),y=0,D=!1,N=null,O=null,V=null,I=null,H=null,re.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:_t,bindFramebuffer:Lt,drawBuffers:mt,useProgram:zt,setBlending:Yt,setMaterial:ae,setFlipSided:Vt,setCullFace:he,setLineWidth:be,setPolygonOffset:Ge,setScissorTest:fe,activeTexture:ge,bindTexture:L,unbindTexture:De,compressedTexImage2D:Qt,compressedTexImage3D:E,texImage2D:K,texImage3D:Q,pixelStorei:yt,getParameter:rt,updateUBOMapping:At,uniformBlockBinding:Ct,texStorage2D:it,texStorage3D:st,texSubImage2D:m,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:ct,viewport:at,reset:Ut}}function Dg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,m){return _?new OffscreenCanvas(E,m):Ss("canvas")}function g(E,m,F){let G=1;const X=Qt(E);if((X.width>F||X.height>F)&&(G=F/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const it=Math.floor(G*X.width),st=Math.floor(G*X.height);u===void 0&&(u=M(it,st));const K=m?M(it,st):u;return K.width=it,K.height=st,K.getContext("2d").drawImage(E,0,0,it,st),Pt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+it+"x"+st+")."),K}else return"data"in E&&Pt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),E;return E}function p(E){return E.generateMipmaps}function T(E){i.generateMipmap(E)}function U(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,m,F,G,X,it=!1){if(E!==null){if(i[E]!==void 0)return i[E];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let st;G&&(st=t.get("EXT_texture_norm16"),st||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=m;if(m===i.RED&&(F===i.FLOAT&&(K=i.R32F),F===i.HALF_FLOAT&&(K=i.R16F),F===i.UNSIGNED_BYTE&&(K=i.R8),F===i.UNSIGNED_SHORT&&st&&(K=st.R16_EXT),F===i.SHORT&&st&&(K=st.R16_SNORM_EXT)),m===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.R8UI),F===i.UNSIGNED_SHORT&&(K=i.R16UI),F===i.UNSIGNED_INT&&(K=i.R32UI),F===i.BYTE&&(K=i.R8I),F===i.SHORT&&(K=i.R16I),F===i.INT&&(K=i.R32I)),m===i.RG&&(F===i.FLOAT&&(K=i.RG32F),F===i.HALF_FLOAT&&(K=i.RG16F),F===i.UNSIGNED_BYTE&&(K=i.RG8),F===i.UNSIGNED_SHORT&&st&&(K=st.RG16_EXT),F===i.SHORT&&st&&(K=st.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RG8UI),F===i.UNSIGNED_SHORT&&(K=i.RG16UI),F===i.UNSIGNED_INT&&(K=i.RG32UI),F===i.BYTE&&(K=i.RG8I),F===i.SHORT&&(K=i.RG16I),F===i.INT&&(K=i.RG32I)),m===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGB8UI),F===i.UNSIGNED_SHORT&&(K=i.RGB16UI),F===i.UNSIGNED_INT&&(K=i.RGB32UI),F===i.BYTE&&(K=i.RGB8I),F===i.SHORT&&(K=i.RGB16I),F===i.INT&&(K=i.RGB32I)),m===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),F===i.UNSIGNED_INT&&(K=i.RGBA32UI),F===i.BYTE&&(K=i.RGBA8I),F===i.SHORT&&(K=i.RGBA16I),F===i.INT&&(K=i.RGBA32I)),m===i.RGB&&(F===i.UNSIGNED_SHORT&&st&&(K=st.RGB16_EXT),F===i.SHORT&&st&&(K=st.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),m===i.RGBA){const Q=it?mr:kt.getTransfer(X);F===i.FLOAT&&(K=i.RGBA32F),F===i.HALF_FLOAT&&(K=i.RGBA16F),F===i.UNSIGNED_BYTE&&(K=Q===jt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&st&&(K=st.RGBA16_EXT),F===i.SHORT&&st&&(K=st.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function A(E,m){let F;return E?m===null||m===Sn||m===vs?F=i.DEPTH24_STENCIL8:m===cn?F=i.DEPTH32F_STENCIL8:m===xs&&(F=i.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Sn||m===vs?F=i.DEPTH_COMPONENT24:m===cn?F=i.DEPTH_COMPONENT32F:m===xs&&(F=i.DEPTH_COMPONENT16),F}function b(E,m){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Re&&E.minFilter!==Ne?Math.log2(Math.max(m.width,m.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?m.mipmaps.length:1}function w(E){const m=E.target;m.removeEventListener("dispose",w),y(m),m.isVideoTexture&&h.delete(m),m.isHTMLTexture&&f.delete(m)}function x(E){const m=E.target;m.removeEventListener("dispose",x),N(m)}function y(E){const m=n.get(E);if(m.__webglInit===void 0)return;const F=E.source,G=d.get(F);if(G){const X=G[m.__cacheKey];X.usedTimes--,X.usedTimes===0&&D(E),Object.keys(G).length===0&&d.delete(F)}n.remove(E)}function D(E){const m=n.get(E);i.deleteTexture(m.__webglTexture);const F=E.source,G=d.get(F);delete G[m.__cacheKey],a.memory.textures--}function N(E){const m=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(m.__webglFramebuffer[G]))for(let X=0;X<m.__webglFramebuffer[G].length;X++)i.deleteFramebuffer(m.__webglFramebuffer[G][X]);else i.deleteFramebuffer(m.__webglFramebuffer[G]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[G])}else{if(Array.isArray(m.__webglFramebuffer))for(let G=0;G<m.__webglFramebuffer.length;G++)i.deleteFramebuffer(m.__webglFramebuffer[G]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let G=0;G<m.__webglColorRenderbuffer.length;G++)m.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[G]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const F=E.textures;for(let G=0,X=F.length;G<X;G++){const it=n.get(F[G]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(F[G])}n.remove(E)}let O=0;function V(){O=0}function I(){return O}function H(E){O=E}function Z(){const E=O;return E>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,E}function W(E){const m=[];return m.push(E.wrapS),m.push(E.wrapT),m.push(E.wrapR||0),m.push(E.magFilter),m.push(E.minFilter),m.push(E.anisotropy),m.push(E.internalFormat),m.push(E.format),m.push(E.type),m.push(E.generateMipmaps),m.push(E.premultiplyAlpha),m.push(E.flipY),m.push(E.unpackAlignment),m.push(E.colorSpace),m.join()}function nt(E,m){const F=n.get(E);if(E.isVideoTexture&&L(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const G=E.image;if(G===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(F,E,m);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+m)}function q(E,m){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){_t(F,E,m);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+m)}function $(E,m){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){_t(F,E,m);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+m)}function et(E,m){const F=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){Lt(F,E,m);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+m)}const Rt={[Ki]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},bt={[Re]:i.NEAREST,[Ih]:i.NEAREST_MIPMAP_NEAREST,[Rs]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},re={[Oh]:i.NEVER,[Vh]:i.ALWAYS,[Bh]:i.LESS,[mo]:i.LEQUAL,[zh]:i.EQUAL,[go]:i.GEQUAL,[Hh]:i.GREATER,[Gh]:i.NOTEQUAL};function Wt(E,m){if(m.type===cn&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===Ne||m.magFilter===Ir||m.magFilter===Rs||m.magFilter===hi||m.minFilter===Ne||m.minFilter===Ir||m.minFilter===Rs||m.minFilter===hi)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Rt[m.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Rt[m.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Rt[m.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,bt[m.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,bt[m.minFilter]),m.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,re[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Re||m.minFilter!==Rs&&m.minFilter!==hi||m.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Kt(E,m){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,m.addEventListener("dispose",w));const G=m.source;let X=d.get(G);X===void 0&&(X={},d.set(G,X));const it=W(m);if(it!==E.__cacheKey){X[it]===void 0&&(X[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),X[it].usedTimes++;const st=X[E.__cacheKey];st!==void 0&&(X[E.__cacheKey].usedTimes--,st.usedTimes===0&&D(m)),E.__cacheKey=it,E.__webglTexture=X[it].texture}return F}function Y(E,m,F){return Math.floor(Math.floor(E/F)/m)}function j(E,m,F,G){const it=E.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,F,G,m.data);else{it.sort((yt,ct)=>yt.start-ct.start);let st=0;for(let yt=1;yt<it.length;yt++){const ct=it[st],at=it[yt],At=ct.start+ct.count,Ct=Y(at.start,m.width,4),Ut=Y(ct.start,m.width,4);at.start<=At+1&&Ct===Ut&&Y(at.start+at.count-1,m.width,4)===Ct?ct.count=Math.max(ct.count,at.start+at.count-ct.start):(++st,it[st]=at)}it.length=st+1;const K=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let yt=0,ct=it.length;yt<ct;yt++){const at=it[yt],At=Math.floor(at.start/4),Ct=Math.ceil(at.count/4),Ut=At%m.width,P=Math.floor(At/m.width),ot=Ct,J=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,P),e.texSubImage2D(i.TEXTURE_2D,0,Ut,P,ot,J,F,G,m.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function _t(E,m,F){let G=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(G=i.TEXTURE_3D);const X=Kt(E,m),it=m.source;e.bindTexture(G,E.__webglTexture,i.TEXTURE0+F);const st=n.get(it);if(it.version!==st.__version||X===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const J=kt.getPrimaries(kt.workingColorSpace),lt=m.colorSpace===Jn?null:kt.getPrimaries(m.colorSpace),ft=m.colorSpace===Jn||J===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let Q=g(m.image,!1,s.maxTextureSize);Q=De(m,Q);const rt=r.convert(m.format,m.colorSpace),yt=r.convert(m.type);let ct=S(m.internalFormat,rt,yt,m.normalized,m.colorSpace,m.isVideoTexture);Wt(G,m);let at;const At=m.mipmaps,Ct=m.isVideoTexture!==!0,Ut=st.__version===void 0||X===!0,P=it.dataReady,ot=b(m,Q);if(m.isDepthTexture)ct=A(m.format===ui,m.type),Ut&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,ct,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,ct,Q.width,Q.height,0,rt,yt,null));else if(m.isDataTexture)if(At.length>0){Ct&&Ut&&e.texStorage2D(i.TEXTURE_2D,ot,ct,At[0].width,At[0].height);for(let J=0,lt=At.length;J<lt;J++)at=At[J],Ct?P&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,at.width,at.height,rt,yt,at.data):e.texImage2D(i.TEXTURE_2D,J,ct,at.width,at.height,0,rt,yt,at.data);m.generateMipmaps=!1}else Ct?(Ut&&e.texStorage2D(i.TEXTURE_2D,ot,ct,Q.width,Q.height),P&&j(m,Q,rt,yt)):e.texImage2D(i.TEXTURE_2D,0,ct,Q.width,Q.height,0,rt,yt,Q.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ct&&Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,At[0].width,At[0].height,Q.depth);for(let J=0,lt=At.length;J<lt;J++)if(at=At[J],m.format!==hn)if(rt!==null)if(Ct){if(P)if(m.layerUpdates.size>0){const ft=Il(at.width,at.height,m.format,m.type);for(const tt of m.layerUpdates){const Tt=at.data.subarray(tt*ft/at.data.BYTES_PER_ELEMENT,(tt+1)*ft/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,tt,at.width,at.height,1,rt,Tt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,Q.depth,rt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ct,at.width,at.height,Q.depth,0,at.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,Q.depth,rt,yt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,ct,at.width,at.height,Q.depth,0,rt,yt,at.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Ct&&Ut&&e.texStorage2D(i.TEXTURE_2D,ot,ct,At[0].width,At[0].height);for(let J=0,lt=At.length;J<lt;J++)at=At[J],m.format!==hn?rt!==null?Ct?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,J,ct,at.width,at.height,0,at.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?P&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,at.width,at.height,rt,yt,at.data):e.texImage2D(i.TEXTURE_2D,J,ct,at.width,at.height,0,rt,yt,at.data)}else if(m.isDataArrayTexture)if(Ct){if(Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,Q.width,Q.height,Q.depth),P)if(m.layerUpdates.size>0){const J=Il(Q.width,Q.height,m.format,m.type);for(const lt of m.layerUpdates){const ft=Q.data.subarray(lt*J/Q.data.BYTES_PER_ELEMENT,(lt+1)*J/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,Q.width,Q.height,1,rt,yt,ft)}m.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,rt,yt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,Q.width,Q.height,Q.depth,0,rt,yt,Q.data);else if(m.isData3DTexture)Ct?(Ut&&e.texStorage3D(i.TEXTURE_3D,ot,ct,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,rt,yt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,ct,Q.width,Q.height,Q.depth,0,rt,yt,Q.data);else if(m.isFramebufferTexture){if(Ut)if(Ct)e.texStorage2D(i.TEXTURE_2D,ot,ct,Q.width,Q.height);else{let J=Q.width,lt=Q.height;for(let ft=0;ft<ot;ft++)e.texImage2D(i.TEXTURE_2D,ft,ct,J,lt,0,rt,yt,null),J>>=1,lt>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),f.add(m),J.onpaint=lt=>{const ft=lt.changedElements;for(const tt of f)ft.includes(tt.image)&&(tt.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const ft=i.RGBA,tt=i.RGBA,Tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,tt,Tt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(At.length>0){if(Ct&&Ut){const J=Qt(At[0]);e.texStorage2D(i.TEXTURE_2D,ot,ct,J.width,J.height)}for(let J=0,lt=At.length;J<lt;J++)at=At[J],Ct?P&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,rt,yt,at):e.texImage2D(i.TEXTURE_2D,J,ct,rt,yt,at);m.generateMipmaps=!1}else if(Ct){if(Ut){const J=Qt(Q);e.texStorage2D(i.TEXTURE_2D,ot,ct,J.width,J.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,yt,Q)}else e.texImage2D(i.TEXTURE_2D,0,ct,rt,yt,Q);p(m)&&T(G),st.__version=it.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function Lt(E,m,F){if(m.image.length!==6)return;const G=Kt(E,m),X=m.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const it=n.get(X);if(X.version!==it.__version||G===!0){e.activeTexture(i.TEXTURE0+F);const st=kt.getPrimaries(kt.workingColorSpace),K=m.colorSpace===Jn?null:kt.getPrimaries(m.colorSpace),Q=m.colorSpace===Jn||st===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const rt=m.isCompressedTexture||m.image[0].isCompressedTexture,yt=m.image[0]&&m.image[0].isDataTexture,ct=[];for(let tt=0;tt<6;tt++)!rt&&!yt?ct[tt]=g(m.image[tt],!0,s.maxCubemapSize):ct[tt]=yt?m.image[tt].image:m.image[tt],ct[tt]=De(m,ct[tt]);const at=ct[0],At=r.convert(m.format,m.colorSpace),Ct=r.convert(m.type),Ut=S(m.internalFormat,At,Ct,m.normalized,m.colorSpace),P=m.isVideoTexture!==!0,ot=it.__version===void 0||G===!0,J=X.dataReady;let lt=b(m,at);Wt(i.TEXTURE_CUBE_MAP,m);let ft;if(rt){P&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ut,at.width,at.height);for(let tt=0;tt<6;tt++){ft=ct[tt].mipmaps;for(let Tt=0;Tt<ft.length;Tt++){const St=ft[Tt];m.format!==hn?At!==null?P?J&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt,0,0,St.width,St.height,At,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt,Ut,St.width,St.height,0,St.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt,0,0,St.width,St.height,At,Ct,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt,Ut,St.width,St.height,0,At,Ct,St.data)}}}else{if(ft=m.mipmaps,P&&ot){ft.length>0&&lt++;const tt=Qt(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ut,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(yt){P?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ct[tt].width,ct[tt].height,At,Ct,ct[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ut,ct[tt].width,ct[tt].height,0,At,Ct,ct[tt].data);for(let Tt=0;Tt<ft.length;Tt++){const oe=ft[Tt].image[tt].image;P?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt+1,0,0,oe.width,oe.height,At,Ct,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt+1,Ut,oe.width,oe.height,0,At,Ct,oe.data)}}else{P?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,At,Ct,ct[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ut,At,Ct,ct[tt]);for(let Tt=0;Tt<ft.length;Tt++){const St=ft[Tt];P?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt+1,0,0,At,Ct,St.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt+1,Ut,At,Ct,St.image[tt])}}}p(m)&&T(i.TEXTURE_CUBE_MAP),it.__version=X.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function mt(E,m,F,G,X,it){const st=r.convert(F.format,F.colorSpace),K=r.convert(F.type),Q=S(F.internalFormat,st,K,F.normalized,F.colorSpace),rt=n.get(m),yt=n.get(F);if(yt.__renderTarget=m,!rt.__hasExternalTextures){const ct=Math.max(1,m.width>>it),at=Math.max(1,m.height>>it);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,it,Q,ct,at,m.depth,0,st,K,null):e.texImage2D(X,it,Q,ct,at,0,st,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),ge(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,X,yt.__webglTexture,0,fe(m)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,X,yt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(E,m,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),m.depthBuffer){const G=m.depthTexture,X=G&&G.isDepthTexture?G.type:null,it=A(m.stencilBuffer,X),st=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(m),it,m.width,m.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(m),it,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,it,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,E)}else{const G=m.textures;for(let X=0;X<G.length;X++){const it=G[X],st=r.convert(it.format,it.colorSpace),K=r.convert(it.type),Q=S(it.internalFormat,st,K,it.normalized,it.colorSpace);ge(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(m),Q,m.width,m.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(m),Q,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,Q,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(E,m,F){const G=m.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=n.get(m.depthTexture);if(X.__renderTarget=m,(!X.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,m.depthTexture.addEventListener("dispose",w)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,m.depthTexture);const rt=r.convert(m.depthTexture.format),yt=r.convert(m.depthTexture.type);let ct;m.depthTexture.format===On?ct=i.DEPTH_COMPONENT24:m.depthTexture.format===ui&&(ct=i.DEPTH24_STENCIL8);for(let at=0;at<6;at++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ct,m.width,m.height,0,rt,yt,null)}}else nt(m.depthTexture,0);const it=X.__webglTexture,st=fe(m),K=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Q=m.depthTexture.format===ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===On)ge(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,it,0);else if(m.depthTexture.format===ui)ge(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(E){const m=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),G){const X=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),m.__depthDisposeCallback=X}m.__boundDepthTexture=G}if(E.depthTexture&&!m.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)Se(m.__webglFramebuffer[G],E,G);else{const G=E.texture.mipmaps;G&&G.length>0?Se(m.__webglFramebuffer[0],E,0):Se(m.__webglFramebuffer,E,0)}else if(F){m.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[G]),m.__webglDepthbuffer[G]===void 0)m.__webglDepthbuffer[G]=i.createRenderbuffer(),zt(m.__webglDepthbuffer[G],E,!1);else{const X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=m.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,it)}}else{const G=E.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),zt(m.__webglDepthbuffer,E,!1);else{const X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(E,m,F){const G=n.get(E);m!==void 0&&mt(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ht(E)}function ae(E){const m=E.texture,F=n.get(E),G=n.get(m);E.addEventListener("dispose",x);const X=E.textures,it=E.isWebGLCubeRenderTarget===!0,st=X.length>1;if(st||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=m.version,a.memory.textures++),it){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(m.mipmaps&&m.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let Q=0;Q<m.mipmaps.length;Q++)F.__webglFramebuffer[K][Q]=i.createFramebuffer()}else F.__webglFramebuffer[K]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<m.mipmaps.length;K++)F.__webglFramebuffer[K]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(st)for(let K=0,Q=X.length;K<Q;K++){const rt=n.get(X[K]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ge(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<X.length;K++){const Q=X[K];F.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[K]);const rt=r.convert(Q.format,Q.colorSpace),yt=r.convert(Q.type),ct=S(Q.internalFormat,rt,yt,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),at=fe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ct,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,F.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,m);for(let K=0;K<6;K++)if(m.mipmaps&&m.mipmaps.length>0)for(let Q=0;Q<m.mipmaps.length;Q++)mt(F.__webglFramebuffer[K][Q],E,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else mt(F.__webglFramebuffer[K],E,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(m)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let K=0,Q=X.length;K<Q;K++){const rt=X[K],yt=n.get(rt);let ct=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,yt.__webglTexture),Wt(ct,rt),mt(F.__webglFramebuffer,E,rt,i.COLOR_ATTACHMENT0+K,ct,0),p(rt)&&T(ct)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,G.__webglTexture),Wt(K,m),m.mipmaps&&m.mipmaps.length>0)for(let Q=0;Q<m.mipmaps.length;Q++)mt(F.__webglFramebuffer[Q],E,m,i.COLOR_ATTACHMENT0,K,Q);else mt(F.__webglFramebuffer,E,m,i.COLOR_ATTACHMENT0,K,0);p(m)&&T(K),e.unbindTexture()}E.depthBuffer&&Ht(E)}function Vt(E){const m=E.textures;for(let F=0,G=m.length;F<G;F++){const X=m[F];if(p(X)){const it=U(E),st=n.get(X).__webglTexture;e.bindTexture(it,st),T(it),e.unbindTexture()}}}const he=[],be=[];function Ge(E){if(E.samples>0){if(ge(E)===!1){const m=E.textures,F=E.width,G=E.height;let X=i.COLOR_BUFFER_BIT;const it=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(E),K=m.length>1;if(K)for(let rt=0;rt<m.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);const Q=E.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<m.length;rt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);const yt=n.get(m[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,yt,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,X,i.NEAREST),c===!0&&(he.length=0,be.length=0,he.push(i.COLOR_ATTACHMENT0+rt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(he.push(it),be.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let rt=0;rt<m.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);const yt=n.get(m[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){const m=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function fe(E){return Math.min(s.maxSamples,E.samples)}function ge(E){const m=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function L(E){const m=a.render.frame;h.get(E)!==m&&(h.set(E,m),E.update())}function De(E,m){const F=E.colorSpace,G=E.format,X=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==pr&&F!==Jn&&(kt.getTransfer(F)===jt?(G!==hn||X!==Ye)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",F)),m}function Qt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=I,this.setTextureUnits=H,this.setTexture2D=nt,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=et,this.rebindTextures=Yt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Lg(i,t){function e(n,s=Jn){let r;const a=kt.getTransfer(s);if(n===Ye)return i.UNSIGNED_BYTE;if(n===lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_c)return i.BYTE;if(n===xc)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===oo)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===Ec)return i.RGB;if(n===hn)return i.RGBA;if(n===On)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===ho)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===fo)return i.RG_INTEGER;if(n===po)return i.RGBA_INTEGER;if(n===sr||n===rr||n===ar||n===or)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===ba||n===Ta||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Ca||n===Pa||n===Da||n===La||n===ur||n===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Ca)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Da)return r.COMPRESSED_R11_EAC;if(n===La)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ur)return r.COMPRESSED_RG11_EAC;if(n===Ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Ga||n===Va||n===ka||n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ua)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===Za||n===Ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ka)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===ja||n===dr||n===$a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Fc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new An({vertexShader:Ig,fragmentShader:Ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fg extends $n{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,_=null;const M=typeof XRWebGLBinding<"u",g=new Ng,p={},T=e.getContextAttributes();let U=null,S=null;const A=[],b=[],w=new wt;let x=null,y=null;const D=new qe;D.viewport=new pe;const N=new qe;N.viewport=new pe;const O=[D,N],V=new Hu;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=A[Y];return j===void 0&&(j=new Gr,A[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=A[Y];return j===void 0&&(j=new Gr,A[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=A[Y];return j===void 0&&(j=new Gr,A[Y]=j),j.getHandSpace()};function Z(Y){const j=b.indexOf(Y.inputSource);if(j===-1)return;const _t=A[j];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,l||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<A.length;Y++){const j=b[Y];j!==null&&(b[Y]=null,A[Y].disconnect(j))}I=null,H=null,g.reset();for(const Y in p)delete p[Y];if(t.setRenderTarget(U),d=null,u=null,f=null,s=null,S=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),y!==null){const Y=y.camera;Y.fov=y.fov,Y.zoom=y.zoom,Y.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(U=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Lt=null,mt=null;T.depth&&(mt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=T.stencil?ui:On,Lt=T.stencil?vs:Sn);const zt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new dn(u.textureWidth,u.textureHeight,{format:hn,type:Ye,depthTexture:new Es(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _t={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new dn(d.framebufferWidth,d.framebufferHeight,{format:hn,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(Y){for(let j=0;j<Y.removed.length;j++){const _t=Y.removed[j],Lt=b.indexOf(_t);Lt>=0&&(b[Lt]=null,A[Lt].disconnect(_t))}for(let j=0;j<Y.added.length;j++){const _t=Y.added[j];let Lt=b.indexOf(_t);if(Lt===-1){for(let zt=0;zt<A.length;zt++)if(zt>=b.length){b.push(_t),Lt=zt;break}else if(b[zt]===null){b[zt]=_t,Lt=zt;break}if(Lt===-1)break}const mt=A[Lt];mt&&mt.connect(_t)}}const q=new C,$=new C;function et(Y,j,_t){q.setFromMatrixPosition(j.matrixWorld),$.setFromMatrixPosition(_t.matrixWorld);const Lt=q.distanceTo($),mt=j.projectionMatrix.elements,zt=_t.projectionMatrix.elements,Se=mt[14]/(mt[10]-1),Ht=mt[14]/(mt[10]+1),Yt=(mt[9]+1)/mt[5],ae=(mt[9]-1)/mt[5],Vt=(mt[8]-1)/mt[0],he=(zt[8]+1)/zt[0],be=Se*Vt,Ge=Se*he,fe=Lt/(-Vt+he),ge=fe*-Vt;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ge),Y.translateZ(fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),mt[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const L=Se+fe,De=Ht+fe,Qt=be-ge,E=Ge+(Lt-ge),m=Yt*Ht/De*L,F=ae*Ht/De*L;Y.projectionMatrix.makePerspective(Qt,E,m,F,L,De),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Rt(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,_t=Y.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),V.near=N.near=D.near=j,V.far=N.far=D.far=_t,(I!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,H=V.far),V.layers.mask=Y.layers.mask|6,D.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;const Lt=Y.parent,mt=V.cameras;Rt(V,Lt);for(let zt=0;zt<mt.length;zt++)Rt(mt[zt],Lt);mt.length===2?et(V,D,N):V.projectionMatrix.copy(D.projectionMatrix),y===null&&Y.isPerspectiveCamera&&(y={camera:Y,fov:Y.fov,zoom:Y.zoom}),bt(Y,V,Lt)};function bt(Y,j,_t){_t===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=to*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Y){return p[Y]};let re=null;function Wt(Y,j){if(h=j.getViewerPose(l||a),_=j,h!==null){const _t=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Lt=!1;_t.length!==V.cameras.length&&(V.cameras.length=0,Lt=!0);for(let Ht=0;Ht<_t.length;Ht++){const Yt=_t[Ht];let ae=null;if(d!==null)ae=d.getViewport(Yt);else{const he=f.getViewSubImage(u,Yt);ae=he.viewport,Ht===0&&(t.setRenderTargetTextures(S,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(S))}let Vt=O[Ht];Vt===void 0&&(Vt=new qe,Vt.layers.enable(Ht),Vt.viewport=new pe,O[Ht]=Vt),Vt.matrix.fromArray(Yt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Yt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ae.x,ae.y,ae.width,ae.height),Ht===0&&(V.matrix.copy(Vt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Lt===!0&&V.cameras.push(Vt)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const Ht=f.getDepthInformation(_t[0]);Ht&&Ht.isValid&&Ht.texture&&g.init(Ht,s.renderState)}if(mt&&mt.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let Ht=0;Ht<_t.length;Ht++){const Yt=_t[Ht].camera;if(Yt){let ae=p[Yt];ae||(ae=new Fc,p[Yt]=ae);const Vt=f.getCameraImage(Yt);ae.sourceTexture=Vt}}}}for(let _t=0;_t<A.length;_t++){const Lt=b[_t],mt=A[_t];Lt!==null&&mt!==void 0&&mt.update(Lt,j,l||a)}re&&re(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}const Kt=new kc;Kt.setAnimationLoop(Wt),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}}const Og=new ne,Jc=new It;Jc.set(-1,0,0,0,1,0,0,0,1);function Bg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Oc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,U,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),M(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,T,U):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===He&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===He&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=t.get(p),U=T.envMap,S=T.envMapRotation;U&&(g.envMap.value=U,g.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(S)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Jc),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,T,U){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=U*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){const T=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,A){const b=A.program;n.uniformBlockBinding(S,b)}function l(S,A){let b=s[S.id];b===void 0&&(g(S),b=h(S),s[S.id]=b,S.addEventListener("dispose",T));const w=A.program;n.updateUBOMapping(S,w);const x=t.render.frame;r[S.id]!==x&&(u(S),r[S.id]=x)}function h(S){const A=f();S.__bindingPointIndex=A;const b=i.createBuffer(),w=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,b),b}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const A=s[S.id],b=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let x=0,y=b.length;x<y;x++){const D=b[x];if(Array.isArray(D))for(let N=0,O=D.length;N<O;N++)d(D[N],x,N,w);else d(D,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,A,b,w){if(M(S,A,b,w)===!0){const x=S.__offset,y=S.value;if(Array.isArray(y)){let D=0;for(let N=0;N<y.length;N++){const O=y[N],V=p(O);_(O,S.__data,D),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(D+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(y,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function _(S,A,b){typeof S=="number"||typeof S=="boolean"?A[0]=S:S.isMatrix3?(A[0]=S.elements[0],A[1]=S.elements[1],A[2]=S.elements[2],A[3]=0,A[4]=S.elements[3],A[5]=S.elements[4],A[6]=S.elements[5],A[7]=0,A[8]=S.elements[6],A[9]=S.elements[7],A[10]=S.elements[8],A[11]=0):ArrayBuffer.isView(S)?A.set(new S.constructor(S.buffer,S.byteOffset,A.length)):S.toArray(A,b)}function M(S,A,b,w){const x=S.value,y=A+"_"+b;if(w[y]===void 0)return typeof x=="number"||typeof x=="boolean"?w[y]=x:ArrayBuffer.isView(x)?w[y]=x.slice():w[y]=x.clone(),!0;{const D=w[y];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return w[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function g(S){const A=S.uniforms;let b=0;const w=16;for(let y=0,D=A.length;y<D;y++){const N=Array.isArray(A[y])?A[y]:[A[y]];for(let O=0,V=N.length;O<V;O++){const I=N[O],H=Array.isArray(I.value)?I.value:[I.value];for(let Z=0,W=H.length;Z<W;Z++){const nt=H[Z],q=p(nt),$=b%w,et=$%q.boundary,Rt=$+et;b+=et,Rt!==0&&w-Rt<q.storage&&(b+=w-Rt),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=q.storage}}}const x=b%w;return x>0&&(b+=w-x),S.__size=b,S.__cache={},this}function p(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",S),A}function T(S){const A=S.target;A.removeEventListener("dispose",T);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function U(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:U}}const Hg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gn=null;function Gg(){return gn===null&&(gn=new Ic(Hg,16,16,pi,En),gn.name="DFG_LUT",gn.minFilter=Ne,gn.magFilter=Ne,gn.wrapS=Un,gn.wrapT=Un,gn.generateMipmaps=!1,gn.needsUpdate=!0),gn}class Vg{constructor(t={}){const{canvas:e=Wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ye}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const M=d,g=new Set([po,fo,uo]),p=new Set([Ye,Sn,xs,vs,lo,co]),T=new Uint32Array(4),U=new Int32Array(4),S=new C;let A=null,b=null;const w=[],x=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let N=!1,O=null,V=null,I=null,H=null;this._outputColorSpace=je;let Z=0,W=0,nt=null,q=-1,$=null;const et=new pe,Rt=new pe;let bt=null;const re=new Dt(0);let Wt=0,Kt=e.width,Y=e.height,j=1,_t=null,Lt=null;const mt=new pe(0,0,Kt,Y),zt=new pe(0,0,Kt,Y);let Se=!1;const Ht=new Mo;let Yt=!1,ae=!1;const Vt=new ne,he=new C,be=new pe,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function ge(){return nt===null?j:1}let L=n;function De(v,R){return e.getContext(v,R)}let Qt,E,m,F,G,X,it,st,K,Q,rt,yt,ct,at,At,Ct,Ut,P,ot,J,lt,ft,tt;try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ro}`),e.addEventListener("webglcontextlost",oe,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",nn,!1),L===null){const R="webgl2";if(L=De(R,v),L===null)throw De(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Tt()}catch(v){throw e.removeEventListener("webglcontextlost",oe,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",nn,!1),qt("WebGLRenderer: "+v.message),v}function Tt(){Qt=new Gp(L),Qt.init(),lt=new Lg(L,Qt),E=new Dp(L,Qt,t,lt),m=new Pg(L,Qt),E.reversedDepthBuffer&&u&&m.buffers.depth.setReversed(!0),V=L.createFramebuffer(),I=L.createFramebuffer(),H=L.createFramebuffer(),F=new Wp(L),G=new gg,X=new Dg(L,Qt,m,G,E,lt,F),it=new Hp(D),st=new Xu(L),ft=new Cp(L,st),K=new Vp(L,st,F,ft),Q=new qp(L,K,st,ft,F),P=new Xp(L,E,X),At=new Lp(G),rt=new mg(D,it,Qt,E,ft,At),yt=new Bg(D,G),ct=new xg,at=new Ag(Qt),Ut=new Rp(D,it,m,Q,_,c),Ct=new Cg(D,Q,E),tt=new zg(L,F,E,m),ot=new Pp(L,Qt,F),J=new kp(L,Qt,F),F.programs=rt.programs,D.capabilities=E,D.extensions=Qt,D.properties=G,D.renderLists=ct,D.shadowMap=Ct,D.state=m,D.info=F}M!==Ye&&(y=new Kp(M,e.width,e.height,o,s,r));const St=new Fg(D,L);this.xr=St,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=Qt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Qt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(Kt,Y,!1))},this.getSize=function(v){return v.set(Kt,Y)},this.setSize=function(v,R,k=!0){if(St.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=v,Y=R,e.width=Math.floor(v*j),e.height=Math.floor(R*j),k===!0&&(e.style.width=v+"px",e.style.height=R+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(Kt*j,Y*j).floor()},this.setDrawingBufferSize=function(v,R,k){Kt=v,Y=R,j=k,e.width=Math.floor(v*k),e.height=Math.floor(R*k),this.setViewport(0,0,v,R)},this.setEffects=function(v){if(M===Ye){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let R=0;R<v.length;R++)if(v[R].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(et)},this.getViewport=function(v){return v.copy(mt)},this.setViewport=function(v,R,k,B){v.isVector4?mt.set(v.x,v.y,v.z,v.w):mt.set(v,R,k,B),m.viewport(et.copy(mt).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(zt)},this.setScissor=function(v,R,k,B){v.isVector4?zt.set(v.x,v.y,v.z,v.w):zt.set(v,R,k,B),m.scissor(Rt.copy(zt).multiplyScalar(j).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(v){m.setScissorTest(Se=v)},this.setOpaqueSort=function(v){_t=v},this.setTransparentSort=function(v){Lt=v},this.getClearColor=function(v){return v.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(v=!0,R=!0,k=!0){let B=0;if(v){let z=!1;if(nt!==null){const dt=nt.texture.format;z=g.has(dt)}if(z){const dt=nt.texture.type,gt=p.has(dt),ut=Ut.getClearColor(),vt=Ut.getClearAlpha(),Et=ut.r,Ft=ut.g,Gt=ut.b;gt?(T[0]=Et,T[1]=Ft,T[2]=Gt,T[3]=vt,L.clearBufferuiv(L.COLOR,0,T)):(U[0]=Et,U[1]=Ft,U[2]=Gt,U[3]=vt,L.clearBufferiv(L.COLOR,0,U))}else B|=L.COLOR_BUFFER_BIT}R&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){e.removeEventListener("webglcontextlost",oe,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",nn,!1),Ut.dispose(),ct.dispose(),at.dispose(),G.dispose(),it.dispose(),Q.dispose(),ft.dispose(),tt.dispose(),rt.dispose(),St.dispose(),St.removeEventListener("sessionstart",zo),St.removeEventListener("sessionend",Ho),si.stop()};function oe(v){v.preventDefault(),gr("WebGLRenderer: Context Lost."),N=!0}function Zt(){gr("WebGLRenderer: Context Restored."),N=!1;const v=F.autoReset,R=Ct.enabled,k=Ct.autoUpdate,B=Ct.needsUpdate,z=Ct.type;Tt(),F.autoReset=v,Ct.enabled=R,Ct.autoUpdate=k,Ct.needsUpdate=B,Ct.type=z}function nn(v){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function fn(v){const R=v.target;R.removeEventListener("dispose",fn),sh(R)}function sh(v){rh(v),G.remove(v)}function rh(v){const R=G.get(v).programs;R!==void 0&&(R.forEach(function(k){rt.releaseProgram(k)}),v.isShaderMaterial&&rt.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,k,B,z,dt){R===null&&(R=Ge);const gt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ut=lh(v,R,k,B,z);m.setMaterial(B,gt);let vt=k.index,Et=1;if(B.wireframe===!0){if(vt=K.getWireframeAttribute(k),vt===void 0)return;Et=2}const Ft=k.drawRange,Gt=k.attributes.position;let Mt=Ft.start*Et,Jt=(Ft.start+Ft.count)*Et;dt!==null&&(Mt=Math.max(Mt,dt.start*Et),Jt=Math.min(Jt,(dt.start+dt.count)*Et)),vt!==null?(Mt=Math.max(Mt,0),Jt=Math.min(Jt,vt.count)):Gt!=null&&(Mt=Math.max(Mt,0),Jt=Math.min(Jt,Gt.count));const _e=Jt-Mt;if(_e<0||_e===1/0)return;ft.setup(z,B,ut,k,vt);let ce,ie=ot;if(vt!==null&&(ce=st.get(vt),ie=J,ie.setIndex(ce)),z.isMesh)B.wireframe===!0?(m.setLineWidth(B.wireframeLinewidth*ge()),ie.setMode(L.LINES)):ie.setMode(L.TRIANGLES);else if(z.isLine){let Le=B.linewidth;Le===void 0&&(Le=1),m.setLineWidth(Le*ge()),z.isLineSegments?ie.setMode(L.LINES):z.isLineLoop?ie.setMode(L.LINE_LOOP):ie.setMode(L.LINE_STRIP)}else z.isPoints?ie.setMode(L.POINTS):z.isSprite&&ie.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))ie.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,pt=z._multiDrawCounts,Oe=z._multiDrawCount,Xt=vt?st.get(vt).bytesPerElement:1,Ke=G.get(B).currentProgram.getUniforms();for(let pn=0;pn<Oe;pn++)Ke.setValue(L,"_gl_DrawID",pn),ie.render(Le[pn]/Xt,pt[pn])}else if(z.isInstancedMesh)ie.renderInstances(Mt,_e,z.count);else if(k.isInstancedBufferGeometry){const Le=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,pt=Math.min(k.instanceCount,Le);ie.renderInstances(Mt,_e,pt)}else ie.render(Mt,_e)};function Bo(v,R,k,B){O!==null&&v.isNodeMaterial&&O.setObject(B,v),Yt===!0&&At.setState(v,k,!1),v.transparent===!0&&v.side===In&&v.forceSinglePass===!1?(v.side=He,v.needsUpdate=!0,ws(v,R,B),v.side=di,v.needsUpdate=!0,ws(v,R,B),v.side=In):ws(v,R,B)}this.compile=function(v,R,k=null){k===null&&(k=v),O!==null&&O.renderStart(v,R,k),b=at.get(k),b.init(R),x.push(b),k.traverseVisible(function(z){z.isLight&&z.layers.test(R.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),v!==k&&v.traverseVisible(function(z){z.isLight&&z.layers.test(R.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),ae=this.localClippingEnabled,Yt=At.init(this.clippingPlanes,ae),Yt===!0&&At.setGlobalState(this.clippingPlanes,R),O!==null&&Ct.render(b.state.shadowsArray,k,R);const B=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const dt=z.material;if(dt)if(Array.isArray(dt))for(let gt=0;gt<dt.length;gt++){const ut=dt[gt];Bo(ut,k,R,z),B.add(ut)}else Bo(dt,k,R,z),B.add(dt)}),b=x.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(v,R,k=null){const B=this.compile(v,R,k);return new Promise(z=>{function dt(){if(B.forEach(function(gt){const vt=G.get(gt).currentProgram;(vt===void 0||vt.isReady())&&B.delete(gt)}),B.size===0){z(v);return}setTimeout(dt,10)}Qt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Cr=null;function ah(v){Cr&&Cr(v)}function zo(){si.stop()}function Ho(){si.start()}const si=new kc;si.setAnimationLoop(ah),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(v){Cr=v,St.setAnimationLoop(v),v===null?si.stop():si.start()},St.addEventListener("sessionstart",zo),St.addEventListener("sessionend",Ho),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(v,R);const k=St.enabled===!0&&St.isPresenting===!0,B=y!==null&&(nt===null||k)&&y.begin(D,nt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(R),R=St.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,R,nt),b=at.get(v,x.length),b.init(R),b.state.textureUnits=X.getTextureUnits(),x.push(b),Vt.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Ht.setFromProjectionMatrix(Vt,vn,R.reversedDepth),ae=this.localClippingEnabled,Yt=At.init(this.clippingPlanes,ae),A=ct.get(v,w.length),A.init(),w.push(A),St.enabled===!0&&St.isPresenting===!0){const gt=D.xr.getDepthSensingMesh();gt!==null&&Pr(gt,R,-1/0,D.sortObjects)}Pr(v,R,0,D.sortObjects),A.finish(),O!==null&&O.updateLights(b.state.lightsArray),D.sortObjects===!0&&A.sort(_t,Lt),fe=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,fe&&Ut.addToRenderList(A,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&At.beginShadows();const z=b.state.shadowsArray;if(Ct.render(z,v,R),Yt===!0&&At.endShadows(),(B&&y.hasRenderPass())===!1){const gt=A.opaque,ut=A.transmissive;if(b.setupLights(),R.isArrayCamera){const vt=R.cameras;if(ut.length>0)for(let Et=0,Ft=vt.length;Et<Ft;Et++){const Gt=vt[Et];Vo(gt,ut,v,Gt)}fe&&Ut.render(v);for(let Et=0,Ft=vt.length;Et<Ft;Et++){const Gt=vt[Et];Go(A,v,Gt,Gt.viewport)}}else ut.length>0&&Vo(gt,ut,v,R),fe&&Ut.render(v),Go(A,v,R)}nt!==null&&W===0&&(X.updateMultisampleRenderTarget(nt),X.updateRenderTargetMipmap(nt)),B&&y.end(D),v.isScene===!0&&v.onAfterRender(D,v,R),ft.resetDefaultState(),q=-1,$=null,x.pop(),x.length>0?(b=x[x.length-1],X.setTextureUnits(b.state.textureUnits),Yt===!0&&At.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,O!==null&&O.renderEnd()};function Pr(v,R,k,B){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Ht)){B&&be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Vt);const gt=Q.update(v),ut=v.material;ut.visible&&A.push(v,gt,ut,k,be.z,null,R)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Ht))){const gt=Q.update(v),ut=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),be.copy(v.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),be.copy(gt.boundingSphere.center)),be.applyMatrix4(v.matrixWorld).applyMatrix4(Vt)),Array.isArray(ut)){const vt=gt.groups;for(let Et=0,Ft=vt.length;Et<Ft;Et++){const Gt=vt[Et],Mt=ut[Gt.materialIndex];Mt&&Mt.visible&&A.push(v,gt,Mt,k,be.z,Gt,R)}}else ut.visible&&A.push(v,gt,ut,k,be.z,null,R)}}const dt=v.children;for(let gt=0,ut=dt.length;gt<ut;gt++)Pr(dt[gt],R,k,B)}function Go(v,R,k,B){const{opaque:z,transmissive:dt,transparent:gt}=v;b.setupLightsView(k),Yt===!0&&At.setGlobalState(D.clippingPlanes,k),B&&m.viewport(et.copy(B)),z.length>0&&Ts(z,R,k),dt.length>0&&Ts(dt,R,k),gt.length>0&&Ts(gt,R,k),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Vo(v,R,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){const Mt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new dn(1,1,{generateMipmaps:!0,type:Mt?En:Ye,minFilter:hi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}const dt=b.state.transmissionRenderTarget[B.id],gt=B.viewport||et;dt.setSize(gt.z*D.transmissionResolutionScale,gt.w*D.transmissionResolutionScale);const ut=D.getRenderTarget(),vt=D.getActiveCubeFace(),Et=D.getActiveMipmapLevel();D.setRenderTarget(dt),D.getClearColor(re),Wt=D.getClearAlpha(),Wt<1&&D.setClearColor(16777215,.5),D.clear(),fe&&Ut.render(k);const Ft=D.toneMapping;D.toneMapping=Mn;const Gt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),Yt===!0&&At.setGlobalState(D.clippingPlanes,B),Ts(v,k,B),X.updateMultisampleRenderTarget(dt),X.updateRenderTargetMipmap(dt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Jt=0,_e=R.length;Jt<_e;Jt++){const ce=R[Jt],{object:ie,geometry:Le,material:pt,group:Oe}=ce;if(pt.side===In&&ie.layers.test(B.layers)){const Xt=pt.side;pt.side=He,pt.needsUpdate=!0,ko(ie,k,B,Le,pt,Oe),pt.side=Xt,pt.needsUpdate=!0,Mt=!0}}Mt===!0&&(X.updateMultisampleRenderTarget(dt),X.updateRenderTargetMipmap(dt))}D.setRenderTarget(ut,vt,Et),D.setClearColor(re,Wt),Gt!==void 0&&(B.viewport=Gt),D.toneMapping=Ft}function Ts(v,R,k){const B=R.isScene===!0?R.overrideMaterial:null;for(let z=0,dt=v.length;z<dt;z++){const gt=v[z],{object:ut,geometry:vt,group:Et}=gt;let Ft=gt.material;Ft.allowOverride===!0&&B!==null&&(Ft=B),ut.layers.test(k.layers)&&ko(ut,R,k,vt,Ft,Et)}}function ko(v,R,k,B,z,dt){O!==null&&z.isNodeMaterial&&O.setObject(v,z),v.onBeforeRender(D,R,k,B,z,dt),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(D,R,k,B,v,dt),z.transparent===!0&&z.side===In&&z.forceSinglePass===!1?(z.side=He,z.needsUpdate=!0,D.renderBufferDirect(k,R,B,z,v,dt),z.side=di,z.needsUpdate=!0,D.renderBufferDirect(k,R,B,z,v,dt),z.side=In):D.renderBufferDirect(k,R,B,z,v,dt),v.onAfterRender(D,R,k,B,z,dt)}function ws(v,R,k){R.isScene!==!0&&(R=Ge);const B=G.get(v),z=b.state.lights,dt=b.state.shadowsArray,gt=z.state.version,ut=rt.getParameters(v,z.state,dt,R,k,b.state.lightProbeGridArray),vt=rt.getProgramCacheKey(ut);let Et=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,B.fog=R.fog;const Ft=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=it.get(v.envMap||B.environment,Ft),B.envMapRotation=B.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,Et===void 0&&(v.addEventListener("dispose",fn),Et=new Map,B.programs=Et);let Gt=Et.get(vt);if(Gt!==void 0){if(B.currentProgram===Gt&&B.lightsStateVersion===gt)return Xo(v,ut),Gt}else ut.uniforms=rt.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,k,ut),v.onBeforeCompile(ut,D),Gt=rt.acquireProgram(ut,vt),Et.set(vt,Gt),B.uniforms=ut.uniforms;const Mt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Mt.clippingPlanes=At.uniform),Xo(v,ut),B.needsLights=hh(v),B.lightsStateVersion=gt,B.needsLights&&(Mt.ambientLightColor.value=z.state.ambient,Mt.lightProbe.value=z.state.probe,Mt.sunLights.value=z.state.sun,Mt.sunLightShadows.value=z.state.sunShadow,Mt.directionalLights.value=z.state.directional,Mt.directionalLightShadows.value=z.state.directionalShadow,Mt.spotLights.value=z.state.spot,Mt.spotLightShadows.value=z.state.spotShadow,Mt.rectAreaLights.value=z.state.rectArea,Mt.ltc_1.value=z.state.rectAreaLTC1,Mt.ltc_2.value=z.state.rectAreaLTC2,Mt.pointLights.value=z.state.point,Mt.pointLightShadows.value=z.state.pointShadow,Mt.hemisphereLights.value=z.state.hemi,Mt.sunShadowMatrix.value=z.state.sunShadowMatrix,Mt.sunShadowCascade.value=z.state.sunShadowCascade,Mt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Mt.spotLightMatrix.value=z.state.spotLightMatrix,Mt.spotLightMap.value=z.state.spotLightMap,Mt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=b.state.lightProbeGridArray.length>0,B.currentProgram=Gt,B.uniformsList=null,Gt}function Wo(v){if(v.uniformsList===null){const R=v.currentProgram.getUniforms();v.uniformsList=cr.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function Xo(v,R){const k=G.get(v);k.outputColorSpace=R.outputColorSpace,k.batching=R.batching,k.batchingColor=R.batchingColor,k.instancing=R.instancing,k.instancingColor=R.instancingColor,k.instancingMorph=R.instancingMorph,k.skinning=R.skinning,k.morphTargets=R.morphTargets,k.morphNormals=R.morphNormals,k.morphColors=R.morphColors,k.morphTargetsCount=R.morphTargetsCount,k.numClippingPlanes=R.numClippingPlanes,k.numIntersection=R.numClipIntersection,k.vertexAlphas=R.vertexAlphas,k.vertexTangents=R.vertexTangents,k.toneMapping=R.toneMapping}function oh(v,R){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(R.matrixWorld);for(let k=0,B=v.length;k<B;k++){const z=v[k];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function lh(v,R,k,B,z){R.isScene!==!0&&(R=Ge),X.resetTextureUnits();const dt=R.fog,gt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?R.environment:null,ut=nt===null?D.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:kt.workingColorSpace,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Et=it.get(B.envMap||gt,vt),Ft=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Gt=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Mt=!!k.morphAttributes.position,Jt=!!k.morphAttributes.normal,_e=!!k.morphAttributes.color;let ce=Mn;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ce=D.toneMapping);const ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Le=ie!==void 0?ie.length:0,pt=G.get(B),Oe=b.state.lights;if(Yt===!0&&(ae===!0||v!==$)){const le=v===$&&B.id===q;At.setState(B,v,le)}let Xt=!1;B.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Oe.state.version||pt.outputColorSpace!==ut||z.isBatchedMesh&&pt.batching===!1||!z.isBatchedMesh&&pt.batching===!0||z.isBatchedMesh&&pt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&pt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&pt.instancing===!1||!z.isInstancedMesh&&pt.instancing===!0||z.isSkinnedMesh&&pt.skinning===!1||!z.isSkinnedMesh&&pt.skinning===!0||z.isInstancedMesh&&pt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&pt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&pt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&pt.instancingMorph===!1&&z.morphTexture!==null||pt.envMap!==Et||B.fog===!0&&pt.fog!==dt||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==At.numPlanes||pt.numIntersection!==At.numIntersection)||pt.vertexAlphas!==Ft||pt.vertexTangents!==Gt||pt.morphTargets!==Mt||pt.morphNormals!==Jt||pt.morphColors!==_e||pt.toneMapping!==ce||pt.morphTargetsCount!==Le||!!pt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Xt=!0):(Xt=!0,pt.__version=B.version);let Ke=pt.currentProgram;Xt===!0&&(Ke=ws(B,R,z),O&&B.isNodeMaterial&&O.onUpdateProgram(B,Ke,pt));let pn=!1,Hn=!1,_i=!1;const te=Ke.getUniforms(),me=pt.uniforms;if(m.useProgram(Ke.program)&&(pn=!0,Hn=!0,_i=!0),B.id!==q&&(q=B.id,Hn=!0),pt.needsLights){const le=oh(b.state.lightProbeGridArray,z);pt.lightProbeGrid!==le&&(pt.lightProbeGrid=le,Hn=!0)}if(pn||$!==v){m.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),te.setValue(L,"projectionMatrix",v.projectionMatrix),te.setValue(L,"viewMatrix",v.matrixWorldInverse);const Vn=te.map.cameraPosition;Vn!==void 0&&Vn.setValue(L,he.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&te.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&te.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),$!==v&&($=v,Hn=!0,_i=!0)}if(pt.needsLights&&(Oe.state.sunShadowMap.length>0&&te.setValue(L,"sunShadowMap",Oe.state.sunShadowMap,X),Oe.state.directionalShadowMap.length>0&&te.setValue(L,"directionalShadowMap",Oe.state.directionalShadowMap,X),Oe.state.spotShadowMap.length>0&&te.setValue(L,"spotShadowMap",Oe.state.spotShadowMap,X),Oe.state.pointShadowMap.length>0&&te.setValue(L,"pointShadowMap",Oe.state.pointShadowMap,X)),z.isSkinnedMesh){te.setOptional(L,z,"bindMatrix"),te.setOptional(L,z,"bindMatrixInverse");const le=z.skeleton;le&&(le.boneTexture===null&&le.computeBoneTexture(),te.setValue(L,"boneTexture",le.boneTexture,X))}z.isBatchedMesh&&(te.setOptional(L,z,"batchingTexture"),te.setValue(L,"batchingTexture",z._matricesTexture,X),te.setOptional(L,z,"batchingIdTexture"),te.setValue(L,"batchingIdTexture",z._indirectTexture,X),te.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&te.setValue(L,"batchingColorTexture",z._colorsTexture,X));const Gn=k.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&P.update(z,k,Ke),(Hn||pt.receiveShadow!==z.receiveShadow)&&(pt.receiveShadow=z.receiveShadow,te.setValue(L,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&R.environment!==null&&(me.envMapIntensity.value=R.environmentIntensity),me.dfgLUT!==void 0&&(me.dfgLUT.value=Gg()),Hn){if(te.setValue(L,"toneMappingExposure",D.toneMappingExposure),pt.needsLights&&ch(me,_i),dt&&B.fog===!0&&yt.refreshFogUniforms(me,dt),yt.refreshMaterialUniforms(me,B,j,Y,b.state.transmissionRenderTarget[v.id]),pt.needsLights&&pt.lightProbeGrid){const le=pt.lightProbeGrid;me.probesSH.value=le.texture,me.probesMin.value.copy(le.boundingBox.min),me.probesMax.value.copy(le.boundingBox.max),me.probesResolution.value.copy(le.resolution)}cr.upload(L,Wo(pt),me,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(cr.upload(L,Wo(pt),me,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&te.setValue(L,"center",z.center),te.setValue(L,"modelViewMatrix",z.modelViewMatrix),te.setValue(L,"normalMatrix",z.normalMatrix),te.setValue(L,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const le=B.uniformsGroups;for(let Vn=0,xi=le.length;Vn<xi;Vn++){const Yo=le[Vn];tt.update(Yo,Ke),tt.bind(Yo,Ke)}}return Ke}function ch(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.sunLights.needsUpdate=R,v.sunLightShadows.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function hh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(v,R,k){const B=G.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(v.texture).__webglTexture=R,G.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,R){const k=G.get(v);k.__webglFramebuffer=R,k.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,k=0){nt=v,Z=R,W=k;let B=null,z=!1,dt=!1;if(v){const ut=G.get(v);if(ut.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(L.FRAMEBUFFER,ut.__webglFramebuffer),et.copy(v.viewport),Rt.copy(v.scissor),bt=v.scissorTest,m.viewport(et),m.scissor(Rt),m.setScissorTest(bt),q=-1;return}else if(ut.__webglFramebuffer===void 0)X.setupRenderTarget(v);else if(ut.__hasExternalTextures)X.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ft=v.depthTexture;if(ut.__boundDepthTexture!==Ft){if(Ft!==null&&G.has(Ft)&&(v.width!==Ft.image.width||v.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(v)}}const vt=v.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(dt=!0);const Et=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Et[R])?B=Et[R][k]:B=Et[R],z=!0):v.samples>0&&X.useMultisampledRTT(v)===!1?B=G.get(v).__webglMultisampledFramebuffer:Array.isArray(Et)?B=Et[k]:B=Et,et.copy(v.viewport),Rt.copy(v.scissor),bt=v.scissorTest}else et.copy(mt).multiplyScalar(j).floor(),Rt.copy(zt).multiplyScalar(j).floor(),bt=Se;if(k!==0&&(B=V),m.bindFramebuffer(L.FRAMEBUFFER,B)&&m.drawBuffers(v,B),m.viewport(et),m.scissor(Rt),m.setScissorTest(bt),z){const ut=G.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+R,ut.__webglTexture,k)}else if(dt){const ut=R;for(let vt=0;vt<v.textures.length;vt++){const Et=G.get(v.textures[vt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+vt,Et.__webglTexture,k,ut)}}else if(v!==null&&k!==0){const ut=G.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ut.__webglTexture,k)}q=-1};function qo(v){const R=G.get(v);return(R.__readFormat!==v.format||R.__readType!==v.type)&&(R.__readFormat=v.format,R.__readType=v.type,R.__formatReadable=E.textureFormatReadable(v.format),R.__typeReadable=E.textureTypeReadable(v.type)),R}this.readRenderTargetPixels=function(v,R,k,B,z,dt,gt,ut=0){if(!(v&&v.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&gt!==void 0&&(vt=vt[gt]),vt){m.bindFramebuffer(L.FRAMEBUFFER,vt);try{const Et=v.textures[ut],Ft=Et.format,Gt=Et.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ut);const Mt=qo(Et);if(Mt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-B&&k>=0&&k<=v.height-z&&L.readPixels(R,k,B,z,lt.convert(Ft),lt.convert(Gt),dt)}finally{const Et=nt!==null?G.get(nt).__webglFramebuffer:null;m.bindFramebuffer(L.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(v,R,k,B,z,dt,gt,ut=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&gt!==void 0&&(vt=vt[gt]),vt)if(R>=0&&R<=v.width-B&&k>=0&&k<=v.height-z){m.bindFramebuffer(L.FRAMEBUFFER,vt);const Et=v.textures[ut],Ft=Et.format,Gt=Et.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ut);const Mt=qo(Et);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),L.readPixels(R,k,B,z,lt.convert(Ft),lt.convert(Gt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const _e=nt!==null?G.get(nt).__webglFramebuffer:null;m.bindFramebuffer(L.FRAMEBUFFER,_e);const ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Xh(L,ce,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Jt),L.deleteSync(ce),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,R=null,k=0){const B=Math.pow(2,-k),z=Math.floor(v.image.width*B),dt=Math.floor(v.image.height*B),gt=R!==null?R.x:0,ut=R!==null?R.y:0;X.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,gt,ut,z,dt),m.unbindTexture()},this.copyTextureToTexture=function(v,R,k=null,B=null,z=0,dt=0){let gt,ut,vt,Et,Ft,Gt,Mt,Jt,_e;const ce=v.isCompressedTexture?v.mipmaps[dt]:v.image;if(k!==null)gt=k.max.x-k.min.x,ut=k.max.y-k.min.y,vt=k.isBox3?k.max.z-k.min.z:1,Et=k.min.x,Ft=k.min.y,Gt=k.isBox3?k.min.z:0;else{const me=Math.pow(2,-z);gt=Math.floor(ce.width*me),ut=Math.floor(ce.height*me),v.isDataArrayTexture?vt=ce.depth:v.isData3DTexture?vt=Math.floor(ce.depth*me):vt=1,Et=0,Ft=0,Gt=0}B!==null?(Mt=B.x,Jt=B.y,_e=B.z):(Mt=0,Jt=0,_e=0);const ie=lt.convert(R.format),Le=lt.convert(R.type);let pt;R.isData3DTexture?(X.setTexture3D(R,0),pt=L.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(X.setTexture2DArray(R,0),pt=L.TEXTURE_2D_ARRAY):(X.setTexture2D(R,0),pt=L.TEXTURE_2D),m.activeTexture(L.TEXTURE0),m.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,R.flipY),m.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),m.pixelStorei(L.UNPACK_ALIGNMENT,R.unpackAlignment);const Oe=m.getParameter(L.UNPACK_ROW_LENGTH),Xt=m.getParameter(L.UNPACK_IMAGE_HEIGHT),Ke=m.getParameter(L.UNPACK_SKIP_PIXELS),pn=m.getParameter(L.UNPACK_SKIP_ROWS),Hn=m.getParameter(L.UNPACK_SKIP_IMAGES);m.pixelStorei(L.UNPACK_ROW_LENGTH,ce.width),m.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ce.height),m.pixelStorei(L.UNPACK_SKIP_PIXELS,Et),m.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),m.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt);const _i=v.isDataArrayTexture||v.isData3DTexture,te=R.isDataArrayTexture||R.isData3DTexture;if(v.isDepthTexture){const me=G.get(v),Gn=G.get(R),le=G.get(me.__renderTarget),Vn=G.get(Gn.__renderTarget);m.bindFramebuffer(L.READ_FRAMEBUFFER,le.__webglFramebuffer),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let xi=0;xi<vt;xi++)_i&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(v).__webglTexture,z,Gt+xi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(R).__webglTexture,dt,_e+xi)),L.blitFramebuffer(Et,Ft,gt,ut,Mt,Jt,gt,ut,L.DEPTH_BUFFER_BIT,L.NEAREST);m.bindFramebuffer(L.READ_FRAMEBUFFER,null),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||G.has(v)){const me=G.get(v),Gn=G.get(R);m.bindFramebuffer(L.READ_FRAMEBUFFER,I),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,H);for(let le=0;le<vt;le++)_i?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.__webglTexture,z,Gt+le):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,z),te?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Gn.__webglTexture,dt,_e+le):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Gn.__webglTexture,dt),z!==0?L.blitFramebuffer(Et,Ft,gt,ut,Mt,Jt,gt,ut,L.COLOR_BUFFER_BIT,L.NEAREST):te?L.copyTexSubImage3D(pt,dt,Mt,Jt,_e+le,Et,Ft,gt,ut):L.copyTexSubImage2D(pt,dt,Mt,Jt,Et,Ft,gt,ut);m.bindFramebuffer(L.READ_FRAMEBUFFER,null),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else te?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(pt,dt,Mt,Jt,_e,gt,ut,vt,ie,Le,ce.data):R.isCompressedArrayTexture?L.compressedTexSubImage3D(pt,dt,Mt,Jt,_e,gt,ut,vt,ie,ce.data):L.texSubImage3D(pt,dt,Mt,Jt,_e,gt,ut,vt,ie,Le,ce):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,dt,Mt,Jt,gt,ut,ie,Le,ce.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,dt,Mt,Jt,ce.width,ce.height,ie,ce.data):L.texSubImage2D(L.TEXTURE_2D,dt,Mt,Jt,gt,ut,ie,Le,ce);m.pixelStorei(L.UNPACK_ROW_LENGTH,Oe),m.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xt),m.pixelStorei(L.UNPACK_SKIP_PIXELS,Ke),m.pixelStorei(L.UNPACK_SKIP_ROWS,pn),m.pixelStorei(L.UNPACK_SKIP_IMAGES,Hn),dt===0&&R.generateMipmaps&&L.generateMipmap(pt),m.unbindTexture()},this.initRenderTarget=function(v){G.get(v).__webglFramebuffer===void 0&&X.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?X.setTextureCube(v,0):v.isData3DTexture?X.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?X.setTexture2DArray(v,0):X.setTexture2D(v,0),m.unbindTexture()},this.resetState=function(){Z=0,W=0,nt=null,m.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}const ec={type:"change"},wo={type:"start"},Qc={type:"end"},nr=new vo,nc=new Dn,kg=Math.cos(70*Kh.DEG2RAD),Ee=new C,Ve=2*Math.PI,$t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ma=1e-6;class Wg extends ku{constructor(t,e=null){super(t,e),this.state=$t.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new jn,this._lastTargetPosition=new C,this._quat=new jn().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dl,this._sphericalDelta=new Dl,this._scale=1,this._panOffset=new C,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new C,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qg.bind(this),this._onPointerDown=Xg.bind(this),this._onPointerUp=Yg.bind(this),this._onContextMenu=t0.bind(this),this._onMouseWheel=Jg.bind(this),this._onKeyDown=Qg.bind(this),this._onTouchStart=jg.bind(this),this._onTouchMove=$g.bind(this),this._onMouseDown=Kg.bind(this),this._onMouseMove=Zg.bind(this),this._interceptControlDown=e0.bind(this),this._interceptControlUp=n0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=$t.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ec),this.update(),this.state=$t.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===$t.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),s<-Math.PI?s+=Ve:s>Math.PI&&(s-=Ve),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ee.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(nr.origin.copy(this.object.position),nr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nr.direction))<kg?this.object.lookAt(this.target):(nc.setFromNormalAndCoplanarPoint(this.object.up,this.target),nr.intersectPlane(nc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ma||this._lastTargetPosition.distanceToSquared(this.target)>ma?(this.dispatchEvent(ec),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ee.copy(s).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Xg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function qg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Yg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qc),this.state=$t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Kg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=$t.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=$t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=$t.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=$t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=$t.PAN}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(wo)}function Zg(i){switch(this.state){case $t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case $t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case $t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Jg(i){this.enabled===!1||this.enableZoom===!1||this.state!==$t.NONE||(i.preventDefault(),this.dispatchEvent(wo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Qc))}function Qg(i){this.enabled!==!1&&this._handleKeyDown(i)}function jg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=$t.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=$t.TOUCH_PAN;break;default:this.state=$t.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=$t.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=$t.TOUCH_DOLLY_ROTATE;break;default:this.state=$t.NONE}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(wo)}function $g(i){switch(this._trackPointer(i),this.state){case $t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case $t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case $t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case $t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=$t.NONE}}function t0(i){this.enabled!==!1&&i.preventDefault()}function e0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ds=new C;function Je(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;ds.copy(t),ds[n]=0,ds.normalize();const l=.5*a/(a+o),h=1-ds.angleTo(i)/c;return Math.sign(ds[e])===1?h*l:o/(a+o)+l+l*(1-h)}class Ro extends yn{constructor(t=1,e=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new C,l=new C,h=new C(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,_=f.length/6,M=new C,g=.5/a;for(let p=0,T=0;p<f.length;p+=3,T+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),f[p+0]=h.x*Math.sign(c.x)+l.x*r,f[p+1]=h.y*Math.sign(c.y)+l.y*r,f[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/_)){case 0:M.set(1,0,0),d[T+0]=Je(M,l,"z","y",r,n),d[T+1]=1-Je(M,l,"y","z",r,e);break;case 1:M.set(-1,0,0),d[T+0]=1-Je(M,l,"z","y",r,n),d[T+1]=1-Je(M,l,"y","z",r,e);break;case 2:M.set(0,1,0),d[T+0]=1-Je(M,l,"x","z",r,t),d[T+1]=Je(M,l,"z","x",r,n);break;case 3:M.set(0,-1,0),d[T+0]=1-Je(M,l,"x","z",r,t),d[T+1]=1-Je(M,l,"z","x",r,n);break;case 4:M.set(0,0,1),d[T+0]=1-Je(M,l,"x","y",r,t),d[T+1]=1-Je(M,l,"y","x",r,e);break;case 5:M.set(0,0,-1),d[T+0]=Je(M,l,"x","y",r,t),d[T+1]=1-Je(M,l,"y","x",r,e);break}}static fromJSON(t){return new Ro(t.width,t.height,t.depth,t.segments,t.radius)}}class i0 extends Rc{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new yn;t.deleteAttribute("uv");const e=new mi({side:He}),n=new mi,s=new Gc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new se(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new xu(t,n,6),o=new Me;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new se(t,Bi(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new se(t,Bi(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new se(t,Bi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new se(t,Bi(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new se(t,Bi(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const d=new se(t,Bi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Bi(i){return new Pu({color:0,emissive:16777215,emissiveIntensity:i})}const Co="data:image/png;base64,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",we=new Rc;we.background=new Dt(15593972);we.fog=new xo(15593972,14,34);const tn=new qe(45,innerWidth/innerHeight,.05,100),jc=new C(4.9,3.4,5.3),$c=new C(-.3,1.15,0);tn.position.copy(jc);const zn=new Vg({antialias:!0});zn.setSize(innerWidth,innerHeight);zn.setPixelRatio(Math.min(devicePixelRatio,2));zn.shadowMap.enabled=!0;zn.shadowMap.type=ac;document.getElementById("app").appendChild(zn.domElement);const s0=new eo(zn);we.environment=s0.fromScene(new i0,.04).texture;we.environmentIntensity=.5;we.add(new Fu(16777215,12897492,.75));const ni=new Vc(16777215,1.5);ni.position.set(5,8,5);ni.castShadow=!0;ni.shadow.mapSize.set(2048,2048);ni.shadow.camera.left=-6;ni.shadow.camera.right=6;ni.shadow.camera.top=6;ni.shadow.camera.bottom=-6;we.add(ni);const th=new Vc(15266040,.55);th.position.set(-5,4,-5);we.add(th);const eh=new Gc(16774890,14,5.5);eh.position.set(0,1.6,0);we.add(eh);const Ce=new Wg(tn,zn.domElement);Ce.target.copy($c);Ce.enableDamping=!0;Ce.maxPolarAngle=Math.PI*.495;Ce.minDistance=.8;Ce.maxDistance=16;document.getElementById("logoImg").src=Co;const ve=(i,t={})=>new mi({color:i,roughness:.55,metalness:.08,...t});function xt(i,t,e,n,s=0,r=0,a=0,o=we){const c=new se(new yn(i,t,e),n);return c.position.set(s,r,a),c.castShadow=!0,c.receiveShadow=!0,o.add(c),c}function Ln(i,t,e,n,s,r=0,a=0,o=0,c=we){const l=new se(new Ro(i,t,e,3,n),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,c.add(l),l}function r0(i,t,e,n,s=0,r=0,a=0,o=we,c=24){const l=new se(new Eo(i,t,e,c),n);return l.position.set(s,r,a),l.castShadow=!0,l.receiveShadow=!0,o.add(l),l}const Mr=new un;we.add(Mr);function Kn(i,t,e,n,s="#1e3a5f",r=1){const a=document.createElement("canvas"),o=18,c=a.getContext("2d");c.font="bold 44px 'Microsoft YaHei'";const l=Math.ceil(c.measureText(i).width)+o*2;a.width=l,a.height=72;const h=a.getContext("2d");h.fillStyle="rgba(255,255,255,0.92)",h.beginPath(),h.roundRect(0,0,l,72,14),h.fill(),h.strokeStyle=s,h.lineWidth=3,h.stroke(),h.fillStyle=s,h.font="bold 44px 'Microsoft YaHei'",h.textAlign="center",h.textBaseline="middle",h.fillText(i,l/2,38);const f=new As(a),u=new mu(new Dc({map:f,transparent:!0,depthTest:!1})),d=.09*r;return u.scale.set(d*(l/72),d,1),u.position.set(t,e,n),Mr.add(u),u}function ic(i,t,e,n=!0){const r=document.createElement("canvas"),a=r.getContext("2d");a.font=`${n?"bold ":""}100px 'Microsoft YaHei'`;const o=a.measureText(i).width;r.width=Math.ceil(o)+24,r.height=Math.ceil(100*1.3);const c=r.getContext("2d");c.font=`${n?"bold ":""}100px 'Microsoft YaHei'`,c.fillStyle=e,c.textAlign="center",c.textBaseline="middle",c.fillText(i,r.width/2,r.height/2+100*.04);const l=new As(r);return new se(new ei(t*(r.width/r.height),t),new Zi({map:l,transparent:!0}))}function gs(i,t=1){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle="#262c33",n.fillRect(0,0,256,256),n.strokeStyle="#8a939e",n.lineWidth=4;const s=13,r=Math.sqrt(3)*s;for(let o=-1;o*1.5*s<256+s;o++)for(let c=-1;c*r<256+r;c++){const l=c*r+(o%2?r/2:0),h=o*1.5*s;n.beginPath();for(let f=0;f<6;f++){const u=Math.PI/3*f,d=l+s*Math.cos(u),_=h+s*Math.sin(u);f?n.lineTo(d,_):n.moveTo(d,_)}n.closePath(),n.stroke()}const a=new As(e);return a.wrapS=a.wrapT=Ki,a.repeat.set(i,t),new mi({map:a,roughness:.6,metalness:.2})}function a0(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#f4f7fa",t.fillRect(0,0,256,256),t.fillStyle="#c9d4de";for(let n=0;n<256;n+=14)for(let s=n/14%2?7:0;s<256;s+=14)t.fillRect(s,n,4,4);const e=new As(i);return e.wrapS=e.wrapT=Ki,e.repeat.set(10,8),new mi({map:e,roughness:.6,metalness:.05})}class o0{constructor(t,e,n=16,s=4,r=.045){this.group=new un,this.offset=0,this.curve=new yu(t),this.len=this.curve.getLength(),this.n=n,this.lanes=s;const a=t[t.length-1].clone().sub(t[0]).normalize(),o=new C().crossVectors(a,new C(0,1,0));o.lengthSq()<1e-6&&o.set(1,0,0),o.normalize(),this.laneOffsets=[];for(let l=0;l<s;l++)this.laneOffsets.push(o.clone().multiplyScalar((l-(s-1)/2)*r));const c=new So({color:e,transparent:!0,opacity:.95});for(let l=0;l<n*s;l++){const h=new ke;h.setAttribute("position",new en(new Float32Array(6),3));const f=new Uc(h,c);f.frustumCulled=!1,this.group.add(f)}}update(t,e=1){this.offset=(this.offset+t*e*.12)%1;const n=.07;for(let s=0;s<this.n;s++){const r=(this.offset+s/this.n)%1,a=Math.min(r+n,1),o=this.curve.getPointAt(r),c=this.curve.getPointAt(a);for(let l=0;l<this.lanes;l++){const h=this.laneOffsets[l],f=this.group.children[s*this.lanes+l],u=f.geometry.getAttribute("position");u.setXYZ(0,o.x+h.x,o.y+h.y,o.z+h.z),u.setXYZ(1,c.x+h.x,c.y+h.y,c.z+h.z),u.needsUpdate=!0,f.visible=a>r}}}}const Po=[],Nt=(i,t,e)=>new C(i,t,e);function ii(i,t,e=10,n=3,s=.045){const r=new o0(i,t,e,n,s);return Po.push(r),we.add(r.group),r}{const i=new se(new ei(30,30),ve(14410472,{roughness:.95,metalness:0}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,we.add(i);const t=new Vu(16,32,12831956,13818594);t.material.transparent=!0,t.material.opacity=.5,we.add(t)}const Sr=document.createElement("canvas");Sr.width=Sr.height=256;const Er=Sr.getContext("2d");Er.fillStyle="#b2b2b2";Er.fillRect(0,0,256,256);for(let i=0;i<1100;i++){const t=Math.random();Er.fillStyle=t>.55?"#404040":t>.25?"#8a8a8a":"#d8d8d8",Er.fillRect(Math.random()*256,Math.random()*256,1.3,1.3)}const yr=new As(Sr);yr.wrapS=yr.wrapT=Ki;yr.repeat.set(5,5);const Qe=new Cu({color:16185337,roughness:.3,metalness:.15,clearcoat:1,clearcoatRoughness:.12,roughnessMap:yr}),Pn=ve(12373218,{roughness:.5}),Hi=ve(1929144,{roughness:.45}),sc=ve(13226713,{roughness:.4,metalness:.4}),ln=ve(14147302,{roughness:.3,metalness:.65}),hr=Qe.clone(),Zn=ve(3028026,{roughness:.7}),l0=ve(14146530,{roughness:.25,metalness:.75}),c0=ve(10471656,{roughness:.1,metalness:.1,transparent:!0,opacity:.4}),ue=new un;we.add(ue);const de=new un;ue.add(de);{xt(2.8,.04,2.4,ve(15002094,{roughness:.7}),0,.02,0,ue),xt(2.84,.05,2.44,Pn,0,.045,0,ue),xt(.95,2.36,.05,Qe,-.925,1.22,1.2,de),xt(.85,2.36,.05,Qe,.975,1.22,1.2,de),xt(1,.06,.05,Qe,.05,1.97,1.2,de),xt(1,.4,.05,Qe,.05,2.2,1.2,de),xt(.05,2.36,.05,Pn,-.45,1.22,1.2,de),xt(.05,2.36,.05,Pn,.55,1.22,1.2,de);const i=Ln(.95,1.88,.04,.015,Qe,.05,.99,1.23,de);Ln(.5,.6,.02,.01,c0,.05,1.35,1.255,de),xt(.03,.12,.03,Zn,-.32,1,1.245,de),i.material,xt(.05,2.36,2.4,Qe,-1.4,1.22,0,de),xt(.05,2.36,2.4,Qe,1.4,1.22,0,de),xt(2.8,2.36,.05,Qe,0,1.22,-1.2,de);for(let l=-1.2;l<=1.2;l+=.6)xt(.008,2.3,.006,Pn,l,1.19,-1.204,de);xt(2.82,.03,.02,Hi,0,2.355,1.206,de),xt(2.82,.03,.02,Hi,0,2.355,-1.206,de),xt(.02,.03,2.42,Hi,-1.406,2.355,0,de),xt(.02,.03,2.42,Hi,1.406,2.355,0,de),xt(2.8,.05,2.4,Qe,0,2.425,0,de);const t=new un;ue.add(t),xt(2.16,.06,.06,Pn,0,1.955,.87,t),xt(2.16,.06,.06,Pn,0,1.955,-.87,t),xt(.06,.06,1.74,Pn,-1.08,1.955,0,t),xt(.06,.06,1.74,Pn,1.08,1.955,0,t);const e=xt(2.1,.02,1.68,a0(),0,1.94,0,ue);e.material.emissive=new Dt(14674677),e.material.emissiveIntensity=.25,[[-1.08,-.87],[1.08,-.87],[-1.08,.87],[1.08,.87]].forEach(([l,h])=>xt(.02,.42,.02,sc,l,2.19,h,ue));const n=new mi({color:10406898,transparent:!0,opacity:.22,roughness:.3,depthWrite:!1}),s=xt(2.14,.4,1.72,n,0,2.16,0,ue);s.visible=!1,window.__plenum=s,[[-1.26,-1.06],[1.26,-1.06],[-1.26,1.06],[1.26,1.06]].forEach(([l,h])=>{Ln(.15,1.88,.15,.01,hr,l,.98,h,ue),xt(.008,.38,.13,gs(1,2.6),l-Math.sign(l)*.082,.3,h,ue),xt(.13,.38,.008,gs(1,2.6),l,.3,h-Math.sign(h)*.082,ue),xt(.17,.03,.17,Hi,l,.06,h,ue)}),xt(2.52,.18,.18,ln,0,1.86,.96,ue),xt(2.52,.18,.18,ln,0,1.86,-.96,ue),xt(.18,.18,1.92,ln,1.17,1.86,0,ue),xt(.18,.44,.18,ln,-1.26,2.06,.93,ue),xt(.2,.18,.18,ln,-1.35,2.2,.9,ue),[[.4,"送风接口"],[.9,"回风接口"]].forEach(([l,h])=>{xt(.03,.23,.3,Zn,-1.415,2.2,l,ue),xt(.44,.2,.26,ln,-1.64,2.2,l,ue),xt(.2,.39,.26,ln,-1.81,2.02,l,ue),xt(.18,.2,.26,ln,-1.96,1.845,l,ue),xt(.02,.23,.28,sc,-2.055,1.845,l,ue),xt(.025,.25,.3,ve(3621196),-2.08,1.845,l,ue),[[-.09,-.11],[.09,-.11],[-.09,.11],[.09,.11]].forEach(([f,u])=>xt(.045,.05,.05,ve(2041646,{metalness:.6,roughness:.35}),-2.105,1.845+f,l+u,ue)),Kn(h,-1.7,2.56,l)}),Kn("电磁对接口（Z 型风管下行）",-2.35,1.56,.65);const r=new se(new ei(.5,.1),new Zi({map:new Bc().load(Co),transparent:!0}));r.position.set(-.85,1.62,1.228),de.add(r);const a=ic("百级无菌方舱",.09,"#1d6fb8");a.position.set(-.85,1.42,1.228),de.add(a);const o=ic("小迪 one 系列",.055,"#56718c",!1);o.position.set(-.85,1.3,1.228),de.add(o),Kn("天花滤芯送风面（H14·百级层流）",0,2.58,.5),Kn("回风方柱 ×4",1.5,1.35,1.25),Kn("回风口（柱底）",1.5,.35,1.3),Kn("不锈钢回风管（三侧 U 型·对接侧不设）",0,2.52,-1.05);const c=Kn("方舱移门（带观察窗）",.05,.6,1.5);window.__doorLbl=c}const Qi=new un;Qi.rotation.y=-Math.PI/2;const Ar=-4.2,h0=-2.62;Qi.position.set(Ar,0,0);we.add(Qi);{const i=Qi,t=ve(3817801,{roughness:.6,metalness:.2}),e=ve(2501427,{roughness:.45,metalness:.2}),n=Pn,s=ve(14673386,{roughness:.4,metalness:.15}),r=ve(15844367,{emissive:15844367,emissiveIntensity:.55});xt(1.06,.07,.76,t,.55,.135,0,i),[[.12,-.3],[.98,-.3],[.12,.3],[.98,.3]].forEach(([h,f])=>{const u=r0(.05,.05,.04,ve(3621196),h,.05,f,i);u.rotation.z=Math.PI/2,u.rotation.y=Math.PI/2}),Ln(1.1,1.86,.8,.035,Qe,.55,1.03,0,i),xt(1.11,.012,.81,e,.55,1.918,.01,i),Ln(1.14,.05,.8,.02,n,.55,1.95,.02,i),Ln(.6,.44,.1,.05,Qe,.55,1.48,.44,i),Ln(.54,.34,.025,.015,l0,.55,1.48,.492,i),Ln(.5,.3,.02,.01,e,.55,1.48,.497,i),xt(.47,.264,.01,ve(661026,{emissive:670282,emissiveIntensity:.6}),.55,1.48,.508,i),Ln(.98,1.11,.03,.04,n,.55,.735,.407,i),xt(.98,.014,.032,Hi,.55,1.283,.407,i);const a=new se(new ei(.34,.068),new Zi({map:new Bc().load(Co),transparent:!0}));a.position.set(.55,1.02,.426),i.add(a);const o=gs(1.8);xt(.006,.36,.64,o,.001,.34,0,i),xt(.006,.36,.64,o,1.099,.34,0,i),xt(1,.36,.006,gs(2.8),.55,.34,-.4005,i),xt(.006,.3,.36,gs(1.2),1.099,1.15,.15,i);const c=new Zi({color:16096779});window.__ledMat=c;const l=(h,f,u)=>{if(h){const d=u>0?1:-1;xt(1.052,.03,.01,Zn,f,1.7,u,i);const _=new se(new yn(1.04,.02,.008),c);_.position.set(f,1.7,u+d*.006),i.add(_)}else{const d=f>.55?1:-1;xt(.01,.03,.752,Zn,f,1.7,u,i);const _=new se(new yn(.008,.02,.74),c);_.position.set(f+d*.006,1.7,u),i.add(_)}};l(!0,.55,.402),l(!0,.55,-.402),l(!1,-.001,0),l(!1,1.101,0);{const h=new un;h.position.set(1,1.13,-.402),i.add(h),h.add(xt(.86,1.02,.016,ve(16580094,{roughness:.38}),-.44,0,0)),h.add(xt(.03,.2,.03,t,-.8,0,-.02)),h.add(xt(.05,.05,.02,t,-.8,.09,-.006)),h.add(xt(.05,.05,.02,t,-.8,-.09,-.006)),h.add(xt(.2,.07,.02,ve(14251782,{emissive:14251782,emissiveIntensity:.25}),-.44,.4,-.012))}[.4,.9].forEach(h=>{xt(.26,.03,.03,Zn,h,1.955,-.402,i),xt(.26,.03,.03,Zn,h,1.735,-.402,i),xt(.03,.19,.03,Zn,h-.135,1.845,-.402,i),xt(.03,.19,.03,Zn,h+.135,1.845,-.402,i),xt(.24,.19,.14,s,h,1.845,-.46,i),xt(.28,.23,.02,s,h,1.845,-.54,i),xt(.3,.25,.025,ve(3621196),h,1.845,-.565,i),[[-.11,-.09],[.11,-.09],[-.11,.09],[.11,.09]].forEach(([f,u])=>xt(.05,.05,.045,r.clone(),h+f,1.845+u,-.585,i))})}const rc=Kn("外部机组（待对接）",Ar-.4,2.3,.55);ii([Nt(-1.4,2.2,.4),Nt(-1.1,2.18,.3),Nt(-.5,2.16,.1),Nt(0,2.16,0)],2450411,12,4,.06);ii([Nt(-.6,1.94,-.4),Nt(-.6,1.2,-.4),Nt(-.6,.5,-.4)],2450411,8,3,.22);ii([Nt(0,1.94,.2),Nt(0,1.2,.2),Nt(0,.5,.2)],2450411,8,3,.22);ii([Nt(.6,1.94,.5),Nt(.6,1.2,.5),Nt(.6,.5,.5)],2450411,8,3,.22);ii([Nt(1.2,.25,1),Nt(1.26,1.7,1.06),Nt(1.17,1.86,.96),Nt(0,1.86,.96),Nt(-1.17,1.86,.96),Nt(-1.26,2.05,.93),Nt(-1.44,2.2,.9)],366185,16,3);ii([Nt(-1.2,.25,-1),Nt(-1.26,1.7,-1.06),Nt(-1.17,1.86,-.96),Nt(0,1.86,-.96),Nt(1.17,1.86,-.96),Nt(1.17,1.86,.96),Nt(0,1.86,.96),Nt(-1.17,1.86,.96),Nt(-1.26,2.05,.93),Nt(-1.44,2.2,.9)],366185,22,3);const Do=ii([Nt(-2.25,1.845,.4),Nt(-2,1.845,.4),Nt(-1.86,1.845,.4),Nt(-1.81,2.02,.4),Nt(-1.76,2.2,.4),Nt(-1.44,2.2,.4)],6583435,10,3),Lo=ii([Nt(-1.44,2.2,.9),Nt(-1.76,2.2,.9),Nt(-1.81,2.02,.9),Nt(-1.86,1.845,.9),Nt(-2,1.845,.9),Nt(-2.25,1.845,.9)],6583435,10,3);Do.group.visible=!1;Lo.group.visible=!1;let qi=!0,so=!1,ys=!1,on=0;function bs(i,t){const e=document.getElementById(i);e.onclick=()=>{t(e),e.classList.toggle("on")}}bs("bFlow",()=>{qi=!qi,Po.forEach(i=>{i.group!==Do.group&&i.group!==Lo.group&&(i.group.visible=qi)})});bs("bLabel",()=>{Mr.visible=!Mr.visible});function nh(i){de.visible=!i,ln.transparent=i,hr.transparent=i,ln.opacity=i?.3:1,hr.opacity=i?.32:1,ln.needsUpdate=!0,hr.needsUpdate=!0,window.__plenum.visible=i;const t=window.__doorLbl;t&&(t.visible=!i)}bs("bCut",()=>{nh(de.visible)});bs("bRot",()=>{so=!so});bs("bDock",()=>{ys=!ys});document.getElementById("bReset").onclick=()=>{tn.position.copy(jc),Ce.target.copy($c),Ce.update()};location.hash.includes("cut")&&(nh(!0),document.getElementById("bCut").classList.add("on"),tn.position.set(3.6,3.4,4.2),Ce.target.set(0,1,0),Ce.update());location.hash.includes("dock")&&(ys=!0,on=1,document.getElementById("bDock").classList.add("on"),tn.position.set(-4.6,2.6,4.4),Ce.target.set(-1.2,1,.4),Ce.update());location.hash.includes("face")&&(ys=!0,on=1,tn.position.set(-2,2,4.2),Ce.target.set(-2,1.95,0),Ce.update());addEventListener("resize",()=>{tn.aspect=innerWidth/innerHeight,tn.updateProjectionMatrix(),zn.setSize(innerWidth,innerHeight)});const u0=new Gu;function ih(){requestAnimationFrame(ih);const i=Math.min(u0.getDelta(),.05);qi&&Po.forEach(r=>r.update(i));const t=ys?1:0;on+=(t-on)*Math.min(i*2.2,1),Math.abs(t-on)<.002&&(on=t);const e=on<.5?2*on*on:1-Math.pow(-2*on+2,2)/2;Qi.position.x=Ar+(h0-Ar)*e,rc.position.x=Qi.position.x-.4;const n=on>.9;Do.group.visible=n&&qi,Lo.group.visible=n&&qi,rc.material.map.needsUpdate=!1;const s=window.__ledMat;if(s&&s.color.set(n?2278750:16096779),so){const r=i*.3,a=tn.position.clone().sub(Ce.target),o=a.x*Math.cos(r)-a.z*Math.sin(r),c=a.x*Math.sin(r)+a.z*Math.cos(r);tn.position.set(Ce.target.x+o,tn.position.y,Ce.target.z+c)}Ce.update(),zn.render(we,tn)}ih();
