const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/treeplantingapp';
const secret = process.env.SECRET || 'treeplantingapp';
const port = process.env.PORT || 4000;
console.log('port is, mongodb is', port, dbURI);

module.exports = {
  dbURI, secret, port
};
