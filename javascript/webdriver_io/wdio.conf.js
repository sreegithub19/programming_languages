import path from 'path';
import os from 'os';

export const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    //
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                // Generate a unique and isolated user data directory
                //`--user-data-dir=${path.join(os.tmpdir(), 'chrome-user-data', Date.now().toString())}`,
                // You can also add '--no-sandbox' and '--disable-dev-shm-usage' for more stability in CI environments
                '--no-sandbox',
                '--disable-dev-shm-usage'
            ]
        }
    }],

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    //
    // Framework Configuration
    // ========================
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    //
    // =====
    // Hooks
    // =====
    // Uncomment and customize the hooks as needed:
    // onPrepare: function (config, capabilities) {},
    // beforeSession: function (config, capabilities, specs, cid) {},
    // before: function (capabilities, specs) {},
    // beforeTest: function (test, context) {},
    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    //     if (error) {
    //         console.error('Test failed:', error);
    //     }
    // },
    // onComplete: function(exitCode, config, capabilities, results) {}
};