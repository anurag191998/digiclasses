function addstu(){
    var stuname = $("#stuname").val();
    var stuname = $("#stuemail").val();
    var stuname = $("#stupass").val();
    $.ajax({
        url:'student/addstudent.php', method:'POST',
        data:
        {
            stusignup:"stusignup",
            stuname:stuname,
            stuemail:stuemail,
            stupass:stupass,
        },

        success:function(data){
            console.log(data)
        }

    })
}