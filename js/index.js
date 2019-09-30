const siteContent = {
  "nav": {
    "navItem1": "Services",
    "navItem2": "Product",
    "navItem3": "Vision",
    "navItem4": "Features",
    "navItem5": "About",
    "navItem6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "mainContent": {
    "featuresH4":"Features",
    "featuresContent": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "aboutH4":"About",
    "aboutContent": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "servicesH4":"Services",
    "servicesContent": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "productH4":"Product",
    "productContent": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "visionH4":"Vision",
    "visionContent": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contactH4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Ignacio

// CTA

let ctaH1 = document.querySelector(".cta .cta-text h1");
ctaH1.textContent = siteContent.cta.h1;

let ctaBtn = document.querySelector(".cta .cta-text button");
ctaBtn.textContent = siteContent.cta.button;

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';


// Main Content

let mainH4 = document.querySelectorAll('.text-content h4');
for (let i = 0; i < mainH4.length; i++) {
  mainH4[0].textContent = siteContent.mainContent.featuresH4;
  mainH4[1].textContent = siteContent.mainContent.aboutH4;
  mainH4[2].textContent = siteContent.mainContent.servicesH4;
  mainH4[3].textContent = siteContent.mainContent.productH4;
  mainH4[4].textContent = siteContent.mainContent.visionH4;
}

let mainText = document.querySelectorAll('.text-content p');
for (let i = 0; i < mainText.length; i++) {
mainText[0].textContent = siteContent.mainContent.featuresContent;
mainText[1].textContent = siteContent.mainContent.aboutContent;
mainText[2].textContent = siteContent.mainContent.servicesContent;
mainText[3].textContent = siteContent.mainContent.productContent;
mainText[4].textContent = siteContent.mainContent.visionContent;
}

let middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';


// Contact

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact.contactH4;

let contactText = document.querySelectorAll('.contact p');
for (let i = 0; i < contactText.length; i++) {
  contactText[0].textContent = siteContent.contact.address;
  contactText[1].textContent = siteContent.contact.phone;
  contactText[2].textContent = siteContent.contact.email;
}

// Navbar

let navLinks= document.querySelectorAll('nav a');
console.log(navLinks);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[0].textContent = siteContent.nav.navItem1;
  navLinks[1].textContent = siteContent.nav.navItem2;
  navLinks[2].textContent = siteContent.nav.navItem3;
  navLinks[3].textContent = siteContent.nav.navItem4;
  navLinks[4].textContent = siteContent.nav.navItem5;
  navLinks[5].textContent = siteContent.nav.navItem6;
  navLinks[i].style.color = 'green';
    };


// Prepend
let home = document.createElement("a");

home.textContent ="Home";
home.style.color ="blue";

let parentElement = document.querySelector('nav');

parentElement.prepend(home)

// AppendChild
let login = document.createElement("a");

login.textContent ="Login";
login.style.color ="red";

parentElement.appendChild(login);


// Footer
let footer = document.querySelector('footer p');
footer.textContent = 'Copyright Great Idea! 2018';




// not working

// let linksArray = Object.values(siteContent.nav) 
//   console.log(linksArray);


// let nav= document.querySelector('nav');
// let navLinks= nav.querySelectorAll('a');

// navLinks.forEach( link => {
//   for (let i = 0; i < navLinks.length; i++){
//     link.textContent = linksArray[i];
//   };
  
// })



