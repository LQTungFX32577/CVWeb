'use strict';

const btn = document.querySelector('.moveTop');
const langToggle = document.getElementById('lang-toggle');

function getLang() {
  return localStorage.getItem('cv-lang') || 'vi';
}

function setLang(lang) {
  localStorage.setItem('cv-lang', lang);
  document.documentElement.lang = lang;
  langToggle.textContent = lang === 'vi' ? 'EN' : 'VI';
  applyTranslations(lang);
  renderSkillsMarquee();
}

function applyTranslations(lang) {
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    dict[key] && (el.textContent = dict[key]);
  });
}

function buildSkillClusters(lang) {
  const dict = i18n[lang];
  return skillCategories.map((cat) => {
    const items = skillIcons[cat.id].map((item) =>
      `<div class="skill-item">
        <i class="${item.icon}"></i>
        <span>${item.name}</span>
      </div>`
    ).join('');

    return `<div class="skill-cluster" data-category="${cat.labelKey}">
      <span class="cluster-label">${dict[cat.labelKey]}</span>
      <div class="cluster-icons">${items}</div>
    </div>`;
  }).join('');
}

function renderSkillsMarquee() {
  const track = document.getElementById('skills-marquee-track');
  const clusters = buildSkillClusters(getLang());

  track.innerHTML = `
    <div class="marquee-group">${clusters}</div>
    <div class="marquee-group" aria-hidden="true">${clusters}</div>
  `;
}

function renderTechTags() {
  const map = {
    'tech-panasonic': projectTech.panasonic,
    'tech-gotrack': projectTech.gotrack,
    'tech-xhero': projectTech.xhero
  };

  Object.entries(map).forEach(([id, tags]) => {
    const container = document.getElementById(id);
    container.innerHTML = tags.map((tag) =>
      `<span class="tech-tag">${tag}</span>`
    ).join('');
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      entry.isIntersecting && entry.target.classList.add('revealed');
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function handleMove() {
  btn.style.opacity = window.scrollY > 600 ? '1' : '0';
}

function initScrollTop() {
  window.addEventListener('scroll', handleMove);
  btn.addEventListener('click', () => window.scroll({ top: 0, behavior: 'smooth' }));
}

function initLangToggle() {
  langToggle.addEventListener('click', () => {
    setLang(getLang() === 'vi' ? 'en' : 'vi');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTechTags();
  initScrollReveal();
  initScrollTop();
  initLangToggle();
  setLang(getLang());
});
