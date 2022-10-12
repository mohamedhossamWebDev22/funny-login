class login{
    constructor(emailIn, btn, passIn, showBtn, image){
        this.image = document.getElementById('image');
        
        this.emailIn = document.getElementById('inp1');

        this.passIn = document.getElementById('inp2');
        this.showBtn = document.getElementById('showBtn')

        this.btn = document.getElementById('btn')
    }

    email(){
        this.image.src = './imgs/img1.png';
    }

    pass(){
        this.image.src = './imgs/img3.png';
    }

    show(){
        if (canIseeIt){
            this.passIn.type = 'text';
            this.image.src = './imgs/img4.png';

            canIseeIt = false;
        }
        else{
            this.passIn.type= 'password';
            this.image.src = './imgs/img3.png';

            canIseeIt = true;
        }
    }

    loginB(){
        this.image.src = './imgs/img2.png'
    }
}

function key() {
    var ke = event.key;

    if (ke == "j" || ke == "J") {
        alert ("Does your name is Jemmy??");
    }
}


const loginObj = new login();

let canIseeIt = true;


loginObj.emailIn.onclick = function (){loginObj.email()};
loginObj.passIn.onclick = function (){loginObj.pass()};
loginObj.showBtn.onclick = function (){loginObj.show()};

loginObj.btn.onclick = function (){loginObj.loginB()};