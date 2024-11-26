function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,i={},n={},a=t.parcelRequire94c2;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequire94c2=a),(0,a.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>i,set:e=>i=e,enumerable:!0,configurable:!0});var i,n=new Map;i=function(e,t){for(var i=0;i<t.length-1;i+=2)n.set(t[i],{baseUrl:e,path:t[i+1]})}}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.0b9955ab.js","iGkbP","Papel.663618e1.png","j7pRi","Piedra.da1dee34.png","dRLgH","Tijera.79d79eab.png","aV0vA","Tijera-objeto.636e5577.png","9ZrpK","Papel-objeto.06c98aae.png","85RsD","Piedra-objeto.6799ee39.png"]'));var o={};o=new URL("Papel.663618e1.png",import.meta.url).toString();var r={};r=new URL("Piedra.da1dee34.png",import.meta.url).toString();var s={};s=new URL("Tijera.79d79eab.png",import.meta.url).toString();class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=this.getAttribute("label")||"Comenzar";this.shadowRoot.innerHTML=`
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        .button-container{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        button{
          background-color: #006CFC;
          width: 350px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px;
          font-family: 'Odibee Sans';
          font-weight: 400;
          font-size: 45px;
          border: 10px solid #001997;
          border-radius: 10px;
        }
      </style>
      <div class="button-container">
        <button>${e}</button>
      </div>
    `}}customElements.define("comenzar-component",l);const c=t=>{document.getElementById("app").innerHTML=`
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        h1 {
          font-family: 'Odibee Sans';
          font-size: 80px;
            color: #009048;
            widht: 280px;
        }
  
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .img-container{
          display: flex;
          flex-direction: row;
          margin: 50px;
        }

  
        img {
          width: 150px;
          height: 150px;
          margin: 10px;
        }
  
      </style>
      <div class="container">
        <h1>
         Piedra<br>
         Papel \xf3<br>
         Tijera
        </h1>
        <comenzar-component label="Comenzar"></comenzar-component>
        <div class = "img-container">
        <img src="${/*@__PURE__*/e(o)}" alt="Papel" />
        <img src="${/*@__PURE__*/e(r)}" alt="Piedra" />
        <img src="${/*@__PURE__*/e(s)}" alt="Tijera" />
        </div>
      </div>
    `,document.querySelector("comenzar-component").addEventListener("click",()=>{t.navigate("/game")})};let d=[],p=0,m=0;(()=>{let e=localStorage.getItem("gameState");if(e){let{gameHistory:t,userWins:i,computerWins:n}=JSON.parse(e);d=t||[],p=i||0,m=n||0}})();const u=()=>{let e={gameHistory:d,userWins:p,computerWins:m};localStorage.setItem("gameState",JSON.stringify(e))},g={gameHistory:d,userWins:p,computerWins:m,addGameToHistory:(e,t,i)=>{d.push({userChoice:e,computerChoice:t,result:i}),"Ganaste"===i?p+=1:"Perdiste"===i&&(m+=1),u()}},h=t=>{document.getElementById("app").innerHTML=`
    <style>

    @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    *{
    font-family: 'Odibee Sans';
    }

    body{
    margin: 0px;
    }
    
    .title-container{
    font-size: 30px;
    width: 500px;
    }


    .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    }


    .img-container{
    display: flex;
    flex-direction: row;
    margin: 50px;
    }


    .opcion-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    }


    img{
      width: 100px;
      height: 100px;
      margin: 10px;
      cursor: pointer;
    }
    
    </style>
    <div class = "container">
    <div class = "title-container">
    <h1>Para jugar elige una opcion entre piedra, papel o tijera</h1>
    </div>
    <div class="img-container">
    <div class="opcion-container" ><img id="piedra" src="${/*@__PURE__*/e(r)}" alt="Piedra" /> Piedra </div>  
     <div class="opcion-container"> <img id="papel" src="${/*@__PURE__*/e(o)}" alt="Papel" /> Papel </div>
      <div class ="opcion-container"><img id="tijera" src="${/*@__PURE__*/e(s)}" alt="Tijera" /> Tijera </div>
    </div>
    <comenzar-component label="Volver"></comenzar-component>
    </div>
    <p id="resultado"></p>
  `;let i=null,n=null,a=null;document.querySelectorAll("img").forEach(e=>{e.addEventListener("click",()=>{a=({piedra:{piedra:"Empataste",papel:"Perdiste",tijera:"Ganaste"},papel:{piedra:"Ganaste",papel:"Empataste",tijera:"Perdiste"},tijera:{piedra:"Perdiste",papel:"Ganaste",tijera:"Empataste"}})[i=e.id][n=function(){let e=["piedra","papel","tijera"],t=Math.floor(Math.random()*e.length);return e[t]}()],document.getElementById("resultado").textContent=`Tu elecci\xf3n: ${i}, Elecci\xf3n de la computadora: ${n}. Resultado: ${a}`,g.addGameToHistory(i,n,a),t.navigate("/countdown")})}),document.querySelector("comenzar-component").addEventListener("click",()=>{t.navigate("/")})};var f={};f=new URL("Tijera-objeto.636e5577.png",import.meta.url).toString();var y={};y=new URL("Papel-objeto.06c98aae.png",import.meta.url).toString();var x={};x=new URL("Piedra-objeto.6799ee39.png",import.meta.url).toString();const v=t=>{let i=document.getElementById("app");if(0===g.gameHistory.length)i.innerHTML=`
      <h1>No hay resultados a\xfan. \xa1Juega una partida!</h1>
    `,window.location.reload();else{let t=g.gameHistory[g.gameHistory.length-1],n="";n="Ganaste"===t.result?"green":"Perdiste"===t.result?"red":"gray","piedra"===t.userChoice?t.userChoice=`<img src="${/*@__PURE__*/e(x)}" alt="piedra" class="image-choice"/>`:"papel"===t.userChoice?t.userChoice=`<img src="${/*@__PURE__*/e(y)}" alt="papel" class="image-choice"/>`:"tijera"===t.userChoice&&(t.userChoice=`<img src="${/*@__PURE__*/e(f)}" alt="tijera" width="100" height="100"/>`),"piedra"===t.computerChoice?t.computerChoice=`<img src="${/*@__PURE__*/e(x)}" alt="piedra" class="image-choice"/>`:"papel"===t.computerChoice?t.computerChoice=`<img src="${/*@__PURE__*/e(y)}" alt="papel" width="100" height="100"/>`:"tijera"===t.computerChoice&&(t.computerChoice=`<img src="${/*@__PURE__*/e(f)}" alt="tijera" width="100" height="100"/>`),g.gameHistory.forEach(e=>{let a=`
      <style>
       @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      * {
        font-family: 'Odibee Sans';
      }

      body {
        margin: 0px;
      }

      .image-choice{
      width: 100px;
      height: 100px;
      background-color: transparent;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: ${n}; /* Fondo din\xe1mico */
      }

      button:hover {
        background-color: #005bb5;
      }


      .history-container{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 20px;
      }

      .history-list{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      }

      .VS{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 20px;
      }


      </style>
      <div class="container">
      <h1>\xdaltima partida</h1>
      <div class="history-container">
      <div class="history-list">
      Usuario: ${t.userChoice}
      </div>
      <div class="history-list"> 
         Maquina: ${t.computerChoice}
      </div>
         </div>
         <div class="history-list">
         Resultado: ${t.result}
      </div>
      <div class = "VS"
      <p>Usuario: ${g.userWins}</p>
      <p>M\xe1quina: ${g.computerWins}</p>
      </div>
      <comenzar-component label="Volver al Inicio"></comenzar-component>
      </div>
    `;i.innerHTML=a})}document.querySelector("comenzar-component").addEventListener("click",()=>{t.navigate("/")})};class w extends HTMLElement{constructor(){super(),this.countdownValue=3,this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.startCountdown()}startCountdown(){this.interval=setInterval(()=>{this.countdownValue--,this.updateCounter(this.countdownValue),0===this.countdownValue&&clearInterval(this.interval)},1e3)}updateCounter(e){this.shadowRoot.querySelector("#counter").textContent=e.toString()}render(){this.shadowRoot.innerHTML=`
        <style>

          .edp-loader {
	        border: 10px solid darkgray;
	        border-radius: 50%;
	        border-top: 10px solid black;
	        width: 120px;
	        height: 120px;
	        -webkit-animation: spin 2s linear infinite;
	        animation: spin 2s linear infinite;
            }

        @-webkit-keyframes spin {
	    0% { -webkit-transform: rotate(0deg); }
	        100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spin {
	    0% { transform: rotate(0deg); }
	    100% { transform: rotate(360deg); }
        }

        #counter {
            font-size: 50px;
            position: absolute;
            top: 50%;             /* Centra el n\xfamero verticalmente */
            left: 50%;            /* Centra el n\xfamero horizontalmente */
            transform: translate(-50%, -50%); 
            pointer-events: none;
            }

        </style>
        <div class = "container">
        <div class="edp-loader">
        <span id="counter">3</span>
        </div>
        </div>
      `}}customElements.define("contador-component",w);const b=e=>{document.getElementById("app").innerHTML=`
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        }

    h1 {
        font-family: 'Odibee Sans';
        font-size: 80px;
        color: #009048;
        width: 280px;
    }
    
    </style>

    <div class="container">
    <h1>El ganador es...</h1>
    <contador-component></contador-component> <!-- Inserta el componente -->
    </div>
  `,setTimeout(()=>{e.navigate("/result")},3e3)},S=new class{addRoute(e,t){this.routes[e]=t}navigate(e){window.history.pushState({},"",e),this.render(e)}render(e){let t=this.routes[e];t?t():console.error("Página no encontrada")}start(){window.addEventListener("popstate",()=>{this.render(window.location.pathname)});let e="/"===window.location.pathname?"/HomePage":window.location.pathname;this.render(e)}constructor(){this.routes={}}};S.addRoute("/",()=>{c(S)}),S.addRoute("/game",()=>{h(S)}),S.addRoute("/countdown",()=>{b(S)}),S.addRoute("/result",()=>{v(S)}),S.start();
//# sourceMappingURL=index.0b9955ab.js.map
