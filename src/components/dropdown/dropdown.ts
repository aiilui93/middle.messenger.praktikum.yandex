// language=hbs
const temp: any = `
    <button class="dropdown__button"><span class="material-symbols-outlined">{{ class }}</span> </button>
    <div class="dropdown__content">
        {{{ add_user }}}
        {{{ remove_user }}}
        {{{ add_photo }}}
        {{{ add_file }}}
        {{{ add_location }}}
    </div>
` as string;

export default temp;
