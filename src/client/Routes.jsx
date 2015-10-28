FlowRouter.route("/", {
  subscriptions: function() {},
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <p>Sample content</p>
    });
  }
});
