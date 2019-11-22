module.exports = {
  apps: [{
    name: 'backend',
    script: 'src/server.js',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
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
      'post-deploy': 'cd backend && npm install && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
