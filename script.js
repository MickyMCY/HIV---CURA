const SECONDS_TO_SHOW = 15;

document.onkeydown = function(e) {
    if (e.keyCode == 123 ||
        (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) ||
        (e.ctrlKey && e.keyCode == 85)) {
        return false;
    }
};

setTimeout(() => {
    const btn = document.getElementById('cta-btn');
    if(btn) btn.style.display = 'inline-block';
}, SECONDS_TO_SHOW * 1000);

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;

        document.querySelectorAll('.faq-item').forEach(el => {
            if(el !== parent){
                el.classList.remove('active');
                el.querySelector('.icon').innerText = '+';
            }
        });

        parent.classList.toggle('active');

        const icon = parent.querySelector('.icon');
        icon.innerText = parent.classList.contains('active') ? '−' : '+';
    });
});
