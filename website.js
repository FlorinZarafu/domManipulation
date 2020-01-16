// ############################################################## variables for font and colors
// text hover color
const textWhite = "#f0f0f0";
const lightGray = "#dddddd";
const backgroundDarkBlue = "#364f6b";
const backgroundLightRGBA = "rgba(252,81,133,0.2)";
const backgroundStrongPurpleRGBA = "rgba(252,81,133,0.6)";
const backgroundStrongRGBA = "rgba(54,79,107,0.6)";
const colorPurple = "#fc5185";
const colorDarkBlue = "#364f6b";
const colorLightBlue = "#071e3d";
const colorStrongPurple = "#9e579d";
const textPurple = "#fc5185";
const fontXSmall = "14";
const fontSmall = "16";
const fontMedium = "20";
const fontLarge = "24";
const fontXLarge = "30";
//############################################################### function for creating div, id and class
function creatDiv(id, clsName, containerClassName) {
  let div = document.createElement("div");
  div.classList.add(containerClassName, clsName);
  div.id = id;
  document.body.appendChild(div);
}
//############################################################### function for creating child div {
function childDiv(parentClass, childClass) {
  let div = document.createElement("div");
  div.className = childClass;
  parentClass.appendChild(div);
}
// ############################################################### function for creating font-awesome-icon
function icon(clsName, iconClassOne, iconClassTwo) {
  let i = document.createElement("i");
  i.classList.add(iconClassOne, iconClassTwo);
  clsName.appendChild(i);
}
//################################################################ function for creating span element
function spanEl(clsName, spanContent) {
  let span = document.createElement("span");
  let spanCont = document.createTextNode(spanContent);
  span.appendChild(spanCont);
  clsName.appendChild(span);
}
//############################################################### calling function for creating the page divs
creatDiv("header", "container-fluid", "header");
creatDiv("about", "container", "about");
creatDiv("services", "container", "services");
creatDiv("work", "container", "work");
creatDiv("footer", "container", "footer");
//################################################################ selecting all the classes
let container = document.querySelectorAll(".container");
let containerFluid = document.querySelectorAll(".container-fluid");
let header = document.querySelector(".header");
let about = document.querySelector(".about");
let services = document.querySelector(".services");
let work = document.querySelector(".work");
let footer = document.querySelector(".footer");
//################################################################## function for creating the title
function title(clsName, titleClass, title) {
  let h1 = document.createElement("h1");
  h1.className = titleClass;
  let titleText = document.createTextNode(title);
  h1.appendChild(titleText);
  clsName.appendChild(h1);
}
//##################################################################### function for creating the sub-title
function subTitle(clsName, subTitleClass, subTitle) {
  let h2 = document.createElement("h2");
  h2.className = subTitleClass;
  let subTitleText = document.createTextNode(subTitle);
  h2.appendChild(subTitleText);
  clsName.appendChild(h2);
}
//######################################################################### function for creating paragraphs
function paragraph(clsName, paraClass, paragraph) {
  let p = document.createElement("p");
  p.className = paraClass;
  let paragraphText = document.createTextNode(paragraph);
  p.appendChild(paragraphText);
  clsName.appendChild(p);
}
//############################################################################ function for creating links
function link(linkContent, linkAttribute, clsName) {
  let a = document.createElement("a");
  a.className = "link";
  a.href = linkAttribute;
  let linkText = document.createTextNode(linkContent);
  a.appendChild(linkText);
  a.style.textDecoration = "none";
  clsName.appendChild(a);
}
//############################################################################## function for creating images
function img(clsName, imgSrc, imgName) {
  let img = document.createElement("img");
  img.clsName = "image";
  img.setAttribute("src", imgSrc);
  img.setAttribute("alt", imgName);
  clsName.appendChild(img);
  img.style.width = "100%";
}
//#################################################################################### function for creating buttons
function button(clsName, buttonClass, buttonName, buttonLink) {
  let a = document.createElement("a");
  a.className = buttonClass;
  a.setAttribute("href", buttonLink);
  let buttonText = document.createTextNode(buttonName);
  a.appendChild(buttonText);
  clsName.appendChild(a);
}
//########################################################################################################################### start header
// ################################################################### navbar
// ################################################################### creating nav container and navigation class
let navigation = document.createElement("nav");
navigation.className = "navigation";
header.appendChild(navigation);
let nav = document.querySelector(".navigation");
//#################################################################### calling the title function for creating logo
title(navigation, "title", "Your ");
let titleSpan = document.querySelector(".navigation .title");
//#################################################################### calling the span inside the logo function
spanEl(titleSpan, "Logo");
let spanText = document.querySelector(".navigation .title span");
//#################################################################### calling function for creating ul list container
function list(clsName, listClass) {
  let ul = document.createElement("ul");
  ul.className = listClass;
  clsName.appendChild(ul);
}
list(navigation, "nav-list");
let navList = document.querySelector(".nav-list");
//#################################################################### calling function creating list items
function li(listClass, listLink) {
  let li = document.createElement("li");
  li.className = listLink;
  li.style.listStyle = "none";
  listClass.appendChild(li);
}
//#################################################################### creating the list items for nav
li(navList, "list-item");
li(navList, "list-item");
li(navList, "list-item");
li(navList, "list-item");
li(navList, "list-item");
//################################################################### getting html class reference for list item
const listItem = document.querySelectorAll(".list-item");
// ################################################################## inserting links in list items
link("Home", "#header", listItem[0]);
link("About", "#about", listItem[1]);
link("Services", "#services", listItem[2]);
link("Our Work", "#work", listItem[3]);
link("Contact", "#footer", listItem[4]);
//#################################################################### start header background
childDiv(header, "overlay");
const overlay = document.querySelector(".header .overlay");
childDiv(overlay, "hero-content");
const heroContent = document.querySelector(".hero-content");
title(heroContent, "hero-lg-text", "JavaScript DOM");
subTitle(
  heroContent,
  "hero-sm-text",
  "Website created using only DOM manipulation"
);
button(heroContent, "hero-btn", "Read More", "#about");
const heroLgText = document.querySelector(".overlay .hero-lg-text");
const heroSmText = document.querySelector(".overlay .hero-sm-text");
const heroBtn = document.querySelector(".overlay .hero-btn");
// ################################################################################################################### end header
// ################################################################################################################### start about section
title(about, "about-lg-text", "About Us");
childDiv(about, "border");
subTitle(
  about,
  "about-sm-text",
  "Find all the information you need to know about us"
);
paragraph(
  about,
  "about-text-content",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
);
paragraph(
  about,
  "about-text-content",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
);
paragraph(
  about,
  "about-text-content",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
);
paragraph(about, "about-btn", "Read More");
paragraph(about, "about-btn", "Read Less");
const aboutLgText = about.firstChild;
const aboutSmText = about.firstChild.nextSibling.nextSibling;
const aboutBorder = about.firstChild.nextSibling;
const aboutTextContent1 = about.firstChild.nextSibling.nextSibling.nextSibling;
const aboutTextContent2 =
  about.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;
