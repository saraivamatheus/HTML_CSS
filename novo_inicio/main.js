const myimage = document.querySelector("img");

myimage.onclick = () => {
    const mysrc = myimage.getAttribute("src");
    if (mysrc ===  "/novo_inicio/imagens/zombie1.jpg"){
        myimage.setAttribute("src", "/novo_inicio/imagens/zombie2.jpg");
    } else{
        myimage.setAttribute("src", "/novo_inicio/imagens/zombie1.jpg");
    }
    
};

let myheading = document.querySelector("h2");
let mybutton = document.querySelector("button");

function nome(){
    const myname = prompt("Insira seu nome, por favor");
    localStorage.setItem("nome", )
}