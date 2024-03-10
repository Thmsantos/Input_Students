function openModal(mn){
    let modal = document.getElementById(mn);

    if(typeof modal == 'undefined' || modal === null)
    return;

    modal.style.display ='block';
    document.body.style.overflow = 'hidden';

}

function closeModal(mn){
    let modal = document.getElementById(mn);

    if(typeof modal == 'undefined' || modal === null)
    return;

    modal.style.display ='none';
}

function salvarDados(oportunidadesId, eventosId, secretariaId) {
    console.log("Função salvarDados chamada!");
    let Oportunidades = document.getElementById('title1Input').value;
    let Eventos = document.getElementById('title2Input').value;
    let Secretaria = document.getElementById('title3Input').value;

    let oportunidadesElement = document.getElementById(oportunidadesId);
    let eventosElement = document.getElementById(eventosId);
    let secretariaElement = document.getElementById(secretariaId);

    // Atualiza o conteúdo dos elementos com os novos valores
    oportunidadesElement.innerText = Oportunidades;
    eventosElement.innerText = Eventos;
    secretariaElement.innerText = Secretaria;

    closeModal('dv-modal');

}

function verificarSenha(){
    let senhaInput = document.getElementById('senhaInput').value;

    const senhaAdm = "is123"
    if(senhaInput == senhaAdm){
        editarDados();
    } else{
        alert("Senha incorreta!")
    }
}

function verificarSenha1(){
    let senhaInput = document.getElementById('senhaInput').value;

    const senhaAdm = "is123"
    if(senhaInput == senhaAdm){
        adicDados();
    } else{
        alert("Senha incorreta!")
    }
}

function verificarSenha2(){
    let senhaInput = document.getElementById('senhaInput').value;

    const senhaAdm = "is123"
    if(senhaInput == senhaAdm){
        removeDados();
    } else{
        alert("Senha incorreta!")
    }
}


function editarDados(){
    console.log("Função editarDados chamada!");
    closeModal('dv-modal1');
    openModal('dv-modal');
}

function adicDados(){
    console.log("Função adicDados chamada!");
    closeModal('dv-modal1');
    openModal('dv-modal-adc')
}

function removeDados(){
    console.log("Função removeDados chamada!");
    closeModal('dv-modal1');
    openModal('dv-modal-rem')
}
//função redirecionar para o Perfil


function redirecionarPerfil(){
    var URL= '../Perfil/perfil.html';
    window.location.href=(URL);
}
  
  //função redirecionar para o Mural
  
function redirecionarMural(){
    var URL = "../MuralDeAvisosAdm/MuralDeAvisosADM.html";
    window.location.href = URL;
}

//função redirecionar para o Blog
  
function redirecionarBlog(){
    var URL = "../BlogAluno1/paginaBlog.html"
    window.location.href = (URL);
}



