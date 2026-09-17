const routeMap = [
  { path: '/', name: 'Home', access: 'public' },
  { path: '/login', name: 'Login', access: 'public-auth' },
  { path: '/register', name: 'Register', access: 'public-auth' },
  { path: '/dashboard', name: 'Dashboard', access: 'future-protected' },
  { path: '*', name: 'Not Found', access: 'public-fallback' },
];

function renderRoute(path) {
  switch (path) {
    case '/':
      return renderAppShell(`
        <main class="page" data-route="home">
          <h1>Fake Project</h1>
          <p>Start the frontend authentication journey.</p>
          <nav aria-label="Authentication">
            <a href="/login">Log in</a>
            <a href="/register">Create account</a>
          </nav>
        </main>
      `);
    case '/login':
      return renderAppShell('<main class="page" data-route="login"></main>');
    case '/register':
      return renderAppShell('<main class="page" data-route="register"></main>');
    case '/dashboard':
      return renderAppShell('<main class="page" data-route="dashboard"></main>');
    default:
      return renderAppShell('<main class="page" data-route="not-found"></main>');
  }
}

function renderAppShell(content) {
  return `<div class="app-shell">${content}</div>`;
}

module.exports = {
  routeMap,
  renderRoute,
};
