var redis = require('redis');
var client = redis.createClient();

client.on('error', function(err){
  console.log('Something went wrong ', err)
});

// Setting and Getting examples
client.set('my test key', 'my test value', redis.print);

client.get('my test key', function(error, result) {
  if (error) throw error;
  console.log('\nGET result ->', result)
});

// Strings
client.set('my string', 'this is a string', redis.print);

client.get('my string', function(err, result) {
  console.log(result); // this is a string
});

// Sets
client.hset('HSET record', 'key', 'value', redis.print);
client.hset('HSET record', 'second key', 'second value', redis.print);
client.hgetall('HSET record', function(err, result) {
  console.log(JSON.stringify(result)); // {"key":"value","second key":"second value"}
});