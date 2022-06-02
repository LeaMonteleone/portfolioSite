function getData() {
  const url =
    "https://cdn.contentful.com/spaces/30osmkewt5vr/environments/master/entries?access_token=7T-luY0n-JtfH707jCkdX7XMK58poXjn3jjDD-vIgR4&content_type=desafio4";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("DATA: ", data);
      const datita = data.items.map((item) => {
        const imgId = buscarEnAsset(item.fields.img.sys.id, data);
        return {
          img: imgId.fields.file.url,
          title: item.fields.tittle,
          description: item.fields.tittleDescription,
        };
      });
      console.log(datita);
      return datita;
    });
}

function buscarEnAsset(id, data) {
  console.log("ID: ", id, "DATA: ", data.includes.Asset);
  const arrayEncontrado = data.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  return arrayEncontrado;
}

function add(params) {
  const template = document.querySelector(".template");
  const templateContainer = document.querySelector(".template-container");
  template.content.querySelector(".services__img").src = params.img;
  template.content.querySelector(".services__title").textContent = params.title;
  template.content.querySelector(".services__text").textContent =
    params.description;

  var clone = document.importNode(template.content, true);
  templateContainer.appendChild(clone);
}

function getDataWelcome() {
  const url =
    "https://cdn.contentful.com/spaces/30osmkewt5vr/environments/master/entries?access_token=7T-luY0n-JtfH707jCkdX7XMK58poXjn3jjDD-vIgR4&content_type=bienvenida";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("DATA: ", data);
      const datita = data.items.map((item) => {
        return {
          title: item.fields.title,
          description: item.fields.welcome,
        };
      });
      console.log("Data welcome: ", datita);
      return datita;
    });
}

function AddWelcome(params) {
  const title = document.querySelector(".info__title");
  const description = document.querySelector(".info__text");
  title.innerHTML = params.title;
  description.textContent = params.description;
}

function main() {
  const header__menu = document.querySelector(".header-menu");
  header(header__menu);
  const footer__section = document.querySelector(".footer__section");
  footer(footer__section);
  const formContainer = document.querySelector(".form__section");

  formComponent(formContainer);

  getData().then((info) => {
    for (let r of info) {
      add(r);
    }
  });

  getDataWelcome().then((info) => {
    for (r of info) {
      AddWelcome(r);
    }
  });
}

main();
