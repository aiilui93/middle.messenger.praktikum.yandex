// language=hbs
const temp: any = `<div class="profile">

    <div class="profile__avatar">
        
        {{#if avatar}}
            {{{ avatar }}}
        {{/if}}

        {{{ popupBtn }}}

    </div>
        
    <div class="data">

        <form class="profile__data user disabled" name="profileForm">

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

         <form class="profile__data password" name="passForm">

            {{{ fields_password }}}

            {{#each fields_password}}
                <div class="form__row">
                    {{{ this }}}
                </div>
            {{/each}}

            {{{ button_password }}}

        </form>

    </div>

    <div class="errors"> {{ errors }} </div>
    
</div>

{{{ popup }}}
` as string;

export default temp;
