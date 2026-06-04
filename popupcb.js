(() => {
  "use strict";

  if (document.getElementById("popup-resmi-wrap")) return;

  const banners = [
    {
      img: "http://plcl.me/images/WAwam.jpg",
      link: "https://click-lynk.com/JADWAL-BOLA"
    },
    {
      img: "http://plcl.me/images/YrdPa.jpg",
      link: "https://click-lynk.com/CBEVNT2-FIFAWORLDCUP"
    },
    {
      img: "http://plcl.me/images/FDg3h.jpg",
      link: "https://click-lynk.com/CBEVNT3-PENALTY"
    }
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
      background:transparent !important;
      border-radius:0;
      overflow:visible;
      box-shadow:none;
      text-align:center;
    }

    .popup-close{
      position:absolute;
      top:-28px;
      right:0;
      z-index:10;
      color:#0b5cff;
      font-size:24px;
      cursor:pointer;
      font-weight:700;
      line-height:1;
    }

    .popup-img-link{
      display:block;
      margin:0;
      padding:0;
      background:transparent;
    }

    #popup-main-img{
      width:100%;
      height:auto;
      display:block;
      border:0;
      margin:0;
      padding:0;
      filter:none !important;
      transform:none !important;
      image-rendering:auto;
    }

    .popup-nav{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:10px;
      padding:8px 0 8px;
      background:transparent !important;
    }

    .popup-arrow{
      width:25px;
      height:25px;
      border-radius:50%;
      border:1px solid #b8892d;
      background:#111;
      color:#ffd36a;
      font-size:18px;
      font-weight:900;
      line-height:20px;
      cursor:pointer;
      padding:0;
    }

    .popup-dots{
      display:flex;
      gap:6px;
      align-items:center;
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
      padding:0;
      margin:0;
    }

    .popup-contact a{
      min-width:118px;
      padding:9px 12px;
      border-radius:999px;
      color:#fff;
      text-decoration:none;
      font-size:12px;
      font-weight:900;
      box-shadow:0 0 12px rgba(0,0,0,.35);
    }

    .popup-wa{
      background:linear-gradient(135deg,#25d366,#087b37);
      border:1px solid #7dffb0;
    }

    .popup-tele{
      background:linear-gradient(135deg,#2aabee,#12669b);
      border:1px solid #8edcff;
    }

    @media(max-width:480px){
      #popup-resmi-wrap{
        padding:14px;
      }

      #popup-resmi-box{
        max-width:100%;
      }

      .popup-close{
        top:-26px;
        right:0;
      }

      .popup-contact a{
        min-width:105px;
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
