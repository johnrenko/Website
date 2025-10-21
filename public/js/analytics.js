(function(){
  function track(eventName, props){
    if (typeof window === 'undefined' || typeof window.plausible !== 'function') return;
    if (props && Object.keys(props).length) { window.plausible(eventName, { props }); }
    else { window.plausible(eventName); }
  }

  // Expose
  window.__analytics = { track };

  // Declarative tracking via data attributes
  function extractProps(el){
    const propshausen = {};
    for (const { name, value } of Array.from(el.attributes)) {
      if (name.startsWith('data-prop-')) propshausen[name.replace('data-prop-','')] = value;
    }
    return propshausen;
  }

  function onClick(e){
    const el = e.target.closest('[data-track]');
    if (!el) return;
    const eventName = el.getAttribute('data-track');
    if (!eventName) return;
    track(eventName, extractProps(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => document.body.addEventListener('click', onClick));
  } else {
    document.body.addEventListener('click', onClick);
  }
})();
