window.onload = function () {
    var hod = '';
    var cell1
    var cell2
    var cell3
    var cell4
    var cell5
    var cell6
    var cell7
    var cell8
    var cell9

    function vars(){
        cell1 = document.getElementById('cell1').value;
        cell2 = document.getElementById('cell2').value;
        cell3 = document.getElementById('cell3').value;
        cell4 = document.getElementById('cell4').value;
        cell5 = document.getElementById('cell5').value;
        cell6 = document.getElementById('cell6').value;
        cell7 = document.getElementById('cell7').value;
        cell8 = document.getElementById('cell8').value;
        cell9 = document.getElementById('cell9').value;
    }

     function winCheckX() {
         vars();
        if(cell1 == 'x' && cell5 == 'x' && cell9 == 'x'){
            // alert('игрок 1 выиграл');
        }else if(cell3 == 'x' && cell5 == 'x' && cell7 == 'x'){
            // alert('игрок 1 выиграл');
        }else if(cell1 == 'x' && cell2 == 'x' && cell3 == 'x'){
            // alert('игрок 1 выиграл');
        }else if(cell4 == 'x' && cell5 == 'x' && cell6 == 'x'){
            // alert('игрок 1 выиграл');
        }else if(cell7 == 'x' && cell8 == 'x' && cell9 == 'x'){
            // alert('игрок 1 выиграл');
        }else if(cell1 == 'x' && cell4 == 'x' && cell7 == 'x'){
            // alert('игрок 1 выиграл');
        }else if(cell2 == 'x' && cell5 == 'x' && cell8 == 'x'){
            // alert('игрок 1 выиграл');
        }else if(cell3 == 'x' && cell6 == 'x' && cell9 == 'x'){
            // alert('игрок 1 выиграл');
        }else{
           return false;
        }
        return true;
     }
     function winCheckO() {
         vars();
         if(cell1 == '0' && cell5 == '0' && cell9 == '0'){
             // alert('игрок 2 выиграл');
         }else if(cell3 == '0' && cell5 == '0' && cell7 == '0'){
             // alert('игрок 2 выиграл');
         }else if(cell1 == '0' && cell2 == '0' && cell3 == '0'){
             // alert('игрок 2 выиграл');
         }else if(cell4 == '0' && cell5 == '0' && cell6 == '0'){
             // alert('игрок 2 выиграл');
         }else if(cell7 == '0' && cell8 == '0' && cell9 == '0'){
             // alert('игрок 2 выиграл');
         }else if(cell1 == '0' && cell4 == '0' && cell7 == '0'){
             // alert('игрок 2 выиграл');
         }else if(cell2 == '0' && cell5 == '0' && cell8 == '0'){
             // alert('игрок 2 выиграл');
         }else if(cell3 == '0' && cell6 == '0' && cell9 == '0'){
             // alert('игрок 2 выиграл');
         }else{
             return false;
         }
         return true;
     }
     function draw() {

         if(cell1 != ' ' && cell2 != ' ' && cell3 != ' ' && cell4 != ' ' && cell5 != ' ' && cell6 != ' ' && cell7 != ' ' && cell8 != ' ' && cell9 != ' '){
             return true;
         }
         return false;
     }
     document.getElementById('tictac').onclick = function (event) {
         vars();
         if(event.target.className == 'tictac__item') {

             if(event.target.value != ' '){
                 return false;
             }else if (hod % 2 == 0) {
                 event.target.value = 'x';
             }else if(hod % 2 != 0){
                 event.target.value = '0';
             }
             hod++;
         }
             if(winCheckX()) {
                 alert('выиграл игрок 1');
                 window.location.reload();
             }
             if(winCheckO()) {
                 alert('выиграл игрок 2');
                 window.location.reload();
             }
             if(draw()) {
                 alert('ничья');
                 window.location.reload();
             }

        }



}
