// Vue component will reveice all Attribute at the root
// To inherit in child node we have to
<template>
  <root>
    <child v-bind="$attrs/>
  </root>
</template>

<script>
  export default {
    inheritAttrs: false
  }
</script>
