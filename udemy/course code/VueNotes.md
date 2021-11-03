# General concepts

## Basic setup

- Create an object with Vue.createApp method
- Mount that object to a html identifier of the page<br>
  <code> app.mount('#htmlIdentifier')</code>
- That part of the page will be handled by Vue

## CreateApp parts - configuration options

- reference methods and variables with the <code>this</code> keyword
- configuration option names (data, computed, methods, watch) are **not optional**, the has to be called like that to Vue
- <code>data(){...} </code>- should return a JSON object with the data accessible by Vue
- <code>computed: {...}</code> - methods that doesnt need to be recalculated every time
- <code>methods: {...}</code> - recalculate every time something changes on the page
- <code>watch: {...}</code> - must connect a data or computed property b the same name and then the method will be executed, when that property changes
	- the latest value of the watched property is automatically passed
	

## v-Directives

- <code>[v-bind](https://vuejs.org/v2/api/#v-bind)</code> examples:
  - bind an attribute <code>\<img v-bind:src="imageSrc"></code>
  - dynamic attribute name (2.6.0+) <code>\<button v-bind:[key]="value"></button></code>
  - shorthand <code>\<img :src="imageSrc"> </code>
- <code>v-on</code> listen to DOM events and run some JavaScript when they’re triggered. Example: <code>v-on:input="inputMethod" v-on:click="clickHandlerMethod"</code>
  - The method name does not need the parentheses
- <code>v-model</code> the v-model is a Vue shortcut for v-on:input and v-bind in an input field

### To access the event object with other arguments

- use the <code>$event</code> parameter: <code> methodName($event, anotherParameter)</code>

### To prevent a submit form to reload the page, use EVENT MODIFIER

- <code> \<form v-on:submit.prevent></code>
- .prevent is an event modifier used by Vue
