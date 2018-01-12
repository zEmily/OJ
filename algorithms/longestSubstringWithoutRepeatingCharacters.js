/**
 * Given a string, find the length of the longest substring without repeating characters.
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// solution 1...
function getLongestSubstring(s) {
    let length = s.length
    let substring = ''
    let maxSubstring = ''
    for (let i = 0; i < length; i++) {
        let letter = s.charAt(i)
        let index = substring.indexOf(letter)
        if (index > -1) {
            if (maxSubstring.length < substring.length) {
                maxSubstring = substring
            }
            substring = (substring + letter).substring(index+1)
            continue
        } else {
            substring += letter
        }
    }

    let max = maxSubstring.length > substring.length ? maxSubstring : substring
    return max.length
}


// Solution 2: Best
/**
 * @param {string} s
 * @return {number}
 */
var getLongestSubstring = function(s) {
    let map = Array(256).fill(-1),
        head = 0,
        len = 0

    for(let i = 0;i < s.length; i++) {
        let at = s[i].charCodeAt()
        let map_at = map[at]
        if ( map_at !== -1 ) {
            head = map_at > head ? map_at : head
        }
        let tm_len = i - head + 1
        len = len > tm_len ? len : tm_len
        map[at] = i + 1
    }

    return len
}

console.log(getLongestSubstring('dvdf'))
