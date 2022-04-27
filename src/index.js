import "../style.scss";
import createTopBar from "./pages/helpers/top-bar";
const restaurant = "Laksa house";

const body = document.querySelector("body");
body.appendChild(createTopBar());
const landingPage = () => {
  body.appendChild(createImage());
  const firstContainer = document.createElement("div");
  firstContainer.setAttribute("id", "first-container");
  firstContainer.appendChild(createSegments("about"));
  firstContainer.appendChild(restHours());
  body.appendChild(firstContainer);
  body.appendChild(createlaksaBackground());
  
  
  

  
};

const createImage = () => {
  const img = document.createElement("img");
  img.src =
    "https://wallpapercrafter.com/th800/227986-chefs-in-a-steamy-kitchen-preparing-foodrestaurant.jpg";
  return img;
};

const createlaksaBackground = () => {
    const img = document.createElement("div");
    img.setAttribute("id", "laksa-bg");
     
    const blurDiv = document.createElement("div");
    blurDiv.setAttribute("id", "blur");

    const section = document.createElement("section");
    const header = document.createElement("h1");
    const button = document.createElement("button");

    header.textContent = "Hungry?";
    button.textContent = "Book a table";

    section.appendChild(header);
    section.appendChild(button);

    blurDiv.appendChild(section);
    const ballDiv = document.createElement("div");
    


    img.appendChild(blurDiv)


    
    return img;
}


const createSegments = (sectionName) => {
  const container = document.createElement("section");
  container.setAttribute("id", sectionName + "-container");

  const header = document.createElement("h2");
  header.innerHTML = "About us";
  header.setAttribute("class", sectionName + "-header");

  const para = document.createElement("p");
  para.innerHTML = `Since 2001, ${restaurant} has been proudly serving its world famous signature Laksa. With over 50 locations in South East Asia, 
  ${restaurant} is eager to share it's authentic flavors with the rest of the world`;
  para.setAttribute("class", sectionName + "-para");

  container.appendChild(header);
  container.appendChild(para);
  return container;
};

const restHours = () => {
  let days = [];
  const container = document.createElement("div");
  container.setAttribute("id", "hours");

  const header = document.createElement("h2");
  header.textContent = "Hours: ";

  const list = document.createElement("div");
  for (let i = 0; i < 7; i++) {
    days.push(document.createElement("p"));
  }
  for (let i = 0; i < days.length; i++) {
    switch (i) {
      case 0:
        days[i].textContent = "Monday: 6:00pm-11:00pm";
        break;
      case 1:
        days[i].textContent = "Tuesday: 6:00pm-11:00pm";
        break;
      case 2:
        days[i].textContent = "Wednesday: 6:00pm-11:00pm";
        break;
      case 3:
        days[i].textContent = "Thursday: 6:00pm-11:00pm";
        break;
      case 4:
        days[i].textContent = "Friday: 6:00pm-11:00pm";
        break;
      case 5:
        days[i].textContent = "Saturday: 6:00pm-10:00pm";
        break;
      case 6:
        days[i].textContent = "Closed";
        break;
    }
  }

  for (let i = 0; i < 7; i++) {
    list.appendChild(days[i]);
  }

  container.appendChild(header);
  container.appendChild(list);
  return container;
};







const ballAnimation = () => {
    const container = document.createElement("div");
    container.setAttribute("class", "animation-wrapper")
    for (let i = 0; i < 8; i++){
        const circle = document.createElement('div');
        circle.setAttribute("class", "circle");
        container.appendChild(circle);
    }
    return container;
}


landingPage();
