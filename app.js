"use strict";
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "stake",
    category: "diner",
    price: 36.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-items");
const btnContainer = document.querySelector(".section-menu-buttons");

function article(item) {
  return `<article class="menu-item">
  <img src=${item.img} class="photo" alt=${item.title} />
  <div class="item-info">
    <header>
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
    </header>
    <p class="item-text">${item.desc}</p>
  </div>
  </article>`;
}

function buttons(menuCategory) {
  return `<button class="category-btn {
    " type="button" data-id=${menuCategory}>${menuCategory}</button>
    `;
}

const displayMenuItems = function (menuItems, category) {
  let displayMenu = menuItems.map(function (item) {
    if (item.category === category) return article(item);
    else if (category === "all") return article(item);
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};

const displayButtons = function (menu) {
  const categorys = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) values.push(item.category);
      return values;
    },
    ["all"]
  );
  let categoryBtns = categorys.map(function (category) {
    return buttons(category);
  });

  categoryBtns = categoryBtns.join("");
  btnContainer.innerHTML = categoryBtns;
  const btns = document.querySelectorAll(".category-btn");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      displayMenuItems(menu, category);
    });
  });
};

window.addEventListener("DOMContentLoaded", displayMenuItems(menu, "all"));
window.addEventListener("DOMContentLoaded", displayButtons(menu));
