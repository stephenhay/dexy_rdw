var casper = require('casper').create();

casper.start();

/* 
 * If you run `dexy serve`, your mockup base URL will be here. 
 * If not, you can change it.
 */
var baseUrl = "http://localhost:8085"; 


/* Add or change breakpoints as necessary (these are in px) */
var breakpoints = [400, 600, 900, 1200];

/* Add the URLs you'd like to capture to this array. */
var links = [
    '', // an empty string means the home page
    '/one-of-your-mockups/' // if you have more levels it would be something like /chapter1/errata/
];

var screenshotFolder = 'screenshots';

function nameFile(link, breakpoint) {
    if (link == '') {
        var name = 'home';
    } else {
        var name = link;
    }
    return screenshotFolder + '/' + name.replace(/\//g,'_') + breakpoint + '.png';
}

links.forEach(function(link) {
    casper.thenOpen(baseUrl + link, function () {
        breakpoints.forEach(function(breakpoint) {
            casper.viewport(breakpoint, 800). capture(nameFile(link, breakpoint), {
            top: 0,
            left: 0,
            width: breakpoint,
            height: casper.evaluate(function(){ return document.body.scrollHeight; })
            });
        });
    });
});

casper.run();
