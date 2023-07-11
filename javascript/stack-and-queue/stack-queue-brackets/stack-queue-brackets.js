function validateBrackets(str) {
  const stack = [];
  const opBr = "([{";
  const clBr = ")]}";

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];

    if (opBr.includes(bracket)) {
      stack.push(bracket);
    } else if (clBr.includes(bracket)) {
      if (stack.length === 0) {
        return false;
      }

      const correspondingOpeningBracket = opBr[clBr.indexOf(bracket)];
      if (stack.pop() !== correspondingOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
