Blogger.ContactController = Ember.Controller.extend({
  // confirmationNumber: Math.round(Math.random() * 1000000),

  messageSent: false,
  actions: {
    sendMessage: function() {
      var message = prompt('Enter your message:');
      this.set('messageSent', true);
      this.set('confirmationNumber', Math.round(Math.random() * 1000000))
    }
  }
});
