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

    //hide all images
    // function hideImgs()
    // $(".images img").hide();

    // let colorType = Map({
    //     "oneSideBw": { file: 14, clishe: 110 },
    //     "twoSideBw": { file: 28, clishe: 220 },
    //     "oneSideClr": { file: 37, print: 110 },
    //     "oneClrOneBw": { file: 51, print: 220 },
    //     "twoSideClr": { file: 74, print: 220 }
    // })

    // let colorName = (
    //     "Выберите цветность",
    //     "Односторонняя черно-белая",
    //     "Двусторонняя черно-белая",
    //     "Односторонняя цветная",
    //     "Цветная с лицевой, ч/б с оборотной",
    //     "Двусторонняя цветная"
    // )

    // let paperName = (
    //     "Выберите бумагу",
    //     "Мелованная бумага (белая)",
    //     "Бумага повышенной белизны (SPLENDORGEL)",
    //     "Prestige Лён (белый)"
    // )

    (function selectPaper() {
        let html = "";
        for (type in paperType) {
            html += "<option value='" + paperType[type] + "'>" + type + "</option>";
        }
        $("#ppr").append(html);
    })();
    (function colorPaper() {
        let html = "";
        let i = 0;
        for (type of colorType.keys()) {
            html += "<option value='" + type + "'>" + type + "</option>";
            // console.log(colorType[type]["file"])

            imgIds.set(type, "#img" + i);
            i++;
        }
        imgIds.delete("Выберите цветность");

        $("#clr").append(html);
    })();
    $(".calculate").change(function() {
        color_format = $("#clr").val();

        $(".images img").addClass("d-none img-fluid")
        $(imgIds.get(color_format)).removeClass("d-none")
            // $(".images img").hide();


        // console.log({ im: imgIds.get(color_format) });

        // $(imgIds.get(color_format)).addClass("d-block img-fluid")
    })
});