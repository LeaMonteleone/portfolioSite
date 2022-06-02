function main() {
  const headerContainer = document.querySelector(".header-container");
  header(headerContainer);

  const footerContainer = document.querySelector(".footer-section");
  footer(footerContainer);

  getData().then((data) => {
    for (r of data) {
      addServices(r);
    }
  });
}

function addServices(params) {
  const template = document.querySelector(".template");
  const templateContainer = document.querySelector(".template-container");
  template.content.querySelector(".template-img").src = params.img;
  template.content.querySelector(".template-title").textContent = params.title;
  template.content.querySelector(".template-description").textContent =
    params.description;

  var clone = document.importNode(template.content, true);
  templateContainer.appendChild(clone);
}

function getData() {
  const url =
    "https://cdn.contentful.com/spaces/30osmkewt5vr/environments/master/entries?access_token=7T-luY0n-JtfH707jCkdX7XMK58poXjn3jjDD-vIgR4&content_type=desafio4";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const newCol = data.items.map((item) => {
        const imgId = buscarEnAsset(item.fields.img.sys.id, data);
        return {
          img: imgId.fields.file.url,
          title: item.fields.tittle,
          description: item.fields.tittleDescription,
        };
      });
      return newCol;
    });
  function buscarEnAsset(id, data) {
    console.log("ID: ", id, "DATA: ", data.includes.Asset);
    const arrayEncontrado = data.includes.Asset.find((asset) => {
      return asset.sys.id == id;
    });
    console.log("Array encontrado:", arrayEncontrado);
    return arrayEncontrado;
  }
}

main();
