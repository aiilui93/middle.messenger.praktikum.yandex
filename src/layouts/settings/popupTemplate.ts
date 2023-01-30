// language=hbs
const temp: any = `<div id="{{ id }}" class="popup" data-open= {{ opened }} >
    
    <div class="popup__content">
        {{{ closeBtn }}}
        <div class="popup__title">{{ title }}</div>
        {{#if chatName }}
            <div class="remove-chat-name">{{ chatName }}</div>
        {{/if}}

        {{{ content }}}

    </div>
</div>` as string;

export default temp;
