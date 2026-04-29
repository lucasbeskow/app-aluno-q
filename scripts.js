const pessoa = {
    nome: 'Paulo',
    idade: 33,
    cidade: 'Criciúma'
}

function getMsg(){
    const hora = new Date().getHours();

    if (hora < 12) {
        return 'Bom dia';
    } 
    
    if (hora < 18) {
        return 'Boa tarde';
    } 
    
    return 'Boa aula';
}

const greeting = document.getElementById('greeting');
greeting.textContent = `${getMsg()}, ${pessoa.nome}`;

moment.locale('pt-br');
const dataHoje = document.getElementById('dataHoje');
dataHoje.textContent = moment().format('D [de] MMMM [de] YYYY (hh:mm:ss a)');




//tarefa vence daqui 5 dias
const dataVencimento = moment().add(5, 'days');

//tarefa venceu a 5 dias
//const dataVencimento = moment().subtract(5, 'days');

//calcula diferença entre hoje e o vencimento
const diasRestantes = dataVencimento.diff(moment(), 'days');
const vencido = diasRestantes < 0;

//aplique a logica aqui
//mostrar quando dias esta vencido ou falta para vencer
//dica: .fromNow()  /  https://momentjs.com/




/* Banners indicadores (Fácil) */
const indicadores = {
    tempo: '18h 45m',
    tarefas: 5,
    chats: 16
}

const cards = document.querySelectorAll('.card__group .card__title');
for (i=0; i<cards.length; i++){
    cards[i].textContent = indicadores[cards[i].id];
}


/* Aulas conluídas (Médio) */
const aulas = {
    front: 46,
    design: 82
}

const progress = document.querySelectorAll('.card__progress div');

progress[0].textContent = aulas.front + '%';
progress[0].style.width = aulas.front + '%';

progress[1].textContent = aulas.design + '%';
progress[1].style.width = aulas.design + '%';


/* botão exibir um alert('Alo!?') */
// const btn = document.querySelector('.card__button')
// btn.addEventListener('click', (event) => {
//     alert('Alo!? Botão ' + event.target.textContent + 'foi clicado');
// })

/* botão alterar a % da barra de progresso */
const disciplinas = document.querySelectorAll('.dashboard__container > .card')

for (const d of disciplinas) {
    const btn = d.querySelector('.card__button');
    const progress = d.querySelector('.card__progress div')
    btn.addEventListener('click', (event) => {
        progress.textContent = 100 + '%';
        progress.style.width = 100 + '%';
    })
}



/* adicionar mais um card */

const modelo = document.querySelector('.card__group .card')
const novo = modelo.cloneNode(true);

const titulo = novo.querySelector('.card__badge');
const texto = novo.querySelector('.card__title')
titulo.textContent = 'Novo card';
texto.id = 'novo';
texto.textContent = '99';

const group = document.querySelector('.card__group');
group.appendChild(novo);


/*
 fetch API
*/

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(resposta => {
    return resposta.json();
})
.then(dados => {
    console.log(dados)
})
.catch(error => {
    console.log('Ocorreu um erro: ', error)
})



/*
 Async/Await
*/

const url = 'https://jsonplaceholder.typicode.com/posts/1';

async function buscarDados() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    console.log(dados);
}

buscarDados();

async function buscarTitle() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados.title;
}

buscarTitle().then(title => {
    console.log(title)
});



// Notification
// Verifica se o navegador suporta a API de Notificação
// if ("Notification" in window) {
//   // Solicita permissão ao usuário para enviar notificações
//   Notification.requestPermission().then(permission => {
//     if (permission === "granted") {
//       // Se a permissão for concedida, cria uma nova notificação
//       const notificacao = new Notification("Título da Notificação", {
//         body: "Esta é a mensagem da notificação.",
//         icon: "https://placehold.co/64x64/0056b3/ffffff?text=JS"
//       });
      
//       // Adiciona um evento de clique à notificação
//       notificacao.onclick = () => {
//         console.log("A notificação foi clicada!");
//       };
//     } else {
//       console.log("Permissão para notificações negada.");
//     }
//   });
// } else {
//   console.log("Este navegador não suporta a API de Notificação.");
// }
