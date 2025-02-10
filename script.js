function firstWord(s) {
  // your code here
s = s.trim();
    const spaceIndex = s.indexOf(" ");

    // If no space is found, return the entire string
    return spaceIndex === -1 ? s : s.slice(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));;
