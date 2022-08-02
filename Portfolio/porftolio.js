/*Main function calls header and footer components. It also calls getPortfolioData function in order to add the services */

function main() {
  const headerContainer = document.querySelector(".header-container");
  header(headerContainer);

  const footerContainer = document.querySelector(".footer-section");
  footer(footerContainer);

  getPortfolioData().then((data) => {
    /*Iterates the collection received by argument and add each object*/
    for (r of data) {
      addPortfolio(r);
    }
  });
}

/* This function receives an object width info about services (title, img and description) then makes the template*/
function addPortfolio(parametros) {
  const template = document.querySelector(".template");
  const templateContainer = document.querySelector(".template-container");
  template.content.querySelector(".template-img").src = parametros.img;
  template.content.querySelector(".template-title").textContent =
    parametros.title;
  template.content.querySelector(".template-description").textContent =
    parametros.description;

  var clone = document.importNode(template.content, true);
  templateContainer.appendChild(clone);
}

/* getPortfolioData fetchs contentful API and returns a new collection width a title, a description and an image url for each object*/
function getPortfolioData() {
  const url =
    "https://cdn.contentful.com/spaces/30osmkewt5vr/environments/master/entries?access_token=7T-luY0n-JtfH707jCkdX7XMK58poXjn3jjDD-vIgR4&content_type=porftolio";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const newCol = data.items.map((item) => {
        const imgId = searchImg(item.fields.image.sys.id, data);
        return {
          img: imgId.fields.file.url,
          title: item.fields.title,
          description: item.fields.description,
        };
      });
      console.log(newCol);
      return newCol;
    });
}

function searchImg(id, data) {
  console.log("ID: ", id, "DATA: ", data.includes.Asset);
  const arrayFound = data.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  console.log("Found array:", arrayFound);
  return arrayFound;
}

main();
