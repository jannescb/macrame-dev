import { createApp, h } from 'vue';
import {
	App as InertiaApp,
	plugin as InertiaPlugin,
} from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { plugin as MacramePlugin } from '@macramejs/macrame-vue3';
import { plugin as MacrameTheme } from '@macramejs/admin-vue3';

const el = document.getElementById('app');

const app = createApp({
	render: () =>
		h(InertiaApp, {
			initialPage: JSON.parse(el.dataset.page),
			resolveComponent: (name) => require(`./${name}`).default,
		}),
})
	.use(InertiaPlugin)
	.use(MacramePlugin)
	.use(MacrameTheme);

app.mount(el);

InertiaProgress.init();