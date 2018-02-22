new Vue({
  el: '#exercise',
  data: {
    active: true 
  },
  methods: {
    startEffect: function() {
        var self = this;
        setInterval(function() {
            self.active = !self.active;
        }, 1000);
    }
  }
});
