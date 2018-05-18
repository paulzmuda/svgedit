/* eslint-env qunit */
/* globals svgedit, equals */

// log function
QUnit.log = function (details) {
  if (window.console && window.console.log) {
    window.console.log(details.result + ' :: ' + details.message);
  }
};

const svg = document.createElementNS(svgedit.NS.SVG, 'svg');

test('Test sanitizeSvg() strips ws from style attr', function () {
  expect(2);

  const rect = document.createElementNS(svgedit.NS.SVG, 'rect');
  rect.setAttribute('style', 'stroke: blue ;		stroke-width :		40;');
  // sanitizeSvg() requires the node to have a parent and a document.
  svg.appendChild(rect);
  svgedit.sanitize.sanitizeSvg(rect);

  equals(rect.getAttribute('stroke'), 'blue');
  equals(rect.getAttribute('stroke-width'), '40');
});
