function avg () {
    var sum=0;
    var marks  = document.forms["frm"];
    var i = 1;
    for(let mark of marks){
        console.log("Mark "+ Number(i) +" =  " + mark.value);
        sum+= Number(mark.value);
        i++;
    }
    /*for (i=0 ; i<marks.length ; i++) 
    {
        console.log("Mark "+ Number(i+1) +" =  " + marks[i].value);
        sum+= Number(marks.elements[i].value);
    } */

    var avg = sum/marks.length;
    console.log("avg =  "+avg);
    document.getElementById("rslt").innerHTML ="The Average is =  " + avg.toFixed(1) ;
}

function addMark () {
    var btn = document.createElement("INPUT");
    var brk= document.createElement("BR");
    document.getElementById("frm").appendChild(brk);
    btn.setAttribute("type", "number");
    btn.setAttribute("placeholder", "Enter a Mark");
    btn.setAttribute("id","mark");
    btn.setAttribute("oninput","chk()");
    document.getElementById("frm").appendChild(btn);
}

function chk () {
    var marks  = document.forms["frm"];
    var i;
    for(let mark of marks){
        if(mark.value<0 || mark.value>100){
            alert ('Wrong Input!!\nInsert Legal Mark!');
        }
    }
    /*for (i=0 ; i<marks.length ; i++) 
        if (marks[i].value<0 || marks[i].value>100)
            alert ('Wrong Input!!\nInsert Legal Mark!'); */
}

// في حال إصرار المُستخدم على إدخال علامات غير قانونية, وعند الضغط على زر المُعدّل لاتظهر النتيجة
// بل تظهر رسالة تنبيه بدل النتيجة
function chk2(){
    var marks  = document.forms["frm"];
    var i;
    for (i=0 ; i<marks.length ; i++) 
        if (marks[i].value<0 || marks[i].value>100)
        {
            document.getElementById("rslt").innerHTML ="Wrong Marks!! "+"<br>"+
             "Please Check & Insert Correct Marks!!" ;
             console.error("Wrong Marks!!");
             
        }
}