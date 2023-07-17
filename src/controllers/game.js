class Game{

    stepLeft(){
        let vladlen = document.querySelector('.men')
        let coordLeft = getComputedStyle(vladlen).left;
        vladlen.style.left = (parseInt(vladlen.style.left || coordLeft) - 10) + "px";

        if (coordLeft === '180px'){
            vladlen.style.left = 180 + 'px'
        }
    }

    stepRight() {
        let vladlen = document.querySelector('.men')
        let coordLeft = getComputedStyle(vladlen).left;
        vladlen.style.left = (parseInt(vladlen.style.left || coordLeft) + 10) + "px";

        if (coordLeft === '740px') {
            vladlen.style.left = 740 + 'px'
        }
    }
}

export default new Game()