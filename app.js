(function() {
//достванія сейва
let StorageCount = localStorage.getItem('storagecount')
let StoragePay = localStorage.getItem('storagepay')
let StorageCursor = localStorage.getItem('storagecursor')
let StorageRocket = localStorage.getItem('storagerocket')
let StorageMercury = localStorage.getItem('storagemercury')
let Storagevenus = localStorage.getItem('storagevenus')
let StorageEarth = localStorage.getItem('storageearth')
let StorageSpace = localStorage.getItem('storagespace')
let StorageMars = localStorage.getItem('storagemars')
let StorageJupiter = localStorage.getItem('storagejupiter')
let StorageSaturn = localStorage.getItem('storagesaturn')
let StorageUranus = localStorage.getItem('storageuranus')
let StorageNeptune = localStorage.getItem('storageneptune')

let StorageCostOneShop = localStorage.getItem('storagecostOneShop')
let StorageCostTwoShop = localStorage.getItem('storagecostTwoShop')
let StorageCostThreeShop = localStorage.getItem('storagecostThreeShop')
let StorageCostFourShop = localStorage.getItem('storagecostFourShop')
let StorageCostFiveShop = localStorage.getItem('storagecostFiveShop')
let StorageCostSixShop = localStorage.getItem('storagecostSixShop')
let StorageCostSevenShop = localStorage.getItem('storagecostSevenShop')
let StorageCostEightShop = localStorage.getItem('storagecostEightShop')
let StorageCostNineShop = localStorage.getItem('storagecostNineShop')
let StorageCostTenShop = localStorage.getItem('storagecostTenShop')
let StorageCostElevenShop = localStorage.getItem('storagecostElevenShop')

//Переменние 
let pay = parseInt(StoragePay)
let count = parseInt(StorageCount)
let cursor = parseInt(StorageCursor) // 1
let rocket = parseInt(StorageRocket)
let mercury = parseInt(StorageMercury)
let venus = parseInt(Storagevenus)
let earth = parseInt(StorageEarth)
let space = parseInt(StorageSpace)
let mars = parseInt(StorageMars)
let jupiter = parseInt(StorageJupiter)
let saturn = parseInt(StorageSaturn)
let uranus = parseInt(StorageUranus)
let neptune = parseInt(StorageNeptune)
//Переманние конец

//заданія дефотних значеній
if (isNaN(pay)) {
    pay = 0
}if (isNaN(count)) {
    count = 0
}if (isNaN(cursor)) {
    cursor = 1
}if (isNaN(rocket)) {
    rocket = 0
}if (isNaN(mercury)) {
    mercury = 0
}if (isNaN(venus)) {
    venus = 0
}if (isNaN(earth)) {
    earth = 0
}if (isNaN(space)) {
    space = 0
}if (isNaN(mars)) {
    mars = 0
}if (isNaN(jupiter)) {
    jupiter = 0
}if (isNaN(saturn)) {
    saturn = 0
}if (isNaN(uranus)) {
    uranus = 0
}if (isNaN(neptune)) {
    neptune = 0
}

//заданія дефотних значеній КОНЕЦ

//обновленія всіх щьотчіків післа доставанія ІЗ сейва
setTimeout(() => {
    lvlONE.textContent = ('lvl: ' + cursor)
    lvlTWO.textContent = ('lvl: ' + rocket)
    lvlTHREE.textContent = ('lvl: ' + mercury)
    lvlFOUR.textContent = ('lvl: ' + venus)
    lvlFIVE.textContent = ('lvl: ' + earth)
    lvlSIX.textContent = ('lvl: ' + space)
    lvlSEVEN.textContent = ('lvl: ' + mars)
    lvlEIGHT.textContent = ('lvl: ' + jupiter)
    lvlNINE.textContent = ('lvl: ' + saturn)
    lvlTEN.textContent = ('lvl: ' + uranus)
    lvlELEVEN.textContent = ('lvl: ' + neptune)
}, 100);
//обновленія всіх щьотчіків післа доставанія ІЗ сейва КОНЕЦ

//магазин открытие закрытие
const headerShop = document.getElementById('headerShop')//кнопка магазина возле денег
const shopCont = document.getElementById('shopCont')//Панелька магазина слева

headerShop.onclick = () => {
    if (shopCont.style.left == '0px') {
        shopCont.style.left = '-600px'
    } else {
        shopCont.style.left = '0px'
    }
}
//магазин открытие закрытие КОНЕЦ

//+1 при нажатіі на сонце
const sun = document.getElementById('sun')
const money = document.getElementById('money')

sun.onclick = () => {
    money.textContent = Math.round(count += cursor)
}
//+1 при нажатіі на сонце КОНЕЦ

//магазин покупочки

const payText = document.getElementById('pay')//отображенія всього з автоферм

//перший слот
const cursorBuy = document.getElementById('cursorBuy') //Кнопка в магазині курсор
const costONE = document.getElementById('costONE') //Стоимость отображения першого слота
const lvlONE = document.getElementById('lvlONE') //lvl першого слота
let costOneShop = parseInt(StorageCostOneShop) //70

cursorBuy.onclick = () => {
    shopBuy(cursorBuy, costOneShop)
}
//перший слот КОНЕЦ

//другий слот
const rocketBuy = document.getElementById('rocketBuy') //Кнопка в магазіні ракета
const costTWO = document.getElementById('costTWO') //Стоимость отображения другого слота
const lvlTWO = document.getElementById('lvlTWO') //lvl другого слота
let costTwoShop = parseInt(StorageCostTwoShop) //90

rocketBuy.onclick = () => {
    shopBuy(rocketBuy, costTwoShop)
}
//другий слот конец

//третий слот
const mercuryBuy = document.getElementById('mercuryBuy')// кнопка в магазіні Меркурій
const costTHREE = document.getElementById('costTHREE')// стоімость отображенія третього слота
const lvlTHREE = document.getElementById('lvlTHREE')// lvl третього слота
let costThreeShop = parseInt(StorageCostThreeShop) //30000

mercuryBuy.onclick = () => {
    shopBuy(mercuryBuy, costThreeShop)
}
//третий слот конец

//четвертий слот
const venusBuy = document.getElementById('venusBuy')//Кнопка в магазіні Венера
const costFOUR = document.getElementById('costFOUR')//Стоімость отображенія четвертого слота
const lvlFOUR = document.getElementById('lvlFOUR')// lvl четвертого слота
let costFourShop = parseInt(StorageCostFourShop) //100000

venusBuy.onclick = () => {
    shopBuy(venusBuy, costFourShop)
}
//четвертий слот КОНЕЦ

//пятий слот
const earthBuy = document.getElementById('earthBuy')//Кнопка в магазіні Земля
const costFIVE = document.getElementById('costFIVE')//Стоімость отображенія пятого слота
const lvlFIVE = document.getElementById('lvlFIVE')// lvl пятого слота
let costFiveShop = parseInt(StorageCostFiveShop)//170000

earthBuy.onclick = () => {
    shopBuy(earthBuy, costFiveShop)
}
//пятий слот КОНЕЦ

//шостий слот
const spaceBuy = document.getElementById('spaceBuy')//Кнопка в магазіні Космос
const costSIX = document.getElementById('costSIX')//Стоімость отображенія шостого слота
const lvlSIX = document.getElementById('lvlSIX')//lvl шостого слота
let costSixShop = parseInt(StorageCostSixShop) //320000

spaceBuy.onclick = () => {
    shopBuy(spaceBuy, costSixShop)
}
//шостий слот конец

//сьомий слот
const marsBuy = document.getElementById('marsBuy')//Кнопка в магазіні Марс 
const costSEVEN = document.getElementById('costSEVEN')//Стоімость отображенія сьомого слота
const lvlSEVEN = document.getElementById('lvlSEVEN')//lvl сьомого слота
let costSevenShop = parseInt(StorageCostSevenShop) //430000

marsBuy.onclick = () => {
    shopBuy(marsBuy, costSevenShop)
}
//сьомий слот КОНЕЦ

//Восьмий слот
const jupiterBuy = document.getElementById('jupiterBuy')//Кнопка в магазіні Юпитер 
const costEIGHT = document.getElementById('costEIGHT')//Стоімость отображенія восьмого слота
const lvlEIGHT = document.getElementById('lvlEIGHT')//lvl восьмого слота
let costEightShop = parseInt(StorageCostEightShop) //630000

jupiterBuy.onclick = () => {
    shopBuy(jupiterBuy, costEightShop)
}
//Восьмий слот конец

//Девятий слот
const saturnBuy = document.getElementById('saturnBuy')//Кнопка в магазіні сатурн 
const costNINE = document.getElementById('costNINE')//Стоімость отображенія девятого слота
const lvlNINE = document.getElementById('lvlNINE')//lvl девятого слота
let costNineShop = parseInt(StorageCostNineShop) //930000

saturnBuy.onclick = () => {
    shopBuy(saturnBuy, costNineShop)
}
//Девятий слот КОНЕЦ

//десятий слот
const uranusBuy = document.getElementById('uranusBuy')//Кнопка в магазіні Уран
const costTEN = document.getElementById('costTEN')//Стоімость отображенія десятого слота
const lvlTEN = document.getElementById('lvlTEN')//lvl десятого слота
let costTenShop = parseInt(StorageCostTenShop) //1100000

uranusBuy.onclick = () => {
    shopBuy(uranusBuy, costTenShop)
}
//десятий слот КОНЕЦ 

//одиняцятий слот
const neptuneBuy = document.getElementById('neptuneBuy') //Кнопка в магазіні Нептун
const costELEVEN = document.getElementById('costELEVEN') //Стоімость отображенія одиняцьтого слота
const lvlELEVEN = document.getElementById('lvlELEVEN')//lvl одиняцьтого слота
let costElevenShop = parseInt(StorageCostElevenShop) //2500000

neptuneBuy.onclick = () => {
    shopBuy(neptuneBuy, costElevenShop)
}
//одиняцятий слот КОНЕЦ

//заданія дефотних значеній для цен
if (isNaN(costOneShop)) {
    costOneShop = 70
    costOneShop.textContent = '$ 70'
}if (isNaN(costTwoShop)) {
    costTwoShop = 90
    costTwoShop.textContent = '$ 90'
}if (isNaN(costThreeShop)) {
    costThreeShop = 30000
    costThreeShop.textContent = '$ 30000'
}if (isNaN(costFourShop)) {
    costFourShop = 100000
    costFourShop.textContent = '$ 100000'
}if (isNaN(costFiveShop)) {
    costFiveShop = 170000
    costFiveShop.textContent = '$ 170000'
}if (isNaN(costSixShop)) {
    costSixShop = 320000
    costSixShop.textContent = '$ 320000'
}if (isNaN(costSevenShop)) {
    costSevenShop = 430000
    costSevenShop.textContent = '$ 430000'
}if (isNaN(costEightShop)) {
    costEightShop = 630000
    costEightShop.textContent = '$ 630000'
}if (isNaN(costNineShop)){
    costNineShop = 930000
    costNineShop.textContent = '$ 930000'
}if (isNaN(costTenShop)) {
    costTenShop = 1100000
    costTenShop.textContent = '$ 1100000'
}if (isNaN(costElevenShop)) {
    costElevenShop = 2500000
    costElevenShop.textContent = '$ 2500000'
}

setTimeout(() => {
    costONE.textContent = ('$ ' + Math.round(StorageCostOneShop))
    costTWO.textContent = ('$ ' + Math.round(StorageCostTwoShop))
    costTHREE.textContent = ('$ ' + Math.round(StorageCostThreeShop))
    costFOUR.textContent = ('$ ' + Math.round(StorageCostFourShop))
    costFIVE.textContent = ('$ ' + Math.round(StorageCostFiveShop))
    costSIX.textContent = ('$ ' + Math.round(StorageCostSixShop))
    costSEVEN.textContent = ('$ ' + Math.round(StorageCostSevenShop))
    costEIGHT.textContent = ('$ ' + Math.round(StorageCostEightShop))
    costNINE.textContent = ('$ ' + Math.round(StorageCostNineShop))
    costTEN.textContent = ('$ ' + Math.round(StorageCostTenShop))
    costELEVEN.textContent = ('$ ' + Math.round(StorageCostElevenShop))

    money.textContent = Math.round(count)
    payText.textContent = Math.round(pay)
}, 100);
//заданія дефотних значеній для цен КОНЕЦ

function shopBuy(name, cost) {
    if (name == cursorBuy) {

        if (count >= cost) {

            money.textContent = Math.round(count -= cost)

            costONE.textContent = ('$ ' + Math.round(costOneShop *= 1.21))

            lvlONE.textContent = ('lvl: '+ (cursor += 1))

        } else {

        errNotEnoughMoney()

        }

    }

    if (name == rocketBuy) {
        if (count >= cost) {

            money.textContent = Math.round(count -= cost)

            costTWO.textContent = ('$ ' + Math.round(costTwoShop *= 1.17))

            lvlTWO.textContent = ('lvl: '+ (rocket += 1))

            payText.textContent = Math.round(pay += 1)

        } else {

        errNotEnoughMoney()

        }
    }

    if (name == mercuryBuy) {
        if (count >= cost) {

            money.textContent = Math.round(count -= cost)

            costTHREE.textContent = ('$ ' + Math.round(costThreeShop *= 1.14))

            lvlTHREE.textContent = ('lvl: '+ (mercury += 1))

            payText.textContent = Math.round(pay += 60)

        } else {

        errNotEnoughMoney()

        }
    }

    if (name == venusBuy) {
        if (count >= cost) {

            money.textContent = Math.round(count -= cost)

            costFOUR.textContent = ('$ ' + Math.round(costFourShop *= 1.17))

            lvlFOUR.textContent = ('lvl: '+ (venus += 1))

            payText.textContent = Math.round(pay += 90)

        } else {

        errNotEnoughMoney()

        }
    }

    if (name == earthBuy) {
        if (count >= cost) {

            money.textContent = Math.round(count -= cost)

            costFIVE.textContent = ('$ ' + Math.round(costFiveShop *= 1.20))

            lvlFIVE.textContent = ('lvl: '+ (earth += 1))

            payText.textContent = Math.round(pay += 150)

        } else {

        errNotEnoughMoney()

        }
    }

    if (name == spaceBuy) {
        if (count >= cost) {

            money.textContent = Math.round(count -= cost)

            costSIX.textContent = ('$ ' + Math.round(costSixShop *= 2.2))

            lvlSIX.textContent = ('lvl: '+ (space += 1))

            payText.textContent = Math.round(pay += 0)

        } else {

        errNotEnoughMoney()

        }
    }
//1-lvl cosmos
    if (name == marsBuy) {
        if (count >= cost) {
            if (space >= 1) {

                money.textContent = Math.round(count -= cost)

                costSEVEN.textContent = ('$ ' + Math.round(costSevenShop *= 1.21))
    
                lvlSEVEN.textContent = ('lvl: '+ (mars += 1))
    
                payText.textContent = Math.round(pay += 310)

            } else {

                errNotEnoughLvl(1)

            }

        } else {

            errNotEnoughMoney()

        }
    }

    if (name == jupiterBuy) {
        if (count >= cost) {
            if (space >= 1) {

                money.textContent = Math.round(count -= cost)

                costEIGHT.textContent = ('$ ' + Math.round(costEightShop *= 1.23))
    
                lvlEIGHT.textContent = ('lvl: '+ (jupiter += 1))
    
                payText.textContent = Math.round(pay += 480)

            } else {

                errNotEnoughLvl(1)

            }

        } else {

        errNotEnoughMoney()

        }
    }

    if (name == saturnBuy) {
        if (count >= cost) {
            if (space >= 1) {

                money.textContent = Math.round(count -= cost)

                costNINE.textContent = ('$ ' + Math.round(costNineShop *= 1.24))
    
                lvlNINE.textContent = ('lvl: '+ (saturn += 1))
    
                payText.textContent = Math.round(pay += 650)

            } else {

                errNotEnoughLvl(1)

            }

        } else {

        errNotEnoughMoney()

        }
    }
//2 lvl cosmos
    if (name == uranusBuy) {
        if (count >= cost) {
            if (space >= 2) {

                money.textContent = Math.round(count -= cost)

                costTEN.textContent = ('$ ' + Math.round(costTenShop *= 1.21))

                lvlTEN.textContent = ('lvl: '+ (uranus += 1))

                payText.textContent = Math.round(pay += 1350)

            } else {

                errNotEnoughLvl(2)

            }

        } else {

        errNotEnoughMoney()

        }
    }

    if (name == neptuneBuy) {
        if (count >= cost) {
            if (space >= 2) {

                money.textContent = Math.round(count -= cost)

                costELEVEN.textContent = ('$ ' + Math.round(costElevenShop *= 1.21))

                lvlELEVEN.textContent = ('lvl: '+ (neptune += 1))

                payText.textContent = Math.round(pay += 2650)

            } else {

                errNotEnoughLvl(2)

            }

        } else {

        errNotEnoughMoney()

        }
    }
}

//ENEM
const ENEMcont = document.getElementById('ENEMcont')

function errNotEnoughMoney() {
        ENEMcont.style.left = '0px'
        setTimeout ( () => {
            ENEMcont.style.left = '-600px'
        }, 1600)
} 
//ENEL
const ENELcont = document.getElementById('ENELcont')
const ENELlvl = document.getElementById('ENELlvl')

function errNotEnoughLvl(lvl) {
    ENELcont.style.left = '0px'
    ENELlvl.textContent = lvl
    setTimeout ( () => {
        ENELcont.style.left = '-600px'
    }, 1600)
}


//магазин покупочки КОНЕЦ

//Видача денег за 1 сек PAYDAY
setInterval( () => {
    Math.round(count += pay)
    money.textContent = Math.round(count)
}, 1000);
//Видача денег за 1 сек PAYDAY конец

//Появленія планет після покупки 
const planetMercury = document.getElementById('mercury')
const planetVenus = document.getElementById('venus')
const planetEarth = document.getElementById('earth')
const planetMars = document.getElementById('mars')
const planetJupiter = document.getElementById('jupiter')
const planetSaturn = document.getElementById('saturn')
const planetUranus = document.getElementById('uranus')
const planetNeptune = document.getElementById('neptune')

setInterval( () => {
    if (mercury >= 1) {
        planetMercury.style.opacity = '100%'
        planetMercury.style.animation = 'rotate 16s infinite linear'
    }
    if (venus >= 1) {
        planetVenus.style.opacity = '100%'
        planetVenus.style.animation = 'rotate 28s infinite linear'
    }
    if (earth >= 1) {
        planetEarth.style.opacity = '100%'
        planetEarth.style.animation = 'rotate 41s infinite linear'
    }
//lvl 1 cosmos
    if (mars >= 1) {
        planetMars.style.opacity = '100%'
        planetMars.style.animation = 'rotate 54s infinite linear'
    }
    if (jupiter >= 1 ) {
        planetJupiter.style.opacity = '100%'
        planetJupiter.style.animation = 'rotate 70s infinite linear'
    }
    if (saturn >= 1) {
        planetSaturn.style.opacity = '100%'
        planetSaturn.style.animation = 'rotate 94s infinite linear'
    }
//lvl 2 cosmos
    if (uranus >= 1) {
        planetUranus.style.opacity = '100%'
        planetUranus.style.animation = 'rotate 120s infinite linear'
    }
    if (neptune >= 1) {
        planetNeptune.style.opacity = '100%'
        planetNeptune.style.animation = 'rotate 155s infinite linear'
    }

    //Розшеренія космоса
    const spaceDiv = document.getElementById('space')
    if (space >= 1) {
        spaceDiv.style.width = '1700px'
        spaceDiv.style.height = '1550px'
        spaceDiv.style.marginTop = '0px'
        spaceDiv.style.transition = '6s'
        spaceDiv.style.borderRadius = '0'
    }
    if (space >= 2) {
        spaceDiv.style.width = '2550px'
        spaceDiv.style.height = '2470px'
        spaceDiv.style.transition = '10s'
        spaceDiv.style.marginTop = '0px'
        spaceDiv.style.borderRadius = '0'
    }
    //Розшеренія космоса конец
}, 100);
//Появленія планет після покупки КОНЕЦ

//Настройки с удаленіям сейва
const settingsGear = document.getElementById('settingsCont')
const settingsmenu = document.getElementById('settingsmenu')
const noBTN = document.getElementById('no')
const yesBTN = document.getElementById('yes')

settingsGear.onclick = () => {
    if (settingsmenu.style.left == '0px') {
        settingsmenu.style.left = '-600px'
    } else {
        settingsmenu.style.left = '0px'
    }
}

noBTN.onclick = () => {
    settingsmenu.style.left = '-600px'
}

yesBTN.onclick = () => {
    localStorage.clear()
    location.reload()
}
//Настройки с удаленіям сейва Конец

//создания сейва
setInterval(() => {
    localStorage.setItem('storagepay', pay)
    localStorage.setItem('storagecount', count)
    localStorage.setItem('storagecursor', cursor)
    localStorage.setItem('storagerocket', rocket)
    localStorage.setItem('storagemercury', mercury)
    localStorage.setItem('storagevenus', venus)
    localStorage.setItem('storageearth', earth)
    localStorage.setItem('storagespace', space)
    localStorage.setItem('storagemars', mars)
    localStorage.setItem('storagejupiter', jupiter)
    localStorage.setItem('storagesaturn', saturn)
    localStorage.setItem('storageuranus', uranus)
    localStorage.setItem('storageneptune', neptune)

    localStorage.setItem('storagecostOneShop', costOneShop)
    localStorage.setItem('storagecostTwoShop', costTwoShop)
    localStorage.setItem('storagecostThreeShop', costThreeShop)
    localStorage.setItem('storagecostFourShop', costFourShop)
    localStorage.setItem('storagecostFiveShop', costFiveShop)
    localStorage.setItem('storagecostSixShop', costSixShop)
    localStorage.setItem('storagecostSevenShop', costSevenShop)
    localStorage.setItem('storagecostEightShop', costEightShop)
    localStorage.setItem('storagecostNineShop', costNineShop)
    localStorage.setItem('storagecostTenShop', costTenShop)
    localStorage.setItem('storagecostElevenShop', costElevenShop)
}, 100);

})();