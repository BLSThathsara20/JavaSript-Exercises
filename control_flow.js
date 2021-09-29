// Hour
// If hour is between 6.00am to 12.00pm: Good morning!
// If it is between 12.00pm to 9pm: Good afternoon!
// Otherwise: Good evening!

let hour = 14;

if(hour >= 6 && hour < 12){
    console.log('Good Morning!');
}
else if(hour >= 12 && hour < 18){
    console.log('Good Afternoon!');
}
else{
    console.log('Good Evening!');
}