export class App {
  configureRouter(config, router) {
    config.title = 'G <3 S';
    config.map([
      { route: ['','soon'], name: 'soon', moduleId: './soon', nav: true }
    ]);

    this.router = router;
  }
}
