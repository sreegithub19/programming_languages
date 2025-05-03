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
    maxInstances: 10, // Adjust based on your CI resources
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--headless',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--window-size=1920,1080', // Set a consistent window size
                '--disable-gpu', // Recommended for headless environments
                '--disable-extensions', // Disable browser extensions
                '--disable-dev-tools', // Disable DevTools (performance)
                '--remote-debugging-port=9222' // Explicitly set a debugging port
                // Consider removing the user-data-dir unless you have a specific reason
                // and are handling its creation and cleanup properly.
                // `--user-data-dir=${path.join(os.tmpdir(), 'chrome-user-data', Date.now().toString())}`,
            ],
        },
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
        timeout: 60000,
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