import pluginLoader from './plugin-loader';

const bootstrap = () => {
  pluginLoader.loadPlugins(plugins => {
    console.log('Loaded external plugins:', plugins);
  });
  console.log('Bootstrapped HC');
};

export default bootstrap;
