
var container = $('#items')

$('button').click(function(e) {
    let rno = $('#rno');
    let sname = $('#sname');
    let marks = $('#marks');

    let rollno = rno.val();
    let name = sname.val();
    let mark = marks.val();

    e.preventDefault();

    if(rollno === "" || name === "" || mark === "") {
        alert("Please fill all the fields");
    } else{
        container.append('<div class="items">Roll no - <span class="highlight">' + rollno + '</span> , <span class="highlight">' + name +  '</span> have got <span class="highlight">' + mark +  '</span> marks</div>' );
        rno.val("");
        sname.val("");
        marks.val("");
    }
})


