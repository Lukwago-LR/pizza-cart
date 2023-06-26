import pizza from "./pizza.json" assert {type: 'json'};
import handlebars from 'vite-plugin-handlebars';

export default {
    plugins: [handlebars({
        context: {
            pizza
        }
    })],
}