
export interface Plugin {
  name: string;
  context: string;
  domain: string;
  scripts: string[];
}

type Plugins = {
  [key: string]: Plugin;
};

const log = console.log;

/**
 * Plugin loader and discovery mechanism.
 */
class PluginLoader {

  /**
   * List of URLs that the plugin loader will try and discover plugins from.
   */
  private urls: string[] = [];

  /**
   * Holds all of the HC plugins that need to be bootstrapped.
   */
  private plugins: string[] = [];

  /**
   * Add an angular module to the list of modules to bootstrap.
   */
  addPlugin(plugin: string): PluginLoader {
    log("Adding plugin:", plugin);
    this.plugins.push(plugin);
    return this;
  };

  /**
   * Add a URL for discovering plugins.
   */
  addUrl(url: string): PluginLoader {
    log("Adding URL:", url);
    this.urls.push(url);
    return this;
  };

  /**
   * Downloads plugins at any configured URLs and bootstraps the app.
   *
   * It is invoked from HC's bootstrapping.
   */
  loadPlugins(callback: (plugins: string[]) => void): void {
    callback(this.plugins);
  }

}

const pluginLoader = new PluginLoader();

export default pluginLoader;
