(function () {
  var bannerURL = "http://plcl.me/images/MjhjA.jpeg";
  var claimURL = "https://click-lynk.com/LIVECHAT_CLICKBET88WL";
  var hideHours = 24;

  var lastClose = localStorage.getItem("cb88_popup_close");
  if (lastClose && Date.now() - Number(lastClose) < hideHours * 60 * 60 * 1000) return;

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
      position:relative;
      width:100%;
      max-width:320px;
      background:#071b4d;
      border-radius:14px;
      overflow:hidden;
      border:1px solid rgba(255,215,0,.28);
      box-shadow:0 8px 24px rgba(0,0,0,.45);
      font-family:Arial,Helvetica,sans-serif;
    }

    #cb88Popup img{
      width:100%;
      display:block;
    }

    #cb88Close{
      position:absolute;
      top:8px;
      right:8px;
      width:30px;
      height:30px;
      border:0;
      border-radius:50%;
      background:rgba(0,0,0,.65);
      color:#fff;
      font-size:18px;
      font-weight:bold;
      cursor:pointer;
      line-height:30px;
    }

    #cb88Action{
      padding:10px;
      text-align:center;
      background:#081944;
    }

    #cb88Claim{
      display:inline-block;
      padding:10px 22px;
      border-radius:8px;
      background:linear-gradient(180deg,#ff2b2b,#b90000);
      color:#fff;
      text-decoration:none;
      font-size:13px;
      font-weight:800;
      box-shadow:0 0 10px rgba(255,0,0,.35);
    }

    #cb88Claim:hover{
      filter:brightness(1.08);
    }

    @media(max-width:380px){
      #cb88Popup{max-width:300px;}
      #cb88Claim{font-size:12px;padding:9px 18px;}
    }
  `;
  document.head.appendChild(style);

  var wrap = document.createElement("div");
  wrap.id = "cb88PopupWrap";
  wrap.innerHTML = `
    <div id="cb88Popup">
      <button id="cb88Close">×</button>
      <img src="${bannerURL}" alt="CLICKBET88">
      <div id="cb88Action">
        <a id="cb88Claim" href="${claimURL}" target="_blank" rel="noopener">
          KLAIM SEKARANG
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(wrap);

  document.getElementById("cb88Close").onclick = function () {
    localStorage.setItem("cb88_popup_close", Date.now());
    wrap.remove();
  };
})();
