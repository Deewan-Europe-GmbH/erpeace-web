/* ERPeace cookie banner. Content from other companies (videos, maps, posts) only loads after "Allow all".
   To add such content later, write it like:
   <div class="ext" data-provider="YouTube"><iframe data-src="https://www.youtube-nocookie.com/embed/ID" title="Video"></iframe></div> */
(function () {
  var KEY = 'erpeace-consent';
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadAll() {
    document.querySelectorAll('[data-src]').forEach(function (el) { el.src = el.getAttribute('data-src'); el.removeAttribute('data-src'); });
    document.querySelectorAll('.ext-hold').forEach(function (h) { h.remove(); });
  }
  function holdAll() {
    document.querySelectorAll('.ext').forEach(function (box) {
      if (!box.querySelector('[data-src]') || box.querySelector('.ext-hold')) return;
      var p = box.getAttribute('data-provider') || 'another company';
      var d = document.createElement('div');
      d.className = 'ext-hold';
      d.innerHTML = '<p>This content comes from ' + p + '. If you load it, ' + p + ' receives your IP address and may set cookies.</p>';
      var b = document.createElement('button');
      b.className = 'btn btn-main'; b.type = 'button'; b.textContent = 'Load content';
      b.onclick = function () { var f = box.querySelector('[data-src]'); f.src = f.getAttribute('data-src'); f.removeAttribute('data-src'); d.remove(); };
      d.appendChild(b); box.appendChild(d);
    });
  }

  function banner() {
    if (document.getElementById('consent')) return;
    var w = document.createElement('div');
    w.id = 'consent'; w.setAttribute('role', 'dialog'); w.setAttribute('aria-labelledby', 'consent-title');
    w.innerHTML =
      '<h2 id="consent-title">Content from other companies</h2>' +
      '<p>Some pages may show videos, maps or posts from other companies, such as YouTube or Google Maps. If you allow this, these companies receive your IP address and may set cookies, also in the USA. If you choose "Only necessary", this content stays hidden. You can change your choice at any time under "Cookie settings" at the bottom of every page. <a href="privacy.html">Privacy</a></p>' +
      '<div class="consent-btns"><button type="button" class="btn btn-ghost" data-c="necessary">Only necessary</button>' +
      '<button type="button" class="btn btn-ghost" data-c="all">Allow all</button></div>';
    w.addEventListener('click', function (e) {
      var c = e.target.getAttribute && e.target.getAttribute('data-c');
      if (!c) return;
      set(c); w.remove();
      if (c === 'all') loadAll(); else holdAll();
    });
    document.body.appendChild(w);
    w.querySelector('button').focus({ preventScroll: true });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var c = get();
    if (c === 'all') loadAll(); else holdAll();
    if (!c) banner();
    document.querySelectorAll('.cookie-settings').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); banner(); });
    });
  });
})();
