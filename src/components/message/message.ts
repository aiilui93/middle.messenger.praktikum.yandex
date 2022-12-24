// language=hbs
const temp: any = `
<div class="message message--{{#if isMine}}right{{/if}} message--read">
    <div class="message__content">
        {{#if file}}
            <img src="/static/img/{{ file.path }}" alt="{{ file.filename }}">
        {{/if}}

        {{#if content }}
            {{ content }}
        {{/if}}
    </div>
    <div class="message__time">{{ timeText }}</div>
</div>` as string;

export default temp;
