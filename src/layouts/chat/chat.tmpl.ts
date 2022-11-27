// language=hbs
const temp: any = `<div class="chat">
<div class="chat__header">
    <div class="chat__info">
        <div class="chat__image"></div>
        <div class="chat__name">Вадим</div>
    </div>  
    {{{ user_actions }}}
</div>
<div class="chat__body">
   
    <div class="chat__group">
        {{{ messages }}}
    </div>
    
</div>
<div class="chat__add">
    {{{ attachments }}}
    <form action="#" name="new-message" class="new-message" method="post">
        <textarea name="message" class="new-message__field" id="message"></textarea>
        <button class="button button-round button-icon new-message__send">
            <span class="icon material-symbols-outlined">send</span>
        </button>
    </form>
</div>

</div>` as string;

//{{>message position=this.position content=this.content type=this.type time=this.time}}

export default temp;