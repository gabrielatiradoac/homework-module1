/* Partners list renderer (used on all pages) */
const partnerLogos = [
  { file:'partner-bustour.png',      alt:'Bus Tours' },
  { file:'partner-cabinrental.png',  alt:'Cabin Rental' },
  { file:'partner-campingadv.png',   alt:'Camping Adventures' },
  { file:'partner-collegetours.png', alt:'College Tours' },
  { file:'partner-rentalbike.png',   alt:'Rental Bike' },
  { file:'partner-tourgroup.png',    alt:'Tour Group' }
];

(function(){
  const ul = document.getElementById('partners');
  if(!ul) return;
  ul.innerHTML = partnerLogos.map(p =>
    `<li><img src="partners/${p.file}" alt="${p.alt}" loading="lazy"></li>`
  ).join('');
})();
