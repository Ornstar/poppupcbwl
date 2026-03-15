(() => {
  "use strict";

  if (document.getElementById("popup-resmi-wrap")) return;

  const style = document.createElement("style");
  style.textContent = `
*{box-sizing:border-box;margin:0;padding:0;}

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
overflow:hidden;
border-radius:40px 6px 40px 6px;
border:1.8px solid #d4a93a;

background:
radial-gradient(circle at 50% 40%, #2436ff 0%, #141fbf 35%, #0b0f82 60%, #05064f 80%, #02023a 100%);

box-shadow:
0 20px 45px rgba(0,0,0,.55),
0 0 40px rgba(20,70,255,.45),
0 0 80px rgba(10,40,255,.25),
0 0 0 1px rgba(255,255,255,.05) inset;

animation:floatBox 4.5s ease-in-out infinite;
}

@keyframes floatBox{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-5px);}
}

#popup-resmi-box::before{
content:"";
position:absolute;
inset:-30%;
background:
radial-gradient(circle at 20% 30%, rgba(0,255,255,.14), transparent 20%),
radial-gradient(circle at 80% 20%, rgba(255,255,255,.09), transparent 18%),
radial-gradient(circle at 70% 75%, rgba(255,215,0,.10), transparent 18%),
radial-gradient(circle at 35% 80%, rgba(80,120,255,.14), transparent 20%);
animation:bgGerak 10s linear infinite alternate;
pointer-events:none;
z-index:0;
}

#popup-resmi-box::after{
content:"";
position:absolute;
top:-25%;
left:-60%;
width:34%;
height:160%;
background:linear-gradient(to right, transparent, rgba(255,255,255,.16), transparent);
transform:rotate(18deg);
animation:kilauJalan 4.8s linear infinite;
pointer-events:none;
z-index:1;
}

#popup-resmi-box > *{position:relative;z-index:2;}

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
background:linear-gradient(135deg, rgba(255,255,255,.45), rgba(255,215,0,.45), rgba(50,220,255,.20), rgba(255,255,255,.10));
-webkit-mask:
linear-gradient(#fff 0 0) content-box,
linear-gradient(#fff 0 0);
-webkit-mask-composite:xor;
mask-composite:exclude;
animation:borderShine 3.5s linear infinite;
}

@keyframes bgGerak{
0%{transform:translate(-12px,-8px) scale(1);}
100%{transform:translate(12px,10px) scale(1.08);}
}

@keyframes kilauJalan{
0%{left:-60%;}
100%{left:140%;}
}

@keyframes borderShine{
0%{opacity:.65;}
50%{opacity:1;}
100%{opacity:.65;}
}

.popup-banner{
width:100%;
margin-bottom:10px;
overflow:hidden;
border-radius:38px 4px 10px 4px;
border-bottom:1px solid rgba(255,255,255,.2);
}

.popup-banner img{
width:100%;
display:block;
}

.tombol-close{
position:absolute;
top:8px;
right:10px;
border:none;
background:transparent;
color:#fff;
font-size:34px;
cursor:pointer;
z-index:5;
}

.header-logo{
margin:10px auto 16px;
max-width:370px;
padding:10px 16px;
border-radius:10px;
border:1.5px solid #fff;
background:linear-gradient(180deg,#36d5ff,#1689ff,#2359d8);
}

.text-logo{
font-size:18px;
font-weight:900;
color:#ff4d00;
text-transform:uppercase;
text-shadow:0 0 3px #ffd700;
}

.teks-putih-tebal{
margin-bottom:14px;
font-size:13px;
font-weight:700;
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
animation:pulseText 1.8s infinite;
}

@keyframes pulseText{
0%,100%{transform:scale(1);}
50%{transform:scale(1.05);}
}

.area-cari{
margin:0 auto 14px;
padding:18px 12px 16px;
max-width:370px;
border-radius:14px;
border:1.5px solid #d8ab38;
background:rgba(0,0,0,.25);
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
}

.blue{color:#2d64d4;}

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
}

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
`;

  document.head.appendChild(style);

  const popup = document.createElement("div");
  popup.id = "popup-resmi-wrap";

  popup.innerHTML = `
<div id="popup-resmi-box">

<div class="popup-garis"></div>

<button class="tombol-close">×</button>

<div class="popup-banner">
<img src="http://plcl.me/images/2YNC9.gif">
</div>

<div class="header-logo">
<div class="text-logo">CLICKBET88</div>
</div>

<span class="teks-putih-tebal">TEMUKAN LINK RESMI KAMI</span>

<a href="https://click-lynk.com/CekYuk" class="link-utama" target="_blank">
<div class="gold-blink">✨ CEKYUK ✨</div>
</a>

<div class="area-cari">

<p>Masukkan Nama Situs Dibawah Ini:</p>

<div class="input-box">
<span class="blue">»</span>
CLICKBET88
<span class="blue">«</span>
</div>

<button class="tombol-cari-baru">
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
