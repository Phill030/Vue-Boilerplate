<h1 align="center">
  <strong>Vue-Boilerplate</strong>
</h1>

## This boilerplate was made to simplify working with Vue

### Packages:
<h5>
  - Vite <br></br>
  - Vue3 <br></br>
  - Vue-Router <br></br>
  - TypeScript <br></br>
  - altv/types-webviews
</h5>

#### Does `alt` work?
✔ Yes

### How to change the page?
To change the page you can either use
```ts
this.$router.push('/yourPath');
```
or use a router-link with a custom element
```vue
<router-link to="/yourPath" custom v-slot="{ navigate }">
  <button @click="navigate">Something</button>
</router-link>
```


### How to add a page to the router?
You can add a new page by creating a new file for eg. in `views/`. Then open `main.ts` and add a new object in `routes`.
Example:
```ts
import yourComponent from './views/yourComponent';
const routes = [
  {
    path: '/yourPath',
    name: 'YourName',
    component: yourComponent
  },
]

```

<h6 align="center">
  <a href="https://www.youtube.com/watch?v=51Vek_n8msQ">
    <strong>Made with ❤ by Phill030 aka. MrCopy&Paste™</strong>
  </a>
</h6>
