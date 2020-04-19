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
    "appCommand": "node server.js",
    "appInitDelay": 3000,
    "concurrency": 3,
    "selectorTimeout": 3000,
    "assertionTimeout": 1000,
    "pageLoadTimeout": 1000,
    "speed": 0.1,
    "hostname": "host.mycorp.com",
    "proxy": "proxy.corp.mycompany.com",
    "ssl": {
        "pfx": "path/to/file.pfx",
        "rejectUnauthorized": true
    },
    "developmentMode": true,
    "tsConfigPath": "tsconfig.json",
    "disablePageCaching": true,
    "color": true
}