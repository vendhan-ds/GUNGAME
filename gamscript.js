let p1=[0,0,0,0,0,0]
let p2=[0,0,0,0,0,0]
let bulletP1=0;
let bulletP2=0;
let y;
let scr1=0;
let scr2=0;
let turn=0;

document.getElementById("reload").innerHTML=`<div class="wrap"><button  id="toss" class="button" onclick="toss()" type="button" id="strtbtn" > TOSS</button></div>`

document.getElementById("player1").innerHTML=`<div class="textbox"><button id="P1" class='P1 btn' onclick="game1()">PLAYER1</button></div>
<p1 id="scoreP1">SCORE : ${scr1}</p1><p id="YTP1"></p>`

document.getElementById("player2").innerHTML=`<div class="textbox"><button id="P2" class='P2 btn' onclick="game2()">PLAYER2</button></div>
<p2 id="scoreP2">SCORE : ${scr2}</p2><p id="YTP2"></p>`
document.getElementById("main").innerHTML=`


    <table align="center">
        <tr id="row">
            <td>------</td>
            <td>PLAYER 1</td>
            <td>PLAYER 2</td>
        </tr>
        <tr id="row1">
            <td align="center"> 1 </td>
            <td class="c1" id="z11" onclick="cc1('11')"><img src="/stickman/step0.png" width="100" class="center" alt=""></td>
            <td class="c2" id="z12" onclick="cc2('12')"><img src="/stickman/step0.png" width="100" class="center" alt=""></td>
        </tr>
        <tr id="row2">
            <td align="center">2</td>
            <td class="c1" id="z21" onclick="cc1('21')"><img src="/stickman/step0.png" width="100" class="center" alt=""></td>
            <td class="c2" id="z22" onclick="cc2('22')"><img src="/stickman/step0.png" width="100" class="center" alt=""></td>
        </tr>
        <tr id="row3">
            <td align="center">3</td>
            <td class="c1" id="z31" onclick="cc1('31')"><img src="/stickman/step0.png" width="100" class="center" alt=""></td>
            <td class="c2" id="z32" onclick="cc2('32')"><img src="/stickman/step0.png" width="100" class="center" alt=""></td>
        </tr>
        <tr id="row4">
            <td align="center">4</td>
            <td class="c1" id="z41" onclick="cc1('41')"><img src="/stickman/step0.png" width="100" class="center" alt=""></td>
            <td class="c2" id="z42" onclick="cc2('42')"><img src="/stickman/step0.png" width="100" class="center" alt=""></td>
        </tr>
        <tr id="row5">
            <td align="center">5</td>
            <td class="c1" id="z51" onclick="cc1('51')"><img src="/stickman/step0.png" width="100" class="center" alt=""></td>
            <td class="c2" id="z52" onclick="cc2('52')"><img src="/stickman/step0.png" width="100" class="center" alt=""></td>
        </tr>
    </table>`

document.getElementById("P1").disabled = true;
document.getElementById("P2").disabled = true;

let max;
function endscreen(){
    if(scr1>scr2){
        max=scr1;
        document.getElementById("won").innerHTML=`PLAYER 1 WINS`}
    else{
        max= scr2;
        document.getElementById("won").innerHTML=`PLAYER 2 WINS !!!`}
    
    let hiscr3=localStorage.getItem("highscore3");
    if (hiscr3<max){
       localStorage.setItem("highscore3",max); 
    }
    document.getElementById('hiscr').innerHTML="HIGHSCORE :" + localStorage.getItem("highscore3") ;
    
    
    document.getElementById("reload").innerHTML=`<button id="q" class="button" onclick='(function(){document.location.reload();})();'>restart</button>`

    throw("ggwp bai !!!");
}

function toss(){
    let abc=Math.floor(Math.random)
    if (abc>0.5){
        document.getElementById("YTP2").innerHTML=`YOUR TURN`
        document.getElementById("P2").disabled = false;
        document.getElementById("won").innerHTML=`Player 2 won the toss`
    }
    else { 
        document.getElementById("YTP1").   innerHTML=`YOUR TURN`
        document.getElementById("P1").disabled = false;
        document.getElementById("won").innerHTML=`Player 1 won the toss`
    }
    document.getElementById("toss").disabled=true;
}



function cc1(a){
    console.log( bulletP2);
    if (bulletP2>0){
        scr2=scr2+40;
        bulletP2--;
        y=Math.floor(a/10);
        p1[y]=0;
        var cell = document.getElementById("z"+y+"1");
        cell.innerHTML = `<img src="/stickman/step0.png" width="100"  class="center" alt="" >`;

        for (let i=1;i<6;i++){
            if(p2[i]>7){
                p2[i]=p2[i]-1;
                var cell = document.getElementById("z"+i+"2");
                cell.innerHTML = `<img src="/stickman/step${p2[i]}.png" width="100"  class="center" alt="" style="-webkit-transform: scaleX(-1);transform: scaleX(-1);">`;
                break;
            }
        }
        console.log(p1);


    }
    else return;
    
}

function cc2(a){
    console.log( bulletP1);
    if (bulletP1>0){
        scr2=scr2+40;
        bulletP1--;
        y=Math.floor(a/10);
        p2[y]=0
        var cell = document.getElementById("z"+y+"2");
        cell.innerHTML = `<img src="/stickman/step0.png" width="100"  class="center" alt="" >`;
        for (let i=1;i<6;i++){
            if(p1[i]>7){
                console.log(p1);
                p1[i]=p1[i]-1;
                var cell = document.getElementById("z"+i+"1");
                cell.innerHTML = `<img src="/stickman/step${p1[i]}.png" width="100"  class="center" alt="" >`;
                break;
            }
        }
        
    }
    else return;
}



let step;
function game1(){
    
    turn++;
    var randoP1 = Math.floor(Math.random() * (5)) + 1;
    p1[randoP1]++;

    for (let i=1;i<6;i++){
        scr1+=p1[i]*p1[i]
    }
    
    if (p1[randoP1]>7){bulletP1++;}

    if (p1[randoP1]>10){ step=10;}
    else{step=p1[randoP1]}

    var cell = document.getElementById("z"+randoP1+"1");
    cell.innerHTML = `<img src="/stickman/step${step}.png" width="100"  class="center" alt="" >`;

    document.getElementById("scoreP1").innerHTML=`SCORE:${scr1}`

    document.getElementById("YTP1").innerHTML=``
    document.getElementById("YTP2").innerHTML=`YOUR TURN`
    document.getElementById("P1").disabled = true;
    document.getElementById("P2").disabled = false;

}

function game2(){
    turn++;
    if (turn>44){endscreen();}
    var randoP2 = Math.floor(Math.random() * (5)) + 1;
    p2[randoP2]++;

    for (let i=1;i<6;i++){
        scr2+=p2[i]*p2[i]
    }
    
    if (p2[randoP2]>7){bulletP2++;}

    if (p2[randoP2]>10){ step=10;}
    else{step=p2[randoP2]}


    var cell = document.getElementById("z"+randoP2+"2");
    cell.innerHTML = `<img src="/stickman/step${step}.png" width="100"  class="center" alt="" style="-webkit-transform: scaleX(-1);
  transform: scaleX(-1);">`;

    document.getElementById("scoreP2").innerHTML=`SCORE:${scr2}`
 
    document.getElementById("YTP2").innerHTML=``
    document.getElementById("YTP1").innerHTML=`YOUR TURN`
    document.getElementById("P1").disabled = false;
    document.getElementById("P2").disabled = true;
    
}


