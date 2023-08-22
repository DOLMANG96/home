function categorySelect1(e) {
    var design = ["그래픽", "제품"];
    var language = ["영어", "중국어"];
    var hair = ["헤어메이크업", "제품홍보사진"];
    var tax = ["사업자", "개인"];
    var marketing = ["SNS홍보", "해외마케팅"];
    var target = document.getElementById("mcategory1");

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

