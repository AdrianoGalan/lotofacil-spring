"use strict";(self.webpackChunkbase_angula=self.webpackChunkbase_angula||[]).push([[446],{6446:(A,u,a)=>{a.r(u),a.d(u,{LoginModule:()=>y});var s=a(9808),f=a(520),r=a(3075),c=a(508),h=a(6835),g=a(6763);class v{}var t=a(5e3),Z=a(384),C=a(7423),d=a(9224),m=a(7322),L=a(7531);function x(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.getErrorMessage("Email invalido"))}}function M(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.getErrorMessage("Digite a Senha"))}}const T=[{path:"",component:(()=>{class o{constructor(n,e){this.formBuilder=n,this.authService=e,this.usuario=new v,this.submitted=!1,this.formulario=this.formBuilder.group({email:[null,[r.kI.required,r.kI.email]],senha:[null,r.kI.required]})}onSubmit(){this.formulario.valid&&(this.usuario.senha=this.formulario.value.senha,this.usuario.email=this.formulario.value.email,this.authService.login(this.usuario))}getErrorMessage(n){return n}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.QS),t.Y36(Z.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:22,vars:3,consts:[[3,"formGroup","ngSubmit"],[1,"margin-login"],["appearance","fill"],["type","email","matInput","","placeholder","pat@example.com","id","email","formControlName","email","required",""],[4,"ngIf"],["type","password","matInput","","id","senha","formControlName","senha","required",""],["mat-button",""],["type","submit","mat-raised-button","","color","primary"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div")(1,"mat-card")(2,"mat-card-title"),t._uU(3,"Login"),t.qZA(),t.TgZ(4,"form",0),t.NdJ("ngSubmit",function(){return e.onSubmit()}),t.TgZ(5,"div",1)(6,"mat-form-field",2)(7,"mat-label"),t._uU(8,"Email"),t.qZA(),t._UZ(9,"input",3),t.YNc(10,x,2,1,"mat-error",4),t.qZA()(),t.TgZ(11,"div",1)(12,"mat-form-field",2)(13,"mat-label"),t._uU(14,"Senha"),t.qZA(),t._UZ(15,"input",5),t.YNc(16,M,2,1,"mat-error",4),t.qZA()(),t.TgZ(17,"div",1)(18,"button",6),t._uU(19,"Cancelar"),t.qZA(),t.TgZ(20,"button",7),t._uU(21,"Entrar"),t.qZA()()()()()),2&n){let l,p;t.xp6(4),t.Q6J("formGroup",e.formulario),t.xp6(6),t.Q6J("ngIf",null==(l=e.formulario.get("email"))?null:l.hasError),t.xp6(6),t.Q6J("ngIf",null==(p=e.formulario.get("senha"))?null:p.hasError)}},dependencies:[s.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,C.lW,d.a8,d.n5,m.TO,m.KE,m.hX,L.Nt,r.sg,r.u],styles:["mat-card[_ngcontent-%COMP%]{max-width:80%;margin:2em auto;text-align:center;width:30%;padding-top:10px}.margin-login[_ngcontent-%COMP%]{margin:30px}button[_ngcontent-%COMP%]{padding:5px;margin:5px}mat-card-title[_ngcontent-%COMP%]{padding-top:25px}"]}),o})()}];let S=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(T),g.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,S,r.u5,f.JF,c.XK,h.q,r.UX]}),o})()}}]);