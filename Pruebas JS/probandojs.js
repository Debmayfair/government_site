/*JavaScript Exercises 2
Exercise 1
Now let's add content to an HTML document instead of writing to the console.
Write a function called addBands(myBandList) that will list your favorite bands.
Start with an empty HTML page that contains a level 1 heading "My Favorite Bands"
and an empty unordered list with ID band-list.
Your function should use the JavaScript DOM to create list items and add them
to the unordered list, with one list item for each string in array myBandList.
For example, if I call:
  addBands(['Dire Straits', 'Kansas', 'Steely Dan']);
The function will add three list items to the unordered list.*/

/*
var myBandsList = ["Queens Of The Stone Age", "romance", "Arctic Monkeys", "Shuffle your feet"];


function loopingMyArray(){
    var ul = document.getElementById("band-list");
    for(i = 0; i<myBandsList.length; i++){         
        var li = document.createElement("li");     
        li.textContent = myBandsList[i];           
        ul.appendChild(li)
    }
}

loopingMyArray();

/*se crea una variable para donde debe ir la lista. Se crea un bucle para obtener todos los elementos de la array. Se une el li de la lista con cada miembro de la array. Para que no quede flotando, se une el li en la variable ul que es el elemento que hace referencia en nuestro HTML, todo esto sucede para cada elemento de la array, el cual está unido debido al textContent anterior, con el elemento*/

//La función de abajo solo funciona si se desactiva la de arriba. Todo muy lógico oye. 




/*Write a function called addMultTable(rows, cols) that will create a multiplication
table like this. Start with an empty HTML page that only contains a level 1 heading.
Your function should use the JavaScript DOM to insert an HTML table after the heading.
For example, if I call:
    addMultTable(4, 8);
It will create an HTML table with 4 rows
and 8 columns, and append it after the level 1 heading.*/


function addMultTable(x, y) {
    var tablita = document.getElementById("tablins");
    for(i = 0; i<x; i++){
        var row = document.createElement("tr");
        for (j = 0; j<y; j++){
            var col = document.createElement("td");
            row.appendChild(col);
        }
         
    tablita.appendChild(row);
    } 
}

 addMultTable(8, 9);