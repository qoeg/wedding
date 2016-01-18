// App module
import $ from "jquery"

export class App {
  constructor() {
    this.photos = [
      {name: 'photo_1', width: 1024, height: 683},
      {name: 'photo_2', width: 1024, height: 683},
      {name: 'photo_3', width: 1024, height: 683}
    ];

    this.style = `background-image: url(img/${this.photos[0].name}.jpg)`

    $.material.init();
  }

  configureRouter(config, router) {
    config.title = 'G <3 S';
    config.map([
      { route: ['','home'], name: 'home', title: 'Home', moduleId: './home', nav: true },
      { route: ['directions'], name: 'directions', title: 'Directions', moduleId: './directions', nav: true }
    ]);

    this.router = router;
  }
}
