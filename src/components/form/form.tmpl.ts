// language=hbs
const temp: any = `
    <div class="form__title">{{ title }}</div>
    <form class="form__form" action="/">
        {{{ inputs }}}
        {{{ button }}}
        <a class="link form__link" href={{ url }}>{{ anchor }}</a>
    </form>
`;

export default temp;