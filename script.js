// CONFIGURAÇÃO: Tempo em segundos para mostrar o botão
const SECONDS_TO_SHOW = 5; 

// Proteções contra devtools e teclas indesejadas
document.onkeydown = function(e) {
    if (e.keyCode == 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || 
        (e.ctrlKey && e.keyCode == 85)) {
        return false;
    }
};

// Delay para mostrar o botão CTA
setTimeout(() => {
    const btn = document.getElementById('cta-btn');
    if(btn) btn.style.display = 'inline-block';
}, SECONDS_TO_SHOW * 1000);

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const span = item.querySelector('span');
        if (answer.style.display === "block") {
            answer.style.display = "none";
            span.innerText = "+";
        } else {
            answer.style.display = "block";
            span.innerText = "-";
        }
    });
});

// Analytics básico
window.onload = () => {
    fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventType: 'view', details: 'página carregada' })
    }).catch(() => {});
};

document.getElementById('cta-btn')?.addEventListener('click', () => {
    fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventType: 'click', details: 'CTA clicado' })
    }).catch(() => {});
    // window.location.href = "SEU_LINK_AQUI";
});

/* INSTRUÇÃO VTURB
Replit, aqui vai o plano pro VTurb:
1. Inserir iframe ou script do VTurb dentro do #vid_placeholder.
2. Impedir downloads ou gravações simples.
3. Proteções: overlay invisível, bloqueio de clique direito e seleção.
4. Responsivo para mobile e desktop.
*/
