export const classes = (...args: (string | undefined | null | false | 0)[]) => {
  const arr: string[] = [];
  args.forEach(arg => (arg ? arr.push(arg) : null));
  return arr.join(' ');
};
