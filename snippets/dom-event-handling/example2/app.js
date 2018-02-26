new Vue({
    el: "#exercise",
    data: {
        value: ""
    },
    methods: {
        displayAlert: function(event) {
            alert("YOUR COMPUTER IS ABOUT TO EXPLODE!");
        },
        displayInput: function(event) {
            this.value = event.target.value;
        }
    }
});
