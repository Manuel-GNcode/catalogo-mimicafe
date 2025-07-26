import gsap from "gsap";
import { productsDatabase } from "../data/productsDatabase";

export const mainProductsItems = document.getElementById('main_products-items');
const mainProductsName = document.getElementById('main_products-name');

export const renderProducts = (category:number)=>{
  if (mainProductsName) {
    if (category==1) mainProductsName.innerText = 'Tortas';
    else if (category==2) mainProductsName.innerText = 'Malteadas';
    else mainProductsName.innerText = 'Helados';
  }
  if (mainProductsItems) {
    mainProductsItems.innerHTML = ''

    const data = category==1? productsDatabase.tortas : category==2? productsDatabase.malteadas : productsDatabase.helados;
  
    data.forEach(item=>{
      const newItem = `
      <div class="products_item">
      <img src="${item.imgUrl}" alt="${item.name}" class="w-full h-full object-cover object-center rounded-[20px]">

      <span class="absolute left-1/2 -translate-x-1/2 -bottom-12 w-40">
        <h2 class="border-white-gray-little text-[16px]/4 bg-white text-center px-4 py-1.5 w-full rounded-2xl">${item.name}</h2>
        <p class="border-white-gray-little text-[12px] bg-gray rounded-b-xl w-fit px-4 py-1 mx-auto">$ ${item.prize}</p>
      </span>
      </div>
      `

    mainProductsItems.innerHTML += newItem;
    })

    gsap.from('.products_item', {
    opacity: 0,
    x: -100,
    duration: 0.4,
    ease: 'sine.out',
    stagger: {
      each: 0.2,
      from: 'end',
      }
    })
  }
}