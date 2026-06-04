(() => {
  "use strict";

  if (document.getElementById("popup-resmi-wrap")) return;

  const banners = [
    { img: "http://plcl.me/images/WAwam.jpg", link: "https://click-lynk.com/JADWAL-BOLA" },
    { img: "http://plcl.me/images/YrdPa.jpg", link: "https://click-lynk.com/CBEVNT2-FIFAWORLDCUP" },
    { img: "http://plcl.me/images/FDg3h.jpg", link: "https://click-lynk.com/CBEVNT3-PENALTY" }
  ];

  const style = document.createElement("style");
  style.textContent = `
    #popup-resmi-wrap{
      position:fixed;
      inset:0;
      z-index:99999999;
      display:flex;
      align-items:center;
      justify-content:center;
      background:rgba(0,0,0,.68);
      padding:18px;
      box-sizing:border-box;
      font-family:Arial,sans-serif;
    }

    #popup-resmi-box{
      position:relative;
      width:100%;
      max-width:760px;
      background:transparent;
      text-align:center;
    }

    .popup-close{
      position:absolute;
      top:-26px;
      right:2px;
      z-index:10;
      color:#0b8cff;
      font-size:24px;
      cursor:pointer;
      font-weight:900;
      text-shadow:0 0 10px rgba(0,140,255,.8);
    }

    .popup-img-link{
      display:block;
      margin:0;
      padding:0;
    }

    #popup-main-img{
      width:100%;
      display:block;
      border:0;
      filter:none !important;
      transform:none !important;
      box-shadow:0 18px 45px rgba(0,0,0,.45);
    }

    .popup-nav{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:10px;
      margin-top:-32px;
      position:relative;
      z-index:6;
      pointer-events:auto;
    }

    .popup-arrow{
      width:25px;
      height:25px;
      border-radius:50%;
      border:1px solid #ffc94a;
      background:rgba(0,0,0,.72);
      color:#ffd36a;
      font-size:18px;
      font-weight:900;
      line-height:20px;
      cursor:pointer;
      padding:0;
      box-shadow:0 0 10px rgba(255,205,70,.35);
    }

    .popup-dots{
      display:flex;
      gap:6px;
      align-items:center;
      padding:5px 8px;
      border-radius:999px;
      background:rgba(0,0,0,.55);
    }

    .popup-dot{
      width:7px;
      height:7px;
      border-radius:50%;
      background:#777;
      cursor:pointer;
      display:block;
    }

    .popup-dot.active{
      background:#ffd36a;
      box-shadow:0 0 8px #ffd36a;
    }

    .popup-contact{
      display:flex;
      justify-content:center;
      gap:10px;
      margin-top:12px;
      position:relative;
      z-index:7;
    }

    .popup-contact a{
      position:relative;
      overflow:hidden;
      min-width:122px;
      padding:10px 14px;
      border-radius:999px;
      color:#fff;
      text-decoration:none;
      font-size:12px;
      font-weight:900;
      letter-spacing:.3px;
      box-shadow:0 8px 18px rgba(0,0,0,.35);
      transition:transform .18s ease, box-shadow .18s ease;
    }

    .popup-contact a:hover{
      transform:translateY(-2px) scale(1.03);
      box-shadow:0 0 18px rgba(255,255,255,.45);
    }

    .popup-contact a::after{
      content:"";
      position:absolute;
      top:-60%;
      left:-80%;
      width:45%;
      height:220%;
      background:linear-gradient(120deg,transparent,rgba(255,255,255,.75),transparent);
      transform:rotate(25deg);
      opacity:0;
    }

    .popup-contact a:hover::after{
      opacity:1;
      animation:cbShine .7s ease forwards;
    }

    @keyframes cbShine{
      from{left:-80%;}
      to{left:130%;}
    }

    .popup-wa{
      background:linear-gradient(135deg,#2cff77,#078a3d);
      border:1px solid #9dffc2;
    }

    .popup-tele{
      background:linear-gradient(135deg,#35c7ff,#09659b);
      border:1px solid #9ce7ff;
    }

    @media(max-width:480px){
      #popup-resmi-wrap{
        padding:14px;
      }

      #popup-resmi-box{
        max-width:100%;
      }

      .popup-nav{
        margin-top:-28px;
      }

      .popup-contact{
        margin-top:10px;
      }

      .popup-contact a{
        min-width:106px;
        font-size:11px;
        padding:9px 10px;
      }
    }
  `;
  document.head.appendChild(style);

  const popup = document.createElement("div");
  popup.id = "popup-resmi-wrap";

  popup.innerHTML = `
    <div id="popup-resmi-box">
      <div class="popup-close">×</div>

      <a class="popup-img-link" href="${banners[0].link}" target="_blank">
        <img id="popup-main-img" src="${banners[0].img}" alt="World Cup Event">
      </a>

      <div class="popup-nav">
        <button class="popup-arrow popup-prev" type="button">‹</button>
        <div class="popup-dots">
          <span class="popup-dot active"></span>
          <span class="popup-dot"></span>
          <span class="popup-dot"></span>
        </div>
        <button class="popup-arrow popup-next" type="button">›</button>
      </div>

      <div class="popup-contact">
        <a class="popup-wa" href="https://click-lynk.com/WHATSAPP_OFFICIAL_CLICKBET88WL" target="_blank">WHATSAPP</a>
        <a class="popup-tele" href="https://click-lynk.com/TELEGRAM_OFFCIAL_CLICKBET88WL" target="_blank">TELEGRAM</a>
      </div>
    </div>
  `;

  document.body.appendChild(popup);

  let index = 0;
  const img = popup.querySelector("#popup-main-img");
  const link = popup.querySelector(".popup-img-link");
  const dots = popup.querySelectorAll(".popup-dot");

  function showBanner(i){
    index = (i + banners.length) % banners.length;
    img.src = banners[index].img;
    link.href = banners[index].link;

    dots.forEach((dot, n) => {
      dot.classList.toggle("active", n === index);
    });
  }

  popup.querySelector(".popup-next").onclick = () => showBanner(index + 1);
  popup.querySelector(".popup-prev").onclick = () => showBanner(index - 1);

  dots.forEach((dot, i) => {
    dot.onclick = () => showBanner(i);
  });

  popup.querySelector(".popup-close").onclick = () => popup.remove();
})();
