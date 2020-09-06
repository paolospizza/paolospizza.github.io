
module.exports = {
    plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('cssnano')(),
        require('autoprefixer')
    ]
};