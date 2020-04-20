const createTestCafe = require('testcafe');

const setupTestCafe = async () => {
    const testCafe = await createTestCafe('localhost', 1337, 1338);

    const runner = testCafe.createRunner();
    await runner
        .src('tests/*.test.ts')
        .browsers(['chrome', 'firefox'])
        // .filter((testName, fixtureName, fixturePath, testMeta, fixtureMeta) => {
        //     return fixturePath.startsWith('D') &&
        //         testName.match('') &&
        //         fixtureName.match('') &&
        //         testMeta.mobile === 'true' &&
        //         fixtureMeta.env === 'staging';
        // })
        .run({
            skipJsErrors: true,
            quarantineMode: true,
            selectorTimeout: 50000,
            assertionTimeout: 7000,
            pageLoadTimeout: 8000,
            speed: 0.1,
            stopOnFirstFail: true
        });

    testCafe.close();
}

setupTestCafe();