
Lodijs library for dom manipulation

install : npm install lodijs 

example :


    var lodijs = new Lodijs();

    lodijs.pronto(function () {//inzio documento pronto

        lodijs.nascondi('mostra');


        lodijs.click('nascondi',function () {

            lodijs.del_class('testo');
            lodijs.nascondi('div_nascosto');
            lodijs.mostra('mostra');
            lodijs.nascondi('nascondi');

        });

        lodijs.click('mostra',function () {

            lodijs.mostra('div_nascosto');
            lodijs.mostra('nascondi');
            lodijs.nascondi('mostra');

        });

        lodijs.click('testo',function () {
            lodijs.add_class('testo','colore');
        });


    });//fine documento pronto

