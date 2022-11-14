const dropdowns = document.querySelectorAll('.dropdown');

for (const item of dropdowns) {
    const btn = item.querySelector('.dropdown__button');
    const content = item.querySelector('.dropdown__content');
    const itemPos = item.getBoundingClientRect().top;

    btn.addEventListener('click', () => {
        content.classList.toggle('show');

        const contentHeight = content.clientHeight;
        const offset = itemPos + contentHeight;

        if (offset > window.innerHeight) {
            content.classList.add('bottom');
        } else {
            content.classList.remove('bottom');
        }

    })
}