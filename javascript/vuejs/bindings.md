# Bindings
## Binding Attributes
<italics> Vue component will reveice all Attribute at the root
To inherit in child node we have to
  </italics>
```javascript

<template>
  <root>
    <child v-bind="$attrs" />
  </root>
</template>
<script>
  export default {
    inheritAttrs: false
  }
</script>

```
