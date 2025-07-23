import { productsDatabase } from "../data/productsDatabase";

const tortasCatalogo = document.getElementById('mobile_tortas-catalogo');
const malteadassCatalogo = document.getElementById('mobile_malteadas-catalogo');
const heladosCatalogo = document.getElementById('mobile_helados-catalogo');

export const renderMobileCatalogo = () => {
  let currentData: { id: number; name: string; prize: string; imgUrl: string; }[] = [];
  let currentColor: string = '';

  [tortasCatalogo, malteadassCatalogo, heladosCatalogo].forEach((product, index) => {
    if (index == 0) {
      currentData = productsDatabase.tortas;
      currentColor ='bg-orange';
    }
    else if (index == 1) {
      currentData = productsDatabase.malteadas;
      currentColor = 'bg-pastel-viole';
    }
    else {
      currentData = productsDatabase.helados;
      currentColor = 'bg-green-yellow';
    }

    if (product) {
      currentData.forEach(item => {
        const newProductHTML = `
        <div class="mobile_catalogo-product ${currentColor} ">
          <img src="${item.imgUrl}" alt="${item.name}" class="size-full object-cover rounded-[10px]">
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3/4">
            <p class="mobile-title bg-white px-8 py-1 whitespace-nowrap rounded-xl text-xl sm:text-2xl">${item.name}</p>
            <p class="mobile-text bg-gray w-fit px-6 mx-auto rounded-b-xl">$ ${item.prize}</p>
          </span>
        </div>
      `

      product.innerHTML += newProductHTML;
      })
    }
  });
}