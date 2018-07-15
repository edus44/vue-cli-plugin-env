const { DefinePlugin } = require('webpack')

function getEnv(env) {
  for (const key in env) {
    env[key] = JSON.stringify(env[key])
  }
  return {
    'process.env': env,
  }
}

module.exports = (api, projectOptions) => {
  if (
    projectOptions &&
    projectOptions.pluginOptions &&
    typeof projectOptions.pluginOptions.env == 'object'
  ) {
    api.chainWebpack(config => {
      config.plugin('define-env').use(DefinePlugin, [getEnv(projectOptions.pluginOptions.env)])
    })
  }
}
