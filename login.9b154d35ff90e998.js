"use strict";(self.webpackChunktms=self.webpackChunktms||[]).push([[535],{8904:(O,g,l)=>{l.r(g),l.d(g,{LoginModule:()=>I});var m=l(9299),s=l(4006),n=l(4650),c=l(8306);let p=(()=>{class o{constructor(t,i){this.config=t,this.apiservice=i,this.loginTranslations={}}translateLoginForm(){let t=navigator.language.substring(2,0);return t||(t="en"),new c.y(i=>{this.apiservice.getData(this.config.formUrl).subscribe(e=>{this.loginTranslations=e,i.next(this.loginTranslations[t])})})}}return o.\u0275fac=function(t){return new(t||o)(n.LFG("URL"),n.LFG("API_SERVICE"))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var d=l(6895),u=l(7676),f=l(4144),h=l(7392),x=l(4859);const _=["userinput"];function b(o,a){if(1&o&&(n.TgZ(0,"mat-error"),n._uU(1),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Oqu(t.loginTranslations.errormessages.username.required)}}function T(o,a){if(1&o&&(n.TgZ(0,"mat-error"),n._uU(1),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Oqu(t.loginTranslations.errormessages.username.minlength)}}function C(o,a){if(1&o&&(n.TgZ(0,"mat-error"),n._uU(1),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Oqu(t.loginTranslations.errormessages.password.required)}}function w(o,a){if(1&o&&(n.TgZ(0,"mat-error"),n._uU(1),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Oqu(t.loginTranslations.errormessages.password.minlength)}}function L(o,a){if(1&o){const t=n.EpF();n.TgZ(0,"form",2,3),n.NdJ("ngSubmit",function(){n.CHM(t);const e=n.oxw();return n.KtG(e.onSubmit())}),n.TgZ(2,"mat-form-field",4)(3,"mat-label"),n._uU(4),n.qZA(),n.TgZ(5,"input",5,6),n.NdJ("ngModelChange",function(e){n.CHM(t);const r=n.oxw();return n.KtG(r.user.username=e)}),n.qZA(),n.YNc(8,b,2,1,"mat-error",7),n.YNc(9,T,2,1,"mat-error",7),n.TgZ(10,"button",8)(11,"mat-icon"),n._uU(12,"account_box"),n.qZA()()(),n.TgZ(13,"mat-form-field",4)(14,"mat-label"),n._uU(15),n.qZA(),n.TgZ(16,"input",9,10),n.NdJ("ngModelChange",function(e){n.CHM(t);const r=n.oxw();return n.KtG(r.user.password=e)}),n.qZA(),n.YNc(18,C,2,1,"mat-error",7),n.YNc(19,w,2,1,"mat-error",7),n.TgZ(20,"button",11),n.NdJ("click",function(){n.CHM(t);const e=n.oxw();return n.KtG(e.hidepassword=!e.hidepassword)}),n.TgZ(21,"mat-icon"),n._uU(22),n.qZA()()(),n.TgZ(23,"section")(24,"div",12)(25,"button",13),n.NdJ("click",function(){n.CHM(t);const e=n.MAs(1),r=n.oxw();return n.KtG(r.resetLoginForm(e))}),n._uU(26),n.qZA(),n.TgZ(27,"button",14),n._uU(28),n.qZA()()()()}if(2&o){const t=n.MAs(1),i=n.MAs(7),e=n.MAs(17),r=n.oxw();n.xp6(4),n.Oqu(r.loginTranslations.username.text),n.xp6(1),n.s9C("placeholder",r.loginTranslations.username.placeholder),n.Q6J("ngModel",r.user.username),n.xp6(3),n.Q6J("ngIf",null==i.errors?null:i.errors.required),n.xp6(1),n.Q6J("ngIf",null==i.errors?null:i.errors.minlength),n.xp6(6),n.Oqu(r.loginTranslations.password.text),n.xp6(1),n.s9C("placeholder",r.loginTranslations.password.placeholder),n.Q6J("type",r.hidepassword?"password":"text")("ngModel",r.user.password),n.xp6(2),n.Q6J("ngIf",null==e.errors?null:e.errors.required),n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.minlength),n.xp6(1),n.s9C("title",r.loginTranslations.showhidepassword),n.uIk("aria-label","Show/Hide password")("aria-pressed",r.hidepassword),n.xp6(2),n.Oqu(r.hidepassword?"visibility_off":"visibility"),n.xp6(3),n.s9C("title",r.loginTranslations.clear.tooltip),n.Q6J("disabled",""===i.value&&""===e.value),n.xp6(1),n.hij(" ",r.loginTranslations.clear.button," "),n.xp6(1),n.s9C("title",r.loginTranslations.login.tooltip),n.Q6J("disabled",t.form.invalid),n.xp6(1),n.hij(" ",r.loginTranslations.login.button," ")}}const v=[{path:"",component:(()=>{class o{constructor(t,i,e,r,y,A){this.config=t,this.apiservice=i,this.loginservice=e,this.router=r,this.fb=y,this.cd=A,this.hidepassword=!0,this.user={username:"",password:""}}ngOnInit(){this.loginservice.translateLoginForm().subscribe(t=>{this.loginTranslations=t}),this.createForm()}resetLoginForm(t){t.reset(),this.usernameInputElement.nativeElement.focus()}onSubmit(){console.log(" -------------------","\n","POST to API >> ",this.user),this.apiservice.getData(this.config.apiUrl).subscribe(t=>{console.log(" Authentificated >> ",t.authentificated),t.authentificated&&console.log(" -------------------"),this.router.navigate([t.user_type+"/"+t.id])})}createForm(){this.loginForm=this.fb.group({username:["",[s.kI.required,s.kI.minLength(2),s.kI.maxLength(25)]],password:["",[s.kI.required,s.kI.minLength(8),s.kI.maxLength(16)]]})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36("URL"),n.Y36("API_SERVICE"),n.Y36(p),n.Y36(m.F0),n.Y36(s.qu),n.Y36(n.sBO))},o.\u0275cmp=n.Xpm({type:o,selectors:[["tms-login"]],viewQuery:function(t,i){if(1&t&&n.Gf(_,5),2&t){let e;n.iGM(e=n.CRH())&&(i.usernameInputElement=e.first)}},decls:2,vars:1,consts:[["role","main",1,"content"],["class","login","novalidate","",3,"ngSubmit",4,"ngIf"],["novalidate","",1,"login",3,"ngSubmit"],["lform","ngForm"],["appearance","fill",1,"example-full-width"],["matInput","","id","user","name","username","minlength","2","maxlength","25","tabindex","1","autofocus","","required","",3,"placeholder","ngModel","ngModelChange"],["userinput","","username","ngModel"],[4,"ngIf"],["mat-icon-button","","matSuffix","","tabindex","-1","type","button"],["matInput","","id","password","name","password","minlength","8","maxlength","16","tabindex","2","required","",3,"placeholder","type","ngModel","ngModelChange"],["password","ngModel"],["mat-icon-button","","matSuffix","","type","button","tabindex","3",3,"title","click"],[1,"example-button-row"],["mat-flat-button","","color","accent","type","button","tabindex","4",3,"title","disabled","click"],["mat-flat-button","","color","primary","type","submit","tabindex","5",3,"title","disabled"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0),n.YNc(1,L,29,21,"form",1),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngIf",i.loginTranslations))},dependencies:[d.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.wO,s.nD,s.On,s.F,u.TO,u.KE,u.hX,u.R9,f.Nt,h.Hw,x.lW],styles:["form[_ngcontent-%COMP%]{padding:20px;border-radius:4px;margin:24px 0;border:1px solid rgba(0,0,0,.2)}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%;margin:0 0 15px}.example-button-row[_ngcontent-%COMP%]{display:table-cell;width:490px}.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%]{margin:0 8px 8px 0}"]}),o})()}];let M=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[m.Bz.forChild(v),m.Bz]}),o})();var Z=l(4466);let I=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[M,Z.m]}),o})()}}]);