const siteHeader = document.querySelector(".header");

let previousScrollY = window.scrollY;
let ticking = false;

function updateStickyHeader() {
    const currentScrollY = window.scrollY;
    const scrollTrigger = 90;
    const stopFollowingAt = 520;

    siteHeader.classList.toggle(* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Maersk Headline";
}

@font-face {
    font-family: "Maersk Headline";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src:
        url("https://assets.maerskline.com/mds/fonts/headline/MaerskHeadline-Regular.woff2") format("woff2"),
        url("https://assets.maerskline.com/mds/fonts/headline/MaerskHeadline-Regular.woff") format("woff");
}

body {
    background: white;
    color: #111;
    font-family: "Inter", Arial, Helvetica, sans-serif;
    overflow-x: hidden;
}

.hero{
    background: url("images/hero2.avif");
    background-size:cover;
    background-position:center;
    position:relative;
    height: 125vh;
}

.logo {
    display: inline-flex;
    align-items: center;
}

.logo img {
    width: 50px;
    height: auto;
    display: block;
}

.logo-dark {
    display: none !important;
}

.header {
    width: 100%;
    padding: 10px 20px;
    padding-left: 8px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: transparent;
    color: white;
    transition:
        background-color 0.25s ease,
        box-shadow 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
}

.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-top .logo-span {
    color: white;
    font-size: 18px;
    font-weight: bold;
    font-stretch: extra-expanded;
    transform: scaleX(1.4) scaleY(1);
    display: inline-block;
    padding-left: 13px;
}

.header-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;
}

.header.header-scrolled {
    background: rgba(255, 255, 255, 0.97);
    box-shadow:
        0 1px 0 rgba(0, 0, 0, 0.08),
        0 4px 14px rgba(0, 0, 0, 0.06);

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

/* Swap the logo */
.header.header-scrolled .logo-light {
    display: none !important;
}

.header.header-scrolled .logo-dark {
    display: block !important;
}

/* Main navigation becomes dark */
.header.header-scrolled .main-nav a {
    color: #111;
}

/* text in Top-action becomes dark */
.header.header-scrolled .top-actions a {
    color: #111;
}

/* Convert the white PNG icons back to dark icons */
.header.header-scrolled .top-actions img {
    filter: none;
}

/* Register button */
.header.header-scrolled .register {
    color: #111;
    border-color: #b8b8b8;
}

.header.header-scrolled .register img {
    filter: none;
}

/* Login button becomes Maersk blue */
.header.header-scrolled .login {
    background: #42b6e8;
    color: #111;
}

.header.header-scrolled .login:hover {
    background: #68c7ee;
}

/* Main header hover */
.header.header-scrolled .top-actions a:hover {
    background: #f1f1f1;
}

/* Burger lines become dark */
.header.header-scrolled .menu-btn {
    color: #111;
}

.header.header-scrolled .menu-btn span {
    background: #111;
}

.header.header-scrolled .top-actions .ask {
    color: #111;
}

.header.header-scrolled .top-actions .ask img {
    filter: none;
}

.header.header-hidden {
    transform: translateY(-100%);
}

.top-actions {
    display: flex;
    align-items: center;
    gap: 6px;
}

.top-actions a{
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 7px;;
    color:#fff;
    text-decoration: none;
    font-size: 16px;
}

.top-actions a:hover{
    background-color: rgba(150, 150, 150, 0.548);
    border-radius: 8px;
}

.top-actions img {
    width: 26px;
    height: 26px;
    object-fit: contain;
    filter: brightness(0) invert(1);
    flex-shrink: 0;
}

.top-actions .ask {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 15px;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    z-index: 1;
    border-left: 15px;
}

.top-actions .ask::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1.5px;
    border-radius: 8px;

    background: linear-gradient(
        90deg,
        rgb(0,255,195),
        rgb(0,179,255)
    );

    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);

    -webkit-mask-composite: xor;
            mask-composite: exclude;

    pointer-events: none;
}

.main-nav {
    display: flex;
    align-items: center;
    gap: 34px;
}

.main-nav a {
    color: white;
    text-decoration: none;
    font-size: 15px;
}

.auth-buttons {
    gap: 14px;
    display: flex;
    align-items: center;
}

.auth-buttons .register {
    display: flex;
    border: 1px solid rgba(255,255,255,0.8);
    padding: 10px 14px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 16px;
    color: white;
}

.auth-buttons .register img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    filter: invert(100%);
    margin-right: 10px;
}

.auth-buttons .register:hover {
    background: rgba(240, 240, 240, 0.418);
}

.auth-buttons .login {
    background: white;
    color: #111;
    padding: 10px 14px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 16px;
}

.auth-buttons .login:hover {
    background: rgba(240, 240, 240, 0.845);
}

.hero-content {
    position: absolute;
    left: 20px;
    width: 760px;
    bottom: 155px;
}

.hero-content .big-p {
    font-size: 50px;
    line-height: 1.15;
    margin-bottom: 18px;
    color: white;
}

.hero-content .small-p {
    width: 620px;
    font-size: 20px;
    line-height: 1.15;
    color: white;
    margin-bottom: 18px;
}

.hero-buttons {
    display: flex;
    gap: 14px;
    margin-bottom: 20px;
}

.explore-btn {
    background: white;
    color: #111;
    text-decoration: none;
    padding: 10px 14px;
    border-radius: 5px;
    transition: .3s;
}

.explore-btn:hover {
    background: rgba(240, 240, 240, 0.765);
}

.contact-btn{
    border: 1px solid white;
    color:#111;
    text-decoration:none;
    padding: 10px 14px;
    border-radius:5px;
    transition:.3s;
    color: white;
}

.contact-btn:hover{
    background: rgba(240, 240, 240, 0.418);
}

.blue-box {
    width: 100%;
    box-sizing: border-box;
    background-color: #2498db;
    color: white;
    padding: 20px;
    text-align: center;
    border-bottom-right-radius: 30px;
}

.quick-panel {
    width: 100%;
    max-width: 1225px;
    background: white;
    margin: -75px auto 20px;
    border-radius: 8px;
    position: relative;
    z-index: 30;
    margin-bottom: 0;
    box-shadow: 0px 4px 10px 2px rgba(202, 202, 202, 0.2);
}

#quickPanelSpacer{
    display:none;
}

.quick-tabs {
    display: flex;
    justify-content: center;
}

.divider {
    width: 100%;
    border-bottom: 2px solid #ddd;
}

.quick-tabs button img{
    width: 30px;
    height: 30px;
    object-fit: contain;
    margin-right: 10px;
}

.quick-tabs button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    padding: 12px 0 8px;
    font-size: 17px;
    cursor: pointer;
    color: #7b7b7b;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
}

.quick-tabs button.active::after {
    content: "";
    position: absolute;
    height: 4px;
    background: #42b6e8;
    left: 0;
    right: 0;
    bottom: -1px;
    border-radius: 10px;
}

.quick-content {
    display: none;
    align-items: center;
    justify-content: center;
    gap: 18px;
    padding-top: 28px;
    padding: 30px 30px 30px;
    opacity:0;

    transform:translateY(8px);

    transition:
        opacity .25s ease,
        transform .25s ease;
}

.quick-content.active{

    display:flex;

    opacity:1;

    transform:translateY(0);

}

.quick-content fieldset {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
}

.quick-content fieldset legend {
    font-size: 12px;
    padding-left: 15px;
    padding-right: 5px;
    color: #7b7b7b;
}

.quick-content fieldset img {
    width: 25px;
    height: 25px;
    object-fit: contain;
}

.input-box label {
    font-size: 14px;
    color: #333;
}

.input-box input {
    height: 52px;
    border: 1px solid #b8b8b8;
    border-radius: 3px;
    padding: 0 16px;
    font-size: 16px;
    outline: none;
}

.input-box input:focus {
    border-color: #0073ab;
}

.track-btn {
    display: flex;
    align-items: center;
    height: 52px;
    padding: 28px 38px;
    background: #ffffff;
    color: #7b7b7b;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    font-size: 16px;
    cursor: not-allowed;
}

.menu-btn {
    display: none;
    align-items: center;
    gap: 12px;
    background: transparent;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
}

.menu-lines {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.menu-lines span {
    width: 28px;
    height: 2px;
    background: white;
    border-radius: 10px;
}

.menu-btn span {
    background: white;
    display: block;
    border-radius: 10px;
}

.info-section {
    background: #fff;
    color: #111;
    padding: 36px 0px 0px;
}

.alert-row {
    display: flex;
    align-items: flex-start;
    gap: 28px;
    margin-bottom: 16px;
    margin-left: 20px;
    grid-template-columns: repeat(2, 1fr);
}

.alert-row img {
    width: 56px;
    height: 56px;
}

.alert-row p {
    font-size: 20px;
    line-height: 1.35;
}

.AR-black-btn {
    display: inline-block;
    background: #111;
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
    margin-left: 20px;
}

.info-cards {
    margin-top: 38px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-left: 20px;
    margin-right: 20px;
}

.info-card {
    background: #fff;
    border: 1px solid #d7d7d7;
    border-radius: 8px;
    padding: 20px;
}

.info-card .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
}

.card-header img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    flex-shrink: 0;
}

.info-card .card-header p {
    font-size: 20px;
    line-height: 1.40;
    margin-bottom: 30px;
    margin-top: 20px;
}

.info-card p {
    font-size: 20px;
    line-height: 1.40;
    margin-bottom: 30px;
}

.black-btn {
    display: inline-block;
    background: #111;
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
    margin-left: 0;
}

