module.exports = {
    apps: [
      {
        name: 'Capacitacion',
        script: './server.js',
        instances: 0,
        exec_mode: 'cluster',
        watch: true,
        env: {
            NODE_CONFIG_DIR: './config',
            NODE_ENV: 'production'
        }
      }
    ]
  };