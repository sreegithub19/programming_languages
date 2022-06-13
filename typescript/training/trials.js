setTimeout(function () {
  console.log("10 seconds later...");
}, 10000);



var callback = function () {
  console.log("10 seconds first...");
};
setTimeout(callback, 10000);