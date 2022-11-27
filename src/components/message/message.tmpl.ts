// language=hbs
const temp: any = `
<div class="message message--{{ position }} message--{{ status }}">
    <div class="message__content">
        {{#if image}}
            <img src="/static/img/{{ image }}" alt="{{ image_alt }}">
        {{/if}}

        {{#if text}}
            {{ text }}
        {{/if}}
    </div>
    <div class="message__time">{{ timeText }}</div>
</div>` as string;

export default temp;