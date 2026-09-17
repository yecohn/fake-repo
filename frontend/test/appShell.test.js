const test = require('node:test');
const assert = require('node:assert/strict');

const { routeMap, renderRoute } = require('../src/appShell');

test('route map exposes the required MVP route targets', () => {
  assert.deepEqual(
    routeMap.map((route) => route.path),
    ['/', '/login', '/register', '/dashboard', '*'],
  );
});

test('home route renders login and registration links', () => {
  const html = renderRoute('/');

  assert.match(html, /href="\/login"/);
  assert.match(html, /href="\/register"/);
});

test('auth and dashboard route targets exist without backend or auth state', () => {
  assert.match(renderRoute('/login'), /data-route="login"/);
  assert.match(renderRoute('/register'), /data-route="register"/);
  assert.match(renderRoute('/dashboard'), /data-route="dashboard"/);
});

test('unknown routes render a fallback target', () => {
  const html = renderRoute('/missing');

  assert.match(html, /data-route="not-found"/);
});
