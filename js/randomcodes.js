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

/* Week 4 Day 2 – Code verification to enable submit */

/* ========== Variables (grouped) ========== */
let code = "";          // will hold the generated 8-char code
let str  = "";          // character set
let getCode;            // (kept for parity with slides)
let btnvalue = true;    // current disabled/enabled state (true = disabled)

/* ========== Generate an 8-char code and show it ========== */
function generateCode(){
  str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let out = "";
  for(let i=0; i<8; i++){
    out += str.charAt(Math.floor(Math.random() * str.length));
  }
  code = out;
  const spot = document.getElementById("code_display");
  if(spot){ spot.textContent = code; }
  return code;
}

/* ========== Enable/disable the submit button dynamically ========== */
function disableButton(isDisabled){
  btnvalue = isDisabled;
  const btn = document.querySelector('#contact input[type="submit"]');
  if(!btn) return;

  btn.disabled = isDisabled;

  // Visuals per homework: gray/disabled vs active appearance
  if(isDisabled){
    btn.style.background = "none";
    btn.style.color = "#666";
    btn.style.border = "1px solid #ccc";
    btn.style.cursor = "not-allowed";
  }else{
    btn.style.background = "";   // back to your CSS styling
    btn.style.color = "";
    btn.style.border = "";
    btn.style.cursor = "pointer";
  }
}

/* ========== Evaluate input on every keystroke ========== */
function evaluateCode(){
  const input   = document.getElementById("code_input");
  const display = document.getElementById("code_display");
  if(!input || !display) return;

  const entered   = (input.value || "").trim();
  const generated = (code || display.textContent || "").trim();

  // Match length & exact content
  if(entered.length === generated.length && entered === generated){
    disableButton(false);   // enable
  }else{
    disableButton(true);    // keep disabled
  }
}

/* ========== On page load: make code + disable button + listen to input ========== */
window.addEventListener("load", () => {
  generateCode();
  disableButton(true);               // start disabled
  const input = document.getElementById("code_input");
  if(input){ input.addEventListener("input", evaluateCode); }
});
