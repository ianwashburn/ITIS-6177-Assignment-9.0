console.log('Loading function');

export const handler = function(event, context, callback) {
  // Parse the input for the name, city, time and day property values
  let keyword = event.keyword === undefined ? 'you' : event.keyword;

  // Generate a greeting
  let greeting = keyword;
  if (keyword) greeting += 'Ian says ' + keyword;
  
  // Log the greeting to CloudWatch
  console.log('greeting: ', greeting);
  
  // Return a greeting to the caller
  callback(null, {
      "greeting": greeting
  }); 
};