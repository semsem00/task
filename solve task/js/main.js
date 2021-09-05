//-------------------------------------------------------------
// date and time in NavBar
//------------------------------------------------------------
let time = document.getElementById('time');
let date = document.getElementById('Date');
let d = new Date();
let hour = d.getHours();
let minute = d.getMinutes();
let year = d.getFullYear();
let month= d.getMonth();
let day = d.getDate();

let Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 // to get time           
time.innerHTML=  hour +" :" + minute;
// to get date
date.innerHTML = day +' '+ Months[month]+' '+ year ;

//--------------------------------------------------------------------------------------------
// Delet and Edit in the tabel
//--------------------------------------------------------------------------------------------
let delet = document.getElementById('delete-row');
let edit = document.getElementById('edit');
let closed = document.getElementById('closed');
let tr = document.getElementsByTagName('tr');


function deleteRow(tableId)  {
    var table = document.getElementById('tableId').tBodies[0];
    var rowCount = table.rows.length;

    for(var i=1; i<rowCount; i++) {
        var row = table.rows[i];
        console.log(row);
        document.querySelectorAll('.check:checked').forEach(e => {
             e.parentNode.parentNode;
                   e.parentNode.parentNode.remove();
                   console.log(e);
         }
      );
            rowCount--;
            i--;
          }
    }


//  let Name = document.getElementById('name') ;
//  let priority = document.getElementById('priority');
//  let indecator= document.getElementById('indecator');
//  let done = document.getElementById('done');
//  let spentTime = document.getElementById('spentTime');

//  projectsList=[];

//  var projects = {
//     Name_p: Name.value,
//     priority_p:priority.value,
//     indecator_p: indecator.value,
//     spentTime_p: spentTime.value,
//   };

//   console.log(projects);
//   projectsList.push(projects);

//   let updatedIndex = 0;
//   function update(){
//   for(var i=1; i<rowCount; i++) {
//     var row = table.rows[i];
//     console.log(row);
//     document.querySelectorAll('.check:checked').forEach(e => {

    

//     projectsList[updatedIndex].Name_p = Name.value;
//     projectsList[updatedIndex].priority_p = priority.value;
//     projectsList[updatedIndex].indecator_p = indecator.value;
//     projectsList[updatedIndex].spentTime_p = spentTime.value;
// })};
    
// }


window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light1", // "light2", "dark1", "dark2"
        animationEnabled: false, // change to true		
        title:{
            text: "Number Of Tasks: 304"
        },

        axisY: {
            title: "Number Of Tasks"
        },
        data: [
        {
            // Change type to "bar", "area", "spline", "pie",etc.
            type: "column",
            dataPoints: [
                { label: "none",  y: 268  },
                { label: "Easy Admin", y: 11  },
                { label: "Connie", y: 9  },
                { label: "Danny",  y: 8  },
                { label: "Evelyn Junior",  y: 8  }
            ]
        }
        ]
    });
    chart.render();
    
    }