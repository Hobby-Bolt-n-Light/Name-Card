function noscroll(e){
   e.preventDefault();
}
 
document.addEventListener('touchmove', noscroll, {passive: false});
document.addEventListener('wheel', noscroll, {passive: false});


let url = new URL(window.location.href);
let params = url.searchParams;
console.log(params.get('id'));

let userName = document.getElementById('friend');
userName.innerHTML = params.get('id'); // innerHTMLでhtmlを追加
