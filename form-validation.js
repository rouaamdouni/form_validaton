let form = document.querySelector("#form");

form.onsubmit = function (event) {
    event.preventDefault();
    // nom lezmou ikoun >= 3 lettre
    let nom = document.querySelector("#nom");
    if ((nom.value.length < 3) && (nom.value.length > 0)) {
        nom.style.border = "1px solid red"
        document.querySelector("#nom-error").innerHTML = "le nom doit contenir au moins 3 lettres";
    } else if (nom.value.length >= 3) {
        nom.style.border = "1px solid black"
        document.querySelector("#nom-error").innerHTML = "";

    } else {
        nom.style.border = "1px solid red"
        document.querySelector("#nom-error").innerHTML = " espace vide : vous devez enter votre nom";

    }
    let prenom = document.querySelector("#prenom");
    if ((prenom.value.length < 3) && (prenom.value.length > 0)) {
        prenom.style.border = "1px solid red"
        document.querySelector("#prenom-error").innerHTML = "le nom doit contenir au moins 3 lettres";
    } else if (nom.value.length >= 3) {
        prenom.style.border = "1px solid black"
        document.querySelector("#prenom-error").innerHTML = "";

    } else {
        prenom.style.border = "1px solid red"
        document.querySelector("#prenom-error").innerHTML = " espace vide : vous devez enter votre prenom";

    }
    let mail=document.querySelector("#email")
    let email = String(document.querySelector("#email").value)
    let s = email.indexOf(".com");
    if (email.length == 0) {
        document.querySelector("#email-error1").innerHTML = "espace vide : vous devez enter votre email"
        mail.style.border = "1px solid red"
    }
    else {
        let x = 0
        for (let i = 0; i < email.length; i++) {
            if (email.charAt(i) != '@') {
                x = 1
            }
        }
        if (s == -1) {

            document.querySelector("#email-error1").innerHTML = " nom de domaine (.com) manquant  "
            mail.style.border = "1px solid red"
        }
         if (x = 1) {
            document.querySelector("#email-error2").innerHTML = " @ manquant :votre email doit contenir un @  "
            mail.style.border = "1px solid red"

        }
    }
    let number=document.querySelector("#phone")
    let num =String(document.querySelector("#phone").value)
    if (num.length == 0) {
        document.querySelector("#number-error").innerHTML = "espace vide : vous devez enter votre numero de telephone"
        number.style.border = "1px solid red"
    } else if ((num.length < 8)||(num.length > 8) ) {
        document.querySelector("#number-error").innerHTML = "votre numero de telephone doit contnir exactement 8 chiffres "
        number.style.border = "1px solid red"

    }
    let cin =document.querySelector("#cin")
    let numcin =String(document.querySelector("#cin").value)
    if (numcin.length == 0) {
        document.querySelector("#cin-error").innerHTML = "espace vide : vous devez enter votre numero cin"
        cin.style.border = "1px solid red"
    } else if ( ((numcin.length < 8)||(numcin.length > 8) )) {
        document.querySelector("#cin-error").innerHTML = "votre numero de cin doit contnir exactement 8 chiffres "
        cin.style.border = "1px solid red"

    }

    let genderchecked = document.querySelectorAll('input[name=sexe]')
    if ((genderchecked[0].checked!='false')&&(genderchecked[1].checked!='false')){
    document.querySelector("#gender-error").innerHTML="aucun boutton sélécté : cochez votre sexe"
    
    }




}



