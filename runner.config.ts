const createTestCafe = require('testcafe');

const setupTestCafe = async () => {
    const testCafe = await createTestCafe('localhost', 1337, 1338);
    try {
        const runner = testCafe.createRunner();
        await runner
            .src('tests/*.test.ts')
            .browsers(['chrome:headless --no-sandbox --disable-gpu','firefox:headless'])
            .reporter(['spec',{
                name: 'xunit',
                output: 'reports/report.xml'
            }, {
                name: 'html',
                output: 'reports/reports.html'
            }])
            .screenshots({
                takeOnFails: true,
                fullPage: true,
                path: "screenshot",
                pathPattern: "${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png"
            })
            .run({
                skipJsErrors: true,
                quarantineMode: true,
                selectorTimeout: 50000,
                assertionTimeout: 7000,
                pageLoadTimeout: 8000,
                stopOnFirstFail: true,
                tsConfigPath: "tsconfig.json",
            });
        console.log('Test finished');    
        testCafe.close();
    } catch (error) {
        console.log(error);
        testCafe.close();
    }
}

setupTestCafe();