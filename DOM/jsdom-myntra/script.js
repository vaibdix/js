document.addEventListener("DOMContentLoaded", function () {
  // Create the HTML structure using JS DOM
  const body = document.body;

  // Header
  const header = document.createElement("header");
  header.id = "navbar";

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left");

  const logoLink = document.createElement("a");
  logoLink.href = "/index.html";
  const logoImg = document.createElement("img");
  logoImg.src = "assets/logo/main-logo.png";
  logoImg.alt = "Myntra Logo";
  logoLink.appendChild(logoImg);
  leftDiv.appendChild(logoLink);

  const navList = document.createElement("ul");
  navList.classList.add("navv");

  // Create the dropdowns for MEN and WOMEN
  const createDropdown = (text, categories) => {
    const dropdown = document.createElement("li");
    dropdown.classList.add("dropdown");
    const dropdownLink = document.createElement("a");
    dropdownLink.href = "#";
    dropdownLink.textContent = text;
    dropdown.appendChild(dropdownLink);

    const chooseDiv = document.createElement("div");
    chooseDiv.classList.add("choose");

    categories.forEach(category => {
      const categoryBlock = document.createElement("ul");
      categoryBlock.classList.add("navBlock");

      const categoryTitle = document.createElement("li");
      const categoryTitleLink = document.createElement("a");
      categoryTitleLink.href = "#";
      categoryTitleLink.style.color = "#ff3f6c";
      categoryTitleLink.classList.add("categoryName");
      categoryTitleLink.textContent = category.title;
      categoryTitle.appendChild(categoryTitleLink);
      categoryBlock.appendChild(categoryTitle);

      category.items.forEach(item => {
        const itemLi = document.createElement("li");
        const itemLink = document.createElement("a");
        itemLink.href = "#";
        itemLink.textContent = item;
        itemLi.appendChild(itemLink);
        categoryBlock.appendChild(itemLi);
      });

      chooseDiv.appendChild(categoryBlock);
    });

    dropdown.appendChild(chooseDiv);
    return dropdown;
  };

  // MEN Categories
  const menCategories = [
    { title: "Topwear", items: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Sweaters", "Jackets", "Blazers & Coats", "Suits", "Rain Jackets"] },
    { title: "Bottomwear", items: ["Jeans", "Casual Trousers", "Formal Trousers", "Shorts", "Track Pants & Joggers"] },
    { title: "Footwear", items: ["Casual Shoes", "Sports Shoes", "Formal Shoes", "Sneakers"] },
    { title: "Fashion Accessories", items: ["Wallets", "Belts", "Perfumes & Body Mists"] }
  ];

  // WOMEN Categories
  const womenCategories = [
    { title: "Indian & Fusion Wear", items: ["Kurtas & Suits", "Kurtis, Tunics & Tops", "Sarees"] },
    { title: "Western Wear", items: ["Dresses", "Tops", "Tshirts"] },
    { title: "Footwear", items: ["Flats", "Casual Shoes", "Heels"] }
  ];

  navList.appendChild(createDropdown("MEN", menCategories));
  navList.appendChild(createDropdown("WOMEN", womenCategories));

  // Append the nav list to the left div
  leftDiv.appendChild(navList);
  header.appendChild(leftDiv);

  // Search Bar
  const searchDiv = document.createElement("div");
  searchDiv.classList.add("search_bar");
  const searchIcon = document.createElement("span");
  searchIcon.classList.add("material-symbols-outlined", "search-icon");
  searchIcon.textContent = "search";
  const searchInput = document.createElement("input");
  searchInput.classList.add("search_input");
  searchInput.placeholder = "Search for products, brands, and more";
  searchDiv.appendChild(searchIcon);
  searchDiv.appendChild(searchInput);
  header.appendChild(searchDiv);

  // Action Bar
  const actionDiv = document.createElement("div");
  actionDiv.classList.add("action_bar");
  const actions = ["Profile", "Wishlist", "Bag"];

  actions.forEach(action => {
    const actionContainer = document.createElement("div");
    actionContainer.classList.add("action_container");
    const actionIcon = document.createElement("span");
    actionIcon.classList.add("material-symbols-outlined", "action_icon");
    actionIcon.textContent = action === "Profile" ? "person" : action === "Wishlist" ? "favorite" : "shopping_bag";
    const actionName = document.createElement("span");
    actionName.classList.add("action_name");
    actionName.textContent = action;

    actionContainer.appendChild(actionIcon);
    actionContainer.appendChild(actionName);
    actionDiv.appendChild(actionContainer);
  });

  header.appendChild(actionDiv);
  body.appendChild(header);

  // Main Content
  const main = document.createElement("main");
  const welcomeHeader = document.createElement("h1");
  welcomeHeader.textContent = "Welcome to Myntraa!";
  const welcomeParagraph = document.createElement("p");
  welcomeParagraph.textContent = "Explore the latest in fashion, accessories, and more.";
  main.appendChild(welcomeHeader);
  main.appendChild(welcomeParagraph);
  body.appendChild(main);

  // Footer
  const footer = document.createElement("footer");
  const footerContent = document.createElement("div");
  footerContent.classList.add("footer-content");
  const footerText = document.createElement("p");
  footerText.innerHTML = "&copy; 2024 Myntraa. All rights reserved.";

  const footerList = document.createElement("ul");
  const footerLinks = ["Privacy Policy", "Terms of Service", "Contact Us"];
  footerLinks.forEach(link => {
    const listItem = document.createElement("li");
    const linkItem = document.createElement("a");
    linkItem.href = "#";
    linkItem.textContent = link;
    listItem.appendChild(linkItem);
    footerList.appendChild(listItem);
  });

  footerContent.appendChild(footerText);
  footerContent.appendChild(footerList);
  footer.appendChild(footerContent);
  body.appendChild(footer);
});
