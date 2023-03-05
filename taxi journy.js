function taxi(kiloMeter) {
  if (kiloMeter === 1) {
    console.log(`the journy price = ${3} $`);
  } else {
    let price = (kiloMeter - 1) * 2 + 3;
    console.log(`the journy price = ${price} $`);
  }
}
taxi(5);
taxi(1);

