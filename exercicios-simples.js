 //Javascript
        var humano = {
            nome:"Gabriel Rodrigues",
            peso:110,
            idade:21,
            humano:true,
            trabalhando:false
        };

        
       
        // operações matemáticas com javascript

        /* 
            Soma com string, é concatenado o valor, 
            por exemplo: a = "10" , y = 5;

            quando der o console.log(a+y); O resultado
            obtido será: 105
            ao invés do resultado esperado que seria:
            15

        
        
        */

        a = "10", y = 5;

        console.log(a+y);

        // conta normal 
        a = 10, y =5;
        console.log(a+y);


        // desafio 

        var endereco = {
            rua:"Rua dos pinheiros",
            numero:1293,
            bairro:"centro",
            cidade: "São Paulo",
            uf:"SP"
        };

        var e = endereco;

        console.log("o usuario mora em "+ e.cidade +"/"+e.uf+ ", no bairro "+ e.bairro+", na "+e.rua+", no n°: "+e.numero);

        function pares(x,y){
           
                for(x; x < y;x++){
                    if(x % 2 == 0)
                         console.log(x);
                
                }
        }

        pares(32,321)

       var skill = ["javascript","NodeJs","ReactJS","React-native"];
       element = "js";
        function haveSkl(skill){
            element = skill.indexOf(element);
            if(element === skill.indexOf(element))
                console.log(true);
            else
                console.log(false);

        }
        haveSkl(element);