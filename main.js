//Constructor

function Calculadora() {

    this.display = document.querySelector('.display');
    this.container = document.querySelector('.container');
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            console.log(el)
            if (el.classList.contains('btn-num')) this.addNumeroDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
            
        })
    }

    this.addNumeroDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();

    }

    this.clear = () => {  
        this.display.value = ''
    }

    this.del = () => {
        this.display.value = this.display.value.slice(0, - 1);
    }

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value)
            if (!conta){
                alert('Conta invalida');
            }else{
                this.display.value = conta;
            }
        }catch(e){
            alert('Conta invalida');
        }
        this.container.focus();
    }

    this.capturaEnter = () => {
        document.addEventListener('keypress', e=>{
            if(e.keyCode === 13){
                this.realizaConta();
                this.container.focus();
            } return;
            
        })

    }

    this.inicia = () => {
        this.display.focus();
        this.capturaCliques();
        this.capturaEnter();
        this.capturaTeclado();
    }
}

const calculadora = new Calculadora();
calculadora.inicia();
