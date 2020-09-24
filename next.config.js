// module.exports = {
//     webpack: {

//     },

// }

// const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// module.exports = (phase, {defaultConfig}) => {
//     if(phase === PHASE_DEVELOPMENT_SERVER) {
//         console.log('Im in dev mode');
//         return defaultConfig
//     }
//     return defaultConfig
// }

//next config object
// const config = {};
// module.exports = withMyPlugin(
//   // args for the plugin,
//   config
// );

const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
module.exports = withNextEnv()