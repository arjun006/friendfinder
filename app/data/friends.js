$(document).ready(function(){

    $("#submitBtn").on('click', function(event){
        event.preventDefault();
// Take user data inputs and store in variable
        let userInput = {
            name: $('#nameInput').val().trim(),
            image: $("#imageLink").val().trim(),
            answers: [
                $('#question1').val().trim(),
                $('#question2').val().trim(),
                $('#question3').val().trim(),
                $('#question4').val().trim(),
                $('#question5').val().trim(),
                $('#question6').val().trim(),
                $('#question7').val().trim(),
                $('#question8').val().trim(),
                $('#question9').val().trim(),
                $('#question10').val().trim(),
            ]
        };
        console.log(userInput);
    });

// Permenant Friends array

    const friends = [
        {
        name:"Dwight Schrute",
        image:'',
        answers:[]
        },{
        name:"Pam Beesley",
        image:'',
        answers:[]
        },{
        name:"Michael Scott",
        image:'',
        answers:[]
        },{
            name:"Jan Levinson",
        image:'',
        answers:[]
        },{
            name:"Jim Halpert",
        image:'',
        answers:[]
        },{
            name:"Stanley Hudson",
        image:'',
        answers:[]
        },{
            name:"Kelly Kapoor",
        image:'',
        answers:[]
        },{
            name:"Kevin Malone",
        image:'',
        answers:[]
        },{
        name:"Angela Martin",
        image:'',
        answers:[]
        }
    ]
    console.log(friends);
    
});
module.export=friends;