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
    
    return 'Boa aula (funcionou???)';
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

/* adiconar mais um card */
/* botão exibir um alert('Alo!?') */
/* botão alterar a % da barra de progresso */