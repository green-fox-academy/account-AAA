module.exports = {
  apps: [{
    name: 'backend',
    script: 'server.js',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],

  deploy: {
    production: {
      user: 'ubuntu',
      host: '3.112.128.181',
      ref: 'origin/master',
      repo: 'git@github.com:green-fox-academy/account-AAA.git',
      path: '/home/ubuntu/account-AAA',
      'post-deploy': 'cd backend && npm install && npm run dbRefresh && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
