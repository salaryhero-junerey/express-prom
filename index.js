const express = require('express')

const app = express()

const promBundle = require('express-prom-bundle')

const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  includeStatusCode: true,
  includeUp: true,
  customLabels: { project: 'my-project' },
  promClient: {
    collectDefaultMetrics: {}
  }
})

app.use(metricsMiddleware)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (_, res) => {
  res.send('Im alive')
})

app.listen(3000, () => { console.log('API is running') })
