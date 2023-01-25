// language=hbs
const temp: any = `
<div class="chat__header">
    <div class="chat__info">
        <div class="chat__image"></div>
        <div class="chat__name"> {{ selectedChatName }}</div>
    </div>  
    {{{ user_actions }}}
</div>

<div class="chat">
    <div class="chat__body">
        <div class="chat__plug">Выберите чат или создайте новый, нажав кнопку "Добавить чат"</div>
        <div class="chat__group">

            {{{ messageItems }}}
            
        </div>
    </div>
</div>

<div class="chat__add">
    {{{ attachments }}}

    <form action="#" name="new-message" class="new-message" method="post">
        {{{ textarea }}}
        {{{ button }}}
    </form>

</div>


{{{ addUserPopup }}}
{{{ removeUserPopup }}}
{{{ removeChatPopup }}}

` as string;

export default temp;
