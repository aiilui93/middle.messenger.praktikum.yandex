// language=hbs
const temp: any = `<img src="{{#if src}}{{ path }}{{ src }}{{else}}/static/img/pixel.png{{/if}}" 
alt="{{ title }}" 
title="{{ title }}">
{{#if user_id }}
    <div class="user__id">User ID: {{ user_id }}</div>
{{/if}}


` as string;

export default temp;