/* video section */
.video-section {
    max-width: 1500px;
    margin: 95px auto;
    padding: 0 40px;
    text-align: center;
}

.video-section h2 {
    font-size: 40px;
    font-weight: normal;
    letter-spacing: -1px;
    line-height: 1.15;
    margin-bottom: 20px;
}

.video-section .video-text {
    max-width: 850px;
    margin: 0 auto 55px;
    font-size: 17px;
    line-height: 1.5;
}

.video-text a {
    color: #0077b8;
}

.video-wrapper {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    background: #42b6e8;
    padding-bottom: 32px;
    border-radius: 10px 10px 26px 10px;
    overflow: hidden;
}

.video-wrapper video {
    width: 100%;
    display: block;
    cursor: pointer;
}

.custom-play {
    position: absolute;
    left: 18px;
    bottom: 18px;
    width: 92px;
    height: 78px;
    background: white;
    color: #111;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.video-wrapper:hover .custom-play {
    background: rgb(247, 247, 247);
}

.play-icon {
    font-size: 26px;
    line-height: 1;
    display: block;
}

.play-time {
    font-size: 18px;
    line-height: 1;
    display: block;
}

.custom-play span {
    font-size: 18px;
}

/* css for services section */
.services-section {
    background: #fff;
    color: #111;
    padding: 90px 20px 100px;
}

.services-intro {
    max-width: 900px;
    margin: 0 auto 42px;
    text-align: center;
}

.services-intro h2 {
    margin-bottom: 18px;
    font-size: 42px;
    font-weight: 1;
    line-height: 1.15;
    letter-spacing: -1px;
}

.services-intro p {
    max-width: 780px;
    margin: 0 auto;
    font-size: 17px;
    line-height: 1.55;
    color: #333;
}

.service-tabs {
    max-width: 1260px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #d7d7d7;
}

.service-tab {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 5px 23px;
    border: 0;
    background: transparent;
    color: #5e5e5e;
    font-size: 15px;
    cursor: pointer;
    white-space: nowrap;
}

.service-tab img {
    height: 25px;
}

.service-tab::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    height: 3px;
    background: transparent;
}

.service-tab.active {
    color: #111;
}

.service-tab.active::after {
    background: #42b6e8;
}

.service-tab:hover {
    color: #111;
    background: #f7f7f7;
}

.services-carousel {
    max-width: 1260px;
    margin: 34px auto 0;
}

.services-viewport {
    width: 100%;
    overflow: hidden;
}

.services-track {
    display: flex;
    gap: 24px;
    transition: transform 0.45s ease;
    will-change: transform;
}

.service-card {
    flex: 0 0 calc((100% - 72px) / 4);
    min-width: 0;
    background: #fff;
}

.service-card-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 6px;
    background: #eaf6fa;
}

.service-card-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.service-card:hover .service-card-image img {
    transform: scale(1.1);
}

.service-card h3 {
    margin: 18px 0 10px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;
}

.service-card p {
    margin: 0;
    color: #555;
    font-size: 15px;
    line-height: 1.5;
}

.services-controls {
    justify-content: space-between;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 28px;
}

.carousel-dots {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 10px;
}

.carousel-dot {
    width: 10px;
    height: 10px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: #d4d4d4;
    cursor: pointer;
}

.carousel-dot.active {
    width: 30px;
    border-radius: 20px;
    background: #003f5c;
}

.carousel-arrows {
    display: flex;
    gap: 10px;
}

.carousel-arrow {
    width: 42px;
    height: 42px;
    border: 1px solid #d4d4d4;
    border-radius: 50%;
    background: #fff;
    color: #222;
    font-size: 20px;
    cursor: pointer;
    transition:
        background-color 0.2s ease,
        border-color 0.2s ease;
}

.carousel-arrow:hover:not(:disabled) {
    background: #f3f3f3;
    border-color: #aaa;
}

.carousel-arrow:disabled {
    cursor: default;
    opacity: 0.35;
}

/* for the eastwest-section */
.eastwest-section{
    width:100%;
    padding:40px 25px;
    background:#fff;
}

.eastwest-content{
    max-width:1850px;
    margin: auto;
    display:grid;
    grid-template-columns:1fr 1fr;
    align-items:center;
    column-gap:30px;
}

.eastwest-text h2{
    font-size: 2.5em;
    font-weight: normal !important;
    line-height:1.05;
    margin-bottom:15px;
}

.eastwest-text p{
    max-width:760px;
    font-size:16px;
    line-height:1.4;
    margin-bottom:30px;
}

.eastwest-image{
    border-radius:18px;
    overflow:hidden;
}

.eastwest-image img{
    width:100%;
    display:block;
    object-fit:cover;
}


/*  for the logistics-map-section */
.logistics-map-section{
    width: 100%;
    padding: 40px 25px;
    background: #fff;
}

.logistics-map-content{
    max-width: 1850px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 30px;
}

.logistics-map-text h2{
    font-size: 2.5em;
    font-weight: normal !important;
    line-height: 1.05;
    margin-bottom: 15px;
}

.logistics-map-text p{
    max-width: 760px;
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 30px;
}

.logistics-map-image{
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    overflow: hidden;
}

.logistics-map-image img{
    width: 100%;
    display: block;
    object-fit: cover;
}

.industry-section {
    max-width: 1850px;
    margin: 0 auto;
    padding: 90px 20px;
    color: #111;
}

.industry-header {
    max-width: 900px;
    margin-bottom: 55px;
}

.industry-header h2 {
    font-family: "Maersk Headline", Arial, sans-serif;
    font-size: 2.5em;
    font-weight: normal;
    line-height: 1.1;
    margin-bottom: 22px;
}

.industry-header p {
    font-size: 18px;
    line-height: 1.55;
}

.industry-carousel {
    width: 100%;
}

.industry-viewport {
    width: 100%;
    overflow: hidden;
}

.industry-track {
    display: flex;
    gap: 28px;
    transition: transform 0.45s ease;
    will-change: transform;
}

.industry-card {
    flex: 0 0 calc((100% - 84px) / 4);
    min-width: 0;
    color: #111;
    text-decoration: none;
    border-radius: 12px;
    cursor: pointer;
    padding-top: 15px;
    padding-bottom: 15px;
}

.industry-card:hover {
    border: 1px solid rgba(211, 211, 211, 0.637);
}

.industry-image {
    width: 240px;
    height: 240px;
    overflow: hidden;
    border-radius: 12px;
    background: #f3f6f7;
    display: flex;
    justify-self: center;
}

.industry-image img {
    width: 100%;
    display: block;
    object-fit: cover;
}

.industry-card h3 {
    margin-top: 18px;
    line-height: 1.25;
    display: flex;
    justify-self: center;
    font-weight: normal;
}

/* css for text revealed only on hover */

.insight-card-content p {
    margin: 0;

    color: rgba(255, 255, 255, 0.92);
    font-size: 14px;
    line-height: 1.45;

    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transform: translateY(14px);

    transition:
        opacity 0.28s ease,
        max-height 0.42s cubic-bezier(.2, .7, .2, 1),
        transform 0.38s cubic-bezier(.2, .7, .2, 1),
        margin-top 0.38s ease,
        transform 0.45s ease;
}

/* css for author revealed only on hover */

.insight-author {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transform: translateY(14px);

    transition:
        opacity 0.28s ease,
        max-height 0.42s cubic-bezier(.2, .7, .2, 1),
        transform 0.38s cubic-bezier(.2, .7, .2, 1),
        margin-top 0.38s ease,
        transform 0.45s ease;
}

.insight-card:hover .insight-author,
.insight-card:focus-visible .insight-author {
    margin-top: 15px;
    opacity: 1;
    max-height: 65px;
    transform: translateY(0);
}

.industry-controls {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
    min-height: 44px;
}

.industry-dots {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 10px;
}

.industry-dot {
    width: 10px;
    height: 10px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: #d4d4d4;
    cursor: pointer;
}

.industry-dot.active {
    width: 30px;
    border-radius: 20px;
    background: #003f5c;
}

.industry-arrows {
    display: flex;
    gap: 10px;
}

.industry-arrow {
    width: 42px;
    height: 42px;
    border: 1px solid #d4d4d4;
    border-radius: 50%;
    background: #fff;
    color: #222;
    font-size: 20px;
    cursor: pointer;
}

.industry-arrow:hover:not(:disabled) {
    background: #f3f3f3;
}

.industry-arrow:disabled {
    opacity: 0.35;
    cursor: default;
}

/* insights section */
.insights-section {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 90px 20px;
    color: #111;
    background: #fff;
}

.insights-heading-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 40px;
    margin-bottom: 34px;
}

.insights-heading {
    max-width: 760px;
}

.insights-heading h2 {
    font-family: "Maersk Headline", Arial, sans-serif;
    font-size: 44px;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 14px;
}

.insights-heading p {
    color: #444;
    font-size: 16px;
    line-height: 1.55;
}

.insights-filter {
    display: flex;
    flex-direction: column;
    gap: 7px;
    min-width: 190px;
}

.insights-filter label {
    font-size: 12px;
    color: #666;
}

.insights-filter select {
    height: 44px;
    padding: 0 38px 0 14px;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    background: #fff;
    color: #222;
    font-size: 14px;
    cursor: pointer;
}

/* Main editorial layout */

.insights-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 270px 270px;
    gap: 20px;
}

/* Large card on the left */
.insights-grid > .insight-card:first-child {
    grid-column: 1;
    grid-row: 1 / span 2;
}

/* Wide card at the upper-right */
.insights-grid > .insight-card:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
}

