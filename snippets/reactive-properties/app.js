new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        // Result is computed property
        result: function() {
            return this.value < 37 ? "Not there yet." : "Done!";
        }
    },
    watch: {
       // Watches the result property
       result: function(v) {
           var self = this;
           setTimeout(function() {
               self.value = 0;
           }, 5000);
       }
    }
});
