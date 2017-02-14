
/*****************************************************************************\
 Javascript "Lodijs" library
 @version: 0.2.5 Pro 15-02-2017
 @author:  Alessandro Olivieri - http://www.alessandro-olivieri.com/
 \*****************************************************************************/



function lodi_libreria(elemento) {//inizio lodi_libreria

    if(elemento != null && elemento != "undefined"){
        this.selezionato = document.querySelector(elemento);
        

    }else{
        this.selezionato = null;
    }


}//fine metodo value


lodi_libreria.prototype.pronto = function (funzione) {//inizio funzione pronto

    if (document.readyState != 'loading'){
        funzione();
    } else {
        document.addEventListener('DOMContentLoaded', funzione);
    }


}//fine funzione pronto



lodi_libreria.prototype.click = function(funzione) {//inizio funzione click

    if(this.selezionato != null){
        this.selezionato.addEventListener("click",funzione);
    }else{
        return false;
    }

}//fine funzione click


lodi_libreria.prototype.valore = function (valore) {//inizio funzione valore

    if(this.selezionato != null) {

        if (valore != null && valore != "undefined") {
            this.selezionato.value = valore;
        } else {
            return this.selezionato.value;
        }

    }else{
        return false;
    }
}//fine funzione valore



lodi_libreria.prototype.svuota_valore = function () {//inizio funzione svuota_valore

    if(this.selezionato != null) {

        this.selezionato.value = "";

    }else{
        return false;
    }


}//fine funzione svuota_valore