/* Bottom-right wrapper containing two cards */
.insights-bottom-right {
    grid-column: 2;
    grid-row: 2;

    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    min-width: 0;
}

.insights-bottom-right .insight-card {
    min-width: 0;
    min-height: 0;
}

.insight-card {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    background: #222;
    isolation: isolate;
    transition:
        transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.insight-card:hover .insight-card-image img {
    transform: scale(1.1);
}

.insight-card.featured {
    min-height: 560px;
}

.insight-card-image {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.insight-card img {
    transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transform: scale(1);
}

.insight-card-content {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 2;

    padding: 18px 18px 17px;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.728) 0%,
        rgba(0, 0, 0, 0.721) 68%,
        rgba(0, 0, 0, 0) 100%
    );

    transform: translateY(0);
    transition:
        padding-top 0.4s cubic-bezier(.2, .7, .2, 1),
        background 0.4s ease,
}

.insight-card:hover .insight-card-content,
.insight-card:focus-visible .insight-card-content {
    padding-top: 75px;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.728) 0%,
        rgba(0, 0, 0, 0.721) 68%,
        rgba(0, 0, 0, 0) 100%
    );
}

.insight-meta {
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 1.3;
    opacity: 0.92;
}

.insight-card h3 {
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.25;
}

    /* margin: 0;
    font-size: 22px;
    font-weight: 400;
    line-height: 1.25; */

.insight-card.featured h3 {
    font-size: 24px;
}

.insight-card p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    line-height: 1.45;
}

.insight-author {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 16px;
}

.insight-author img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    object-fit: cover;
}

.insight-author-details {
    font-size: 11px;
    line-height: 1.3;
}

.insight-author-details strong {
    display: block;
    font-size: 12px;
    font-weight: 600;
}

/* Lower cards on right */

.insights-grid .insight-card:not(.featured) h3 {
    font-size: 19px;
}

