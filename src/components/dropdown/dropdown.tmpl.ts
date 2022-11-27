// language=hbs
const temp: any = `
    <button class="dropdown__button"><span class="material-symbols-outlined">{{ class }}</span> </button>
    <div class="dropdown__content">
        {{#each items}}
            <button class="dropdown__item">
                <span class="icon material-symbols-outlined">{{ this.action }}</span> 
                {{ this.title }}
            </button>
        {{/each}}
    </div>
`;

export default temp;