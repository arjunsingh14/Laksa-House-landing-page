const createTopBar = () => {
  //create the parent container for all elements
  const container = document.createElement("div");
  container.setAttribute("id", "top-container");
  //button container
  const btnCointainer = document.createElement("div");
  btnCointainer.setAttribute("id", "btn-container");
  //logo container
  const logoContainer = document.createElement("div");
  logoContainer.setAttribute("id", "logo-container");
  //about us button
  const aboutUs = document.createElement("button");
  const aboutText = document.createElement("span");
  aboutText.setAttribute("class", "top-button-text");
  aboutText.innerHTML = "ABOUT";
  aboutUs.setAttribute("class", "top-buttons");
  aboutUs.appendChild(aboutText);
  //menu button
  const menu = document.createElement("button");
  const menuText = document.createElement("span");
  menuText.setAttribute("class", "top-button-text");
  menu.setAttribute("class", "top-buttons");
  menuText.innerHTML = "MENU";
  menu.appendChild(menuText);
  //contact button
  const contact = document.createElement("button");
  const contactText = document.createElement("span");
  contactText.setAttribute("class", "top-button-text");
  contact.setAttribute("class", "top-buttons");
  contactText.innerHTML = "CONTACT";
  contact.appendChild(contactText);
  //logo
  const logo = document.createElement("h1");
  logo.innerHTML = "Placeholder";

  //assigning all child elements to their respective parent container
  btnCointainer.appendChild(aboutUs);
  btnCointainer.appendChild(menu);
  btnCointainer.appendChild(contact);
  logoContainer.appendChild(logo);
  container.appendChild(logoContainer);
  container.appendChild(btnCointainer);

  return container;
};

export default createTopBar;