.insights-grid .insight-card:not(.featured) p {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.insights-footer {
    display: flex;
    justify-content: center;
    margin-top: 34px;
}

.view-all-insights {
    padding: 11px 20px;
    border: 1px solid #cfcfcf;
    border-radius: 4px;
    background: #fff;
    color: #111;
    font-size: 15px;
    cursor: pointer;
}

.view-all-insights:hover {
    background: #f5f5f5;
}

/* news section */

.news-section {
    padding-top: 30px;
    overflow: hidden;
    margin-bottom: 50px;
}

.news-heading {
    padding-left: 20px;
    margin-bottom: 32px;
}

.news-heading h2{
    font-size: 40px;
    font-weight: 400;
    padding-bottom: 10px;
}

.news-heading p{
    font-size: 17px;
}

.news-card-content {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 18px;
    z-index: 2;
}

.news-button {
    padding: 10px 15px;
    font-size: 16px;
    background: white;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    margin-bottom: 25px;
    margin-left: 20px;
    color: rgb(30, 30, 30);
}


.news-carousel {
    width: 100%;
}

.news-viewport {
    width: 100%;
    overflow: hidden;
    padding-left: 20px;
}

.news-track {
    display: flex;
    gap: 28px;
    transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
}

.news-card {
    flex: 0 0 calc((100vw - 175px) / 4);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #d8d8d8;
    border-radius: 12px;
    background: #fff;
    color: #111;
    text-decoration: none;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.news-card:hover {
    border-color: #bcbcbc;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.news-card-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #eee;
}

.news-card-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;

    /* No zoom, matching the screenshot */
    transform: none;
    transition: none;
}

.news-card-body {
    min-height: 190px;
    padding: 20px 20px 20px;
    display: flex;
    flex-direction: column;
}

.news-category {
    margin-bottom: 16px;
    color: #888;
    font-size: 18px;
    line-height: 1.25;
}

.news-card h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.22;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.news-date {
    margin-top: auto;
    color: #888;
    font-size: 17px;
}

.news-controls {
    position: relative;
    min-height: 70px;
    margin-top: 24px;
    padding: 0 35px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.news-dots {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 10px;
}

.news-dot {
    width: 10px;
    height: 10px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: #d4d4d4;
    cursor: pointer;
}

.news-dot.active {
    width: 30px;
    border-radius: 20px;
    background: #003f5c;
}

.news-arrows {
    display: flex;
    gap: 10px;
}

.news-arrow {
    width: 42px;
    height: 42px;
    border: 1px solid #d4d4d4;
    border-radius: 50%;
    background: #fff;
    color: #222;
    font-size: 20px;
    cursor: pointer;
    transition:
        background-color 0.2s ease,
        border-color 0.2s ease;
}

.news-arrow:hover:not(:disabled) {
    background: #f3f3f3;
}

.news-arrow:disabled {
    opacity: 0.35;
    cursor: default;
}

/* for the footer section */

.footer-links-section {
    width: 100%;
    padding: 70px 20px;
    background: #ffffff;
    color: #111;
    border-top: 1px solid #e3e3e3;
}

.footer-links-container {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns:
        minmax(170px, 0.9fr)
        minmax(260px, 1.35fr)
        minmax(190px, 1fr)
        minmax(170px, 0.9fr);

    gap: 50px;
    align-items: start;
}

.footer-link-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-link-list a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 14px;
    color: #222;
    text-decoration: none;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.15;
    transition:
        color 0.2s ease,
        text-decoration-color 0.2s ease;
}

.footer-link-list a:hover {
    color: black;
    text-decoration: underline;
    text-underline-offset: 3px;
}

.footer-group {
    margin-top: 25px;
}

.footer-group h3 {
    margin: 0 0 18px;
    padding-bottom: 12px;
    border-bottom: 1px solid #d9d9d9;
    font-family: "Maersk Headline";
    font-size: 19px;
    font-weight: 700;
    line-height: 1.2;
    color: #111;
}

.footer-view-all {
    margin-top: 4px;
}

.footer-view-all span:last-child {
    font-size: 17px;
    transition: transform 0.2s ease;
}

.footer-view-all:hover span:last-child {
    transform: translateX(4px);
}

/* footer-bottom section */

.footer-bottom{
    margin-top: 60px;
    background: white;
}

.footer-top-row{
    max-width: 1400px;
    margin: auto;
    padding: 0 20px;
    padding-left: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.footer-brand{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.logo-span {
    display: flex;
    align-items: center;
}

.footer-brand img{
    width: 50px;
}

.footer-brand p{
    font-size: 16px;
    margin-left: 13px;
}

.footer-social{
    text-align: center;
}

.footer-social p{
    font-size: 16px;
    margin-bottom: 18px;
}

.social-icons{
    display: flex;
    justify-content: center;
    gap: 16px;
}

.social-icons img{
    width: 100%;
    height: 100%;
    transition: .25s;
}

.footer-store-buttons{
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.footer-store-buttons img{
    width: 100%;
}

.footer-legal{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
    padding-top: 50px;
    padding-bottom: 35px;
    padding-left: 5px;
    padding-right: 5px;
    border-top: 1px solid #ececec;
}

.footer-legal a{
    color: #111;
    text-decoration: none;
    font-size: 17px;
}

.footer-legal a:hover{
    text-decoration: underline;
}

.footer-contact{
    background: #f5f5f5;
    border-top: 1px solid #dfdfdf;
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 0;
}

.footer-contact a{
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid #d6d6d6;
    border-radius: 10px;
    background: white;
    color: #111;
    text-decoration: none;
    font-size: 17px;
    transition: .25s;
    margin-top: 20px;
}

.footer-contact a:hover{
    background: #f8f8f8;
}

.footer-contact img{
    width:24px;
    height:24px;
}

/* Responsive css for 0 - 640px */

@media (max-width: 640px) {
    /* header */
    .header {
        padding: 16px 16px;
        padding-left: 5px;
    }

    .header-bottom {
        display: none;
    }

    .logo img {
        width: 50px;
    }

    .top-actions {
        gap: 10px;
    }

    .top-actions a {
        padding: 7px;
        font-size: 0;
    }

    .top-actions img {
        width: 23px;
        height: 23px;
    }

    .top-actions .lang,
    .top-actions .notify,
    .top-actions .contact {
        display: none;
    }

    .top-actions .ask {
        padding: 9px;
    }

    .top-actions > .menu-btn {
        display: flex;
        width: 38px;
        padding: 5px;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
    }

    .top-actions > .menu-btn span {
        width: 100%;
        height: 2px;
    }

    /* hero */

    .hero {
        height: 430px;
        background-position: center;
        border-bottom-right-radius: 58px;
        overflow: hidden;
    }

    .hero-content {
        top: 100px;
        right: 20px;
        bottom: auto;
        left: 20px;
        width: auto;
    }

    .hero-content .big-p {
        width: auto;
        margin-bottom: 24px;
        font-size: 40px;
        line-height: 1.08;
        letter-spacing: -1px;
        font-weight: 400;
    }

    .hero-content .small-p {
        width: auto;
        margin-bottom: 28px;
        font-size: 18px;
        line-height: 1.4;
    }

    .hero-buttons {
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 26px;
    }

    .explore-btn,
    .contact-btn {
        padding: 13px 17px;
        font-size: 17px;
    }

    .blue-box {
        height: 70px;
        margin-top: -50px;
        padding: 0;
        border-bottom-right-radius: 58px;
    }

    .quick-panel {
        width: calc(100% - 20px);
        margin: -48px auto 0;
        border-radius: 10px;
    }

    .quick-tabs {
        width: 100%;
    }

    .quick-tabs button {
        flex: 1;
        min-width: 0;
        flex-direction: column;
        justify-content: center;
        gap: 4px;
        padding: 12px 4px 9px;
        font-size: 13px;
    }

    .quick-tabs button img {
        width: 25px;
        height: 25px;
        margin: 0;
    }

    .quick-tabs button img[style] {
        width: 27px !important;
        height: 27px !important;
    }

    .quick-panels {
        min-height: 0;
    }

    .quick-content,
    .quick-content.active {
        position: relative;
        width: 100%;
        flex-direction: column;
        align-items: stretch;
        gap: 15px;
        padding: 20px 16px;
    }

    .quick-content fieldset {
        width: 100%;
        min-width: 0;
    }

    .input-box {
        width: 100%;
        min-width: 0;
    }

    .input-box input {
        width: 100% !important;
        min-width: 0;
    }

    .track-btn {
        width: 100%;
        min-height: 52px;
        justify-content: center;
        padding: 13px 18px;
    }

    .track-btn span {
        
        /* hmmmmmmmmmmm */

    }


    /* ---------- Information cards ---------- */

    .info-section {
        padding-top: 48px;
    }

    .alert-row {
        margin-right: 18px;
        margin-left: 18px;
        gap: 16px;
    }

    .alert-row img {
        width: 45px;
        height: 45px;
        flex-shrink: 0;
    }

    .alert-row p {
        font-size: 18px;
    }

    .AR-black-btn {
    margin-left: 20px;
    width: calc(100% - 38px);
    display: flex;
    justify-content: center;
    font-size: 17px;
    }

    .info-cards {
        grid-template-columns: 1fr;
        gap: 18px;
        margin: 32px 18px 0;
    }

    .black-btn {
    padding: 10px 15px;
    font-size: 17px;
    width: 100%;
    display: flex;
    justify-content: center;
    }


    /* ---------- Video ---------- */

    .video-section {
        margin: 70px auto;
        padding: 0 18px;
    }

    .video-section h2 {
        font-size: 28px;
    }

    .video-section .video-text {
        margin-bottom: 34px;
        font-size: 16px;
    }

    .custom-play {
        bottom: 10px;
        left: 10px;
        width: 76px;
        height: 65px;
    }


    /* ---------- Services ---------- */

    .services-section {
        padding: 70px 18px;
    }

    .services-intro {
        /* hmmmmm */
    }

    .services-intro h2 {
        font-size: 28px;
    }
    
    .services-intro p {
        font-size: 16px;
    }
    .service-tabs {
        justify-content: flex-start;
        overflow-x: auto;
        scrollbar-width: none;
    }

    .service-tabs::-webkit-scrollbar {
        display: none;
    }

    .service-tab {
        flex: 0 0 auto;
        padding: 9px 15px;
    }

    .service-card {
        flex: 0 0 100%;
    }


    /* ---------- Two-column content sections ---------- */

    .eastwest-section,
    .logistics-map-section {
        padding: 48px 18px;
    }

    .eastwest-section div:nth-child(2), .logistics-map-section  div:nth-child(2) {
    order: -1; /* Pushes it above the first div */
    }

    .eastwest-content,
    .logistics-map-content {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .eastwest-text h2,
    .logistics-map-text h2 {
        font-size: 28px;
    }


    /* ---------- Industries ---------- */

    .industry-section {
        padding: 65px 18px;
    }

    .industry-header h2 {
        font-size: 28px;
    }

    .industry-card {
        flex: 0 0 29%;
    }

    .industry-image {
        width: 150px;
        height: auto;
        aspect-ratio: 1;
    }


    /* ---------- Insights ---------- */

    .insights-section {
        padding: 65px 18px;
    }

    .insights-heading-row {
        flex-direction: column;
        align-items: stretch;
        gap: 22px;
    }

    .insights-heading h2 {
        font-size: 34px;
    }

    .insights-filter {
        width: 100%;
        min-width: 0;
    }

    .insights-filter select {
        width: 100%;
    }

    .insights-grid {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .insights-grid > .insight-card,
    .insights-bottom-right .insight-card {
        width: 100%;
        min-height: 360px;
    }

    .insight-card.featured {
        min-height: 430px;
    }

    .insights-bottom-right {
        display: contents;
    }


    /* ---------- News ---------- */

    .news-heading {
        padding: 0 18px;
    }

    .news-button {
        margin-left: 18px;
    }

    .news-viewport {
        padding-left: 18px;
    }

    .news-card {
        flex: 0 0 calc(100% - 36px);
    }

    .news-controls {
        padding: 0 18px;
    }


    /* ---------- Carousel controls ---------- */

    .services-controls,
    .industry-controls,
    .news-controls {
        min-height: 52px;
    }

    .carousel-dots,
    .industry-dots,
    .news-dots {
        position: static;
        margin-right: auto;
        transform: none;
    }


    /* ---------- Footer ---------- */

    .footer-links-section {
        width: 100%;
        padding: 50px 20px;
    }

    .footer-links-container {
        grid-template-columns: 1fr;
        gap: 14px;
    }

    .footer-top-row {
        flex-direction: column;
        align-items: center;
        gap: 36px;
        padding: 0 20px;
        text-align: center;
    }

    .footer-brand p {
        margin-left: 0;
    }

    .footer-legal {
        flex-direction: column;
        align-items: left;
        gap: 14px;
        padding: 35px 20px;
        text-align: left;
    }

    .footer-contact {
        flex-direction: column;
        align-items: stretch;
        gap: 10px;
        padding: 18px;
    }

    .footer-contact a {
        width: 100%;
        justify-content: center;
        margin-top: 0;
    }

    /* footer-bottom section */

    .footer-bottom{
        margin-top: 60px;
        background: white;
    }

    .footer-top-row{
        max-width: 1400px;
        margin-left: 0;
        padding: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .footer-brand{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .logo-span {
        display: flex;
        align-items: center;
    }

    .footer-top-row div:nth-child(2){
    order: -1; /* Pushes it above the first div */
    }

    .footer-top-row div:nth-child(3){
    order: -1; /* Pushes it above the first div */
    }

    .footer-brand img{
        width: 50px;
    }

    .footer-brand p{
        font-size: 16px;
        margin-left: 13px;
    }

    .footer-store-buttons{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .footer-store-buttons img{
        width: 100%;
        /* display: grid;
        grid-template-columns: 1fr 1fr; */
    }
}

/* Responsive css for 641–1024px */

@media (min-width: 641px) and (max-width: 1024px) {

    /* ---------- Header ---------- */

    .header {
        padding: 18px 26px;
    }

    .header-bottom {
        display: none;
    }

    .logo img {
        width: 50px;
    }

    .top-actions {
        gap: 16px;
    }

    .top-actions a {
        padding: 8px;
        font-size: 0;
    }

    .top-actions img {
        width: 25px;
        height: 25px;
    }

    .top-actions .lang,
    .top-actions .notify,
    .top-actions .contact {
        display: none;
    }

    .top-actions .ask {
        padding: 10px;
    }

    .top-actions > .menu-btn {
        display: flex;
        width: 42px;
        padding: 5px;
        flex-direction: column;
        justify-content: center;
        gap: 6px;
    }

    .top-actions > .menu-btn span {
        width: 100%;
        height: 2px;
    }


    /* ---------- Hero ---------- */

    .hero {
        min-height: 880px;
        background-position: center;
        border-bottom-right-radius: 64px;
        overflow: hidden;
    }

    .hero-content {
        top: 200px;
        right: 36px;
        bottom: auto;
        left: 36px;
        width: auto;
        max-width: 850px;
    }

    .hero-content .big-p {
        width: auto;
        max-width: 800px;
        font-size: clamp(44px, 6vw, 58px);
        line-height: 1.08;
    }

    .hero-content .small-p {
        width: auto;
        max-width: 720px;
        font-size: 22px;
        line-height: 1.4;
    }

    .hero-content .under-p {
        width: auto;
        flex-wrap: wrap;
        gap: 14px 24px;
    }

    .hero-content .under-p img {
        margin-left: 0 !important;
    }


    /* ---------- Quick panel ---------- */

    .blue-box {
        height: 80px;
        margin-top: -55px;
        padding: 0;
        border-bottom-right-radius: 64px;
    }

    .quick-panel {
        width: calc(100% - 48px);
        max-width: 900px;
        margin: -52px auto 0;
    }

    .quick-tabs button {
        flex: 1;
        justify-content: center;
        padding: 14px 12px 10px;
    }

    .quick-content,
    .quick-content.active {
        width: 100%;
        padding: 26px;
    }

    .quick-content fieldset {
        flex: 1;
        min-width: 0;
    }

    .input-box {
        width: 100%;
        min-width: 0;
    }

    .input-box input {
        width: 100% !important;
        min-width: 0;
    }


    /* ---------- Cards ---------- */

    .info-cards {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .service-card {
        flex: 0 0 calc((100% - 24px) / 2);
    }

    .industry-card {
        flex: 0 0 calc((100% - 28px) / 2);
    }

    .industry-image {
        width: min(100%, 300px);
        height: auto;
        aspect-ratio: 1;
    }

    .news-card {
        flex: 0 0 calc((100% - 56px) / 3);
    }


    /* ---------- Insights ---------- */

    .insights-section {
        padding: 75px 24px;
    }

    .insights-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 250px 250px;
    }


    /* ---------- Footer ---------- */

    .footer-links-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 35px 55px;
    }

    .footer-top-row {
        padding: 0 28px;
    }

    .footer-contact {
        flex-wrap: wrap;
        padding: 18px;
    }
}

/* Responsive css for 1025–1440px */

/* @media (min-width: 1025px) and (max-width: 1440px) {

    .header {
        padding: 12px 18px;
    }

    .logo img {
        width: 50px;
    }

    .main-nav {
        gap: 25px;
    }

    .main-nav a {
        font-size: 14px;
    }

    .top-actions {
        gap: 3px;
    }

    .top-actions a {
        padding: 6px 7px;
        font-size: 15px;
    }

    .top-actions img {
        width: 24px;
        height: 24px;
    }

    .hero {
        min-height: 900px;
    }

    .hero-content {
        
    }

    .hero-content .big-p {
        font-size: 48px;
    }

    .quick-panel {
        width: calc(100% - 48px);
        max-width: 1180px;
    }

    .services-carousel,
    .service-tabs {
        max-width: 1180px;
    }

    .service-card {
        flex: 0 0 calc((100% - 72px) / 4);
    }

    .industry-image {
        width: 220px;
        height: 220px;
    }

    .insights-section {
        max-width: 1380px;
    }

    .news-card {
        flex: 0 0 calc((100vw - 160px) / 4);
    }

    .footer-links-container {
        gap: 40px;
    }
} */


/* Responsive css for 1441–1920px */

@media (min-width: 1441px) and (max-width: 1920px) {

    .header {
        padding: 14px 28px;
    }

    .logo img {
        width: 50px;
    }

    .main-nav {
        gap: 34px;
    }

    .hero {
        min-height: 920px;
    }

    .hero-content {
        left: 34px;
        bottom: 155px;
        width: 820px;
    }

    .hero-content .big-p {
        font-size: 58px;
    }

    .hero-content .small-p {
        width: 700px;
        font-size: 22px;
    }

    .quick-panel {
        max-width: 1320px;
    }

    .services-carousel,
    .service-tabs {
        max-width: 1380px;
    }

    .eastwest-content,
    .logistics-map-content,
    .industry-section {
        max-width: 1700px;
    }

    .insights-section {
        max-width: 1600px;
    }

    .footer-links-container,
    .footer-top-row {
        max-width: 1700px;
    }
}


/* Responsive css for 1921px and above */

@media (min-width: 1921px) {

    .header {
        padding-right: max(34px, calc((100vw - 1920px) / 2));
        padding-left: max(34px, calc((100vw - 1920px) / 2));
    }

    .hero {
        min-height: 980px;
    }

    .hero-content {
        left: max(40px, calc((100vw - 1920px) / 2));
        bottom: 170px;
        width: 900px;
    }

    .hero-content .big-p {
        font-size: 64px;
    }

    .hero-content .small-p {
        width: 760px;
        font-size: 23px;
    }

    .quick-panel {
        max-width: 1500px;
    }

    .services-section,
    .industry-section,
    .insights-section,
    .eastwest-content,
    .logistics-map-content,
    .footer-links-container,
    .footer-top-row {
        max-width: 1800px;
    }

    .services-carousel,
    .service-tabs {
        max-width: 1500px;
    }

    .industry-image {
        width: 280px;
        height: 280px;
    }

    .news-card {
        flex-basis: 390px;
    }
}
        "header-scrolled",
        currentScrollY > scrollTrigger
    );

    if (currentScrollY > previousScrollY && currentScrollY > 250) {
        siteHeader.classList.add("header-hidden");
    } else {
        siteHeader.classList.remove("header-hidden");
    }

    if (window.innerWidth <= 1100) {
        siteHeader.style.position = "fixed";
        siteHeader.style.top = "0";
    } else if (currentScrollY > stopFollowingAt) {
        siteHeader.style.position = "absolute";
        siteHeader.style.top = `${stopFollowingAt}px`;
    } else {
        siteHeader.style.position = "fixed";
        siteHeader.style.top = "0";
    }

    previousScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener("scroll", updateStickyHeader, {
    passive: true
});

window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateStickyHeader);
            ticking = true;
        }
    },
    { passive: true }
);


updateStickyHeader();

const video = document.querySelector(".maersk-video");
const playButton = document.querySelector(".custom-play");

function openVideoFullscreen() {
    video.controls = true;
    video.muted = false;
    video.play();

    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // for Safari
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen(); // for Edge
    }
}

function resetPreviewVideo() {
    video.controls = false;
    video.muted = true;
    video.play();
}

// Clicking anywhere on the video
video.addEventListener("click", openVideoFullscreen);

// Clicking the custom button
playButton.addEventListener("click", openVideoFullscreen);

// Hide controls again after leaving fullscreen
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        resetPreviewVideo();
    }
});

