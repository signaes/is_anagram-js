function isAnagram(a, b) {
  if (a.length != b.length) {
    return false;
  }

  const aMap = {};
  const bMap = {};

  for (let c of a) {
    aMap[c] = !!aMap[c] + 1;
  }

  for (let c of b) {
    if (!aMap[c]) {
      return false;
    } else {
      aMap[c] -= 1;
    }
  }

  return true;
}

console.log(`isAnagram('', '') ${isAnagram('', '')}`);
console.log(`isAnagram('aaz', 'zza') ${isAnagram('aaz', 'zza')}`);
console.log(`isAnagram('anagram', 'nagaram') ${isAnagram('anagram', 'nagaram')}`);
console.log(`isAnagram('rat', 'car') ${isAnagram('rat', 'car')}`);
console.log(`isAnagram('awesome', 'awesom') ${isAnagram('awesome', 'awesom')}`);
console.log(`isAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') ${isAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')}`);
console.log(`isAnagram('qwerty', 'qeywrt') ${isAnagram('qwerty', 'qeywrt')}`);
console.log(`isAnagram('texttwisttime', 'timetwisttext') ${isAnagram('texttwisttime', 'timetwisttext')}`);
