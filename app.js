class login{
    constructor(emailIn, passIn, showBtn, image){
        this.image = document.getElementById('image');
        
        this.emailIn = document.getElementById('inp1');

        this.passIn = document.getElementById('inp2');
        this.showBtn = document.getElementById('showBtn')
    }

    email(){
        this.image.src = './imgs/img1.png';
    }

    pass(){
        this.image.src = './imgs/img3.png';
    }

    show(){
        this.image.src = './imgs/img4.png';
    }
}

const loginObj = new login();

loginObj.emailIn.onclick = function (){loginObj.email()};
loginObj.passIn.onclick = function (){loginObj.pass()};
loginObj.showBtn.onclick = function (){loginObj.show()};