document.addEventListener("webkitfullscreenchange", () => {
    if (!document.webkitFullscreenElement) {
        resetPreviewVideo();
    }
});

// JavaScript for services section
const serviceData = {
    transport: [
        {
            title: "Maersk Spot",
            description:
                "Get fixed prices and guaranteed loading when booking your customers’ shipments online.",
            image: "services/maersk-spot.png"
        },
        {
            title: "Ocean Contract",
            description:
                "Transport your goods with stable rates, choice of allocation and assured space.",
            image: "services/ocean-contract.jfif"
        },
        {
            title: "Ocean quote request",
            description:
                "Get a freight quote for standard, oversized and LCL shipments.",
            image: "services/ocean-quote.png"
        },
        {
            title: "Maersk Go",
            description:
                "Book and manage your own deliveries from door to door with a simple online platform.",
            image: "services/maersk-go.jfif"
        },
        {
            title: "Intermodal Transport Prices",
            description:
                "Find online inland rates for Full Container Loads.",
            image: "services/intermodal-prices.png"
        },
        {
            title: "Air Freight",
            description:
                "Fast, reliable and flexible air freight for urgent supply-chain needs.",
            image: "services/air-freight.jfif"
        },
        {
            title: "Maersk Ground Freight",
            description:
                "Point-to-point non-containerised truck movements from start to end.",
            image: "services/ground-freight.jfif"
        },
        {
            title: "Less-than-Container Load (LCL)",
            description:
                "Ship boxes and pallets by ocean with LCL services.",
            image: "services/lcl.png"
        },
        {
            title: "Mearsk Delivery Gurarantee",
            description:
                "Guaranteed end-to-end delivery timelines across ocean, inland and customs.",
            image: "services/delivery-guarantee.png"
        },
        {
            title: "Freetime Extension",
            description:
                "Extend cargo hold days beyond the agreed freetime.",
            image: "services/freetime.jfif"
        },
        {
            title: "Special Cargo",
            description:
                "Request a shipping quote for an ocean shipment exceeding the dimensions of our standard",
            image: "services/special-cargo.png"
        },
        {
            title: "Maersk ECO Delivery Ocean",
            description:
                "Reduce greenhouse gas emissions by using lower GHG emissions fuels in our network.",
            image: "services/eco-delivery.png"
        },
        {
            title: "Maersk ECO Delivery Air",
            description:
                "Support SAF use within our partner airline network to reduce greenhouse gas emissions.",
            image: "services/delivery-air.png"
        },
        {
            title: "Maersk Flex Route",
            description:
                "Manage supply chain complexities with guaranteed destination changes.",
            image: "services/flex-route.jfif"
        },
        {
            title: "Maersk Accelerate",
            description:
                "A priority service, streamlining the cargo journey with express services.",
            image: "services/maersk-accelerate.png"
        },
        {
            title: "Verified Gross Mass",
            description:
                "Hassle-free weighing, data transmission before vessel loading.",
            image: "services/gross-mass.jfif"
        },
        {
            title: "Premium Quality Containers",
            description:
                "A premium container service for high-value goods.",
            image: "services/quality-containers.jfif"
        },
        {
            title: "Captain Peter™",
            description:
                "Access real-time data on your refrigerated cargo and its journey.",
            image: "services/captain-peter.png"
        },
        {
            title: "Intercontinental Rail Transportation",
            description:
                "Efficient and reliable land connection between Asia and Europe via rail.",
            image: "services/mail-transport.jfif"
        },
        {
            title: "Garments on Hangers",
            description:
                "Specialised containers with built in hanger systems.",
            image: "services/garment-hanger.jfif"
        }
    ],

    store: [
        {
            title: "Contract Logistics",
            description:
                "Discover efficient services for consolidation, deconsolidation and fulfilment of your goods.",
            image: "services/contract-logistics.jfif"
        },
        {
            title: "Depot Services",
            description:
                "Depots acts as key connectors to expedite the import/export of your cargo.",
            image: "services/depot-services.jfif"
        },
        {
            title: "Flex Hub",
            description:
                "Positioning cargo closer to destination and ensuring timely movement.",
            image: "services/flex-hub.jfif"
        }
    ],

    protect: [
        {
            title: "Maersk Customs Services",
            description:
                "Simplify customs clearance with expert support and digital tools.",
            image: "services/maersk-customs.png"
        },
        {
            title: "Maersk Cargo Insurance",
            description:
                "Protect your cargo throughout its journey.",
            image: "services/cargo-insurance.svg"
        },
        {
            title: "Value Protect",
            description:
                "Protect your cargo from accidents, fire, theft and bad weather.",
            image: "services/value-protect.svg"
        },
        {
            title: "Container Protect",
            description:
                "Protect cargo from container damage and cleaning costs.",
            image: "services/container-protect.svg"
        },
        {
            title: "ECTN Certificates",
            description:
                "Document support for selected African countries.",
            image: "services/ectn-certificate-image.svg"
        }
    ],

    management: [
        {
            title: "Supply Chain Management",
            description:
                "Combine data and stakeholders into one connected logistics platform.",
            image: "services/supply-chain.jfif"
        },
        {
            title: "Maersk E-Commerce",
            description:
                "Optimise e-commerce supply chains with fast and reliable deliveries.",
            image: "services/maersk-ecommerce.svg"
        },
        {
            title: "Maersk Project Logistics",
            description:
                "Plan and manage specialised transport for complex cargo.",
            image: "services/project-logistics.png"
        },
        {
            title: "Cold Chain Logistics",
            description:
                "Manage temperature-sensitive goods from origin to destination.",
            image: "services/cold-chain.jfif"
        },
        {
            title: "EDI Solutions",
            description:
                "Reduce paperwork with efficient electronic communication.",
            image: "services/edi-solutions.jfif"
        },
        {
            title: "API Solutions",
            description:
                "The future of data integrations to update B2B information in real-time.",
            image: "services/api-solutions.svg"
        },
        {
            title: "Booking Services",
            description:
                "Single point of contact for bookings and communication with suppliers and carriers.",
            image: "services/booking-services.svg"
        },
        {
            title: "Destination Coordination Services",
            description:
                "From container release to final delivery, one place to manage your entire import ecosystem.",
            image: "services/destination-coordination.svg"
        },
        {
            title: "Maersk Visibility Studio",
            description:
                "Get multi-modal, multi-carrier, multi-regional shipment visibility on a single platform.",
            image: "services/visibility-studio.svg"
        },
        {
            title: "Maersk Risk Management",
            description:
                "Stay ahead with early warnings and clear actions. Powered by expert insights and AI.",
            image: "services/risk-management.svg"
        },
        {
            title: "Cold Chain Management",
            description:
                "Integrated physical and digital services which ensure seamless, transparent reefer cargo logistics.",
            image: "services/cold-chain-management.svg"
        },
        {
            title: "Emissions Studio",
            description:
                "Get visibility into greenhouse gas emissions across carriers and transport modes.",
            image: "services/emissions-dashboard.svg"
        },
        {
            title: "Supply Chain Resilience Modelo",
            description:
                "Manage disruptions and keep your business running smoothly.",
            image: "services/supply-chain-resilience.svg"
        },
        {
            title: "Pharma Cold Chain Management",
            description:
                "Unbroken cold chain logistics ensures control, flexibility and visibility while maintaining product...",
            image: "services/pharma-cold-chain-management.svg"
        },
        {
            title: "NeoNav™",
            description:
                "One platform for transparency, control, and logistics decision-making.",
            image: "services/Neonav.svg"
        }
    ],

    solutions: [
        {
            title: "Cars in Containers",
            description:
                "Flexible transport solutions for finished vehicles.",
            image: "services/cars-in-containers.svg"
        },
        {
            title: "Flexibag Logistics",
            description:
                "Transport bulk liquids safely and efficiently.",
            image: "services/flexibag-logistics.png"
        },
        {
            title: "Chemicals Logistics Management",
            description:
                "Integrated logistics for complex chemical supply chains.",
            image: "services/chemicals-logistics-management.svg"
        }
    ]
};

