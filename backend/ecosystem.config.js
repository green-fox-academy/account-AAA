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
      key: './.ssh/JSA-aaa-kp.pem',
      ref: 'origin/master',
      repo: 'git@github.com:green-fox-academy/account-AAA.git',
      path: '/home/ubuntu/account-AAA',
      'post-deploy': 'cd backend && npm install && pm2 startOrRestart ecosystem.config.js --update-env && npm run dbRefresh',
    },
  },
};
