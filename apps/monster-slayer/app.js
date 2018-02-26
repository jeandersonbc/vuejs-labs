new Vue({
    el: "#app",
    data: {
        playerHP: 100,
        monsterHP: 100,
        isRunning: false
    },
    methods: {
        startGame: function() {
            this.isRunning = true;
            this.resetGame();
        },
        giveUp: function() {
            var result = confirm("Are sure you want to finish the current session?");
            if (result) {
                this.resetGame();
                this.isRunning = false;
            }
        },
        resetGame: function() {
            this.playerHP = this.monsterHP = 100;
        }
    }
});
