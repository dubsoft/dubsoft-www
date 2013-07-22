App = Ember.Application.create();

App.Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('portfolio');
});
