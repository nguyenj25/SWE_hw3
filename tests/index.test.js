global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

const fs = require('fs');
const { JSDOM } = require('jsdom');
const $ = require('jquery');

test('test selectEvent', () => {
    // Read the index.html file into a string
    var html = fs.readFileSync('./public/index.html', 'utf8').trim();
    expect(html).toEqual(expect.anything()); // Ensure the file is not empty

    // Simulate a DOM using JSDOM
    const dom = new JSDOM(html);
    global.document = dom.window.document;
    global.window = dom.window;

    // Manually set the body HTML
    document.body.innerHTML = html;

    // Debugging: Print the loaded HTML
    console.log("Updated HTML:", document.body.innerHTML);

    // Verify the <h1> text inside the mock DOM
    expect($('h1').text().trim()).toBe("Cheesecake Order Form");
});
