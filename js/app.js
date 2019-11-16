
// Set page vars
const root = document.documentElement;
const body = document.querySelector('body');
const modes = document.querySelector('#mode-list');
const aside = document.querySelector('aside');

// Set HSLA vars
const hue = document.querySelector('#hue');
const sat = document.querySelector('#sat');
const lum = document.querySelector('#lum');
const alpha = document.querySelector('#alpha');

const hueOut = document.querySelector('output[for=hue]');
const satOut = document.querySelector('output[for=sat]');
const lumOut = document.querySelector('output[for=lum]');
const alphaOut = document.querySelector('output[for=alpha]');

hue.addEventListener('input', function(event) {
  hueOut.value = hue.value + 'deg';
  root.style.setProperty("--hue",hue.value);
})
sat.addEventListener('input', function(event) {
  satOut.value = sat.value + '%';
  root.style.setProperty("--sat",sat.value + '%');
})
lum.addEventListener('input', function(event) {
  lumOut.value = lum.value + '%';
  root.style.setProperty("--lum",lum.value + '%');
})
alpha.addEventListener('input', function(event) {
  alphaOut.value = alpha.value;
  root.style.setProperty("--alpha",alpha.value);
})

modes.addEventListener('click', function(event){
  // Enter single blend mode by clicking on a blend mode
 
  // Set current blend-mode and background colour on body
  body.style.setProperty('--blend-mode', getComputedStyle(event.target).backgroundBlendMode);
  body.style.setProperty('background-color', 'var(--color)');
 
  // Disappear the blend mode preview
  modes.style.setProperty('visibility','hidden');
  modes.style.setProperty('opacity',0);
 
  // Fade the HSLA sliders, but keep them operable
  aside.style.setProperty('opacity',.2);
  body.style.setProperty('transition','none');
  event.stopPropagation();
})

aside.addEventListener('mouseover', function(event){
  aside.style.setProperty('opacity',.5);
})

aside.addEventListener('mouseout', function(event){
  aside.style.setProperty('opacity',.2);
})

aside.addEventListener('click', function(event){
  /* Needed to use the colour sliders when in single blend mode... mode */
  event.stopPropagation();
})

body.addEventListener('click', function(event){
  body.style.setProperty('background-color', 'transparent');
  modes.style.setProperty('visibility','visible');
  modes.style.setProperty('opacity',1);
  aside.style.setProperty('opacity',1);
})