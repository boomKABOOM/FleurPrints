console.log("_bmkbm init");

const apply = () => {

  //insert images into nav
  let nav_resources_megamenu = document.querySelector(".header-item--split-right ul.site-nav li:first-child .megamenu");
  let nav_item_col1 = nav_resources_megamenu.querySelector(".grid .grid__item:nth-child(1)");
  let nav_item_col2 = nav_resources_megamenu.querySelector(".grid .grid__item:nth-child(2)");
  let nav_item_col3 = nav_resources_megamenu.querySelector(".grid .grid__item:nth-child(3)");
  let nav_item_col4 = nav_resources_megamenu.querySelector(".grid .grid__item:nth-child(4)");

  const col1_img = `<a class="megamenu__colection-image" style="background-image: url(//cdn.shopify.com/s/files/1/0333/1188/3403/collections/0S8B5936_400x.jpg?v=1587555151)"></a>`;

  nav_item_col1.insertAdjacentHTML("afterbegin",col1_img);
  nav_item_col2.insertAdjacentHTML("afterbegin",col1_img);
  nav_item_col3.insertAdjacentHTML("afterbegin",col1_img);
  nav_item_col4.insertAdjacentHTML("afterbegin",col1_img);

};

apply();

//hide + show nav on scroll
let previousPosition = window.pageYOffset || document.documentElement.scrollTop;
let currentPosition;

let scrolling = false;
window.onscroll = function() {
  scrolling = true;
};

setInterval(() => {
	const header = document.querySelector('header');
  if(scrolling) {
    scrolling = false;
		currentPosition = window.pageYOffset || document.documentElement.scrollTop;
		if (previousPosition > currentPosition) {
			//scrolling up
      header.classList.remove("site-header--hide");
      // header.classList.add("site-header--reveal");
		} else {
			//scrolling down
      header.classList.add("site-header--hide");
      // header.classList.remove("site-header--reveal");
		}
		previousPosition = currentPosition;
  }
}, 150 );
