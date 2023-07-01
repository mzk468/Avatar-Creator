const app = new Vue({
  el: '#app',
  data: {
    appName: 'Avatar Creator',

    currentBase: 0,
    baseLayers: [
      './img/base/0.png',
      './img/base/1.png'
    ],

    currentBody: 0,
    bodyLayers: [
      './img/body/0.png',
      './img/body/1.png'
    ],

    currentFace: 0,
    faceLayers: [
      './img/face/0.png',
      './img/face/1.png'
    ],

    currentHair: 0,
    hairLayers: [
      './img/hair/0.png',
      './img/hair/1.png'
    ]
  },
  computed: {},
  methods: {

    // Base methods

    baseRight() {
      if (this.currentBase !== this.baseLayers.length - 1) // i.e. pointer within array bounds
        this.currentBase++;
      else
        this.currentBase = 0; // place on other end
    },

    baseLeft() {
      if (this.currentBase !== 0) // i.e. pointer within array bounds
        this.currentBase--;
      else
        this.currentBase = this.baseLayers.length - 1; // place on other end
    },

    // Body methods

    bodyRight() {
      if (this.currentBody !== this.bodyLayers.length - 1) // i.e. pointer within array bounds
        this.currentBody++;
      else
        this.currentBody = 0; // place on other end
    },

    bodyLeft() {
      if (this.currentBody !== 0) // i.e. pointer within array bounds
        this.currentBody--;
      else
        this.currentBody = this.bodyLayers.length - 1; // place on other end
    },

    // Face methods


    faceRight() {
      if (this.currentFace !== this.faceLayers.length - 1) // i.e. pointer within array bounds
        this.currentFace++;
      else
        this.currentFace = 0; // place on other end
    },

    faceLeft() {
      if (this.currentFace !== 0) // i.e. pointer within array bounds
        this.currentFace--;
      else
        this.currentFace = this.faceLayers.length - 1; // place on other end
    },

    // Hair methods

    hairRight() {
      if (this.currentHair !== this.hairLayers.length - 1) // i.e. pointer within array bounds
        this.currentHair++;
      else
        this.currentHair = 0; // place on other end
    },

    hairLeft() {
      if (this.currentHair !== 0) // i.e. pointer within array bounds
        this.currentHair--;
      else
        this.currentHair = this.hairLayers.length - 1; // place on other end
    }
  }
});