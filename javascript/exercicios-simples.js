 //Javascript
        var humano = {
            nome:"Gabriel Rodrigues",
            peso:110,
            idade:21,
            humano:true,
            trabalhando:false
        };

        

        // var , let & const
        
       
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
       var i = "j";
       var element = skill.indexOf(i);
        function haveSkl(skill){
            

            if(element >= 0){
                    console.log(true);
                }
            else{
                console.log(false);
            }
        }
        haveSkl(element);

    

      var anosEstudo = 7;

      function experiencia(anos){
            switch(anos){
                case 0-1 :
                    console.log('iniciante');
                    break;
                case 2 :
                case 3 :        
                    console.log('intermediario');
                    break;
                case 4:
                case 5:
                case 6:
                    console.log('experiente');
                    break;
                case 7 :
                    console.log('mestre Jedi');
                    break;
                default:
                    console.log('opção inexistente');
                    break;                
            }
      }

      experiencia(anosEstudo);

       //document.getElementsByTagName('input')[0];
      //document.getElementsByClassName('nome')[0];
      //document.getElementById('nome');
      
      var inputElement = document.querySelector('input[name=nome]');
      var btnElement = document.querySelector('button[class=btn]');
    
      btnElement.onclick = function (){
          var text = inputElement.value;
          alert(text);
      }
      console.log(inputElement);