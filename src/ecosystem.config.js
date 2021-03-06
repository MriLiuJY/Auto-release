module.exports = {
  apps: [{
    name: '',
    script: '',
    watch: false,
    env: {
      COMMON_VARIABLE: true,
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
  deploy: {
    production: {
      user: "root",
      host: "127.0.0.1",
      port: "22",
      ref: "origin/master",
      repo: "",
      path: "",
      ssh_options: "StrictHostKeyChecking=no",
      'pre-deploy': "git fetch origin master",
      'post-deploy': "pm2 startOrRestart ecosystem.json --env production"
    }
  }
}