$(document).ready(function() {
    let tirSize, // размер
        pricePaper = 0, //цена за бумагу
        priceForma = 0, // цена за форму
        pricePrint = 0, //цена за печать
        sum = 0, //итого
        color_format = "";

    // let paperType = Map({
    //         "coated": 6.8,
    //         "splendorgel": 40.5,
    //         "prestige": 45.0
    //     })
    let paperType = {
        "Выберите бумагу": 0,
        "Мелованная бумага (белая)": 6.8,
        "Бумага повышенной белизны (SPLENDORGEL)": 40.5,
        "Prestige Лён (белый)": 45
    };

    let colorType = new Map([
        ["Выберите цветность", { file: 0, print: 0 }],
        ["Односторонняя черно-белая", { file: 14, print: 110 }],
        ["Двусторонняя черно-белая", { file: 28, print: 220 }],
        ["Односторонняя цветная", { file: 37, print: 110 }],
        ["Цветная с лицевой, ч/б с оборотной", { file: 51, print: 220 }],
        ["Двусторонняя цветная", { file: 74, print: 220 }]
    ]);

    let imgIds = new Map([]);

    //Fill paper options
    (function selectPaper() {
        let html = "";
        for (type in paperType) {
            html += "<option value='" + paperType[type] + "'>" + type + "</option>";
        }
        $("#ppr").append(html);
    })();

    //Fill color options
    (function selectColor() {
        let html = "";
        let i = 0;
        for (type of colorType.keys()) {
            html += "<option value='" + type + "'>" + type + "</option>";

            imgIds.set(type, "#img" + i);
            i++;
        }
        imgIds.delete("Выберите цветность");

        $("#clr").append(html);
    })();

    //Show corresponding image
    $("#clr").change(function() {
        color_format = $("#clr").val();

        //Hide all images
        $(".images img").addClass("d-none")

        //Show corresponding image
        $(imgIds.get(color_format)).removeClass("d-none")
    })

    //Calculate total cost
    $(".calculate").change(function() {
        let copiesCount = document.getElementById("cps").value;

        let paperSel = document.getElementById("ppr");
        let paperPrice = paperSel.options[paperSel.selectedIndex].value;

        let colorSel = document.getElementById("clr");
        let colorOption = colorSel.options[colorSel.selectedIndex].value;
        let colorPrice = colorType.get(colorOption);
        let total = copiesCount * paperPrice + colorPrice.file + copiesCount * colorPrice.print;
        document.getElementById("total").innerHTML = total;
    })
});