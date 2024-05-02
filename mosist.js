function levenshteinSimilarity(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    
    if (len1 === 0 && len2 === 0) {
        return 1.0;
    }
    
    const distance = new Array(len1 + 1).fill(null).map(() => new Array(len2 + 1).fill(0));
    
    for (let i = 0; i <= len1; i++) {
        for (let j = 0; j <= len2; j++) {
            if (i === 0) {
                distance[i][j] = j;
            } else if (j === 0) {
                distance[i][j] = i;
            } else if (str1[i - 1] === str2[j - 1]) {
                distance[i][j] = distance[i - 1][j - 1];
            } else {
                distance[i][j] = 1 + Math.min(distance[i - 1][j], distance[i][j - 1], distance[i - 1][j - 1]);
            }
        }
    }
    
    const maxLen = Math.max(len1, len2);
    const similarity = (maxLen - distance[len1][len2]) / maxLen;
    return similarity;
}

function mosist(inputStr, arrayOfStrings) {
    let maxSimilarity = -1;
    let mostSimilar = null;
    
    for (const str of arrayOfStrings) {
        const similarity = levenshteinSimilarity(inputStr, str);
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            mostSimilar = str;
        }
    }
    
    return mostSimilar;
}

// Example usage:
const arrayOfStrings = ["apple", "banana", "orange", "grape"];
const inputStr = "appel";

// Finding the most similar string in the array
const mostSimilar = mosist(inputStr, arrayOfStrings);
console.log("Most similar string:", mostSimilar);

// Calculating the similarity between two strings
const similarity = levenshteinSimilarity(inputStr, "apple");
console.log("Similarity:", similarity);
