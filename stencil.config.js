exports.config = {
  bundles: [
    { components: ['apod-image' ,'apod-request'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
