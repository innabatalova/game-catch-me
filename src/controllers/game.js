import DickImg from '../static/image/dick.png'

class Game {
    addArrayImg() {
        setTimeout(() => {
            const gameFrame = document.querySelector('.game')
            const length = 1
            const arrayDicks = [...Array(length)];
            for (let i = 0; i < arrayDicks.length; i += 1) {
                let randomClass = Math.floor(Math.random() * 10)
                const arrayValue = ['dick__topLeft', 'dick__topRight', 'dick__bottomLeft', 'dick__bottomRight',
                    'dick__topLeft', 'dick__topRight', 'dick__bottomLeft', 'dick__bottomRight', 'dick__topLeft', 'dick__topRight']
                arrayDicks[i] = { classNameDick: arrayValue[randomClass] }
            }
            let elem = document.createElement("img");
            elem.classList.add('dick', arrayDicks[0].classNameDick)
            elem.src = DickImg
            gameFrame.appendChild(elem);
        }, 0)
    }

    removeArrayImg() {
        let elem = document.querySelector(".dick");
        elem.remove()
    }

    getCollision() {
        const dick = document.querySelector('.dick')
        const men = document.querySelector('.men')
        if(dick === null){
            return
        } else{
            let dickCoord = dick.getBoundingClientRect()
            let menCoord = men.getBoundingClientRect()
            var XColl=false
            var YColl=false
            if ((dickCoord.x + dickCoord.width >= menCoord.x) && (dickCoord.x <= menCoord.x + menCoord.width)) XColl = true
            if ((dickCoord.y + dickCoord.height >= menCoord.y) && (dickCoord.y <= menCoord.y + menCoord.height)) YColl = true
            if (XColl&YColl){
                if(dick === null){return}
                else{
                    dick.remove()
                    return true
                } 
            }
            return false
        }
    }




}

export default new Game()