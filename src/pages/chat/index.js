const dropdowns = document.querySelectorAll('.dropdown');

for (const item of dropdowns) {
    let btn = item.querySelector('.dropdown__button');
    let content = item.querySelector('.dropdown__content');
    let itemPos = item.getBoundingClientRect().top;

    btn.addEventListener('click', () => {
        content.classList.toggle('show');

        let contentHeight = content.clientHeight;
        let offset = itemPos + contentHeight;

        console.log(offset)
        console.log(window.innerHeight)

        if (offset > window.innerHeight) {
            content.classList.add('bottom');
        } else {
            content.classList.remove('bottom');
        }

    })
}