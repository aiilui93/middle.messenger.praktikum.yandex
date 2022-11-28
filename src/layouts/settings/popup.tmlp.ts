// language=hbs
const temp: any = `<div id="{{ id }}">
    <div class="popup__content">
        <div class="popup__title">{{ title }}</div>

        {{{ content }}}

    </div>
</div>` as string;

export default temp;