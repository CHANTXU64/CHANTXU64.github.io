/** copyright info
 * [GF_logistics]{@link https://github.com/CHANTXU64/Girls-Frontline}
 *
 * @namespace GF_logistics
 * @version 1.1.0-alpha
 * @author ChantXu64 [chantxu@outlook.com]
 * @copyright ChantXu64
 * @license MIT
 */
window.ResultsPlan_JS=!0;var Ot=(e(qt,null,[{key:"clear",value:function(){this._lastResultsPlan=[],this._lastSortBy="Ranking"}},{key:"getLastResultsPlan",value:function(){return this._lastResultsPlan}},{key:"getLastSortBy",value:function(){return this._lastSortBy}},{key:"print",value:function(e,t){var a=0<arguments.length&&void 0!==e?e:this._lastResultsPlan,n=1<arguments.length&&void 0!==t?t:this._lastSortBy;if(document.getElementById("start_ranking_html").style.display="none",0===a.length)document.getElementById("Plan_Table").innerHTML=g.JS.NoPlan,this.clear();else{var i=0,l=document.getElementById("result_plan_table");null!==l&&(i=l.scrollLeft);var r=this.sortResultPlan(a,n);document.getElementById("Plan_Table").innerHTML=this._getPrintHtml(r),0!=i&&(document.getElementById("result_plan_table").scrollLeft=i),this._lastResultsPlan=r,this._lastSortBy=n}}},{key:"sortResultPlan",value:function(e,t){var a=e.slice();switch(t){case"Ranking":T(a,0);break;case"Manp":m(a,5);break;case"Ammu":m(a,6);break;case"Rati":m(a,7);break;case"Part":m(a,8);break;case"TPro":m(a,9);break;case"Equi":m(a,10);break;case"QPro":m(a,11);break;case"QRes":m(a,12)}return a}},{key:"_getPrintHtml",value:function(e){var t="";t+='<div class="table-responsive" id="result_plan_table" style="margin-bottom: 0;">',t+='<table class="table table-striped table-hover text-nowrap" style="margin-bottom: 0; text-align: center; border: 0; font-size: 14px;">';var a=Qe();t+=a.printPlanTableTitle()+"<tbody>";var n=60;K()||(n=a.getTotalTime(!1));for(var i=0;i<e.length;i++){t+="<tr tabindex='0' id='print_result_plan_tr_"+i+"'>";for(var l=0;l<4;l++)t+="<td style='width: 5%;'>",t+=""+e[i][l+1],t+="</td>";for(var r=4;r<8;r++)t+="<td style='width:"+a.PlanTableResourceAndContractWidth+"'>",t+=""+Math.round(e[i][r+1]*n*10)/10,t+="</td>";for(var o=8;o<12;o++)t+="<td style='width:"+a.PlanTableResourceAndContractWidth+";'>",t+=""+Math.round(e[i][o+1]*n*100)/100,t+="</td>";for(var s=e[0].length,u=13;u<s;u++)t+="<td style='width:"+a.PlanTableResourceAndContractWidth+";'>",t+=e[i][u],t+="</td>";t+="</tr>"}return t+="</tbody>"}}]),qt);function qt(){u(this,qt)}Ot._lastResultsPlan=[],Ot._lastSortBy,window.FineTuning_JS=!0;var Ut=(e(jt,null,[{key:"clear",value:function(){this._TargetValue_Original=[0,0,0,0,0,0,0,0],this._TargetValue=[0,0,0,0,0,0,0,0],this._ShownTab=-1}},{key:"setFineTuning",value:function(e,t){this._TargetValue_Original=e.slice(),this._TargetValue=e.slice(),this._ShownTab=t}},{key:"getTargetValue",value:function(){return this._TargetValue.slice()}},{key:"getShownTab",value:function(){return this._ShownTab}},{key:"changeTargetValue",value:function(e,t){var a=["MT","AT","RT","PT","TT","ET","QPT","QRT"].indexOf(t);-1===e?this._TargetValue[a]-=this._TargetValue_Original[a]/50:this._TargetValue[a]+=this._TargetValue_Original[a]/50}},{key:"print",value:function(){if(Ze()){var e=document.getElementById("FineTuning"),t=["MT","AT","RT","PT","TT","ET","QPT","QRT"];if(""===e.innerHTML){var a=g.JS,n=[a.FineTuningManp,a.FineTuningAmmu,a.FineTuningRati,a.FineTuningPart,a.FineTuningTPro,a.FineTuningEqui,a.FineTuningQPro,a.FineTuningQRes],i='<div class="card" style="margin-bottom:5px">';i+='<div class="card-header">',i+='<a data-toggle="collapse" id="FineTuningTool_panelTitle" href="#FineTuningTool" class="collapsed">'+a.FineTuningTool+"</a></div>",i+='<div id="FineTuningTool" class="collapse"',k()&&(i+='style="transition: none;"'),i+=">",i+='<div class="card-body row" style="padding: 10px 5px; margin: 0; text-aligh: center;">';for(var l=0;l<8;l++){0===l&&(i+='<div class="col-lg-6 col-md-6 col-sm-6" style="padding-left: 5px; padding-right: 5px;">'),4===l&&(i+='</div> <div class="col-lg-6 col-md-6 col-sm-6" style="padding-left: 5px; padding-right: 5px;">'),i+='<div class="input-group" style="margin-bottom: 10px; width: 100%;">',i+='<span class="input-group-text input-group-span" style="font-size: 14px; width:'+g.CSS.FineTuningSpan_Width+';" id="FineTuningTool_'+t[l]+'">'+n[l]+"</span>",i+='<button class="btn btn-outline-dark input-group-btn btn-bolder" style="display:block; width: '+g.CSS.FineTuningButton_Width+';" type="button" id="FineTuning_minus_'+t[l]+'"';var r=this._TargetValue_Original[l],o=this._TargetValue[l];(0===r||o-r/50<=0||o-r/50<.9*r)&&(i+='disabled="disabled"'),i+='title="'+g.HTMLJS.FineTuning_minus+'">-</button>',i+='<button class="btn btn-outline-dark input-group-btn btn-bolder" style="display: block; width: '+g.CSS.FineTuningButton_Width+';" type="button" id="FineTuning_plus_'+t[l]+'"',(0===r||1<=o+r/50||1.14*r<o+r/50)&&(i+='disabled="disabled"'),i+='title="'+g.HTMLJS.FineTuning_plus+'">+</button>',i+="</div>"}i+="</div></div></div></div>",e.innerHTML=i}else for(var s=0;s<8;s++){var u=this._TargetValue_Original[s],c=this._TargetValue[s];if(0===u||c-u/50<=0||c-u/50<.8*u){var _=$("#FineTuning_minus_"+t[s]);"disabled"!==_.attr("disabled")&&_.attr("disabled","disabled")}else{var d=$("#FineTuning_minus_"+t[s]);"disabled"===d.attr("disabled")&&d.removeAttr("disabled")}if(0===u||1<=c+u/50||1.2*u<c+u/50){var m=$("#FineTuning_plus_"+t[s]);"disabled"!==m.attr("disabled")&&m.attr("disabled","disabled")}else{var T=$("#FineTuning_plus_"+t[s]);"disabled"===T.attr("disabled")&&T.removeAttr("disabled")}}}}}]),jt);function jt(){u(this,jt)}Ut._TargetValue_Original=[],Ut._TargetValue=[],Ut._ShownTab=-1;var zt=(e(Zt,[{key:"_setList",value:function(e){for(var t=new Array(e),a=0;a<e;a++)t[a]=new Array(13);return t}},{key:"ranking",value:function(){for(var e=this.ShownTab.getQValidLength(),t=e-3,a=e-2,n=e-1,i=e,l=0;l<t;l++)for(var r=l+1;r<a;r++)for(var o=r+1;o<n;o++)for(var s=o+1;s<i;s++)this._calculateAndPushIntoList(l,r,o,s)}},{key:"_pushIntoList",value:function(e,t,a,n,i,l){0 in this.List[this.List_lastIndex]?this._push(e,t,a,n,i,l):this._pushIntoFirstEmpty(e,t,a,n,i,l)}},{key:"_pushIntoFirstEmpty",value:function(e,t,a,n,i,l){for(var r=this.List_lastIndex;0!==r&&!(0 in this.List[r-1]);)r--;this._pushIntoThisRow(r,e,t,a,n,i,l),this._sortList(r,i)}},{key:"_push",value:function(e,t,a,n,i,l){var r=this.List_lastIndex;i<=this.List[r][12]||(this._pushIntoThisRow(r,e,t,a,n,i,l),this._sortList(r,i))}},{key:"_pushIntoThisRow",value:function(e,t,a,n,i,l,r){this.List[e]=[t,a,n,i,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],l]}},{key:"_sortList",value:function(e,t){for(var a=e-1;0<=a&&t>this.List[a][12];a--){var n=[this.List[a],this.List[a+1]];this.List[a+1]=n[0],this.List[a]=n[1]}}}]),Zt);function Zt(e,t){u(this,Zt),this.List=this._setList(t),this.List_length=t,this.List_lastIndex=t-1,this.ShownTab=e}var Kt=(t(Xt,zt),e(Xt,[{key:"_correctTargetValueHTML",value:function(){var e=le(),t=e.slice(0,4),a=e.slice(4,8);return t=this._correctTargetValueHTML_main(t),a=this._correctTargetValueHTML_main(a),oe(e=t.concat(a)),e}},{key:"_correctTargetValueHTML_main",value:function(e){for(var t=y(e),a=Math.round(t/5e3*100)/100,n=0;n<4;n++)0!==e[n]&&(e[n]=Math.max(a,e[n]));return e}},{key:"_correctTargetValue",value:function(){var e=this._correctResourceValue(),t=this._correctContractValue(),a=e.concat(t);if(""+a=="0,0,0,0,0,0,0,0")throw E.alert(g.JS.TargetValue0_alert),"Warning: TargetValue cannot all be 0!";return a}},{key:"_correctResourceValue",value:function(){var e=this.targetValue_html.slice(0,4),t=100-ce();return this._valuesNotAll0(e)&&this._correctValue(e,t),e}},{key:"_correctContractValue",value:function(){var e=this.targetValue_html.slice(4,8),t=ce();return this._valuesNotAll0(e)&&this._correctValue(e,t),e}},{key:"_valuesNotAll0",value:function(e){for(var t=0;t<e.length;t++)if(0!==e[t])return!0;return!1}},{key:"_correctValue",value:function(e,t){for(var a=t/y(e),n=0;n<e.length;n++)e[n]*=a}},{key:"_getNorm",value:function(e){for(var t=0,a=0;a<8;a++)t+=Math.pow(e[a],2);return Math.pow(t,.5)}},{key:"ranking",value:function(){this.ShownTab.deleteUselessMissions(this.QValidMaxLength_1,this.targetValue),s(Xt.prototype.__proto__||Object.getPrototypeOf(Xt.prototype),"ranking",this).call(this),this.ShownTab.getQValidLength()>this.QValidMaxLength_2&&this.ShownTab.deleteUselessMissions(this.QValidMaxLength_2,this.targetValue,this.Qvalid_missionValue)}},{key:"_calculateAndPushIntoList_andCalculateMissionsValue",value:function(e,t,a,n){var i=this.ShownTab.calculateCurrentValue(e,t,a,n);if(-1!==i[0]){var l=this._calculateValue(i),r=this.Qvalid_missionValue;r[e]+=l,r[t]+=l,r[a]+=l,r[n]+=l,this._pushIntoList(e,t,a,n,l,i)}}},{key:"_calculateAndPushIntoList_normal",value:function(e,t,a,n){var i=this.ShownTab.calculateCurrentValue(e,t,a,n);if(-1!==i[0]){var l=this._calculateValue(i);this._pushIntoList(e,t,a,n,l,i)}}},{key:"_calculateValue",value:function(e){var t=this.targetValue,a=[0,0,0,0,0,0,0,0];0!==t[0]&&(a[0]=e[0]),0!==t[1]&&(a[1]=e[1]),0!==t[2]&&(a[2]=e[2]),0!==t[3]&&(a[3]=e[3]),0!==t[4]&&(a[4]=500*e[4]),0!==t[5]&&(a[5]=500*e[5]),0!==t[6]&&(a[6]=500*e[6]),0!==t[7]&&(a[7]=500*e[7]);var n=this._getNorm(a);if(0===n)return 0;var i=this._getDotProduct(a,t)/this._norm_target,l=i/n,r=(-.698131700797732*l*l-.872664625997164)*l+1.57079632679489,o=1-.5*(0<r?r:0);return o*o*i}},{key:"_getDotProduct",value:function(e,t){for(var a=0,n=0;n<8;n++)a+=e[n]*t[n];return a}},{key:"getStdznTargetValue",value:function(){var e=this._getAvgCurrentByList(),t=e.slice(0,4);t.class="Resource";var a=e.slice(4,8);a.class="Contract";for(var n=this._getCalibration(t),i=this._getCalibration(a),l=0;l<4;l++)e[l]=0!==n?this.targetValue_html[l]/n:0;for(var r=4;r<8;r++)e[r]=0!==i?this.targetValue_html[r]/i:0;return e}},{key:"_getAvgCurrentByList",value:function(){var e=[0,0,0,0,0,0,0,0],t=new Array(8),a=this.List;t.fill(this.List_length);for(var n=0;n<8;n++)for(var i=0;i<this.List_length;i++)e[n]+=a[i][n+4],0===a[i][n+4]&&t[n]--;for(var l=0;l<8;l++)0===t[l]?e[l]=0:e[l]/=t[l];return e}},{key:"_getCalibration",value:function(e){for(var t=this._getTarget0Html(e.class),a=this._getCurrent0Max(e.class),n=0,i=e.length,l=0;l<e.length;l++)0!==e[l]?(n+=t[l]/e[l],0===t[l]&&i--):i--;if(0!==n)n/=i;else{for(var r=0,o=e.length,s=0;s<e.length;s++)0!==a[s]?r+=a[s]:o--;0===o?r=0:r/=o,n=y(t)/r}return n}},{key:"_getTarget0Html",value:function(e){return new Array(4),"Resource"===e?this.targetValue_html.slice(0,4):this.targetValue_html.slice(4,8)}},{key:"_getCurrent0Max",value:function(e){return new Array(4),"Resource"===e?this.ShownTab.getCurrentValueMax().slice(0,4):this.ShownTab.getCurrentValueMax().slice(4,8)}}]),Xt);function Xt(e,t,a,n){u(this,Xt);var i=o(this,(Xt.__proto__||Object.getPrototypeOf(Xt)).call(this,e,t)),l=i.ShownTab.getQValidLength();if(i.QValidMaxLength_1=Math.min(a,l),i.QValidMaxLength_2=Math.min(n,l),n<l){i._calculateAndPushIntoList=i._calculateAndPushIntoList_andCalculateMissionsValue;var r=new Array(i.QValidMaxLength_1);r.fill(0),i.Qvalid_missionValue=r}else i._calculateAndPushIntoList=i._calculateAndPushIntoList_normal;return i.targetValue_html=i._correctTargetValueHTML(),i.targetValue=i._correctTargetValue(),i._norm_target=i._getNorm(i.targetValue),i}var Yt=(t(ea,zt),e(ea,[{key:"_calculateAndPushIntoList",value:function(e,t,a,n){var i=this.ShownTab.calculateCurrentValue(e,t,a,n);if(-1!==i[0]){for(var l=0;l<8;l++)if(i[l]<this.targetValue_half[l])return;var r=this._calculateValue(i);this._pushIntoList(e,t,a,n,r,i)}}},{key:"_calculateValue",value:function(e){for(var t=0,a=99999999999,n=this.targetValue,i=0;i<8;i++)0!==n[i]&&(a=Math.min(a,e[i]/n[i]));for(var l=0;l<8;l++)t+=this._calculateValue_main(n[l],e[l],a);return t}},{key:"_calculateValue_main",value:function(e,t,a){return 0===e?0:.5*(Math.min(t,e)+Math.min(t,1.5*e*a))}},{key:"print",value:function(e){for(var t=0<arguments.length&&void 0!==e?e:"Ranking",a=this.ShownTab,n=a.getQValid(!0),i=a.getCurrentValueMax(),l=[],r=0;r<this.List_length;r++){var o=this.List[r];if(!(0 in o))break;var s=[];s.push(r);for(var u=new Array(4),c=0;c<4;c++)u[c]=n[o[c]][0];u=u.sort(M);for(var _=0;_<4;_++)s.push(u[_]);for(var d=0;d<8;d++)s.push(o[d+4]*i[d]);for(var m=this.ShownTab.printTableCustomize(o[0],o[1],o[2],o[3]),T=0;T<m.length;T++)s.push(m[T]);l.push(s)}Oe(l,t)}}]),ea);function ea(e,t,a){u(this,ea);var n=o(this,(ea.__proto__||Object.getPrototypeOf(ea)).call(this,e,t));n.targetValue=a,n.targetValue_half=n.targetValue.slice();for(var i=0;i<8;i++)n.targetValue_half[i]=.5*n.targetValue_half[i];return n}var ta=44,aa=34;function na(){var e=Qe();e.setQValid();var t=new Kt(e,8,ta,aa);t.ranking();for(var a=t.getStdznTargetValue(),n=new Array(8),i=e.getCurrentValueMax(),l=0;l<8;l++)n[l]=Math.min(1,a[l]/i[l]),n[l]=Math.max(n[l],0);e.normalizedQValid(),Ut.setFineTuning(n,e);var r=new Yt(e,16,n);r.ranking(),r.print(),"none"!==document.getElementById("start_ranking").style.display&&($("#Time_Anytime_hours").attr("disabled","true"),$("#Time_Anytime_minutes").attr("disabled","true"),$("#Tab_Anytime_MinimumIntervalTime_minutes").attr("disabled","true"),$("#Time_Timetable_hours").attr("disabled","true"),$("#Time_Timetable_minutes").attr("disabled","true"),$("#tab_Timetable_deleteall").attr("disabled","true"),$("button[id^=Tab_Timetable_range_thumb_]").attr("disabled","true"),$("#Tab_Timetable_new_hours").attr("disabled","true"),$("#Tab_Timetable_new_minutes").attr("disabled","true"),$("#Tab_Timetable_AddNewTimePoint").attr("disabled","true"),$("#GreatSuccessRate").attr("disabled","true"),$("#GreatSuccessRateUp_btn").attr("disabled","true"),$("#GreatSuccessRateUp_btn").addClass("disabled"),$("#ChapterLimit").attr("disabled","true"),$("#calcTargetValueTool_apply").attr("disabled","true"),$("#ContractWeight").attr("disabled","true"),$("button[id^=setTarget_]").attr("disabled","true"),$("#MT").attr("disabled","true"),$("#AT").attr("disabled","true"),$("#RT").attr("disabled","true"),$("#PT").attr("disabled","true"),$("#TT").attr("disabled","true"),$("#ET").attr("disabled","true"),$("#QPT").attr("disabled","true"),$("#QRT").attr("disabled","true"),$("button[id^=Target_minus_]").attr("disabled","true"),$("button[id^=Target_plus_]").attr("disabled","true"),document.getElementById("start_ranking").style.display="none",document.getElementById("clear_ranking").style.display="")}function ia(e,t){Ut.changeTargetValue(e,t);var a=Ut.getShownTab(),n=Ut.getTargetValue(),i=new Yt(a,16,n);i.ranking(),i.print(Ot.getLastSortBy())}function la(){for(var e=[0,0,0,0,0,0,0,0],t=Se(!0),a=Me(!0),n=ke(!0),i=0;i<8;i++)e[i]=Math.max(0,(t[i]-a[i])/n);for(var l=["Manp","Ammu","Rati","Part","TPro","Equi","QPro","QRes"],r=0;r<8;r++)$("#calcTargetValueTool_Result_"+l[r]+"_value").html(v(e[r]));return e}function ra(){window.sha1&&window.md5&&window.LZString&&window.echarts&&window.ES6Promise&&window.html2canvas?($("#Config_importInput").removeAttr("disabled"),$("#Config_importButton").removeAttr("disabled"),$("#Config_export").removeAttr("disabled"),$("#importSaved_input").removeAttr("disabled"),$("#importSaved_importButton").removeAttr("disabled"),$("#Capture").removeAttr("disabled"),$("#page_loading").remove()):setTimeout(ra,100)}function oa(){if(!window.sha1){var e=document.createElement("script");e.src="./dependent/js/sha1.min.js",document.body.appendChild(e)}if(!window.md5){var t=document.createElement("script");t.src="./dependent/js/md5.min.js",document.body.appendChild(t)}if(!window.LZString){var a=document.createElement("script");a.src="./dependent/js/lz-string.min.js",document.body.appendChild(a)}if(!window.echarts){var n=document.createElement("script");n.src="./dependent/js/echarts.min.js",document.body.appendChild(n)}if(!window.ES6Promise){var i=document.createElement("script");i.src="./dependent/js/es6_promise.auto.min.js",document.body.appendChild(i)}if(!window.html2canvas){var l=document.createElement("script");l.src="./dependent/js/html2canvas.min.js",document.body.appendChild(l)}}window.onload=function(){$("#Notransition").remove();var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/js-sha1@0.6.0/src/sha1.min.js",document.body.appendChild(e);var t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/js-md5@0.7.3/src/md5.min.js",document.body.appendChild(t);var a=document.createElement("script");a.src="https://cdn.jsdelivr.net/npm/lz-string@1.4.4/libs/lz-string.min.js",a.integrity="sha256-nRoO8HoupfqozUr7YKBRgHXmdx40Hl/04OSBzv7e7L8=",a.crossOrigin="anonymous",document.body.appendChild(a);var n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/echarts@4.6.0/dist/echarts.min.js",n.integrity="sha256-9TvhGliyfFW2O8SvloAhdFQbfjluHQ+vQ7WWWX5Z7oM=",n.crossOrigin="anonymous",document.body.appendChild(n);var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/es6-promise@4.2.8/dist/es6-promise.auto.min.js",i.integrity="sha256-Xxrdry6fWSKu1j2ALyuK/gHFQ+2Bp76ZrR6f3QXI47Y=",i.crossOrigin="anonymous",document.body.appendChild(i);var l=document.createElement("script");l.src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.1/dist/html2canvas.min.js",l.integrity="sha256-uacRffSSMP9qpvNWhVmYLykBv9YKMA1d/VSIN1AmfyQ=",l.crossOrigin="anonymous",document.body.appendChild(l),ra(),setTimeout(oa,6e3)},$("#calcTargetValueTool_clear").removeAttr("disabled"),$("#calcTargetValueTool_startCalc").removeAttr("disabled"),$("#calcTargetValueTool_apply").removeAttr("disabled"),$("#start_ranking").removeAttr("disabled");