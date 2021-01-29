const textarea = document.getElementById('edit-area');
const head1 = document.getElementById('head-1');
const head2 = document.getElementById('head-2');
const italicButton = document.getElementById('italic');
const boldButton = document.getElementById('bold');
textarea.addEventListener('click', () => {
    textarea.classList.add('edit-area_active');
});
document.addEventListener('click', () => {
    textarea.classList.remove('edit-area_active');
}, true);

boldButton.addEventListener('click', handler);
italicButton.addEventListener('click', handler);
head1.addEventListener('click', handler);
head2.addEventListener('click', handler);

function handler(e) {
    const target = e.currentTarget;
    const className = target.dataset.target;
    if (window.getSelection().toString()) {
        const span = document.createElement('span');
        span.classList.add(className);
        span.innerText = window.getSelection();

        const fake = document.createElement("div");
        fake.appendChild(span);
        // По поводу xss атак, хоть и execCommand модифицирует дом, но воспроизвести xss атаку не удалось(при помощи скрипта или картинки)
        document.execCommand('insertHtml', false, fake.innerHTML);
    }
}