/* Random 8-char code + disable submit for now (per W4D1) */
function randomCodes(){
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let acc = '';
  for(let i=0;i<8;i++){
    const ch = chars.charAt(Math.floor(Math.random()*chars.length));
    acc += ch;
  }
  return acc;
}

function disableSubmit(){
  const btn = document.querySelector('#contact input[type="submit"]');
  if(btn){ btn.disabled = true; }
}

/* On load: show code + disable button */
document.addEventListener('DOMContentLoaded', () => {
  const spot = document.getElementById('code_display');
  if(spot){ spot.textContent = randomCodes(); }
  disableSubmit();
});
