Blogger.Router.map(function() {
  this.resource('about');
  this.resource('contact');
  this.resource('posts', {path: "/"});
});