const servicesTrack = document.querySelector("#servicesTrack");
const serviceTabs = document.querySelectorAll(".service-tab");
const previousServices = document.querySelector("#previousServices");
const nextServices = document.querySelector("#nextServices");
const carouselDots = document.querySelector("#carouselDots");

let activeCategory = "transport";
let currentServiceIndex = 0;

function getVisibleCardCount() {
    const width = window.innerWidth;

    if (width <= 640) return 1;   // XS
    if (width <= 1024) return 2;  // SM
    if (width <= 1440) return 4;  // MD

    return 4;                     // LG and XL
}

function getCarouselStep() {
    return getVisibleCardCount();
}

function getCarouselStep() {
    const width = window.innerWidth;

    if (width < 600) return 1;
    if (width < 900) return 2;
    if (width < 1200) return 3;

    return 4;
}

function getMaximumIndex() {
    const cards = serviceData[activeCategory];
    return Math.max(0, cards.length - getVisibleCardCount());
}

function renderServiceCards() {
    const cards = serviceData[activeCategory];

    servicesTrack.innerHTML = cards
        .map(
            (card) => `
                <article class="service-card">
                    <div class="service-card-image">
                        <img
                            src="${card.image}"
                            alt="${card.title}"
                            loading="lazy"
                        >
                    </div>

                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                </article>
            `
        )
        .join("");

    currentServiceIndex = 0;

    renderCarouselDots();
    updateCarousel();
}

function renderCarouselDots() {
    const cards = serviceData[activeCategory];
    const visibleCards = getVisibleCardCount();
    const step = getCarouselStep();

    const maximumIndex = Math.max(
        0,
        cards.length - visibleCards
    );

    const positions = [];

    for (let index = 0; index <= maximumIndex; index += step) {
        positions.push(index);
    }

    if (
        positions.length === 0 ||
        positions[positions.length - 1] !== maximumIndex
    ) {
        positions.push(maximumIndex);
    }

    carouselDots.innerHTML = "";

    positions.forEach((position, dotIndex) => {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "carousel-dot";
        dot.dataset.position = position;
        dot.setAttribute(
            "aria-label",
            `Show service group ${dotIndex + 1}`
        );

        dot.addEventListener("click", () => {
            currentServiceIndex = position;
            updateCarousel();
        });

        carouselDots.appendChild(dot);
    });
}

function updateCarousel() {
    const firstCard = servicesTrack.querySelector(".service-card");

    if (!firstCard) return;

    const trackStyles = getComputedStyle(servicesTrack);
    const gap = parseFloat(trackStyles.columnGap) || 0;
    const cardWidth = firstCard.getBoundingClientRect().width;

    const offset = currentServiceIndex * (cardWidth + gap);

    servicesTrack.style.transform = `translateX(-${offset}px)`;

    previousServices.disabled = currentServiceIndex === 0;
    nextServices.disabled = currentServiceIndex >= getMaximumIndex();

    const dots = [...document.querySelectorAll(".carousel-dot")];

let activeDot = 0;

dots.forEach((dot, index) => {
    const position = Number(dot.dataset.position);

    if (position <= currentServiceIndex) {
        activeDot = index;
    }
});

dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeDot);
});
}

serviceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        serviceTabs.forEach((item) => item.classList.remove("active"));

        tab.classList.add("active");
        activeCategory = tab.dataset.category;

        renderServiceCards();
    });
});

previousServices.addEventListener("click", () => {
    const step = getCarouselStep();

    if (currentServiceIndex <= 0) {
        return;
    }

    currentServiceIndex = Math.max(
        0,
        currentServiceIndex - step
    );

    updateCarousel();
});

nextServices.addEventListener("click", () => {
    const step = getCarouselStep();
    const maximumIndex = getMaximumIndex();

    currentServiceIndex = Math.min(
        maximumIndex,
        currentServiceIndex + step
    );

    updateCarousel();
});

window.addEventListener("resize", () => {
    const maximumIndex = getMaximumIndex();

    if (currentServiceIndex > maximumIndex) {
        currentServiceIndex = maximumIndex;
    }

    renderCarouselDots();
    updateCarousel();
});

renderServiceCards();

const industryData = [
    {
        title: "FMCG",
        image: "images/industries/fmcg.svg"
    },
    {
        title: "Retail",
        image: "images/industries/retail.svg"
    },
    {
        title: "Fashion & Lifestyle",
        image: "images/industries/fashion-and-lifestyle.svg"
    },
    {
        title: "Chemicals",
        image: "images/industries/chemicals.svg"
    },
    {
        title: "Technology",
        image: "images/industries/technology.svg"
    },
    {
        title: "Automotive",
        image: "images/industries/automotive.svg"
    },
    {
        title: "Pharma & Healthcare",
        image: "images/industries/pharma-and-healthcare.svg"
    },
    {
        title: "Perishables",
        image: "images/industries/refregirated-goods.svg"
    }
];

const industryTrack = document.querySelector("#industryTrack");
const industryDots = document.querySelector("#industryDots");
const previousIndustries = document.querySelector("#previousIndustries");
const nextIndustries = document.querySelector("#nextIndustries");

let currentIndustryIndex = 0;

function getVisibleIndustryCount() {
    const width = window.innerWidth;

    if (width <= 640) return 1;
    if (width <= 1024) return 2;

    return 4;
}

function getIndustryStep() {
    return getVisibleIndustryCount();
}

function getMaximumIndustryIndex() {
    return Math.max(
        0,
        industryData.length - getVisibleIndustryCount()
    );
}

function renderIndustryCards() {
    industryTrack.innerHTML = industryData
        .map(
            (industry) => `
                <a href="#" class="industry-card">
                    <div class="industry-image">
                        <img
                            src="${industry.image}"
                            alt="${industry.title}"
                            loading="lazy"
                        >
                    </div>

                    <h3>${industry.title}</h3>
                </a>
            `
        )
        .join("");

    currentIndustryIndex = 0;

    renderIndustryDots();
    updateIndustryCarousel();
}

function getIndustryPositions() {
    const maximumIndex = getMaximumIndustryIndex();
    const step = getIndustryStep();
    const positions = [];

    for (let index = 0; index <= maximumIndex; index += step) {
        positions.push(index);
    }

    if (
        positions.length === 0 ||
        positions[positions.length - 1] !== maximumIndex
    ) {
        positions.push(maximumIndex);
    }

    return positions;
}

function renderIndustryDots() {
    const positions = getIndustryPositions();

    industryDots.innerHTML = "";

    positions.forEach((position, index) => {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "industry-dot";
        dot.dataset.position = position;
        dot.setAttribute(
            "aria-label",
            `Show industry group ${index + 1}`
        );

        dot.addEventListener("click", () => {
            currentIndustryIndex = position;
            updateIndustryCarousel();
        });

        industryDots.appendChild(dot);
    });
}

