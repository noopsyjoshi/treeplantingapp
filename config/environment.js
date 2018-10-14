const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/treeplantapp';
const secret = process.env.SECRET || 'sdkjfnskdfj';
const port = process.env.PORT || 8000;
console.log('port is, mongodb is', port, dbURI);

module.exports = {
  dbURI, secret, port
};
