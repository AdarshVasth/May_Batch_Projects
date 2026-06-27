//infinite loop

let i = 1;
while (i>0) {
    console.log(i);
    i++;

    if (i == 10000) {
        break;
    }
}
