# Sample project for complex usecase of build files
This project shows follwoing tricky usecase using Vue3.

- [x] Define and replace placeholders while `serving` and `building`. Those replaced value are different while serving and building.
- [x] Serve / build two separate components.
- [ ] Use separate index.html file for each component.
- [ ] Rename index.html while building.

## Define and replace placeholders while `serving` and `building`.
[string-replace-loader](https://github.com/Va1/string-replace-loader) let you replace any string in the code while serving/building the project.
We need [raw-loader](https://github.com/webpack-contrib/raw-loader) separately, in ahead to do the same against the HTML files.

### configuration
See `vue.config.js`. The [chainWebpack](https://cli.vuejs.org/guide/webpack.html#chaining-advanced) part is doing some trick to replace the string.
This basically gives us an possibility to **dynamically** modify the options.

As it mentioned earlier, for html, we need `raw-loader` in ahead to `string-replace-loader`.
The reason is explained [here](https://stackoverflow.com/a/38936363);

Therefore:
```
      .use('raw')
      .loader('raw-loader')
```

## Serve / build two separate components.
The path to `vue.config.js` can be controlled by `VUE_CLI_SERVICE_CONFIG_PATH` environment variable.
Therefore you can swap the config file by setting it before the build / serve.
In practice, you can do like this:
```
    "serve:hw": "VUE_CLI_SERVICE_CONFIG_PATH=$PWD/vue.config.js vue-cli-service serve",
```

See `package.json` - `scripts` part for more examples.

Each `vue.config.js` can specify entry script etc. so defining scripts for each components, prod and dev. etc. let you serve / build in a different configs.
