//global variables

var ImgValue, RanNum;
var wins =0, losses =0;
var PlayerScore = 0;
var Value = 0;



$(document).ready(function(){

    newGame();

    // auto generate 4 crystal images and apply random value to each one
    for(var i=1; i <= 4; i++){
        ImgValue = Math.floor(Math.random() * 12) + 1;
        var foo = $("<img>");
        foo.attr("src","assets/images/Crystal" + i + ".jpg");
        foo.addClass("Crystal-image");
        foo.val(ImgValue);
        $("#images").append(foo);
    }

    //click function for crystal images
    $(".Crystal-image").click(function() {
        //whenever an image is clicked retrieve that images value
        //add that value to players total score
        Value = $(this).val();
        //convert string to var
        Value = Number(Value);
        PlayerScore += Value;

        //check if user has won/loss or should keep playing

        //win
        if(PlayerScore === RanNum){
            console.log("you won");
            wins++;
            display();
            newGame();
        }else 
        //loss
        if(PlayerScore > RanNum){
            console.log("you lose");
            losses++;
            display();
            newGame();

        }else{
            //keep playing
        display();
        }
    });
});

function newGame(){
    //resets players score and chooses new random number
    PlayerScore = 0;
    RanNum = Math.floor(Math.random() * 120) + 19;
    $("#Ran-Num").html(RanNum);
    display();
}


function display(){
    //display 
    $("#score").html(PlayerScore);
    $("#win").html(wins);
    $("#loss").html(losses);

}