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
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
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

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';

let middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';


// Main Content H4
let mainH4 = document.querySelectorAll('.top-content .text-content h4');
for (let i = 0; i < mainH4.length; i++) {
  mainH4[0].textContent = siteContent.mainContent.featuresH4;
  mainH4[1].textContent = siteContent.mainContent.aboutH4;
}

// Main Content Content
let text = document.querySelectorAll('.top-content .text-content p');
for (let i = 0; i < text.length; i++) {
text[0].textContent = siteContent.mainContent.featuresContent;
text[1].textContent = siteContent.mainContent.aboutContent;
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
    };




// nav

// let linksArray = Object.values(siteContent.nav) 
//   console.log(linksArray);


// let nav= document.querySelector('nav');
// let navLinks= nav.querySelectorAll('a');

// navLinks.forEach( link => {
//   for (let i = 0; i < navLinks.length; i++){
//     link.textContent = linksArray[i];
//   };
  
// })



