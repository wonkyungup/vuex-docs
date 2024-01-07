# Vuex Docs

## How to install

```
npm i --save vuex
```

## To Install Vue version

```
[Vuex Versions]
https://www.npmjs.com/package/vuex?activeTab=versions

[Vue2]
Vuex Version 4 ↓

[Vue3]
Vuex Version 4 ↑
```

## Use Vue2

```
// main.js

import store from './store'

new Vue({
  ...
  store,
}).$mount('#app')
```

```
// components(*.vue)

<script>

import { mapActions, mapGetters, mapState } from 'vuex'

export default {
    name: 'Example',
    computed: {
      ...mapState({ exampleState: 'Example' }),
      ...mapGetters('Example', ['isExample'])
    },
    methods: {
      ...mapActions('Example', ['setExample'])
    }
  }

</script>
```

## Use Vue3

```
// main.js

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)

app.use(store)
app.mount('#app')
```

```
// App.vue

<script setup>
import { provide } from 'vue'
import { useStore } from 'vuex'

provide('store', useStore())

</script>
```

```
// components(*.vue)

<script setup>
import { inject } from 'vue'

const store = inject('store')

// state
const exampleState = store.state.Example

// getter
const exampleGetters = store.getters['Example/isExample']

// action
store.dispatch('Example/setExample', payload)

</script>
```
