console.time("operation");
for(var n=1; n<100; n++) {
    console.log(n*n);
}

console.timeEnd("operation");

// jsperf.com