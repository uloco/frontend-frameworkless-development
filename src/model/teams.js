export default {
  get: () => window.fetch('http://www.json-generator.com/api/json/get/bYPZmawkoi?indent=2').then(r => r.json())
}
