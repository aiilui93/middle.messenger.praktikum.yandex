// language=hbs
const temp: any = `<div class="profile">

    <div class="profile__avatar">
        <button class="popup-toggle" data-popup="#avatar">
            <span class="icon material-symbols-outlined">image</span>
        </button>
    </div>
        
    <div class="data">

        <form class="profile__data user disabled" 
        {{ profileForm }}
        name="{{#if profileForm }}{{ profileFormName }}{{/if}}" 
        action="/">

            {{{ data }}}

            {{#each data}}
                <div class="form__row">
                    {{{ this }}}
                </div>
            {{/each}}

            {{{ button_data }}}
            
        </form>

        <div class="profile__nav"> 

        {{{ link_buttons }}}

            {{#each link_buttons}}
                <div class="input">
                    {{{ this }}}
                </div>
            {{/each}}

        </div>
        
    </div>

    <div class="password hidden">

         <form class="profile__data password" 
         name="{{#if passForm }}{{ passFormName }}{{/if}}"
          action="/">

            {{{ fields_password }}}

            {{#each fields_password}}
                <div class="form__row">
                    {{{ this }}}
                </div>
            {{/each}}

            {{{ button_password }}}

        </form>

    </div>

</div>` as string;

export default temp;
