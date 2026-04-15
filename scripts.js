const pessoa = {
    nome: ' Paulo',
    idade: 33,
    cidade: 'Criciúma'
}

function getMsg(){
    const hora = new Date().getHours();
    if (hora<12){
        return 'Bom dia';
    }

    if (hora<18){
        return 'Boa tarde';
    }

    return 'Boa aula';
}

const greeting = document.getElementById('greeting')
greeting.textContent=`${getMsg()},${pessoa.nome}`;

/* 
BANNERS INDICADORES (FÁCIL)
*/

const INDICADORES = {
    tempo: '18h 45m',
    tarefas: 5,
    chats: 16
}

/* COMO EU FIZ

const cards = document.getElementById('semana')
cards.textContent= `${INDICADORES.tempo}`;

const cards01 = document.getElementById('pendente')
cards01.textContent= `${INDICADORES.tarefas}`;

const cards02 = document.getElementById('discussao')
cards02.textContent= `${INDICADORES.chats}`;

*/

const cards = document.querySelectorAll('.card__group .card__title')

for (i=0; i<cards.length; i++){
    cards[i].textContent=INDICADORES[cards[i].id];
}

/*aulas concluidas (médio) */
const aulas = {
    front: 46,
    design: 82
}

/* adicionar mais um card */
const modelo = document.querySelector('.card__group .card')
const novo = modelo.cloneNode(true)

const titulo = novo.querySelector('.card__badge')
const texto = novo.querySelector('.card__title')
titulo.textContent = 'Novo card';
texto.id='novo';
texto.textContent='99';

const group = document.querySelector('.card__group');
group.appendChild(novo);

/*botão alterar a % da barra de progresso */
const disciplinas = document.querySelectorAll('.dashboard__container > .card')

for ( const d of disciplinas){
    const btn = d.querySelector('.card__button');
    const progress = d.querySelector('.card__progress div')
    btn.addEventListener('click', (event) => {
    progress.textContent=100+'%';
    progress.style.width=100 + '%';
    })
}
