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
        {{{ textarea }}}
        {{{ button }}}
    </form>

</div>

</div>` as string;

export default temp;