"use strict";(self.webpackChunkbase_angula=self.webpackChunkbase_angula||[]).push([[15],{6015:(Bt,L,l)=>{l.r(L),l.d(L,{RepeticaoModule:()=>v});var f=l(6895),h=l(4006),N=l(568),t=l(4650),B=l(1635),_=l(8184),k=l(4080),p=l(1842),T=l(7855),D=l(7579),j=l(6451),P=l(9770),x=l(9300),R=l(5698),F=l(8675),O=l(9521),d=l(7340);class y{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}}let U=(()=>{class i extends T.LL{constructor(a,o,n,s,c,g,r,u){super(a,o,n,s,c,g,r,u),this._animationStateChanged=new t.vpe}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(a){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:a})}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(t.SBq),t.Y36(p.qV),t.Y36(f.K0,8),t.Y36(y),t.Y36(p.ic),t.Y36(t.R0b),t.Y36(_.Iu),t.Y36(p.tE))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],features:[t.qOj],decls:0,vars:0,template:function(a,o){},encapsulation:2}),i})();class G{constructor(e,a,o){this._ref=e,this._containerInstance=o,this._afterOpened=new D.x,this._beforeClosed=new D.x,this._state=0,this.disableClose=a.disableClose,this.id=e.id,o._animationStateChanged.pipe((0,x.h)(n=>"opened"===n.state),(0,R.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),o._animationStateChanged.pipe((0,x.h)(n=>"closed"===n.state),(0,R.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),e.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,j.T)(this.backdropClick(),this.keydownEvents().pipe((0,x.h)(n=>n.keyCode===O.hY&&!this.disableClose&&!(0,O.Vb)(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),function V(i,e,a){i._closeInteractionType=e,i.close(a)}(this,"keydown"===n.type?"keyboard":"mouse"))})}close(e){this._result=e,this._containerInstance._animationStateChanged.pipe((0,x.h)(a=>"closing"===a.state),(0,R.q)(1)).subscribe(a=>{this._beforeClosed.next(e),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),a.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(e){let a=this._ref.config.positionStrategy;return e&&(e.left||e.right)?e.left?a.left(e.left):a.right(e.right):a.centerHorizontally(),e&&(e.top||e.bottom)?e.top?a.top(e.top):a.bottom(e.bottom):a.centerVertically(),this._ref.updatePosition(),this}updateSize(e="",a=""){return this._ref.updateSize(e,a),this}addPanelClass(e){return this._ref.addPanelClass(e),this}removePanelClass(e){return this._ref.removePanelClass(e),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}let H=0,q=(()=>{class i{constructor(a,o,n,s,c,g,r,u,A,de){this._overlay=a,this._defaultOptions=n,this._parentDialog=s,this._dialogRefConstructor=r,this._dialogContainerType=u,this._dialogDataToken=A,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new D.x,this._afterOpenedAtThisLevel=new D.x,this._idPrefix="mat-dialog-",this.dialogConfigClass=y,this.afterAllClosed=(0,P.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,F.O)(void 0))),this._scrollStrategy=g,this._dialog=o.get(T.Vq)}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const a=this._parentDialog;return a?a._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(a,o){let n;(o={...this._defaultOptions||new y,...o}).id=o.id||`${this._idPrefix}${H++}`,o.scrollStrategy=o.scrollStrategy||this._scrollStrategy();const s=this._dialog.open(a,{...o,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:o},{provide:T.ib,useValue:o}]},templateContext:()=>({dialogRef:n}),providers:(c,g,r)=>(n=new this._dialogRefConstructor(c,o,r),n.updatePosition(o?.position),[{provide:this._dialogContainerType,useValue:r},{provide:this._dialogDataToken,useValue:g.data},{provide:this._dialogRefConstructor,useValue:n}])});return n.componentInstance=s.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{const c=this.openDialogs.indexOf(n);c>-1&&(this.openDialogs.splice(c,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(a){return this.openDialogs.find(o=>o.id===a)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(a){let o=a.length;for(;o--;)a[o].close()}}return i.\u0275fac=function(a){t.$Z()},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();const C={params:{enterAnimationDuration:"150ms",exitAnimationDuration:"75ms"}},$={dialogContainer:(0,d.X$)("dialogContainer",[(0,d.SB)("void, exit",(0,d.oB)({opacity:0,transform:"scale(0.7)"})),(0,d.SB)("enter",(0,d.oB)({transform:"none"})),(0,d.eR)("* => enter",(0,d.ru)([(0,d.jt)("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)",(0,d.oB)({transform:"none",opacity:1})),(0,d.IO)("@*",(0,d.pV)(),{optional:!0})]),C),(0,d.eR)("* => void, * => exit",(0,d.ru)([(0,d.jt)("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)",(0,d.oB)({opacity:0})),(0,d.IO)("@*",(0,d.pV)(),{optional:!0})]),C)])};function J(i,e){}const w_params_enterAnimationDuration="150ms",w_params_exitAnimationDuration="75ms";class I extends y{constructor(){super(...arguments),this.enterAnimationDuration=C.params.enterAnimationDuration,this.exitAnimationDuration=C.params.exitAnimationDuration}}let X=(()=>{class i extends U{constructor(a,o,n,s,c,g,r,u,A){super(a,o,n,s,c,g,r,A),this._changeDetectorRef=u,this._state="enter"}_onAnimationDone({toState:a,totalTime:o}){"enter"===a?this._openAnimationDone(o):"exit"===a&&this._animationStateChanged.next({state:"closed",totalTime:o})}_onAnimationStart({toState:a,totalTime:o}){"enter"===a?this._animationStateChanged.next({state:"opening",totalTime:o}):("exit"===a||"void"===a)&&this._animationStateChanged.next({state:"closing",totalTime:o})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}_getAnimationState(){return{value:this._state,params:{enterAnimationDuration:this._config.enterAnimationDuration||w_params_enterAnimationDuration,exitAnimationDuration:this._config.exitAnimationDuration||w_params_exitAnimationDuration}}}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(t.SBq),t.Y36(p.qV),t.Y36(f.K0,8),t.Y36(I),t.Y36(p.ic),t.Y36(t.R0b),t.Y36(_.Iu),t.Y36(t.sBO),t.Y36(p.tE))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-dialog-container"],hostVars:7,hostBindings:function(a,o){1&a&&t.WFA("@dialogContainer.start",function(s){return o._onAnimationStart(s)})("@dialogContainer.done",function(s){return o._onAnimationDone(s)}),2&a&&(t.Ikx("id",o._config.id),t.uIk("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledBy)("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),t.d8E("@dialogContainer",o._getAnimationState()))},features:[t.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(a,o){1&a&&t.YNc(0,J,0,0,"ng-template",0)},dependencies:[k.Pl],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions.mat-dialog-actions-align-center,.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions.mat-dialog-actions-align-end,.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],encapsulation:2,data:{animation:[$.dialogContainer]}}),i})();class W extends G{}const K=new t.OlP("MatDialogData"),tt=new t.OlP("mat-dialog-default-options"),E=new t.OlP("mat-dialog-scroll-strategy");let it=(()=>{class i extends q{constructor(a,o,n,s,c,g,r,u){super(a,o,s,g,r,c,W,X,K,u),this.dialogConfigClass=I}}return i.\u0275fac=function(a){return new(a||i)(t.LFG(_.aV),t.LFG(t.zs3),t.LFG(f.Ye,8),t.LFG(tt,8),t.LFG(E),t.LFG(i,12),t.LFG(_.Xj),t.LFG(t.QbO,8))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();var at=l(9549),S=l(3546),m=l(3626),ot=l(4859),Y=l(782),nt=l(7392);function lt(i,e){1&i&&(t.TgZ(0,"th",12),t._uU(1," Numero- "),t.qZA())}function st(i,e){if(1&i&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&i){const a=e.$implicit;t.xp6(1),t.hij(" ",a.numero," ")}}function dt(i,e){1&i&&(t.TgZ(0,"th",12),t._uU(1," Quantidade "),t.qZA())}function ct(i,e){if(1&i&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&i){const a=e.$implicit;t.xp6(1),t.hij(" ",a.quantidade," ")}}function rt(i,e){1&i&&t._UZ(0,"tr",14)}function gt(i,e){1&i&&t._UZ(0,"tr",15)}function mt(i,e){1&i&&(t.TgZ(0,"th",12),t._uU(1," Numero- "),t.qZA())}function ut(i,e){if(1&i&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&i){const a=e.$implicit;t.xp6(1),t.hij(" ",a.numero," ")}}function _t(i,e){1&i&&(t.TgZ(0,"th",12),t._uU(1," Quantidade "),t.qZA())}function pt(i,e){if(1&i&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&i){const a=e.$implicit;t.xp6(1),t.hij(" ",a.quantidade," ")}}function ht(i,e){1&i&&t._UZ(0,"tr",14)}function ft(i,e){1&i&&t._UZ(0,"tr",15)}function Dt(i,e){1&i&&(t.TgZ(0,"th",12),t._uU(1," Numero- "),t.qZA())}function xt(i,e){if(1&i&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&i){const a=e.$implicit;t.xp6(1),t.hij(" ",a.numero," ")}}function yt(i,e){1&i&&(t.TgZ(0,"th",12),t._uU(1," Quantidade "),t.qZA())}function Ct(i,e){if(1&i&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&i){const a=e.$implicit;t.xp6(1),t.hij(" ",a.quantidade," ")}}function Mt(i,e){1&i&&t._UZ(0,"tr",14)}function bt(i,e){1&i&&t._UZ(0,"tr",15)}function vt(i,e){1&i&&(t.TgZ(0,"th",12),t._uU(1," Numero- "),t.qZA())}function At(i,e){if(1&i&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&i){const a=e.$implicit;t.xp6(1),t.hij(" ",a.numero," ")}}function Tt(i,e){1&i&&(t.TgZ(0,"th",12),t._uU(1," Quantidade "),t.qZA())}function Rt(i,e){if(1&i&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&i){const a=e.$implicit;t.xp6(1),t.hij(" ",a.quantidade," ")}}function Lt(i,e){1&i&&t._UZ(0,"tr",14)}function Ot(i,e){1&i&&t._UZ(0,"tr",15)}function wt(i,e){1&i&&(t.TgZ(0,"th",12),t._uU(1," Numero- "),t.qZA())}function It(i,e){if(1&i&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&i){const a=e.$implicit;t.xp6(1),t.hij(" ",a.numero," ")}}function Et(i,e){1&i&&(t.TgZ(0,"th",12),t._uU(1," Quantidade "),t.qZA())}function St(i,e){if(1&i&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&i){const a=e.$implicit;t.xp6(1),t.hij(" ",a.quantidade," ")}}function Yt(i,e){1&i&&t._UZ(0,"tr",14)}function Zt(i,e){1&i&&t._UZ(0,"tr",15)}class M{constructor(e,a){this.eService=e,this.dialog=a,this.displayedColumns=["numero","quantidade"],this.input="3"}ngOnInit(){this.eService.numerosMaisSorteados("10000").subscribe({next:e=>this.numerosTodos=e,error:e=>{console.log(e)}}),this.eService.numerosMaisSorteados("144").subscribe({next:e=>this.numeros144=e,error:e=>{console.log(e)}}),this.eService.numerosMaisSorteados("24").subscribe({next:e=>this.numeros24=e,error:e=>{console.log(e)}}),this.eService.numerosMaisSorteados("6").subscribe({next:e=>this.numeros6=e,error:e=>{console.log(e)}}),this.eService.numerosMaisSorteados(this.input).subscribe({next:e=>this.numeros=e,error:e=>{console.log(e)}})}onClick(){this.input&&this.eService.numerosMaisSorteados(this.input).subscribe({next:e=>this.numeros=e,error:e=>{console.log(e)}})}static#t=this.\u0275fac=function(a){return new(a||M)(t.Y36(B.T),t.Y36(it))};static#e=this.\u0275cmp=t.Xpm({type:M,selectors:[["app-repeticao"]],decls:72,vars:16,consts:[[2,"text-align","center","margin","20px"],["cols","5","rowHeight","1400"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","numero"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","quantidade"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["appearance","fill",2,"width","80px"],["matInput","","type","number","placeholder","Ex. 3",3,"ngModel","ngModelChange"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon",3,"click"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(a,o){1&a&&(t.TgZ(0,"mat-card")(1,"mat-card-title",0),t._uU(2,"N\xfameros mais sorteados em um intervalo de concursos"),t.qZA(),t.TgZ(3,"mat-grid-list",1)(4,"mat-grid-tile")(5,"div")(6,"h3"),t._uU(7,"Todos Concursos"),t.qZA(),t.TgZ(8,"table",2),t.ynx(9,3),t.YNc(10,lt,2,0,"th",4),t.YNc(11,st,2,1,"td",5),t.BQk(),t.ynx(12,6),t.YNc(13,dt,2,0,"th",4),t.YNc(14,ct,2,1,"td",5),t.BQk(),t.YNc(15,rt,1,0,"tr",7),t.YNc(16,gt,1,0,"tr",8),t.qZA()()(),t.TgZ(17,"mat-grid-tile")(18,"div")(19,"h3"),t._uU(20,"144 Concursos"),t.qZA(),t.TgZ(21,"table",2),t.ynx(22,3),t.YNc(23,mt,2,0,"th",4),t.YNc(24,ut,2,1,"td",5),t.BQk(),t.ynx(25,6),t.YNc(26,_t,2,0,"th",4),t.YNc(27,pt,2,1,"td",5),t.BQk(),t.YNc(28,ht,1,0,"tr",7),t.YNc(29,ft,1,0,"tr",8),t.qZA()()(),t.TgZ(30,"mat-grid-tile")(31,"div")(32,"h3"),t._uU(33,"24 Concursos"),t.qZA(),t.TgZ(34,"table",2),t.ynx(35,3),t.YNc(36,Dt,2,0,"th",4),t.YNc(37,xt,2,1,"td",5),t.BQk(),t.ynx(38,6),t.YNc(39,yt,2,0,"th",4),t.YNc(40,Ct,2,1,"td",5),t.BQk(),t.YNc(41,Mt,1,0,"tr",7),t.YNc(42,bt,1,0,"tr",8),t.qZA()()(),t.TgZ(43,"mat-grid-tile")(44,"div")(45,"h3"),t._uU(46,"6 Concursos"),t.qZA(),t.TgZ(47,"table",2),t.ynx(48,3),t.YNc(49,vt,2,0,"th",4),t.YNc(50,At,2,1,"td",5),t.BQk(),t.ynx(51,6),t.YNc(52,Tt,2,0,"th",4),t.YNc(53,Rt,2,1,"td",5),t.BQk(),t.YNc(54,Lt,1,0,"tr",7),t.YNc(55,Ot,1,0,"tr",8),t.qZA()()(),t.TgZ(56,"mat-grid-tile")(57,"div")(58,"mat-form-field",9)(59,"input",10),t.NdJ("ngModelChange",function(s){return o.input=s}),t.qZA()(),t.TgZ(60,"button",11),t.NdJ("click",function(){return o.onClick()}),t.TgZ(61,"mat-icon"),t._uU(62,"search"),t.qZA()(),t.TgZ(63,"table",2),t.ynx(64,3),t.YNc(65,wt,2,0,"th",4),t.YNc(66,It,2,1,"td",5),t.BQk(),t.ynx(67,6),t.YNc(68,Et,2,0,"th",4),t.YNc(69,St,2,1,"td",5),t.BQk(),t.YNc(70,Yt,1,0,"tr",7),t.YNc(71,Zt,1,0,"tr",8),t.qZA()()()()()),2&a&&(t.xp6(8),t.Q6J("dataSource",o.numerosTodos),t.xp6(7),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(5),t.Q6J("dataSource",o.numeros144),t.xp6(7),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(5),t.Q6J("dataSource",o.numeros24),t.xp6(7),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(5),t.Q6J("dataSource",o.numeros6),t.xp6(7),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(4),t.Q6J("ngModel",o.input),t.xp6(4),t.Q6J("dataSource",o.numeros),t.xp6(7),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns))},dependencies:[at.KE,S.a8,S.n5,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,ot.RK,Y.Il,Y.DX,nt.Hw,h.Fj,h.wV,h.JJ,h.On]})}var Z=l(8996);const Nt=[{path:"",component:M}];class b{static#t=this.\u0275fac=function(a){return new(a||b)};static#e=this.\u0275mod=t.oAB({type:b});static#i=this.\u0275inj=t.cJS({imports:[Z.Bz.forChild(Nt),Z.Bz]})}class v{static#t=this.\u0275fac=function(a){return new(a||v)};static#e=this.\u0275mod=t.oAB({type:v});static#i=this.\u0275inj=t.cJS({imports:[f.ez,b,N.q,h.u5]})}}}]);