var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


$(document).ready(function(){
    var d = new Date();
    var mth = d.getMonth()+1;
    var yr = d.getFullYear();
    $("#month").val(mth);
    $("#year").val(yr);
    showCalendar(mth, yr);
    
    $("#month,#year").change(function(e){
        showCalendar ($("#month").val(), $("#year").val());
    });
});


function daysInMonth(anyDateInMonth){
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar(mth, yr){
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();
    var str = "<ul>";
    str += "</ul>";
    str += "<table id='myTable'>";
    var dateNumber = 1;
    
    while(dateNumber <= numberOfDaysInMonth){
        str += "<tr class='weekHeader'>";
        
        for(var dow = 0; dow < 7; dow++){
            
            if(dow == firstDayOfWeek && dateNumber <= numberOfDaysInMonth){
                str += "<td class='dayHeader'>" + dateNumber + "</td>";
                dateNumber++;
                firstDayOfWeek++;
            }else{
                str += "<td class='Grey dayHeader'></td>";
            }
        }
        firstDayOfWeek = 0;
        str += "<tr>";
    }
    
    str += "</table>";
    $("#results").html(str);
    
    $('#yes').click(function(){
        $('#myTable td').addClass('Green');
        $('#myTable td').removeClass('Red');
    });
    
    $('#no').click(function(){
        $('#myTable td').addClass('Red');
        $('#myTable td').removeClass('Green');
    });
    
    $('#myTable td').on("click",function(){
        var cell = $(this);
        
        if(cell.hasClass('Green')){
            cell.removeClass('Green');
            cell.addClass('Red');
        }
        
        else if(cell.hasClass('Red')){
            cell.removeClass('Red');
        }else{
            cell.addClass('Green');
        }})
}


