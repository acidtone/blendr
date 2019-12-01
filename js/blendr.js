(function(global){

  const Blendr = function () {
    return new Blendr.init();
  }

  const blendModes = [
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
      const container = document.getElementById(containerId);
      this.blendModes.forEach(function(mode){
        let newChild = document.createElement(elementType);
        newChild.setAttribute('data-blend-mode',mode.name);
        newChild.style.blendMode = mode.name;
        container.appendChild(newChild);
      })
      
    }
  };

  Blendr.init = function(){
    const self = this;
  }

  Blendr.init.prototype = Blendr.prototype;

  global.Blendr = global.B$ = Blendr;

}(window));