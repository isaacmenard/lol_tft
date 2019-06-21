chooseAPlayer = false
listPlayerImg = ["https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg", "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/12/28210958/urgot-highnoon.jpg", "https://image.redbull.com/rbcom/010/2014-06-11/1331658165763_2/0100/0/1/how-riot-created-league-of-legends-champion-braum.jpg", "https://d1dou5kerfs1ji.cloudfront.net/uploads/blog/Selecting-the-Most-Suitable-Champion-in-LoL.jpg", "https://image.redbull.com/rbcom/052/2019-01-11/b9bdc262-25e4-43ef-b73b-1e10935591a7/0100/0/1/lunu-willump-champion-lol-monter.jpg", "https://static1.millenium.org/articles/6/31/03/56/@/686997-ezreal-splash-article_m-1.jpg", "https://news-a.akamaihd.net/public/images/pages/2015/popu/img/poppy-wallpaper.jpg", "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-reveal-pyke-bloodharbor-ripper/fr_FR/ae1ec8345c64ed98cb8f38ec22b84b94c0ff2a59/assets/downloads/wallpapers/PYKE_WALLPAPER_LOGO_1920X1200.jpg", "https://img.rankedboost.com/wp-content/uploads/2016/06/Victorious-Orianna-Skin-LoL-2.jpg", "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg", "https://news-a.akamaihd.net/public/images/srew/img/Sona_Splash.jpg"]
listPlayerRarety = [
    [0, 1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
window.onload = function () {
    onStart()
}

function onStart() {
    chooseAPlayerInterface()
    miseAJourShop([0,0,1])
}

function chooseAPlayerInterface() {
    generateChooseAPlayerInterface()
    if (chooseAPlayer == false) {
        document.getElementById("chooseAPlayerInter").style.visibility = "visible";
        chooseAPlayer = true
    } else {
        document.getElementById("chooseAPlayerInter").style.visibility = "hidden";
        chooseAPlayer = false
    }
}

function generateChooseAPlayerInterface() {
    for (var i = 0; i < document.getElementsByClassName("selectAPlayerChoose").length; i++) {
        var valeur = generateARandomPlayer([0, 0, 1])
        var src = valeur[0]
        var raretyImg = valeur[1]
        document.getElementsByClassName("selectAPlayerChoose")[i].onclick = function () {
            choosed(this.firstElementChild.style.backgroundImage)
        }
        document.getElementsByClassName("imgPlayerChoose")[i].style.backgroundImage = "url(" + src + ")"
        document.getElementsByClassName("statsPlayerChoose")[i].innerHTML = raretyImg + 1;
    }
}

function generateARandomPlayer(rarety) {
    var player = rarety[Math.floor(Math.random() * 3)]
    return [listPlayerImg[listPlayerRarety[player][Math.floor(Math.random() * listPlayerRarety[player].length)]], player]
}

function choosed(elementChoose) {
    chooseAPlayerInterface()
    var place = getAPlacePlayerStand()
    if (place != null) {
        place.lastElementChild.style.backgroundImage = elementChoose
    }
}

function getAPlacePlayerStand() {
    for (var i = 0; i < document.getElementsByClassName("playerInGame").length; i++) {
        if (document.getElementsByClassName("imgPlayerInGame")[i].style.backgroundImage == "") {
            return document.getElementsByClassName("playerInGame")[i]
        }
    }
    return null
}

function miseAJourShop(rarety) {
    for (var i = 0; i < document.getElementsByClassName("selectAPlayer").length; i++) {
        var valeur = generateARandomPlayer(rarety)
        var src = valeur[0]
        var raretyImg = valeur[1]
        document.getElementsByClassName("selectAPlayer")[i].onclick = function () {
            bought(this.firstElementChild.style.backgroundImage, this)
        }
        document.getElementsByClassName("imgPlayer")[i].style.backgroundImage = "url(" + src + ")"
        document.getElementsByClassName("statsPlayer")[i].innerHTML = raretyImg + 1;
    }
}

function bought(elementChoose, elementClick) {
    var place = getAPlacePlayerStand()
    if (place != null) {
        if (miseAJourGold(parseInt(elementClick.lastElementChild.innerHTML)*-1)) {
            elementClick.firstElementChild.style.backgroundImage = ""
            elementClick.lastElementChild.innerHTML = ""
            elementClick.lastElementChild.onclick = ""
            place.lastElementChild.style.backgroundImage = elementChoose
        }
    }

}

function miseAJourGold(money) {
    if (parseInt(document.getElementById("gold").innerHTML) + money >= 0) {
        document.getElementById("gold").innerHTML = parseInt(document.getElementById("gold").innerHTML) + money
        return true
    } else {
        alert("pas assez de sous")
        return null
    }
}