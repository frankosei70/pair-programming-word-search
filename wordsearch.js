const wordSearch = (letters, word) => {
    if (letters.length === 0) {
      return false; // Return false for empty matrix
    }
  
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
      if (l.includes(word)) {
        return true; // Return true for horizontal word search
      }
    }
  
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (const l of verticalJoin) {
      if (l.includes(word)) {
        return true; // Return true for vertical word search
      }
    }
  
    return false;
  }
  
  
  const transpose = matrix => matrix[0].map((_, i) => matrix.map(row => row[i]));
  
  

module.exports = wordSearch