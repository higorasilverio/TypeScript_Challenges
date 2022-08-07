function clearString(dirtString: string): string {
  return dirtString.replace("%", "");
}

function fixStrings(start: string, end: string): string {
  const cleanStart: string = clearString(start);
  const firstLetter: string = cleanStart.charAt(0).toUpperCase();
  const restOfFirstPart: string = cleanStart.slice(1);
  const startPart: string = firstLetter + restOfFirstPart;

  const cleanEnd: string = clearString(end);
  const endPart: string = cleanEnd.split("").reverse().join("");

  return startPart + endPart;
}

console.log(fixStrings("java", "tpi%rcs")); //shold return 'Javascript'
console.log(fixStrings("c%ountry", "edis")); //shold return 'Countryside'
console.log(fixStrings("down", "nw%ot")); //shold return 'Downtown'
