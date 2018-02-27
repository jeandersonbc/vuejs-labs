new Vue({
    el: "#app",
    data: {
        playerHP: 100,
        monsterHP: 100,
        isRunning: false,
        events: []
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
            this.events = [];
        },
        monsterAttacks: function() {
            var damage = this.calculateDamage(5);
            this.playerHP -= damage;
            this.events.unshift({
                isPlayer: false,
                msg: "Monster attacked: +" + damage + " damage"
            });
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
            var damage = this.calculateDamage(2);
            this.monsterHP -= damage;
            this.events.unshift({
                isPlayer: true,
                msg: "Player attacked: +" + damage + " damage"
            });
            if (this.hasWon())
                return;
            this.monsterAttacks();
        },
        specialAttack: function() {
            var damage = this.calculateDamage(10);
            this.monsterHP -= damage;
            this.events.unshift({
                isPlayer: true,
                msg: "Player used special attack: +" + damage + " damage"
            });
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
            var recovery = Math.min(this.playerHP + 15, 100)
            this.playerHP = recovery;
            this.events.unshift({
                isPlayer: true,
                msg: "Player used healing +15"
            });
            this.monsterAttacks();
        }
    }
});
