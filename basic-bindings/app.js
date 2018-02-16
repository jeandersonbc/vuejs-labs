new Vue({
    el: "#exercise",
    data: {
        name: "John Doe",
        age: 99,
        myImage: "https://medias.audiofanzine.com/images/normal/cort-x-custom-1558867.jpg",
    },
    methods: {
        random: function() {
            return Math.random();
        },
        myInput: function() {
            return this.name.toUpperCase();
        }
    }
});
