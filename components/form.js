/*Header component receive a container by argument and appends a div width all the form's html.*/

function formComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <h2 class="form__title">Hablemos</h2>
    <form class="form__">
        <label for="name" >Nombre</label>
        <input type="text" name="name" id="name">

        <label for="email" >Correo electronico</label>
        <input type="email" name="email" id="email">

        <label for="message">Mensaje</label>
        <textarea name="message" id="message"></textarea>

        <button type="submit">Enviar</button>

    </form>`;

  el.appendChild(componentEl);

  /* Logic to make the form works: When submited, returns and objet width all the info, then fetchs vercel api, post the objecta and vercel 
  makes it works*/
  const formOk = componentEl.querySelector(".form__");

  formOk.addEventListener("submit", (event) => {
    event.preventDefault();
    const msj = {
      to: "monteleonelea@gmail.com",
      message:
        "DE:" +
        event.target.name.value +
        "Mi email: " +
        event.target.email.value +
        "message:" +
        event.target.message.value,
    };

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      body: JSON.stringify(msj),
      headers: { "content-type": "application/json" },
    }).catch((error) => {
      console.log(error);
    });
    event.target.reset();
  });
}
