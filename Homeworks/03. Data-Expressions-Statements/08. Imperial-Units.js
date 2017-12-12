function imperials(number) {

  let first = Math.floor(number/12);
  let left = number% 12;

  console.log(`${first}\'-${left}\"`)
}

imperials(36);
