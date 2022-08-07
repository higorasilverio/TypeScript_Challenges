function findNeedle(needle: string, haystack: string) {
  const needleLength: number = needle?.length;
  const haystackLength: number = haystack?.length;
  if (!needleLength || !haystackLength || needleLength > haystackLength)
    return { foundAt: [] };

  const possibilityArray: string[] = [];
  const limiter: number = haystackLength - needleLength;
  for (let index = 0; index <= limiter; index++) {
    const size: number = index + needleLength;
    const newPossibily: string = haystack.slice(index, size);
    possibilityArray.push(newPossibily);
  }

  const positionsArray: (number | null)[] = possibilityArray
    .map((possibility, index) => (possibility === needle ? index : null))
    .filter((index) => index !== null);

  return { foundAt: positionsArray };
}

console.log(findNeedle("le", "parallelepiped"));