const aboutTextContent3 =
  about.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
const aboutBtn =
  about.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    .nextSibling;
const aboutBtnLess =
  about.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    .nextSibling.nextSibling;
// ######################################################################################################################### end about section
// ##################################################################################################################### start service section
childDiv(services, "services-title");
const servicesTitleContent = document.querySelector(".services-title");
title(servicesTitleContent, "services-lg-text", "Our Services");
childDiv(servicesTitleContent, "services-border");
subTitle(
  servicesTitleContent,
  "services-sm-text",
  "Take a look at what we can do for you"
);
childDiv(services, "service-type");
const serviceType = document.querySelector(".service-type");
childDiv(serviceType, "service-card");
childDiv(serviceType, "service-card");
childDiv(serviceType, "service-card");
childDiv(serviceType, "service-card");
const serviceCard = document.querySelectorAll(".service-type .service-card");
const servicesTitle = document.querySelector(".services-lg-text");
const servicesBorder = document.querySelector(".services-border");
const servicesSubTitle = document.querySelector(".services-sm-text");
for (let i = 0; i < serviceCard.length; i++) {
  serviceCard[i] = childDiv(serviceCard[i], "service-top");
  serviceCard[i] = childDiv(serviceCard[i], "service-bottom");
}
const serviceTop = document.querySelectorAll(".service-top");
const serviceBottom = document.querySelectorAll(".service-bottom");
serviceTop[0] = subTitle(
  serviceTop[0],
  "service-type-title",
  "web development"
);
serviceBottom[0] = icon(serviceBottom[0], "fas", "fa-code");
serviceTop[1] = icon(serviceTop[1], "fas", "fa-palette");
serviceBottom[1] = subTitle(
  serviceBottom[1],
  "service-type-title",
  "web design"
);
serviceTop[2] = subTitle(serviceTop[2], "service-type-title", "SEO");
serviceBottom[2] = icon(serviceBottom[2], "fas", "fa-chart-line");
serviceTop[3] = subTitle(serviceBottom[3], "service-type-title", "Marketing");
serviceBottom[3] = icon(serviceTop[3], "fas", "fa-bullhorn");
const serviceTypeTitle = document.querySelectorAll(".service-type-title");
const serviceTypeIcon = document.querySelectorAll(".service-bottom i");
// ##################################################################################################################### end service section
// ##################################################################################################################### start work section
childDiv(work, "work-title");
const workTitleContent = document.querySelector(".work-title");
title(workTitleContent, "work-lg-text", "Our Services");
childDiv(workTitleContent, "work-border");
subTitle(
  workTitleContent,
  "work-sm-text",
  "Take a look at what we can do for you"
);
childDiv(work, "work-type");
const workType = document.querySelector(".work-type");
workType.style.textAlign = "center";
childDiv(workType, "work-type-categories");
childDiv(workType, "work-type-categories");
childDiv(workType, "work-type-categories");
const workTypeCategories = document.querySelectorAll(".work-type-categories");
for (let i = 0; i < workTypeCategories.length; i++) {
  workTypeCategories[i] = childDiv(workTypeCategories[i], "work-type-title");
  workTypeCategories[i] = childDiv(workTypeCategories[i], "work-type-content");
}
const workCategoryOneTitle = workTypeCategories[0].firstChild;
const workCategoryTwoTitle = workTypeCategories[1].firstChild;
const workCategoryThreeTitle = workTypeCategories[2].firstChild;
const workCategoryOneContent = workTypeCategories[0].lastChild;
const workCategoryTwoContent = workTypeCategories[1].lastChild;
const workCategoryThreeContent = workTypeCategories[2].lastChild;
subTitle(workCategoryOneTitle, "work-cat-title", "JavaScript");
subTitle(workCategoryTwoTitle, "work-cat-title", "React");
subTitle(workCategoryThreeTitle, "work-cat-title", "PHP");
const workTypeContentItem = document.querySelectorAll(".work-type-content");
for (let i = 0; i < workTypeContentItem.length; i++) {
  workTypeContentItem[i] = childDiv(
    workTypeContentItem[i],
    "work-type-content-item"
  );
  childDiv(workTypeContentItem[i], "work-type-content-item");
  childDiv(workTypeContentItem[i], "work-type-content-item");
  childDiv(workTypeContentItem[i], "work-type-content-item");
  workTypeContentItem[i].style.position = "absolute";
  workTypeContentItem[i].style.width = "100%";
  workTypeContentItem[i].style.background = "red";
  workTypeContentItem[i].style.display = "grid";
  workTypeContentItem[i].style.gridTemplateColumns = "25% 25% 25% 25%";
}
const workTypeContentItemInner = document.querySelectorAll(
  ".work-type-content-item"
);
for (let i = 0; i < workTypeContentItemInner.length; i++) {
  workTypeContentItemInner[i] = childDiv(
    workTypeContentItemInner[i],
    "work-type-content-item-inner"
  );
}

