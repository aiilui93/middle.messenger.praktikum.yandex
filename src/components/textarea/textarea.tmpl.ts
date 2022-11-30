// language=hbs
const temp: any = `<textarea name="{{ name }}" class="{{ class }}" id="{{ id }}"></textarea>
<span class="input__error {{ show_error }} ">{{ error }}</span>` as string;

export default temp;