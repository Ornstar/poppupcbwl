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
      background:rgba(0,0,0,.55);
      padding:14px;
      box-sizing:border-box;
      font-family:Arial,sans-serif;
    }

    #popup-resmi-box{
      position:relative;
      width:100%;
      max-width:720px;
      text-align:center;
      background:transparent;
    }

    .popup-close{
      position:absolute;
      top:-26px;
      right:0;
      color:#168cff;
      font-size:24px;
      cursor:pointer;
      font-weight:900;
      line-height:1;
    }

    .popup-img-link,
    #popup-main-img{
      display:block;
      width:100%;
      border:0;
      margin:0;
      padding:0;
    }

    .popup-nav{
      display:flex;
      justify-content:center;
      align-items:center;
      gap:8px;
      margin-top:-30px;
      position:relative;
      z-index:2;
    }

    .popup-arrow{
      width:24px;
      height:24px;
      border-radius:50%;
      border:1px solid #ffd36a;
      background:#111;
      color:#ffd36a;
      font-size:17px;
      cursor:pointer;
      padding:0;
    }

    .popup-dots{
      display:flex;
      gap:6px;
      background:rgba(0,0,0,.45);
      padding:5px 8px;
      border-radius:20px;
    }

    .popup-dot{
      width:7px;
      height:7px;
      border-radius:50%;
      background:#777;
      cursor:pointer;
    }

    .popup-dot.active{
      background:#ffd36a;
    }

    .popup-contact{
      display:flex;
      justify-content:center;
      gap:10px;
      margin-top:10px;
    }

    .popup-contact a{
      min-width:128px;
      padding:9px 12px;
      border-radius:20px;
      color:#fff;
      text-decoration:none;
      font-size:12px;
      font-weight:900;
      transition:opacity .15s ease, transform .15s ease;
    }

    .popup-contact a:hover{
      opacity:.9;
      transform:translateY(-1px);
    }

    .popup-help{
      background:#168cff;
    }

    .popup-report{
      background:#ef4444;
    }

    @media(max-width:480px){
      #popup-resmi-box{
        max-width:100%;
      }

      .popup-contact{
        gap:8px;
      }

      .popup-contact a{
        min-width:112px;
        font-size:11px;
        padding:8px 10px;
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
        <img id="popup-main-img" src="${banners[0].img}" alt="World Cup Event" loading="eager">
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
        <a class="popup-help" href="https://click-lynk.com/LIVECHAT_CLICKBET88WL" target="_blank">HUBUNGI KAMI</a>
        <a class="popup-report" href="https://pengaduancb88.lovable.app/" target="_blank">FORM PENGADUAN</a>
      </div>
    </div>
  `;

  function runPopup(){
    document.body.appendChild(popup);

    let index = 0;
    const img = popup.querySelector("#popup-main-img");
    const link = popup.querySelector(".popup-img-link");
    const dots = popup.querySelectorAll(".popup-dot");

    function showBanner(i){
      index = (i + banners.length) % banners.length;
      img.src = banners[index].img;
      link.href = banners[index].link;
      dots.forEach((dot, n) => dot.classList.toggle("active", n === index));
    }

    popup.querySelector(".popup-next").onclick = () => showBanner(index + 1);
    popup.querySelector(".popup-prev").onclick = () => showBanner(index - 1);
    dots.forEach((dot, i) => dot.onclick = () => showBanner(i));
    popup.querySelector(".popup-close").onclick = () => popup.remove();

    setInterval(() => {
      if (document.body.contains(popup)) showBanner(index + 1);
    }, 5000);
  }

  if (document.readyState === "complete") {
    setTimeout(runPopup, 800);
  } else {
    window.addEventListener("load", () => setTimeout(runPopup, 800));
  }
})();
