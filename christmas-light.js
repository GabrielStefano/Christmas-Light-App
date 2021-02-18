TurnOff()

function TurnOn(){
    var circle = document.getElementsByClassName('circle')
    var n = 1
    for (i=0; i<circle.length; i++){
        if (n%5!=0){
            var t1 = 10
            var t2 = 50
            var j = 6
            // document.styleSheets[0].insertRule(`@keyframes glow-${j} { 0%, ${t1}% { box-shadow: 0 0 20px 5px #c0392b; } ${t2}% { box-shadow: none; } }`)
            // window.alert(myRules)
            // var stylesheet = createStyleSheet();
            // stylesheet.insertRule(getSelector() + `@keyframes glow-${j} { 0%, ${t1}% { box-shadow: 0 0 20px 5px #c0392b; } ${t2}% { box-shadow: none; } }`, 0);
            // CSSKeyframesRule.appendRule(`@keyframes glow-${j} { 0%, ${t1}% { box-shadow: 0 0 20px 5px #c0392b; } ${t2}% { box-shadow: none; } }`)
            insertStyleSheetRule(`@keyframes glow-${j} { 0%, ${t1}% { box-shadow: 0 0 20px 5px #c0392b; } ${t2}% { box-shadow: none; } }`);
            circle[i].removeAttribute("style");
            circle[i].style.animationPlayState = "running"

            circle[i].style.animation = `glow-${j} 1s infinite`
            // circle[i].style.setProperty('--m','50%');
            // circle[i].style.setProperty('--w','100%');
            n++
        }
        else{
            n=1
            circle[i].removeAttribute("style");
            circle[i].style.animationPlayState = "running"
            circle[i].style.animation = `glow-${n} 1s infinite`
            n++
        }

    }
}

function TurnOff(){
    var circle = document.getElementsByClassName('circle')
    for (i=0; i<circle.length; i++){
        circle[i].style.animation = "none"
    }
}

function ChangeSpeed() {
    var circle = document.getElementsByClassName('circle')
    var speed = document.getElementById('speed').value;
    for (var i = 0; i < circle.length; i++) {
      circle[i].style.animationDuration = speed + "s";
    }
}

var item = document.querySelectorAll('.circle').forEach(item =>{
    item.addEventListener('click', event =>{
        var colors = ['red', 'yellow', 'blue', 'green']
        for (var i=0; i<colors.length; i++){            
            if (i<(colors.length-1) && item.classList==`circle ${colors[i]}`){
                item.classList.remove(`${colors[i]}`)
                item.classList.toggle(`${colors[(i+1)]}`)
                // window.alert(item.classList[1])
                // item.style.animation = `inherit`
                // item.style.animation = 'paused'
                break;
            }
            else if(i==(colors.length-1)){
                item.classList.remove(`${colors[i]}`)
                item.classList.toggle(`${colors[0]}`)

                // item.style.animation = `glow-${1} 1s infinite`
                // item.style.animation = 'inherit'
            }
        }

    })
})


function insertStyleSheetRule(ruleText){
    let sheets = document.styleSheets;

    if(sheets.length == 0)
    {
        let style = document.createElement('style');
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
    }

    let sheet = sheets[sheets.length - 1];
    // window.alert(CSSKeyframesRule.cssRules)
    // sheet.insertRule(ruleText, 1);
    // sheet.addRule("#myList li", "float: left; background: red !important;", 1);
    // sheet.insertRule(ruleText, sheet.rules ? sheet.rules.length : sheet.cssRules.length);


    // var myReuseableStylesheet = document.createElement('style'),
    // addKeyFrames = ruleText;
    // document.head.appendChild( myReuseableStylesheet );

    // addKeyFrames = function(name, frames){
    //     var pos = myReuseableStylesheet.length;
    //     myReuseableStylesheet.insertRule(
    //         "@keyframes " + name + "{" + frames + "}", pos);
    // }
}



	
// // Dynamically create a keyframe animation
// document.styleSheets[0].insertRule('\
//     @keyframes anim {\
//         from { transform: rotateZ(0deg);   }\
//         to   { transform: rotateZ(360deg); }\
//     }'
// );
// var div = document.getElementById('text');
// div.style.animation = 'anim 1s linear forwards';

// // This function will change the anim
// function stopAtSomeDeg(d) {
//     var ss = document.styleSheets[0];
//     var anim;
//     for (var i in ss.cssRules) {
//         // Find your animation by name
//         if (ss.cssRules[i].name === 'anim') {
//             anim = ss.cssRules[i];
//             break;
//         }
//     }
//     var stopFrame = anim.cssRules[1]; // This indicates the second line of "anim" above.
    
//     // Change any attributes
//     stopFrame.style.transform = 'rotateZ(' + d + 'deg)';
// }

// stopAtSomeDeg(180);

    

