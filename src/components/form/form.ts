// language=hbs
const temp: any = `
<div class="form">
    <div class="form__title">{{ title }}</div>
    <form class="form__form" name="{{ name }}" id="{{ name }}" action="/">
        {{{ inputs }}}
        {{{ button }}}
        <a class="link form__link" href={{ url }}>{{ anchor }}</a>
    </form>
</div>` as string;

export default temp;
