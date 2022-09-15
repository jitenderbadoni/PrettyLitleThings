module.exports = {
    preset: "react-native",
    verbose: true,
    collectCoverage: true,
    setupFilesAfterEnv: ["./setup-tests.js"],
    coverageReporters: ["text", "html", "lcov", "json"],
    reporters: [
        "default",
        [
            "./node_modules/jest-html-reporter",
            {
                pageTitle: "Test Report",
                statusIgnoreFilter: "passed",
                includeFailureMsg: true,
                includeConsoleLog: false,
                outputPath: "./coverage/test-report.html",
            },
        ],
    ],
    testResultsProcessor: "./node_modules/jest-html-reporter",
    testMatch: ["<rootDir>/__tests__/*.test.js"],
};
