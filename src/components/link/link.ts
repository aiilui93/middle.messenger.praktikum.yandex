// language=hbs
const temp: any = `<a class="link {{ class }}" href={{ symlink }}>
{{ anchor }}
{{#if icon}}
    <span class="icon button button-icon material-symbols-outlined">{{ icon }}</span>
{{/if}}
</a>` as string;

export default temp;
