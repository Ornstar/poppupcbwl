(function () {

  var bannerURL = "http://plcl.me/images/MjhjA.jpeg";
  var claimURL = "https://click-lynk.com/LIVECHAT_CLICKBET88WL";

  var path = window.location.pathname.toLowerCase();

  if (
    path !== "/" &&
    path !== "/home" &&
    path !== "/home/" &&
    path !== "/index.html"
  ) {
    return;
  }

  if (document.getElementById("cb88PopupWrap")) {
    return;
  }

  var style = document.createElement("style");

  style.innerHTML = `
    #cb88PopupWrap{
      position:fixed;
      inset:0;
      z-index:999999;
      background:rgba(0,0,0,.55);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:12px;
    }

    #cb88Popup{
      width:100%;
      max-width:320px;
      background:#071b4d;
      border-radius:14px;
      overflow:hidden;
      border:1px solid rgba(255,215,0,.25);
      box-shadow:0 8px 24px rgba(0,0,0,.45);
      font-family:Arial,Helvetica,sans-serif;
    }

    #cb88Popup img{
      width:100%;
      display:block;
    }

    #cb88Action{
      padding:10px;
      background:#081944;
    }

    #cb88Claim{
      display:block;
      width:100%;
      text-align:center;
      text-decoration:none;
      padding:10px;
      margin-bottom:6px;
      border-radius:8px;
      background:linear-gradient(180deg,#ffd700,#d4a300);
      color:#000;
      font-size:13px;
      font-weight:800;
      letter-spacing:.5px;
      box-shadow:0 0 8px rgba(255,215,0,.25);
    }

    #cb88Close{
      display:block;
      width:100%;
      border:none;
      padding:10px;
      border-radius:8px;
      background:linear-gradient(180deg,#ff2b2b,#b90000);
      color:#fff;
      font-size:13px;
      font-weight:800;
      letter-spacing:.5px;
      cursor:pointer;
      box-shadow:0 0 8px rgba(255,0,0,.20);
    }

    #cb88Claim:hover,
    #cb88Close:hover{
      filter:brightness(1.05);
    }

    @media(max-width:380px){
      #cb88Popup{
        max-width:300px;
      }

      #cb88Claim,
      #cb88Close{
        font-size:12px;
        padding:9px;
      }
    }
  `;

  document.head.appendChild(style);

  var wrap = document.createElement("div");
  wrap.id = "cb88PopupWrap";

  wrap.innerHTML = `
    <div id="cb88Popup">

      <img
        src="${bannerURL}"
        alt="CLICKBET88"
      >

      <div id="cb88Action">

        <a
          id="cb88Claim"
          href="${claimURL}"
          target="_blank"
          rel="noopener"
        >
          KLAIM SEKARANG
        </a>

        <button id="cb88Close">
          TUTUP
        </button>

      </div>

    </div>
  `;

  document.body.appendChild(wrap);

  document.getElementById("cb88Close").onclick = function () {
    wrap.remove();
  };

})();
