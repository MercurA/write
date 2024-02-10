function formatText(ev: KeyboardEvent, formatedText: string, setText: any) {
  let newText = formatedText;
  if (ev.key) {
    if (ev.key === 'Shift' || ev.key === 'Meta') {
      return;
    }
    if (ev.key === 'Backspace') {
      newText = newText
        .split('')
        .slice(0, formatedText.length - 1)
        .join('');
    } else {
      newText += ev.key.toString();
    }
    setText(newText);
  }
}

export default formatText;
