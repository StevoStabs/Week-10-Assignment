var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '15yedul4bDkFuTGxGtYnujbJZ',
  consumer_secret: 'f4RlXKskk58c9OTTCLXDG7U424zCRTAJ95TED14PIzSdzgV1nr',
  access_token_key: '508153926-fAI69T3M26c3aIYetlIoudDYXeJvE7QioMNdNNed',
  access_token_secret: 'QuK3lBnQqX1RQS8oi1gFS3AdbN9SCeSbvyZCQD5KICb6E'
});
 
var params = {screen_name: 'stevostabs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets[0].text);
  }
});