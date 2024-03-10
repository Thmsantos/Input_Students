// Função para abrir o modal de edição de perfil
function openEditModal() {
  document.getElementById('edit-modal').style.display = 'block';
}

// Função para fechar o modal de edição de perfil
function closeEditModal() {
document.getElementById('edit-modal').style.display = 'none';
}

// Função para atualizar o perfil
function updateProfile() {
const coverPhotoFile = document.getElementById('cover-photo-file').files[0];
const profilePhotoFile = document.getElementById('profile-photo-file').files[0];
const userName = document.getElementById('user-name-input').value;
const userDescription = document.getElementById('user-description-input').value;
const userSobre = document.getElementById('sobre').value;
const linkPort = document.getElementById('link-portfolio').value;

if (coverPhotoFile) {
  const coverPhotoURL = URL.createObjectURL(coverPhotoFile);
  document.getElementById('ft-capa').src = coverPhotoURL;
}

if (profilePhotoFile) {
  const profilePhotoURL = URL.createObjectURL(profilePhotoFile);
  document.getElementById('foto').src = profilePhotoURL;
}

document.getElementById('user-name').textContent = userName;

document.getElementById('user-description').textContent = userDescription;

document.getElementById('sobre-vc').textContent= userSobre;

document.getElementById('link-port').textContent= linkPort;


closeEditModal();
}


// Função para abrir o modal de adição de projetos
function openAddProjetos() {
document.getElementById('add-projetos').style.display = 'block';
}

// Função para fechar o modal de adição de projetos
function closeEditProjeto() {
document.getElementById('add-projetos').style.display = 'none';
}

// Função para atualizar informações do projeto
function updateProjeto() {
const nomeProjeto = document.getElementById('nome-projeto').value;
const descriProjeto = document.getElementById('descri-projeto').value;
const linkProjeto = document.getElementById('link-projeto').value;
const coverProjeto = document.getElementById('foto-projeto').files[0];

if (coverProjeto) {
  const coverProjetoURL = URL.createObjectURL(coverProjeto);
  document.getElementById('img').src = coverProjetoURL;
}

document.getElementById('nome').textContent = nomeProjeto;
document.getElementById('descricao').textContent = descriProjeto;
document.getElementById('btn-vermais').value = linkProjeto;

closeEditProjeto();
}

function abrirLink(){
  const linkProjeto = document.getElementById('link-projeto').value;
  window.open(linkProjeto, '_blank');
  
}

// GUIA
document.addEventListener('DOMContentLoaded', function() {
  const guias = document.querySelectorAll('.guia');
  const conteudos = document.querySelectorAll('#projetos, #salvos');

  guias.forEach((guia, index) => {
      guia.addEventListener('click', function() {
          guias.forEach(g => g.classList.remove('ativa'));
          conteudos.forEach(c => c.style.display = 'none');

          guia.classList.add('ativa');
          conteudos[index].style.display = 'block';
      });
  });
});

//função redirecionar para o Perfil

function redirecionarPerfil(){
  var URL= "/Perfil/perfil.html";
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


