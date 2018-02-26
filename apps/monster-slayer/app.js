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
            var minDamage = 5;
            var damage = Math.max(Math.round(Math.random() * 10), minDamage);
            this.playerHP -= damage;
            if (this.playerHP <= 0) {
                alert("You lost!");
                this.isRunning = false;
                this.resetGame();
            }
        },
        attackMonster: function() {
            var minDamage = 2;
            var damage = Math.max(Math.round(Math.random() * 10), minDamage);
            this.monsterHP -= damage;
            if (this.monsterHP <= 0) {
                alert("You won!");
                this.isRunning = false;
                this.resetGame();
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function() {
            var minDamage = 10;
            var damage = Math.max(Math.round(Math.random() * 11), minDamage);
            this.monsterHP -= damage;
            if (this.monsterHP <= 0) {
                alert("You won!");
                this.isRunning = false;
                this.resetGame();
                return;
            }
            this.monsterAttacks();
        },
        healPlayer: function() {
            this.playerHP = Math.min(this.playerHP + 15, 100);
            this.monsterAttacks();
        }
    }
});
