/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","promise","ojs/ojdatasource-common"],function(a,g){a.Wb=function(a,b){this.Init();this.Oa=a;this.Jf=b;this.Tz()};o_("Cube",a.Wb,a);a.f.xa(a.Wb,a.f,"oj.Cube");a.Wb.prototype.Init=function(){a.Wb.O.Init.call(this)};a.Wb.prototype.dt=function(){var a=this.Yda(),b=[];Array.prototype.push.apply(b,a?a.dt():this.Ki);for(a=2;a<this.Ki.length;a++)b.push(this.Ki[a]);return b};a.f.j("Cube.prototype.getAxes",{dt:a.Wb.prototype.dt});a.Wb.prototype.BY=function(){return this.Ki};a.Wb.prototype.ht=
function(a){var b=this.Yda();a=b.QIa(a);for(a=b=b.tla(a,0,[]);Array.isArray(a)&&1===a.length;)if(a=a[0],!Array.isArray(a))return a;return b};a.f.j("Cube.prototype.getValues",{ht:a.Wb.prototype.ht});a.Wb.prototype.setPage=function(a){this.S_=a instanceof Array?a:[a]};a.Wb.prototype.eqa=function(c,b,d,e,f){var g=this.Jf,k=this.wca(c);if(!k)return!1;c=null;d<g.length?c=this.wca(d):(c={axis:d,levels:[]},g.push(c));d=k.levels;g=c.levels;c=b<d.length?d[b]:null;if(!c)return!1;e>=g.length?(g.push(c),d.splice(b,
1)):f===a.Wb.vT.SWAP?(d[b]=g[e],g[e]=c):(f===a.Wb.vT.AFTER&&e++,g.splice(e,0,c),g===d&&e<b&&b++,d.splice(b,1));this.Tz();return!0};a.f.j("Cube.prototype.pivot",{eqa:a.Wb.prototype.eqa});a.Wb.prototype.wca=function(a){for(var b=0;b<this.Jf.length;b++)if(this.Jf[b].axis===a)return this.Jf[b];return null};a.Wb.prototype.IQ=function(){return this.Jf};a.f.j("Cube.prototype.getLayout",{IQ:a.Wb.prototype.IQ});a.Wb.vT={BEFORE:"before",AFTER:"after",SWAP:"swap"};o_("Cube.PivotType",a.Wb.vT,a);a.Wb.prototype.tla=
function(a,b,d){var e=[];if(0===a.length)return b=d.slice(0),this.cm(b);var f=a.slice(1),g=a[0].start;a=a[0].count;for(d[b]=g;d[b]<g+a;d[b]++)e.push(this.tla(f,b+1,d));return e};a.Wb.prototype.QIa=function(a){var b=[];if(!a)return b;for(var d=Math.min(a.length,this.Ki.length),e=0;e<d;e++){var f=a[e];f instanceof Object&&(f.hasOwnProperty("start")||f.hasOwnProperty("count"))?f.hasOwnProperty("start")?f.hasOwnProperty("count")?b.push(this.YM(f.start,f.count,e)):b.push(this.YM(f.start,1,e)):b.push(this.YM(0,
f.count,e)):b.push(this.YM(f,1,e))}return b};a.Wb.prototype.YM=function(a,b,d){d=this.dt()[d].getExtent();if(a>=d||0>a)a=0;b=Math.min(b,d-a);return{start:a,index:a,count:b}};a.Wb.prototype.cm=function(c){var b=this.jza(c);return b&&(b=b.Ew(),0<b.length&&(b=this.p[b[0].key]))?new a.tj(b.value,c,b.XP,b.rows,b.kw):new a.tj(null,c,void 0,[])};a.Wb.prototype.ksa=function(){var a=this.dDa();this.S_=[];for(var b=0;b<a.length;b++)this.ns(a[b].axis,a[b].levels),this.S_.push({axis:a[b].axis,index:0});if(0===
a.length)for(a=this.BY(),b=0;b<a.length;b++)this.ns(a[b].axis,a[b].levels)};a.Wb.prototype.dDa=function(){for(var a=[],b=0;b<this.Jf.length;b++)1<this.Jf[b].axis&&a.push(this.Jf[b]);return a};a.Wb.prototype.BY=function(){for(var a=[],b=0;b<this.Jf.length;b++)2>this.Jf[b].axis&&a.push(this.Jf[b]);return a};a.Wb.prototype.Tz=function(){this.Ki=[];this.p=[];this.QW=[];this.ksa();if(null!==this.Oa)for(var c=0;c<this.Oa.length;c++){for(var b=new a.Xn,d=2;d<this.Ki.length;d++)b=this.Ki[d].L6(this.Oa[c],
b);for(var b=b.Ew(),e=0;e<b.length;e++){var d=b[e].key,f=this.QW[d];f||(f=this.QW[d]=this.WS(this.BY()));for(var g=new a.Xn,k=f.Ki.length,d=0;d<k;d++)g=f.Ki[d].L6(this.Oa[c],g);g=d=g.Ew();if(void 0!==b[e].sma)for(g=[],k=0;k<d.length;k++)g.push(b[e]);f.ZMa(d,g,this.Oa[c])}}};a.Wb.prototype.ZMa=function(a,b,d){for(var e=0;e<a.length;e++)this.p[a[e].key]=this.hxa(b[e],this.p[a[e].key],d)};a.Wb.prototype.Yda=function(){return this.QW[this.ACa(this.S_)]};a.Wb.prototype.ACa=function(c){var b=new a.Xn;if(c&&
0<c.length){c.sort(function(a,b){return a.axis-b.axis});for(var d=this.Ki,e=0;e<c.length;e++)b=d[c[e].axis].cK(c[e].index,b)}return b.Ew()[0].key};a.Wb.Kga=function(a){return a?void 0!==a.value&&null!==a.value:!1};a.Wb.prototype.Ee=function(a,b,d,e,f){d.push(e);e={};for(var g in f)f.hasOwnProperty(g)&&(e[g]=f[g]);e.value=a;e.XP=b;e.rows=d;return e};a.Wb.Bh=function(c){return a.Sa.od(c.value)?!1:!isNaN(c.value)};a.Wb.prototype.hxa=function(c,b,d){var e=this.YS(c.sma),f=e.FC,g=a.Wb.Kga(b),k=a.Wb.Kga(c),
l=g&&a.Wb.Bh(b),m=k&&a.Wb.Bh(c);switch(f){case a.sj.SUM:return g&&k?l&&m?this.Ee(b.value+c.value,f,b.rows,d,{}):this.Ee(NaN,f,b.rows,d,{}):k&&!g?m?this.Ee(c.value,f,[],d,{}):this.Ee(NaN,f,[],d,{}):b;case a.sj.AVERAGE:return g&&k?l&&m?this.Ee((b.YD+c.value)/(b.rows.length+1),f,b.rows,d,{YD:b.YD+c.value}):this.Ee(NaN,f,b.rows,d,{YD:b.YD}):k&&!g?m?this.Ee(c.value,f,[],d,{YD:c.value}):this.Ee(NaN,f,[],d,{YD:NaN}):b;case a.sj.VARIANCE:case a.sj.STDDEV:return g&&k?l&&m?(g=b.value+(c.value-b.value)/(b.rows.length+
1),this.Ee(g,f,b.rows,d,{kw:b.kw+(c.value-b.value)*(c.value-g)})):this.Ee(NaN,f,b.rows,d,{kw:NaN}):k&&!g?m?this.Ee(c.value,f,[],d,{kw:0}):this.Ee(NaN,f,[],d,{kw:NaN}):b;case a.sj.NONE:return this.Ee(null,f,g?b.rows:[],d,{});case a.sj.FIRST:return g?this.Ee(b.value,f,b.rows,d,{}):k?this.Ee(c.value,f,[],d,{}):b;case a.sj.MIN:return g&&k?l&&m?this.Ee(Math.min(b.value,c.value),f,b.rows,d,{}):this.Ee(NaN,f,b.rows,d,{}):k&&!g?m?this.Ee(c.value,f,[],d,{}):this.Ee(NaN,f,[],d,{}):b;case a.sj.MAX:return g&&
k?l&&m?this.Ee(Math.max(b.value,c.value),f,b.rows,d,{}):this.Ee(NaN,f,b.rows,d,{}):k&&!g?m?this.Ee(c.value,f,[],d,{}):this.Ee(NaN,f,[],d,{}):b;case a.sj.COUNT:return g&&k?this.Ee(b.value+1,f,b.rows,d,{}):k&&!g?this.Ee(1,f,[],d,{}):b;case a.sj.CUSTOM:return c=e.gd.call(this,g?b.value:void 0,k?c.value:void 0),this.Ee(c,f,g?b.rows:[],d,{})}};a.Wb.prototype.ns=function(c,b){c>=this.Ki.length&&Array.prototype.push.apply(this.Ki,Array(c-this.Ki.length+1));this.Ki[c]||(this.Ki[c]=new a.Ai(b,c,this));return this.Ki[c]};
a.Wb.prototype.jza=function(c){for(var b=this.dt(),d=new a.Xn,e=0;e<c.length;e++)d=b[e].cK(c[e],d);return d};a.Wb.prototype.jA=function(){a.A.Me()};a.Wb.prototype.WS=function(){a.A.Me()};a.Wb.prototype.XS=function(){a.A.Me()};a.Wb.prototype.YS=function(){a.A.Me();return{}};a.sj={SUM:"sum",AVERAGE:"avg",STDDEV:"stddev",VARIANCE:"variance",NONE:"none",FIRST:"first",MIN:"min",MAX:"max",COUNT:"count",CUSTOM:"custom"};o_("CubeAggType",a.sj,a);a.Id=function(a,b,d,e){this.Init();this.bg=[];this.ry=e;this.Yza=
d;this.p={};this.p.value=a;this.p.label=b};o_("CubeAxisValue",a.Id,a);a.f.xa(a.Id,a.f,"oj.CubeAxisValue");a.Id.prototype.Init=function(){a.Id.O.Init.call(this)};a.Id.prototype.hz=function(){return this.Yza};a.f.j("CubeAxisValue.prototype.getLevel",{hz:a.Id.prototype.hz});a.Id.prototype.getDepth=function(){return 1};a.f.j("CubeAxisValue.prototype.getDepth",{getDepth:a.Id.prototype.getDepth});a.Id.prototype.vna=function(){for(var a=[],b=this.ry;b&&b.ry;)a.unshift(b),b=b.ry;return a};a.f.j("CubeAxisValue.prototype.getParents",
{vna:a.Id.prototype.vna});a.Id.prototype.getChildren=function(){return this.bg};a.f.j("CubeAxisValue.prototype.getChildren",{getChildren:a.Id.prototype.getChildren});a.Id.prototype.getExtent=function(){if(-1<this.lB)return this.lB;if(this.bg&&0!==this.bg.length)for(var a=this.lB=0;a<this.getChildren().length;a++)this.lB+=this.getChildren()[a].getExtent();else this.lB=1;return this.lB};a.f.j("CubeAxisValue.prototype.getExtent",{getExtent:a.Id.prototype.getExtent});a.Id.prototype.getStart=function(){if(-1<
this.Rk)return this.Rk;if(!this.ry)return 0;for(var a=this.ry.getStart(),b=this.ry.bea(this);b;)a+=b.getExtent(),b=this.ry.bea(b);return this.Rk=a};a.f.j("CubeAxisValue.prototype.getStart",{getStart:a.Id.prototype.getStart});a.Id.prototype.jg=function(){return this.p.value};a.f.j("CubeAxisValue.prototype.getValue",{jg:a.Id.prototype.jg});a.Id.prototype.r3=function(){return this.p.label?this.p.label:this.jg()};a.f.j("CubeAxisValue.prototype.getLabel",{r3:a.Id.prototype.r3});a.Id.prototype.lsa=function(a){var b=
this.UBa();if(null===b)return null;if(b.pD())return this.hCa(a);if(a=a[b.attribute])for(b=0;b<this.bg.length;b++)if(this.bg[b].jg()===a)return this.bg[b];return null};a.Id.prototype.hCa=function(a){for(var b=0;b<this.bg.length;b++){var d=this.bg[b].jg();if(a.hasOwnProperty(d)&&a[d]===d)return this.bg[b]}return null};a.Id.prototype.UBa=function(){return this.bg&&0<this.bg.length?this.bg[0].hz():null};a.Id.prototype.msa=function(a){return this.yX(a,0,this.bg.length-1)};a.Id.prototype.yX=function(a,
b,d){if(b>d)return null;var e=Math.floor((b+d)/2),f=this.bg[e],g=f.getStart();return g>a?this.yX(a,b,e-1):g+f.getExtent()-1<a?this.yX(a,e+1,d):f};a.Id.prototype.ES=function(c,b,d){for(var e=0;e<this.bg.length;e++)if(this.bg[e].jg()===c)return this.bg[e];c=new a.Id(c,b,d,this);this.bg.push(c);return c};a.Id.prototype.nsa=function(){var a={};a[this.hz().attribute]=this.jg();return a};a.Id.prototype.bea=function(a){for(var b=0;b<this.bg.length;b++)if(this.bg[b]===a){if(0<b)return this.bg[b-1];break}return null};
a.Ai=function(c,b,d){this.Init();this.axis=b;this.Vga=[];for(b=0;b<c.length;b++)this.Vga.push(d.XS(c[b],this));this.GF=d;this.Kf=new a.Id(null,null,null,null)};o_("CubeAxis",a.Ai,a);a.f.xa(a.Ai,a.f,"oj.CubeAxis");a.Ai.prototype.Init=function(){a.Ai.O.Init.call(this)};a.Ai.prototype.Wq=function(){return this.Vga};a.f.j("CubeAxis.prototype.getLevels",{Wq:a.Ai.prototype.Wq});a.Ai.prototype.getExtent=function(){return this.Kf.getExtent()};a.f.j("CubeAxis.prototype.getExtent",{getExtent:a.Ai.prototype.getExtent});
a.Ai.prototype.ht=function(a){for(var b=[],d=this.Kf;d;)(d=d.msa(a))&&b.push(d);return b};a.f.j("CubeAxis.prototype.getValues",{ht:a.Ai.prototype.ht});a.Ai.prototype.rm=function(a){a=a?JSON.parse(a):{};for(var b=this.Kf,d=null;b;)d=b,b=b.lsa(a);return d?d.getStart():-1};a.f.j("CubeAxis.prototype.getIndex",{rm:a.Ai.prototype.rm});a.Ai.prototype.cK=function(a,b){return this.m6(a,this.Wq().length-1,b)};a.Ai.prototype.m6=function(a,b,d){a=this.ht(a);b=this.Wq()[b];for(var e=0;e<a.length;e++){var f=a[e];
f.hz().pD()?d.DS(f.jg()):d.KT(f);if(f.hz()===b)break}return d};a.Ai.prototype.L6=function(a,b){return this.GF.jA(this,0,this.Kf,a,b,!0)};a.tj=function(a,b,d,e,f){this.Init();this.p={};this.p.value=a;this.p.cSa=b;this.p.XP=d;this.p.rows=e;this.p.kw=f};o_("CubeDataValue",a.tj,a);a.f.xa(a.tj,a.f,"oj.CubeDataValue");a.tj.prototype.Init=function(){a.tj.O.Init.call(this)};a.tj.prototype.jg=function(){switch(this.p.XP){case a.sj.STDDEV:return Math.sqrt(this.Fea());case a.sj.VARIANCE:return this.Fea();default:return this.p.value}};
a.f.j("CubeDataValue.prototype.getValue",{jg:a.tj.prototype.jg});a.tj.prototype.nna=function(){return this.p.cSa};a.f.j("CubeDataValue.prototype.getIndices",{nna:a.tj.prototype.nna});a.tj.prototype.Cna=function(){return this.p.rows};a.f.j("CubeDataValue.prototype.getRows",{Cna:a.tj.prototype.Cna});a.tj.prototype.Pma=function(){return this.p.XP};a.f.j("CubeDataValue.prototype.getAggregation",{Pma:a.tj.prototype.Pma});a.tj.prototype.Fea=function(){if(isNaN(this.p.kw))return NaN;var a=this.p.rows.length;
return 1<a?this.p.kw/(a-1):0};a.Wn=function(c,b){var d=b.row?b.row.start:0,e=b.row?b.row.count:0,f=b.column?b.column.start:0,g=b.column?b.column.count:0;a.A.Ts(d,null);a.A.Ts(e,null);a.A.Ts(f,null);a.A.Ts(g,null);this.GF=c;this.o1={row:d,column:f};this.Kf=this.GF.ht([{start:f,count:g},{start:d,count:e}]);g=(d=Array.isArray(this.Kf))?this.Kf.length:1;0<g&&(e=d?this.Kf[0].length:1);this.eza={row:e,column:g}};o_("CubeCellSet",a.Wn,a);a.Wn.prototype.getData=function(a){var b=a.row;a=a.column;return(b=
Array.isArray(this.Kf)?this.Kf[a-this.o1.column][b-this.o1.row]:this.Kf)?b.jg():null};a.f.j("CubeCellSet.prototype.getData",{getData:a.Wn.prototype.getData});a.Wn.prototype.getMetadata=function(a){var b={keys:{}};b.keys.row=this.Mca(a,"row",2);b.keys.column=this.Mca(a,"column",1);return b};a.f.j("CubeCellSet.prototype.getMetadata",{getMetadata:a.Wn.prototype.getMetadata});a.Wn.prototype.Mca=function(c,b,d){var e=this.GF.dt();return void 0!==c[b]&&e.length>=d?(d=new a.Xn,d=e[a.bd.Xaa(b)].cK(c[b],d),
d.Ew()[0].key):null};a.Wn.prototype.getStart=function(a){return this.o1[a]};a.f.j("CubeCellSet.prototype.getStart",{getStart:a.Wn.prototype.getStart});a.Wn.prototype.getCount=function(a){return this.eza[a]};a.f.j("CubeCellSet.prototype.getCount",{getCount:a.Wn.prototype.getCount});a.vj=function(c,b,d){this.Init();this.vu=d;this.QV();a.vj.O.constructor.call(this,c,b)};o_("DataValueAttributeCube",a.vj,a);a.f.xa(a.vj,a.Wb,"oj.DataValueAttributeCube");a.vj.prototype.Oa=null;a.vj.prototype.Init=function(){a.vj.O.Init.call(this)};
a.vj.prototype.Tz=function(){a.vj.O.Tz.call(this)};a.vj.prototype.YS=function(a){return this.aB[a]};a.vj.prototype.XS=function(c,b){return c.dataValue?new a.ik(null,b,!0):new a.ik(c.attribute,b,!1)};a.vj.prototype.WS=function(c){return new a.vj(null,c,this.vu)};a.vj.prototype.jA=function(a,b,d,e,f,g){if(b>=a.Wq().length)return f;var k=a.Wq()[b];if(k.pD())return this.AJa(a,d,e,b,f);d=d.ES(e[k.attribute],null,k);g&&f.KT(d);return this.jA(a,b+1,d,e,f,g)};a.vj.prototype.AJa=function(a,b,d,e,f){for(var g=
!0,k=0;k<this.vu.length;k++){var l=this.vu[k].attribute,m=this.vu[k].label;d.hasOwnProperty(l)&&(m=b.ES(l,m,a.Wq()[e]),f.DS(l,d[l]),this.jA(a,e+1,m,d,f,g),g=!1)}return f};a.vj.prototype.QV=function(){this.aB=[];for(var c=0;c<this.vu.length;c++){var b=this.vu[c];this.aB[b.attribute]=b.aggregation?{FC:b.aggregation,gd:b.callback}:{FC:a.sj.SUM,gd:b.callback}}};a.Xn=function(){this.j_=[];this.p=[]};a.Xn.prototype.KT=function(a){this.j_.push(a)};a.Xn.prototype.DS=function(a,b){this.p.push({name:a,value:b})};
a.Xn.prototype.Ew=function(){var a=[],b=this.Oxa();if(0===this.p.length)a.push({key:JSON.stringify(b)});else for(var d=0;d<this.p.length;d++){var e=g.extend(!0,{},b);e[this.p[d].name]=this.p[d].name;a.push({key:JSON.stringify(e),sma:this.p[d].name,value:this.p[d].value})}return a};a.Xn.prototype.Oxa=function(){for(var a={},b=0;b<this.j_.length;b++){var d=this.j_[b].nsa(),e;for(e in d)d.hasOwnProperty(e)&&(a[e]=d[e])}return a};a.Sh=function(a,b,d,e){this.GF=b;this.mF=a;this.Rk=void 0===d?0:d;this.cza=
void 0===e?this.mF.getExtent():Math.min(e,this.mF.getExtent()-d);this.hca=d+e-1};o_("CubeHeaderSet",a.Sh,a);a.Sh.prototype.getData=function(a,b){var d=this.cm(a,b);return d?d.r3():null};a.f.j("CubeHeaderSet.prototype.getData",{getData:a.Sh.prototype.getData});a.Sh.prototype.getMetadata=function(c,b){var d=new a.Xn,d=this.mF.m6(c,b,d);return(d=d.Ew())&&0<d.length?{key:d[0].key}:null};a.f.j("CubeHeaderSet.prototype.getMetadata",{getMetadata:a.Sh.prototype.getMetadata});a.Sh.prototype.getLevelCount=
function(){return this.mF.Wq().length};a.f.j("CubeHeaderSet.prototype.getLevelCount",{getLevelCount:a.Sh.prototype.getLevelCount});a.Sh.prototype.getExtent=function(a,b){var d=this.cm(a,b),e=d.getExtent(),d=d.getStart(),f=d+e-1,g=a<d+e-1;d<this.Rk&&(e-=this.Rk-d);f>this.hca&&(e-=f-this.hca);return{extent:e,more:{before:a>d,after:g}}};a.f.j("CubeHeaderSet.prototype.getExtent",{getExtent:a.Sh.prototype.getExtent});a.Sh.prototype.getDepth=function(a,b){return this.cm(a,b).getDepth()};a.f.j("CubeHeaderSet.prototype.getDepth",
{getDepth:a.Sh.prototype.getDepth});a.Sh.prototype.getCount=function(){return this.cza};a.f.j("CubeHeaderSet.prototype.getCount",{getCount:a.Sh.prototype.getCount});a.Sh.prototype.getStart=function(){return this.Rk};a.f.j("CubeHeaderSet.prototype.getStart",{getStart:a.Sh.prototype.getStart});a.Sh.prototype.cm=function(a,b){void 0===b&&(b=0);var d=this.mF.ht(a);return d&&d.length>b?d[b]:null};a.bd=function(c){a.bd.O.constructor.call(this,c)};o_("CubeDataGridDataSource",a.bd,a);a.f.xa(a.bd,a.Mt,"oj.CubeDataGridDataSource");
a.bd.prototype.Lqa=function(a){this.data=a;this.Cca()};a.f.j("CubeDataGridDataSource.prototype.setCube",{Lqa:a.bd.prototype.Lqa});a.bd.prototype.setPage=function(a){this.data.setPage(a);this.Cca()};a.f.j("CubeDataGridDataSource.prototype.setPage",{setPage:a.bd.prototype.setPage});a.bd.prototype.Cca=function(){this.handleEvent("change",{source:this,operation:"refresh"})};a.bd.prototype.getCount=function(a){return(a=this.ns(a))?a.getExtent():0};a.f.j("CubeDataGridDataSource.prototype.getCount",{getCount:a.bd.prototype.getCount});
a.bd.prototype.getCountPrecision=function(){return"exact"};a.f.j("CubeDataGridDataSource.prototype.getCountPrecision",{getCountPrecision:a.bd.prototype.getCountPrecision});a.bd.prototype.fetchHeaders=function(c,b,d){var e=new a.Sh(this.ns(c.axis),this.data,c.start,c.count);b.success.call(d?d.success:void 0,e,c)};a.f.j("CubeDataGridDataSource.prototype.fetchHeaders",{fetchHeaders:a.bd.prototype.fetchHeaders});a.bd.prototype.fetchCells=function(c,b,d){for(var e={},f=0;f<c.length;f++){var g=void 0===
c[f].start?0:c[f].start;if("row"===c[f].axis){var k=void 0===c[f].count?this.data.dt()[1].getExtent():c[f].count;e.row={start:g,count:k}}"column"===c[f].axis&&(k=void 0===c[f].count?this.data.dt()[0].getExtent():c[f].count,e.column={start:g,count:k})}e=new a.Wn(this.data,e);b.success.call(d?d.success:void 0,e,c)};a.f.j("CubeDataGridDataSource.prototype.fetchCells",{fetchCells:a.bd.prototype.fetchCells});a.bd.prototype.keys=function(a){var b={},b=this.Fc(a,"row",b),b=this.Fc(a,"column",b);return Promise.resolve(b)};
a.f.j("CubeDataGridDataSource.prototype.keys",{keys:a.bd.prototype.keys});a.bd.prototype.Fc=function(c,b,d){var e=this.ns(b);c=c[b];var f=new a.Xn,f=e?e.cK(c,f):"";d[b]=f.Ew()[0].key;return d};a.bd.prototype.indexes=function(a){var b={},b=this.Pi(a,"row",b),b=this.Pi(a,"column",b);return Promise.resolve(b)};a.f.j("CubeDataGridDataSource.prototype.indexes",{indexes:a.bd.prototype.indexes});a.bd.prototype.Pi=function(a,b,d){d[b]=this.ns(b).rm(a[b]);return d};a.bd.prototype.sort=function(){a.A.Me()};
a.f.j("CubeDataGridDataSource.prototype.sort",{sort:a.bd.prototype.sort});a.bd.prototype.move=function(){a.A.Me()};a.f.j("CubeDataGridDataSource.prototype.move",{move:a.bd.prototype.move});a.bd.prototype.moveOK=function(){return"invalid"};a.f.j("CubeDataGridDataSource.prototype.moveOK",{moveOK:a.bd.prototype.moveOK});a.bd.prototype.getCapability=function(a){switch(a){case "sort":return"none";case "move":return"none"}return null};a.f.j("CubeDataGridDataSource.prototype.getCapability",{getCapability:a.bd.prototype.getCapability});
a.bd.Xaa=function(a){return"row"===a?1:0};a.bd.prototype.ns=function(c){c=a.bd.Xaa(c);var b=this.data.dt();return b.length>c?b[c]:null};a.uj=function(c,b,d){this.Init();this.vu=d;this.hOa=d.valueAttr;this.QHa=d.labelAttr;var e=d.defaultAggregation;this.yba=e?a.uj.jCa(e):{FC:a.sj.SUM};this.AV=d.aggregation;this.QV();a.uj.O.constructor.call(this,c,b)};o_("DataColumnCube",a.uj,a);a.f.xa(a.uj,a.Wb,"oj.DataColumnCube");a.uj.prototype.Init=function(){a.uj.O.Init.call(this)};a.uj.prototype.Tz=function(){a.uj.O.Tz.call(this)};
a.uj.prototype.YS=function(a){return this.aB[a]?this.aB[a]:this.yba};a.uj.prototype.WS=function(c){return new a.uj(null,c,this.vu)};a.uj.prototype.XS=function(c,b){return c.attribute===this.QHa?new a.ik(c.attribute,b,!0):new a.ik(c.attribute,b,!1)};a.uj.prototype.jA=function(a,b,d,e,f,g){if(b>=a.Wq().length)return f;var k=a.Wq()[b],l=e[k.attribute];d=d.ES(l,null,k);k.pD()?f.DS(l,e[this.hOa]):f.KT(d);return this.jA(a,b+1,d,e,f,g)};a.uj.jCa=function(c){return a.Sa.od(c)?{FC:c}:{FC:c.aggregation,gd:c.callback}};
a.uj.prototype.QV=function(){this.aB=[];if(this.AV)for(var a=0;a<this.AV.length;a++){var b=this.AV[a],d=b.aggregation;this.aB[b.value]=d?{FC:d,gd:b.callback}:this.yba}};a.ik=function(a,b,d){this.Init();this.attribute=a;this.F$=b;this.axis=b.axis;this.wba=d};o_("CubeLevel",a.ik,a);a.f.xa(a.ik,a.f,"oj.CubeLevel");a.ik.prototype.Init=function(){a.ik.O.Init.call(this)};a.ik.prototype.jg=function(a){if(a=this.F$.ht(a))for(var b=0;b<a.length;b++)if(a[b].hz()===this)return a[b];return null};a.f.j("CubeLevel.prototype.getValue",
{jg:a.ik.prototype.jg});a.ik.prototype.pD=function(){return this.wba};a.f.j("CubeLevel.prototype.isDataValue",{pD:a.ik.prototype.pD});a.ik.prototype.wba=!1;a.ik.prototype.F$=null});