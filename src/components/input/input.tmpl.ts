// language=hbs
const temp: any = `<div class="input">
    {{#if this.label }}
      <label for="{{ this.id }}">{{ this.label }}</label>
    {{/if}}
    <input class="input__field"
        id="{{ this.id }}" 
        name="{{ this.name }}" 
        type="{{ this.type }}"

        {{#if this.required}}
        required
        {{/if}}

        {{#if this.value}}
          value="{{ value }}"
        {{/if}}
        
    />
</div>` as string;

export default temp;