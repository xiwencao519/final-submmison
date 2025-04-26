// 控制文字、图片滚动出现
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// 导航栏scroll spy效果
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const sectionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
  sectionObserver.observe(section);
});

const navbar = document.getElementById('navbar');

const colorObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navbar.className = ''; // 先清空之前的class
      navbar.classList.add(entry.target.dataset.nav); // 添加新的class
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('section').forEach(section => {
  colorObserver.observe(section);
});