function updateIndustryCarousel() {
    const firstCard = industryTrack.querySelector(".industry-card");

    if (!firstCard) return;

    const trackStyles = getComputedStyle(industryTrack);
    const gap = parseFloat(trackStyles.columnGap) || 0;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const offset = currentIndustryIndex * (cardWidth + gap);

    industryTrack.style.transform = `translateX(-${offset}px)`;

    previousIndustries.disabled = currentIndustryIndex === 0;

    nextIndustries.disabled =
        currentIndustryIndex >= getMaximumIndustryIndex();

    const dots = [...document.querySelectorAll(".industry-dot")];

    let activeDotIndex = 0;

    dots.forEach((dot, index) => {
        const position = Number(dot.dataset.position);

        if (position <= currentIndustryIndex) {
            activeDotIndex = index;
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === activeDotIndex
        );
    });
}

previousIndustries.addEventListener("click", () => {
    const positions = getIndustryPositions();
    const currentPositionIndex = positions.indexOf(currentIndustryIndex);

    const previousPosition =
        positions[Math.max(0, currentPositionIndex - 1)];

    currentIndustryIndex = previousPosition;
    updateIndustryCarousel();
});

nextIndustries.addEventListener("click", () => {
    const positions = getIndustryPositions();
    const currentPositionIndex = positions.indexOf(currentIndustryIndex);

    const nextPosition =
        positions[
            Math.min(
                positions.length - 1,
                currentPositionIndex + 1
            )
        ];

    currentIndustryIndex = nextPosition;
    updateIndustryCarousel();
});

window.addEventListener("resize", () => {
    const maximumIndex = getMaximumIndustryIndex();

    currentIndustryIndex = Math.min(
        currentIndustryIndex,
        maximumIndex
    );

    renderIndustryDots();
    updateIndustryCarousel();
});

renderIndustryCards();


// javascript for insights section

const insightsData = [
    {
        title: "Commodity classification and HS 2028 amendments: Regulatory perspective and implementation strategies",
        category: "resilience",
        label: "Resilience",
        date: "3 Jul 2026",
        description:
            "Understand the upcoming classification changes and what they mean for global supply chains.",
        image: "images/insights/employee-at-work-on-the-laptop_1024x576.avif",
        author: "Lina Grenc",
        role: "Customer Communications Specialist Europe",
        authorImage: "images/insights/authors/lana-genc_100x100.avif",
        featured: true
    },
    {
        title:
            "The football effect: powering supply chains across Latin America",
        category: "growth",
        label: "Growth",
        date: "2 Jul 2026",
        description:
            "Explore how football events trigger significant shifts in consumer demand and supply-chain activity.",
        image: "images/insights/soccer-field-with-football-and-player_1024x576.webp",
        author: "Oscar Emiliano Grondona",
        role: "LAM Marketing Content & Strategy",
        authorImage: "images/insights/authors/oscar-emiliano-grondona_100x100.avif"
    },
    {
        title:
            "The new protein dynamics redefining the poultry trade",
        category: "growth",
        label: "Growth",
        date: "27 May 2026",
        description:
            "Explore how shifting protein demand, emerging consumer preferences, and supply chain volatility are reshaping the global poultry trade. Discover the latest protein‑driven market trends shaping production, pricing, and long‑term resilience.",
        image: "images/insights/raw-chicken-pack-supermarket-selection_1024x576.avif",
        author: "Oscar Emiliano Grondona",
        role: "LAM Marketing Content & Strategy",
        authorImage: "images/insights/authors/silvia-la-face_100x100.avif"
    },
    {
        title:
            "Strategic Pathways Through Tariffs",
        category: "growth",
        label: "Growth",
        date: "12 May 2026",
        description:
            "How APAC logistics leaders are navigating a permanently volatile trade landscape",
        image: "images/insights/team-rowing-boat-open-water-aerial-view_1024x576.webp",
        author: "Oscar Emiliano Grondona",
        role: "LAM Marketing Content & Strategy",
        authorImage: "images/insights/authors/sherman-lan_100x100.webp"
    },
    {
        title:
            "How SMEs can soar higher in the Asia-Pacific",
        category: "growth",
        label: "Growth",
        date: "14 Jan 2026",
        description:
            "Sustaining growth in the Asia-Pacific region can be challenging as market conditions fluctuate at will. But small and medium enterprises can stay resilient – and confident – with some key logistics insights. They’re captured in our latest Blue Paper.",
        image: "images/insights/boy-flying-kite_1024x576_v1.avif",
        author: "Oscar Emiliano Grondona",
        role: "LAM Marketing Content & Strategy",
        authorImage: "images/insights/authors/sherman-lan_100x100.webp"
    },
    {
        title:
            "What AI should deliver from your lead logistics provider",
        category: "digitalisation",
        label: "Digitalisation",
        date: "1 Jul 2026",
        description:
            "How artificial intelligence can support better planning, visibility and decision-making.",
        image: "images/insights/maersk-employees-looking-at-screen_1024x576.avif",
        author: "Monica Kohn",
        role: "Global Customer Insights",
        authorImage: "images/insights/authors/hilary-ross_100x100.avif"
    },
    {
        title:
            "Building the control tower ecosystem that leads to decisions and action",
        category: "resilience",
        label: "Resilience",
        date: "29 Jun 2026",
        description:
            "Control towers are evolving from visibility tools into decision engines.",
        image: "images/insights/man_1056x594-v2.avif",
        author: "Lina Grenc",
        role: "Customer Communication Specialist Europe",
        authorImage: "images/insights/authors/lana-genc_100x100.avif"
    },
    {
        title:
            "The Future of Customs: A Passport for Goods",
        category: "digitalisation",
        label: "Digitalisation",
        date: "6 Feb 2026",
        description:
            "Insights from Global Head of Trade and Customs Consulting.",
        image: "images/insights/two-men-converse-in-warehouse_1056x594.avif",
        author: "Stuart Newman",
        role: "Europe Customer Communications Manager",
        authorImage: "images/insights/authors/stuart-newman_100x100.webp"
    },
    {
        title:
            "Tech and Trade Spark FMCG Supply Chain Growth in East Africa",
        category: "digitalisation",
        label: "Digitalisation",
        date: "6 Feb 2026",
        description:
            "This article explores the rapid FMCG supply chain growth in East Africa, highlighting the impact of digital transformation, regional trade integration, and infrastructure upgrades in Kenya, Tanzania, and Ethiopia. Discover key trends, persistent challenges, and strategic solutions shaping the region’s dynamic FMCG market.",
        image: "images/insights/woman-paying-through-digital-platform_1024x576.webp",
        author: "Stuart Newman",
        role: "Europe Customer Communications Manager",
        authorImage: "images/insights/authors/nikhita.avif"
    },
    {
        title:
            "Redefining supply chain resilience with electrification and digitalisation for automotive",
        category: "digitalisation",
        label: "Digitalisation",
        date: "6 Feb 2026",
        description:
            "Examine how the automotive industry can navigate significant transformation and uncertainty with the help of resilience, visibility, collaboration, and technology-driven strategies that transform risk into opportunity.",
        image: "images/insights/robots-assembling-car_1024x576.webp",
        author: "Stuart Newman",
        role: "Europe Customer Communications Manager",
        authorImage: "images/insights/authors/antonio-fondevilla.avif"
    },
    {
        title:
            "Future-proofing supply chains",
        category: "sustainability",
        label: "Sustainability",
        date: "7 Oct 2025",
        description:
            "Professors Nada R. Sanders, PhD, and Christopher S. Tang join the Beyond the Box podcast to discuss how Environmental, Social, and Governance (ESG) initiatives are reshaping logistics and supply chain strategies in the face of geopolitical uncertainty, rising costs, and regulatory complexity.",
        image: "images/insights/nada-sanders-and-christopher-tang_1056x594.avif",
        author: "Maersk Insights",
        role: "Sustainability",
        authorImage: "images/insights/authors/nichole-allem_100x100.avif"
    },
    {
        title:
            "From insight to action: reducing greenhouse-gas emissions",
        category: "sustainability",
        label: "Sustainability",
        date: "7 Oct 2025",
        description:
            "Learn how benchmarking and transparent data can help reduce emissions.",
        image: "images/insights/laura-maersk_1024x576.avif",
        author: "Maersk Insights",
        role: "Sustainability",
        authorImage: "images/insights/authors/lara-albertina-rebello_100x100.avif"
    },
    {
        title:
            "How the rise in electric car sales is shaping logistics: Video",
        category: "sustainability",
        label: "Sustainability",
        date: "7 Oct 2025",
        description:
            "Explore the rise in electric car sales for logistics and how it’s transforming supply chains, battery handling, and global production strategies.",
        image: "images/insights/line-of-blue-electric-cars-charging_1024x576.avif",
        author: "Maersk Insights",
        role: "Sustainability",
        authorImage: "images/insights/authors/emma-firth_100x100.avif"
    },
    {
        title:
            "IMO’s net zero framework: A turning point for global shipping",
        category: "sustainability",
        label: "Sustainability",
        date: "7 Oct 2025",
        description:
            "Learn about the International Maritime Organization net zero framework and its impact on reducing shipping emissions through global fuel standards and pricing.",
        image: "images/insights/cargo-ship-aerial-photo_1024x576.avif",
        author: "Maersk Insights",
        role: "Sustainability",
        authorImage: "images/insights/authors/nichole-allem_100x100.avif"
    },
    {
        title:
            "Redefining reliability in ground freight delivery",
        category: "integrated-logistics",
        label: "Integrated logistics",
        date: "24 Apr 2026",
        description:
            "Why on-time delivery is no longer enough for modern supply chains.",
        image: "images/insights/ground-freight.jpg",
        author: "Monica Kohn",
        role: "Regional Customer Insights",
        authorImage: "images/insights/authors/monica.jpg"
    }
];

