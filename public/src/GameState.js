class GameState{
    constructor(){
        this.mapWidth = 3000;
        this.mapHeight = 3000;
        this.initialPlayerRadius = 20;

        this.players = {};
    };
    
    addPlayer(id){
        this.players[String(id)] = {
            xPos: Math.floor(Math.random() * ((this.mapWidth - this.initialPlayerRadius) - this.initialPlayerRadius)) + this.initialPlayerRadius,
            yPos: Math.floor(Math.random() * ((this.mapHeight - this.initialPlayerRadius) - this.initialPlayerRadius)) + this.initialPlayerRadius,
            radius: this.initialPlayerRadius
        };
    }
    
    deletePlayer(id){
        delete this.players[String(id)];
    }
};
module.exports = GameState;
