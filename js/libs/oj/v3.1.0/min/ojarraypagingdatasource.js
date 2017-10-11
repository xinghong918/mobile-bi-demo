/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","knockout","ojs/ojdatasource-common"],function(a,g,c){a.Nc=function(a){this.data=a;this.current=0;this.Init();this.U0(10)};o_("ArrayPagingDataSource",a.Nc,a);a.f.xa(a.Nc,a.Em,"oj.ArrayPagingDataSource");a.Nc.prototype.Init=function(){a.Nc.O.Init.call(this)};a.f.j("ArrayPagingDataSource.prototype.Init",{Init:a.Nc.prototype.Init});a.Nc.prototype.KY=function(){return this.Io()?this.Ys:this.totalSize()-this.current};a.Nc.prototype.zy=function(a){a=a||{};this.aj=Array(this.KY());
for(var c=0;c<this.aj.length;c++)this.aj[c]=this.data[this.current+c];this.xH();this.Zl=this.Aa+this.aj.length-1;a.silent||this.handleEvent("sync",{data:this.aj,startIndex:this.current})};a.Nc.prototype.xH=function(){if(void 0!==this.sp){this.sp.removeAll();for(var a=0;a<this.aj.length;a++)this.sp.push(this.aj[a])}};a.Nc.prototype.handleEvent=function(b,c){return a.Nc.O.handleEvent.call(this,b,c)};a.Nc.prototype.jt=function(){return this.aj};a.f.j("ArrayPagingDataSource.prototype.getWindow",{jt:a.Nc.prototype.jt});
a.Nc.prototype.RI=function(){void 0===this.sp&&(this.sp=c.observableArray(),this.xH());return this.sp};a.f.j("ArrayPagingDataSource.prototype.getWindowObservable",{RI:a.Nc.prototype.RI});a.Nc.prototype.getPage=function(){return this.Ke};a.f.j("ArrayPagingDataSource.prototype.getPage",{getPage:a.Nc.prototype.getPage});a.Nc.prototype.setPage=function(b,c){c=c||{};b=parseInt(b,10);try{a.Nc.O.handleEvent.call(this,a.zd.aa.BEFOREPAGE,{page:b,previousPage:this.Ke})}catch(e){return Promise.reject(null)}this.pageSize=
null!=c.pageSize?c.pageSize:this.pageSize;c.startIndex=b*this.pageSize;var f=this.Ke;this.Ke=b;this.Aa=c.startIndex;var g=this;return new Promise(function(b,e){g.xh(c).then(function(){a.Nc.O.handleEvent.call(g,a.zd.aa.PAGE,{page:g.Ke,previousPage:f});b(null)},function(){g.Ke=f;g.Aa=g.Ke*g.pageSize;e(null)})})};a.f.j("ArrayPagingDataSource.prototype.setPage",{setPage:a.Nc.prototype.setPage});a.Nc.prototype.getStartItemIndex=function(){return this.Aa};a.f.j("ArrayPagingDataSource.prototype.getStartItemIndex",
{getStartItemIndex:a.Nc.prototype.getStartItemIndex});a.Nc.prototype.getEndItemIndex=function(){return this.Zl};a.f.j("ArrayPagingDataSource.prototype.getEndItemIndex",{getEndItemIndex:a.Nc.prototype.getEndItemIndex});a.Nc.prototype.getPageCount=function(){var a=this.totalSize();return-1==a?-1:Math.ceil(a/this.pageSize)};a.f.j("ArrayPagingDataSource.prototype.getPageCount",{getPageCount:a.Nc.prototype.getPageCount});a.Nc.prototype.fetch=function(a){a=a||{};if(void 0!==a.pageSize&&void 0!==a.startIndex){if(!this.Io())return Promise.resolve();
this.Ys=a.startIndex+a.pageSize}this.zy(null);return Promise.resolve()};a.f.j("ArrayPagingDataSource.prototype.fetch",{fetch:a.Nc.prototype.fetch});a.Nc.prototype.xh=function(a){var c=a||{};void 0!==c.startIndex&&(this.current=c.startIndex);void 0!==c.pageSize&&(this.Ys=this.pageSize=c.pageSize);this.zy(a);return Promise.resolve({data:this.aj,startIndex:this.current})};a.Nc.prototype.Io=function(){return this.current+this.Ys<this.totalSize()};a.Nc.prototype.U0=function(a){this.Ys=this.pageSize=a;
this.zy(null)};a.Nc.prototype.totalSize=function(){return this.data.length};a.Nc.prototype.totalSizeConfidence=function(){return"actual"};a.f.j("ArrayPagingDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.Nc.prototype.totalSizeConfidence});a.Nc.prototype.getCapability=function(){return null};a.f.j("ArrayPagingDataSource.prototype.getCapability",{getCapability:a.Nc.prototype.getCapability})});