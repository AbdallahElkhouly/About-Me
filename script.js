const track = document.getElementById('track');
const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.dot')];

function goTo(i){
  i = Math.max(0, Math.min(slides.length - 1, i));
  track.scrollTo({ left: i * window.innerWidth, behavior: 'smooth' });
}
function current(){ return Math.round(track.scrollLeft / window.innerWidth); }

document.querySelectorAll('[data-next]').forEach(b => b.addEventListener('click', () => goTo(current()+1)));
document.querySelectorAll('[data-prev]').forEach(b => b.addEventListener('click', () => goTo(current()-1)));
document.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => goTo(+b.dataset.go)));

track.addEventListener('scroll', () => {
  const i = current();
  dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
}, { passive: true });

window.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') goTo(current()+1);
  if (e.key === 'ArrowLeft')  goTo(current()-1);
});

window.addEventListener('resize', () => goTo(current()));
