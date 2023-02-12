module.exports = function check(str, bracketsConfig) {
  let string = str;
    for (i = string.length; i >= 0; i--) {
      
        for (l = 0; l < bracketsConfig.length; l++) {
            const bracketsPair = bracketsConfig[l].join('');
            if (string.includes(bracketsPair)) {
                string = string.replace(bracketsPair, '');
            }
           
        }
    }
    return string ? false : true;
}
