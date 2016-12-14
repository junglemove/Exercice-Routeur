/**
 * Created by Administrateur on 14/12/2016.
 */

var contacts = [{
   prenom: 'Bill',
    nom: '',
    id: 1
},{
    prenom: 'Steve',
    nom: '',
    id: 2
}];

module.exports.routes = [{
    url: "/contacts",
    method: "GET",
    callback:(req,res) =>{
        res.write("<table>");

        for(let contact of contacts){
            res.write("<tr>");
            res.write(`<td>${contact.prenom}</td>`);
            res.write("</tr>");
        }

        res.write("</table>");
    }
},{
    url: "/contacts/123",
    method: "GET",
    callback:(req,res) =>{

    }
}]