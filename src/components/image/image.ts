// language=hbs
const temp: any = `<img src="{{#if src}}{{ path }}{{ src }}{{else}}/static/img/pixel.png{{/if}}" 
alt="{{ title }}" 
title="{{ title }}">

` as string;

export default temp;