lodi_libreria.prototype.appendi = function (html) {//inizio funzione appendi

    if(this.selezionato != null) {

        if(html.length > 0) {

            this.selezionato.innerHTML += html;
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }


}//fine funzione appendi


lodi_libreria.prototype.rimuovi = function () {//inizio funzione rimuovi

    if(this.selezionato != null) {

        this.selezionato.remove();
        return true;

    }else{
        return false;
    }


}//fine funzione rimuovi



lodi_libreria.prototype.svuota = function () {//inizio funzione svuota


    if(this.selezionato != null) {

        this.selezionato.innerHTML = "";
        return true;

    }else{
        return false;
    }


}//fine funzione svuota


lodi_libreria.prototype.dblclick = function(funzione) {//inizio funzione click

    if(this.selezionato != null){
        this.selezionato.addEventListener("dblclick",funzione);
    }else{
        return false;
    }

}//fine funzione click



lodi_libreria.prototype.rightclick = function(funzione) {//inizio funzione rightclick

    if(this.selezionato != null){
        this.selezionato.addEventListener("mousedown",function (event) {
            if(event.which == 3) {
                funzione();
            }else{
                return false;
            }
        });

    }else{
        return false;
    }

}//fine funzione rightclick



lodi_libreria.prototype.centroclick = function(funzione) {//inizio funzione centroclick

    if(this.selezionato != null){
        this.selezionato.addEventListener("mousedown",function (event) {
            if(event.which == 2) {
                funzione();
            }else{
                return false;
            }
        });

    }else{
        return false;
    }

}//fine funzione centroclick


lodi_libreria.prototype.add_class = function (classe) {//inizio funzione add_class

    if(this.selezionato != null) {

        if(classe.length > 0  ) {
            this.selezionato.className = classe;
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }


}//fine funzione add_class



lodi_libreria.prototype.del_class = function () {//inizio funzione del_class

    if(this.selezionato != null) {

        this.selezionato.className = "";
        return true;

    }else{
        return false;
    }

}//fine funzione del_class



lodi_libreria.prototype.minuscolo = function (stringa) {//inizio funzione minuscolo

    if(stringa.length > 0){

        var ritorno = stringa.toLowerCase();
        return ritorno;

    }else{
        return false;
    }


}//fine funzione minuscolo


lodi_libreria.prototype.maiuscolo = function (stringa) {//inizio funzione maiuscolo

    if(stringa.length > 0) {
        var ritorno = stringa.toUpperCase();
        return ritorno;
    }else{
        return false
    }

}//fine funzione maiuscolo


lodi_libreria.prototype.data_odierna = function () {//inizio funzione data_odierna

    var data = new Date();
    var giorno = data.getDate();
    var mese = data.getMonth()+1;
    var anno = data.getFullYear();

    var data_oggi = giorno + "/" + mese + "/" + anno;

    return data_oggi;

}//fine funzione data_odierna


lodi_libreria.prototype.nascondi = function () {//inizio funzione nascondi

    if(this.selezionato != null) {

        this.selezionato.style.display = "none";
        return true;

    }else{
        return false;
    }


}//fine funzione nascondi



lodi_libreria.prototype.mostra = function () {//inizio funzione mostra

    if(this.selezionato != null) {

        this.selezionato.style.display = "";

    }else{
        return false;
    }


}//fine funzione mostra


lodi_libreria.prototype.appendi_prima = function (stringa) {//inizio funzione appendi_prima

    if(this.selezionato != null) {

        if(stringa.length > 0){

            this.selezionato.insertAdjacentHTML("beforebegin",stringa);
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }

}//fine funzione appendi_prima


lodi_libreria.prototype.appendi_dopo = function (stringa) {//inizio funzione appendi_dopo

    if(this.selezionato != null) {

        if(stringa.length > 0){

            this.selezionato.insertAdjacentHTML("afterend",stringa);
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }


}//fine funzione appendi_dopo


lodi_libreria.prototype.clone = function () {//inizio funzione clone

    if(this.selezionato != null) {

        return this.selezionato.cloneNode(true);

    }else{
        return false;
    }


}//fine funzione clone


lodi_libreria.prototype.attr = function (attributo) {//inizio funzione attr

    if(this.selezionato != null){

        if(attributo.length > 0){

            this.selezionato.getAttribute(attributo);
            return true;

        }else{
            return false;
        }

    }else{

        return false;
    }


}//fine funzione attr



lodi_libreria.prototype.testo = function (testo) {//inizio funzuione testo

    if(this.selezionato != null){

        if(testo.length > 0 ){

            this.selezionato.textContent(testo);

        }else{
            return false;
        }

    }else{
        return false;
    }


}//fine funzione testo


lodi_libreria.prototype.rimpiazza = function (stringa) {//inizio funzione rimpiazza

    if(this.selezionato > 0){

        if(stringa.length > 0){

            this.selezionato.outerHTML = stringa;

        }else{
            return false;
        }


    }else{
        return false;
    }



}//fine funzione rimpiazza


lodi_libreria.prototype.operazioni = function (valore) {//inizio funzione operazioni

    if(valore.length > 0){

        var risultato = eval(valore);
        return risultato;

    }else{
        return false;
    }


}//fine funzione operazioni


lodi_libreria.prototype.mouseover = function (funzione) {//inizio funzione mouseover

    if(this.selezionato != null){

        this.selezionato.addEventListener("mouseover",funzione,false);

    }else{
        return false;
    }



}//fine funzione mouseover


lodi_libreria.prototype.mouseout = function (funzione) {//inizio funzione mouseout

    if(this.selezionato != null){

        this.selezionato.addEventListener("mouseout",funzione,false);

    }else{
        return false;
    }


}//fine funzione mouseout


lodi_libreria.prototype.secondi = function (secondi,funzione) {//inizio funzione secondi

    secondi = secondi + "000";

    setTimeout(funzione,secondi);


}//fine funzione secondi


lodi_libreria.prototype.cicloIntervallo = function (Nciclo,secondi,funzione) {//inizio funzione cicloIntervallo

    secondi = secondi + "000";

    var ciclo = 0;

    var clock = setInterval(function () {
        funzione();
        ciclo++;

        if(ciclo == Nciclo){
            clearInterval(clock);
        }

    },secondi)


}//fine funzione cicloIntervallo









/*METODO POST , PRIMO PARAMETRO URL SERVER , SECONDO PARAMETRO OPZIONALE DATI RICHIESTA*/
lodi_libreria.prototype.post = function (url,data){
    return new Promise(function (succed,fail) {
        var req = new XMLHttpRequest();
        req.open("POST",url,true);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        req.addEventListener("load",function () {
            if(req.status < 400){
                succed(req.responseText);
            }else{
                fail(new Error("Request failed: "+req.responseText));
            }
        });
        req.addEventListener("error",function () {
            fail(new Error("netweork error"));
        });


        if(data != null) {
            parametri = "";
            for (var i in data) {
                parametri += i + "=" + data[i] + "&";
            }
        }else{
            parametri = null;
        }
        req.send(parametri);
    });

}//fine post | esempio utilizzo : post("server.php",{nome:nome,cognome:cognome}).then(function (testo) {
//alert(testo);




/*METODO GET , PRIMO PARAMETRO URL SERVER , SECONDO PARAMETRO OPZIONALE DATI RICHIESTA*/
lodi_libreria.prototype.get = function (url,data) {
    return new Promise(function (succed,fail) {
        if(data != null) {
            parametri = "";
            for (var i in data) {
                parametri += i + "=" + data[i] + "&";
            }
            var url_richiesta = url+"?"+parametri;
        }else{
            parametri = null;
        }
        var req = new XMLHttpRequest();
        req.open("GET",url_richiesta,true);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        req.addEventListener("load",function () {
            if(req.status < 400){
                succed(req.responseText);
            }else{
                fail(new Error("Request failed: "+req.responseText));
            }
        });
        req.addEventListener("error",function () {
            fail(new Error("netweork error"));
        });
        req.send();
    });
};





/***************** INSTANZA LODI *****************/

var lodi = function lodi(parametro) {//inizio instanza lodi
    var oggetto = new lodi_libreria(parametro);
    return oggetto;
}//fine instanza lodi
