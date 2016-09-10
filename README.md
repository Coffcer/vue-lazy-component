# vue-lazy-component

> Vue directive for lazy load components or elements, lazy load some components which not in the first screen can improve vue initialization performance.

[Live demo](http://coffcer.github.io/vue-lazy-component/)

## Usage

``` javascript
import Vue from 'vue';
import lazy from 'vue-lazy-component';

Vue.use(lazy);
```

``` html
<!--Lazy load the element, 3s-->
<div v-lazy="3000">
    <p>Chlid</p>
    <component></component>
</div>
<!--Lazy load the component-->
<component v-lazy="3000"></component>

<!--Lazy load 0s, the effect is like setTimeout(fn, 0) -->
<component v-lazy></component>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build the component to UMD js
npm run build

# build the dev page
npm run build:demo
```
