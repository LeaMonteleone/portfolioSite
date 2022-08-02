/*Header component receive a container by argument and appends a div width all the footer's html*/

function footer(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `  
  <div class="footer-container">
      
    <p class="footer-container__title">Lean Monteleone<br>@2022</br></p>
    <img src="./img/arrows.svg">
    
    <ul class="footer__container-social">
        <li>Instagram <i class="fa-brands fa-instagram"></i></li>
        <li>Linkedin <i class="fa-brands fa-linkedin"></i></li>
        <li>Github <i class="fa-brands fa-github"></i></li>

    </ul>
    </div>`;

  el.appendChild(componentEl);
}
