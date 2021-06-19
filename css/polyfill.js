<script>
  // IE11 does not have support for CSS variables, so we have to polyfill them
  if (!(((window || {}).CSS || {}).supports && window.CSS.supports('(--a: 0)'))) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2';
    script.onload = function() {
      cssVars({});
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  }
</script>
