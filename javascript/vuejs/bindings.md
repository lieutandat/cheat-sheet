# Bindings
## Binding Attributes
*Vue component will reveice all Attribute at the root, except style (Vue 2.0)
To inherit in child node we have to*
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
## resolve conflict @input and v-on="$listeners" in basecomponent
 ```javascript
    <component @blur="" v-model=""/>
 ```
```javascript

<template>
  <root>
    <!-- <child @input="updateValue" v-on="@listeners" /> -->
    <child @input="updateValue" v-on="listeners" />
  </root>
</template>
<script>
  export default {
    inheritAttrs: false,
    computed: {
      listeners: {
        return {
          ...this.$listeners,
          input: this.updateValue
        }
      }
    },
    methods: {
      updateValue(event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

```
