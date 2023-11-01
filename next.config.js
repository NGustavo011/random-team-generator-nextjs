const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    disable: process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? false : true,
    skipWaiting: true
})

module.exports = withPWA({
    reactStrictMode: true,
    env:{
        NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV || "development"
    },
})