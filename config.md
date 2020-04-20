.testcaferc.json
```json
{
    "browsers": ["chrome","edge", "firefox"],
    "reporter": {
        "name": "xunit",
        "output": "reports/report.xml"
    },
    "screenshots": {
        "takeOnFails": true,
        "fullPage": true,
        "path": "screenshot",
        "pathPattern": "${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png"
    },
    "videoOptions": {
        "singleFile": true,
        "failedOnly": true,
        "pathPattern": "${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.mp4"
    },
    "debugMode": true,
    "debugOnFail": true,
    "skipJsErrors": true,
    "skipUncaughtErrors": true,
    "filter": {
        "test": "Click a label",
        "testGrep": "Click.*",
        "fixture": "Sample fixture",
        "fixtureGrep": "Page.*",
        "testMeta": {
            "device": "mobile",
            "env": "production"
        },
        "fixtureMeta": {
            "device": "mobile",
            "env": "production"
        }
    },
    "debugMode": false,
    "debugOnFail": false,
    "skipJsErrors": true,
    "skipUncaughtErrors": true,
    "appInitDelay": 3000,
    "concurrency": 1,
    "selectorTimeout": 3000,
    "assertionTimeout": 1000,
    "pageLoadTimeout": 1000,
    "hostname": "localhost",
    "developmentMode": false,
    "tsConfigPath": "tsconfig.json",
    "disablePageCaching": true,
    "color": true,
    "appCommand": "node server.js",
    "speed": 0.1,
    "proxy": "proxy.corp.mycompany.com",
    "ssl": {
        "pfx": "path/to/file.pfx",
        "rejectUnauthorized": true
    }
}
```
runnerConfig
```typescript
.filter((testName, fixtureName, fixturePath, testMeta, fixtureMeta) => {
    return fixturePath.startsWith('D') &&
        testName.match(someRe) &&
        fixtureName.match(anotherRe) &&
        testMeta.mobile === 'true' &&
        fixtureMeta.env === 'staging';
});

.browsers(['chrome', 'firefox'])
.browsers('chrome:headless')
.browsers('chrome:headless --no-sandbox --disable-gpu')
.concurrency(3);

.screenshots({
    path: 'reports/screenshots/',
    takeOnFails: true,
    pathPattern: '${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png'
});


.video('reports/videos/', {
    singleFile: true,
    failedOnly: true,
    pathPattern: '${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.mp4'
}, {
    r: 20,
    aspect: '4:3'
});

```
