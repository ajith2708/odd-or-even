let colours = ['red', 'blue', 'green'];
for (let index in colours) {
    console.log(colours[index]);
    // when we call only index the output is only index
}

for (let color of colours) {
    console.log(color);
}
