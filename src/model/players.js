export default {
  get: () => window.fetch('http://www.json-generator.com/api/json/get/ctThuzTznm?indent=2').then(r => r.json())
}

