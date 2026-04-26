import {AddStyle} from './Styles.js';

AddStyle(`
  body{
    margin: 0;
  }

  circle-game{
    display: flex;
    width: 100vw;
    height: 100vh;
    font-family: sans-serif;
  }

  circle-game .game-map{
    display: flex;
    height: 100%;
    width: 100%;
    background-color: lightblue;
  }

  canvas{
    border: 2px solid black;
  }
`);

class Game extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
          <div class="game-map">
            <canvas height="500px" width="500px">
          </div>
        `;
        
        const canvas = this.querySelector('canvas');
        const ctx = canvas.getContext('2d');
          
        canvas.addEventListener('mousemove', () => {
            ctx.beginPath();
            ctx.arc(50, 50, 20, 0, 2 * Math.PI);
            ctx.fillStyle = 'purple';
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'black';
            ctx.stroke();
            ctx.closePath();
        });
    };
};
customElements.define('circle-game', Game);
