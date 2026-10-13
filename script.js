// MaC Foundation — shared behavior

document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav.links');
  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // scroll reveal
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && items.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('in'));
  }

  // active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
