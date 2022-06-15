//classe que vai receber as propriedades do objeto através do constructor.
class Validator {
    constructor() {
        this.validations = [
            'data-min-length', 
            'data-max-length',

        ]
    }
//iniciando a validaçao dos inputs
validate(form) {

    //resgata todas as validações e limpa as antigas    
    let currentValidations = document.querySelectorAll('form .error-validation');

    if(currentValidations.length > 0) {
      this.cleanValidations(currentValidations);
    }

    let inputs = form.getElementsByTagName('input');
   

    //HTMLCollection para array
    let inputsArray = [...inputs];

// loop nos inputs
inputsArray.forEach(function(input){
    // loop das validaçoes
    for(let i = 0; this.validations.length>i; i++) {
        if(input.getAttribute(this.validations[i]) !=null){
            //console.log('achou validações');
            // limpando a string para virar um método
            let method = this.validations[i].replace('data-','').replace('-','');

            //valor do input
            let value = input.getAttribute(this.validations[i]);

            //invocar o método
            this[method](input,value);
        
        }

    }  

}, this); 
}

minlength(input, minValue) {
    //console.log(input);
    //console.log(minValue);
    let inputlength = input.value.length;

    let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`; 

    if(inputlength < minValue){
        //console.log(errorMessage);
        this.printMessage(input,errorMessage);
    }


}
// método para imprimir mensagens de erro
printMessage(input, msg) {
  
    // checa os erros presentes no input
    let errorsQty = input.parentNode.querySelector('.error-validation');

    // imprimir erro só se não tiver erros
    if(errorsQty === null) {
      let template = document.querySelector('.error-validation').cloneNode(true);

      template.textContent = msg;
  
      let inputParent = input.parentNode;
  
      template.classList.remove('template');
  
      inputParent.appendChild(template);
    }

  }
  // remove todas as validações para fazer a checagem novamente
  cleanValidations(validations) {
    validations.forEach(el => el.remove());
  }

}
let form = document.getElementById("form-usuario");
let submit = document.getElementById("btnInsert");

let validator = new Validator();

// evento dispara valiçoes
submit.addEventListener('click', function(e){

    e.preventDefault();
    //console.log('funcionou');
    validator.validate(form);
})