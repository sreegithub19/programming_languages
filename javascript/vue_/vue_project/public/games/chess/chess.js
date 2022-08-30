document.write(`
<!DOCTYPE html>
<html>

    <head>
        <style>
            * {
                margin: 0;
                padding: 0;
                transition: 0.2s ease;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100vw;
                height: 100vh;
            }

            #board {
                outline: 4px solid black;
            }

            .box {
                display: inline-flex;
                width: 8vh;
                height: 8vh;
                border: 1px solid black;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            #blackkill p,
            #whitekill p {
                font-size: 3em;
                letter-spacing: -40px;
                text-shadow: -1px -1px 0px black;
            }

            #blackkill,
            #whitekill {
                width: 16vh;
                height: 65vh;
                color: goldenrod;
            }

            #blackkill {
                color: darkgoldenrod;
            }

            .row {
                margin-bottom: -4px;
            }

            .row:nth-child(odd) .box:nth-child(odd),
            .row:nth-child(even) .box:nth-child(even) {
                background-color: darkslategrey;
                filter: brightness(1.3);
            }

            .row:nth-child(odd) .box:nth-child(even),
            .row:nth-child(even) .box:nth-child(odd) {
                background-color: #C2C2C2;
                filter: brightness(1.3);
            }

            p.p {
                font-size: 9.5vh;
                color: goldenrod;
                text-shadow: 1px 1px 1px black;
            }

            .black p {
                color: darkgoldenrod;
            }

            #winner {
                width: 100vw;
                height: 100vh;
                position: absolute;
                background-color: rgba(0, 0, 0, 0.8);
                display: none;
                justify-content: center;
                align-items: center;
            }

            #winner p {
                font-size: 3em;
                color: whitesmoke;
            }
        </style>
    </head>

    <body>
        <script>
            window.onload = function () {
                board();
                spices();
            }
            var html = "",
                a = "its alive!!!",
                bs = Math.min(window.innerHeight - 20, window.innerWidth - 20),
                block = bs / 8,
                wp = 9817,
                wk = 9812,
                wq = 9813,
                wr = 9814,
                wb = 9815,
                wh = 9816,
                bk = 9818,
                bq = 9819,
                br = 9820,
                bb = 9821,
                bh = 9822,
                bp = 9823,
                id = "",
                place = 0,
                pcolor = "",
                pname = "",
                pturn = "",
                lpcolor = "",
                lpname = "",
                lpturn = "",
                j = 0,
                p = "",
                arry = [],
                cls = "",
                lastval = 0,
                turn = ["turn", "nturn"],
                turnval = 0,
                lastp = "";
            function spices() {
                //  black pawn
                for (var i = 9; i <= 16; i++) {
                    document.getElementById("b" + i).innerHTML = "<p class='p'>&#" + bp + ";</p>";
                    document.getElementById("b" + i).className = "box black pawn nturn";
                }
                //  black rook
                for (var i = 1; i <= 8; i += 7) {
                    document.getElementById("b" + i).innerHTML = "<p class='p'>&#" + br + ";</p>";
                    document.getElementById("b" + i).className = "box black rook nturn";
                }
                //  black horse
                for (var i = 2; i <= 7; i += 5) {
                    document.getElementById("b" + i).innerHTML = "<p class='p'>&#" + bh + ";</p>";
                    document.getElementById("b" + i).className = "box black horse nturn";
                }
                //  black biship
                for (var i = 3; i <= 6; i += 3) {
                    document.getElementById("b" + i).innerHTML = "<p class='p'>&#" + bb + ";</p>";
                    document.getElementById("b" + i).className = "box black biship nturn";
                }
                //  black queen
                for (var i = 5; i <= 5; i++) {
                    document.getElementById("b" + i).innerHTML = "<p class='p'>&#" + bq + ";</p>";
                    document.getElementById("b" + i).className = "box black queen nturn";
                }
                //  black king
                for (var i = 4; i <= 4; i++) {
                    document.getElementById("b" + i).innerHTML = "<p class='p'>&#" + bk + ";</p>";
                    document.getElementById("b" + i).className = "box black king nturn";
                }
                //  white rook
                for (var i = 8 * 7; i > 8 * 6; i--) {
                    document.getElementById("b" + i).innerHTML = "<p class='p'>&#" + wp + ";</p>";
                    document.getElementById("b" + i).className = "box white pawn turn";
                }
                //  white rook
                for (var i = 8 * 8; i > 8 * 7; i -= 7) {
                    document.getElementById("b" + i).innerHTML = "<p class='p'>&#" + wr + ";</p>";
                    document.getElementById("b" + i).className = "box white rook turn";
                }
                //  white horse
                for (var i = 63; i > 56; i -= 5) {
                    document.getElementById("b" + i).innerHTML = "<p class='p'>&#" + wh + ";</p>";
                    document.getElementById("b" + i).className = "box white horse turn";
                }
                //  white biship
                for (var i = 62; i > 56; i -= 3) {
                    document.getElementById("b" + i).innerHTML = "<p class='p'>&#" + wb + ";</p>";
                    document.getElementById("b" + i).className = "box white biship turn";
                }
                //  white queen
                for (var i = 61; i >= 61; i--) {
                    document.getElementById("b" + i).innerHTML = "<p class='p'>&#" + wq + ";</p>";
                    document.getElementById("b" + i).className = "box white queen turn";
                }
                //  white king
                for (var i = 60; i >= 60; i--) {
                    document.getElementById("b" + i).innerHTML = "<p class='p'>&#" + wk + ";</p>";
                    document.getElementById("b" + i).className = "box white king turn";
                }
            }
            function board() {
                for (var i = 0; i < 8; i++) {
                    html += "<div class='row'>";
                    for (var j = 1; j <= 8; j++) {
                        html += "<div class='box pcolor none nturn' id='b" + (i * 8 + j) + "' onclick=pice(" + (i * 8 + j) + ")></div>";
                    }
                    html += "</div>";
                }
                document.getElementById("board").innerHTML = html;
            }
            function pice(val) {
                id = document.getElementById("b" + val);
                var j = 0; //for cell styling
                //clearing other paths
                for (var i = 1; i <= 8 * 8; i++) {
                    document.getElementById("b" + i).style.filter = "brightness(1.3) sepia(0)"
                }
                //cheching empty cells
                if (id.innerHTML != "") {
                    pcolor = id.classList[1];
                    pname = id.classList[2];
                    pturn = id.classList[3];
                    p = id.innerHTML;
                    //checking black pice
                    if (pcolor == "black" && turn[turnval] == pturn) {
                        arry = [];
                        //  black pawn move
                        if (pname == "pawn") {
                            lastp = p;
                            //for starting position
                            if (val > 8 && val <= 16) {
                                //looping to get all three cells at once
                                for (var i = 0; i < 2; i++) {
                                    j += 8;
                                    document.getElementById("b" + val).style.filter = "brightness(1)";
                                    //checking next cell is empty
                                    if (document.getElementById("b" + (val + j)).classList[2] == "none") {
                                        document.getElementById("b" + (val + j)).style.filter = "brightness(1)";
                                        arry.push(val + j);
                                    }
                                } //end of for loop
                            } else {
                                j += 8
                                document.getElementById("b" + val).style.filter = "brightness(1)";
                                //checking next cell
                                if (document.getElementById("b" + (val + j)).classList[2] == "none") {
                                    document.getElementById("b" + (val + j)).style.filter = "brightness(1)";
                                    arry.push(val + j);
                                }
                            }
                            //checking none last pawn
                            if (val % 8 != 0 && document.getElementById("b" + (val + 9)).classList[1] == "white") {
                                document.getElementById("b" + (val + 9)).style.filter = "sepia(1)";
                                arry.push(val + 9);
                            }
                            //checking none fist pawn
                            if ((val - 1) % 8 != 0 && document.getElementById("b" + (val + 7)).classList[1] == "white") {
                                document.getElementById("b" + (val + 7)).style.filter = "sepia(1)";
                                arry.push(val + 7);
                            }
                            lpcolor = pcolor;
                            lpname = pname;
                            lpturn = pturn;
                            lastval = val;
                        } //end of pawn if
                        //black rook move
                        if (pname == "rook" || pname == "queen") {
                            lastp = p;
                            lpcolor = pcolor;
                            lpname = pname;
                            lpturn = pturn;
                            lastval = val;
                            //bottom move
                            j = 8;
                            var bottommove = 0;
                            var test = val;
                            for (var i = 0; i < 8; i++) {
                                test += 8
                                if (test < 65) {
                                    bottommove += 1;
                                }
                            }
                            for (var i = 0; i < bottommove; i++) {
                                document.getElementById("b" + val).style.filter = "brightness(1)";
                                if (document.getElementById("b" + (val + j)).classList[1] == "white") {
                                    document.getElementById("b" + (val + j)).style.filter = "sepia(1)";
                                    arry.push(val + j);
                                }
                                //checking for empty cell
                                if (document.getElementById("b" + (val + j)).classList[2] == "none" && (val + j) < 65) {
                                    document.getElementById("b" + (val + j)).style.filter = "brightness(1)";
                                    arry.push(val + j);
                                    j += 8;
                                }
                            } //end of bottom move
                            //top move
                            j = -8;
                            var topmove = 0;
                            test = val
                            for (var i = 0; i < 8; i++) {
                                test -= 8
                                if (test > 0) {
                                    topmove += 1;
                                }
                            }
                            for (var i = 0; i < topmove; i++) {
                                if (document.getElementById("b" + (val + j)).classList[1] == "white") {
                                    document.getElementById("b" + (val + j)).style.filter = "sepia(1)";
                                    arry.push(val + j);
                                }
                                //checking for empty cells
                                if ((val + j) > 0 && document.getElementById("b" + (val + j)).classList[2] == "none") {
                                    document.getElementById("b" + (val + j)).style.filter = "brightness(1)";
                                    arry.push(val + j);
                                    j -= 8;
                                }
                            } //end of top move
                            //right move
                            j = 1;
                            var moveright = 0;
                            //checking not at right edge
                            if (val % 8 == 0) {
                                moveright = 0
                            } else {
                                moveright = 8 - (val % 8);
                            }
                            for (var i = 0; i < moveright; i++) {
                                if (document.getElementById("b" + (val + j)).classList[1] == "white") {
                                    document.getElementById("b" + (val + j)).style.filter = "sepia(1)";
                                    arry.push(val + j);
                                }
                                if (document.getElementById("b" + (val + j)).classList[2] == "none") {
                                    document.getElementById("b" + (val + j)).style.filter = "brightness(1)";
                                    arry.push(val + j);
                                    j += 1;
                                }
                            } //end of right move
                            //left move{
                            j = -1;
                            //checking not at left edge
                            var moveleft = 0;
                            if (val % 8 == 0) {
                                moveleft = 7;
                            } else {
                                moveleft = (val - 1) % 8;
                            }
                            for (var i = 0; i < moveleft; i++) {
                                if (document.getElementById("b" + (val + j)).classList[1] == "white") {
                                    document.getElementById("b" + (val + j)).style.filter = "sepia(1)";
                                    arry.push(val + j);
                                }
                                if (document.getElementById("b" + (val + j)).classList[2] == "none") {
                                    document.getElementById("b" + (val + j)).style.filter = "brightness(1)";
                                    arry.push(val + j);
                                    j -= 1;
                                }
                            }
                        } //end of rook
                        //black horse
                        if (pname == "horse") {
                            lastp = p;
                            lpcolor = pcolor;
                            lpname = pname;
                            lpturn = pturn;
                            lastval = val;
                            var leftbottom = val + 8 + 7;
                            var rightbottom = val + 8 + 9;
                            var bottomright = val + 10;
                            var bottomleft = val + 6;
                            var righttop = val - 8 - 7;
                            var lefttop = val - 8 - 9;
                            var topright = val - 6;
                            var topleft = val - 10;
                            document.getElementById("b" + val).style.filter = "brightness(1)";
                            if (leftbottom < 65 && leftbottom % 8 != 0) {
                                if (document.getElementById("b" + leftbottom).classList[2] == "none") {
                                    document.getElementById("b" + leftbottom).style.filter = "brightness(1)";
                                    arry.push(leftbottom);
                                }
                                if (document.getElementById("b" + leftbottom).classList[1] == "white") {
                                    document.getElementById("b" + leftbottom).style.filter = "sepia(1)";
                                    arry.push(leftbottom);
                                }
                            }
                            if (rightbottom < 65 && val % 8 != 0) {
                                if (document.getElementById("b" + rightbottom).classList[2] == "none") {
                                    document.getElementById("b" + rightbottom).style.filter = "brightness(1)";
                                    arry.push(rightbottom);
                                }
                                if (document.getElementById("b" + rightbottom).classList[1] == "white") {
                                    document.getElementById("b" + rightbottom).style.filter = "sepia(1)";
                                    arry.push(rightbottom);
                                }
                            }
                            if (bottomleft < 65 && (val - 1) % 8 != 0 && (val - 2) % 8 != 0) {
                                if (document.getElementById("b" + bottomleft).classList[2] == "none") {
                                    document.getElementById("b" + bottomleft).style.filter = "brightness(1)";
                                    arry.push(bottomleft);
                                }
                                if (document.getElementById("b" + bottomleft).classList[1] == "white") {
                                    document.getElementById("b" + bottomleft).style.filter = "sepia(1)";
                                    arry.push(bottomleft);
                                }
                            }
                            if (bottomright < 65 && val % 8 != 0 && (val + 1) % 8 != 0) {
                                if (document.getElementById("b" + bottomright).classList[2] == "none") {
                                    document.getElementById("b" + bottomright).style.filter = "brightness(1)";
                                    arry.push(bottomright);
                                }
                                if (document.getElementById("b" + bottomright).classList[1] == "white") {
                                    document.getElementById("b" + bottomright).style.filter = "sepia(1)";
                                    arry.push(bottomright);
                                }
                            }
                            if (righttop > 0 && (righttop - 1) % 8 != 0) {
                                if (document.getElementById("b" + righttop).classList[2] == "none") {
                                    document.getElementById("b" + righttop).style.filter = "brightness(1)";
                                    arry.push(righttop);
                                }
                                if (document.getElementById("b" + righttop).classList[1] == "white") {
                                    document.getElementById("b" + righttop).style.filter = "sepia(1)";
                                    arry.push(righttop);
                                }
                            }
                            if (lefttop > 0 && lefttop % 8 != 0) {
                                if (document.getElementById("b" + lefttop).classList[2] == "none") {
                                    document.getElementById("b" + lefttop).style.filter = "brightness(1)";
                                    arry.push(lefttop);
                                }
                                if (document.getElementById("b" + lefttop).classList[1] == "white") {
                                    document.getElementById("b" + lefttop).style.filter = "sepia(1)";
                                    arry.push(lefttop);
                                }
                            }
                            if (topright > 0 && (val + 1) % 8 != 0 && val % 8 != 0) {
                                if (document.getElementById("b" + topright).classList[2] == "none") {
                                    document.getElementById("b" + topright).style.filter = "brightness(1)";
                                    arry.push(topright);
                                }
                                if (document.getElementById("b" + topright).classList[1] == "white") {
                                    document.getElementById("b" + topright).style.filter = "sepia(1)";
                                    arry.push(topright);
                                }
                            }
                            if (topleft > 0 && topleft % 8 != 0 && (topleft + 1) % 8 != 0) {
                                if (document.getElementById("b" + topleft).classList[2] == "none") {
                                    document.getElementById("b" + topleft).style.filter = "brightness(1)";
                                    arry.push(topleft);
                                }
                                if (document.getElementById("b" + topleft).classList[1] == "white") {
                                    document.getElementById("b" + topleft).style.filter = "sepia(1)";
                                    arry.push(topleft);
                                }
                            }
                        } //end of horse 
                        //black biship
                        if (pname == "biship" || pname == "queen") {
                            lastp = p;
                            lpcolor = pcolor;
                            lpname = pname;
                            lpturn = pturn;
                            lastval = val;
                            document.getElementById("b" + val).style.filter = "brightness(1)";
                            //moving bottom right
                            var bottomright = 0;
                            if (val % 8 == 0) {
                                bottomright = 0;
                            } else {
                                bottomright = 8 - val % 8;
                            }
                            j = val + 9;
                            for (var i = 0; i < bottomright; i++) {
                                if (j < 65) {
                                    if (document.getElementById("b" + j).classList[1] == "white") {
                                        document.getElementById("b" + j).style.filter = "sepia(1)";
                                        arry.push(j);
                                    }
                                    if (document.getElementById("b" + j).classList[2] == "none") {
                                        document.getElementById("b" + j).style.filter = "brightness(1)";
                                        arry.push(j);
                                        j += 9;
                                    }
                                }
                            }
                            //bottom left
                            var bottomleft = 0;
                            if ((val - 1) % 8 == 0) {
                                bottomleft = 0;
                            } else if (val % 8 == 0) {
                                bottomleft = 8
                            } else {
                                bottomleft = val % 8;
                            }
                            j = val + 7;
                            for (var i = 1; i < bottomleft; i++) {
                                if (j < 65) {
                                    if (document.getElementById("b" + j).classList[1] == "white") {
                                        document.getElementById("b" + j).style.filter = "sepia(1)";
                                        arry.push(j);
                                    }
                                    if (document.getElementById("b" + j).classList[2] == "none") {
                                        document.getElementById("b" + j).style.filter = "brightness(1)";
                                        arry.push(j);
                                        j += 7;
                                    }
                                }
                            }
                            //top right
                            var topright = 0;
                            if (val % 8 == 0) {
                                topright = 0;
                            } else {
                                topright = 8 - (val % 8);
                            }
                            j = val - 7;
                            for (var i = 0; i < topright; i++) {
                                if (j > 0) {
                                    if (document.getElementById("b" + j).classList[1] == "white") {
                                        document.getElementById("b" + j).style.filter = "sepia(1)";
                                        arry.push(j);
                                    }
                                    if (document.getElementById("b" + j).classList[2] == "none") {
                                        document.getElementById("b" + j).style.filter = "brightness(1)";
                                        arry.push(j);
                                        j -= 7;
                                    }
                                }
                            }
                            // top left
                            var topleft = 0;
                            if ((val - 1) % 8 == 0) {
                                topleft = 0;
                            } else if (val % 8 == 0) {
                                topleft = 8
                            } else {
                                topleft = val % 8;
                            }
                            j = val - 9;
                            for (var i = 1; i < topleft; i++) {
                                if (j > 0) {
                                    if (document.getElementById("b" + j).classList[1] == "white") {
                                        document.getElementById("b" + j).style.filter = "sepia(1)";
                                        arry.push(j);
                                    }
                                    if (document.getElementById("b" + j).classList[2] == "none") {
                                        document.getElementById("b" + j).style.filter = "brightness(1)";
                                        arry.push(j);
                                        j -= 9;
                                    }
                                }
                            }
                        } //end of biship
                        //black king
                        if (pname == "king") {
                            lastp = p;
                            lpcolor = pcolor;
                            lpname = pname;
                            lpturn = pturn;
                            lastval = val;
                            //right
                            if (val % 8 != 0) {
                                //right right
                                if (val + 1 < 65 && document.getElementById("b" + (val + 1)).classList[2] == "none") {
                                    document.getElementById("b" + (val + 1)).style.filter = "brightness(1)";
                                    arry.push(val + 1);
                                }
                                if (val + 1 < 65 && document.getElementById("b" + (val + 1)).classList[1] == "white") {
                                    document.getElementById("b" + (val + 1)).style.filter = "sepia(1)";
                                    arry.push(val + 1);
                                }
                                if (val + 9 < 65 && document.getElementById("b" + (val + 9)).classList[2] == "none") {
                                    document.getElementById("b" + (val + 9)).style.filter = "brightness(1)";
                                    arry.push(val + 9);
                                }
                                if (val + 9 < 65 && document.getElementById("b" + (val + 9)).classList[1] == "white") {
                                    document.getElementById("b" + (val + 9)).style.filter = "sepia(1)";
                                    arry.push(val + 9);
                                }
                                if (val - 7 > 0 && document.getElementById("b" + (val - 7)).classList[2] == "none") {
                                    document.getElementById("b" + (val - 7)).style.filter = "brightness(1)";
                                    arry.push(val - 7);
                                }
                                if (val - 7 > 0 && document.getElementById("b" + (val - 7)).classList[1] == "white") {
                                    document.getElementById("b" + (val - 7)).style.filter = "sepia(1)";
                                    arry.push(val - 7);
                                }
                            }
                            //left
                            if ((val - 1) % 8 != 0) {
                                if (val - 1 > 0 && document.getElementById("b" + (val - 1)).classList[2] == "none") {
                                    document.getElementById("b" + (val - 1)).style.filter = "brightness(1)";
                                    arry.push(val - 1);
                                }
                                if (val - 1 > 0 && document.getElementById("b" + (val - 1)).classList[1] == "white") {
                                    document.getElementById("b" + (val - 1)).style.filter = "sepia(1)";
                                    arry.push(val - 1);
                                }
                                if (val - 9 > 0 && document.getElementById("b" + (val - 9)).classList[2] == "none") {
                                    document.getElementById("b" + (val - 9)).style.filter = "brightness(1)";
                                    arry.push(val - 9);
                                }
                                if (val - 9 > 0 && document.getElementById("b" + (val - 9)).classList[1] == "white") {
                                    document.getElementById("b" + (val - 9)).style.filter = "sepia(1)";
                                    arry.push(val - 9);
                                }
                                if (val + 7 < 65 && document.getElementById("b" + (val + 7)).classList[2] == "none") {
                                    document.getElementById("b" + (val + 7)).style.filter = "brightness(1)";
                                    arry.push(val + 7);
                                }
                                if (val + 7 < 65 && document.getElementById("b" + (val + 7)).classList[1] == "white") {
                                    document.getElementById("b" + (val + 7)).style.filter = "sepia(1)";
                                    arry.push(val + 7);
                                }
                            }
                            //bottom
                            if (val + 8 < 65) {
                                if (document.getElementById("b" + (val + 8)).classList[2] == "none") {
                                    document.getElementById("b" + (val + 8)).style.filter = "brightness(1)";
                                    arry.push(val + 8);
                                }
                                if (document.getElementById("b" + (val + 8)).classList[1] == "white") {
                                    document.getElementById("b" + (val + 8)).style.filter = "sepia(1)";
                                    arry.push(val + 8);
                                }
                            }
                            //top
                            if (val - 8 > 0) {
                                if (document.getElementById("b" + (val - 8)).classList[2] == "none") {
                                    document.getElementById("b" + (val - 8)).style.filter = "brightness(1)";
                                    arry.push(val - 8);
                                }
                                if (document.getElementById("b" + (val - 8)).classList[1] == "white") {
                                    document.getElementById("b" + (val - 8)).style.filter = "sepia(1)";
                                    arry.push(val - 8);
                                }
                            }
                        }
                    } //end of black pice check
                    //checking white pice
                    if (pcolor == "white" && turn[turnval] == pturn) {
                        arry = [];
                        //white pawn move
                        if (pname == "pawn") {
                            lastp = p;
                            //for starting position
                            if (val < 57 && val > 48) {
                                //looping to get all three cells at once
                                for (var i = 0; i < 2; i++) {
                                    j -= 8;
                                    document.getElementById("b" + val).style.filter = "brightness(1)";
                                    //checking next cell is empty
                                    if (document.getElementById("b" + (val + j)).classList[2] == "none") {
                                        document.getElementById("b" + (val + j)).style.filter = "brightness(1)";
                                        arry.push(val + j);
                                    }
                                } //end of for loop
                            } else {
                                j -= 8
                                document.getElementById("b" + val).style.filter = "brightness(1)";
                                //checking next cell
                                if (document.getElementById("b" + (val + j)).classList[2] == "none") {
                                    document.getElementById("b" + (val + j)).style.filter = "brightness(1)";
                                    arry.push(val + j);
                                }
                            }
                            //checking none last pawn
                            if ((val - 1) % 8 != 0 && document.getElementById("b" + (val - 9)).classList[1] == "black") {
                                document.getElementById("b" + (val - 9)).style.filter = "sepia(1)";
                                arry.push(val - 9);
                            }
                            //checking none fist pawn
                            if (val % 8 != 0 && document.getElementById("b" + (val - 7)).classList[1] == "black") {
                                document.getElementById("b" + (val - 7)).style.filter = "sepia(1)";
                                arry.push(val - 7);
                            }
                            lpcolor = pcolor;
                            lpname = pname;
                            lpturn = pturn;
                            lastval = val;
                        } //end of pawn if
                        //white rook move
                        if (pname == "rook" || pname == "queen") {
                            lastp = p;
                            lpcolor = pcolor;
                            lpname = pname;
                            lpturn = pturn;
                            lastval = val;
                            //bottom move
                            j = 8;
                            var bottommove = 0;
                            var test = val;
                            for (var i = 0; i < 8; i++) {
                                test += 8
                                if (test < 65) {
                                    bottommove += 1;
                                }
                            }
                            for (var i = 0; i < bottommove; i++) {
                                document.getElementById("b" + val).style.filter = "brightness(1)";
                                if (document.getElementById("b" + (val + j)).classList[1] == "black") {
                                    document.getElementById("b" + (val + j)).style.filter = "sepia(1)";
                                    arry.push(val + j);
                                }
                                //checking for empty cell
                                if (document.getElementById("b" + (val + j)).classList[2] == "none" && (val + j) < 65) {
                                    document.getElementById("b" + (val + j)).style.filter = "brightness(1)";
                                    arry.push(val + j);
                                    j += 8;
                                }
                            } //end of bottom move
                            //top move
                            j = -8;
                            var topmove = 0;
                            test = val
                            for (var i = 0; i < 8; i++) {
                                test -= 8
                                if (test > 0) {
                                    topmove += 1;
                                }
                            }
                            for (var i = 0; i < topmove; i++) {
                                if (document.getElementById("b" + (val + j)).classList[1] == "black") {
                                    document.getElementById("b" + (val + j)).style.filter = "sepia(1)";
                                    arry.push(val + j);
                                }
                                //checking for empty cells
                                if ((val + j) > 0 && document.getElementById("b" + (val + j)).classList[2] == "none") {
                                    document.getElementById("b" + (val + j)).style.filter = "brightness(1)";
                                    arry.push(val + j);
                                    j -= 8;
                                }
                            } //end of top move
                            //right move
                            j = 1;
                            var moveright = 0;
                            //checking not at right edge
                            if (val % 8 == 0) {
                                moveright = 0
                            } else {
                                moveright = 8 - (val % 8);
                            }
                            for (var i = 0; i < moveright; i++) {
                                if (document.getElementById("b" + (val + j)).classList[1] == "black") {
                                    document.getElementById("b" + (val + j)).style.filter = "sepia(1)";
                                    arry.push(val + j);
                                }
                                if (document.getElementById("b" + (val + j)).classList[2] == "none") {
                                    document.getElementById("b" + (val + j)).style.filter = "brightness(1)";
                                    arry.push(val + j);
                                    j += 1;
                                }
                            } //end of right move
                            //left move{
                            j = -1;
                            //checking not at left edge
                            var moveleft = 0;
                            if (val % 8 == 0) {
                                moveleft = 7;
                            } else {
                                moveleft = (val - 1) % 8;
                            }
                            for (var i = 0; i < moveleft; i++) {
                                if (document.getElementById("b" + (val + j)).classList[1] == "black") {
                                    document.getElementById("b" + (val + j)).style.filter = "sepia(1)";
                                    arry.push(val + j);
                                }
                                if (document.getElementById("b" + (val + j)).classList[2] == "none") {
                                    document.getElementById("b" + (val + j)).style.filter = "brightness(1)";
                                    arry.push(val + j);
                                    j -= 1;
                                }
                            }
                        } //end of rook
                        //white horse
                        if (pname == "horse") {
                            lastp = p;
                            lpcolor = pcolor;
                            lpname = pname;
                            lpturn = pturn;
                            lastval = val;
                            var leftbottom = val + 8 + 7;
                            var rightbottom = val + 8 + 9;
                            var bottomright = val + 10;
                            var bottomleft = val + 6;
                            var righttop = val - 8 - 7;
                            var lefttop = val - 8 - 9;
                            var topright = val - 6;
                            var topleft = val - 10;
                            document.getElementById("b" + val).style.filter = "brightness(1)";
                            if (leftbottom < 65 && leftbottom % 8 != 0) {
                                if (document.getElementById("b" + leftbottom).classList[2] == "none") {
                                    document.getElementById("b" + leftbottom).style.filter = "brightness(1)";
                                    arry.push(leftbottom);
                                }
                                if (document.getElementById("b" + leftbottom).classList[1] == "black") {
                                    document.getElementById("b" + leftbottom).style.filter = "sepia(1)";
                                    arry.push(leftbottom);
                                }
                            }
                            if (rightbottom < 65 && val % 8 != 0) {
                                if (document.getElementById("b" + rightbottom).classList[2] == "none") {
                                    document.getElementById("b" + rightbottom).style.filter = "brightness(1)";
                                    arry.push(rightbottom);
                                }
                                if (document.getElementById("b" + rightbottom).classList[1] == "black") {
                                    document.getElementById("b" + rightbottom).style.filter = "sepia(1)";
                                    arry.push(rightbottom);
                                }
                            }
                            if (bottomleft < 65 && (val - 1) % 8 != 0 && (val - 2) % 8 != 0) {
                                if (document.getElementById("b" + bottomleft).classList[2] == "none") {
                                    document.getElementById("b" + bottomleft).style.filter = "brightness(1)";
                                    arry.push(bottomleft);
                                }
                                if (document.getElementById("b" + bottomleft).classList[1] == "black") {
                                    document.getElementById("b" + bottomleft).style.filter = "sepia(1)";
                                    arry.push(bottomleft);
                                }
                            }
                            if (bottomright < 65 && val % 8 != 0 && (val + 1) % 8 != 0) {
                                if (document.getElementById("b" + bottomright).classList[2] == "none") {
                                    document.getElementById("b" + bottomright).style.filter = "brightness(1)";
                                    arry.push(bottomright);
                                }
                                if (document.getElementById("b" + bottomright).classList[1] == "white") {
                                    document.getElementById("b" + bottomright).style.filter = "sepia(1)";
                                    arry.push(bottomright);
                                }
                            }
                            if (righttop > 0 && (righttop - 1) % 8 != 0) {
                                if (document.getElementById("b" + righttop).classList[2] == "none") {
                                    document.getElementById("b" + righttop).style.filter = "brightness(1)";
                                    arry.push(righttop);
                                }
                                if (document.getElementById("b" + righttop).classList[1] == "black") {
                                    document.getElementById("b" + righttop).style.filter = "sepia(1)";
                                    arry.push(righttop);
                                }
                            }
                            if (lefttop > 0 && lefttop % 8 != 0) {
                                if (document.getElementById("b" + lefttop).classList[2] == "none") {
                                    document.getElementById("b" + lefttop).style.filter = "brightness(1)";
                                    arry.push(lefttop);
                                }
                                if (document.getElementById("b" + lefttop).classList[1] == "black") {
                                    document.getElementById("b" + lefttop).style.filter = "sepia(1)";
                                    arry.push(lefttop);
                                }
                            }
                            if (topright > 0 && (val + 1) % 8 != 0 && val % 8 != 0) {
                                if (document.getElementById("b" + topright).classList[2] == "none") {
                                    document.getElementById("b" + topright).style.filter = "brightness(1)";
                                    arry.push(topright);
                                }
                                if (document.getElementById("b" + topright).classList[1] == "black") {
                                    document.getElementById("b" + topright).style.filter = "sepia(1)";
                                    arry.push(topright);
                                }
                            }
                            if (topleft > 0 && topleft % 8 != 0 && (topleft + 1) % 8 != 0) {
                                if (document.getElementById("b" + topleft).classList[2] == "none") {
                                    document.getElementById("b" + topleft).style.filter = "brightness(1)";
                                    arry.push(topleft);
                                }
                                if (document.getElementById("b" + topleft).classList[1] == "black") {
                                    document.getElementById("b" + topleft).style.filter = "sepia(1)";
                                    arry.push(topleft);
                                }
                            }
                        } //end of horse 
                        //white biship
                        if (pname == "biship" || pname == "queen") {
                            lastp = p;
                            lpcolor = pcolor;
                            lpname = pname;
                            lpturn = pturn;
                            lastval = val;
                            document.getElementById("b" + val).style.filter = "brightness(1)";
                            //moving bottom right
                            var bottomright = 0;
                            if (val % 8 == 0) {
                                bottomright = 0;
                            } else {
                                bottomright = 8 - val % 8;
                            }
                            j = val + 9;
                            for (var i = 0; i < bottomright; i++) {
                                if (j < 65) {
                                    if (document.getElementById("b" + j).classList[1] == "black") {
                                        document.getElementById("b" + j).style.filter = "sepia(1)";
                                        arry.push(j);
                                    }
                                    if (document.getElementById("b" + j).classList[2] == "none") {
                                        document.getElementById("b" + j).style.filter = "brightness(1)";
                                        arry.push(j);
                                        j += 9;
                                    }
                                }
                            }
                            //bottom left
                            var bottomleft = 0;
                            if ((val - 1) % 8 == 0) {
                                bottomleft = 0;
                            } else if (val % 8 == 0) {
                                bottomleft = 8
                            } else {
                                bottomleft = val % 8;
                            }
                            j = val + 7;
                            for (var i = 1; i < bottomleft; i++) {
                                if (j < 65) {
                                    if (document.getElementById("b" + j).classList[1] == "black") {
                                        document.getElementById("b" + j).style.filter = "sepia(1)";
                                        arry.push(j);
                                    }
                                    if (document.getElementById("b" + j).classList[2] == "none") {
                                        document.getElementById("b" + j).style.filter = "brightness(1)";
                                        arry.push(j);
                                        j += 7;
                                    }
                                }
                            }
                            //top right
                            var topright = 0;
                            if (val % 8 == 0) {
                                topright = 0;
                            } else {
                                topright = 8 - (val % 8);
                            }
                            j = val - 7;
                            for (var i = 0; i < topright; i++) {
                                if (j > 0) {
                                    if (document.getElementById("b" + j).classList[1] == "black") {
                                        document.getElementById("b" + j).style.filter = "sepia(1)";
                                        arry.push(j);
                                    }
                                    if (document.getElementById("b" + j).classList[2] == "none") {
                                        document.getElementById("b" + j).style.filter = "brightness(1)";
                                        arry.push(j);
                                        j -= 7;
                                    }
                                }
                            }
                            // top left
                            var topleft = 0;
                            if ((val - 1) % 8 == 0) {
                                topleft = 0;
                            } else if (val % 8 == 0) {
                                topleft = 8
                            } else {
                                topleft = val % 8;
                            }
                            j = val - 9;
                            for (var i = 1; i < topleft; i++) {
                                if (j > 0) {
                                    if (document.getElementById("b" + j).classList[1] == "black") {
                                        document.getElementById("b" + j).style.filter = "sepia(1)";
                                        arry.push(j);
                                    }
                                    if (document.getElementById("b" + j).classList[2] == "none") {
                                        document.getElementById("b" + j).style.filter = "brightness(1)";
                                        arry.push(j);
                                        j -= 9;
                                    }
                                }
                            }
                        } //end of biship
                        //white king
                        if (pname == "king") {
                            lastp = p;
                            lpcolor = pcolor;
                            lpname = pname;
                            lpturn = pturn;
                            lastval = val;
                            //right
                            if (val % 8 != 0) {
                                //right right
                                if (val + 1 < 65 && document.getElementById("b" + (val + 1)).classList[2] == "none") {
                                    document.getElementById("b" + (val + 1)).style.filter = "brightness(1)";
                                    arry.push(val + 1);
                                }
                                if (val + 1 < 65 && document.getElementById("b" + (val + 1)).classList[1] == "black") {
                                    document.getElementById("b" + (val + 1)).style.filter = "sepia(1)";
                                    arry.push(val + 1);
                                }
                                if (val + 9 < 65 && document.getElementById("b" + (val + 9)).classList[2] == "none") {
                                    document.getElementById("b" + (val + 9)).style.filter = "brightness(1)";
                                    arry.push(val + 9);
                                }
                                if (val + 9 < 65 && document.getElementById("b" + (val + 9)).classList[1] == "black") {
                                    document.getElementById("b" + (val + 9)).style.filter = "sepia(1)";
                                    arry.push(val + 9);
                                }
                                if (val - 7 > 0 && document.getElementById("b" + (val - 7)).classList[2] == "none") {
                                    document.getElementById("b" + (val - 7)).style.filter = "brightness(1)";
                                    arry.push(val - 7);
                                }
                                if (val - 7 > 0 && document.getElementById("b" + (val - 7)).classList[1] == "black") {
                                    document.getElementById("b" + (val - 7)).style.filter = "sepia(1)";
                                    arry.push(val - 7);
                                }
                            }
                            //left
                            if ((val - 1) % 8 != 0) {
                                if (val - 1 > 0 && document.getElementById("b" + (val - 1)).classList[2] == "none") {
                                    document.getElementById("b" + (val - 1)).style.filter = "brightness(1)";
                                    arry.push(val - 1);
                                }
                                if (val - 1 > 0 && document.getElementById("b" + (val - 1)).classList[1] == "black") {
                                    document.getElementById("b" + (val - 1)).style.filter = "sepia(1)";
                                    arry.push(val - 1);
                                }
                                if (val - 9 > 0 && document.getElementById("b" + (val - 9)).classList[2] == "none") {
                                    document.getElementById("b" + (val - 9)).style.filter = "brightness(1)";
                                    arry.push(val - 9);
                                }
                                if (val - 9 > 0 && document.getElementById("b" + (val - 9)).classList[1] == "black") {
                                    document.getElementById("b" + (val - 9)).style.filter = "sepia(1)";
                                    arry.push(val - 9);
                                }
                                if (val + 7 < 65 && document.getElementById("b" + (val + 7)).classList[2] == "none") {
                                    document.getElementById("b" + (val + 7)).style.filter = "brightness(1)";
                                    arry.push(val + 7);
                                }
                                if (val + 7 < 65 && document.getElementById("b" + (val + 7)).classList[1] == "black") {
                                    document.getElementById("b" + (val + 7)).style.filter = "sepia(1)";
                                    arry.push(val + 7);
                                }
                            }
                            //bottom
                            if (val + 8 < 65) {
                                if (document.getElementById("b" + (val + 8)).classList[2] == "none") {
                                    document.getElementById("b" + (val + 8)).style.filter = "brightness(1)";
                                    arry.push(val + 8);
                                }
                                if (document.getElementById("b" + (val + 8)).classList[1] == "black") {
                                    document.getElementById("b" + (val + 8)).style.filter = "sepia(1)";
                                    arry.push(val + 8);
                                }
                            }
                            //top
                            if (val - 8 > 0) {
                                if (document.getElementById("b" + (val - 8)).classList[2] == "none") {
                                    document.getElementById("b" + (val - 8)).style.filter = "brightness(1)";
                                    arry.push(val - 8);
                                }
                                if (document.getElementById("b" + (val - 8)).classList[1] == "black") {
                                    document.getElementById("b" + (val - 8)).style.filter = "sepia(1)";
                                    arry.push(val - 8);
                                }
                            }
                        }
                    } //end of white pice check
                } //end of cheching empty cells
                move(val);
            }
            function move(val) {
                for (i = 0; i < arry.length; i++) {
                    if (val == arry[i]) {
                        //black pawn queen
                        if (arry[i] > 56 && arry[i] <= 64 && lpname == "pawn") {
                            lpname = "queen"
                            lastp = "<p class='p'>&#" + bq + ";</p>";
                        }
                        //white pawn queen
                        if (arry[i] > 0 && arry[i] <= 8 && lpname == "pawn") {
                            lpname = "queen"
                            lastp = "<p class='p'>&#" + wq + ";</p>";
                        }
                        cls = "box " + lpcolor + " " + lpname + " " + lpturn;
                        id.innerHTML = lastp;
                        id.className = cls;
                        document.getElementById("b" + lastval).innerHTML = "";
                        document.getElementById("b" + lastval).classList = "box pcolor none nturn";
                        arry = [];
                        if (turnval == 1) {
                            turnval = 0;
                        } else {
                            turnval = 1;
                        }
                    }
                }
                check();
            }
            function check() {
                var bpawn = document.getElementsByClassName("black pawn").length;
                var brook = document.getElementsByClassName("black rook").length;
                var bhorse = document.getElementsByClassName("black horse").length;
                var bbiship = document.getElementsByClassName("black biship").length;
                var bqueen = document.getElementsByClassName("black queen").length;
                var bking = document.getElementsByClassName("black king").length;
                var wpawn = document.getElementsByClassName("white pawn").length;
                var wrook = document.getElementsByClassName("white rook").length;
                var whorse = document.getElementsByClassName("white horse").length;
                var wbiship = document.getElementsByClassName("white biship").length;
                var wqueen = document.getElementsByClassName("white queen").length;
                var wking = document.getElementsByClassName("white king").length;
                if (bpawn < 8) {
                    html = "";
                    for (var i = 0; i < (8 - bpawn); i++) {
                        html += "&#" + bp + ";"
                    }
                    document.getElementById("bpawn").innerHTML = html;
                }
                if (brook < 2) {
                    html = "";
                    for (var i = 0; i < (2 - brook); i++) {
                        html += "&#" + br + ";"
                    }
                    document.getElementById("brook").innerHTML = html;
                }
                if (bhorse < 2) {
                    html = "";
                    for (var i = 0; i < (2 - bhorse); i++) {
                        html += "&#" + bh + ";"
                    }
                    document.getElementById("bhorse").innerHTML = html;
                }
                if (bbiship < 2) {
                    html = "";
                    for (var i = 0; i < (2 - bbiship); i++) {
                        html += "&#" + bb + ";"
                    }
                    document.getElementById("bbiship").innerHTML = html;
                }
                if (bqueen < 1) {
                    html = "";
                    for (var i = 0; i < (1 - bqueen); i++) {
                        html += "&#" + bq + ";"
                    }
                    document.getElementById("bqueen").innerHTML = html;
                }
                if (wpawn < 8) {
                    html = "";
                    for (var i = 0; i < (8 - wpawn); i++) {
                        html += "&#" + wp + ";"
                    }
                    document.getElementById("wpawn").innerHTML = html;
                }
                if (wrook < 2) {
                    html = "";
                    for (var i = 0; i < (2 - wrook); i++) {
                        html += "&#" + wr + ";"
                    }
                    document.getElementById("wrook").innerHTML = html;
                }
                if (whorse < 2) {
                    html = "";
                    for (var i = 0; i < (2 - whorse); i++) {
                        html += "&#" + wh + ";"
                    }
                    document.getElementById("whorse").innerHTML = html;
                }
                if (wbiship < 2) {
                    html = "";
                    for (var i = 0; i < (2 - wbiship); i++) {
                        html += "&#" + wb + ";"
                    }
                    document.getElementById("wbiship").innerHTML = html;
                }
                if (wqueen < 1) {
                    html = "";
                    for (var i = 0; i < (1 - wqueen); i++) {
                        html += "&#" + wq + ";"
                    }
                    document.getElementById("wqueen").innerHTML = html;
                }
                if (bking < 1) {
                    document.getElementById("winner").style.display = "flex";
                    document.getElementById("winner").innerHTML = "<p>White has won the game</p>";
                }
                if (wking < 1) {
                    document.getElementById("winner").style.display = "flex";
                    document.getElementById("winner").innerHTML = "<p>Black has won the game</p>";
                }
                if (turnval == 1) {
                    for (var i = 0; i < document.getElementsByClassName("box").length; i++) {
                        document.getElementsByClassName("box")[i].style.boxShadow = "0 0 0px 0px red";
                    }
                    for (var i = 0; i < document.getElementsByClassName("black").length; i++) {
                        document.getElementsByClassName("black")[i].style.boxShadow = "0 0 2px 1px red";
                    }
                } else {
                    for (var i = 0; i < document.getElementsByClassName("box").length; i++) {
                        document.getElementsByClassName("box")[i].style.boxShadow = "0 0 0px 0px red";
                    }
                    for (var i = 0; i < document.getElementsByClassName("white").length; i++) {
                        document.getElementsByClassName("white")[i].style.boxShadow = "0 0 2px 1px red";
                    }
                }
            }
<\/script>
        <div id="blackkill">
            <p id="bpawn"></p>
            <p id="brook"></p>
            <p id="bhorse"></p>
            <p id="bbiship"></p>
            <p id="bqueen"></p>
            <p id="bking"></p>
        </div>
        <div id="board"></div>
        <div id="whitekill">
            <p id="wpawn"></p>
            <p id="wrook"></p>
            <p id="whorse"></p>
            <p id="wbiship"></p>
            <p id="wqueen"></p>
            <p id="wking"></p>
        </div>
        <div id="winner"></div>
    </body>

    </html>
`)