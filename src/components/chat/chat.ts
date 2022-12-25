// language=hbs
const temp: any = `
<div class="feed__item {{#if selected}} selected{{/if}}" chat-id="{{chatId}}">
    <div class="feed__image">
        {{#if last_message.user.avatar}}
            <img loading="lazy" src="https://ya-praktikum.tech/api/v2/resources{{ last_message.user.avatar }}" alt="{{ title }} image"/>
        {{/if}}
    </div>
    <div class="feed__content">
        <div class="feed__info">
            <div class="feed__name">{{ title }}</div>
            <div class="feed__time">{{ last_message.timeText }}</div>
        </div>
        
        <div class="feed__text">
            <div class="text">
                {{#if last_message}}

                    {{#if last_message.displayName}} 
                        <b>{{ last_message.displayName }}:</b>
                    {{else}}
                        <b>{{ last_message.user.first_name }} {{ last_message.user.second_name }}:</b>
                    {{/if}}

                    {{ last_message.content }}

                {{/if}}
            </div>
            {{#if unread_count}}
                <div class="feed__unread">{{ unread_count }}</div>
            {{/if}}
        </div>
    </div>
</div>` as string;

export default temp;