img(workTypeContentItem[0].firstChild, "./img/hero-bg.jpg", "ss");
img(workTypeContentItem[0].firstChild.nextSibling, "./img/hero-bg.jpg", "ss");
img(
  workTypeContentItem[0].firstChild.nextSibling.nextSibling,
  "./img/hero-bg.jpg",
  "ss"
);
img(
  workTypeContentItem[0].firstChild.nextSibling.nextSibling.nextSibling,
  "./img/hero-bg.jpg",
  "ss"
);
// img(workTypeContentItem[1].firstChild.firstChild, "./img/hero-bg.jpg", "ss");
// img(workTypeContentItem[2].firstChild.firstChild, "./img/hero-bg.jpg", "ss");
// img(workTypeContentItem[3].firstChild.firstChild, "./img/hero-bg.jpg", "ss");
// img(workTypeContentItem[1].firstChild, "./img/hero-bg.jpg", "ss");
// img(workTypeContentItem[1].firstChild, "./img/hero-bg.jpg", "ss");
// img(workTypeContentItem[0].firstChild, "./img/hero-bg.jpg", "ss");

//############################################################################################### creating the styles
//###############################################################  style for container
container.forEach(containerElement => {
  containerElement.style.position = "relative";
  containerElement.style.width = "80%";
  containerElement.style.margin = "auto";
  containerElement.style.padding = "0 20px";
});
//###############################################################  style for container fluid
containerFluid.forEach(containerFluidElement => {
  containerFluidElement.style.position = "relative";
  containerFluidElement.style.width = "100%";
});
// ############################################################################################################# style for navigation
// ############################################################## header style
header.style.position = "relative";
header.style.height = "100vh";
header.style.background = "url(./img/hero-bg.jpg)";
header.style.backgroundRepeat = "no-repeat";
header.style.backgroundSize = "cover";
header.style.backgroundPosition = "center";
header.style.backgroundAttachement = "fixed";
// ############################################################## header overlay style
overlay.style.position = "absolute";
overlay.style.content = "";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = `linear-gradient(to bottom, ${backgroundStrongRGBA}, ${backgroundLightRGBA})`;
overlay.style.zIndex = "2";
// ############################################################### header overlay hero content style
heroContent.style.position = "absolute";
heroContent.style.top = "50%";
heroContent.style.right = "0";
heroContent.style.transform = "translateY(-50%)";
heroContent.style.padding = "50px";
heroContent.style.background = backgroundStrongRGBA;
heroLgText.style.color = textWhite;
heroLgText.style.letterSpacing = "1px";
heroLgText.style.fontWeight = "600";
heroLgText.style.fontSize = `${fontXLarge}px`;
heroSmText.style.color = textWhite;
heroSmText.style.letterSpacing = "1px";
heroSmText.style.fontWeight = "100";
heroSmText.style.paddingTop = "5px";
heroSmText.style.paddingBottom = "20px";
heroSmText.style.fontSize = `${fontMedium}px`;
heroBtn.style.textDecoration = "none";
heroBtn.style.color = textWhite;
heroBtn.style.fontSize = `${fontSmall}px`;
heroBtn.style.padding = "8px 16px";
heroBtn.style.border = "0.5px solid #ffffff";
heroBtn.style.borderRadius = "10px";
heroBtn.style.textTransform = "capitalize";
heroBtn.style.letterSpacing = "1px";
heroBtn.addEventListener("mouseover", () => {
  heroBtn.style.background = textPurple;
  heroBtn.style.transition = "0.4s";
});
heroBtn.addEventListener("mouseleave", () => {
  heroBtn.style.background = "none";
  heroBtn.style.transition = "0.4s";
});
// ############################################################## navigation style
nav.style.position = "relative";
nav.style.width = "100%";
nav.style.display = "flex";
nav.style.alignItems = "center";
nav.style.justifyContent = "space-between";
nav.style.padding = "30px 100px";
nav.style.zIndex = "999";
// ############################################################ navigation list style
navList.style.width = "50%";
navList.style.display = "flex";
navList.style.justifyContent = "space-between";
header.firstChild.firstChild.style.color = textWhite;
spanText.style.color = textPurple;
header.firstChild.firstChild.style.fontSize = `${fontXLarge}px`;
// ####################################################################### navigation link style
let navLink = document.querySelectorAll(
  ".navigation .nav-list .list-item .link"
);
navLink.forEach(navigationLink => {
  navigationLink.style.fontSize = `${fontMedium}px`;
  navigationLink.style.color = textWhite;
  navigationLink.addEventListener("mouseover", () => {
    navigationLink.style.color = textPurple;
    navigationLink.style.transition = "0.4s";
  });
  navigationLink.addEventListener("mouseleave", () => {
    navigationLink.style.color = textWhite;
    navigationLink.style.transition = "0.4s";
  });
});
// ################################################################################################### start about section style
about.style.marginTop = "100px";
about.style.padding = "50px 0";
aboutLgText.style.textAlign = "center";
aboutLgText.style.fontWeight = "600";
aboutLgText.style.fontSize = `${fontLarge}px`;
aboutLgText.style.letterSpacing = "1px";
aboutLgText.style.color = textPurple;
aboutSmText.style.textAlign = "center";
aboutSmText.style.fontSize = `${fontSmall}px`;
aboutSmText.style.color = lightGray;
aboutSmText.style.fontWeight = "100";
aboutSmText.style.textTransform = "capitalize";
aboutSmText.style.padding = "2px 0";
aboutBorder.style.height = "2px";
aboutBorder.style.width = "10%";
aboutBorder.style.margin = "2px auto";
aboutBorder.style.background = colorPurple;
aboutTextContent1.style.padding = "30px 0 20px";
aboutTextContent1.style.color = colorDarkBlue;
aboutTextContent1.style.fontSize = `${fontSmall}px`;
aboutTextContent1.style.letterSpacing = "0.5px";
aboutTextContent2.style.padding = "0 0 20px";
aboutTextContent2.style.color = colorDarkBlue;
aboutTextContent2.style.fontSize = `${fontSmall}px`;
aboutTextContent2.style.letterSpacing = "0.5px";
aboutTextContent2.style.transition = "0.5s";
aboutTextContent2.style.display = "none";
aboutTextContent3.style.padding = "0 0 20px";
aboutTextContent3.style.color = colorDarkBlue;
aboutTextContent3.style.fontSize = `${fontSmall}px`;
aboutTextContent3.style.letterSpacing = "0.5px";
aboutTextContent3.style.display = "none";
aboutBtn.style.textDecoration = "none";
aboutBtn.style.display = "inline-block";
aboutBtn.style.color = textWhite;
aboutBtn.style.textTransform = "capitalize";
aboutBtn.style.padding = "7px 14px";
aboutBtn.style.background = colorDarkBlue;
aboutBtn.style.borderRadius = "10px";
aboutBtn.addEventListener("mouseover", () => {
  aboutBtn.style.background = colorPurple;
  aboutBtn.style.transition = "0.4s";
});
aboutBtn.addEventListener("mouseleave", () => {
  aboutBtn.style.background = colorDarkBlue;
  aboutBtn.style.transition = "0.4s";
});
aboutBtn.addEventListener("click", () => {
  aboutTextContent2.style.display = "block";
  aboutTextContent3.style.display = "block";
  aboutBtn.style.display = "none";
  aboutBtnLess.style.display = "inline-block";
});
aboutBtnLess.style.textDecoration = "none";
aboutBtnLess.style.display = "inline-block";
aboutBtnLess.style.color = textWhite;
aboutBtnLess.style.textTransform = "capitalize";
aboutBtnLess.style.padding = "7px 14px";
aboutBtnLess.style.background = colorDarkBlue;
aboutBtnLess.style.borderRadius = "10px";
aboutBtnLess.style.display = "none";
aboutBtnLess.addEventListener("mouseover", () => {
  aboutBtnLess.style.background = colorPurple;
  aboutBtnLess.style.transition = "0.4s";
});
aboutBtnLess.addEventListener("mouseleave", () => {
  aboutBtnLess.style.background = colorDarkBlue;
  aboutBtnLess.style.transition = "0.4s";
});
aboutBtnLess.addEventListener("click", () => {
  aboutTextContent2.style.display = "none";
  aboutTextContent3.style.display = "none";
  aboutBtnLess.style.display = "none";
  aboutBtn.style.display = "inline-block";
});
// ############################################################################################################## start service style
services.style.marginTop = "50px";
services.style.padding = "50px 0";
servicesTitle.style.textAlign = "center";
servicesTitle.style.fontWeight = "600";
servicesTitle.style.fontSize = `${fontLarge}px`;
servicesTitle.style.letterSpacing = "1px";
servicesTitle.style.color = textPurple;
servicesBorder.style.height = "2px";
servicesBorder.style.width = "10%";
servicesBorder.style.margin = "2px auto";
servicesBorder.style.background = colorPurple;
servicesSubTitle.style.textAlign = "center";
servicesSubTitle.style.fontSize = `${fontSmall}px`;
servicesSubTitle.style.color = lightGray;
servicesSubTitle.style.fontWeight = "100";
servicesSubTitle.style.textTransform = "capitalize";
servicesSubTitle.style.padding = "2px 0";
serviceType.style.width = "100%";
serviceType.style.margin = "50px 0 0";
serviceType.style.display = "grid";
serviceType.style.gridTemplateColumns = "25% 25% 25% 25%";
// style for service top
serviceTop.forEach(top => {
  top.style.width = "100%";
  top.style.textAlign = "center";
  top.firstChild.style.color = textWhite;
  top.firstChild.style.lineHeight = "250px";
  top.firstChild.style.textTransform = "uppercase";
  top.firstChild.style.textAlign = "center";
  top.firstChild.style.padding = "5px";
});
serviceTop[0].style.background = colorDarkBlue;
serviceTop[0].style.fontSize = `12px`;
serviceTop[1].style.background = colorPurple;
serviceTop[1].style.fontSize = `50px`;
serviceTop[2].style.background = colorLightBlue;
serviceTop[2].style.fontSize = `12px`;
serviceTop[3].style.background = colorStrongPurple;
serviceTop[3].style.fontSize = `50px`;
// service bottom
serviceBottom.forEach(bottom => {
  bottom.style.width = "100%";
  bottom.style.textAlign = "center";
  bottom.firstChild.style.color = textWhite;
  bottom.firstChild.style.lineHeight = "250px";
  bottom.firstChild.style.textTransform = "uppercase";
});
serviceBottom[0].style.background = colorLightBlue;
serviceBottom[0].style.fontSize = `50px`;
serviceBottom[1].style.background = colorStrongPurple;
serviceBottom[1].style.fontSize = `12px`;
serviceBottom[2].style.background = colorDarkBlue;
serviceBottom[2].style.fontSize = `50px`;
serviceBottom[3].style.background = colorPurple;
serviceBottom[3].style.fontSize = `12px`;
// ##################################################################################################### start work style
// ########################################################################## work title style
work.style.marginTop = "50px";
work.style.padding = "50px 0";
workTitleContent.firstChild.style.textAlign = "center";
workTitleContent.firstChild.style.fontWeight = "600";
workTitleContent.firstChild.style.fontSize = `${fontLarge}px`;
workTitleContent.firstChild.style.letterSpacing = "1px";
workTitleContent.firstChild.style.color = colorPurple;
workTitleContent.firstChild.nextSibling.style.height = "2px";
workTitleContent.firstChild.nextSibling.style.width = "10%";
workTitleContent.firstChild.nextSibling.style.margin = "2px auto";
workTitleContent.firstChild.nextSibling.style.background = colorPurple;
workTitleContent.firstChild.nextSibling.nextSibling.style.textAlign = "center";
workTitleContent.firstChild.nextSibling.nextSibling.style.fontSize = `${fontSmall}px`;
workTitleContent.firstChild.nextSibling.nextSibling.style.color = lightGray;
workTitleContent.firstChild.nextSibling.nextSibling.style.fontWeight = "100";
workTitleContent.firstChild.nextSibling.nextSibling.style.textTransform =
  "capitalize";
workTitleContent.firstChild.nextSibling.nextSibling.style.padding = "2px 0";
workType.style.display = "grid";
workType.style.gridTemplateColumns = "33.33% 33.33% 33.33%";
