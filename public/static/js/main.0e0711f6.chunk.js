(this["webpackJsonpttt-front"]=this["webpackJsonpttt-front"]||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},108:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),l=a.n(o),s=(a(83),a(6)),c=a(7),i=a(9),m=a(8),u=a(20),p=a(14),h=(a(84),a(36)),d=a(30),f=a(66),E=a(10),g=a(12),b=(a(85),a(56)),v=a.n(b),N=a(67),y=(a(87),a(88),{style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Paiement",r.a.createElement(d.CardElement,{options:y})))}}]),a}(n.Component);function C(){var e=Object(d.useStripe)(),t=Object(d.useElements)(),a=function(){var a=Object(N.a)(v.a.mark((function a(n){var r,o,l,s,c,i;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i=function(e){var t=e.customerId,a=e.paymentMethodId,n=e.priceId;return fetch("http://localhost:8080/restaurateur/createsubscription",{method:"post",headers:{"Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({customerId:t,paymentMethodId:a,priceId:"price_1IGLo3Hoh2Vgz5QdnS6OVonj"})}).then((function(e){return e.json()})).then((function(e){if(e.error)throw e;return e})).then((function(e){return{paymentMethodId:a,priceId:n,subscription:e}}))},n.preventDefault(),e&&t){a.next=4;break}return a.abrupt("return");case 4:return r=t.getElement(d.CardElement),a.next=7,e.createPaymentMethod({type:"card",card:r});case 7:o=a.sent,l=o.error,s=o.paymentMethod,l?console.log("[createPaymentMethod error]",l):(console.log("[PaymentMethod]",s),c=s.id,"","",i({customerId:"",paymentMethodId:c,priceId:""}));case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("form",{className:"coForm",onSubmit:a},r.a.createElement(j,null),r.a.createElement("button",{className:"submitButton",disabled:!e},"Devenir un restaurateur Premium"))}var O=Object(f.a)("pk_test_51HAxRlHoh2Vgz5QdMpHXhINQMDhyGPR4gFvzs9vVzocySBI4WCfw8oPa7De6PC2ZJZlQKVQFRDPLU7FIGmXZC0QA00XGutN1eU"),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{className:"monAbonnement"},r.a.createElement(g.a,{className:"infoAbonnement"},r.a.createElement(E.a,null,r.a.createElement("h3",null,"Votre abonnement premium restaurateur TipPourBoire"),r.a.createElement(d.Elements,{className:"cbInput",stripe:O},r.a.createElement(C,null)))))}}]),a}(n.Component),I=a(24),k=a(45),w=a.n(k),M=(a(96),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){var e="http://localhost:8080/client/getMenu?restaurantName="+this.props.restaurantName;return r.a.createElement(g.a,{className:"qrCode"},r.a.createElement(w.a,{className:"qr",value:encodeURI(e),size:250}))}}]),a}(n.Component)),P=(a(97),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){var e="http://localhost:8080/client/getMenuTicket?restaurantName="+this.props.restaurantName;return r.a.createElement(g.a,{className:"qrCode"},r.a.createElement(w.a,{className:"qr",value:encodeURI(e),size:250}))}}]),a}(n.Component)),x=(a(98),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).redirect=function(){if(n.state.redirect)return localStorage.clear(),n.props.setLogin(!1),r.a.createElement(p.a,{to:"/connexion"})},n.handleShow=function(){n.setState({show:!0})},n.handleClose=function(){n.setState({show:!1})},n.renderButtonSub=function(){return!0===n.state.profil.abonne?r.a.createElement("div",null,r.a.createElement("button",{className:"signOut button",variant:"primary",onClick:function(){n.props.history.push("/dataClient")}},"Espace premium ",r.a.createElement("br",null))):r.a.createElement("div",null,r.a.createElement("button",{className:"signOut button",variant:"primary",onClick:function(){n.props.history.push("/abonnement")}},"Devenir Premium !",r.a.createElement("br",null)))},n.buttonEdit=function(){return 1==n.state.editing?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"button",onClick:function(){n.setState({editing:!1})}},"Modifier ",r.a.createElement("br",null)),n.renderButtonSub()):r.a.createElement("button",{className:"button",onClick:n.putProfilOnClick},"Confirmer Modification")},n.buttonCancel=function(){if(0==n.state.editing)return r.a.createElement("button",{className:"button",onClick:function(){n.setState({editing:!0}),n.getMonProfil()}},"Annuler")},n.handleInput=function(e){var t=n.state.profil;t[e.target.name]=e.target.value,n.setState({profil:t})},n.getMonProfil=function(){var e=new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"X-Requested-With":"XMLHttpRequest"});fetch("http://localhost:8080/restaurateur/profil",{method:"GET",headers:e}).then((function(e){return e.json()})).then((function(e){var t=e;n.setState({profil:t}),console.log(n.state)}),(function(e){console.log(e)}))},n.unSubscription=function(){var e=new Headers({Authorization:"Bearer "+localStorage.getItem("token")});fetch("http://localhost:8080/restaurateur/delete",{method:"POST",headers:e}).then((function(e){return e.json()})).then((function(e){n.setState({profil:e})}),(function(e){console.log(e)}))},n.modifProfil=function(){var e={restaurantName:n.state.profil.restaurantName,bossName:n.state.profil.bossName,adress:n.state.profil.adress,email:n.state.profil.email,bossFirstName:n.state.profil.bossFirstName,phone:n.state.profil.phone},t=new Headers({"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.getItem("token")}),a={method:"PUT",body:JSON.stringify(e),headers:t};fetch("http://localhost:8080/restaurateur/profil/edit",a).then((function(e){return e.json()})).then((function(e){n.setState({message:e.message}),n.setState({editing:!0})}),(function(e){console.log(e)}))},n.modifProfilLogo=function(e){e.preventDefault();var t=new FormData(e.target),a=new Headers({"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.getItem("token")});fetch("http://localhost:8080/restaurateur/profil/edit/logo",{method:"PUT",body:t,headers:a}).then((function(e){return e.json()})).then((function(e){n.setState({message:e.message}),n.getMonProfil()}),(function(e){console.log(e)}))},n.putProfilOnClick=function(){n.modifProfil()},n.state={profil:{},editing:!0,show:!1,redirect:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getMonProfil()}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{className:"styleProfil "},r.a.createElement("h2",{className:"title"},"Votre Profil"),r.a.createElement(E.a,{className:"addImage "},r.a.createElement("form",{onSubmit:this.modifProfilLogo,className:"formLogo"},r.a.createElement("img",{className:"restaurantLogo",src:"http://localhost:8080/"+this.state.profil.logo}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"file",name:"file"}),r.a.createElement("br",null),r.a.createElement("button",{className:"buttonVal",type:"submit"},"Valider"))),r.a.createElement(g.a,null," ",r.a.createElement(E.a,{md:12,className:"formProfil "},r.a.createElement("p",null,this.state.editing?r.a.createElement("h1",{className:"textProfilTitre"},this.state.profil.restaurantName):r.a.createElement("input",{type:"text",Value:this.state.profil.restaurantName,name:"restaurantName",onChange:this.handleInput})),r.a.createElement("p",null,this.state.editing?r.a.createElement("span",{className:"textProfil"},this.state.profil.bossFirstName):r.a.createElement("input",{type:"text",name:"bossFirstName",onChange:this.handleInput,Value:this.state.profil.bossFirstName})),r.a.createElement("p",null,this.state.editing?r.a.createElement("span",{className:"textProfil"},this.state.profil.bossName):r.a.createElement("input",{type:"text",name:"bossName",onChange:this.handleInput,Value:this.state.profil.bossName})),r.a.createElement("p",null,this.state.editing?r.a.createElement("span",{className:"textProfil"},this.state.profil.adress):r.a.createElement("input",{type:"text",name:"adress",onChange:this.handleInput,Value:this.state.profil.adress})),r.a.createElement("p",null,this.state.editing?r.a.createElement("span",{className:"textProfil"},this.state.profil.email):r.a.createElement("input",{type:"text",name:"email",onChange:this.handleInput,Value:this.state.profil.email})),r.a.createElement("p",null,this.state.editing?r.a.createElement("span",{className:"textProfil"},this.state.profil.phone):r.a.createElement("input",{type:"text",Value:this.state.profil.phone,name:"phone",onChange:this.handleInput})),this.buttonEdit(),this.buttonCancel()),r.a.createElement(E.a,{md:12,className:"formProfil nomProfil center"},r.a.createElement("p",{className:"qr"},"QR CODE Ticket "),r.a.createElement(P,{className:"qrCodeTicket",restaurantName:this.state.profil.restaurantName}),r.a.createElement("p",{className:"qr"},"QR CODE "),r.a.createElement(M,{className:"qrCode",restaurantName:this.state.profil.restaurantName}),r.a.createElement(I.a,{onClick:function(){window.confirm("Voulez vous vous d\xe9connecter ?"),localStorage.clear(),e.props.setLogin(!1),e.props.history.push("/")},className:"signOut1 button"},"D\xe9connexion"))))}}]),a}(n.Component)),R=a(18),D=a(11),T=a(39),L=a(34),H=(a(102),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.addLogin=function(e){e.preventDefault();var t={email:n.state.email,password:n.state.password},a=new Headers({"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"}),r={method:"POST",body:JSON.stringify(t),headers:a};fetch("https://back-end.osc-fr1.scalingo.io/restaurateur/login",r).then((function(e){return e.json()})).then((function(e){n.setState({message:e.message}),e.token&&(localStorage.setItem("token",e.token),localStorage.setItem("userID",e.userId),n.props.setLogin(!0),n.props.history.push("/homepage"))}))},n.state={email:"",message:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e;return r.a.createElement(h.a,{className:"connexion-container"},r.a.createElement(g.a,null,r.a.createElement(E.a,{className:"connexionPass",md:7},r.a.createElement("h1",{className:"titreCo"},"D\xe9j\xe0 membre ?"),r.a.createElement("h1",{className:"titreCo"},"Connectez-vous !"),r.a.createElement(D.a,{className:"identifiants"},r.a.createElement(T.a,{className:"mb-2 sizeForm"},r.a.createElement(L.a,{name:"email",id:"inlineFormInputGroup",placeholder:"Email",onChange:this.handleInput})),r.a.createElement(D.a.Label,{htmlFor:"inlineFormInput",srOnly:!0},"Mot de passe"),r.a.createElement(D.a.Control,{name:"password",className:"mb-2",id:"inlineFormInput",placeholder:"Mot de passe",type:"password",onChange:this.handleInput}),r.a.createElement(u.b,{className:"inscrip",to:"/passwordReset"},r.a.createElement("p",{className:"mdp"},"Mot de passe oubli\xe9 ?")),r.a.createElement(I.a,(e={type:"submit",className:"mb-2"},Object(R.a)(e,"className","sign-up"),Object(R.a)(e,"onClick",this.addLogin),e),"Se connecter"),r.a.createElement(E.a,{className:"colMembre",xs:12},r.a.createElement("p",{className:"membre"},"Pas encore membre ?",r.a.createElement(u.b,{className:"compte",to:"/inscription"},""," Cr\xe9er mon compte")))),this.state.message),r.a.createElement(E.a,{className:"imageDeskRestau",md:5})))}}]),a}(n.Component)),A=(a(104),n.Component,a(105),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.addNewRegister=function(e){e.preventDefault();var t=new FormData(e.target),a=new Headers({"X-Requested-With":"XMLHttpRequest"});fetch("http://localhost:8080/restaurateur/inscription",{method:"POST",body:t,headers:a}).then((function(e){return e.json()})).then((function(e){n.setState({message:e.message})}),(function(e){console.log(e)}))},n.state={restaurantName:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{className:"Bloc-principal"},r.a.createElement(g.a,null,r.a.createElement(E.a,{className:"colInscr",md:6},r.a.createElement(g.a,{className:"Titre"},r.a.createElement("h1",null,"Cr\xe9er mon compte")),r.a.createElement(g.a,null,r.a.createElement("p",null,"Merci de remplir les informations ci-dessous pour finaliser la cr\xe9ation de votre compte.")),r.a.createElement(g.a,null,r.a.createElement(D.a,{className:"form",onSubmit:this.addNewRegister},r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(D.a.Group,{controlId:"formNom"},r.a.createElement(D.a.Control,{type:"text",placeholder:"Nom du restaurant",name:"restaurantName",onChange:this.handleInput})))),r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(D.a.Group,{controlId:"formPrenom"},r.a.createElement(D.a.Control,{type:"text",placeholder:"Nom ",name:"bossName",onChange:this.handleInput}))),r.a.createElement(E.a,null,r.a.createElement(D.a.Group,{controlId:"formDate"},r.a.createElement(D.a.Control,{type:"text",placeholder:"Pr\xe9nom",name:"bossFirstName",onChange:this.handleInput})))),r.a.createElement(D.a.Group,{controlId:"formAdresse"},r.a.createElement(D.a.Control,{type:"text",placeholder:"Adresse",name:"adress",onChange:this.handleInput})),r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(D.a.Group,{controlId:"formVille"},r.a.createElement(D.a.Control,{type:"text",placeholder:"T\xe9l\xe9phone",name:"phone",onChange:this.handleInput}))),r.a.createElement(E.a,null,r.a.createElement(D.a.Group,{controlId:"formTel"},r.a.createElement(D.a.Control,{type:"text",placeholder:"E-mail",name:"email",onChange:this.handleInput})))),r.a.createElement(g.a,null,r.a.createElement(E.a,{xs:6},r.a.createElement(D.a.Group,{className:"servicePropose",controlId:"formService"},r.a.createElement(D.a.Label,{controlId:"formService"},"Services propos\xe9s"),r.a.createElement(D.a.Check,{type:"checkbox",name:"noon",label:"Midi",onChange:this.handleInput}),r.a.createElement(D.a.Check,{type:"checkbox",name:"evening",label:"Soir",onChange:this.handleInput}))),r.a.createElement(E.a,{xs:6},r.a.createElement(D.a.Group,{controlId:"formService"},r.a.createElement(D.a.Label,null,"Syt\xe8mes de pourboires"),r.a.createElement(D.a.Check,{type:"checkbox",name:"alone",label:"Individuel",onChange:this.handleInput}),r.a.createElement(D.a.Check,{type:"checkbox",name:"Collectif",label:"G\xe9n\xe9ral",onChange:this.handleInput})))),r.a.createElement(D.a.Group,{controlId:"formPass"},r.a.createElement(D.a.Label,null,"Mot de passe",r.a.createElement("p",{className:"detailPassword"},"8 caract\xe8res min. : au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caract\xe8re sp\xe9cial")),r.a.createElement(D.a.Control,{type:"password",placeholder:"Mot de passe",name:"password",onChange:this.handleInput})),r.a.createElement(g.a,null,r.a.createElement(E.a,{md:9},r.a.createElement(D.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(g.a,{style:{marginLeft:"2px"}},r.a.createElement(D.a.Check,{type:"checkbox"}),r.a.createElement("a",{className:"cgvLink",href:"/CGV_TIPTOTHANK.pdf",target:"_blanck"},"Acceptez les CGU")))),r.a.createElement(E.a,{md:3},r.a.createElement(I.a,{className:"submitButton",block:!0,type:"submit"},"S'inscrire")))),r.a.createElement(E.a,{md:{span:6,offset:3}},this.state.message))),r.a.createElement(E.a,{className:"imageDeskRestau",md:6})))}}]),a}(n.Component)),z=a(35),q=(a(106),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).delete=function(e){window.confirm("Etes-vous sur de vouloir supprimer le menu du jour ?"),e.preventDefault();var t={dailyMenu:n.state.menu.dailyMenu},a=new Headers({Authorization:"bearer "+localStorage.getItem("token")}),r={method:"DELETE",body:JSON.stringify(t),headers:a};fetch("http://localhost:8080/restaurateur/dailymenu/delete",r).then((function(e){return e.json()})).then((function(e){n.setState({message:e.message}),n.getDailyMenu()}),(function(e){console.log(e)}))},n.onSubmit=function(e){e.preventDefault();var t=new FormData(e.target),a=new Headers({Authorization:"bearer "+localStorage.getItem("token")});fetch("http://localhost:8080/restaurateur/dailymenu/add",{method:"PUT",body:t,headers:a}).then((function(e){return e.json()})).then((function(e){n.setState({message:e.message}),n.getDailyMenu()}),(function(e){console.log(e)}))},n.getDailyMenu=function(){var e=new Headers({Authorization:"bearer "+localStorage.getItem("token")});fetch("http://localhost:8080/restaurateur/menu",{method:"GET",headers:e}).then((function(e){return e.json()})).then((function(e){n.setState({menu:e.menu})}),(function(e){console.log(e)}))},n.noMenu=function(){return""==n.state.menu.dailyMenu.picture&&""==n.state.menu.dailyMenu.label?r.a.createElement("p",null,"Vous n'avez pas de menu du jour"):r.a.createElement(z.a.Img,{variant:"top",src:"http://localhost:8080/"+n.state.menu.dailyMenu.picture,className:"dailyMenu",alt:"Menu du Jour"})},n.state={message:"",menu:{dailyMenu:{picture:"",label:""}}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getDailyMenu()}},{key:"render",value:function(){return r.a.createElement(h.a,{className:"dailyMenuContain"},r.a.createElement(g.a,null,r.a.createElement(E.a,{md:{span:6,offset:3}},r.a.createElement("h2",{className:"menujour"},"Menu du Jour")),r.a.createElement(E.a,{className:"colMenu",md:12},r.a.createElement("form",{className:"formMenu",onSubmit:this.onSubmit},r.a.createElement("input",{className:"button",type:"file",name:"file"}),r.a.createElement("button",{className:"bouton",type:"submit"},"Valider")),this.noMenu(),r.a.createElement(z.a.Body,{classNam:"cardsupp"},r.a.createElement("p",null,this.state.menu.dailyMenu.label),r.a.createElement("button",{className:"boutonSupprimer",type:"submit",onClick:this.delete},"Supprimer le menu")))))}}]),a}(n.Component)),V=(a(107),a(69)),G=a.n(V),B=(a(108),a(109),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getWaiterList=function(){var e=new Headers({Authorization:"bearer "+localStorage.getItem("token")});fetch("http://localhost:8080/restaurateur/management/waiter-list",{method:"GET",headers:e}).then((function(e){return e.json()})).then((function(e){n.setState({serveur:e}),console.log(n.state.serveur)}),(function(e){console.log(e)}))},n.renderMesServeurs=function(){return n.state.serveur.tabServeur.map((function(e){return r.a.createElement("div",{className:"serveurDiv"},r.a.createElement("p",{className:"serveurP"},e.serveurName),r.a.createElement("button",{className:"button",onClick:function(){var t={mail:e.serveurMail},a={method:"DELETE",headers:new Headers({"Content-Type":"application/json",Authorization:"bearer "+localStorage.getItem("token")}),body:JSON.stringify(t)};fetch("http://localhost:8080/restaurateur/management/waiter-delete",a).then((function(e){return e.json()})).then((function(e){n.getWaiterList()}),(function(e){console.log(e)}))}},"X"))}))},n.handleInput=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.addAffiliation=function(e){e.preventDefault();var t={email:n.state.email,nom:n.state.nom},a=new Headers({"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.getItem("token")}),r={method:"POST",body:JSON.stringify(t),headers:a};fetch("http://localhost:8080/restaurateur/management/affiliation",r).then((function(e){return e.json()})).then((function(e){n.setState({message:e.message})}))},n.addReferent=function(e){e.preventDefault();var t={email:n.state.email},a=new Headers({"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.getItem("token")}),r={method:"POST",body:JSON.stringify(t),headers:a};fetch("http://localhost:8080/restaurateur/management/referent",r).then((function(e){return e.json()})).then((function(e){n.setState({message:e.message})}))},n.crew=function(){return n.state.serveur?r.a.createElement(E.a,{className:"crewStyle"},r.a.createElement(G.a,{slidesPerPage:5,slidesPerScroll:1,clickToChange:!0,centered:!0,infinite:!0,breakpoints:{1e3:{slidesPerPage:0,clickToChange:!1,centered:!1},500:{slidesPerPage:1,slidesPerScroll:1,clickToChange:!1,centered:!1,animationSpeed:2e3,infinite:!1}}},n.renderMesServeurs())):r.a.createElement("p",{className:"affiliation"},"Vous n'avez pas de personnel affili\xe9")},n.state={serveur:{tabServeur:[]},email:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getWaiterList()}},{key:"render",value:function(){return r.a.createElement(h.a,{className:"container personnel"},r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement("h2",{className:"title-container"},"Gestion de mon \xe9quipe"))),r.a.createElement(g.a,null,r.a.createElement(E.a,{className:"colAffiliation"},r.a.createElement(E.a,{md:12},r.a.createElement("label",{className:"demandeAffiliation"},"Demande d'affiliation")),r.a.createElement("input",{type:"text",name:"email",onChange:this.handleInput,placeholder:"Email du serveur",className:"inputAffi"}),r.a.createElement("input",{type:"submit",value:"Envoyer",onClick:this.addAffiliation,className:"button"}),r.a.createElement(E.a,{md:12},r.a.createElement("label",{className:"demandeAffiliation"},"Cr\xe9ation compte r\xe9f\xe9rent pour le pourboire commun")),r.a.createElement("input",{type:"text",name:"email",onChange:this.handleInput,placeholder:"Email du serveur",className:"inputAffi"}),r.a.createElement("input",{type:"submit",value:"Envoyer",onClick:this.addReferent,className:"button"}),r.a.createElement("br",null),this.state.message)),r.a.createElement("h2",{className:"titleWaiter"},"Votre \xe9quipe "),this.crew())}}]),a}(n.Component)),F=(a(113),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getRestaurantName=function(){var e=new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"X-Requested-With":"XMLHttpRequest"});fetch("http://localhost:8080/restaurateur/profil",{method:"GET",headers:e}).then((function(e){return e.json()})).then((function(e){n.setState({restaurantName:e.restaurantName})}),(function(e){console.log(e)}))},n.state={restaurantName:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getRestaurantName()}},{key:"render",value:function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(g.a,null,r.a.createElement(E.a,{md:{span:6,offset:3}},r.a.createElement(B,{className:"personnel"}),r.a.createElement("h2",{className:"titleQR"},"Votre QR Code "),r.a.createElement(M,{restaurantName:this.state.restaurantName})),r.a.createElement(E.a,{md:{span:6,offset:3}},r.a.createElement(q,{className:"menuhome"}))))}}]),a}(n.Component)),X=a(59),J=(a(114),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getOtherMenu=function(){var e=new Headers({Authorization:"bearer "+localStorage.getItem("token")});fetch("http://localhost:8080/restaurateur/menu",{method:"GET",headers:e}).then((function(e){return e.json()})).then((function(e){n.setState({menu:e.menu})}),(function(e){console.log(e)}))},n.noMenu=function(){return n.state.menu.otherMenu&&n.state.menu.otherMenu.length?r.a.createElement("div",null,r.a.createElement(X.a,null,n.display())):r.a.createElement("p",null,"Vous n'avez pas de menu pour l'instant")},n.onSubmit=function(e){e.preventDefault();var t=new FormData(e.target),a=new Headers({Authorization:"bearer "+localStorage.getItem("token")});fetch("http://localhost:8080/restaurateur/menu/add",{method:"POST",body:t,headers:a}).then((function(e){return e.json()})).then((function(e){n.setState({message:e.message}),n.getOtherMenu()}),(function(e){console.log(e)}))},n.deleteMenu=function(e,t){e.preventDefault();var a={picture:n.state.menu.otherMenu[t].picture},r=new Headers({"Content-type":"application/json",Authorization:"bearer "+localStorage.getItem("token")}),o={method:"DELETE",body:JSON.stringify(a),headers:r};fetch("http://localhost:8080/restaurateur/menu/delete",o).then((function(e){return e.json()})).then((function(e){n.setState({message:e.message}),n.getOtherMenu()}),(function(e){console.log(e)}))},n.display=function(){var e=[];return n.state.menu.otherMenu.map((function(t,a){e.push(r.a.createElement(X.a.Item,null,r.a.createElement(z.a,{style:{width:"100%"}},r.a.createElement(z.a.Img,{variant:"top",src:"http://localhost:8080/"+t.picture}),r.a.createElement(z.a.Body,null,r.a.createElement(I.a,{onClick:function(e){return n.deleteMenu(e,a)},className:"bouton"},"Supprimer le menu")))))})),e},n.state={menu:{otherMenu:[]}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getOtherMenu()}},{key:"render",value:function(){return r.a.createElement(h.a,{className:"menuContain"},r.a.createElement(g.a,null,r.a.createElement(E.a,{md:{span:6,offset:3},className:"menu"},r.a.createElement("h2",null,"Mes Menus")),r.a.createElement(E.a,{md:12},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"file",name:"file",multiple:!0,accept:"image/png, image/jpeg, image/jpg"}),r.a.createElement("button",{className:"bouton",type:"submit"},"Valider")),this.noMenu())))}}]),a}(n.Component)),W=(a(115),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"menus"},r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(q,null)),r.a.createElement(E.a,{md:12,sm:12},r.a.createElement(J,null))))}}]),a}(n.Component)),Q=(a(116),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.passwordRenew=function(e){if(e.preventDefault(),n.state.email&&n.state.password){var t={email:n.state.email,password:n.state.password,token:n.props.match.params.token},a={method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(t)};fetch("http://localhost:8080/serveur/password-renew",a).then((function(e){return e.json()})).then((function(e){n.setState({message:e.message})}),(function(e){console.log(e)}))}},n.state={email:"",password:"",message:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{className:"renewPass"},r.a.createElement(g.a,null,r.a.createElement(E.a,{className:"PassRenewCol",md:12},r.a.createElement("h1",{className:"newPass"}," Votre nouveau mot de passe"),r.a.createElement("form",{className:"formRenew",onSubmit:this.passwordRenew},r.a.createElement("input",{className:"inputRenew",type:"email",id:"email",name:"email",onChange:this.handleInput,placeholder:"Email"}),r.a.createElement("br",null),r.a.createElement("input",{className:"inputRenew",type:"password",id:"password",name:"password",onChange:this.handleInput,placeholder:"Nouveau mot de passe"}),r.a.createElement("br",null),r.a.createElement(I.a,{className:"renewButton"},"Valider")),r.a.createElement("p",null,this.state.message))))}}]),a}(n.Component)),U=(a(117),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.passwordReset=function(e){if(e.preventDefault(),n.state.email){var t={email:n.state.email},a={method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(t)};fetch("http://localhost:8080/serveur/password-reset",a).then((function(e){return e.json()})).then((function(e){n.setState({message:e.message})}),(function(e){console.log(e)}))}},n.state={email:"",message:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{className:"passwordReset"},r.a.createElement(g.a,null,r.a.createElement(E.a,{className:"PassResetCol",md:12},r.a.createElement("div",{className:"PassResetDiv"},r.a.createElement("h1",{className:"taille"},"Veuillez saisir votre mail "),r.a.createElement("h1",{className:"titrePass taille"},"pour r\xe9initialiser votre mot de passe "),r.a.createElement("form",{className:"formReset",onSubmit:this.passwordReset},r.a.createElement("input",{className:"inputReset",type:"email",id:"email",name:"email",onChange:this.handleInput,placeholder:"Email"})))),r.a.createElement(E.a,{className:"ButtonReset",md:12},r.a.createElement(I.a,{className:"resetButton"},"Confirmer"),r.a.createElement("p",null,this.state.message))))}}]),a}(n.Component)),_=(a(118),a(127)),K=(a(119),n.Component,function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).connect=function(){return n.props.login?r.a.createElement(h.a,{fluid:!0},r.a.createElement(g.a,{className:"partie1"},r.a.createElement(_.a,{className:"nav justify-content-right"},r.a.createElement(_.a.Toggle,{alignRight:!0,variant:"success",id:"dropdown-basic"},r.a.createElement("img",{src:"/image/user.png"})),r.a.createElement(_.a.Menu,null,r.a.createElement(_.a.Item,{href:"/Profil"},"profil"),r.a.createElement(_.a.Item,{href:"/menus"},"Menu"),r.a.createElement(_.a.Item,{href:"/equipe"},"Mon \xe9quipe"))),r.a.createElement(E.a,{className:"logoPartie1",md:12},r.a.createElement(u.b,{to:"/homepage"},r.a.createElement("img",{src:"/image/logoJaune.png"}))))):r.a.createElement(h.a,{fluid:!0},r.a.createElement(g.a,{className:"partie1"},r.a.createElement(_.a,{className:"nav justify-content-right"},r.a.createElement(_.a.Toggle,{alignRight:!0,variant:"success",id:"dropdown-basic"},r.a.createElement("img",{src:"/image/user.png"})),r.a.createElement(_.a.Menu,null,r.a.createElement(_.a.Item,{href:"/Home"},"Inscription"),r.a.createElement(_.a.Item,{href:"/"},"Connexion"))),r.a.createElement(E.a,{className:"logoPartie1",md:12},r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{src:"/image/logoJaune.png"})))))},n.state={},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){this.connect()}},{key:"render",value:function(){return r.a.createElement("div",{className:"barre-de-menu"},this.connect())}}]),a}(n.Component)),Z=(a(121),a(129)),$=a(128),Y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(Z.a,{fixed:"bottom",collapseOnSelect:!0,expand:"lg",bg:"#edeaea"},r.a.createElement(Z.a.Brand,{href:"#home",className:"textFooter"},"@TiPourBoire"),r.a.createElement(Z.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(Z.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement($.a,{className:"mr-auto"},r.a.createElement($.a.Link,{href:"/CGV_TIPTOTHANK.pdf",target:"_blanck",className:"textFooter"},"Condition G\xe9n\xe9ral"),r.a.createElement($.a.Link,{href:"https://tipourboire.com",className:"textFooter"},"Contact")),r.a.createElement($.a,null,r.a.createElement($.a.Link,{eventKey:2,href:"https://tipourboire.com",className:"textFooter"},"A propos")))))}}]),a}(n.Component),ee=a(73),te=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getDataClient=function(){var e=new Headers({"Content-Type":"application/json",Authorization:"bearer "+localStorage.getItem("token")});fetch("http://localhost:8080/restaurateur/getDataClient",{method:"GET",headers:e}).then((function(e){return e.json()})).then((function(e){var t=e;n.setState({client:t,object:t})}),(function(e){console.log(e)}))},n.display=function(){return n.state.client.map((function(e,t){return r.a.createElement(ee.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{type:"text",id:"firstname",name:"firstname"}," ",e.firstname),r.a.createElement("td",{type:"text",id:"lastname",name:"lastname"}," ",e.lastname),r.a.createElement("td",{type:"text",id:"email",name:"email"}," ",e.email),r.a.createElement("td",{type:"text",id:"phone",name:"phone"}," ",e.phone),r.a.createElement("td",{type:"text",id:"age",name:"age"}," ",e.age))))}))},n.state={client:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getDataClient()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Base de donn\xe9es client"),r.a.createElement("div",null,this.display()))}}]),a}(n.Component),ae=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setLogin=function(e){n.setState({login:e})},n.state={login:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){null!==localStorage.getItem("token")&&this.setState({login:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(K,{setLogin:this.setLogin,login:this.state.login}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(H,Object.assign({setLogin:e.setLogin},t))}}),r.a.createElement(p.b,{path:"/homepage",component:F}),r.a.createElement(p.b,{path:"/inscription",component:A}),r.a.createElement(p.b,{path:"/profil",render:function(t){return r.a.createElement(x,Object.assign({setLogin:e.setLogin},t))}}),r.a.createElement(p.b,{path:"/dataClient",component:te}),r.a.createElement(p.b,{path:"/menus",component:W}),r.a.createElement(p.b,{path:"/equipe",component:B}),r.a.createElement(p.b,{path:"/abonnement",component:S}),r.a.createElement(p.b,{path:"/passwordRenew",component:Q}),r.a.createElement(p.b,{path:"/passwordReset",component:U})),r.a.createElement(Y,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){e.exports=a(122)},83:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.0e0711f6.chunk.js.map