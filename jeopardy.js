let response = '';
$.ajax({ type: "GET",   
         url: 'https://jservice.io/api/categories?count=100' ,   
         async: false,
         success : function(text)
         {
             response = text;
         }
});

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
  
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

shuffle(response);
console.log(response);


let cat_1 = response.pop();
let cat_2 = response.pop();
let cat_3 = response.pop();
let cat_4 = response.pop();
let cat_5 = response.pop();
let cat_6 = response.pop();


// function getCategoryIds() {

    
   

//     console.log(cat_1);
//     console.log(cat_2);
//     console.log(cat_3);
//     console.log(cat_4);
//     console.log(cat_5);
//     console.log(cat_6);

    
// };

// getCategoryIds();




/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

console.log("2341423312")


function getCategory(cat1, cat2, cat3, cat4, cat5, cat6) {

    let category_1 = '';
    $.ajax({
        dataType: "json",
        url: "http://jservice.io/api/category",
        data: cat1,
        success : function(category)
         {
            category_1 = category;
             arr = category_1.clues;
             shuffle(arr);

             console.log(arr.pop());
             console.log(arr.pop());
             console.log(arr.pop());
             console.log(arr.pop());
             console.log(arr.pop());
             
         }
      });

      let category_2 = '';
      $.ajax({
          dataType: "json",
          url: "http://jservice.io/api/category",
          data: cat2,
          success : function(category)
           {
              category_2 = category;
               arr = category_2.clues;
               shuffle(arr);
          
               console.log(arr.pop());
               console.log(arr.pop());
               console.log(arr.pop());
               console.log(arr.pop());
               console.log(arr.pop());
               
           }
        });


        let category_3 = '';
        $.ajax({
            dataType: "json",
            url: "http://jservice.io/api/category",
            data: cat3,
            success : function(category)
             {
                category_3 = category;
                 arr = category_3.clues;
                 shuffle(arr);
                 
                 console.log(arr.pop());
                 console.log(arr.pop());
                 console.log(arr.pop());
                 console.log(arr.pop());
                 console.log(arr.pop());
             }
          });


        let category_4 = '';
        $.ajax({
             dataType: "json",
             url: "http://jservice.io/api/category",
             data: cat4,
             success : function(category)
               {
                  category_4 = category;
                   arr = category_4.clues;
                   shuffle(arr);
                   
                   console.log(arr.pop());
                   console.log(arr.pop());
                   console.log(arr.pop());
                   console.log(arr.pop());
                   console.log(arr.pop());;
               }
            });



            let category_5 = '';
            $.ajax({
                dataType: "json",
                url: "http://jservice.io/api/category",
                data: cat5,
                success : function(category)
                 {
                    category_5 = category;
                     arr = category_5.clues;
                     shuffle(arr);
                     console.log(arr.pop());
                     console.log(arr.pop());
                     console.log(arr.pop());
                     console.log(arr.pop());
                     console.log(arr.pop());
                 }
              });



              let category_6 = '';
              $.ajax({
                  dataType: "json",
                  url: "http://jservice.io/api/category",
                  data: cat6,
                  success : function(category)
                   {
                      category_6 = category;
                       arr = category_6.clues;
                       cat6_title = category.title;
                       return cat6_title;
                       shuffle(arr);
                       console.log(arr.pop());
                       console.log(arr.pop());
                       console.log(arr.pop());
                       console.log(arr.pop());
                       console.log(arr.pop());
                   }
                });





}

getCategory(data = "id="+cat_1.id, 
            data = "id="+cat_2.id, 
            data = "id="+cat_3.id, 
            data = "id="+cat_4.id, 
            data = "id="+cat_5.id, 
            data = "id="+cat_6.id);


// getCategory(data = "id="+cat_2.id);
// getCategory(data = "id="+cat_3.id);
// getCategory(data = "id="+cat_4.id);
// getCategory(data = "id="+cat_5.id);
// getCategory(data = "id="+cat_6.id);


// let cat_1 = response.pop();
// let cat_2 = response.pop();
// let cat_3 = response.pop();
// let cat_4 = response.pop();
// let cat_5 = response.pop();
// let cat_6 = response.pop();



/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

function makeHtmlBoard() {

    let board = $("#jeopardy");

    for(i=0; i<5; i++){
        title = `cat_${i+1}.title`;
        category_title = `${title}`;
        console.log(category_title);
        column = $('<th>')
          .text(title)
          .attr('id', 'th'+i)
        //   .addClass("important"+i)
          .addClass("green")
        //   .attr('id', 'test'+i)
        //   .attr('scope',"col")
          ;
          
        for (x = 0; x < 6; x++) {
            panel = $('<tr>')
                .text("asdfasdf")
                .attr('id', i+'-'+x);

            column.append(panel);
            }

        board.append(column);
    }


    // $('#here_table').append(table);


    // top.addEventListener('click', rotate);
  
    // for (let x = 0; x < WIDTH; x++) {
    //   const headCell = document.createElement('td');
    //   headCell.setAttribute('id', x);
    //   top.append(headCell);
    // }
  
    // board.append(top);
  
    // // make main part of board
    
    //   }
  
    //   board.append(row);
    // }
  }
  
  



async function fillTable(c1,c2,c3,c4,c5,c6) {

    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
  
    for (let x = 0; x < WIDTH; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }
  
    table.thead.append(top);

}

function rotate(y, x) {
    const panel = document.createElement('div');
    panel.classList.add('piece');
    panel.style.top = -50 * (y + 2);
  
    const spot = document.getElementById(`${y}-${x}`);
    table.thead.append(panel);
  }
  

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {


    
    // jeopardy.append(start);

}
$("button").click(function(){
    console.log("The paragraph was clicked.");
    $("#jeopardy").empty();
    makeHtmlBoard();
    shuffle(response);
    appendTitle ();

  });
/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO

function appendTitle (){
   let a = document.getElementById("0-0").innerText;
   document.getElementById("0-0").innerText = `${5+1}`;

    $("#0-0").innerText = `${4+5}`;
    console.log(a);
};


