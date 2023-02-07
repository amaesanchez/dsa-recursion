/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }

  const nextWord = longest(words.slice(1));

  if (words[0].length > nextWord) {
    return words[0].length;
  } else {
    return nextWord;
  }
}

/** everyOther: return a string with every other letter. */
// how to do this with helper function -- something to store the string
function everyOther(str) {
  if (str.length === 0) {
    return "";
  }

  return str[0] + everyOther(str.split("").slice(2).join(""));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) {
    return false;
  }

  const nextWord = find(arr.slice(1), val);

  if (arr[0] === val || nextWord) {
    return true;
  } else {
    return false;
  }
}

// function find(arr, val) {
//   if (arr.length === 0) {
//     return false;
//   }

//   if (arr[0] === val) {
//     return true;
//   } else {
//     return find(arr.slice(1), val);
//   }
// }
//racecar
/** isPalindrome: checks whether a string is a palindrome or not. */
// TODO: i-- doesnt work as arg
function isPalindrome(str, out = "", i = str.length - 1) {
  if (str.length === 0) return true;

  if (i < 0) return out;

  out += isPalindrome(str, str[i], (i -= 1));

  if (out === "true") {
    return true;
  }
  if (out === "false") {
    return false;
  }

  if (str.length === out.length) {
    console.log("str out", str, out);
    return str === out;
  } else {
    return out;
  }
}
// isPalindrome("az");
/** revString: return a copy of a string, but in reverse. */

function revString(str, out = "", i = str.length - 1) {
  if (i < 0) return out;

  out += revString(str, str[i], (i -= 1));

  return out;
}
// revString("porcupine");

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) {
    return -1;
  }

  // const nextWord = findIndex(arr, val, i += 1);

  if (arr[i] === val) {
    console.log("if", i);
    return i;
  } else {
    console.log("else", i);
    const idx = findIndex(arr, val, (i += 1));
    console.log("else idx", idx);
    return idx;
  }
}
// let animals = ["duck", "giraffe", "donkey", "cat", "pony"];

// findIndex(animals, "cat");

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      gatherStrings(obj[key], arr);
    } else if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    }
  }
  return arr;
}
let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

gatherStrings(nestedObj);

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
