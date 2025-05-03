const assert = require('assert');

describe('Google Page', () => {
    it('should have the correct title', async () => {
        await browser.url('https://www.google.com');
        const title = await browser.getTitle();
        console.log('Page title is: ' + title);
        assert.strictEqual(title, 'Google');
    });
});
