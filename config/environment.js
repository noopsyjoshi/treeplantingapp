const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/shinrin-yoku';
const secret = process.env.SECRET || 'shinrin-yoku';
const port = process.env.PORT || 8000;
console.log('port is, mongodb is', port, dbURI);

module.exports = {
  dbURI, secret, port
};
