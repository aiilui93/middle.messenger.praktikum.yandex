// language=hbs
const temp: any = `<div class="feed">
<div class="feed__header">
    <div class="feed__links">
        {{{ createChat }}}
        {{{ link }}}
    </div>
    
    <form class="search">
        <div class="search__inner">
            <input type="search" class="search" id="chatSearch" name="search" placeholder="Поиск">
        </div>
    </form>

</div>
<div class="feed__body">
    {{{ chats }}}
</div>

{{{ popup }}}
</div> ` as string;

export default temp;
