const sourceRoot = './source/',
    distRoot = './www/assets/dist/',
    assetsRoot = './www/assets/',
    publicRoot = './www/',
    serverRoot = './server/',
    bootstrapRoot = './node_modules/bootstrap/';

module.exports = {
    assets: {
      images: sourceRoot + 'images/*'
    },
    source: {
        sass: sourceRoot + 'styles/**/*.scss',
        js: sourceRoot + '**/*.elm',
        templates: sourceRoot + 'templates/',
    },
    public: {
        root: publicRoot,
        sass: assetsRoot + 'css/',
        js: assetsRoot + 'js',
        fonts: assetsRoot + 'fonts',
        html: publicRoot,
        images: assetsRoot+'images/**/*'
    },
    server: serverRoot + 'server.js',
    bootstrap: {
        fonts: bootstrapRoot + 'fonts/*'
    }
};
