export const cn = (
  ...classes: Array<string | number | false | null | undefined>
) => classes.filter(Boolean).join(' ');
