const merge = require('lodash.merge');
const tailwindConfig = require('@macramejs/admin-vue3/tailwind.config.js');

module.exports = merge(tailwindConfig, {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
});
