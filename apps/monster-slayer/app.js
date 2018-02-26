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
        },
        monsterAttacks: function() {
            this.playerHP -= this.calculateDamage(5);
            if (this.playerHP <= 0) {
                alert("You lost!");
                this.isRunning = false;
                this.resetGame();
            }
        },
        calculateDamage: function(minDamage) {
            return Math.max(Math.round(Math.random() * 10), minDamage);
        },
        attackMonster: function() {
            this.monsterHP -= this.calculateDamage(2);
            if (this.hasWon())
                return;
            this.monsterAttacks();
        },
        specialAttack: function() {
            this.monsterHP -= this.calculateDamage(10);
            if (this.hasWon())
                return;
            this.monsterAttacks();
        },
        hasWon: function() {
            if (this.monsterHP <= 0) {
                alert("You won!");
                this.isRunning = false;
                this.resetGame();
                return true;
            }
            return false;
        },
        healPlayer: function() {
            this.playerHP = Math.min(this.playerHP + 15, 100);
            this.monsterAttacks();
        }
    }
});
