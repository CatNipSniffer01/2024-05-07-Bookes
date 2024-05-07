/*
* File: app.js
* Author: Czövek Balázs
* Copyright: 2024, Czovek Balázs
* Group: Szoft I/1/N
* Date: 2024-05-07
* Github: https://github.com/CatNipSniffer01/
* Licenc: GNU GPL
*/
const doc ={EmpBody: document.querySelector("#EmpBody")}

const state = {BookList: []}

function GetBooks(){
    const url = 'http://localhost:8000/Books'
    fetch(url).then(response => response.json()).then(result => {
        state.BookList = result
        console.log(state.BookList)
    })
}
function EmployBooks(){
    state.BookList.forEach( emp =>{
        var tr = document.createElement('tr')
        doc.EmpBody.innerHTML= `<td>${emp.Id}</td>`+
        "<td>${emp.Name}</td>"+
        "<td>${emp.Author}</td>"+
        "<td>${emp.Price}</td>";
        })
}
GetBooks()
EmployBooks()