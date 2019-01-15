//enter google sheets key here
var key =
  "https://docs.google.com/spreadsheets/d/1U_TUkv7fiOKrlbNMzOApzGLjrQouuAzrP7qFekWaxLo/edit?usp=sharing";
  
//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "name",
  "title": "Name"
}, {
  "data": "title",
  "title": "Title"
}, {
  "data": "department",
  "title": "Department"
}, {
  "data": "phone",
  "title": "Phone"
}, {
  "data": "email",
  "title": "Email"
}, {
  "data": "responsibilities",
  "title": "Responsibilities"
}];

$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //console.log(data);
    
    //initialize the DataTable object and put settings in
    var table = $("#directory").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "order": [
        [0, "asc"]
      ]
    });
  }

});