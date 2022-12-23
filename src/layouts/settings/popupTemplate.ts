// language=hbs
const temp: any = `<div id="{{ id }}" class="popup" data-open= {{ opened }} >
    
    <div class="popup__content">
        {{{ closeBtn }}}
        <div class="popup__title">{{ title }}</div>

        {{{ content }}}

    </div>
</div>` as string;

export default temp;
