Chrome: Version 86.0.4240.198 (Official Build) (64-bit)
Ubuntu 18
```
$ npm test

> devtools-example@1.0.0 test /home/vojtech-cerveny/Documents/dev/devtools-example
> wdio wdio.conf.js


Execution of 1 spec files started at 2020-11-18T14:51:39.423Z

2020-11-18T14:51:39.644Z INFO @wdio/cli:launcher: Run onPrepare hook
2020-11-18T14:51:39.645Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2020-11-18T14:51:39.646Z INFO @wdio/local-runner: Start worker 0-0 with arg: wdio.conf.js
[0-0] 2020-11-18T14:51:39.879Z INFO @wdio/local-runner: Run worker command: run
[0-0] 2020-11-18T14:51:40.101Z INFO webdriverio: Initiate new session using the ./protocol-stub protocol
[0-0] RUNNING in chrome - /test/specs/example.e2e.js
[0-0] 2020-11-18T14:51:40.455Z INFO webdriverio: Initiate new session using the devtools protocol
[0-0] 2020-11-18T14:51:40.456Z INFO devtools: Launch Google Chrome with flags: --enable-automation --disable-popup-blocking --disable-extensions --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-sync --metrics-recording-only --disable-default-apps --mute-audio --no-first-run --no-default-browser-check --disable-hang-monitor --disable-prompt-on-repost --disable-client-side-phishing-detection --password-store=basic --use-mock-keychain --disable-component-extensions-with-background-pages --disable-breakpad --disable-dev-shm-usage --disable-ipc-flooding-protection --disable-renderer-backgrounding --force-fieldtrials=*BackgroundTracing/default/ --enable-features=NetworkService,NetworkServiceInProcess --disable-features=site-per-process,TranslateUI,BlinkGenPropertyTrees --window-position=0,0 --window-size=1200,900
[0-0] 2020-11-18T14:51:41.165Z INFO devtools: Connect Puppeteer with browser on port 40015
[0-0] 2020-11-18T14:51:41.260Z INFO webdriver: COMMAND enablePerformanceAudits()
[0-0] 2020-11-18T14:51:41.260Z INFO webdriver: RESULT undefined
[0-0] 2020-11-18T14:51:41.262Z INFO @wdio/devtools-service:TraceGatherer: Start tracing frame with url http://json.org
[0-0] 2020-11-18T14:51:41.271Z INFO @wdio/devtools-service:TraceGatherer: Waiting for CPU to become idle
[0-0] 2020-11-18T14:51:41.276Z INFO devtools: COMMAND navigateTo("http://json.org/")
[0-0] 2020-11-18T14:51:41.281Z INFO @wdio/devtools-service:TraceGatherer: Waiting on DomContentLoaded
[0-0] 2020-11-18T14:51:41.325Z INFO @wdio/devtools-service:TraceGatherer: Driver CPU has been idle for 0 ms
[0-0] 2020-11-18T14:51:42.118Z INFO @wdio/devtools-service:TraceGatherer: Page load detected: http://json.org/, set frameId 3256F2108A5C992D5282AAFA30748E9F, set loaderId CFDC2A98BD86A15AFEF5DD0CA9A6E5F6
[0-0] 2020-11-18T14:51:42.122Z INFO @wdio/devtools-service:TraceGatherer: Waiting on DomContentLoaded
[0-0] 2020-11-18T14:51:42.149Z INFO devtools: RESULT null
[0-0] 2020-11-18T14:51:42.150Z INFO @wdio/devtools-service: Wait until tracing for command navigateTo finishes
[0-0] 2020-11-18T14:51:42.171Z INFO @wdio/devtools-service:TraceGatherer: Found 1 inflight network records
[0-0] 2020-11-18T14:51:42.172Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/json-en.html to finish
[0-0] 2020-11-18T14:51:42.181Z INFO @wdio/devtools-service:TraceGatherer: Found 2 inflight network records
[0-0] 2020-11-18T14:51:42.181Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/json-en.html to finish
2020-11-18T14:51:42.181Z INFO @wdio/devtools-service:TraceGatherer: Waiting on http://json.org/favicon.ico to finish
[0-0] 2020-11-18T14:51:42.739Z INFO @wdio/devtools-service:TraceGatherer: Found 1 inflight network records
[0-0] 2020-11-18T14:51:42.740Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/json-en.html to finish
[0-0] 2020-11-18T14:51:43.191Z INFO @wdio/devtools-service:TraceGatherer: Ignore navigated frame with url https://www.json.org/json-en.html
[0-0] 2020-11-18T14:51:43.213Z INFO @wdio/devtools-service:TraceGatherer: Found 0 inflight network records
[0-0] 2020-11-18T14:51:43.282Z INFO @wdio/devtools-service:TraceGatherer: Found 1 inflight network records
[0-0] 2020-11-18T14:51:43.282Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
2020-11-18T14:51:43.282Z INFO @wdio/devtools-service:TraceGatherer: Found 2 inflight network records
2020-11-18T14:51:43.282Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
2020-11-18T14:51:43.282Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Found 3 inflight network records
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Found 3 inflight network records
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Found 4 inflight network records
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Found 4 inflight network records
[0-0] 2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
2020-11-18T14:51:43.283Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
[0-0] 2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Found 5 inflight network records
[0-0] 2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
[0-0] 2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
[0-0] 2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Found 5 inflight network records
2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
[0-0] 2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
[0-0] 2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Found 6 inflight network records
[0-0] 2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
[0-0] 2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
2020-11-18T14:51:43.284Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
[0-0] 2020-11-18T14:51:43.285Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
2020-11-18T14:51:43.285Z INFO @wdio/devtools-service:TraceGatherer: Found 6 inflight network records
[0-0] 2020-11-18T14:51:43.285Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
2020-11-18T14:51:43.285Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:43.285Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
[0-0] 2020-11-18T14:51:43.285Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
2020-11-18T14:51:43.285Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:43.285Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
[0-0] 2020-11-18T14:51:43.285Z INFO @wdio/devtools-service:TraceGatherer: Found 7 inflight network records
[0-0] 2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
[0-0] 2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
[0-0] 2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/whitespace.png to finish
[0-0] 2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Found 7 inflight network records
2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
[0-0] 2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
[0-0] 2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
2020-11-18T14:51:43.286Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/whitespace.png to finish
[0-0] 2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Found 8 inflight network records
[0-0] 2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
[0-0] 2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
[0-0] 2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
[0-0] 2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/whitespace.png to finish
2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
[0-0] 2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Found 8 inflight network records
2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/json160.gif to finish
[0-0] 2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
[0-0] 2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
[0-0] 2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/whitespace.png to finish
2020-11-18T14:51:43.287Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
[0-0] 2020-11-18T14:51:44.150Z INFO @wdio/devtools-service:TraceGatherer: Found 7 inflight network records
[0-0] 2020-11-18T14:51:44.150Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:44.150Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
2020-11-18T14:51:44.150Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
[0-0] 2020-11-18T14:51:44.150Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:44.150Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
2020-11-18T14:51:44.150Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/whitespace.png to finish
[0-0] 2020-11-18T14:51:44.150Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
[0-0] 2020-11-18T14:51:44.150Z INFO @wdio/devtools-service:TraceGatherer: Found 7 inflight network records
[0-0] 2020-11-18T14:51:44.150Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:44.150Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/array.png to finish
[0-0] 2020-11-18T14:51:44.151Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
2020-11-18T14:51:44.151Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:44.151Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
[0-0] 2020-11-18T14:51:44.151Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/whitespace.png to finish
2020-11-18T14:51:44.151Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
[0-0] 2020-11-18T14:51:44.153Z INFO @wdio/devtools-service:TraceGatherer: Found 6 inflight network records
[0-0] 2020-11-18T14:51:44.153Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:44.153Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
[0-0] 2020-11-18T14:51:44.153Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:44.153Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
[0-0] 2020-11-18T14:51:44.153Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/whitespace.png to finish
2020-11-18T14:51:44.153Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
[0-0] 2020-11-18T14:51:44.153Z INFO @wdio/devtools-service:TraceGatherer: Found 6 inflight network records
[0-0] 2020-11-18T14:51:44.154Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:44.154Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
[0-0] 2020-11-18T14:51:44.154Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:44.154Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
[0-0] 2020-11-18T14:51:44.154Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/whitespace.png to finish
[0-0] 2020-11-18T14:51:44.154Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
[0-0] 2020-11-18T14:51:44.395Z INFO @wdio/devtools-service:TraceGatherer: Found 5 inflight network records
[0-0] 2020-11-18T14:51:44.395Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:44.395Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
2020-11-18T14:51:44.395Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:44.395Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
2020-11-18T14:51:44.395Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
[0-0] 2020-11-18T14:51:44.395Z INFO @wdio/devtools-service:TraceGatherer: Found 5 inflight network records
2020-11-18T14:51:44.395Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/object.png to finish
2020-11-18T14:51:44.395Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
[0-0] 2020-11-18T14:51:44.395Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:44.395Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
2020-11-18T14:51:44.395Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
[0-0] 2020-11-18T14:51:44.414Z INFO @wdio/devtools-service:TraceGatherer: Found 4 inflight network records
[0-0] 2020-11-18T14:51:44.414Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
2020-11-18T14:51:44.414Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:44.414Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
2020-11-18T14:51:44.414Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
2020-11-18T14:51:44.414Z INFO @wdio/devtools-service:TraceGatherer: Found 4 inflight network records
[0-0] 2020-11-18T14:51:44.414Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/value.png to finish
2020-11-18T14:51:44.415Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:44.415Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
[0-0] 2020-11-18T14:51:44.415Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
[0-0] 2020-11-18T14:51:44.591Z INFO @wdio/devtools-service:TraceGatherer: Found 3 inflight network records
[0-0] 2020-11-18T14:51:44.591Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:44.591Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
2020-11-18T14:51:44.591Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
[0-0] 2020-11-18T14:51:44.591Z INFO @wdio/devtools-service:TraceGatherer: Found 3 inflight network records
2020-11-18T14:51:44.591Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
2020-11-18T14:51:44.591Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/number.png to finish
[0-0] 2020-11-18T14:51:44.591Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
[0-0] 2020-11-18T14:51:44.820Z INFO @wdio/devtools-service:TraceGatherer: Found 2 inflight network records
[0-0] 2020-11-18T14:51:44.820Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
[0-0] 2020-11-18T14:51:44.820Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/Programma-Bold.woff2 to finish
[0-0] 2020-11-18T14:51:44.851Z INFO @wdio/devtools-service:TraceGatherer: Found 1 inflight network records
[0-0] 2020-11-18T14:51:44.851Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/img/string.png to finish
[0-0] 2020-11-18T14:51:44.925Z INFO @wdio/devtools-service:TraceGatherer: Found 0 inflight network records
[0-0] 2020-11-18T14:51:44.941Z INFO @wdio/devtools-service:TraceGatherer: Found 1 inflight network records
[0-0] 2020-11-18T14:51:44.941Z INFO @wdio/devtools-service:TraceGatherer: Waiting on https://www.json.org/favicon.gif to finish
[0-0] 2020-11-18T14:51:45.511Z INFO @wdio/devtools-service:TraceGatherer: Found 0 inflight network records
[0-0] 2020-11-18T14:51:49.821Z INFO @wdio/devtools-service:TraceGatherer: Network became finally idle
[0-0] 2020-11-18T14:51:49.821Z INFO @wdio/devtools-service:TraceGatherer: Wait for network idle canceled
[0-0] 2020-11-18T14:51:51.380Z INFO @wdio/devtools-service:TraceGatherer: Driver CPU has been idle for 6469.034999998257 ms
[0-0] 2020-11-18T14:51:54.963Z INFO @wdio/devtools-service:TraceGatherer: Driver CPU has been idle for 10052.459999998973 ms
[0-0] 2020-11-18T14:51:54.963Z INFO @wdio/devtools-service:TraceGatherer: Tracing completed after 13701ms, capturing performance data for frame 3256F2108A5C992D5282AAFA30748E9F
[0-0] 2020-11-18T14:51:54.963Z INFO @wdio/devtools-service:TraceGatherer: Tracing completed after 13701ms, capturing performance data for frame 3256F2108A5C992D5282AAFA30748E9F
[0-0] 2020-11-18T14:51:54.967Z ERROR @wdio/devtools-service:TraceGatherer: Error capturing tracing logs: Error: Protocol error (IO.read): Read failed
    at /home/vojtech-cerveny/Documents/dev/devtools-example/node_modules/puppeteer-core/lib/cjs/puppeteer/common/Connection.js:208:63
    at new Promise (<anonymous>)
    at CDPSession.send (/home/vojtech-cerveny/Documents/dev/devtools-example/node_modules/puppeteer-core/lib/cjs/puppeteer/common/Connection.js:207:16)
    at Object.readProtocolStream (/home/vojtech-cerveny/Documents/dev/devtools-example/node_modules/puppeteer-core/lib/cjs/puppeteer/common/helper.js:249:39)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at TraceGatherer.completeTracing (/home/vojtech-cerveny/Documents/dev/devtools-example/node_modules/@wdio/devtools-service/build/gatherer/trace.js:124:33)
[0-0] 2020-11-18T14:51:54.967Z INFO @wdio/devtools-service:TraceGatherer: Tracing for 3256F2108A5C992D5282AAFA30748E9F completed
[0-0] 2020-11-18T14:51:54.968Z INFO @wdio/devtools-service: Disable throttling
[0-0] 2020-11-18T14:51:54.968Z ERROR @wdio/devtools-service:TraceGatherer: Error capturing tracing logs: Error: Protocol error (IO.read): Read failed
    at /home/vojtech-cerveny/Documents/dev/devtools-example/node_modules/puppeteer-core/lib/cjs/puppeteer/common/Connection.js:208:63
    at new Promise (<anonymous>)
    at CDPSession.send (/home/vojtech-cerveny/Documents/dev/devtools-example/node_modules/puppeteer-core/lib/cjs/puppeteer/common/Connection.js:207:16)
    at Object.readProtocolStream (/home/vojtech-cerveny/Documents/dev/devtools-example/node_modules/puppeteer-core/lib/cjs/puppeteer/common/helper.js:249:39)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at TraceGatherer.completeTracing (/home/vojtech-cerveny/Documents/dev/devtools-example/node_modules/@wdio/devtools-service/build/gatherer/trace.js:124:33)
[0-0] 2020-11-18T14:51:54.968Z INFO @wdio/devtools-service:TraceGatherer: Tracing for undefined completed
[0-0] 2020-11-18T14:51:54.972Z INFO @wdio/devtools-service: continuing with next WebDriver command
[0-0] 2020-11-18T14:51:54.972Z INFO webdriver: COMMAND getMetrics()
[0-0] Error in "JSON.org page should load within performance budget"
Error: Couldn't capture performance due to: Protocol error (IO.read): Read failed
    at Browser.<anonymous> (/home/vojtech-cerveny/Documents/dev/devtools-example/node_modules/@wdio/devtools-service/build/index.js:54:23)
    at Browser.getMetrics (/home/vojtech-cerveny/Documents/dev/devtools-example/node_modules/@wdio/utils/build/monad.js:94:33)
    at Context.<anonymous> (/home/vojtech-cerveny/Documents/dev/devtools-example/test/specs/example.e2e.js:12:31)
[0-0] 2020-11-18T14:51:54.977Z INFO webdriver: COMMAND disablePerformanceAudits()
[0-0] 2020-11-18T14:51:54.977Z INFO webdriver: RESULT undefined
[0-0] 2020-11-18T14:51:54.979Z INFO devtools: COMMAND deleteSession()
[0-0] 2020-11-18T14:51:54.980Z INFO devtools: RESULT null
[0-0] FAILED in chrome - /test/specs/example.e2e.js
2020-11-18T14:51:55.098Z INFO @wdio/cli:launcher: Run onComplete hook

 "spec" Reporter:
------------------------------------------------------------------
[Chrome 86.0.4240.198 linux #0-0] Spec: /home/vojtech-cerveny/Documents/dev/devtools-example/test/specs/example.e2e.js
[Chrome 86.0.4240.198 linux #0-0] Running: Chrome (v86.0.4240.198) on linux
[Chrome 86.0.4240.198 linux #0-0] Session ID: 745273a7-7bf2-4c21-8eee-833c3367a838
[Chrome 86.0.4240.198 linux #0-0]
[Chrome 86.0.4240.198 linux #0-0] JSON.org page
[Chrome 86.0.4240.198 linux #0-0]    ✖ should load within performance budget
[Chrome 86.0.4240.198 linux #0-0]
[Chrome 86.0.4240.198 linux #0-0] 1 failing (13.7s)
[Chrome 86.0.4240.198 linux #0-0]
[Chrome 86.0.4240.198 linux #0-0] 1) JSON.org page should load within performance budget
[Chrome 86.0.4240.198 linux #0-0] Couldn't capture performance due to: Protocol error (IO.read): Read failed
[Chrome 86.0.4240.198 linux #0-0] Error: Couldn't capture performance due to: Protocol error (IO.read): Read failed
[Chrome 86.0.4240.198 linux #0-0]     at Browser.<anonymous> (/home/vojtech-cerveny/Documents/dev/devtools-example/node_modules/@wdio/devtools-service/build/index.js:54:23)
[Chrome 86.0.4240.198 linux #0-0]     at Browser.getMetrics (/home/vojtech-cerveny/Documents/dev/devtools-example/node_modules/@wdio/utils/build/monad.js:94:33)
[Chrome 86.0.4240.198 linux #0-0]     at Context.<anonymous> (/home/vojtech-cerveny/Documents/dev/devtools-example/test/specs/example.e2e.js:12:31)
```