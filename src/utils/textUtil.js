export const unicodeToChar = (text) => {
   return text.replace(/&#171;/g, '“')
              .replace(/&#187;/g,'”')
              .replace(/&#[\d]{3};/gi, 
                function (match) {
                      return String.fromCharCode(parseInt(match.replace(/&#/g, ''), 10));
              });
}