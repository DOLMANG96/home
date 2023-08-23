
/** 카테고리  */
function categorySelect1(e) {
    var design = ["그래픽", "제품"];
    var language = ["영어", "중국어"];
    var hair = ["헤어메이크업", "제품홍보사진"];
    var tax = ["사업자", "개인"];
    var marketing = ["SNS홍보", "해외마케팅"];
    var target = document.getElementById("mcategory1");

    if(e.value == "a") {
		var z = design;
		var index=1;
	}
    else if(e.value == "b") {
		var z = language;
		var index=3;
	}
    else if(e.value == "c") {
	 	var z = hair;
	 	var index=5;	
	}	
    else if(e.value == "d") {
		var z = tax;
	 	var index=7;	
	}
    else if(e.value == "e") {
		var z = marketing;
	 	var index=9;	
	}
    target.options.length = 0;

    for (x in z) {
        var opt = document.createElement("option");
        opt.value = index+x;
        opt.innerHTML = z[x];
        target.appendChild(opt);
    }
}

/** 카테고리  */
function categorySelect2(e) {
    var design = ["그래픽", "제품"];
    var language = ["영어", "중국어"];
    var hair = ["헤어메이크업", "제품홍보사진"];
    var tax = ["사업자", "개인"];
    var marketing = ["SNS홍보", "해외마케팅"];
    var target = document.getElementById("mcategory2");

    if(e.value == "a") var z = design;
    else if(e.value == "b") var z = language;
    else if(e.value == "c") var z = hair;
    else if(e.value == "d") var z = tax;
    else if(e.value == "e") var z = marketing;

    target.options.length = 0;

    for (x in z) {
        var opt = document.createElement("option");
        opt.value = z[x];
        opt.innerHTML = z[x];
        target.appendChild(opt);
    }
}

/** 카테고리  */
function categorySelect3(e) {
    var design = ["그래픽", "제품"];
    var language = ["영어", "중국어"];
    var hair = ["헤어메이크업", "제품홍보사진"];
    var tax = ["사업자", "개인"];
    var marketing = ["SNS홍보", "해외마케팅"];
    var target = document.getElementById("mcategory3");

    if(e.value == "a") var z = design;
    else if(e.value == "b") var z = language;
    else if(e.value == "c") var z = hair;
    else if(e.value == "d") var z = tax;
    else if(e.value == "e") var z = marketing;

    target.options.length = 0;

    for (x in z) {
        var opt = document.createElement("option");
        opt.value = z[x];
        opt.innerHTML = z[x];
        target.appendChild(opt);
    }
}

/** 가입하기 */

$(document).ready(function(){
	//회원가입 버튼(회원가입 기능 작동)
	$("button#submit").click(function(){
		$("#join_form").attr("action", "/test/join");
		$("#join_form").submit();
	});
});









