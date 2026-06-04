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
    }

    #popup-resmi-box{
      position:relative;
      width:100%;
      max-width:760px;
      background:#161616;
      border-radius:12px;
      overflow:hidden;
      box-shadow:0 18px 45px rgba(0,0,0,.55);
    }

    .tombol-close{
      position:absolute;
      top:10px;
      right:14px;
      z-index:10;
      color:#0b5cff;
      font-size:24px;
      cursor:pointer;
      font-family:Arial,sans-serif;
    }

    .popup-title{
      color:#fff;
      text-align:center;
      font-size:25px;
      font-weight:900;
      padding:24px 45px 16px;
      font-family:Arial,sans-serif;
    }

    .popup-slider-box{
      width:100%;
      overflow:hidden;
    }

    .popup-slider{
      display:flex;
      width:300%;
      transition:.4s ease;
    }

    .popup-slide{
      width:33.3333%;
      flex-shrink:0;
    }

    .popup-slide img{
      width:100%;
      display:block;
      border:0;
    }

    .popup-nav{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:12px;
      padding:10px 0 16px;
    }

    .popup-arrow{
      width:28px;
      height:28px;
      border-radius:50%;
      border:1px solid #b8892d;
      background:#111;
      color:#ffd36a;
      font-size:18px;
      font-weight:900;
      cursor:pointer;
    }

    .popup-dots{
      display:flex;
      gap:7px;
    }

    .popup-dot{
      width:8px;
      height:8px;
      border-radius:50%;
      background:#777;
      cursor:pointer;
    }

    .popup-dot.active{
      background:#ffd36a;
      box-shadow:0 0 8px #ffd36a;
    }

    .popup-okay{
      display:block;
      margin:0 auto 14px;
      padding:7px 25px;
      border-radius:4px;
      background:#173dbe;
      border:1px solid #ffc400;
      color:#fff;
      cursor:pointer;
      font-weight:700;
    }

    @media(max-width:480px){
      #popup-resmi-wrap{
        padding:18px;
      }

      #popup-resmi-box{
        max-width:100%;
      }

      .popup-title{
        font-size:22px;
        padding:24px 35px 14px;
      }
    }
  `;
  document.head.appendChild(style);

  const popup = document.createElement("div");
  popup.id = "popup-resmi-wrap";

  popup.innerHTML = `
    <div id="popup-resmi-box">
      <div class="tombol-close">×</div>

      <div class="popup-title">SPECIAL BIG EVENT WORLD CUP 2026</div>

      <div class="popup-slider-box">
        <div class="popup-slider">
          ${banners.map(item => `
            <div class="popup-slide">
              <a href="${item.link}" target="_blank">
                <img src="${item.img}">
              </a>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="popup-nav">
        <button class="popup-arrow popup-prev">‹</button>
        <div class="popup-dots">
          <span class="popup-dot active"></span>
          <span class="popup-dot"></span>
          <span class="popup-dot"></span>
        </div>
        <button class="popup-arrow popup-next">›</button>
      </div>

      <button class="popup-okay">Okay</button>
    </div>
  `;

  document.body.appendChild(popup);

  let index = 0;
  const slider = popup.querySelector(".popup-slider");
  const dots = popup.querySelectorAll(".popup-dot");

  function showSlide(i){
    index = (i + banners.length) % banners.length;
    slider.style.transform = `translateX(-${index * 33.3333}%)`;
    dots.forEach((dot, n) => dot.classList.toggle("active", n === index));
  }

  popup.querySelector(".popup-next").onclick = () => showSlide(index + 1);
  popup.querySelector(".popup-prev").onclick = () => showSlide(index - 1);

  dots.forEach((dot, i) => {
    dot.onclick = () => showSlide(i);
  });

  popup.querySelector(".tombol-close").onclick = () => popup.remove();
  popup.querySelector(".popup-okay").onclick = () => popup.remove();
})();
