// language=hbs
const temp: any = `
<div class="form">
    <div class="form__title">{{ title }}</div>
    <form class="form__form" {{#if name}} name="{{ name }}" id="{{ name }}" {{/if}} >
        {{{ inputs }}}

        {{#if error}}
            <div class="error">{{ error }}</div>
        {{/if}}

        {{{ button }}}
        {{{ link }}}

    </form>
</div>` as string;

export default temp;
