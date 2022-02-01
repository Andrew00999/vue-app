import { createApp } from 'vue'
import App from './App'
import components from './components/UI'
import VIntersections from './directives/VIntersections';
import router from './router/router';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app.directive('intersection', VIntersections)

app.use(router).mount('#app')
