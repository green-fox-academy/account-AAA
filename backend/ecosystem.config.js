module.exports = {
  apps: [{
    name: 'jsap-aaa',
    script: './backend/app.js',

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
      host: '18.176.56.81',
      key: './.ssh/JSAP-AAA-kp.pem',
      ref: 'origin/JSAP-18',
      repo: 'git@github.com:green-fox-academy/account-AAA.git',
      path: '/home/ubuntu/jsap-aaa',
      'post-deploy': 'npm run install-backend && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
