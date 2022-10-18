/*Abbiamo un array di alimenti.
Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while*/

//----FOR----//
const alimenti = ["nutella", "frutta", "latte", "pasta", "acqua"];
let length = alimenti.length;

for(let i = 0; i < length; i++){
  console.log(alimenti[i]);
}


//----WHILE----//
const alimenti = ["nutella", "frutta", "latte", "pasta", "acqua"];
let length = alimenti.length;
let i=0;

while(i<length){
  console.log(alimenti[i]);
  i++;
}