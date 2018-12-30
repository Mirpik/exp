
// let img = $(".image");
// console.log(img);
// img.addClass("className");
// img.on("click", function () {
//     img.css("background-image", "url(breaking_news_img-2.png)");
// });
// -------------------
// let img = $(".image");

// let elemm = $(".a-href");

// let parent = $(elemm).parent();
//    let tun;
//     elemm.on("click", function(event) {
//         if($(event.target).parent().index() == 0) {
//             tun = img.css("background-image", "url(breaking_news_img-2.png)");
//     } else {
//         img.css("background-image", "url(breaking_news_img-1.png)");
//     }
//     });
// =========================
let elemm = $(".a-href");    
let trig = elemm.on("click", function(event) {
    let i = $(event.target).parent().index();
    console.log(i);
    if(i == 0) {
        $(".info").show();
    }
});
// ===============================
// console.log($(trig.target).index(1));

// let info = $(".info").each(function (index, element) {
//         if(index === 0) {
//             console.log(this);
//         }
//     });
// ===--------------=======
// let elemm = $(".a-href");    
// let i = 0;
// let click = elemm.on("click", function(event) {
    
//     $(click.target).parent().each(function (index, element) {
//         // element == this
//       console.log(index);
//       i = index;  
//     });
//     $(`.info:eq(${i})`).show();
// });
// let trig = elemm.on("click", function(event) {
//     i = $(event.target).parent().index();
//     console.log(i);
    
// });