(function(global){

  const Blendr = function () {
    return new Blendr.init();
  }

  const blendModes = [
    // TODO: add descriptions, equations, etc to each blend mode item; move code to a json thing
    {
      name: 'normal',
    },
    {
      name: 'multiply',
    },
    {
      name: 'screen',
    },
    {
      name: 'overlay',
    },
    {
      name: 'darken',
    },
    {
      name: 'lighten',
    },
    {
      name: 'color-dodge',
    },
    {
      name: 'color-burn',
    },
    {
      name: 'hard-light',
    },
    {
      name: 'soft-light',
    },
    {
      name: 'difference',
    },
    {
      name: 'exclusion',
    },
    {
      name: 'hue',
    },
    {
      name: 'saturation',
    },
    {
      name: 'color',
    },
    {
      name: 'luminosity',
    }
  ];

  Blendr.prototype = {
    render: function(containerId, elementType) {

      // loop through modes object and append child elements for each blend mode
      const container = global.document.getElementById(containerId);
      // blendModes cannot be accessed by the global context but prototype.render can access it via enclosure (V8 magic?)
      blendModes.forEach(function(mode){

        /* Create an element for each blend mode and attach it to the container. This code assumes colour, image and blend-mode are set to the element's background */ 
        let newChild = global.document.createElement(elementType);

        // Add a data-attribute for css attr() to hook into
        newChild.setAttribute('data-blend-mode',mode.name);

        // Set background-blend-mode to make the pretty things
        newChild.style.backgroundBlendMode = mode.name;
 
        // Add it as a direct child to the grid/flex container (we're assuming)
        container.appendChild(newChild);
      })
      
    }
  };

  Blendr.init = function(){
    const self = this;

    
  }

  /* cleans up the above code a bit */
  Blendr.init.prototype = Blendr.prototype;

  global.Blendr = global.B$ = Blendr;

}(window));