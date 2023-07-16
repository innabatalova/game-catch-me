class Game{
    stepLeft(event){
        let codr = event.getBoundingClientRect().x
        event.style.left = (codr + 10) + "px";
    }
}

export default new Game()