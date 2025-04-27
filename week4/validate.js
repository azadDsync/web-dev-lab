const validator = require('xsd-schema-validator');
const path = require('path');

const xmlFile = path.join(__dirname, 'students.xml');
const xsdFile = path.join(__dirname, 'students.xsd');

validator.validateXML({ file: xmlFile }, xsdFile, function(err, result) {
  if (err) {
    console.error('Validation failed:', err);
  } else {
    console.log('Validation successful:', result.valid);
  }
});
