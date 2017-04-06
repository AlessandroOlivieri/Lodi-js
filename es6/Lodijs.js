
/*****************************************************************************\
 Javascript "Lodijs" library
 @version: 0.3.0 06-04-2017
 @author:  Alessandro Olivieri - http://www.alessandro-olivieri.com/
 \*****************************************************************************/
class Lodijs {//inizio classe Lodijs

    construct(){

    }


    pronto(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }

    }//fine pronto


    /*PRIMO ARGOMENTO elemento ELEMENTO , SECONDO ELEMENTO CODICE HTML DA AGGIUNGERE EQUIVALE A APPEND DI JQUERY */
    appendi(elemento,html){


        if(elemento.length > 0 && html.length > 0) {

            document.querySelector(elemento).innerHTML += html;
        }else{
            return false;
        }
        return true;

    }//fine metodo appendi


    /*ARGOMENTO elemento , ELIMINA ELEMENTO */
    rimuovi(elemento){
        if(elemento.length > 0 ){
            document.querySelector(elemento).remove();
        }else{
            return false;
        }
        return true;

    }//fine metodo rimuovi



    /*ARGOMENTO elemento ELEMENTO ,SVUOTA ELEMENTO , EQUIVALE A EMPTY DI JQUERY */
    svuota(elemento){

        if(elemento.length > 0 ){
            document.querySelector(elemento).innerHTML = "";
        }else{
            return false;
        }
        return true;
    }//fine metodo svuota


    /*ARGOMENTO : elemento ELEMENTO , ELIMINA IL CODICE VALUE  DELL'ELEMENTO , EQUIVALE A EMPTY VALORE DI JQUERY */
    svuota_valore(elemento){
        if(elemento.length > 0 ) {
            //   document.querySelector(elemento).innerHTML = null;
            document.querySelector(elemento).value = "";
        }else{
            return false;
        }
        return true;

    }//fine classe svuota

    /*ARGOMENTO :elemento ELEMENTO , SECONDO ARGOMENTO FUNZIONE CALLBACK , CLICK ELEMENTO EQUIVALE AL CLICK DI JQUERY*/
    click(elemento,funzione){
        if(elemento.length > 0 ) {
            document.querySelector(elemento).addEventListener("click", funzione);
            // document.querySelector(elemento).addEventListener("click", funzione); //prendi elementi come css
        }else{
            return false;
        }
        return true;

    }//fine metodo click



    /*ARGOMENTO :elemento ELEMENTO , SECONDO ARGOMENTO FUNZIONE CALLBACK , DBCLICK ELEMENTO EQUIVALE AL DBCLICK DI JQUERY*/
    dblclick(elemento,funzione){
        if(elemento.length > 0 ) {
            document.querySelector(elemento).addEventListener("dblclick", funzione);
        }else{
            return false;
        }
        return true;

    }//fine metodo click


    /*INIZIO BOTTONE DESTRO , PRIMO PARAMETRO elemento , SECONDO PARAMETRO FUNZIONE CALLBACK*/
    rightclick(elemento,funzione){
        if(elemento.length > 0){
            document.querySelector("bottone1").addEventListener("mousedown",function (event) {
                if(event.which == 3) {
                    funzione();
                }else{
                    return false;
                }
            });

        }else {
            return false;
        }
    }//fine bottone right


    /*INIZIO CENTRO CLICK , 1 PARAMETRO = elemento , SECONDO PARAMETRO FUNZIONE DI CALLBACK*/
    centroclick(elemento,funzione){
        if(elemento.length > 0){
            document.querySelector("bottone1").addEventListener("mousedown",function (event) {
                if(event.which == 2) {
                    funzione();
                }else{
                    return false;
                }
            });

        }else {
            return false;
        }
    }//fine bottone right



    /*ARGOMENTO : elemento ELEMENTO , SECONDO ARGOMENTO : NOME CLASSE , AGGIUNGE LA CLASSE COL NOME PASSATO COME SECONDO ARGOMENTO*/
    add_class(elemento,classe){
        if(elemento.length > 0 && classe.length > 0  ) {
            document.querySelector(elemento).className = classe;
        }else{
            return false;
        }
        return true;

    }//fine classe add_class


    /*ARGOMENTO elemento ELEMENTO , RIMUOVE CLASSE*/
    del_class(elemento){
        if(elemento.length > 0) {
            document.querySelector(elemento).className = "";
        }else{
            return false;
        }
        return true;
    }//fine classe del_class


    /*ARGOMENTO STRINGA , RITORNA STRINGA  PASSATA IN ARGOMENTO IN MINUSCOLO*/
    minuscolo(stringa){
        var ritorno = stringa.toLowerCase();
        return ritorno;
    }//fine metodo minuscolo



    /*ARGOMENTO STRINGA , RITORNA STRINGA PASSATA IN ARGOMENTO IN MAIUSCOLO*/
    maiuscolo(stringa){
        if(stringa.length > 0) {
            var ritorno = stringa.toUpperCase();
            return ritorno;
        }else{
            return false
        }
    }//fine metodo maiuscolo


    /*RITORNA DATA ODIERNA NEL FORMATO ITALIANO */
    data_odierna(){
        var data = new Date();
        var giorno = data.getDate();
        var mese = data.getMonth()+1;//gennaio ÃƒÂ¨ 0
        var anno = data.getFullYear();

        var data_oggi = giorno + "/" + mese + "/" + anno;

        return data_oggi;
    }//fine data_odierna


    /*PARAMENTRO elemento ELEMENTO NASCONDO ELEMENTO , EQUIVALE A HelementoE DI JQUERY*/
    nascondi(elemento){
        //   if(elemento.length > 0){

        document.querySelector(elemento).style.display = 'none';
        //  }else{
        return false;
        //   }
        //   return true;

    }//fine metodo nascondi


    /*PARAMETRO elemento ELEMENTO MOSTRA ELEMENTO , EQUIVALE A SHOW DI JQUERY*/
    mostra(elemento){
        if(elemento.length > 0){

            document.querySelector(elemento).style.display = '';
        }else{
            return false
        }
    }//fine metodo mostra


    /*PARAMETRO elemento ELEMENTO , SECONDO PARAMETRO STRINGA , INSERISCE PRIMA DELL'ELEMENTO LA STRINGA PASSATA COME PARAMETRO*/
    appendi_prima(elemento,stringa){
        if(elemento.length > 0 && stringa.length > 0){

            document.querySelector(elemento).insertAdjacentHTML("beforebegin",stringa);

        }else{
            return false;
        }

        return true;


    }//fine metodo appendi prima


    /*PARAMETRO elemento ELEMENTO , SECONDO PARAMETRO STRINGA , INSERISCE DOPO L'ELEMENTO LA STRINGA PASSATA COME PARAMETRO*/
    appendi_dopo(elemento,stringa){
        if(elemento.length > 0 && stringa.length > 0){
            document.querySelector(elemento).insertAdjacentHTML("afterend",stringa);
        }else{
            return false;
        }
        return true;

    }//fine metodo appendi dopo


    /*PARAMETRO elemento ELEMENTO , CLONA L'ELEMENTO , EQUIVALE ALLA FUNZIONE CLONE DI JQUERY*/
    clone(elemento){

        if(elemento.length > 0) {
            document.querySelector(elemento).cloneNode(true);
        }else{
            return false;
        }
        return true;


    }//fine metodo clone


    /*PARAMETRO elemento ELEMENTO , SECONDO PARAMETRO ATTRIBUTO , AGGIUNGE ATTRIBUTO ALL'ELEMENTO , EQUIVALE A ATTR DI JQUERY*/
    attr(elemento,attributo){
        if(elemento.length > 0 && attributo.length > 0){
            document.querySelector(elemento).getAttribute(attributo);
        }else{
            return false;
        }
        return true;

    }//fine metodo attr

    /*PARAMETRO elemento ELEMENTO , SECONDO PARAMETRO TESTO , AGGIUNGE TESTO NORMALE ALL'ELEMENTO , EQUIVALE A TEXT DI JQUERY*/
    testo(elemento,testo){
        if(elemento.length > 0 && testo > 0){
            document.querySelector(elemento).textContent(testo);
        }else{
            return false;
        }
        return true;
    }//fine metodo testo


    /*PARAMETRO elemento ELEMENTO , SECONDO PARAMETRO STRINGA DA RIMPIAZZARE , EQUIVALE A REPLACEWITH DI JQUERY*/
    rimpiazza(elemento,stringa){
        if(elemento.length > 0){

            document.querySelector(elemento).outerHTML = stringa;


        }else{
            return false;
        }

        return true;
    }//fine metodo rimpiazza


    /*PARAMETRO elemento ELEMENTO , RITORNA VALORE ELEMENTO EQUIVALE A VALUE DI JQUERY*/
    valore(elemento,valore){

        if(elemento.length > 0 && valore == null){

            //var valore =  document.querySelector(elemento).value;
            var valore =  document.querySelector(elemento).value;
            return valore;

        }
        else if(elemento.length > 0 && valore.length > 0){
            // document.querySelector(elemento).value = valore;
            document.querySelector(elemento).value = valore;
            return true;
        }
        else {
            return false;
        }
    }//fine metodo value


    /*ARGOMENTO ESPRESSIONE DA RISOLVERE , RITORNA RISULTATO ESPRESSIONE*/
    operazioni(valore){
        if(valore.length > 0) {
            var risultato = eval(valore);
            return risultato;
        }else{
            return false;
        }
    }//fine metodo operazioni


    //PRIMO PARAMETRO elemento ELEMENTO , SECONDO PARAMETRO FUNZIONE DI CALLBACK
    mouseover(elemento,funzione){

        var variabile = document.querySelector(elemento);
        variabile.addEventListener("mouseover",funzione,false);
    }//fine metodo mouseover


    /*PRIMO PARAMETRO elemento ELEMENTO , SECONDO PARAMETRO FUNZIONE DI CALLBACK*/
    mouseout(elemento,funzione){

        var variabile = document.querySelector(elemento);
        variabile.addEventListener("mouseout",funzione,false);

    }//fine metodo mouseout


    //PRIMO PARAMETRO SECONDI FUNZIONE , SECONDO PARAMETRO FUNZIONE DI CALLBACK
    secondi(secondi,funzione){

        secondi = secondi+"000";

        setTimeout(funzione,secondi);


    }//fine metodo secondi


    //PRIMO PARAMETRO NUMERO DI VOLTE IN CUI IL CICLO DEVE GIRARE , SECONDO PARAMETRO SECONDI DI ESECUZIONE PER OGNI RIPETIZIONE
    //TERZO PARAMETRO FUNZIONE DA ESEGUIRE N VOLTE
    cicloIntervallo(Nciclo,secondi,funzione){

        secondi = secondi + "000";

        var ciclo = 0;

        var clock = setInterval(function () {
            funzione();
            ciclo++;

            if(ciclo == Nciclo){
                clearInterval(clock);
            }

        },secondi);



    }//fine metodo cicloIntervallo





}//fine classe Lodi_libreria

/*METODO POST , PRIMO PARAMETRO URL SERVER , SECONDO PARAMETRO OPZIONALE DATI RICHIESTA*/
Lodijs.prototype.post = function (url,data){
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


//});


/*METODO GET , PRIMO PARAMETRO URL SERVER , SECONDO PARAMETRO OPZIONALE DATI RICHIESTA*/
Lodijs.prototype.get = function (url,data) {
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



