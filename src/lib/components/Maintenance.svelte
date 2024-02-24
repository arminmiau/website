<svelte:head>
  <link rel="stylesheet" href="/css/maintenance.css" />
</svelte:head>

<div id="maintenance">
  <div class="centered-container">
    <h2 id="titleText">arminmiau.vercel.app</h2>
    <div id="loadingWaves">
      <div class="wave" />
      <div class="wave" />
      <div class="wave" />
      <div class="wave" />
      <div class="wave" />
      <div class="wave" />
      <div class="wave" />
      <div class="wave" />
      <div class="wave" />
      <div class="wave" />
    </div>
    <span id="maintenanceText"
      ><span> This site is beeing worked on...</span></span>
    <p>Discord: @arminmiau</p>
  </div>
  <footer>
    Background image from
    <a href="https://thiojoe.art" target="_blank"> https://thiojoe.art</a>
  </footer>
</div>

<style>
  #maintenance {
    color: black;
  }

  .centered-container {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #titleText {
    font-size: 3rem;
    animation: slideDown forwards 2s;
  }

  @keyframes slideDown {
    0% {
      margin-bottom: 100vh;
    }
    100% {
      margin-bottom: 0;
    }
  }

  #maintenanceText {
    font-size: 5rem;
    display: inline-flex;
  }

  #maintenanceText span {
    word-break: break-all;
    height: 1.2em;
    width: 0%;
    overflow: hidden;
    animation: t 5s linear infinite alternate;
  }
  #maintenanceText span:before {
    content: ' ';
    display: inline-block;
  }
  @keyframes t {
    20%,
    100% {
      width: 100%;
    }
  }

  #loadingWaves {
    display: flex;
  }
  .wave {
    width: 5px;
    height: 100px;
    background: #0f0;
    margin: 10px;
    animation: wave 1s linear infinite;
    border-radius: 20px;
  }
  .wave:nth-child(2) {
    animation-delay: 0.1s;
  }
  .wave:nth-child(3) {
    animation-delay: 0.2s;
  }
  .wave:nth-child(4) {
    animation-delay: 0.3s;
  }
  .wave:nth-child(5) {
    animation-delay: 0.4s;
  }
  .wave:nth-child(6) {
    animation-delay: 0.5s;
  }
  .wave:nth-child(7) {
    animation-delay: 0.6s;
  }
  .wave:nth-child(8) {
    animation-delay: 0.7s;
  }
  .wave:nth-child(9) {
    animation-delay: 0.8s;
  }
  .wave:nth-child(10) {
    animation-delay: 0.9s;
  }

  @keyframes wave {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  p {
    font-size: 2rem;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 15vh;
    margin-right: 20px;
    align-items: flex-end;
  }

  a {
    margin-left: 5px;
    color: #ccc;
  }

  @media screen and (max-width: 915px) {
    #maintenanceText span {
      word-break: normal;
      animation: none;
      width: 100%;
      text-align: center;
      height: auto;
    }
    #maintenanceText span:before {
      content: none;
      display: none;
    }
  }
</style>
