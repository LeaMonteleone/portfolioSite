/**/
function header(el) {
  const componentEl = document.createElement("div");
  componentEl.className = "header-section";
  componentEl.innerHTML = `
  <div class="header-menu__container">
  <div>
    <a class="logo-container" href="./"><img class="header-menu__logo" src="/img/lean-logo-mobile-ok.svg" alt="Pagina principal"></a>
  </div>

  <i id="barsButton" class="fa-solid fa-bars fa-xl"></i>

  <div class="mobile-header__window">
      <ul class="mobile-header__window__menu">
          <li><a href="./portfolio.html">Portfolio</a></li>
          <li><a href="./services.html">Servicios</a></li>
          <li><a href="./contacto/contact.html">Contacto</a></li>
      </ul>

      <i class="fa-solid fa-xmark fa-2xl mobile-header__window__menu__close"></i>
  </div>

  <nav class="desktop-menu"> 
      <ul class="desktop-menu__container">
          <li><a href="./services.html">Servicios</a></li>
          <li><a href="./portfolio.html">Portfolio</a></li>
          <li><a href="./contact.html">Contacto</a></li>
          
      </ul>
  </nav>
</div>`;

  const barsMenu = componentEl.querySelector("#barsButton");
  const windowMobile = componentEl.querySelector(".mobile-header__window");
  const exit = componentEl.querySelector(".mobile-header__window__menu__close");

  barsMenu.addEventListener("click", () => {
    windowMobile.style.display = "inherit";
  });

  exit.addEventListener("click", () => {
    windowMobile.style.display = "none";
  });

  el.appendChild(componentEl);

  /*Logo function changes the logo depending on whether it's mobile or 800px > screen */
  function logo() {
    const logoContainer = componentEl.querySelector(".header-menu__logo");

    if (window.innerWidth > 800) {
      logoContainer.setAttribute("src", "./img/lean-logo-ok.svg");
    } else {
      logoContainer.setAttribute("src", "./img/lean-logo-mobile-ok.svg");
    }
  }
  logo();
}
