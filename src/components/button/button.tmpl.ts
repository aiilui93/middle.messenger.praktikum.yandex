// language=hbs
const temp: any = `<button class="button {{ class }}" type="submit">
{{#if icon}}
    <span class="icon material-symbols-outlined">{{ icon }}</span>
{{/if}}
{{ name }}
</button>` as string;

export default temp;