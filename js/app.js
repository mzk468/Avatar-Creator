const app = new Vue({
  el: 'app',
  data: {
    appName: 'Avatar Creator',

    avatar: {
      name: '',
      base: 0,
      body: 0,
      face: 0,
      hair: 0
    },

    baseLayers: [
      './img/base/0.png',
      './img/base/1.png'
    ],

    bodyLayers: [
      './img/body/0.png',
      './img/body/1.png'
    ],

    faceLayers: [
      './img/face/0.png',
      './img/face/1.png'
    ],

    hairLayers: [
      './img/hair/0.png',
      './img/hair/1.png'
    ]
  },
  computed: {},
  methods: {

    // Base methods

    baseRight() {
      if (this.avatar.base !== this.baseLayers.length - 1) // i.e. pointer within array bounds
        this.avatar.base++;
      else
        this.avatar.base = 0; // place on other end
    },

    baseLeft() {
      if (this.avatar.base !== 0) // i.e. pointer within array bounds
        this.avatar.base--;
      else
        this.avatar.base = this.baseLayers.length - 1; // place on other end
    },

    // Body methods

    bodyRight() {
      if (this.avatar.body !== this.bodyLayers.length - 1) // i.e. pointer within array bounds
        this.avatar.body++;
      else
        this.avatar.body = 0; // place on other end
    },

    bodyLeft() {
      if (this.avatar.body !== 0) // i.e. pointer within array bounds
        this.avatar.body--;
      else
        this.avatar.body = this.bodyLayers.length - 1; // place on other end
    },

    // Face methods


    faceRight() {
      if (this.avatar.face !== this.faceLayers.length - 1) // i.e. pointer within array bounds
        this.avatar.face++;
      else
        this.avatar.face = 0; // place on other end
    },

    faceLeft() {
      if (this.avatar.face !== 0) // i.e. pointer within array bounds
        this.avatar.face--;
      else
        this.avatar.face = this.faceLayers.length - 1; // place on other end
    },

    // Hair methods

    hairRight() {
      if (this.avatar.hair !== this.hairLayers.length - 1) // i.e. pointer within array bounds
        this.avatar.hair++;
      else
        this.avatar.hair = 0; // place on other end
    },

    hairLeft() {
      if (this.avatar.hair !== 0) // i.e. pointer within array bounds
        this.avatar.hair--;
      else
        this.avatar.hair = this.hairLayers.length - 1; // place on other end
    }
  }
});