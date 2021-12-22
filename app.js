const vestidos = [];
// Declaración de la clase constructora
class Vestido{
    constructor(marca,precio,color){
        this.id = vestidos.length;
        this.marca = marca.toUpperCase();
        this.precio = Number(precio);
        this.color = color;
    }
    detalle(){
        return `La marca es: ${this.marca} y el valor del vestido es: $ ${this.precio}`;
    }
 }
// instanciamos 3 objetos vestido de la clase vestido

vestidos.push(new Vestido("Patito", '5000', 'Rojo'));  
vestidos.push(new Vestido(`only`, `3000`, `Negro`));
vestidos.push(new Vestido(`Oberol`, `4000`, `Blanco`));

console.log(vestidos);

// creamos una función para generar el selector de vestidos

function vestidosSelect(id){
    let innerSelect = '';
    vestidos.forEach(vestido => innerSelect += `<option value='${vestido.id}'>${vestido.marca}<option>`)
    return `<select id="${id}">${innerSelect}</select>`;
}

// agregamos el reccorrido del forEach al DOM si detecta el evento
$('body').append(vestidosSelect('elegirVestido'));
$('#elegirVestido').change(function (e) {
    e.preventDefault();
    const seleccion = vestidos.find(obj => obj.id == e.target.value);
    $('body').append(`<h3>${seleccion.detalle()}</h3>`);
})

const colores = ["ROJO", "VERDE", "AZUL", "NARANJA"];

function selectLista(array, id){
    let innerSelect = "";
    array.forEach((elemento, index) => innerSelect += `<option value='${index}'>${elemento}</opcion>`)
    return `<select id="${id}">${innerSelect}</select>`;
}

//formulario destinado al alta de vestidos
$("body").append(` <form id='altaVestido'>
                <input type="text" value="Marca">
                <input type="number">
                ${selectLista(colores,'formSelect')}
                <input type="submit">
                </form>`);

$("#altaVestido").submit(function (e) {
    e.preventDefault();
    const inputs = e.target.children;
    let vestido = new Vestido(inputs[0].value, inputs[1].value, colores[inputs[2].value])
    vestidos.push(vestido);
    $("body").append(`<h4> Registro creado: ${vestido.detalle()}</h4>`);
   console.log(vestidos);
});                