const insightsGrid = document.querySelector("#insightsGrid");
const insightsCategory = document.querySelector("#insightsCategory");
const viewAllInsights = document.querySelector("#viewAllInsights");
const newsGrid = document.querySelector("#newsGrid");

let showAllInsights = false;

function createInsightCard(article, featured = false) {
    return `
        <a
            href="#"
            class="insight-card ${featured ? "featured" : ""}"
        >
            <div class="insight-card-image">
                <img
                    src="${article.image}"
                    alt="${article.title}"
                    loading="lazy"
                >
            </div>

            <div class="insight-card-content">
                <div class="insight-meta">
                    ${article.label} · ${article.date}
                </div>

                <h3>${article.title}</h3>

                <p>${article.description}</p>

                <div class="insight-author">
                    <img
                        src="${article.authorImage}"
                        alt=""
                    >

                    <div class="insight-author-details">
                        <strong>${article.author}</strong>
                        ${article.role}
                    </div>
                </div>
            </div>
        </a>
    `;
}

function renderInsights() {
    const category = insightsCategory.value;

    const filteredArticles = insightsData.filter((article) => {
        return category === "all" || article.category === category;
    });

    const displayedArticles = showAllInsights
        ? filteredArticles
        : filteredArticles.slice(0, 4);

    if (displayedArticles.length === 0) {
        insightsGrid.innerHTML = `
            <p class="no-insights">
                No insights are available in this category.
            </p>
        `;

        viewAllInsights.hidden = true;
        return;
    }

    const firstArticle = displayedArticles[0];
    const secondArticle = displayedArticles[1];
    const thirdArticle = displayedArticles[2];
    const fourthArticle = displayedArticles[3];

    insightsGrid.innerHTML = `
        ${firstArticle
            ? createInsightCard(firstArticle, true)
            : ""
        }

        ${secondArticle
            ? createInsightCard(secondArticle)
            : ""
        }

        ${
            thirdArticle || fourthArticle
                ? `
                    <div class="insights-bottom-right">
                        ${
                            thirdArticle
                                ? createInsightCard(thirdArticle)
                                : ""
                        }

                        ${
                            fourthArticle
                                ? createInsightCard(fourthArticle)
                                : ""
                        }
                    </div>
                `
                : ""
        }
    `;

    viewAllInsights.hidden = filteredArticles.length <= 4;

    viewAllInsights.textContent = showAllInsights
        ? "Show less"
        : "View all";
}

insightsCategory.addEventListener("change", () => {
    showAllInsights = false;
    renderInsights();
});

viewAllInsights.addEventListener("click", () => {
    showAllInsights = !showAllInsights;
    renderInsights();
});

renderInsights();

//

const newsTrack = document.querySelector("#newsTrack");
const newsDots = document.querySelector("#newsDots");
const previousNews = document.querySelector("#previousNews");
const nextNews = document.querySelector("#nextNews");

let currentNewsIndex = 0;

const newsData = [
    {
        title: "Maersk Invests $100 Million in New Boston-area Fulfillment Hub,...",
        label: "Press releases",
        date: "15 Jul 2026",
        image: "images/news/new-boston-area-fulfillment-hub_1024x576.avif"
    },
    {
        title: "Maersk Latin America Market Update – July, 2026",
        label: "News",
        date: "14 Jul 2026",
        image: "images/news/women-infront-container-1024x576.webp"
    },
    {
        title: "How General Motors strengthened supply chain resilience with...",
        label: "Case studies",
        date: "9 Jul 2026",
        image: "images/news/general-motors_1056x594.webp"
    },
    {
        title: "Union Minister Sonowal unveils Maersk’s first Indian manufactured...",
        label: "Press releases",
        date: "3 Jul 2026",
        image: "images/news/maersk-blue-container-on-stage_1024x576.avif"
    },
    {
        title: "Maersk deploys next-generation connectivity across its network",
        label: "Press releases",
        date: "2 Jul 2026",
        image: "images/news/maersk-containers-stacked_1024x576.avif"
    },
    {
        title: "Maersk Europe Market Update July 2026",
        label: "News",
        date: "1 Jul 2026",
        image: "images/news/maersk-vessel-at-panama_1024x576.avif"
    },
    {
        title: "Adriatic Service: Delivering Speed, Reliability, and Connectivity to the East Mediterranean",
        label: "News",
        date: "30 Jul 2026",
        image: "images/news/maersk-vessel-at-panama_1024x576.avif"
    },
    {
        title: "Maersk Asia Pacific Monthly Market Update – July 2026",
        label: "News",
        date: "28 Jun 2026",
        image: "images/news/warehouse-worker_1024x576.webp"
    },
    {
        title: "Maersk upgrades guidance for full year 2026",
        label: "Press News",
        date: "29 Jun 2026",
        image: "images/news/maersk-office_1024x576.webp"
    },
    {
        title: "Maersk North America Market Update — July 2026",
        label: "News",
        date: "29 Jun 2026",
        image: "images/news/maersk-container-truck-parked-at-apm-terminals.avif"
    },
    {
        title: "What’s it like working at Maersk Africa? Hear from the best in sales",
        label: "News",
        date: "29 Jun 2026",
        image: "images/news/maersk-africa-leadership-banner_1024x576.webp"
    },
    {
        title: "Maersk appoints Scott Elliott as Regional President, Asia Pacific",
        label: "Press Releases",
        date: "29 Jun 2026",
        image: "images/news/scott-elliott_v1_1024x576.avif"
    }
];

function getVisibleNewsCount() {
    const width = window.innerWidth;

    if (width <= 640) return 1;
    if (width <= 1024) return 3;

    return 4;
}

function getNewsStep() {
    return getVisibleNewsCount();
}

function getMaximumNewsIndex() {
    return Math.max(
        0,
        newsData.length - getVisibleNewsCount()
    );
}

function getNewsPositions() {
    const maximumIndex = getMaximumNewsIndex();
    const step = getNewsStep();
    const positions = [];

    for (let index = 0; index <= maximumIndex; index += step) {
        positions.push(index);
    }

    if (
        positions.length === 0 ||
        positions[positions.length - 1] !== maximumIndex
    ) {
        positions.push(maximumIndex);
    }

    return positions;
}

function renderNews() {
    newsTrack.innerHTML = newsData
        .map(
            (article) => `
                <a href="#" class="news-card">
                    <div class="news-card-image">
                        <img
                            src="${article.image}"
                            alt="${article.title}"
                            loading="lazy"
                        >
                    </div>

                    <div class="news-card-body">
                        <div class="news-category">
                            ${article.label}
                        </div>

                        <h3>${article.title}</h3>

                        <div class="news-date">
                            ${article.date}
                        </div>
                    </div>
                </a>
            `
        )
        .join("");

    currentNewsIndex = 0;

    renderNewsDots();
    updateNewsCarousel();
}

function renderNewsDots() {
    const positions = getNewsPositions();

    newsDots.innerHTML = "";

    positions.forEach((position, index) => {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "news-dot";
        dot.dataset.position = position;
        dot.setAttribute(
            "aria-label",
            `Show news group ${index + 1}`
        );

        dot.addEventListener("click", () => {
            currentNewsIndex = position;
            updateNewsCarousel();
        });

        newsDots.appendChild(dot);
    });
}

function updateNewsCarousel() {
    const firstCard = newsTrack.querySelector(".news-card");

    if (!firstCard) return;

    const trackStyles = getComputedStyle(newsTrack);
    const gap = parseFloat(trackStyles.columnGap) || 0;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const offset = currentNewsIndex * (cardWidth + gap);

    newsTrack.style.transform = `translateX(-${offset}px)`;

    previousNews.disabled = currentNewsIndex === 0;
    nextNews.disabled =
        currentNewsIndex >= getMaximumNewsIndex();

    const dots = [...document.querySelectorAll(".news-dot")];

    let activeDotIndex = 0;

    dots.forEach((dot, index) => {
        const position = Number(dot.dataset.position);

        if (position <= currentNewsIndex) {
            activeDotIndex = index;
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === activeDotIndex
        );
    });
}

previousNews.addEventListener("click", () => {
    const positions = getNewsPositions();
    const currentPosition = positions.indexOf(currentNewsIndex);

    currentNewsIndex =
        positions[Math.max(0, currentPosition - 1)];

    updateNewsCarousel();
});

nextNews.addEventListener("click", () => {
    const positions = getNewsPositions();
    const currentPosition = positions.indexOf(currentNewsIndex);

    currentNewsIndex =
        positions[
            Math.min(
                positions.length - 1,
                currentPosition + 1
            )
        ];

    updateNewsCarousel();
});

window.addEventListener("resize", () => {
    currentNewsIndex = Math.min(
        currentNewsIndex,
        getMaximumNewsIndex()
    );

    renderNewsDots();
    updateNewsCarousel();
});

renderNews();

const quickTabs = document.querySelectorAll(".quick-tabs button");

const quickPanels = document.querySelectorAll(".quick-content");

quickTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        quickTabs.forEach(button =>
            button.classList.remove("active")
        );

        tab.classList.add("active");

        const panelName =
            tab.textContent.trim().toLowerCase();

        quickPanels.forEach(panel => {

            panel.classList.toggle(
                "active",
                panel.dataset.panel === panelName
            );
        });
    });
});
