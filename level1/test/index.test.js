const assert  = require('assert');

describe('Check comparison / exercise 1', () => {
    it('Value assertion compare', () => {
        let author = "Rodrigo Mady";
        let mentor = "Jorge Diaz";
        let strcompare = author == mentor;
        assert.ok(strcompare === false);
    });

    
    it('Just value compare', () => {
        let int = 1;
        let str = "1";
        let strcompare = int ==  str;
        assert.ok(strcompare === true);
    });

    it('Value and type compare', () => {
        let int = 1;
        let str = "1";
        let strcompare = int === str;
        assert.ok(strcompare === false);
    });
});
