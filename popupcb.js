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
      background:rgba(0,0,0,.65);
      padding:20px;
      box-sizing:border-box;
      font-family:Arial,sans-serif;
    }

    #popup-resmi-box{
      position:relative;
      width:100%;
      max-width:760px;
      background:#161616;
      border-radius:10px;
      overflow:hidden;
      box-shadow:0 18px 45px rgba(0,0,0,.55);
      text-align:center;
    }

    .popup-close{
      position:absolute;
      top:8px;
      right:13px;
      z-index:5;
      color:#0b5cff;
      font-size:22px;
      line-height:22px;
      cursor:pointer;
      font-weight:400;
    }

    .popup-title{
      color:#fff;
      text-align:center;
      font-size:23px;
      font-weight:900;
      padding:22px 45px 12px;
      letter-spacing:.3px;
    }

    .popup-img-link{
      display:block;
      margin:0;
      padding:0;
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
      padding:10px 0 6px;
    }

    .popup-arrow{
      width:24px;
      height:24px;
      border-radius:50%;
      border:1px solid #b8892d;
      background:#111;
      color:#ffd36a;
      font-size:17px;
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

    .popup-okay{
      display:block;
      margin:6px auto 10px;
      padding:7px 22px;
      border-radius:4px;
      background:#173dbe;
      border:1px solid #ffc400;
      color:#fff;
      cursor:pointer;
      font-weight:700;
      font-size:12px;
    }

    @media(max-width:480px){
      #popup-resmi-wrap{
        padding:14px;
      }

      #popup-resmi-box{
        max-width:100%;
      }

      .popup-title{
        font-size:18px;
        padding:20px 35px 10px;
      }

      .popup-okay{
        margin-bottom:9px;
      }
    }
  `;
  document.head.appendChild(style);

  const popup = document.createElement("div");
  popup.id = "popup-resmi-wrap";

  popup.innerHTML = `
    <div id="popup-resmi-box">
      <div class="popup-close">×</div>

      <div class="popup-title">SPECIAL BIG EVENT WORLD CUP 2026</div>

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

      <button class="popup-okay" type="button">Okay</button>
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
  popup.querySelector(".popup-okay").onclick = () => popup.remove();
})();
