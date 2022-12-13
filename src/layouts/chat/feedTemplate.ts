// language=hbs
const temp: any = `<div class="feed">
<div class="feed__header">
    <div class="feed__links">
        {{{ link }}}
    </div>
    
    <form class="search">
        <div class="search__inner">
            <input type="search" class="search" id="chatSearch" name="search" placeholder="Поиск">
        </div>
    </form>

</div>
<div class="feed__body">
    {{#each chats}}
        <div class="feed__item">
            <div class="feed__image">
                {{#if this.image}}
                    <img src="{{ this.image }}" alt="{{ this.image_alt }}"/>
                {{/if}}
            </div>
            <div class="feed__content">
                <div class="feed__info">
                    <div class="feed__name">{{ this.name }}</div>
                    <div class="feed__time">{{ this.time }}</div>
                </div>
                
                <div class="feed__text">
                    <div class="text">
                        {{#if this.author}}
                            <b>{{ this.author }}:</b>
                        {{/if}}
                        {{ this.last_message }}
                    </div>
                    {{#if this.unread}}
                        <div class="feed__unread">{{ this.unread }}</div>
                    {{/if}}
                </div>
            </div>
        </div>
    {{/each}}
</div>
</div> ` as string;

export default temp;
