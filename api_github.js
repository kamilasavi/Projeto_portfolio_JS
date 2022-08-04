// exibir_load(true);
// let produtos = [];

function renderiza_foto(foto){
    const img_foto = document.getElementById('foto');
    img_foto.src=`${foto}`;
};

function renderiza_name(name){
    const name_github = document.getElementById('name');
    name_github.innerText=`${name}`;
};

function renderiza_link(github){
    const link_github = document.getElementById('github');
    link_github.innerText=`${github}`;
    link_github.href=`${github}`;
};

function renderiza_repositorio(repositorio){
    const repositorio_link = document.getElementById('repositorio');
    let tabela = "<tr>";
    tabela += `<td><a href="${repositorio.html_url}">${repositorio.name}</a></td> `;
    tabela += `<td>${repositorio.description}</td>`;
    tabela += "</tr>";
    repositorio_link.innerHTML += tabela;
};

const headers = new Headers();
headers.append('Authorization', 'token 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');

fetch("https://api.github.com/users/kamilasavi", {headers:headers})
.then(response => response.json())
.then(data =>{
    // produtos = data;
    // exibirProdutos(produtos);
    console.log(data);
    renderiza_foto(data.avatar_url);
    renderiza_name(data.name);
    renderiza_link(data.html_url);
})

fetch("https://api.github.com/users/kamilasavi/repos", {headers:headers})
.then(response => response.json())
.then(data =>{
    console.log("repos",data);
    for (let repositorio of data){
        renderiza_repositorio(repositorio);
    }
})

.catch(error =>{//para status de erro
    console.error('algo deu errado na requisicao', error);
})
.finally((finalizar) =>{
    // exibir_load(false);
    console.warn('sempre cai aqui');
});
