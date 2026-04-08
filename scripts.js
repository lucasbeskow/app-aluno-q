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
const btn = document.querySelector('.card__button')
btn.addEventListener('click', (event) => {
    alert('Alo!? Botão ' + event.target.textContent);
})


/* adicionar mais um card */

/* botão alterar a % da barra de progresso */