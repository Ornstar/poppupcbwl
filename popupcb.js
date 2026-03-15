(() => {
  "use strict";

  if (document.getElementById("popup-resmi-wrap")) return;

  const style = document.createElement("style");
  style.textContent = `
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

#popup-resmi-wrap{
  position:fixed;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:99999999;
  padding:20px;
  font-family:Georgia,"Times New Roman",serif;
}

#popup-resmi-box{
  position:relative;
  width:100%;
  max-width:430px;
  padding:0 18px 20px;
  color:#fff;
  text-align:center;
  overflow:visible;
  border-radius:40px 6px 40px 6px;
  border:1.8px solid #d4a93a;
  background:
    radial-gradient(circle at 50% 40%, #2436ff 0%, #141fbf 35%, #0b0f82 60%, #05064f 80%, #02023a 100%);
  box-shadow:
    0 20px 45px rgba(0,0,0,.55),
    0 0 40px rgba(20,70,255,.38),
    0 0 80px rgba(10,40,255,.20),
    0 0 0 1px rgba(255,255,255,.05) inset;
  isolation:isolate;
}

/* efek glow lembut bergerak */
#popup-resmi-box::before{
  content:"";
  position:absolute;
  inset:-12%;
  z-index:0;
  pointer-events:none;
  background:
    radial-gradient(circle at 20% 25%, rgba(0,255,255,.12), transparent 18%),
    radial-gradient(circle at 78% 18%, rgba(255,255,255,.08), transparent 16%),
    radial-gradient(circle at 72% 78%, rgba(255,215,0,.10), transparent 16%),
    radial-gradient(circle at 32% 82%, rgba(120,170,255,.12), transparent 18%);
  animation:glowMove 10s ease-in-out infinite alternate;
}

/* kilau jalan tipis */
#popup-resmi-box::after{
  content:"";
  position:absolute;
  top:-18%;
  left:-42%;
  width:24%;
  height:135%;
  z-index:1;
  pointer-events:none;
  background:linear-gradient(to right, transparent, rgba(255,255,255,.12), transparent);
  transform:rotate(18deg);
  animation:shineMove 7s linear infinite;
}

@keyframes glowMove{
  0%{transform:translate(-4px,-2px) scale(1);}
  100%{transform:translate(5px,4px) scale(1.03);}
}

@keyframes shineMove{
  0%{left:-42%;}
  100%{left:120%;}
}

#popup-resmi-box > *{
  position:relative;
  z-index:2;
}

.popup-garis{
  position:absolute;
  inset:0;
  border-radius:40px 6px 40px 6px;
  pointer-events:none;
  z-index:3;
}

.popup-garis::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:40px 6px 40px 6px;
  padding:1px;
  background:linear-gradient(
    135deg,
    rgba(255,255,255,.40),
    rgba(255,215,0,.42),
    rgba(50,220,255,.18),
    rgba(255,255,255,.10)
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite:xor;
  mask-composite:exclude;
  animation:borderGlow 3.6s ease-in-out infinite;
}

@keyframes borderGlow{
  0%,100%{opacity:.72;}
  50%{opacity:1;}
}

/* sparkle premium */
.popup-spark{
  position:absolute;
  width:6px;
  height:6px;
  border-radius:50%;
  background:radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,244,190,.95) 45%, rgba(255,244,190,0) 100%);
  box-shadow:
    0 0 8px rgba(255,255,255,.75),
    0 0 15px rgba(255,215,120,.28);
  pointer-events:none;
  z-index:1;
  animation:sparkBlink 2.8s ease-in-out infinite;
}

.s1{ top:18px; left:22px; animation-delay:0s; }
.s2{ top:50px; right:60px; animation-delay:.6s; }
.s3{ top:218px; left:30px; animation-delay:1.2s; }
.s4{ top:250px; right:24px; animation-delay:1.8s; }
.s5{ bottom:112px; left:28px; animation-delay:.9s; }
.s6{ bottom:72px; right:34px; animation-delay:1.4s; }

@keyframes sparkBlink{
  0%,100%{
    opacity:.18;
    transform:scale(.75);
  }
  50%{
    opacity:1;
    transform:scale(1.35);
  }
}

/* banner */
.popup-banner{
  width:calc(100% + 36px);
  margin:0 -18px 14px;
  height:175px;
  overflow:hidden;
  border-radius:38px 4px 10px 4px;
  border-bottom:1px solid rgba(255,255,255,.18);
  background:#0a1260;
  position:relative;
  z-index:2;
}

.popup-banner img{
  width:100%;
  height:100%;
  display:block;
  object-fit:cover;
  object-position:center top;
  transform:scale(1.08);
  transform-origin:center center;
}

/* close */
.tombol-close{
  position:absolute !important;
  top:-14px !important;
  right:-14px !important;
  left:auto !important;
  bottom:auto !important;
  width:42px;
  height:42px;
  border-radius:50%;
  border:3px solid #ffffff;
  background:linear-gradient(180deg,#ff4d4d 0%, #b30000 100%);
  color:#ffffff;
  font-size:24px;
  font-weight:900;
  line-height:1;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  z-index:999999 !important;
  box-shadow:
    0 8px 18px rgba(0,0,0,.55),
    inset 0 2px 4px rgba(255,255,255,.35);
  outline:3px solid rgba(255,255,255,.25);
  transition:transform .2s ease, background .2s ease, box-shadow .2s ease;
}

.tombol-close:hover{
  transform:scale(1.1);
  background:linear-gradient(180deg,#ff6a6a 0%, #d40000 100%);
  box-shadow:
    0 10px 20px rgba(0,0,0,.6),
    inset 0 2px 4px rgba(255,255,255,.4);
}

.tombol-close:active{
  transform:scale(.92);
}

/* text */
.teks-putih-tebal{
  margin-top:8px;
  margin-bottom:14px;
  font-size:13px;
  font-weight:700;
  letter-spacing:.2px;
}

.link-utama{
  text-decoration:none;
  display:inline-block;
  margin-bottom:16px;
}

.gold-blink{
  font-size:26px;
  font-weight:900;
  color:#ffd447;
  text-shadow:
    0 0 10px rgba(255,215,71,.18),
    0 0 18px rgba(255,215,71,.10);
  animation:pulseText 1.8s ease-in-out infinite;
}

@keyframes pulseText{
  0%,100%{transform:scale(1);}
  50%{transform:scale(1.05);}
}

/* area cari */
.area-cari{
  margin:0 auto 14px;
  padding:18px 12px 16px;
  max-width:370px;
  border-radius:14px;
  border:1.5px solid #d8ab38;
  background:rgba(0,0,0,.25);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 8px 20px rgba(0,0,0,.12);
}

.area-cari p{
  margin-bottom:10px;
  font-size:12px;
  font-weight:700;
}

.input-box{
  max-width:258px;
  margin:auto;
  padding:9px 12px;
  border-radius:5px;
  background:#f1f1f1;
  color:#24325e;
  font-size:15px;
  font-weight:800;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.85),
    0 4px 10px rgba(0,0,0,.10);
}

.blue{
  color:#2d64d4;
}

.tombol-cari-baru{
  margin-top:12px;
  padding:8px 26px;
  border-radius:999px;
  border:1.5px solid #fff;
  background:linear-gradient(180deg,#33d6ff,#2899ff,#2f67dd);
  color:#fff;
  font-size:18px;
  font-weight:800;
  cursor:pointer;
  box-shadow:
    0 6px 14px rgba(0,0,0,.18),
    inset 0 1px 0 rgba(255,255,255,.18);
  transition:transform .2s ease, box-shadow .2s ease;
}

.tombol-cari-baru:hover{
  transform:translateY(-1px);
  box-shadow:
    0 8px 16px rgba(0,0,0,.22),
    inset 0 1px 0 rgba(255,255,255,.22);
}

.tombol-cari-baru:active{
  transform:translateY(1px);
}

/* footer */
.footer-note{
  max-width:370px;
  margin:0 auto 12px;
  font-size:11px;
  line-height:1.7;
  text-align:left;
}

.badge-ijau{
  max-width:370px;
  margin:auto;
  text-align:left;
  font-size:11px;
  color:#7dff98;
}

/* mobile */
@media (max-width:480px){
  #popup-resmi-box{
    max-width:100%;
    padding:0 14px 18px;
  }

  .popup-banner{
    width:calc(100% + 28px);
    margin:0 -14px 12px;
    height:145px;
    border-radius:34px 4px 10px 4px;
  }

  .popup-banner img{
    transform:scale(1.06);
  }

  .tombol-close{
    top:-12px !important;
    right:-12px !important;
    width:36px;
    height:36px;
    font-size:20px;
  }
}
`;

  document.head.appendChild(style);

  const popup = document.createElement("div");
  popup.id = "popup-resmi-wrap";

  popup.innerHTML = `
<div id="popup-resmi-box">

  <div class="popup-garis"></div>

  <span class="popup-spark s1"></span>
  <span class="popup-spark s2"></span>
  <span class="popup-spark s3"></span>
  <span class="popup-spark s4"></span>
  <span class="popup-spark s5"></span>
  <span class="popup-spark s6"></span>

  <button class="tombol-close" type="button" aria-label="Tutup popup">×</button>

  <div class="popup-banner">
    <img src="https://plcl.me/images/qYPpN.jpeg" alt="Banner Popup">
  </div>

  <span class="teks-putih-tebal">TEMUKAN LINK RESMI KAMI</span>

  <a href="https://click-lynk.com/CekYuk" class="link-utama" target="_blank" rel="noopener noreferrer">
    <div class="gold-blink">✨ CEKYUK ✨</div>
  </a>

  <div class="area-cari">
    <p>Masukkan Nama Situs Dibawah Ini:</p>

    <div class="input-box">
      <span class="blue">»</span>
      CLICKBET88
      <span class="blue">«</span>
    </div>

    <button class="tombol-cari-baru" type="button">
      CARI 🔎
    </button>
  </div>

  <div class="footer-note">
    1. Ketik nama situs pada kolom yang tersedia.<br>
    2. Klik tombol di atas untuk mendapatkan link terbaru.
  </div>

  <div class="badge-ijau">
    ✅ ANTI BLOKIR & INTERNET POSITIF<br>
    ✅ SERVER AMAN & BEBAS NAWALA
  </div>

</div>
`;

  document.body.appendChild(popup);

  popup.querySelector(".tombol-close").onclick = () => {
    popup.remove();
  };

  popup.querySelector(".tombol-cari-baru").onclick = () => {
    window.open("https://click-lynk.com/CekYuk", "_blank");
  };
})();
