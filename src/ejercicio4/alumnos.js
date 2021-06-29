// Dado el siguiente arreglo:
// A) Escriba el código en javascript para que construya la siguiente tabla, resalta la fila en color
// rojo de los alumnos con promedio reprobatorio (menor a 6):

//Datos
const students = [
    {
        nombre: 'Jesús', apellidoP: 'Paniagua', apellidoM: 'Hernández',
        parcial1: 6, parcial2: 5, parcial3: 10, final: 0
    },
    {
        nombre: 'Mauricio', apellidoP: 'Salgado', apellidoM: 'Flores', 
        parcial1: 8, parcial2: 10, parcial3: 9, final: 0
    },
    {
        nombre: 'Diana', apellidoP: 'Lopez', apellidoM: 'García', 
        parcial1: 6, parcial2: 5, parcial3: 0, final: 0
    }
];

let MainHeaders = [
    {
        name: 'Nombre',
        colspan: 3
    },
    {
        name: 'Calificaciones',
        colspan: 4
    }
]

let columnsNames = ['Nombre', 'Apellido Paterno', 'Apellido Materno', 'Parcial 1', 'Parcial 2', 'Parcial 3', 'Final'];

//lugar en el DOM donde se colocará la tabla
const table_section = document.getElementById('data');
let table = document.createElement('table');
table.style.border = '1px solid black';

//Funciones
const setMainHeaders = (objHeader) => {
    let th = document.createElement('th');
    th.setAttribute('colspan', objHeader.colspan)
    th.style.border = '1px solid black';
    th.innerText = objHeader.name;
    return th;
}

const setColumn = (column_name, type) => {
    let te = document.createElement(type);
    te.innerText = column_name;
    te.style.border = '1px solid black';
    return te;
}

const setFinalNote = (student_notes) => {
    let avg = 0;
    student_notes.forEach(note => avg += note);
    avg = Math.round((avg/student_notes.length) * 100)/100;
    return avg;
}

//Funcion principal
const renderTable = () => {
    //main header tr
    let trow_header = document.createElement('tr');
    trow_header.style.backgroundColor = 'skyblue';
    //columns names header tr
    let trow_labels = document.createElement('tr');
    //Main header
    MainHeaders.forEach(header => {
        let main_header = setMainHeaders(header);
        trow_header.appendChild(main_header);
    });
    //Columns names
    columnsNames.forEach(column => {
        let column_name = setColumn(column, 'th');
        trow_labels.appendChild(column_name);
    });
    //Append columns headers
    table.appendChild(trow_header);
    table.appendChild(trow_labels);
    table_section.appendChild(table);
    //load data
    for (const i in students) {
        let tr_data = document.createElement('tr');
        let student_data = Object.values(students[i]);
        let student_notes = student_data.slice(3, student_data.length - 1);
        student_data[student_data.length - 1] = setFinalNote(student_notes);
        if (student_data[student_data.length - 1] < 6) {
            tr_data.style.backgroundColor = 'red';
        }
        student_data.forEach(data => {
            let student = setColumn(data, 'td');
            tr_data.appendChild(student);
        }); 
        table.appendChild(tr_data);
    };
}

renderTable();