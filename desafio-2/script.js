function desafio(){
   var nome =  window.prompt('qual seu nome?')
   
   var idade = window.prompt('Olá, '+nome+"! quantos anos voce tem?")
   if(idade <= 0){
    alert('idade invalida')
   }else{
       window.alert('acabei de conhecer '+nome+', que tem '+idade+ ' anos de idade')

   }

}