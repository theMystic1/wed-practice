'use strict';

const nav = document.querySelector('.top-nav');
const h1 = document.querySelector('h1');
const hero = document.querySelector('.below-nav');
const sections = document.querySelectorAll('.section');
const overlay = document.querySelector('.overlay');
const midSection = document.querySelector('.middle-section');
const menuBtn = document.querySelector('.menu-icon');

//////////////////////
const navHeight = nav.getBoundingClientRect().height;
const callBack = function (entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) nav.classList.add('nav--sticky');
    else nav.classList.remove('nav--sticky');
  });
};

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(callBack, options);

observer.observe(hero);

const sectionOption = {
  root: null,
  threshold: 0.2,
  //  rootMargin:
};

const sectioncallBack = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('hide-section');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(
  sectioncallBack,
  sectionOption
);
sections.forEach(section => {
  section.classList.add('hide-section');
  sectionObserver.observe(section);
});

menuBtn.addEventListener('click', function () {
  overlay.classList.remove('hidden');
  midSection.classList.remove('middle--sect');
  midSection.classList.add('nav-open');
});

overlay.addEventListener('click', function () {
  overlay.classList.add('hidden');
  midSection.classList.add('middle--sect');
  midSection.classList.remove('nav-open');
});
/* 



*/
