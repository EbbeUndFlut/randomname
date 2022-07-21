const derName = document.getElementById('derName')
const spruch = document.getElementsByClassName('spruch')[0]

const eureNamen = [
    'Magda',
    'Katrin',
    'Artem',
    'Siva',
    'Hussein',
    'Mehdi',
    'Stani',
    'Gerrit',
    'Alex',
    'Christian',
    'Stefan',
]

function getRandomName(){
    let min = 0
    let max = eureNamen.length 
    return eureNamen[Math.floor(Math.random()*max)]
}

function selectPlayer(){
    derName.innerHTML=getRandomName()
}