module.exports = {
    crypt: function(text, key) {
        var crypto = require('crypto');
        
        key = crypto.createHash('md5').update(key).digest('hex');

         // Our output text
        var outText = '',
            textLen=text.length,
            i, j;
        
        // Iterate through each character
        for (i=0; i<text.length;) {
            for (j=0; (j<key.length && i<text.length); j++, i++) {
                outText += String.fromCharCode(text[i].charCodeAt(0) ^ key[j].charCodeAt(0));
            }
        }  
        
        return outText;
    }
}