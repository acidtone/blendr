// TODO: this code is almost screaming to be thrown into a component (or two).
// Set page vars
const root = document.documentElement;
const body = document.querySelector('body');
const modes = document.querySelector('#mode-list');
const aside = document.querySelector('aside');

// Set HSLA input elements
const hue = document.querySelector('#hue');
const sat = document.querySelector('#sat');
const lum = document.querySelector('#lum');
const alpha = document.querySelector('#alpha');

// Set HSLA output elements
const hueOut = document.querySelector('output[for=hue]');
const satOut = document.querySelector('output[for=sat]');
const lumOut = document.querySelector('output[for=lum]');
const alphaOut = document.querySelector('output[for=alpha]');

// Bind CSS variables to form inputs
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
  // Enter single blend mode by clicking on a card

  // Set current blend-mode and background colour on body element. This allows the user to preview a large image.
  body.style.setProperty('--blend-mode', getComputedStyle(event.target).backgroundBlendMode);
  body.style.setProperty('background-color', 'var(--color)');
 
  // Disappear the blend mode preview
  modes.style.setProperty('visibility','hidden');
  modes.style.setProperty('opacity',0);
 
  // Fade the HSLA sliders, but keep them operable
  aside.style.setProperty('opacity',.2);
  body.style.setProperty('transition','none');

  /* Needed to handle event bubbling so we can use the sliders when in single blend mode... mode */
  event.stopPropagation();
})

aside.addEventListener('click', function(event){
  // See note on event bubbling above
  event.stopPropagation();
})

// User clicked on preview image --> go back to mode list
body.addEventListener('click', function(event){
  body.style.setProperty('background-color', 'transparent');
  modes.style.setProperty('visibility','visible');
  modes.style.setProperty('opacity',1);
  aside.style.setProperty('opacity',1);
})