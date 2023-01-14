function plus(){
    var equal = 1600;
    var result = document.getElementsByName("amount");
    for(i = 0; i < result.length; i++) {
                if(result[i].checked){
                location.href = "correct.html";
            } else{
                location.href = "wrong.html";
            }
            }
  }