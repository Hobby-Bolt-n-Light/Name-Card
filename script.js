function noscroll(e){
   e.preventDefault();
}
 
document.addEventListener('touchmove', noscroll, {passive: false});
document.addEventListener('wheel', noscroll, {passive: false});
