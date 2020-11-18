const assert = require('assert')

describe('JSON.org page', () => {
    before(() => {
        browser.enablePerformanceAudits()
    })

    it('should load within performance budget', () => {

        browser.url('http://json.org')

        let metrics = browser.getMetrics()
        assert.ok(metrics.speedIndex < 1500) // check that speedIndex is below 1.5ms

        let score = browser.getPerformanceScore() // get Lighthouse Performance score
        assert.ok(score >= .99) // Lighthouse Performance score is at 99% or higher

        $('=Esperanto').click()

        metrics = browser.getMetrics()
        assert.ok(metrics.speedIndex < 1500)
        score = browser.getPerformanceScore()
        assert.ok(score >= .99)
    })

    after(() => {
        browser.disablePerformanceAudits()
    })
})