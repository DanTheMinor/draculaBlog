Blogger.PostController = Ember.ObjectController.extend({
  isEditing: false,
  foo: "foo",
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    }
  }
});
