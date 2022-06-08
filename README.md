## vuex-settings
- [vuex](https://www.npmjs.com/package/vuex)
> npm i --save vuex

## vue3
- vuex version 4 ↑

## vue2
- vuex version 4 ↓

## use
- main.js
```
import store from './store'

new Vue({    
  ...
  store,
}).$mount('#app')
```

<br>

- components
```
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

```

