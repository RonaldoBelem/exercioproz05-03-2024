const numerosDaSorte = [37, 14, 26, 5, 94, 87];

for (var numero = 0; numero < numerosDaSorte.length; numero++) {
  let nsorte = numerosDaSorte[numero]

    if (nsorte % 2 === 0 && nsorte < 50) {
        console.log(`${nsorte} é par e menor que 50`);
    } else if (nsorte < 50) {
        console.log(`${nsorte} é menor que 50`);
    } else {
        console.log(`${nsorte} é maior que 50`);
    }
};
