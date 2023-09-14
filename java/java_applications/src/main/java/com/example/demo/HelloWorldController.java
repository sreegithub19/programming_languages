package com.example.demo;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.io.*;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;


@RestController
public class HelloWorldController {

	// dino string too long : @RequestMapping("/dino")

	@RequestMapping
	public String helloWorld() {
		return
				"""
										
								<!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1"> <style> body, html { height: 100%; margin: 0; } .content { position: absolute; top: 15%; left:25%; background: rgb(0, 0, 0); /* Fallback color */ background: rgba(0, 0, 0, 0.76); /* Black background with 0.5 opacity */ color: #f1f1f1; width: 50%; padding: 20px; } .bg { /* The image used */ background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRqNquWxQHJAPgugDwzXokAU_dQUXzknUTA&usqp=CAU"); /* Full height */ height: 100%; /* Center and scale the image nicely */ background-position: center; background-repeat: no-repeat; background-size: cover; } table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; } td, th { border: 1px solid #dddddd; text-align: left; padding: 8px; } div.parent { text-align: center; } ul { display: inline-block; text-align: left; }</style>
								    </head> <body> <div class="bg"></div>  <div class="content"> <h1 id="home"\s
								        style="text-align: center;font-weight: bold;text-decoration: underline;">
								            WELCOME TO JAVASCRIPT APPLICATIONS!!</h1>\s
								   <h3 style="text-align:center;"> Click on any of the below JavaScript apps!</h3>
								   <div class="parent"> <ul>
								        <li><a href='/calculator'>Calculator</a></li>\s
								       <li><a href='/maze'>Maze</a></li>
								        <li><a href='/tic_tac_toe'>Tic-tac-toe</a></li>
								        <li><a href='/clock'>Analogue clock</a></li>
								        <li><a href='/hangman'>Hangman</a></li>
								        <li><a href='/puzzles'>Estonian puzzles</a></li>
								        <li><a href='/sudoku'>Sudoku</a></li>
								        <li><a href='/virtual_keyboard'>Virtual keyboard</a></li>
									<li><a href='/solitaire'>Solitaire</a></li>
									<li><a href='/chess'>Chess</a></li>
									<li><a href='/dino'>Dino</a></li>
									<li><a href='/sass_'>Sass</a></li>
									<li><a href='/tilt_maze'>Tilted Maze</a></li>
									<li><a href='/codepen'>Codepen</a></li>
								   </ul> </div>\s
								       </div> </body> </html>
								   \s
						""";

	}

	@RequestMapping("/chess")
	public String chess() {
		return """
								 
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
				    """ + """
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
				} //end of horse\s
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
				""" + """
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
				    } //end of horse\s
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
				        """ + """
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
							</script>
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
							 
							 
							'''
							   \s
				""";
	}

	@RequestMapping("/calculator")
	public String calculator() {
		return """

							       <html>
							   <head>
							   <style>
							   html {
							     font-size: 62.5%;
							     box-sizing: border-box;
							   }
							  \s
							   *, *::before, *::after {
							     margin: 0;
							     padding: 0;
							     box-sizing: inherit;
							   }
							  \s
							   .calculator {
							     border: 1px solid #ccc;
							     border-radius: 5px;
							     position: absolute;
							     top: 50%;
							     left: 50%;
							     transform: translate(-50%, -50%);
							     width: 400px;
							   }
							  \s
							   .calculator-screen {
							     width: 100%;
							     font-size: 5rem;
							     height: 80px;
							     border: none;
							     background-color: #252525;
							     color: #fff;
							     text-align: right;
							     padding-right: 20px;
							     padding-left: 10px;
							   }
							  \s
							   button {
							     height: 60px;
							     background-color: #fff;
							     border-radius: 3px;
							     border: 1px solid #c4c4c4;
							     background-color: transparent;
							     font-size: 2rem;
							     color: #333;
							     background-image: linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.04));
							     box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 0 rgba(255,255,255,.45), inset 0 -1px 0 0 rgba(255,255,255,.15), 0 1px 0 0 rgba(255,255,255,.15);
							     text-shadow: 0 1px rgba(255,255,255,.4);
							   }
							  \s
							   button:hover {
							     background-color: #eaeaea;
							   }
							  \s
							   .operator {
							     color: #337cac;
							   }
							  \s
							   .all-clear {
							     background-color: #f0595f;
							     border-color: #b0353a;
							     color: #fff;
							   }
							  \s
							   .all-clear:hover {
							     background-color: #f17377;
							   }
							  \s
							   .equal-sign {
							     background-color: #2e86c0;
							     border-color: #337cac;
							     color: #fff;
							     height: 100%;
							     grid-area: 2 / 4 / 6 / 5;
							   }
							  \s
							   .equal-sign:hover {
							     background-color: #4e9ed4;
							   }
							  \s
							   .calculator-keys {
							     display: grid;
							     grid-template-columns: repeat(4, 1fr);
							     grid-gap: 20px;
							     padding: 20px;
							   }
							   </style>
							   </head>
							   <body>
							   <div class="calculator">
							  \s
							     <input type="text" class="calculator-screen" value="" disabled />
							    \s
							     <div class="calculator-keys">
							      \s
							       <button type="button" class="operator" value="+">+</button>
							       <button type="button" class="operator" value="-">-</button>
							       <button type="button" class="operator" value="*">&times;</button>
							       <button type="button" class="operator" value="/">&divide;</button>
							  \s
							       <button type="button" value="7">7</button>
							       <button type="button" value="8">8</button>
							       <button type="button" value="9">9</button>
							  \s
							  \s
							       <button type="button" value="4">4</button>
							       <button type="button" value="5">5</button>
							       <button type="button" value="6">6</button>
							  \s
							  \s
							       <button type="button" value="1">1</button>
							       <button type="button" value="2">2</button>
							       <button type="button" value="3">3</button>
							  \s
							  \s
							       <button type="button" value="0">0</button>
							       <button type="button" class="decimal" value=".">.</button>
							       <button type="button" class="all-clear" value="all-clear">AC</button>
							  \s
							       <button type="button" class="equal-sign operator" value="=">=</button>
							  \s
							     </div>
							   </div>
							   <script>
							   const calculator = {
							     displayValue: '0',
							     firstOperand: null,
							     waitingForSecondOperand: false,
							     operator: null,
							   };
							  \s
							   function inputDigit(digit) {
							     const { displayValue, waitingForSecondOperand } = calculator;
							  \s
							     if (waitingForSecondOperand === true) {
							       calculator.displayValue = digit;
							       calculator.waitingForSecondOperand = false;
							     } else {
							       calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
							     }
							   }
							  \s
							   function inputDecimal(dot) {
							     if (calculator.waitingForSecondOperand === true) {
							         calculator.displayValue = "0."
							       calculator.waitingForSecondOperand = false;
							       return
							     }
							  \s
							     if (!calculator.displayValue.includes(dot)) {
							       calculator.displayValue += dot;
							     }
							   }
							  \s
							   function handleOperator(nextOperator) {
							     const { firstOperand, displayValue, operator } = calculator
							     const inputValue = parseFloat(displayValue);
							    \s
							     if (operator && calculator.waitingForSecondOperand)  {
							       calculator.operator = nextOperator;
							       return;
							     }
							  \s
							  \s
							     if (firstOperand == null && !isNaN(inputValue)) {
							       calculator.firstOperand = inputValue;
							     } else if (operator) {
							       const result = calculate(firstOperand, inputValue, operator);
							  \s
							       calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
							       calculator.firstOperand = result;
							     }
							  \s
							     calculator.waitingForSecondOperand = true;
							     calculator.operator = nextOperator;
							   }
							  \s
							   function calculate(firstOperand, secondOperand, operator) {
							     if (operator === '+') {
							       return firstOperand + secondOperand;
							     } else if (operator === '-') {
							       return firstOperand - secondOperand;
							     } else if (operator === '*') {
							       return firstOperand * secondOperand;
							     } else if (operator === '/') {
							       return firstOperand / secondOperand;
							     }
							  \s
							     return secondOperand;
							   }
							  \s
							   function resetCalculator() {
							     calculator.displayValue = '0';
							     calculator.firstOperand = null;
							     calculator.waitingForSecondOperand = false;
							     calculator.operator = null;
							   }
							  \s
							   function updateDisplay() {
							     const display = document.querySelector('.calculator-screen');
							     display.value = calculator.displayValue;
							   }
							  \s
							   updateDisplay();
							  \s
							   const keys = document.querySelector('.calculator-keys');
							   keys.addEventListener('click', event => {
							     const { target } = event;
							     const { value } = target;
							     if (!target.matches('button')) {
							       return;
							     }
							  \s
							     switch (value) {
							       case '+':
							       case '-':
							       case '*':
							       case '/':
							       case '=':
							         handleOperator(value);
							         break;
							       case '.':
							         inputDecimal(value);
							         break;
							       case 'all-clear':
							         resetCalculator();
							         break;
							       default:
							         if (Number.isInteger(parseFloat(value))) {
							           inputDigit(value);
							         }
							     }
							  \s
							     updateDisplay();
							   });
							   </script>
							   </body>
							   </html>
							   '''
							  \s
				""";
	}

	@RequestMapping("/sass_")
	public String sass_() {
		return """
				 
							<!DOCTYPE html>
							<html>
							    <head>
							        <title>Page Title</title>
							        <script src="https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.9.12/sass.sync.min.js"></script>
							        <style type="scss">
							@mixin l2d($color,$strength){
							    background:linear-gradient(lighten($color,$strength),darken($color,$strength));
							    &:active{
							        background:linear-gradient(darken($color,$strength),lighten($color,$strength));
							    }
							}
							body{
							    @include l2d(#aa2424,10%);
							    min-height:100vh;
							}
							#hello{
							    margin:auto auto auto auto;
							    width:96vw;
							    user-select:none;
							    &:after{
							        content:" 😉";
							    }
							}
							        </style>
							       \s
							        <script>
							            Sass.compile(document.querySelector("style[type=scss]").innerHTML,function(res){
							    var s=document.createElement("style");
							    s.innerHTML=res.text;
							    res.formatted&&console.error(res.formatted); //if error console.error it.
							    res.text&&document.head.appendChild(s);// append style element only if no error.
							});
							        </script>
							    </head>
							    <body>
							        <h1 id="hello">Hello, this is styled using SCSS.</h1>
							    </body>
							</html>
							    \s
							   \s
				""";
	}

	@RequestMapping("/maze")
	public String maze() {
		return """
						
				<html lang="en-GB">
				    <head>
				      <meta charset="utf-8">
				      <style>
				        $menuHeight: 65px+10px;
				    @mixin transition {
				        transition-property: background-color opacity;
				        transition-duration: 0.2s;
				        transition-timing-function: ease-in-out;
				    }
				   \s
				    html,
				    body {
				        width: 100vw;
				        height: 100vh;
				        position: fixed;
				        padding: 0;
				        margin: 0;
				        top: 0;
				        bottom: 0;
				        left: 0;
				        right: 0;
				    }
				   \s
				    #mazeContainer {
				        transition-property: opacity;
				        transition-duration: 1s;
				        transition-timing-function: linear;
				        top: $menuHeight;
				        opacity: 0;
				        display: inline-block;
				        background-color: rgba(0, 0, 0, 0.30);
				        margin: auto;
				   \s
				        #mazeCanvas {
				            margin: 0;
				            display: block;
				            border: solid 1px black;
				        }
				    }
				   \s
				    input,
				    select {
				        @include transition;
				        cursor: pointer;
				        background-color: rgba(0, 0, 0, 0.30);
				        height: 45px;
				        width: 150px;
				        padding: 10px;
				        border: none;
				        border-radius: 5px;
				        color: white;
				        display: inline-block;
				        font-size: 15px;
				        text-align: center;
				        text-decoration: none;
				        appearance: none;
				        &:hover {
				            background-color: rgba(0, 0, 0, 0.70);
				        }
				        &:active {
				            background-color: black;
				        }
				        &:focus {
				            outline: none;
				        }
				    }
				   \s
				   \s
				    .custom-select {
				        display: inline-block;
				        select {
				            -webkit-appearance: none;
				            -moz-appearance: none;
				            appearance: none;
				            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
				            background-repeat: no-repeat;
				            background-position: 125px center;
				        }
				    }
				   \s
				   """ + """
				 #Message-Container {
				     visibility: hidden;
				     color: white;
				     display: block;
				     width: 100vw;
				     height: 100vh;
				     position: fixed;
				     top: 0;
				     left: 0;
				     bottom: 0;
				     right: 0;
				     background-color: rgba(0, 0, 0, 0.30);
				     z-index: 1;
				     #message {
				         width: 300px;
				         height: 300px;
				         position: fixed;
				         top: 50%;
				         left: 50%;
				         margin-left: -150px;
				         margin-top: -150px;
				     }
				 }
				\s
				 #page {
				     font-family: "Segoe UI", Arial, sans-serif;
				     text-align: center;
				     height: auto;
				     width: auto;
				     margin: auto;
				     #menu {
				         margin: auto;
				         padding: 10px;
				         height: 65px;
				         box-sizing: border-box;
				         h1 {
				             margin: 0;
				             margin-bottom: 10px;
				             font-weight: 600;
				             font-size: 3.2rem;
				         }
				     }
				     #view {
				         position: absolute;
				         top:65px;
				         bottom: 0;
				         left: 0;
				         right: 0;
				         width: 100%;
				         height: auto;
				           \s
				     }
				 }
				\s
				 .border {
				     border: 1px black solid;
				     border-radius: 5px;
				 }
				\s
				\s
				\s
				 #gradient {
				     z-index: -1;
				     position: fixed;
				     top: 0;
				     bottom: 0;
				     width: 100vw;
				     height: 100vh;
				     color: #fff;
				     background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
				     background-size: 400% 400%;
				     animation: Gradient 15s ease infinite;
				 }
				\s
				 @keyframes Gradient {
				     0% {
				         background-position: 0% 50%
				     }
				     50% {
				         background-position: 100% 50%
				     }
				     100% {
				         background-position: 0% 50%
				     }
				 }
				\s
				  /* Extra small devices (phones, 600px and down) */
				  @media only screen and (max-width: 400px) {
				      input, select{
				          width: 120px;
				      }
				  }
				\s
				   </style>
				   <body>
				     <div id="gradient"></div>
				     <div id="page">
				       <div id="Message-Container">
				         <div id="message">
				           <h1>Congratulations!</h1>
				           <p>You are done.</p>
				           <p id="moves"></p>
				           <input id="okBtn" type="button" onclick="toggleVisablity('Message-Container')" value="Cool!" />
				         </div>
				       </div>
				       <div id="menu">
				         <div class="custom-select">
				           <select id="diffSelect">
				                     <option value="10">Easy</option>
				                     <option value="15">Medium</option>
				                     <option value="25">Hard</option>
				                     <option value="38">Extreme</option>                                     \s
				                 </select>
				         </div>
				         <input id="startMazeBtn" type="button" onclick="makeMaze()" value="Start" />
				       </div>
				       <div id="view">
				         <div id="mazeContainer">
				           <canvas id="mazeCanvas" class="border" height="1100" width="1100"></canvas>
				         </div>
				       </div>
				     </div>
				     """ + """
				     <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
				     <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js"></script>
				     <script>
				       function rand(max) {
				   return Math.floor(Math.random() * max);
				 }
				\s
				 function shuffle(a) {
				   for (let i = a.length - 1; i > 0; i--) {
				     const j = Math.floor(Math.random() * (i + 1));
				     [a[i], a[j]] = [a[j], a[i]];
				   }
				   return a;
				 }
				\s
				 function changeBrightness(factor, sprite) {
				   var virtCanvas = document.createElement("canvas");
				   virtCanvas.width = 500;
				   virtCanvas.height = 500;
				   var context = virtCanvas.getContext("2d");
				   context.drawImage(sprite, 0, 0, 500, 500);
				\s
				   var imgData = context.getImageData(0, 0, 500, 500);
				\s
				   for (let i = 0; i < imgData.data.length; i += 4) {
				     imgData.data[i] = imgData.data[i] * factor;
				     imgData.data[i + 1] = imgData.data[i + 1] * factor;
				     imgData.data[i + 2] = imgData.data[i + 2] * factor;
				   }
				   context.putImageData(imgData, 0, 0);
				\s
				   var spriteOutput = new Image();
				   spriteOutput.src = virtCanvas.toDataURL();
				   virtCanvas.remove();
				   return spriteOutput;
				 }
				\s
				 function displayVictoryMess(moves) {
				   document.getElementById("moves").innerHTML = "You Moved " + moves + " Steps.";
				   toggleVisablity("Message-Container"); \s
				 }
				\s
				 function toggleVisablity(id) {
				   if (document.getElementById(id).style.visibility == "visible") {
				     document.getElementById(id).style.visibility = "hidden";
				   } else {
				     document.getElementById(id).style.visibility = "visible";
				   }
				 }
				\s
				 function Maze(Width, Height) {
				   var mazeMap;
				   var width = Width;
				   var height = Height;
				   var startCoord, endCoord;
				   var dirs = ["n", "s", "e", "w"];
				   var modDir = {
				     n: {
				       y: -1,
				       x: 0,
				       o: "s"
				     },
				     s: {
				       y: 1,
				       x: 0,
				       o: "n"
				     },
				     e: {
				       y: 0,
				       x: 1,
				       o: "w"
				     },
				     w: {
				       y: 0,
				       x: -1,
				       o: "e"
				     }
				   };
				\s
				   this.map = function() {
				     return mazeMap;
				   };
				   this.startCoord = function() {
				     return startCoord;
				   };
				   this.endCoord = function() {
				     return endCoord;
				   };
				\s
				""" + """
				      function genMap() {
				        mazeMap = new Array(height);
				        for (y = 0; y < height; y++) {
				          mazeMap[y] = new Array(width);
				          for (x = 0; x < width; ++x) {
				            mazeMap[y][x] = {
				              n: false,
				              s: false,
				              e: false,
				              w: false,
				              visited: false,
				              priorPos: null
				            };
				          }
				        }
				      }
				   \s
				      function defineMaze() {
				        var isComp = false;
				        var move = false;
				        var cellsVisited = 1;
				        var numLoops = 0;
				        var maxLoops = 0;
				        var pos = {
				          x: 0,
				          y: 0
				        };
				        var numCells = width * height;
				        while (!isComp) {
				          move = false;
				          mazeMap[pos.x][pos.y].visited = true;
				   \s
				          if (numLoops >= maxLoops) {
				            shuffle(dirs);
				            maxLoops = Math.round(rand(height / 8));
				            numLoops = 0;
				          }
				          numLoops++;
				          for (index = 0; index < dirs.length; index++) {
				            var direction = dirs[index];
				            var nx = pos.x + modDir[direction].x;
				            var ny = pos.y + modDir[direction].y;
				   \s
				            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
				              //Check if the tile is already visited
				              if (!mazeMap[nx][ny].visited) {
				                //Carve through walls from this tile to next
				                mazeMap[pos.x][pos.y][direction] = true;
				                mazeMap[nx][ny][modDir[direction].o] = true;
				   \s
				                //Set Currentcell as next cells Prior visited
				                mazeMap[nx][ny].priorPos = pos;
				                //Update Cell position to newly visited location
				                pos = {
				                  x: nx,
				                  y: ny
				                };
				                cellsVisited++;
				                //Recursively call this method on the next tile
				                move = true;
				                break;
				              }
				            }
				          }
				   \s
				          if (!move) {
				            //  If it failed to find a direction,
				            //  move the current position back to the prior cell and Recall the method.
				            pos = mazeMap[pos.x][pos.y].priorPos;
				          }
				          if (numCells == cellsVisited) {
				            isComp = true;
				          }
				        }
				      }
				   \s
				      function defineStartEnd() {
				        switch (rand(4)) {
				          case 0:
				            startCoord = {
				              x: 0,
				              y: 0
				            };
				            endCoord = {
				              x: height - 1,
				              y: width - 1
				            };
				            break;
				          case 1:
				            startCoord = {
				              x: 0,
				              y: width - 1
				            };
				            endCoord = {
				              x: height - 1,
				              y: 0
				            };
				            break;
				          case 2:
				            startCoord = {
				              x: height - 1,
				              y: 0
				            };
				            endCoord = {
				              x: 0,
				              y: width - 1
				            };
				            break;
				          case 3:
				            startCoord = {
				              x: height - 1,
				              y: width - 1
				            };
				            endCoord = {
				              x: 0,
				              y: 0
				            };
				            break;
				        }
				      }
				   \s
				      genMap();
				      defineStartEnd();
				      defineMaze();
				    }
				   \s
				    function DrawMaze(Maze, ctx, cellsize, endSprite = null) {
				      var map = Maze.map();
				      var cellSize = cellsize;
				      var drawEndMethod;
				      ctx.lineWidth = cellSize / 40;
				   \s
				      this.redrawMaze = function(size) {
				        cellSize = size;
				        ctx.lineWidth = cellSize / 50;
				        drawMap();
				        drawEndMethod();
				      };
				   \s
				      function drawCell(xCord, yCord, cell) {
				        var x = xCord * cellSize;
				        var y = yCord * cellSize;
				   \s
				        if (cell.n == false) {
				          ctx.beginPath();
				          ctx.moveTo(x, y);
				          ctx.lineTo(x + cellSize, y);
				          ctx.stroke();
				        }
				        if (cell.s === false) {
				          ctx.beginPath();
				          ctx.moveTo(x, y + cellSize);
				          ctx.lineTo(x + cellSize, y + cellSize);
				          ctx.stroke();
				        }
				        if (cell.e === false) {
				          ctx.beginPath();
				          ctx.moveTo(x + cellSize, y);
				          ctx.lineTo(x + cellSize, y + cellSize);
				          ctx.stroke();
				        }
				        if (cell.w === false) {
				          ctx.beginPath();
				          ctx.moveTo(x, y);
				          ctx.lineTo(x, y + cellSize);
				          ctx.stroke();
				        }
				      }
				   \s
				      function drawMap() {
				        for (x = 0; x < map.length; x++) {
				          for (y = 0; y < map[x].length; y++) {
				            drawCell(x, y, map[x][y]);
				          }
				        }
				      }
				   \s
				      function drawEndFlag() {
				        var coord = Maze.endCoord();
				        var gridSize = 4;
				        var fraction = cellSize / gridSize - 2;
				        var colorSwap = true;
				        for (let y = 0; y < gridSize; y++) {
				          if (gridSize % 2 == 0) {
				            colorSwap = !colorSwap;
				          }
				          for (let x = 0; x < gridSize; x++) {
				            ctx.beginPath();
				            ctx.rect(
				              coord.x * cellSize + x * fraction + 4.5,
				              coord.y * cellSize + y * fraction + 4.5,
				              fraction,
				              fraction
				            );
				            if (colorSwap) {
				              ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
				            } else {
				              ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
				            }
				            ctx.fill();
				            colorSwap = !colorSwap;
				          }
				        }
				      }
				   \s
				      function drawEndSprite() {
				        var offsetLeft = cellSize / 50;
				        var offsetRight = cellSize / 25;
				        var coord = Maze.endCoord();
				        ctx.drawImage(
				          endSprite,
				          2,
				          2,
				          endSprite.width,
				          endSprite.height,
				          coord.x * cellSize + offsetLeft,
				          coord.y * cellSize + offsetLeft,
				          cellSize - offsetRight,
				          cellSize - offsetRight
				        );
				      }
				   \s
				      function clear() {
				        var canvasSize = cellSize * map.length;
				        ctx.clearRect(0, 0, canvasSize, canvasSize);
				      }
				   \s
				      if (endSprite != null) {
				        drawEndMethod = drawEndSprite;
				      } else {
				        drawEndMethod = drawEndFlag;
				      }
				      clear();
				      drawMap();
				      drawEndMethod();
				    }
				   \s
				    function Player(maze, c, _cellsize, onComplete, sprite = null) {
				      var ctx = c.getContext("2d");
				      var drawSprite;
				      var moves = 0;
				      drawSprite = drawSpriteCircle;
				      if (sprite != null) {
				        drawSprite = drawSpriteImg;
				      }
				      var player = this;
				      var map = maze.map();
				      var cellCoords = {
				        x: maze.startCoord().x,
				        y: maze.startCoord().y
				      };
				      var cellSize = _cellsize;
				      var halfCellSize = cellSize / 2;
				   \s
				      this.redrawPlayer = function(_cellsize) {
				        cellSize = _cellsize;
				        drawSpriteImg(cellCoords);
				      };
				   \s
				      function drawSpriteCircle(coord) {
				        ctx.beginPath();
				        ctx.fillStyle = "yellow";
				        ctx.arc(
				          (coord.x + 1) * cellSize - halfCellSize,
				          (coord.y + 1) * cellSize - halfCellSize,
				          halfCellSize - 2,
				          0,
				          2 * Math.PI
				        );
				        ctx.fill();
				        if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y) {
				          onComplete(moves);
				          player.unbindKeyDown();
				        }
				      }
				   \s
				      function drawSpriteImg(coord) {
				        var offsetLeft = cellSize / 50;
				        var offsetRight = cellSize / 25;
				        ctx.drawImage(
				          sprite,
				          0,
				          0,
				          sprite.width,
				          sprite.height,
				          coord.x * cellSize + offsetLeft,
				          coord.y * cellSize + offsetLeft,
				          cellSize - offsetRight,
				          cellSize - offsetRight
				        );
				        if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y) {
				          onComplete(moves);
				          player.unbindKeyDown();
				        }
				      }
				   \s
				      function removeSprite(coord) {
				        var offsetLeft = cellSize / 50;
				        var offsetRight = cellSize / 25;
				        ctx.clearRect(
				          coord.x * cellSize + offsetLeft,
				          coord.y * cellSize + offsetLeft,
				          cellSize - offsetRight,
				          cellSize - offsetRight
				        );
				      }
				   \s
				      function check(e) {
				        var cell = map[cellCoords.x][cellCoords.y];
				        moves++;
				        switch (e.keyCode) {
				          case 65:
				          case 37: // west
				            if (cell.w == true) {
				              removeSprite(cellCoords);
				              cellCoords = {
				                x: cellCoords.x - 1,
				                y: cellCoords.y
				              };
				              drawSprite(cellCoords);
				            }
				            break;
				          case 87:
				          case 38: // north
				            if (cell.n == true) {
				              removeSprite(cellCoords);
				              cellCoords = {
				                x: cellCoords.x,
				                y: cellCoords.y - 1
				              };
				              drawSprite(cellCoords);
				            }
				            break;
				          case 68:
				          case 39: // east
				            if (cell.e == true) {
				              removeSprite(cellCoords);
				              cellCoords = {
				                x: cellCoords.x + 1,
				                y: cellCoords.y
				              };
				              drawSprite(cellCoords);
				            }
				            break;
				          case 83:
				          case 40: // south
				            if (cell.s == true) {
				              removeSprite(cellCoords);
				              cellCoords = {
				                x: cellCoords.x,
				                y: cellCoords.y + 1
				              };
				              drawSprite(cellCoords);
				            }
				            break;
				        }
				      }
				   \s
				      this.bindKeyDown = function() {
				        window.addEventListener("keydown", check, false);
				   \s
				        $("#view").swipe({
				          swipe: function(
				            event,
				            direction,
				            distance,
				            duration,
				            fingerCount,
				            fingerData
				          ) {
				            console.log(direction);
				            switch (direction) {
				              case "up":
				                check({
				                  keyCode: 38
				                });
				                break;
				              case "down":
				                check({
				                  keyCode: 40
				                });
				                break;
				              case "left":
				                check({
				                  keyCode: 37
				                });
				                break;
				              case "right":
				                check({
				                  keyCode: 39
				                });
				                break;
				            }
				          },
				          threshold: 0
				        });
				      };
				   \s
				      this.unbindKeyDown = function() {
				        window.removeEventListener("keydown", check, false);
				        $("#view").swipe("destroy");
				      };
				   \s
				      drawSprite(maze.startCoord());
				   \s
				      this.bindKeyDown();
				    }
				   \s
				    var mazeCanvas = document.getElementById("mazeCanvas");
				    var ctx = mazeCanvas.getContext("2d");
				    var sprite;
				    var finishSprite;
				    var maze, draw, player;
				    var cellSize;
				    var difficulty;
				    // sprite.src = 'media/sprite.png';
				   \s
				    window.onload = function() {
				      let viewWidth = $("#view").width();
				      let viewHeight = $("#view").height();
				      if (viewHeight < viewWidth) {
				        ctx.canvas.width = viewHeight - viewHeight / 100;
				        ctx.canvas.height = viewHeight - viewHeight / 100;
				      } else {
				        ctx.canvas.width = viewWidth - viewWidth / 100;
				        ctx.canvas.height = viewWidth - viewWidth / 100;
				      }
				   \s
				      //Load and edit sprites
				      var completeOne = false;
				      var completeTwo = false;
				      var isComplete = () => {
				        if(completeOne === true && completeTwo === true)
				           {
				             console.log("Runs");
				             setTimeout(function(){
				               makeMaze();
				             }, 500);        \s
				           }
				      };
				      sprite = new Image();
				      sprite.src =
				        "https://image.ibb.co/dr1HZy/Pf_RWr3_X_Imgur.png" +
				        "?" +
				        new Date().getTime();
				      sprite.setAttribute("crossOrigin", " ");
				      sprite.onload = function() {
				        sprite = changeBrightness(1.2, sprite);
				        completeOne = true;
				        console.log(completeOne);
				        isComplete();
				      };
				   \s
				      finishSprite = new Image();
				      finishSprite.src = "https://image.ibb.co/b9wqnJ/i_Q7m_U25_Imgur.png"+
				      "?" +
				      new Date().getTime();
				      finishSprite.setAttribute("crossOrigin", " ");
				      finishSprite.onload = function() {
				        finishSprite = changeBrightness(1.1, finishSprite);
				        completeTwo = true;
				        console.log(completeTwo);
				        isComplete();
				      };
				     \s
				    };
				   \s
				    window.onresize = function() {
				      let viewWidth = $("#view").width();
				      let viewHeight = $("#view").height();
				      if (viewHeight < viewWidth) {
				        ctx.canvas.width = viewHeight - viewHeight / 100;
				        ctx.canvas.height = viewHeight - viewHeight / 100;
				      } else {
				        ctx.canvas.width = viewWidth - viewWidth / 100;
				        ctx.canvas.height = viewWidth - viewWidth / 100;
				      }
				      cellSize = mazeCanvas.width / difficulty;
				      if (player != null) {
				        draw.redrawMaze(cellSize);
				        player.redrawPlayer(cellSize);
				      }
				    };
				   \s
				    function makeMaze() {
				      //document.getElementById("mazeCanvas").classList.add("border");
				      if (player != undefined) {
				        player.unbindKeyDown();
				        player = null;
				      }
				      var e = document.getElementById("diffSelect");
				      difficulty = e.options[e.selectedIndex].value;
				      cellSize = mazeCanvas.width / difficulty;
				      maze = new Maze(difficulty, difficulty);
				      draw = new DrawMaze(maze, ctx, cellSize, finishSprite);
				      player = new Player(maze, mazeCanvas, cellSize, displayVictoryMess, sprite);
				      if (document.getElementById("mazeContainer").style.opacity < "100") {
				        document.getElementById("mazeContainer").style.opacity = "100";
				      }
				    }
				   \s
				        </script>
				      </body>
				    </html>
						
				""";
	}

	@RequestMapping("/codepen")
	public String codepen() {
		return """
				  
						<!DOCTYPE html>
						<html>
						<head>
						    <title>Code Editor</title>
						    <meta name="viewport" content="width=device-width, initial-scale=1">
						    <style>
						    body {
						        text-align: center;
						    }
						   \s
						    textarea {
						        width: 32%;
						        float: top;
						        min-height: 250px;
						        overflow: scroll;
						        margin: auto;
						        display: inline-block;
						        background: #F4F4F9;
						        outline: none;
						        font-family: Courier, sans-serif;
						        font-size: 14px;
						    }
						   \s
						    iframe {
						        bottom: 0;
						        position: relative;
						        width: 100%;
						        height: 35em;
						    }
						    </style>
						</head>
						<body>
						    <textarea id="html" placeholder="HTML"></textarea>
						    <textarea id="css" placeholder="CSS"></textarea>
						    <textarea id="js" placeholder="JavaScript"></textarea>
						    <iframe id="code"></iframe>
						    <script type="text/javascript">
						                        function compile() {
						        var html = document.getElementById("html");
						        var css = document.getElementById("css");
						        var js = document.getElementById("js");
						        var code = document.getElementById("code").contentWindow.document;
						       \s
						        document.body.onkeyup = function(){
						            code.open();
						            code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "<\\/script>");
						            code.close();
						        };
						        };
						   \s
						    compile();
						    </script>
						</body>
						</html>
						   \s
				""";
	}

	@RequestMapping("/tilt_maze")
	public String tilt_maze() {
		return """
				<!DOCTYPE html>
				<html>
				<head>
				<style>
				    body {
				  /* https://coolors.co/f06449-ede6e3-7d82b8-36382e-613f75  */
				  --background-color: #ede6e3;
				  --wall-color: #36382e;
				  --joystick-color: #210124;
				  --joystick-head-color: #f06449;
				  --ball-color: #f06449;
				  --end-color: #7d82b8;
				  --text-color: #210124;
				    
				  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
				  background-color: var(--background-color);
				}
				    
				html,
				body {
				  height: 100%;
				  margin: 0;
				}
				    
				#center {
				  display: flex;
				  align-items: center;
				  justify-content: center;
				  height: 100%;
				}
				    
				#game {
				  display: grid;
				  grid-template-columns: auto 150px;
				  grid-template-rows: 1fr auto 1fr;
				  gap: 30px;
				  perspective: 600px;
				}
				    
				#maze {
				  position: relative;
				  grid-row: 1 / -1;
				  grid-column: 1;
				  width: 350px;
				  height: 315px;
				  display: flex;
				  justify-content: center;
				  align-items: center;
				}
				    
				#end {
				  width: 65px;
				  height: 65px;
				  border: 5px dashed var(--end-color);
				  border-radius: 50%;
				}
				    
				#joystick {
				  position: relative;
				  background-color: var(--joystick-color);
				  border-radius: 50%;
				  width: 50px;
				  height: 50px;
				  display: flex;
				  align-items: center;
				  justify-content: center;
				  margin: 10px 50px;
				  grid-row: 2;
				}
				    
				#joystick-head {
				  position: relative;
				  background-color: var(--joystick-head-color);
				  border-radius: 50%;
				  width: 20px;
				  height: 20px;
				  cursor: grab;
				    
				  animation-name: glow;
				  animation-duration: 0.6s;
				  animation-iteration-count: infinite;
				  animation-direction: alternate;
				  animation-timing-function: ease-in-out;
				  animation-delay: 4s;
				}
				    
				@keyframes glow {
				  0% {
				    transform: scale(1);
				  }
				  100% {
				    transform: scale(1.2);
				  }
				}
				    
				.joystick-arrow:nth-of-type(1) {
				  position: absolute;
				  bottom: 55px;
				    
				  width: 0;
				  height: 0;
				  border-left: 10px solid transparent;
				  border-right: 10px solid transparent;
				    
				  border-bottom: 10px solid var(--joystick-color);
				}
				    
				.joystick-arrow:nth-of-type(2) {
				  position: absolute;
				  top: 55px;
				    
				  width: 0;
				  height: 0;
				  border-left: 10px solid transparent;
				  border-right: 10px solid transparent;
				    
				  border-top: 10px solid var(--joystick-color);
				}
				    
				.joystick-arrow:nth-of-type(3) {
				  position: absolute;
				  left: 55px;
				    
				  width: 0;
				  height: 0;
				  border-top: 10px solid transparent;
				  border-bottom: 10px solid transparent;
				    
				  border-left: 10px solid var(--joystick-color);
				}
				    
				.joystick-arrow:nth-of-type(4) {
				  position: absolute;
				  right: 55px;
				    
				  width: 0;
				  height: 0;
				  border-top: 10px solid transparent;
				  border-bottom: 10px solid transparent;
				    
				  border-right: 10px solid var(--joystick-color);
				}
				    
				#note {
				  grid-row: 3;
				  grid-column: 2;
				  text-align: center;
				  font-size: 0.8em;
				  color: var(--text-color);
				  transition: opacity 2s;
				}
				    
				a:visited {
				  color: inherit;
				}
				    
				.ball {
				  position: absolute;
				  margin-top: -5px;
				  margin-left: -5px;
				  border-radius: 50%;
				  background-color: var(--ball-color);
				  width: 10px;
				  height: 10px;
				}
				    
				.wall {
				  position: absolute;
				  background-color: var(--wall-color);
				  transform-origin: top center;
				  margin-left: -5px;
				}
				    
				.wall::before,
				.wall::after {
				  display: block;
				  content: "";
				  width: 10px;
				  height: 10px;
				  background-color: inherit;
				  border-radius: 50%;
				  position: absolute;
				}
				""" + """    
				.wall::before {
				  top: -5px;
				}
				    
				.wall::after {
				  bottom: -5px;
				}
				    
				.black-hole {
				  position: absolute;
				  margin-top: -9px;
				  margin-left: -9px;
				  border-radius: 50%;
				  background-color: black;
				  width: 18px;
				  height: 18px;
				}
				    
				#youtube,
				#youtube-card {
				  display: none;
				}
				    
				@media (min-height: 425px) {
				  /** Youtube logo by https://codepen.io/alvaromontoro */
				  #youtube {
				    z-index: 2;
				    display: block;
				    width: 100px;
				    height: 70px;
				    position: absolute;
				    bottom: 20px;
				    right: 20px;
				    background: red;
				    border-radius: 50% / 11%;
				    transform: scale(0.8);
				    transition: transform 0.5s;
				  }
				    
				  #youtube:hover,
				  #youtube:focus {
				    transform: scale(0.9);
				  }
				    
				  #youtube::before {
				    content: "";
				    display: block;
				    position: absolute;
				    top: 7.5%;
				    left: -6%;
				    width: 112%;
				    height: 85%;
				    background: red;
				    border-radius: 9% / 50%;
				  }
				    
				  #youtube::after {
				    content: "";
				    display: block;
				    position: absolute;
				    top: 20px;
				    left: 40px;
				    width: 45px;
				    height: 30px;
				    border: 15px solid transparent;
				    box-sizing: border-box;
				    border-left: 30px solid white;
				  }
				    
				  #youtube span {
				    font-size: 0;
				    position: absolute;
				    width: 0;
				    height: 0;
				    overflow: hidden;
				  }
				    
				  #youtube:hover + #youtube-card {
				    display: block;
				    position: absolute;
				    bottom: 12px;
				    right: 10px;
				    padding: 25px 130px 25px 25px;
				    width: 300px;
				    background-color: white;
				  }
				}
				</style>
				</head>
				<body>
				<div id="center">
				  <div id="game">
				    <div id="maze">
				      <div id="end"></div>
				    </div>
				    <div id="joystick">
				      <div class="joystick-arrow"></div>
				      <div class="joystick-arrow"></div>
				      <div class="joystick-arrow"></div>
				      <div class="joystick-arrow"></div>
				      <div id="joystick-head"></div>
				    </div>
				    <div id="note">
				      Click the joystick to start!
				      <p>Move every ball to the center. Ready for hard mode? Press H</p>
				    </div>
				  </div>
				</div>
				<a id="youtube" href="https://youtu.be/bTk6dcAckuI" target="_blank">
				  <span>See how this game was made</span>
				</a>
				<div id="youtube-card">
				  How to simulate ball movement in a maze with JavaScript
				</div>
				<script>
				    /*
				    
				If you want to know how this game works, you can find a source code walkthrough video here: https://youtu.be/bTk6dcAckuI
				    
				Follow me on twitter for more: https://twitter.com/HunorBorbely
				    
				*/
				  """ + """  
				Math.minmax = (value, limit) => {
				  return Math.max(Math.min(value, limit), -limit);
				};
				    
				const distance2D = (p1, p2) => {
				  return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
				};
				    
				// Angle between the two points
				const getAngle = (p1, p2) => {
				  let angle = Math.atan((p2.y - p1.y) / (p2.x - p1.x));
				  if (p2.x - p1.x < 0) angle += Math.PI;
				  return angle;
				};
				    
				// The closest a ball and a wall cap can be
				const closestItCanBe = (cap, ball) => {
				  let angle = getAngle(cap, ball);
				    
				  const deltaX = Math.cos(angle) * (wallW / 2 + ballSize / 2);
				  const deltaY = Math.sin(angle) * (wallW / 2 + ballSize / 2);
				    
				  return { x: cap.x + deltaX, y: cap.y + deltaY };
				};
				    
				// Roll the ball around the wall cap
				const rollAroundCap = (cap, ball) => {
				  // The direction the ball can't move any further because the wall holds it back
				  let impactAngle = getAngle(ball, cap);
				    
				  // The direction the ball wants to move based on it's velocity
				  let heading = getAngle(
				    { x: 0, y: 0 },
				    { x: ball.velocityX, y: ball.velocityY }
				  );
				    
				  // The angle between the impact direction and the ball's desired direction
				  // The smaller this angle is, the bigger the impact
				  // The closer it is to 90 degrees the smoother it gets (at 90 there would be no collision)
				  let impactHeadingAngle = impactAngle - heading;
				    
				  // Velocity distance if not hit would have occurred
				  const velocityMagnitude = distance2D(
				    { x: 0, y: 0 },
				    { x: ball.velocityX, y: ball.velocityY }
				  );
				  // Velocity component diagonal to the impact
				  const velocityMagnitudeDiagonalToTheImpact =
				    Math.sin(impactHeadingAngle) * velocityMagnitude;
				    
				  // How far should the ball be from the wall cap
				  const closestDistance = wallW / 2 + ballSize / 2;
				    
				  const rotationAngle = Math.atan(
				    velocityMagnitudeDiagonalToTheImpact / closestDistance
				  );
				    
				  const deltaFromCap = {
				    x: Math.cos(impactAngle + Math.PI - rotationAngle) * closestDistance,
				    y: Math.sin(impactAngle + Math.PI - rotationAngle) * closestDistance
				  };
				    
				  const x = ball.x;
				  const y = ball.y;
				  const velocityX = ball.x - (cap.x + deltaFromCap.x);
				  const velocityY = ball.y - (cap.y + deltaFromCap.y);
				  const nextX = x + velocityX;
				  const nextY = y + velocityY;
				    
				  return { x, y, velocityX, velocityY, nextX, nextY };
				};
				    
				// Decreases the absolute value of a number but keeps it's sign, doesn't go below abs 0
				const slow = (number, difference) => {
				  if (Math.abs(number) <= difference) return 0;
				  if (number > difference) return number - difference;
				  return number + difference;
				};
				    
				const mazeElement = document.getElementById("maze");
				const joystickHeadElement = document.getElementById("joystick-head");
				const noteElement = document.getElementById("note"); // Note element for instructions and game won, game failed texts
				    
				let hardMode = false;
				let previousTimestamp;
				let gameInProgress;
				let mouseStartX;
				let mouseStartY;
				let accelerationX;
				let accelerationY;
				let frictionX;
				let frictionY;
				    
				const pathW = 25; // Path width
				const wallW = 10; // Wall width
				const ballSize = 10; // Width and height of the ball
				const holeSize = 18;
				    
				const debugMode = false;
				    
				let balls = [];
				let ballElements = [];
				let holeElements = [];
				    
				resetGame();
				    
				// Draw balls for the first time
				balls.forEach(({ x, y }) => {
				  const ball = document.createElement("div");
				  ball.setAttribute("class", "ball");
				  ball.style.cssText = `left: ${x}px; top: ${y}px; `;
				    
				  mazeElement.appendChild(ball);
				  ballElements.push(ball);
				});
				    
				// Wall metadata
				const walls = [
				  // Border
				  { column: 0, row: 0, horizontal: true, length: 10 },
				  { column: 0, row: 0, horizontal: false, length: 9 },
				  { column: 0, row: 9, horizontal: true, length: 10 },
				  { column: 10, row: 0, horizontal: false, length: 9 },
				    
				  // Horizontal lines starting in 1st column
				  { column: 0, row: 6, horizontal: true, length: 1 },
				  { column: 0, row: 8, horizontal: true, length: 1 },
				    
				  // Horizontal lines starting in 2nd column
				  { column: 1, row: 1, horizontal: true, length: 2 },
				  { column: 1, row: 7, horizontal: true, length: 1 },
				    
				  // Horizontal lines starting in 3rd column
				  { column: 2, row: 2, horizontal: true, length: 2 },
				  { column: 2, row: 4, horizontal: true, length: 1 },
				  { column: 2, row: 5, horizontal: true, length: 1 },
				  { column: 2, row: 6, horizontal: true, length: 1 },
				    
				  // Horizontal lines starting in 4th column
				  { column: 3, row: 3, horizontal: true, length: 1 },
				  { column: 3, row: 8, horizontal: true, length: 3 },
				    
				  // Horizontal lines starting in 5th column
				  { column: 4, row: 6, horizontal: true, length: 1 },
				    
				  // Horizontal lines starting in 6th column
				  { column: 5, row: 2, horizontal: true, length: 2 },
				  { column: 5, row: 7, horizontal: true, length: 1 },
				    
				  // Horizontal lines starting in 7th column
				  { column: 6, row: 1, horizontal: true, length: 1 },
				  { column: 6, row: 6, horizontal: true, length: 2 },
				    
				  // Horizontal lines starting in 8th column
				  { column: 7, row: 3, horizontal: true, length: 2 },
				  { column: 7, row: 7, horizontal: true, length: 2 },
				    
				  // Horizontal lines starting in 9th column
				  { column: 8, row: 1, horizontal: true, length: 1 },
				  { column: 8, row: 2, horizontal: true, length: 1 },
				  { column: 8, row: 3, horizontal: true, length: 1 },
				  { column: 8, row: 4, horizontal: true, length: 2 },
				  { column: 8, row: 8, horizontal: true, length: 2 },
				    
				  // Vertical lines after the 1st column
				  { column: 1, row: 1, horizontal: false, length: 2 },
				  { column: 1, row: 4, horizontal: false, length: 2 },
				    
				  // Vertical lines after the 2nd column
				  { column: 2, row: 2, horizontal: false, length: 2 },
				  { column: 2, row: 5, horizontal: false, length: 1 },
				  { column: 2, row: 7, horizontal: false, length: 2 },
				    
				  // Vertical lines after the 3rd column
				  { column: 3, row: 0, horizontal: false, length: 1 },
				  { column: 3, row: 4, horizontal: false, length: 1 },
				  { column: 3, row: 6, horizontal: false, length: 2 },
				    
				  // Vertical lines after the 4th column
				  { column: 4, row: 1, horizontal: false, length: 2 },
				  { column: 4, row: 6, horizontal: false, length: 1 },
				    
				  // Vertical lines after the 5th column
				  { column: 5, row: 0, horizontal: false, length: 2 },
				  { column: 5, row: 6, horizontal: false, length: 1 },
				  { column: 5, row: 8, horizontal: false, length: 1 },
				    
				  // Vertical lines after the 6th column
				  { column: 6, row: 4, horizontal: false, length: 1 },
				  { column: 6, row: 6, horizontal: false, length: 1 },
				    
				  // Vertical lines after the 7th column
				  { column: 7, row: 1, horizontal: false, length: 4 },
				  { column: 7, row: 7, horizontal: false, length: 2 },
				    
				  // Vertical lines after the 8th column
				  { column: 8, row: 2, horizontal: false, length: 1 },
				  { column: 8, row: 4, horizontal: false, length: 2 },
				    
				  // Vertical lines after the 9th column
				  { column: 9, row: 1, horizontal: false, length: 1 },
				  { column: 9, row: 5, horizontal: false, length: 2 }
				].map((wall) => ({
				  x: wall.column * (pathW + wallW),
				  y: wall.row * (pathW + wallW),
				  horizontal: wall.horizontal,
				  length: wall.length * (pathW + wallW)
				}));
				    
				// Draw walls
				walls.forEach(({ x, y, horizontal, length }) => {
				  const wall = document.createElement("div");
				  wall.setAttribute("class", "wall");
				  wall.style.cssText = `
				      left: ${x}px;
				      top: ${y}px;
				      width: ${wallW}px;
				      height: ${length}px;
				      transform: rotate(${horizontal ? -90 : 0}deg);
				    `;
				    
				  mazeElement.appendChild(wall);
				});
				    
				const holes = [
				  { column: 0, row: 5 },
				  { column: 2, row: 0 },
				  { column: 2, row: 4 },
				  { column: 4, row: 6 },
				  { column: 6, row: 2 },
				  { column: 6, row: 8 },
				  { column: 8, row: 1 },
				  { column: 8, row: 2 }
				].map((hole) => ({
				  x: hole.column * (wallW + pathW) + (wallW / 2 + pathW / 2),
				  y: hole.row * (wallW + pathW) + (wallW / 2 + pathW / 2)
				}));
				    
				joystickHeadElement.addEventListener("mousedown", function (event) {
				  if (!gameInProgress) {
				    mouseStartX = event.clientX;
				    mouseStartY = event.clientY;
				    gameInProgress = true;
				    window.requestAnimationFrame(main);
				    noteElement.style.opacity = 0;
				    joystickHeadElement.style.cssText = `
				        animation: none;
				        cursor: grabbing;
				      `;
				  }
				});
				 """ + """   
				window.addEventListener("mousemove", function (event) {
				  if (gameInProgress) {
				    const mouseDeltaX = -Math.minmax(mouseStartX - event.clientX, 15);
				    const mouseDeltaY = -Math.minmax(mouseStartY - event.clientY, 15);
				    
				    joystickHeadElement.style.cssText = `
				        left: ${mouseDeltaX}px;
				        top: ${mouseDeltaY}px;
				        animation: none;
				        cursor: grabbing;
				      `;
				    
				    const rotationY = mouseDeltaX * 0.8; // Max rotation = 12
				    const rotationX = mouseDeltaY * 0.8;
				    
				    mazeElement.style.cssText = `
				        transform: rotateY(${rotationY}deg) rotateX(${-rotationX}deg)
				      `;
				    
				    const gravity = 2;
				    const friction = 0.01; // Coefficients of friction
				    
				    accelerationX = gravity * Math.sin((rotationY / 180) * Math.PI);
				    accelerationY = gravity * Math.sin((rotationX / 180) * Math.PI);
				    frictionX = gravity * Math.cos((rotationY / 180) * Math.PI) * friction;
				    frictionY = gravity * Math.cos((rotationX / 180) * Math.PI) * friction;
				  }
				});
				    
				window.addEventListener("keydown", function (event) {
				  // If not an arrow key or space or H was pressed then return
				  if (![" ", "H", "h", "E", "e"].includes(event.key)) return;
				    
				  // If an arrow key was pressed then first prevent default
				  event.preventDefault();
				    
				  // If space was pressed restart the game
				  if (event.key == " ") {
				    resetGame();
				    return;
				  }
				    
				  // Set Hard mode
				  if (event.key == "H" || event.key == "h") {
				    hardMode = true;
				    resetGame();
				    return;
				  }
				    
				  // Set Easy mode
				  if (event.key == "E" || event.key == "e") {
				    hardMode = false;
				    resetGame();
				    return;
				  }
				});
				    
				function resetGame() {
				  previousTimestamp = undefined;
				  gameInProgress = false;
				  mouseStartX = undefined;
				  mouseStartY = undefined;
				  accelerationX = undefined;
				  accelerationY = undefined;
				  frictionX = undefined;
				  frictionY = undefined;
				    
				  mazeElement.style.cssText = `
				      transform: rotateY(0deg) rotateX(0deg)
				    `;
				    
				  joystickHeadElement.style.cssText = `
				      left: 0;
				      top: 0;
				      animation: glow;
				      cursor: grab;
				    `;
				    
				  if (hardMode) {
				    noteElement.innerHTML = `Click the joystick to start!
				        <p>Hard mode, Avoid black holes. Back to easy mode? Press E</p>`;
				  } else {
				    noteElement.innerHTML = `Click the joystick to start!
				        <p>Move every ball to the center. Ready for hard mode? Press H</p>`;
				  }
				  noteElement.style.opacity = 1;
				    
				  balls = [
				    { column: 0, row: 0 },
				    { column: 9, row: 0 },
				    { column: 0, row: 8 },
				    { column: 9, row: 8 }
				  ].map((ball) => ({
				    x: ball.column * (wallW + pathW) + (wallW / 2 + pathW / 2),
				    y: ball.row * (wallW + pathW) + (wallW / 2 + pathW / 2),
				    velocityX: 0,
				    velocityY: 0
				  }));
				    
				  if (ballElements.length) {
				    balls.forEach(({ x, y }, index) => {
				      ballElements[index].style.cssText = `left: ${x}px; top: ${y}px; `;
				    });
				  }
				    
				  // Remove previous hole elements
				  holeElements.forEach((holeElement) => {
				    mazeElement.removeChild(holeElement);
				  });
				  holeElements = [];
				    
				  // Reset hole elements if hard mode
				  if (hardMode) {
				    holes.forEach(({ x, y }) => {
				      const ball = document.createElement("div");
				      ball.setAttribute("class", "black-hole");
				      ball.style.cssText = `left: ${x}px; top: ${y}px; `;
				    
				      mazeElement.appendChild(ball);
				      holeElements.push(ball);
				    });
				  }
				}
				    
				function main(timestamp) {
				  // It is possible to reset the game mid-game. This case the look should stop
				  if (!gameInProgress) return;
				    
				  if (previousTimestamp === undefined) {
				    previousTimestamp = timestamp;
				    window.requestAnimationFrame(main);
				    return;
				  }
				    
				  const maxVelocity = 1.5;
				    
				  // Time passed since last cycle divided by 16
				  // This function gets called every 16 ms on average so dividing by 16 will result in 1
				  const timeElapsed = (timestamp - previousTimestamp) / 16;
				    
				  try {
				    // If mouse didn't move yet don't do anything
				    if (accelerationX != undefined && accelerationY != undefined) {
				      const velocityChangeX = accelerationX * timeElapsed;
				      const velocityChangeY = accelerationY * timeElapsed;
				      const frictionDeltaX = frictionX * timeElapsed;
				      const frictionDeltaY = frictionY * timeElapsed;
				    
				      balls.forEach((ball) => {
				        if (velocityChangeX == 0) {
				          // No rotation, the plane is flat
				          // On flat surface friction can only slow down, but not reverse movement
				          ball.velocityX = slow(ball.velocityX, frictionDeltaX);
				        } else {
				          ball.velocityX = ball.velocityX + velocityChangeX;
				          ball.velocityX = Math.max(Math.min(ball.velocityX, 1.5), -1.5);
				          ball.velocityX =
				            ball.velocityX - Math.sign(velocityChangeX) * frictionDeltaX;
				          ball.velocityX = Math.minmax(ball.velocityX, maxVelocity);
				        }
				    
				        if (velocityChangeY == 0) {
				          // No rotation, the plane is flat
				          // On flat surface friction can only slow down, but not reverse movement
				          ball.velocityY = slow(ball.velocityY, frictionDeltaY);
				        } else {
				          ball.velocityY = ball.velocityY + velocityChangeY;
				          ball.velocityY =
				            ball.velocityY - Math.sign(velocityChangeY) * frictionDeltaY;
				          ball.velocityY = Math.minmax(ball.velocityY, maxVelocity);
				        }
				    
				        // Preliminary next ball position, only becomes true if no hit occurs
				        // Used only for hit testing, does not mean that the ball will reach this position
				        ball.nextX = ball.x + ball.velocityX;
				        ball.nextY = ball.y + ball.velocityY;
				    
				        if (debugMode) console.log("tick", ball);
				    
				        walls.forEach((wall, wi) => {
				          if (wall.horizontal) {
				            // Horizontal wall
				    
				            if (
				              ball.nextY + ballSize / 2 >= wall.y - wallW / 2 &&
				              ball.nextY - ballSize / 2 <= wall.y + wallW / 2
				            ) {
				              // Ball got within the strip of the wall
				              // (not necessarily hit it, could be before or after)
				    
				              const wallStart = {
				                x: wall.x,
				                y: wall.y
				              };
				              const wallEnd = {
				                x: wall.x + wall.length,
				                y: wall.y
				              };
				    
				              if (
				                ball.nextX + ballSize / 2 >= wallStart.x - wallW / 2 &&
				                ball.nextX < wallStart.x
				              ) {
				                // Ball might hit the left cap of a horizontal wall
				                const distance = distance2D(wallStart, {
				                  x: ball.nextX,
				                  y: ball.nextY
				                });
				                if (distance < ballSize / 2 + wallW / 2) {
				                  if (debugMode && wi > 4)
				                    console.warn("too close h head", distance, ball);
				    
				                  // Ball hits the left cap of a horizontal wall
				                  const closest = closestItCanBe(wallStart, {
				                    x: ball.nextX,
				                    y: ball.nextY
				                  });
				                  const rolled = rollAroundCap(wallStart, {
				                    x: closest.x,
				                    y: closest.y,
				                    velocityX: ball.velocityX,
				                    velocityY: ball.velocityY
				                  });
				    
				                  Object.assign(ball, rolled);
				                }
				              }
				    
				              if (
				                ball.nextX - ballSize / 2 <= wallEnd.x + wallW / 2 &&
				                ball.nextX > wallEnd.x
				              ) {
				                // Ball might hit the right cap of a horizontal wall
				                const distance = distance2D(wallEnd, {
				                  x: ball.nextX,
				                  y: ball.nextY
				                });
				                if (distance < ballSize / 2 + wallW / 2) {
				                  if (debugMode && wi > 4)
				                    console.warn("too close h tail", distance, ball);
				    
				                  // Ball hits the right cap of a horizontal wall
				                  const closest = closestItCanBe(wallEnd, {
				                    x: ball.nextX,
				                    y: ball.nextY
				                  });
				                  const rolled = rollAroundCap(wallEnd, {
				                    x: closest.x,
				                    y: closest.y,
				                    velocityX: ball.velocityX,
				                    velocityY: ball.velocityY
				                  });
				    
				                  Object.assign(ball, rolled);
				                }
				              }
				    
				              if (ball.nextX >= wallStart.x && ball.nextX <= wallEnd.x) {
				                // The ball got inside the main body of the wall
				                if (ball.nextY < wall.y) {
				                  // Hit horizontal wall from top
				                  ball.nextY = wall.y - wallW / 2 - ballSize / 2;
				                } else {
				                  // Hit horizontal wall from bottom
				                  ball.nextY = wall.y + wallW / 2 + ballSize / 2;
				                }
				                ball.y = ball.nextY;
				                ball.velocityY = -ball.velocityY / 3;
				    
				                if (debugMode && wi > 4)
				                  console.error("crossing h line, HIT", ball);
				              }
				            }
				          } else {
				            // Vertical wall
				    
				            if (
				              ball.nextX + ballSize / 2 >= wall.x - wallW / 2 &&
				              ball.nextX - ballSize / 2 <= wall.x + wallW / 2
				            ) {
				              // Ball got within the strip of the wall
				              // (not necessarily hit it, could be before or after)
				    
				              const wallStart = {
				                x: wall.x,
				                y: wall.y
				              };
				              const wallEnd = {
				                x: wall.x,
				                y: wall.y + wall.length
				              };
				    
				              if (
				                ball.nextY + ballSize / 2 >= wallStart.y - wallW / 2 &&
				                ball.nextY < wallStart.y
				              ) {
				                // Ball might hit the top cap of a horizontal wall
				                const distance = distance2D(wallStart, {
				                  x: ball.nextX,
				                  y: ball.nextY
				                });
				                if (distance < ballSize / 2 + wallW / 2) {
				                  if (debugMode && wi > 4)
				                    console.warn("too close v head", distance, ball);
				    
				                  // Ball hits the left cap of a horizontal wall
				                  const closest = closestItCanBe(wallStart, {
				                    x: ball.nextX,
				                    y: ball.nextY
				                  });
				                  const rolled = rollAroundCap(wallStart, {
				                    x: closest.x,
				                    y: closest.y,
				                    velocityX: ball.velocityX,
				                    velocityY: ball.velocityY
				                  });
				    
				                  Object.assign(ball, rolled);
				                }
				              }
				    
				              if (
				                ball.nextY - ballSize / 2 <= wallEnd.y + wallW / 2 &&
				                ball.nextY > wallEnd.y
				              ) {
				                // Ball might hit the bottom cap of a horizontal wall
				                const distance = distance2D(wallEnd, {
				                  x: ball.nextX,
				                  y: ball.nextY
				                });
				                if (distance < ballSize / 2 + wallW / 2) {
				                  if (debugMode && wi > 4)
				                    console.warn("too close v tail", distance, ball);
				    
				                  // Ball hits the right cap of a horizontal wall
				                  const closest = closestItCanBe(wallEnd, {
				                    x: ball.nextX,
				                    y: ball.nextY
				                  });
				                  const rolled = rollAroundCap(wallEnd, {
				                    x: closest.x,
				                    y: closest.y,
				                    velocityX: ball.velocityX,
				                    velocityY: ball.velocityY
				                  });
				    
				                  Object.assign(ball, rolled);
				                }
				              }
				    
				              if (ball.nextY >= wallStart.y && ball.nextY <= wallEnd.y) {
				                // The ball got inside the main body of the wall
				                if (ball.nextX < wall.x) {
				                  // Hit vertical wall from left
				                  ball.nextX = wall.x - wallW / 2 - ballSize / 2;
				                } else {
				                  // Hit vertical wall from right
				                  ball.nextX = wall.x + wallW / 2 + ballSize / 2;
				                }
				                ball.x = ball.nextX;
				                ball.velocityX = -ball.velocityX / 3;
				    
				                if (debugMode && wi > 4)
				                  console.error("crossing v line, HIT", ball);
				              }
				            }
				          }
				        });
				    
				        // Detect is a ball fell into a hole
				        if (hardMode) {
				          holes.forEach((hole, hi) => {
				            const distance = distance2D(hole, {
				              x: ball.nextX,
				              y: ball.nextY
				            });
				    
				            if (distance <= holeSize / 2) {
				              // The ball fell into a hole
				              holeElements[hi].style.backgroundColor = "red";
				              throw Error("The ball fell into a hole");
				            }
				          });
				        }
				    
				        // Adjust ball metadata
				        ball.x = ball.x + ball.velocityX;
				        ball.y = ball.y + ball.velocityY;
				      });
				    
				      // Move balls to their new position on the UI
				      balls.forEach(({ x, y }, index) => {
				        ballElements[index].style.cssText = `left: ${x}px; top: ${y}px; `;
				      });
				    }
				    
				    // Win detection
				    if (
				      balls.every(
				        (ball) => distance2D(ball, { x: 350 / 2, y: 315 / 2 }) < 65 / 2
				      )
				    ) {
				      noteElement.innerHTML = `Congrats, you did it!
				        ${!hardMode ? "<p>Press H for hard mode</p>" : ""}
				        <p>
				          Follow me
				          <a href="https://twitter.com/HunorBorbely" , target="_blank"
				            >@HunorBorbely</a
				          >
				        </p>`;
				      noteElement.style.opacity = 1;
				      gameInProgress = false;
				    } else {
				      previousTimestamp = timestamp;
				      window.requestAnimationFrame(main);
				    }
				  } catch (error) {
				    if (error.message == "The ball fell into a hole") {
				      noteElement.innerHTML = `A ball fell into a black hole! Press space to reset the game.
				        <p>
				          Back to easy? Press E
				        </p>`;
				      noteElement.style.opacity = 1;
				      gameInProgress = false;
				    } else throw error;
				  }
				}
				    
				</script>
				</body>
				</html>
				   \s
				""";
	}

	@RequestMapping("/tic_tac_toe")
	public String tic_tac_toe() {
		return """
				<!doctype html>
				    <html lang="en">
				    <head>
				        <meta charset="UTF-8">
				        <meta name="viewport"
				              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				        <meta http-equiv="X-UA-Compatible" content="ie=edge">
				        <title>Tic Tac Toe</title>
				        <style>
				        body {
				          font-family: "Arial", sans-serif;
				      }
				     \s
				      section {
				          text-align: center;
				      }
				     \s
				      .game--container {
				          display: grid;
				          grid-template-columns: repeat(3, auto);
				          width: 306px;
				          margin: 50px auto;
				      }
				     \s
				      .cell {
				          font-family: "Permanent Marker", cursive;
				          width: 100px;
				          height: 100px;
				          box-shadow: 0 0 0 1px #333333;
				          border: 1px solid #333333;
				          cursor: pointer;
				     \s
				          line-height: 100px;
				          font-size: 60px;
				      }
				        </style>
				    </head>
				    <body>
				        <section>
				            <h1 class="game--title">Tic Tac Toe</h1>
				            <div class="game--container">
				                <div data-cell-index="0" class="cell"></div>
				                <div data-cell-index="1" class="cell"></div>
				                <div data-cell-index="2" class="cell"></div>
				                <div data-cell-index="3" class="cell"></div>
				                <div data-cell-index="4" class="cell"></div>
				                <div data-cell-index="5" class="cell"></div>
				                <div data-cell-index="6" class="cell"></div>
				                <div data-cell-index="7" class="cell"></div>
				                <div data-cell-index="8" class="cell"></div>
				            </div>
				            <h2 class="game--status"></h2>
				            <button class="game--restart">Restart Game</button>
				        </section>
				   \s
				        <script>
				        const statusDisplay = document.querySelector('.game--status');
				let gameActive = true;
				let currentPlayer = "X";
				let gameState = ["", "", "", "", "", "", "", "", ""];
				const winningMessage = () => `Player ${currentPlayer} has won!`;
				const drawMessage = () => `Game ended in a draw!`;
				const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
				statusDisplay.innerHTML = currentPlayerTurn();
				const winningConditions = [
				    [0, 1, 2],
				    [3, 4, 5],
				    [6, 7, 8],
				    [0, 3, 6],
				    [1, 4, 7],
				    [2, 5, 8],
				    [0, 4, 8],
				    [2, 4, 6]
				];
				function handleCellPlayed(clickedCell, clickedCellIndex) {
				    gameState[clickedCellIndex] = currentPlayer;
				    clickedCell.innerHTML = currentPlayer;
				}
				function handlePlayerChange() {
				    currentPlayer = currentPlayer === "X" ? "O" : "X";
				    statusDisplay.innerHTML = currentPlayerTurn();
				}
				function handleResultValidation() {
				    let roundWon = false;
				    for (let i = 0; i <= 7; i++) {
				        const winCondition = winningConditions[i];
				        let a = gameState[winCondition[0]];
				        let b = gameState[winCondition[1]];
				        let c = gameState[winCondition[2]];
				        if (a === '' || b === '' || c === '') {
				            continue;
				        }
				        if (a === b && b === c) {
				            roundWon = true;
				            break
				        }
				    }
				    if (roundWon) {
				        statusDisplay.innerHTML = winningMessage();
				        gameActive = false;
				        return;
				    }
				    let roundDraw = !gameState.includes("");
				    if (roundDraw) {
				        statusDisplay.innerHTML = drawMessage();
				        gameActive = false;
				        return;
				    }
				    handlePlayerChange();
				}
				function handleCellClick(clickedCellEvent) {
				    const clickedCell = clickedCellEvent.target;
				    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
				    if (gameState[clickedCellIndex] !== "" || !gameActive) {
				        return;
				    }
				    handleCellPlayed(clickedCell, clickedCellIndex);
				    handleResultValidation();
				}
				function handleRestartGame() {
				    gameActive = true;
				    currentPlayer = "X";
				    gameState = ["", "", "", "", "", "", "", "", ""];
				    statusDisplay.innerHTML = currentPlayerTurn();
				    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
				}
				document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
				document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
				        </script>
				    </body>
				""";
	}

	@RequestMapping("/clock")
	public String clock() {
		return """
				   \s
				<!DOCTYPE html>
				<html lang="en">
				<head>
				    <meta charset="UTF-8">
				    <meta name="viewport" content="width=device-width, initial-scale=1.0">
				    <meta http-equiv="X-UA-Compatible" content="ie=edge">
				    <title>Analogue Clock</title>
				    <style>
				    body{
				        background-color: #000;
				    }
				   \s
				    #canvas{
				        margin-left: 300px;
				        margin-top: 50px;
				    }
				    </style>
				</head>
				<body>
				    <canvas id="canvas" width="600" height="600"></canvas>
				    <script>
				    //create a canvas object fro HTML element
				var canvas = document.getElementById('canvas');
				//create a 2d drawing object
				var ctx = canvas.getContext('2d');
				//calculate the clock radius by using the height
				var radius = canvas.height / 2;
				//remap the x and y axis to the center of the canvas
				ctx.translate(radius, radius);
				//reduce clock radius by 90%
				radius = radius * 0.90;
				setInterval(drawClock, 1000); //run the drawClock function every second.
				function drawClock(){
				    drawFace(ctx, radius);
				    drawNumbers(ctx, radius);
				    drawTime(ctx, radius);
				}
				function drawFace(ctx, radius){
				    var grad;
				    //draw white circle for the face
				    ctx.beginPath();
				    ctx.arc(0,0,radius,0,2*Math.PI);
				    ctx.fillStyle = "White";
				    ctx.fill();
				    // create a radial gradient (inner, middle, and outer edge of clock)
				    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
				    grad.addColorStop(0, '#333');
				    grad.addColorStop(0.5, 'white');
				    grad.addColorStop(1, '#333');
				    //define gradient as stroke style
				    ctx.strokeStyle = grad;
				    ctx.lineWidth = radius*0.1;
				    ctx.stroke();\s
				    //draw the center of the clock
				    ctx.beginPath();
				    ctx.arc(0,0, radius*0.1,0,2*Math.PI);
				    ctx.fillStyle = '#333';
				    ctx.fill();
				}
				function drawNumbers(ctx, radius) {
				    var ang;
				    var num;
				    ctx.font = radius*0.15 + "px arial"; //set font at 15% of radius
				    ctx.textBaseline = "middle"; //set text alignment to middle
				    ctx.textAlign = "center"; //set text alignment to center
				    for(num=1; num < 13; num++){ //calculate the print position for each number
				        ang = num *Math.PI /6;
				        ctx.rotate(ang);
				        ctx.translate(0, -radius*0.85);
				        ctx.rotate(-ang);
				        ctx.fillText(num.toString(), 0, 0);
				        ctx.rotate(ang);
				        ctx.translate(0, radius*0.85);
				        ctx.rotate(-ang);
				    }
				}
				function drawTime(ctx, radius){
				    var now = new Date();
				    var hour = now.getHours();
				    var minute = now.getMinutes();
				    var second = now.getSeconds();
				    //hour
				    hour = hour%12;
				    //calculate angle of hour hand
				    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
				    //make hour hand 50% of canvas's radius
				    drawHand(ctx, hour, radius*0.5, radius*0.07);
				    //minute
				    //calculate angle of minute hand
				    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
				    //make minute hand 80% of canvas's radius
				    drawHand(ctx, minute, radius*0.8, radius*0.07);
				    //second
				    //calculate angle of second hand
				    second=(second*Math.PI/30);
				    //make second hand 90% of canvas's radius
				    drawHand(ctx, second, radius*0.9, radius*0.02);
				}
				function drawHand(ctx, pos, length, width){
				    ctx.beginPath();
				    ctx.lineWidth = width;
				    ctx.lineCap = "round";
				    ctx.moveTo(0,0);
				    ctx.rotate(pos);
				    ctx.lineTo(0, -length);
				    ctx.stroke();
				    ctx.rotate(-pos);
				}
				    </script>
				</body>
				""";

	}

	@RequestMapping("/hangman")
	public String hangman() {
		return """
				    <!DOCTYPE html>
				<html lang="en">
				<head>
				    <meta charset="UTF-8">
				    <meta name="viewport" content="width=device-width, initial-scale=1.0">
				    <meta http-equiv="X-UA-Compatible" content="ie=edge">
				    <title>Hangman</title>
				    <style>
				    * {
							box-sizing: border-box;
							margin: 0;
							padding: 0;
						}
						html {
							font-size: 62.5%;
						}
						body {
							background: #2B292E;
							color: #fafafa;
							font-family: Helvetica, Arial, sans-serif;
							font-size: 1.6rem;
							display: flex;
							align-items: center;
							justify-content: center;
							min-height: 100vh;
						}
						span {
							border-bottom: 1px solid #534f59;
							display: inline-block;
							font-size: 2rem;
							height: 2.4rem;
							line-height: 2.4rem;
							margin: 0 .1rem;
							text-align: center;
							text-transform: uppercase;
							width: 2.4rem;
						}
						p {
							font-weight: 300;
							margin-bottom: .8rem;
						}
				.puzzle {
							display: flex;
							margin-bottom: 4.8rem;
						}
				.button {
							background: #7044a0;
							border: none;
							border-bottom: 2px solid #603a88;
							cursor: pointer;
							color: white;
							font-size: 1.4rem;
							font-weight: 300;
							padding: .8rem;
							transition: background .3s ease, color .3s ease;
						}
				.button:hover {
							background: #5F3A87;
						}
				    </style>
				</head>
				<body>
				    <div>
				        <div id="puzzle" class="puzzle"></div>
				        <p id="guesses"></p>
				        <button id="reset" class="button">Reset</button>
				    </div>
				    <script>
				    const getPuzzle = async (wordCount) => {
				        const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
							if (response.status === 200){
				                const data = await response.json()
								return data.puzzle
							} else {
								throw new Error('Unable to fetch puzzle')
							}
						}
						class Hangman {
							constructor(word, remainingGuesses){
								this.word = word.toLowerCase().split('');
								this.remainingGuesses = remainingGuesses;
								this.guessedLetters = [];
								this.status = 'playing';
							}

							get puzzle() {
								let puzzle = '';
								this.word.forEach((letter) => {
								if (this.guessedLetters.includes(letter) || letter === ' '){
									puzzle += letter;
								} else {
									puzzle += '*'
								}
				            })
								return puzzle;
							}

							makeGuess (guess){
								guess = guess.toLowerCase();
				            const isUnique = !this.guessedLetters.includes(guess);
				            const isBadGuess = !this.word.includes(guess);

								if (this.status !== 'playing'){
									return
								}

								if (isUnique){
									this.guessedLetters.push(guess)
								}

								if (isUnique && isBadGuess){
									this.remainingGuesses--
								}
								this.calculateStatus();
							}

							get statusMessage(){
								if (this.status === 'playing'){
									return `Guesses left: ${this.remainingGuesses}`
								} else if (this.status === 'failed') {
									return `Nice try! The word was "${this.word.join('')}" `
								} else {
									return 'Great work! You guessed the word!'
								}
							}

							calculateStatus(){
				            const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

								if (this.remainingGuesses === 0){
									this.status = 'failed'
								} else if (finished){
									this.status = 'finished'
								} else {
									this.status = 'playing'
								}
							}

						}

						let game1
				const puzzleDIV = document.querySelector('#puzzle');
				const remainingDIV = document.querySelector('#guesses');
						window.addEventListener('keypress', (e) => {
				    const guess = String.fromCharCode(e.charCode);
						game1.makeGuess(guess);
						render()
				})
				const render = () => {
							puzzleDIV.innerHTML = ''
							remainingDIV.textContent = game1.statusMessage;
							game1.puzzle.split('').forEach((letter) => {
				        const letterEl = document.createElement('span')
							letterEl.textContent = letter
							puzzleDIV.appendChild(letterEl)
				    })
						}
				const startGame = async () => {
				    const puzzle = await getPuzzle('3')
							game1 = new Hangman(puzzle, 5)
							render()
						}
						document.querySelector('#reset').addEventListener('click', startGame)
						startGame()
								</script>
				</body>
				</html>
								""";
	}

	@RequestMapping("/puzzles")
	public String puzzles() {
		return """
				<!DOCTYPE html>
				<html>
				<head>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
				<title>Picture Puzzle</title>
				<style>
								body {
							font-family: 'Segoe UI', Calibri, Arial;
							margin:0;
							background-color: lightgreen;
						}
						h2{
							font-weight:normal;
							text-align:center;
						}
						h3{
							font-weight:normal;
							margin:3px 0px;
							text-align:center;
						}
				#collage hr{
							border:none;
							border-top:2px solid #f5f2f2;
							height:1px;
						}
				#collage #playPanel {
							background-color:#c2defc;
							padding:10px 0px;
							margin: 10px auto;
							max-width:800px;
							width:95%;
						}
				#collage #actualImageBox {
							display: inline-block;
							font-size:0.8em;
							margin: 10px 10px;
							vertical-align: top;
							width:280px;
						}
				#collage #stepBox, #collage #timeBox {
							display:inline-block;
							width:48%;
						}
				#collage #stepBox div {
							background-color:#c2defc;
							display:inline-block;
							padding:1px 4px;
							margin: 0px auto;
							max-width:800px;
						}
				#collage img#actualImage{
							border:2px solid #a46;
							height:280px;
							width:280px;
						}
				#collage #sortable {
							border:2px solid #a46;
							list-style-type: none;
							display: inline-block;
							margin: 10px;
							padding: 0;
							width: 400px;
						}
				#collage #sortable li {
							background-size: 400% 400%;
							border: none;
							cursor: pointer;
							margin: 0;
							padding: 0;
							float: left;
							width: 100px;
							height: 100px;
						}
				#collage button  {
							background-color:#f5f2f2;
							border:1px solid #cce;
							display: inline;
							font-size: 14px;
							height: auto;
							width: auto;
							padding: 3px 8px;
						}
				</style>
				<script>
								var timerFunction;
						var imagePuzzle = {
								stepCount: 0,
								startTime: new Date().getTime(),
								startGame: function (images, gridSize) {
							this.setImage(images, gridSize);
							$('#playPanel').show();
							$('#sortable').randomize();
							this.enableSwapping('#sortable li');
							this.stepCount = 0;
							this.startTime = new Date().getTime();
							this.tick();
						},
						tick: function () {
							var now = new Date().getTime();
							var elapsedTime = parseInt((now - imagePuzzle.startTime) / 1000, 10);
							$('#timerPanel').text(elapsedTime);
							timerFunction = setTimeout(imagePuzzle.tick, 1000);
						},
						enableSwapping: function (elem) {
							$(elem).draggable({
									snap: '#droppable',
									snapMode: 'outer',
									revert: "invalid",
									helper: "clone"
				    });
							$(elem).droppable({
									drop: function (event, ui) {
								var $dragElem = $(ui.draggable).clone().replaceAll(this);
								$(this).replaceAll(ui.draggable);
								currentList = $('#sortable > li').map(function (i, el) { return $(el).attr('data-value'); });
								if (isSorted(currentList))
									$('#actualImageBox').empty().html($('#gameOver').html());
								else {
									var now = new Date().getTime();
									imagePuzzle.stepCount++;
									$('.stepCount').text(imagePuzzle.stepCount);
									$('.timeCount').text(parseInt((now - imagePuzzle.startTime) / 1000, 10));
								}
								imagePuzzle.enableSwapping(this);
								imagePuzzle.enableSwapping($dragElem);
							}
				    });
						},
						setImage: function (images, gridSize) {
							console.log(gridSize);
							gridSize = gridSize || 4; // If gridSize is null or not passed, default it as 4.
							console.log(gridSize);
							var percentage = 100 / (gridSize - 1);
							var image = images[Math.floor(Math.random() * images.length)];
							$('#imgTitle').html(image.title);
							$('#actualImage').attr('src', image.src);
							$('#sortable').empty();
							for (var i = 0; i < gridSize * gridSize; i++) {
								var xpos = (percentage * (i % gridSize)) + '%';
								var ypos = (percentage * Math.floor(i / gridSize)) + '%';
								var li = $('<li class="item" data-value="' + (i) + '"></li>').css({
										'background-image': 'url(' + image.src + ')',
										'background-size': (gridSize * 100) + '%',
										'background-position': xpos + ' ' + ypos,
										'width': 400 / gridSize,
										'height': 400 / gridSize
				        });
								$('#sortable').append(li);
							}
							$('#sortable').randomize();
						}
				};
						function isSorted(arr) {
						for (var i = 0; i < arr.length - 1; i++) {
							if (arr[i] != i)
								return false;
						}
						return true;
				}
						$.fn.randomize = function (selector) {
							var $elems = selector ? $(this).find(selector) : $(this).children(),
									$parents = $elems.parent();
							$parents.each(function () {
								$(this).children(selector).sort(function () {
									return Math.round(Math.random()) - 0.5;
								}).remove().appendTo(this);
							});
							return this;
						};
				</script>
				</head>
				<body>
				<div id="collage">
				    <h2>Picture Puzzle</h2>
				    <hr />
				    <div id="playPanel" style="padding:5px;display:none;">
				        <h3 id="imgTitle"></h3> <hr />
				        <div style="display:inline-block; margin:auto; width:95%; vertical-align:top;">
				            <ul id="sortable" class="sortable"></ul>
				            <div id="actualImageBox">
				                <div id="stepBox">
				                    <div>Count:</div><div class="stepCount">0</div>
				                </div>
				                <div id="timeBox">
								Time: <span id="timerPanel"></span> seconds
								</div>
				                <img id="actualImage" />
				                <div>See the picture and solve the puzzle.</div>
				                <p id="levelPanel">
				                    <input type="radio" name="level" id="easy" checked="checked" value="3" /> <label for="easy">Easy</label>
				                    <input type="radio" name="level" id="medium" value="4" /> <label for="medium">Medium</label>
				                    <input type="radio" name="level" id="hard" value="5" /> <label for="hard">Hard</label>
				                    <input type="radio" name="level" id="veryhard" value="6" /> <label for="veryhard">Very Hard</label>
				                </p>
				                <div>
				                    <button id="btnRule" type="button" class="btn" onclick="rules();">Rules</button>
				                    <button id="newPhoto" type="button" class="btn">Next Picture</button>
				                </div>
				            </div>
				        </div>
				    </div>
				    <div id="gameOver" style="display:none;">
				        <div style="background-color: #fc9e9e; padding: 5px 10px 20px 10px; text-align: center; ">
				            <h2 style="text-align:center">Game over !!</h2>
								Congratulations!! <br /> You got the picture ready.
				            <br />
								Time: <span class="stepCount">0</span> gear.
								<br />
								Time spent: <span class="timeCount">0</span> seconds<br />
				            <div>
				                <button type="button" onclick="window.location.reload(true);">Play more</button>
				            </div>
				        </div>
				    </div>
				    <script>
								var images = [
						{ src: 'https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/puzzle/img/neeruti.jpg', title: 'Neeruti manor' },
						{ src: 'https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/puzzle/img/harju_madise.jpg', title: 'Harju-Madis Church' },
						{ src: 'https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/puzzle/img/rahumae.jpg', title: 'Rahumäe train station' },
						{ src: 'https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/puzzle/img/kakumae.jpg', title: 'Kakumäe Harbor' },
						{ src: 'https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/puzzle/img/kohila.jpg', title: 'Kohila mill' }
				    ];

						$(function () {
							var gridSize = $('#levelPanel :radio:checked').val();
							imagePuzzle.startGame(images, gridSize);
							$('#newPhoto').click(function () {
								var gridSize = $('#levelPanel :radio:checked').val();
								imagePuzzle.startGame(images, gridSize);
							});

							$('#levelPanel :radio').change(function (e) {
								var gridSize = $(this).val();
								imagePuzzle.startGame(images, gridSize);
							});
						});
						function rules() {
							alert('Rearrange the pieces so that you get a sample image. The steps taken are counted');
						}
				    </script>
				    </div>
				</body>
				</html>
								""";
	}

	@RequestMapping("/sudoku")
	public String sudoku() {
		return """
				    <html>
				<head>
				    <!-- Copyright (c) Microsoft Corporation. All Rights Reserved. -->
				<title>HTML5 Sudoku</title>        
				    <meta http-equiv="Content-Language" content="en-us" />
				    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				    <meta name="application-name" content="HTML5 Sudoku" />
				    <meta name="msapplication-tooltip" content="Play Sudoku on IE TestDrive" />
				    <meta name="msapplication-starturl" content="https://internetexplorer.github.io/Sudoku/" />
				    <meta name="msapplication-navbutton-color" content="#C40502" />
				    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
				    <style>
								html,body
						{
							width: 100%;
							height: 100%;
							border: 0px;
							overflow: auto;
						}
						body
						{
							margin: 0px;
							padding: 0px;
							background: #E10A04 url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/backgroundx.png') repeat-x;
							font-family: Arial;
							color: #FFAEAE;
							font-size: 12px;
						}
						body,table,tr,td,div
						{
							margin: 0px;
							padding: 0px;
							border: 0px;
						}
						b
						{
							color: #FFFFFF;
							font-weight: bold;
						}
				#Wrapper
						{
							background: url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/background.png') no-repeat top center;
							min-height: 720px;
						}
				#Main,#Content,#Footer
						{
							width: 980px;
							margin: 0 auto;
						}
				#PageTitle
						{
							font-family: Segoe UI, Arial;
							font-weight: normal;
							color: #FFFFFF;
							font-size: 33px;
						}
						a
						{
							color: #FFAEAE;
							text-decoration: none;
						}
						a:hover
						{
							color: #FFFFFF;
							text-decoration: none;
						}
				#Content
						{
							float: left;
						}
				#Column1
						{
							width: 300px;
							float: left;
						}
				#sudokuBoard
						{
							width: 426px;
							margin-left: 40px;
							float: left;
							box-shadow: 0px 0px 30px #680301;
							-moz-box-shadow: 0px 0px 30px #680301;
							-webkit-box-shadow: 0 0 30px #680301;
						}
				#Column2
						{
							width: 174px;
							margin-left: 40px;
							float: left;
						}
				#Footer
						{
							margin-top: 600px;
							color: #910502;
						}
				#FooterDetails
						{
							float: left;
							font-size: 11px;
						}
				#Copyright
						{
							float: right;
							font-size: 10px;
						}
						td.boardCellGroupA,td.boardCellGroupB
						{
							background-color: #940302;
						}
						td.boardCellGroupA td.boardCell
						{
							width: 44px;
							height: 44px;
							border: 1px solid #EC0904;
							background-color: #DA0603;
						}
						td.boardCellGroupB td.boardCell
						{
							width: 44px;
							height: 44px;
							border: 1px solid #D40703;
							background-color: #C40502;
						}
				.staticValue
						{
							font-family: Segoe UI, Arial;
							text-align: center;
							vertical-align: middle;
							font-size: 30px;
							color: #6C0000;
						}
				.staticValue,.editValue
						{
							width: 42px;
							height: 42px;
							padding: 0px;
							margin: 0px;
							border: 1px solid #DA0603;
						}
				.editValue:hover
						{
							background: #940302;
						}
						label
						{
							position: relative;
							top: 3px;
							line-height: 24px;
							font-size: 15px;
							color: #FFFFFF;
						}
						select
						{
							font-family: Arial;
							color: #999999;
							font-weight: normal;
							font-size: 12px;
							border-top: solid 1px #CCCCCC;
							border-left: solid 1px #E2E3EA;
							border-bottom: solid 1px #FFFFFF;
							border-right: solid 1px #E2E3EA;
							margin: 3px 0px;
							min-width: 100px;
							background: #FDFDFD;
						}
				#timeFinished
						{
							font-family: Segoe UI, Arial;
							font-size: 46px;
							font-weight: bold;
							line-height: 40px;
						}
				.finishedLabel,#timeFinished
						{
							color: #FBF2A8;
						}
				.editValue input
						{
							font-family: Segoe UI, Arial;
							font-size: 30px;
							color: #FFFFFF;
							width: 44px;
							/*height: 44px;*/
							padding: 0px;
							border: 0px;
							background: none !important;
							text-align: center;
							vertical-align: middle;
							position: relative;
							left: -1px;
						}
						input[type="submit"]
						{
							font-family: Arial;
							font-size: 18px;
							color: #FFFFFF;
							text-transform: uppercase;
							border: 0px;
							min-width: 162px;
							min-height: 34px;
							background: url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/submitBackground.png') repeat-x;
							margin: 8px 0px;
							cursor: pointer;
						}
						input[type="submit"].gameControls
						{
							font-family: Arial;
							font-size: 16px;
							color: #FFFFFF;
							text-transform: uppercase;
							border: 0px;
							min-width: 28px;
							min-height: 28px;
							background: url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/submitSmallBackground.png') repeat-x;
							margin: 8px 0px;
							padding: 2px 16px;
							cursor: pointer;
						}
				.gameControlSet
						{
							height: 142px;
							position: relative;
							top: -8px;
						}
				#buttonSolve
						{
							margin-top: 119px;
							color: #FFAEAE;
						}
				#youWon
						{
							width: 100%;
							height: 100%;
							position: absolute;
							top: 0px;
							right: 0px;
							background: url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/shade.png') repeat;
						}
				#youWon div
						{
							width: 400px;
							background: #940302;
							font-size: 40px;
							color: #FFFFFF;
							text-align: center;
							padding: 40px;
							margin: 100px auto 0px auto;
						}
						small
						{
							font-size: 14px;
							color: #FFFD7B;
						}
				.noErrors
						{
							font-size: 18px;
							font-weight: bold;
							color: #FFFFFF;
						}
				.errorsFound
						{
							font-size: 18px;
							font-weight: bold;
							color: #ED823F;
						}
				.error
						{
							border: 1px solid #ED823F;
						}
				    </style>
				<link rel="shortcut icon" href="https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/icon.ico" type="image/x-icon" />
				</head>
				<body>
				    <div id="Wrapper">
				        <div id="Main">
				            <h1 id="PageTitle">HTML5 Sudoku</h1>
				            <div id="Content">
				                <div id="Column1">
				                    <span role="tab" aria-selected="true" aria-controls="demoIntro" tabindex="100">In this demo we take the well-known game of Sudoku, and demonstrate how developers can use HTML5 and JavaScript to create an efficient algorithm to solve these puzzles. The algorithms draw heavily on the Chakra engine’s support for ECMAScript 5 standard array operations to rapidly solve many Sudoku games. You can also manually solve Sudoku puzzles.</span>
				                    <br/>
				                    <br/>
				                    <br/>
				                    <label># of Games:</label>&nbsp;&nbsp;
				                        <select id="difficulty">
				                            <option value="1">1000</option>
				                            <option value="2" selected>5000</option>
				                            <option value="3">10000</option>
				                        </select>
				                    <input id="amazeButton" type="submit" value="SOLVE GAMES" />
				                    <br/>
				                    <br/>
				                    <div id="calculating" style="display: none;">
				                        <img src="https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/iconTime.png" alt="Calculating Clock" /><span class="finishedLabel">Solving puzzles...</span>
				                    </div>
				                    <div role="tab" aria-selected="true" aria-controls="perfResults" tabindex="200" id="finishedCalculating" style="display: none;">
				                        <img src="https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/iconTime.png" alt="Calculating Clock" /><span class="finishedLabel">Finished In:</span>
				                        <br/>
				                        <span id="timeFinished"></span>
				                    </div>
				                </div>
				                <div id="sudokuBoard">
				                    <table cellspacing="0" cellpadding="0">
				                        <tr>
				                            <td class="boardCellGroupA">
				                                <table cellspacing="1" cellpadding="0">
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="00" class="staticValue">
				                                                <span>6</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="01" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="02" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="10" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="11" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="12" class="staticValue">
				                                                <span>4</span>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="20" class="staticValue">
				                                                <span>2</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="21" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="22" class="staticValue">
				                                                <span>8</span>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                </table>
				                            </td>
				                            <td class="boardCellGroupB">
				                                <table cellspacing="1" cellpadding="0">
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="03" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="04" class="staticValue">
				                                                <span>9</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="05" class="staticValue">
				                                                <span>8</span>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="13" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="14" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="15" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="23" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="24" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="25" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                </table>
				                            </td>
				                            <td class="boardCellGroupA">
				                                <table cellspacing="1" cellpadding="0">
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="06" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="07" class="staticValue">
				                                                <span>2</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="08" class="staticValue">
				                                                <span>4</span>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="16" class="staticValue">
				                                                <span>8</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="17" class="staticValue">
				                                                <span>3</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="18" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="26" class="staticValue">
				                                                <span>1</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="27" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="28" class="staticValue">
				                                                <span>9</span>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                </table>
				                            </td>
				                        </tr>
				                        <tr>
				                            <td class="boardCellGroupB">
				                                <table cellspacing="1" cellpadding="0">
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="30" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="31" class="staticValue">
				                                                <span>6</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="32" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="40" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="41" class="staticValue">
				                                                <span>9</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="42" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="50" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="51" class="staticValue">
				                                                <span>5</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="52" class="staticValue">
				                                                <span>1</span>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                </table>
				                            </td>
				                            <td class="boardCellGroupA">
				                                <table cellspacing="1" cellpadding="0">
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="33" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="34" class="staticValue">
				                                                <span>8</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="35" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="43" class="staticValue">
				                                                <span>1</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="44" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="45" class="staticValue">
				                                                <span>4</span>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="53" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="54" class="staticValue">
				                                                <span>2</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="55" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                </table>
				                            </td>
				                            <td class="boardCellGroupB">
				                                <table cellspacing="1" cellpadding="0">
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="36" class="staticValue">
				                                                <span>3</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="37" class="staticValue">
				                                                <span>5</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="38" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="46" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="47" class="staticValue">
				                                                <span>8</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="48" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="56" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="57" class="staticValue">
				                                                <span>9</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="58" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                </table>
				                            </td>
				                        </tr>
				                        <tr>
				                            <td class="boardCellGroupA">
				                                <table cellspacing="1" cellpadding="0">
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="60" class="staticValue">
				                                                <span>5</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="61" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="62" class="staticValue">
				                                                <span>6</span>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="70" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="71" class="staticValue">
				                                                <span>2</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="72" class="staticValue">
				                                                <span>9</span>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="80" class="staticValue">
				                                                <span>7</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="81" class="staticValue">
				                                                <span>8</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="82" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                </table>
				                            </td>
				                            <td class="boardCellGroupB">
				                                <table cellspacing="1" cellpadding="0">
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="63" class="editValue error">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="64" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="65" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="73" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="74" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="75" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="83" class="staticValue">
				                                                <span>5</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="84" class="staticValue">
				                                                <span>1</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="85" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                </table>
				                            </td>
				                            <td class="boardCellGroupA">
				                                <table cellspacing="1" cellpadding="0">
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="66" class="staticValue">
				                                                <span>9</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="67" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="68" class="staticValue">
				                                                <span>8</span>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="76" class="staticValue">
				                                                <span>5</span>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="77" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="78" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                    <tr>
				                                        <td class="boardCell">
				                                            <div id="86" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="87" class="editValue">
				                                                <input/>
				                                            </div>
				                                        </td>
				                                        <td class="boardCell">
				                                            <div id="88" class="staticValue">
				                                                <span>6</span>
				                                            </div>
				                                        </td>
				                                    </tr>
				                                </table>
				                            </td>
				                        </tr>
				                    </table>
				                </div>
				                <div id="Column2">
				                    <div class="gameControlSet">
				                        <input id="newGameButton" type="submit" value="NEW GAME" class="gameControls"/>
				                        <br/>
				                        <label>
								Level:
				                        </label>&nbsp;&nbsp;
				                        <select id="difficulty">
				                            <option value="1" selected>Easy</option>
				                            <option value="2">Medium</option>
				                            <option value="3">Hard</option>
				                            <option value="4">Very Hard</option>
				                            <option value="5">Insane</option>
				                        </select>
				                    </div>
				                    <div class="gameControlSet">
				                        <input id="checkButton" type="submit" value="CHECK &#x2713;" class="gameControls"/>
				                        <br/>
				                        <span id="errorsFound" class="errorsFound" style="display: none;" role="tab" aria-selected="true" aria-controls="ErrorsFound" tabindex="300">MISTAKE FOUND</span>
				                        <span id="noErrors" class="noErrors" style="display: none;" role="tab" aria-selected="true" aria-controls="NoErrorsFound" tabindex="400">LOOKIN GOOD</span>
				                    </div>
				                    <div class="gameControlSet">
				                        <input id="solveButton" type="submit" value="SOLVE" class="gameControls"/>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
				    <div id="youWon" style="display: none;">
				        <div>
				            <span role="alert" aria-selected="true" aria-controls="youWin" tabindex="500">YOU WIN!</span>
				            <br/>
				            <small role="tab" aria-selected="true" aria-controls="youWinText" tabindex="600">
								Great job. Can you do it again?
				            </small>
				            <br/>
				            <br/>
				            <input id="winNewGameButton" type="submit" value="NEW GAME" class="gameControls"/>
				            <input id="winCloseButton" type="submit" value="CLOSE" class="gameControls"/>
				        </div>
				    </div>
				    <script>
								function solveSudoku(inputBoard, stats) {
							var stats = stats || {};
							stats['easy'] = true;
							var board = JSON.parse(JSON.stringify(inputBoard));
							var possibilities = [[], [], [], [], [], [], [], [], []];
							for(var i = 0; i < 9; i++) {
								for(var j = 0; j < 9; j++) {
									possibilities[i][j] = [false, true, true, true, true, true, true, true, true, true];
								}
							}
							var solved = false;
							var impossible = false;
							var mutated = false;
							var needCheckFreedoms = false;
				//TODO: check input is a valid puzzle
							var loopCount = 0;
							outerLoop: while(!solved && !impossible) {
								solved = true;
								mutated = false;
								loopCount++;
								var leastFree = [];
								var leastRemaining = 9;
								for(var i = 0; i < 9; i++) {
									for(var j = 0; j < 9; j++) {

										if(board[i][j] === 0) {

											solved = false;
											var currentPos = possibilities[i][j];

											var zoneRow;
											var zoneCol;

											if(loopCount === 1) {
												zoneRow = getZone(i) * 3;
												zoneCol = getZone(j) * 3;
												currentPos[10] = zoneRow;
												currentPos[11] = zoneCol;
											} else {
												zoneRow = currentPos[10];
												zoneCol = currentPos[11];
											}

											var wasMutated =  reducePossibilities(board, i, j, currentPos, zoneRow, zoneCol);

											if(wasMutated) {
												mutated = true;
											}


											// check if the contraints above left us with only one valid option
											var remaining = 0;
											var lastDigit = 0;

											for(var k = 1; k <= 9; k++) {
												if(currentPos[k]) {
													remaining++;
													lastDigit = k;
												}
											}

											if(remaining === 0) {
												//console.log("no remaining " + i + " " + j);
												impossible = true;
												break outerLoop;
											}
											else if(remaining === 1) {
												board[i][j] = lastDigit;
												mutated = true;
												continue;
											}
											if(needCheckFreedoms) {
												var solution = checkFreedoms(board, i, j, possibilities, zoneRow, zoneCol);

												if(solution !== 0) {

													board[i][j] = solution;
													mutated = true;
													continue;
												}
												if(remaining === leastRemaining) {
													leastFree.push([i,j]);
												}
												else if(remaining < leastRemaining) {
													leastRemaining = remaining;
													leastFree = [[i,j]];
												}
											}

										}
									}
								}
								if(mutated === false && solved === false) {

									// time to break out freedom checking
									if(needCheckFreedoms === false) {
										needCheckFreedoms = true;
										stats['medium'] = true;
										continue;
									}

									// we're stuck, time to start guessing
									return solveByGuessing(board, possibilities, leastFree, stats);

								}
							}
							if(impossible) {
				//window.console && console.log("board is impossible");
								return null;
							}
							else {
								return board;
							}
						}
						function getZone(i) {
						if(i < 3) {
							return 0;
						}
						else if(i < 6) {
							return 1;
						}
						else {
							return 2;
						}
				}
						function reducePossibilities(board, row, column, currentPos, zoneRow, zoneCol) {
							var mutated = false;
				//eliminate items already taken in the column and row
							for(var k = 0; k < 9; k++) {
								if(currentPos[board[row][k]] || currentPos[board[k][column]]) {
									mutated = true;
								}
								currentPos[board[row][k]] = false;
								currentPos[board[k][column]] = false;
							}
				//eliminate items already taken in the region
							for(var x = zoneRow; x <= (zoneRow + 2); x++) {
								for(var y = zoneCol; y <= (zoneCol + 2); y++) {
									var zoneDigit = board[x][y];

									if(currentPos[zoneDigit]) {
										mutated = true;
									}

									currentPos[zoneDigit] = false;
								}
							}
							return mutated;
						}
						function checkFreedoms(board, i, j, possibilities, zoneRow, zoneCol) {
							var answer = 0;
							var currentPos = possibilities[i][j];
				//see if only one square can realize a possibility

							var uniquePosRow = currentPos.slice(0);
							var uniquePosCol = currentPos.slice(0);
							var uniquePosCube = currentPos.slice(0);
							for(var k = 0; k < 9; k++) {
								for(var l = 1; l <= 9; l++) {
									if(board[i][k] === 0 && possibilities[i][k][l] && k !== j) {
										uniquePosRow[l] = false;
									}
									if(board[k][j] === 0 && possibilities[k][j][l] && k !== i) {
										uniquePosCol[l] = false;
									}
								}
							}
							var remainingRow = 0;
							var remainingCol = 0;
							var lastDigitRow = 0;
							var lastDigitCol = 0;
							for(var k = 1; k <= 9; k++) {
								if(uniquePosRow[k]) {
									remainingRow++;
									lastDigitRow = k;
								}
								if(uniquePosCol[k]) {
									remainingCol++;
									lastDigitCol = k;
								}
							}
							if(remainingRow === 1) {
								answer = lastDigitRow;
								return answer;
							}
							if(remainingCol === 1) {
								answer = lastDigitCol;
								return answer;
							}
							for(var x = zoneRow; x <= (zoneRow + 2); x++) {
								for(var y = zoneCol; y <= (zoneCol + 2); y++) {
									for(var l = 1; l <= 9; l++) {
										if(board[x][y] === 0 && possibilities[x][y][l] && (x !== i || y !== j)) {
											uniquePosCube[l] = false;
										}
									}
								}
							}
							var remainingCube = 0;
							var lastDigitCube = 0;
							for(var k = 1; k <= 9; k++) {
								if(uniquePosCube[k]) {
									remainingCube++;
									lastDigitCube = k;
								}
							}
							if(remainingCube == 1) {
								answer = lastDigitCube;
							}
							return answer;
						}
						function solveByGuessing(board, possibilities, leastFree, stats) {
							if(leastFree.length < 1) {
								return null;
							}
							if('hard' in stats) {
								stats['vhard'] = true;
							}
				else {
								stats['hard'] = true;
							}
				// choose a space with the least # of possibilities
							var randIndex = getRandom(leastFree.length);
							var randSpot = leastFree[randIndex];
							var guesses = [];
							var currentPos = possibilities[randSpot[0]][randSpot[1]];
							for(var i = 1; i <= 9; i++) {
								if(currentPos[i]) {
									guesses.push(i);
								}
							}
							shuffleArray(guesses);
							for(var i = 0; i < guesses.length; i++) {
								board[randSpot[0]][randSpot[1]] = guesses[i];
								var result = solveSudoku(board, stats);
								if(result != null) {
									return result;
								}
							}
				// board is impossible
							return null;
						}
				// returns a random number in the range 0 to limit - 1 inclusive
						function getRandom(limit) {
						return Math.floor(Math.random() * limit);
				}
				// shuffle an array Fisher-Yates style
						function shuffleArray(array) {
								var i = array.length;
						if(i !== 0) {
							while(--i) {
								var j = Math.floor(Math.random() * (i + 1));
								var temp = array[i];
								array[i] = array[j];
								array[j] = temp;
							}
						}
				}
				// for benchmarking, use a random generator from a seed
						(function() {
				// some dummy value to start with
							var last = 31337;
							var randomBackup = Math.random;
				// Linear Congruential Generator
							var fakeRandom = function() {
								var a = 214013;
								var c = 2531011;
				//2^32
								var m = 4294967296;
								var next = (a * last + c) % m;
								last = next;
								return next / m;
							}
							Math.enableFakeRandom = function() {
								Math.random = fakeRandom;
							}
							Math.disableFakeRandom = function() {
								Math.random = randomBackup;
							}
							Math.fakeRandomSeed = function(seed) {
								last = seed;
							}
						})();
						function generatePuzzle(difficulty) {
						if(difficulty !== 1 && difficulty !== 2 &&
								difficulty !== 3 && difficulty !== 4  &&
								difficulty !== 5) {

							difficulty = 1;
						}
						var solvedPuzzle = solveSudoku(emptyPuzzle);
						var indexes = new Array(81);
						for(var i = 0; i < 81; i++) {
							indexes[i] = i;
						}
						shuffleArray(indexes);
						var knownCount = 81;
						for(var i = 0; i < 81; i++) {
							if(knownCount <= 25) {
								break;
							}
				//easy check
							if(difficulty == 1 && knownCount <= 35) {
								break;
							}
							var index = indexes[i];
							var row = Math.floor(index / 9);
							var col = index % 9;
							var currentValue = solvedPuzzle[row][col];
							var state = {};
							solvedPuzzle[row][col] = 0;
							var resolvedPuzzle = solveSudoku(solvedPuzzle, state);
				// some clarity -- what the solver considers 'medium' is hard for most users
							var undo = false;
							if(difficulty <= 2 && state.medium) {
								undo = true;
							} else if(difficulty <= 3 && state.hard) {
								undo = true;
							} else if(difficulty <= 4 && state.vhard) {
								undo = true;
							}
							if(undo) {
								solvedPuzzle[row][col] = currentValue;
							}
							else {
								knownCount--;
							}
						}
						return solvedPuzzle;
				}
						function verifySolution(board, onlyFullySolved) {
							var resp = {};
							resp['valid'] = false;
							if(board === null) {
								window.console && console.log("Not a board");
								resp['invalidBoard'] = "Board was null";
								return resp;
							}
							var rows = [];
							var cols = [];
							var cubes = [ [[], [], []], [[], [], []], [[], [], []]];
							for(var i = 0; i < 9; i++) {
								rows.push([]);
								cols.push([]);
							}
							for(var i = 0; i < 9; i++) {
								for(var j = 0; j < 9; j++) {
									var digit = board[i][j];

									if(digit === 0) {
										if(onlyFullySolved) {
											resp['notFullySolved'] = "Board still has unknowns";
											return resp;
										} else {
											continue;
										}
									}

									if(digit in rows[i]) {
										resp['badRow'] = i;
										return resp;
									}
				  else {
										rows[i][digit] = true;
									}

									if(digit in cols[j]) {
										resp['badCol'] = j;
										return resp;
									}
				  else {
										cols[j][digit] = true;
									}

									var cube = cubes[getZone(i)][getZone(j)];

									if(digit in cube) {
										resp['badCube'] = [getZone(i) * 3, getZone(j) * 3];
										return resp;
									}
				  else {
										cube[digit] = true;
									}
								}
							}
							resp['valid'] = true;
							return resp;
						}
						var easyPuzzle = [
				[5, 3, 0, 0, 7, 0, 0, 0, 0],
				[6, 0, 0, 1, 9, 5, 0, 0, 0],
				[0, 9, 8, 0, 0, 0, 0, 6, 0],
				[8, 0, 0, 0, 6, 0, 0, 0, 3],
				[4, 0, 0, 8, 0, 3, 0, 0, 1],
				[7, 0, 0, 0, 2, 0, 0, 0, 6],
				[0, 6, 0, 0, 0, 0, 2, 8, 0],
				[0, 0, 0, 4, 1, 9, 0, 0, 5],
				[0, 0, 0, 0, 8, 0, 0, 7, 9]
				];
						var easyPuzzle2 = [
				[1, 6, 0, 0, 0, 3, 0, 0, 0],
				[2, 0, 0, 7, 0, 6, 0, 1, 4],
				[0, 4, 5, 0, 8, 1, 0, 0, 7],
				[5, 0, 8, 4, 0, 0, 0, 0, 0],
				[0, 0, 4, 3, 0, 8, 9, 0, 0],
				[0, 0, 0, 0, 0, 7, 2, 0, 8],
				[8, 0, 0, 6, 3, 0, 1, 9, 0],
				[6, 3, 0, 1, 0, 5, 0, 0, 2],
				[0, 0, 0, 8, 0, 0, 0, 3, 6]
				];
						var easyPuzzle3 = [
				[8, 1, 0, 0, 2, 9, 0, 0, 0],
				[4, 0, 6, 0, 7, 3, 0, 5, 1],
				[0, 7, 0, 0, 0, 0, 8, 0, 2],
				[0, 0, 4, 5, 0, 0, 0, 0, 6],
				[7, 6, 0, 0, 0, 0, 0, 1, 3],
				[1, 0, 0, 0, 0, 6, 2, 0, 0],
				[2, 0, 7, 0, 0, 0, 0, 8, 0],
				[6, 9, 0, 2, 8, 0, 3, 0, 5],
				[0, 0, 0, 9, 6, 0, 0, 2, 4]
				];
						var solvedPuzzle = [
				[5, 3, 4, 6, 7, 8, 9, 1, 2],
				[6, 7, 2, 1, 9, 5, 3, 4, 8],
				[1, 9, 8, 3, 4, 2, 5, 6, 7],
				[8, 5, 9, 7, 6, 1, 4, 2, 3],
				[4, 2, 6, 8, 5, 3, 7, 9, 1],
				[7, 1, 3, 9, 2, 4, 8, 5, 6],
				[9, 6, 1, 5, 3, 7, 2, 8, 4],
				[2, 8, 7, 4, 1, 9, 6, 3, 5],
				[3, 4, 5, 2, 8, 6, 1, 7, 9]
				];
						var invalidPuzzle = [
				[5, 3, 4, 6, 7, 8, 9, 1, 2],
				[6, 7, 2, 1, 9, 5, 3, 4, 8],
				[1, 9, 8, 3, 4, 2, 5, 6, 7],
				[8, 5, 9, 7, 6, 1, 4, 2, 3],
				[4, 2, 6, 8, 5, 3, 7, 9, 1],
				[7, 1, 3, 9, 2, 4, 8, 5, 6],
				[9, 6, 1, 5, 3, 7, 2, 8, 4],
				[8, 2, 7, 4, 1, 9, 6, 3, 5],
				[3, 4, 5, 2, 8, 6, 1, 7, 9]
				];
						var hardPuzzle = [
				[0, 0, 3, 0, 0, 8, 0, 0, 0],
				[0, 4, 0, 0, 0, 0, 0, 0, 0],
				[0, 8, 0, 3, 5, 0, 9, 0, 0],
				[8, 0, 5, 0, 0, 6, 0, 0, 0],
				[1, 0, 0, 7, 3, 2, 0, 0, 8],
				[0, 0, 0, 8, 0, 0, 3, 0, 1],
				[0, 0, 8, 0, 1, 4, 0, 7, 0],
				[0, 0, 0, 0, 0, 0, 0, 5, 0],
				[0, 0, 0, 9, 0, 0, 2, 0, 0]
				];
						var mediumPuzzle = [
				[0, 8, 3, 7, 0, 0, 0, 9, 0],
				[0, 0, 7, 0, 5, 0, 6, 4, 0],
				[0, 0, 0, 9, 0, 0, 0, 0, 3],
				[0, 0, 0, 1, 0, 0, 0, 0, 7],
				[0, 6, 9, 2, 0, 4, 3, 8, 0],
				[7, 0, 0, 0, 0, 9, 0, 0, 0],
				[9, 0, 0, 0, 0, 3, 0, 0, 0],
				[0, 5, 6, 0, 2, 0, 4, 0, 0],
				[0, 1, 0, 0, 0, 7, 5, 3, 0]
				];
						var emptyPuzzle = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0]
				];
						function stressTest() {
							var intervalCount = 0;
							var intervalId = window.setInterval(function() {
								intervalCount++;
								if(intervalCount  > 500) {
									window.console && console.log("finished");
									window.clearInterval(intervalId);
								}
								var newPuzzle = solveSudoku(emptyPuzzle);
								var resp = verifySolution(newPuzzle);
								if(resp['valid'] === false) {
									window.console && console.log("Boo! " + intervalCount);
									printBoard(newPuzzle);
								}
							}, 1);
						}
						function cellInputHandler(event) {
						if(!this.value.match(/^[1-9]$/)) {
							this.value = "";
						}
				}
						function renderBoard(board) {
						for(var i = 0; i < 9; i++) {
							for(var j = 0; j < 9; j++) {
								var id = "" + i + j;
								var el = document.getElementById(id);
								var val = board[i][j];
								var child;
								var elClass;

								if(val === 0) {
									child = document.createElement("input");
									child.setAttribute('maxlength', 1);
									child.addEventListener('keyup', cellInputHandler, false);
									child.addEventListener('blur', cellInputHandler, false);
									elClass = "editValue";
								}
								else {
									child = document.createElement("span");
									child.textContent = val;
									elClass = "staticValue";
								}

								el.innerHTML = "";
								el.setAttribute("class", elClass);
								el.appendChild(child);
							}
						}
				}
				// render the board a special way when the algorithm solves it for the user
				// make it look like the user entered it in
						function renderSolvedBoard(board) {
						for(var i = 0; i < 9; i++) {
							for(var j = 0; j < 9; j++) {
								var id = "" + i + j;
								var el = document.getElementById(id);
								var val = board[i][j];
								var child = el.children[0];
								if(child.tagName === 'INPUT') {
									child.value = val;
								}
							}
						}
				}
						function getCurrentBoard() {
							var board = new Array(9);
							for(var i = 0; i < 9; i++) {
								for(var j = 0; j < 9; j++) {
									if(j === 0) {
										board[i] = new Array(9);
									}
									var id = "" + i + j;
									var el = document.getElementById(id);
									var child = el.children[0];
									var value = "0";
									if(child.tagName === 'INPUT') {
										value = child.value;
									}
									else if(child.tagName == 'SPAN') {
										value = child.textContent;
									}
									if(value.match(/^[1-9]$/)) {
										value = parseInt(value);
									} else {
										//TODO: prompt user for invalid chars
										value = 0;
									}
									board[i][j] = value;
								}
							}
							return board;
						}
						function printBoard(board) {
						for(var i = 0; i < 9; i++) {
							var line = "";
							for(var j = 0; j < 9; j++) {
								line += " " + board[i][j];
							}
							window.console && console.log(line);
						}
				}
						function solveTest(level, after) {
							var easyCount = 2000;
							var hardCount = 200;
							switch(level) {
								case 1:
									easyCount = 475;
									hardCount = 25;
									break;
								case 2:
									easyCount = 2375;
									hardCount = 125;
									break;
								case 3:
									easyCount = 4750;
									hardCount = 250;
									break;
							}
							Math.enableFakeRandom();
							Math.fakeRandomSeed(31337);
							renderBoard(easyPuzzle);
							var timeElapsed = 0;
							var tests = [];
							tests.push(function() {
								timeElapsed += solveTestHelper(easyPuzzle, easyCount);
							});
							tests.push(function() {
								timeElapsed += solveTestHelper(easyPuzzle2, easyCount);
							});
							tests.push(function() {
								timeElapsed += solveTestHelper(mediumPuzzle, hardCount);
							});
							tests.push(function() {
								timeElapsed += solveTestHelper(hardPuzzle, hardCount);
							});
							tests.push(function() {
								Math.disableFakeRandom();
								document.getElementById("timeFinished").textContent = timeElapsed.toFixed(3) + "s";
							});
							tests.push(after);
							var current = 0;
							var timeoutFunc = function() {
								if(current < tests.length) {
									tests[current]();
									current++;
									window.setTimeout(timeoutFunc, 300);
								}
							}
							window.setTimeout(timeoutFunc, 300);
						}
						function solveTestHelper(puzzle, iterations) {
							var solution = null;
							var start = new Date();
							for(var i = 0; i < iterations; i++) {
								solution = solveSudoku(puzzle);
							}
							var end = new Date();
							renderBoard(puzzle);
							renderSolvedBoard(solution);
							var timeElapsed = (end.getTime() - start.getTime()) / 1000;
							return timeElapsed;
						}
						function initialize() {
				// hook up buttons
							var currentPuzzle = generatePuzzle();
							renderBoard(currentPuzzle);
							var amazeButton = document.getElementById('amazeButton');
							var calculatingDiv = document.getElementById('calculating');
							var finishedCalculatingDiv = document.getElementById('finishedCalculating');
							var winBlock = document.getElementById('youWon');
							var noErrorsSpan = document.getElementById('noErrors');
							var errorsFoundSpan = document.getElementById('errorsFound');
							var difficulty = document.getElementById('difficulty');
							var currentErrors = [];
							var amazing = false;
							var clearErrors = function() {
								errorsFoundSpan.style.display = 'none';
								noErrorsSpan.style.display = 'none';
								for(var i = 0; i < currentErrors.length; i++) {
									currentErrors[i].setAttribute('class', currentErrors[i].getAttribute('class').replace(" error", ''))
								}
								currentErrors = [];
							}
							amazeButton.addEventListener('click', function() {
								if(!amazing) {
									var level = parseInt(difficulty.options[difficulty.selectedIndex].value);
									amazing = true;
									clearErrors();
									finishedCalculatingDiv.style.display = 'none';
									calculatingDiv.style.display = 'block';
									solveTest(level, function() {
										finishedCalculatingDiv.style.display = 'block';
										calculatingDiv.style.display = 'none';
										amazing = false;
										currentPuzzle = hardPuzzle;
									});
								}
							}, false);
							var checkButton = document.getElementById('checkButton');
							checkButton.addEventListener('click', function() {
								clearErrors();
								var board = getCurrentBoard();
								var result = verifySolution(board);
								if(result['valid']) {
									var validMessages = [ "LOOKIN GOOD", "KEEP GOING", "AWESOME", "EXCELLENT",
											"NICE", "SWEET", "LOOKS GOOD TO ME"];

									if(verifySolution(board, true)['valid']) {
										winBlock.style.display = 'block';
									}
									else {
										var randIndex = getRandom(validMessages.length);
										noErrorsSpan.textContent = validMessages[randIndex];
										noErrorsSpan.style.display = 'block';
									}
								}
								else {
									if('badRow' in result) {
										var row = result['badRow'];
										for(var i = 0; i < 9; i++) {
											var id = "" + row + i;
											var el = document.getElementById(id);
											el.setAttribute("class", el.getAttribute('class') + " error");
											currentErrors.push(el);
										}
									}
				  else if('badCol' in result) {
										var col = result['badCol'];
										for(var i = 0; i < 9; i++) {
											var id = "" + i + col;
											var el = document.getElementById(id);
											el.setAttribute("class", el.getAttribute('class') + " error");
											currentErrors.push(el);
										}
									}
				  else if('badCube' in result) {
										var cubeRow = result['badCube'][0];
										var cubeCol = result['badCube'][1];
										for(var x = cubeRow + 2; x >= cubeRow; x--) {
											for(var y = cubeCol + 2; y >= cubeCol; y--) {
												var id = "" + x + y;
												var el = document.getElementById(id);
												el.setAttribute("class", el.getAttribute('class') + " error");
												currentErrors.push(el);
											}
										}

									}
									errorsFoundSpan.style.display = 'block';
								}
							}, false);
							var winCloseButton = document.getElementById('winCloseButton');
							winCloseButton.addEventListener('click', function() {
								winBlock.style.display = 'none';
							}, false);
							var winNewGameButton = document.getElementById('winNewGameButton');
							winNewGameButton.addEventListener('click', function() {
								clearErrors();
								var value = parseInt(difficulty.options[difficulty.selectedIndex].value);
								currentPuzzle = generatePuzzle(value);
								renderBoard(currentPuzzle);
								winBlock.style.display = 'none';
							}, false);
							var newGameButton = document.getElementById('newGameButton');
							newGameButton.addEventListener('click', function() {
								clearErrors();
								var value = parseInt(difficulty.options[difficulty.selectedIndex].value);
								currentPuzzle = generatePuzzle(value);
								renderBoard(currentPuzzle);
							}, false);
							var solveButton = document.getElementById('solveButton');
							solveButton.addEventListener('click', function() {
								clearErrors();
								renderSolvedBoard(solveSudoku(currentPuzzle));
							}, false);
							addEventListener('mouseup', function(event) {
								if(event.which === 1) {
									noErrorsSpan.style.display = 'none';
								}
							}, false);
						}
						addEventListener('DOMContentLoaded', initialize, false);
				    </script>
				</body>
				</html>
								""";
	}

	@RequestMapping("/virtual_keyboard")
	public String virtual_keyboard() {
		return """
				  <!DOCTYPE html>
				  <html lang="en">
				  <head>
				      <meta charset="UTF-8">
				      <meta name="viewport" content="width=device-width, initial-scale=1.0">
				      <title>Virtual Keyboard ⌨️ </title>
				      <style>
						body * {
								margin: 0;
				padding: 0;
				box-sizing: border-box;
				font-family: Arial, Helvetica, sans-serif;
				  }
				  
				  
				  .keyboard-base{
					max-width: 1085px;
					padding: 20px;
					position: absolute;
					top: 30%;
					background-color: rgb(252, 185, 185);
					border-radius: 10px;
					justify-content: center;


				}
				  .section-a{
					display: flex;
				}
				  
				  .key {
					background-color: rgb(243, 243, 243);
					border: 2px solid black;
					border-radius: 5px;

					font-size: 20px;
					text-align: center;
					padding-top: 17px;
					width:50px;
					height:50px;
					margin:5px;
				}
				  
				  .key:hover{
					background-color: rgb(247, 100, 161);
				}
				  .space {
					width: 100%;
				}
				  
				  .capslock{
					width:30%;
				}
				  .leftshift{
					width:20%;
				}
				  .return {
						width:20%;
				      
				  }
				textarea{
					width: 30%;
					height: 70px;
					font-size: 30px;
				}
				      </style>
				  </head>
				  <body>
				      <textarea type="text" id="inputText" value="" autofocus onblur="this.focus()" onkeydown="return false" onmouseup="getCaretPositon()"></textarea>
				      
				      <div class="keyboard-base">
				      <div class="section-a">
				          <div class="key" onclick="keyboardHandler(event)">~</div>
				          <div class="key" onclick="keyboardHandler(event)">1</div>
				          <div class="key" onclick="keyboardHandler(event)">2</div>
				          <div class="key" onclick="keyboardHandler(event)">3</div>
				          <div class="key" onclick="keyboardHandler(event)">4</div>
				          <div class="key" onclick="keyboardHandler(event)">5</div>
				          <div class="key" onclick="keyboardHandler(event)">6</div>
				          <div class="key" onclick="keyboardHandler(event)">7</div>
				          <div class="key" onclick="keyboardHandler(event)">8</div>
				          <div class="key" onclick="keyboardHandler(event)">9</div>
				          <div class="key" onclick="keyboardHandler(event)">0</div>
				          <div class="key" onclick="keyboardHandler(event)">-</div>
				          <div class="key" onclick="keyboardHandler(event)">+</div>
				      </div>
				      <div class="section-a">
				          <div class="key" onclick="keyboardHandler(event)">Q</div>
				          <div class="key" onclick="keyboardHandler(event)">W</div>
				          <div class="key" onclick="keyboardHandler(event)">E</div>
				          <div class="key" onclick="keyboardHandler(event)">R</div>
				          <div class="key" onclick="keyboardHandler(event)">T</div>
				          <div class="key" onclick="keyboardHandler(event)">Y</div>
				          <div class="key" onclick="keyboardHandler(event)">U</div>
				          <div class="key" onclick="keyboardHandler(event)">I</div>
				          <div class="key" onclick="keyboardHandler(event)">O</div>
				          <div class="key" onclick="keyboardHandler(event)">P</div>
				          <div class="key" onclick="keyboardHandler(event)">[</div>
				          <div class="key" onclick="keyboardHandler(event)">]</div>
				          <div class="key backslash" onclick="keyboardHandler(event)">\\</div>
				      </div>
				      <div class="section-a">
				  
				          <div class="key capslock" onclick="keyboardHandler(event)">CapsLock</div>
				          <div class="key" onclick="keyboardHandler(event)">A</div>
				          <div class="key" onclick="keyboardHandler(event)">S</div>
				          <div class="key" onclick="keyboardHandler(event)">D</div>
				          <div class="key"onclick="keyboardHandler(event)">F</div>
				          <div class="key"onclick="keyboardHandler(event)">G</div>
				          <div class="key"onclick="keyboardHandler(event)">H</div>
				          <div class="key"onclick="keyboardHandler(event)">J</div>
				          <div class="key" onclick="keyboardHandler(event)">K</div>
				          <div class="key" onclick="keyboardHandler(event)">L</div>
				          <div class="key" onclick="keyboardHandler(event)">;</div>
				          <div class="key" onclick="keyboardHandler(event)">'</div>
						<div class="key return" onclick="keyboardHandler(event)">Back</div>
				      </div>
				      <div class="section-a">
				  
				          <div class="key leftshift" onclick="keyboardHandler(event)">Shift</div>
				          <div class="key" onclick="keyboardHandler(event)">Z</div>
				          <div class="key" onclick="keyboardHandler(event)">X</div>
				          <div class="key" onclick="keyboardHandler(event)">C</div>
				          <div class="key" onclick="keyboardHandler(event)">V</div>
				          <div class="key" onclick="keyboardHandler(event)">B</div>
				          <div class="key" onclick="keyboardHandler(event)">N</div>
				          <div class="key" onclick="keyboardHandler(event)">M</div>
				          <div class="key" onclick="keyboardHandler(event)">,</div>
				          <div class="key" onclick="keyboardHandler(event)">.</div>
				          <div class="key" onclick="keyboardHandler(event)">/</div>
				      </div>
				      <div class="section-a">
				          <div class="key space" onclick="keyboardHandler(event)">Space</div>
				          </div>
				      </div>
				  </body>
				  <script>
						var input = document.getElementById("inputText");
				let bool = false;
				  
				  const keyboardHandler = (event) => {
				    const caretPositon = getCaretPositon();
				    const targetValue = event.target.innerText;
					let array = input.value.split("");
					let a;

					switch (targetValue) {
						case "Back":
							console.log(caretPositon);
							if (caretPositon == 0) {
								input.setSelectionRange(0, 0);
							} else {
								array.splice(caretPositon - 1, 1);
								a = array.join("");
								input.value = a;
								input.setSelectionRange(caretPositon - 1, caretPositon - 1);
							}

							break;
						case "CapsLock":
							toggleCaps();
							break;
						case "Shift":
							toggleShift();
							break;
						case "Space":
							array.splice(caretPositon, 0, " ");
							a = array.join("");
							input.value = a;
							input.setSelectionRange(caretPositon + 1, caretPositon + 1);

							break;
						default:
							array.splice(caretPositon, 0, event.target.innerText);
							a = array.join("");
							input.value = a;
							input.setSelectionRange(caretPositon + 1, caretPositon + 1);

							if (bool) {
								bool = false;
								toggleCaps();
							}
					}
				};

				function getCaretPositon() {
					return input.selectionStart;
				}
				  
				  const isUpperCase = (string) => /^[A-Z]*$/.test(string);
				  
				  const toggleCaps = () => {
					let keyboardKeys = document.getElementsByTagName("div");
					for (let i = 13; i < keyboardKeys.length; i++) {
				      const innerElText = keyboardKeys[i].innerText;
				      const innerTextLength = innerElText.length;

						if (innerTextLength == 1 && isUpperCase(innerElText)) {
							keyboardKeys[i].innerText = innerElText.toLowerCase();
						} else if (innerTextLength == 1) {
							keyboardKeys[i].innerText = keyboardKeys[i].innerText.toUpperCase();
						}
					}
				};
				  
				  const toggleShift = () => {
					toggleCaps();
					bool = true;
				};
				  
				  </script>
				  </html>
						""";
	}

	@RequestMapping("/solitaire")
	public String solitaire() {
		return """
				<html>
				<head>
				        <meta name="viewport" id="metaWidth" content="width=530,user-scalable=no">
				        <meta name="theme-color" id="metaColor" content="#ffffff" />
				        <link href="https://fonts.googleapis.com/css?family=Raleway:200,800" rel="stylesheet">
				    <title>Solitaire</title>
				    <style>
								html {
							margin: 0;
							padding: 0;
							font-family: 'Raleway','Century Gothic', sans-serif;
							background-image: linear-gradient(to bottom, #9b4f4f, #703939);
						}
						body {
							padding: 0;
							margin: 0 auto;
							text-align: center;
							color: #ccbdbd;
						}
						@keyframes flipover {
							0% {
									top: -10px;
							transform: scaleX(0.001);
				            }
							100% {
									top: 0;
							transform: scaleX(1);
				            }
						}
						@keyframes accordion {
							0% {
									transform: scaleX(0.9);
				            }
							100% {
									transform: scaleX(1);
				            }
						}
						@keyframes contract {
							0% {
									transform: scaleY(0.9);
				            }
							100% {
									transform: scaleY(1);
				            }
						}
						@keyframes expand {
							0% {
									transform: scaleY(1.1);
				            }
							100% {
									transform: scaleY(1);
				            }
						}
						@keyframes slideright {
							0% {
									left: -80px;
							transform: scaleX(0.001);
				            }
							100% {
									left: 0;
							transform: scaleX(1);
				            }
						}
						@keyframes slidedown {
							0% {
									top: -80px;
							transform: scaleY(0.001);
				            }
							100% {
									top: 0;
							transform: scaleY(1);
				            }
						}
						@keyframes glow {
							0% {
									margin-top: -76px;
							transform: scale(1);
							box-shadow: 0 0 15px -5px rgba(135, 65, 65, 0.5);
				            }
							50% {
									margin-top: -86px;
							transform: scale(1.1);
							box-shadow:0 0 15px 5px rgba(135, 65, 65, 0.5);
				            }
							100% {
									margin-top: -76px;
							transform: scale(1);
							box-shadow: 0 0 15px -15px rgba(135, 65, 65, 0.5);
				            }
						}
				        .flipover {
							animation: flipover 0.5s 1;
						}
				        .contract {
							animation: contract 0.5s 1;
						}
				        .expand {
							animation: expand 0.5s 1;
						}
				        .board {
							min-height: 100%;
						}
				        .board .inner {
							width: 800px;
							max-width: 100%;
							padding: 20px 0 10px 0;
							margin: auto;
						}
				        .board.desktop {
							padding-top: 65px;
						}
				        .board.desktop .inner {
							width: 535px;
						}
				        .board.desktop .nav-buttons {
							top: 0;
							bottom: auto;
							left: 0;
							right: 0;
							z-index: 88888;
							width: 100%;
							max-width: 100%;
						}
				        .board.desktop .nav-buttons .in {
							width: 510px;
							max-width: 96%;
							padding: 10px 2%;
							margin: auto;
							position: relative;
							z-index: 88888;
						}
				        .board.desktop .nav-buttons .toggle,
				        .board.mobile.portrait .nav-buttons .toggle {
							width: 60px;
							height: 25px;
						}
				        .board.desktop .nav-buttons .toggle label,
				        .board.mobile.portrait .nav-buttons .toggle label {
							height: 25px;
						}
				        .board.mobile.landscape .nav-buttons .toggle {
							height: 60px;
							width: 25px;
						}
				        .board.mobile.landscape .nav-buttons .toggle label {
							height: 60px;
						}
				        .board.desktop .nav-buttons .in:after {
							content: "";
							display: block;
							clear: both;
						}
				        .board.desktop .nav-buttons .in button.new,
				        .board.mobile.portrait .nav-buttons .in button.new {
							float: right;
						}
				        .board.desktop .nav-buttons .in button.back,
				        .board.mobile.portrait .nav-buttons .in button.back {
							float: left;
							position: static;
						}
				        .board.desktop .nav-buttons .in button.new,
				        .board.mobile.portrait .nav-buttons .in button.new {
							float: right;
						}
				        .board.desktop .nav-buttons .in button.back,
				        .board.mobile.portrait .nav-buttons .in button.back {
							position: static;
							float: left;
						}
				        .board.desktop .nav-buttons input:checked + label:after,
				        .board.mobile.portrait .nav-buttons input:checked + label:after {
							float: right;
							margin: 0;
						}
				        .board.mobile.landscape .nav-buttons input:checked + label:after {
							margin: 35px 0 0;
						}
				        .board.desktop .nav-buttons .in .toggle:before,
				        .board.mobile.portrait .nav-buttons .in .toggle:before {
							top: 4px;
							left: -25px;
						}
				        .board.desktop .nav-buttons .in .toggle:after,
				        .board.mobile.portrait .nav-buttons .in .toggle:after {
							bottom: 4px;
							right: -25px;
						}
				        .board.mobile.landscape .nav-buttons .in .toggle:before,
				        .board.mobile.landscape .nav-buttons .in .toggle:after {
							left: 4px;
						}
				        .board.mobile.landscape .nav-buttons .in .toggle:before {
							top: -25px;
						}
				        .board.mobile.landscape .nav-buttons .in .toggle:after {
							bottom: -25px;
						}
						/* dark */
				        .board.dark {
							background-image: linear-gradient(to top, #0f0c0c, #251e1e);
						}
				        .board.dark .cd.f {
							background-color: #412020;
							border-color: #2e2626;
							background-image: repeating-linear-gradient(55deg, transparent, transparent 18px, #4b3e3e 19px, transparent 20px), repeating-linear-gradient(-55deg, transparent, transparent 18px, #161212 19px, transparent 20px), linear-gradient(to bottom, #221c1c, #4d3e3e);
						}
				        .board.dark .closet {
							background-color: #151111;
						}
				        .board.dark.mobile .nav-buttons .in,
				        .board.dark.desktop .nav-buttons {
							background-color: #302727;
						}
				        .board.dark .nav-buttons button {
							background-color: #0f0c0c;
							color: #999999;
						}
				        .board.dark .cd.s,
				        .board.dark .cd.c {
							color: #999999;
							background-color: #181818;
							background-image: linear-gradient(to bottom, #272727, #373737);
							border-color: #414141;
						}
				        .board.dark .cd.h,
				        .board.dark .cd.d {
							color: #ee5555;
							background-color: #640000;
							background-image: linear-gradient(to bottom, #580000, #741212);
							border-color: #740808;
						}
						/* light */
				        .board.light {
							background-image: linear-gradient(to top, #ce9d9d, #e9e3e3);
							color: #4b0707;
						}
				        .board.light .cd.f {
							background-color: #999999;
							border-color: #e9dbdb;
							background-image: repeating-linear-gradient(55deg, transparent, transparent 18px, #ffffff 19px, transparent 20px), repeating-linear-gradient(-55deg, transparent, transparent 18px, #cccccc 19px, transparent 20px), linear-gradient(to bottom, #d3c2c2, #f0e4e4);
						}
				        .board.light .closet {
							background-color: #f6e5e5;
						}
				        .board.light.mobile .nav-buttons .in,
				        .board.light.desktop .nav-buttons {
							background-color: #dcc0c0;
						}
				        .board.light .nav-buttons button {
							background-color: #e6dbdb;
							color: #000000;
						}
				        .board.light .cd.s,
				        .board.light .cd.c {
							color: #080808;
							background-color: #ffffff;
							background-image: linear-gradient(to bottom, #ffffff, #a7a7a7);
							border-color: #9c9c9c;
						}
				        .board.light .cd.h,
				        .board.light .cd.d {
							color: #9e0000;
							background-color: #fde3e3;
							background-image: linear-gradient(to bottom, #ffe5e5, #ff8787);
							border-color: #ff6c6c;
						}
						/* end of colors */
						h1 {
							padding: 100px 0 25px;
							font-weight: 200;
							font-size: 3em;
							margin: 0;
						}
				        .won button {
							color: #eeeeee;
							background-color: #cc0000;
						}
				        .won button:hover {
							color: #cccccc;
							background-color: maroon;
						}
						button {
							border: 0;
							padding: 10px 20px;
							font-weight: bold;
							font-family: 'Raleway', 'Century Gothic', sans-serif;
							border-radius: 8px;
							font-size: 18px;
							cursor: pointer;
						}
				        .start-container button {
							background-color: #333333;
							color: #eeeeee;
							min-width: 200px;
							margin: 0 auto 20px;
						}
						button.resumer {
							background-color: #d6b6b6;
							color: #190101;
						}
						button:hover {
							background-color: #cc0000;
						}
				        .nav-buttons {
							position: fixed;
							bottom: 0;
							top: 0;
							max-width: 100%;
							width: 800px;
							text-align: center;
						}
				        .nav-buttons .in {
							z-index: 200000;
							width: 9%;
							padding: 10px;
							position: absolute;
							right: 0;
							top: 0;
							bottom: 0;
						}
				        .board.mobile.portrait .nav-buttons {
							top: auto;
							width: auto;
							left: 0;
							right: 0;
						}
				        .board.mobile.portrait .nav-buttons .in {
							width: auto;
							position: relative;
						}
				        .nav-buttons .in:after {
							clear: both;
							content: "";
							display: block;
						}
				        .nav-buttons .toggle {
							display: block;
							border-radius: 30px;
							width: 25px;
							height: 60px;
							position: absolute;
							margin: auto;
							background: rgba(135, 64, 74, 0.49);
							top: 0;
							bottom: 0;
							left: 0;
							right: 0;
						}
				        .nav-buttons .toggle:before,
				        .nav-buttons .toggle:after {
							content: "";
							display: block;
							position: absolute;
							border-radius: 20px;
							height: 15px;
							width: 15px;
						}
				        .nav-buttons .toggle:before {
							background: #ffffff;
						}
				        .nav-buttons .toggle:after {
							background: #000000;
						}
				        .nav-buttons input {
							position: absolute;
							opacity: 0;
							width: 0;
							height: 0;
						}
				        .nav-buttons label {
							display: block;
							cursor: pointer;
						}
				        .nav-buttons label:after {
							content: "";
							display: block;
							background: #853f3f;
							height: 25px;
							width: 25px;
							border-radius: 15px;
						}
				        .nav-buttons button {
							font-weight: bold;
							padding: 10px 0;
							width: 50px;
						}
				        .nav-buttons .back {
							position: absolute;
							bottom: 15px;
							margin: auto;
							left: 0;
							right: 0;
						}
				        .numd {
							text-align: center;
							opacity: 0.4;
						}
				        .numd.len10 .icon {
							width: 6px;
							height: 6px;
							margin: 2px;
						}
				        .numd.len9 .icon {
							width: 6px;
							height: 6px;
							margin: 2px;
						}
				        .numd.len8 .icon {
							width: 8px;
							height: 8px;
							margin: 2px;
						}
				        .numd.len7 .icon {
							width: 8px;
							height: 8px;
							margin: 2px;
						}
				        .numd.len6 .icon {
							width: 8px;
							height: 8px;
							margin: 7px 2px 1px;
						}
				        .numd.len5 .icon {
							width: 8px;
							height: 8px;
							margin: 7px 2px 1px;
						}
				        .numd.len4 .icon {
							width: 10px;
							height: 10px;
							margin: 2px;
						}
				        .numd.len3 .icon {
							width: 8px;
							height: 8px;
							margin: 4px auto 0;
							display: block;
						}
				        .numd.len2 .icon {
							width: 15px;
							height: 15px;
							margin: 9px 0px 1px 3px;
						}
				        .numd.len1 .icon {
							width: 25px;
							height: 25px;
							margin: 7px auto 0;
						}
				        .icon {
							display: inline-block;
							width: 15px;
							height: 15px;
						}
				        .icon span {
							display: block;
						}
				        .icon.diamond {
							transform: scaleX(0.7);
						}
				        .icon.diamond span {
							width: 70%;
							height: 70%;
							margin-top: 21%;
							margin-left: 14%;
							transform: rotate(45deg);
						}
				        .icon.heart .a,
				        .icon.heart .b {
							border-radius: 50%;
							width: 50%;
							height: 52%;
							margin-top: 14%;
						}
				        .icon.heart .a {
							float: left;
						}
				        .icon.heart .b {
							float: right;
						}
				        .icon.heart .c {
							clear: both;
							transform: rotate(45deg);
							width: 52%;
							height: 52%;
							margin-left: auto;
							margin-right: auto;
							position: relative;
							top: -28%;
						}
				        .icon.spade .a,
				        .icon.spade .b {
							border-radius: 50%;
							width: 43%;
							height: 50%;
							margin-top: 14%;
						}
				        .icon.spade .c {
							transform: rotate(45deg);
							width: 55%;
							height: 55%;
							margin-left: auto;
							margin-right: auto;
							margin-top: 27%;
							margin-bottom: -44%;
						}
				        .icon.spade .a {
							float: left;
						}
				        .icon.spade .b {
							float: right;
						}
				        .icon.spade .d {
							margin: 0 auto 0;
							width: 13%;
							height: 78%;
						}
				        .icon.club .a,
				        .icon.club .b,
				        .icon.club .c {
							border-radius: 50%;
							width: 46%;
							height: 44%;
						}
				        .icon.club .a {
							margin: 8% auto -13%;
						}
				        .icon.club .b {
							float: left;
						}
				        .icon.club .c {
							float: right;
						}
				        .icon.club .d {
							margin: 0 auto 0;
							width: 15%;
							height: 70%;
						}
				        .cd {
							overflow: hidden;
							font-weight: bold;
							padding: 3px;
							text-align: right;
							border: 5px solid #222222;
							margin: 5px;
							float: left;
							width: 40px;
							height: 60px;
							z-index: 999;
							cursor: pointer;
							position: relative;
							border-radius: 3px;
							user-select: none;
						}
				        .cd * {
								pointer-events: none;
				        }
				        .icon.spade span,
				        .icon.club span {
							background: #999999;
						}
				        .icon.heart span,
				        .icon.diamond span {
							background: #ee5555;
						}
				        .cd p {
							float: left;
							padding: 0 0 5px;
						}
				        .cd p,
				        .cd h2 {
							margin: 0;
							line-height: 1;
						}
				        .cd h2 {
							text-align: center;
							padding: 6px 0 0;
							font-size: 1.9em;
							font-weight: bold;
						}
				        .cd hr {
							opacity: 0.5;
							margin: 0;
							border-width: 1px 0 0 0;
							border-style: solid;
							clear: both;
						}
				        .cd i {
							display: inline-block;
							margin: 3px;
							height: 0;
							width: 0;
							border: 2px solid;
							border-radius: 50%;
						}
				        .stack {
							padding-top: 70px;
							min-height: 70px;
							float: left;
							transform-origin: 0 0;
							background-size: 52px 74px;
							background-repeat: no-repeat;
							background-position: center 10px;
						}
				        .board.dark .stack {
							background-image: linear-gradient(#312727, #221c1c);
						}
				        .board.light .stack {
							background-image: linear-gradient(#e6dada, #e5d9d9);
						}
				        .board.mobile.landscape .stack {
							width: 9.5%;
						}
				        .board.desktop .stack,
				        .board.mobile.portrait .stack {
							width: 14.2%;
						}
				        .board.desktop .stacks,
				        .board.mobile.portrait .stacks {
							clear: both;
							padding: 5px;
						}
				        .stack .cd {
							margin-bottom: 0;
							margin-left: 9px;
							margin-top: -50px;
							box-shadow: 0px -3px 4px 1px rgba(0,0,0,0.25);
							transition: margin-top 0.5s;
						}
				        .stack .cd.f {
							margin-top: -60px;
						}
				        .stack.len8 .cd.f {
							margin-top: -65px;
						}
				        .stack.len9 .cd.f {
							margin-top: -67px;
						}
				        .stack.len10 .cd.f,
				        .stack.len11 .cd.f,
				        .stack.len12 .cd.f,
				        .stack.len13 .cd.f,
				        .stack.len14 .cd.f,
				        .stack.len15 .cd.f,
				        .stack.len16 .cd.f {
							margin-top: -70px;
						}
				        .cd.f+.cd.a {
							margin-top: -64px;
						}
				        .stack .cd.f:first-child,
				        .stack .cd.a:first-child {
							margin-top: -60px
						}
				        .board.mobile.landscape .refuse-pile {
							width: 9%;
							padding-top: 88px;
							padding-left: 1%;
							padding-bottom: 0;
							float: left;
							transform-origin: 0 0;
						}
				        .board.mobile.landscape .refuse-pile .cd.f {
							float: left;
							margin-top: -77px;
							box-shadow: -3px -2px 4px -2px rgba(0,0,0,0.5);
						}
				        .board.desktop .refuse-pile .cd.slide,
				        .board.mobile.portrait .refuse-pile .cd.slide {
							animation: slideright 0.5s 1;
						}
				        .board.mobile.landscape .refuse-pile .cd.slide {
							animation: slidedown 0.5s 1;
						}
				        .board.desktop .refuse-pile.accordion,
				        .board.mobile.portrait .refuse-pile.accordion {
							animation: accordion 0.5s 1;
							transform-origin: 0 0;
						}
				        .board.desktop .refuse-pile,
				        .board.mobile.portrait .refuse-pile {
							width: 185px;
							float: left;
							padding-top: 50px;
							padding-left: 2%;
						}
				        .board.desktop .refuse-pile .cd,
				        .board.desktop .refuse-pile .cd.f,
				        .board.mobile.portrait .refuse-pile .cd,
				        .board.mobile.portrait .refuse-pile .cd.f {
							margin-top: -50px;
							margin-bottom: 0;
						}
				        .board.desktop .refuse-pile .cd,
				        .board.mobile.portrait .refuse-pile .cd {
							float: right;
						}
				        .board.desktop .refuse-pile.all .cd.f,
				        .board.mobile.portrait .refuse-pile.all .cd.f {
							margin-left: -53.6px;
						}
				        .board.desktop .refuse-pile .cd,
				        .board.mobile.portrait .refuse-pile .cd {
							margin-right: 0;
							margin-top: -50px;
							box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.5);
						}
				        .closet {
							float: right;
							text-align: left;
							border-radius: 2px;
							width: 57px;
							height: 0px;
							padding: 81px 4px 5px;
							margin: 0 0 5px 0;
						}
				        .board.mobile.landscape .closets-area {
							width: 10%;
							float: right;
							margin-right: 13%;
						}
				        .board.desktop .closets-area,
				        .board.mobile.portrait .closets-area {
							margin-right: 2%;
						}
				        .board.desktop .closet,
				        .board.mobile.portrait .closet {
							margin: 0 5px 0 0;
						}
				        .closet .cd.glow {
							animation: glow 0.5s 1;
						}
				        .closet .cd {
							margin: -76px 0 0;
						}
				        .closet .cd:last-of-type {
							box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.5);
						}
				        .closet > .icon {
							pointer-events: none;
							text-align: center;
							height: 36px;
							position: absolute;
							width: 35px;
							line-height: 40px;
							margin: -58px 0 0 12px;
							font-size: 40px;
							opacity: 0.5;
						}
				        .clear:after {
							content: "";
							display: block;
							clear: both;
						}
				        .board.desktop .refuse-pile .cd.f,
				        .board.mobile.portrait .refuse-pile .cd.f {
							float: left;
						}
				        .board.desktop .refuse-pile.len24 .cd.f,
				        .board.mobile.portrait .refuse-pile.len24 .cd.f {
							margin-left: -53.2px;
						}
				        .board.desktop .refuse-pile.len23 .cd.f,
				        .board.mobile.portrait .refuse-pile.len23 .cd.f {
							margin-left: -53.1px;
						}
				        .board.desktop .refuse-pile.len22 .cd.f,
				        .board.mobile.portrait .refuse-pile.len22 .cd.f {
							margin-left: -53px;
						}
				        .board.desktop .refuse-pile.len21 .cd.f,
				        .board.mobile.portrait .refuse-pile.len21 .cd.f {
							margin-left: -52.9px;
						}
				        .board.desktop .refuse-pile.len20 .cd.f,
				        .board.mobile.portrait .refuse-pile.len20 .cd.f {
							margin-left: -52.7px;
						}
				        .board.desktop .refuse-pile.len19 .cd.f,
				        .board.mobile.portrait .refuse-pile.len19 .cd.f {
							margin-left: -52.5px;
						}
				        .board.desktop .refuse-pile.len18 .cd.f,
				        .board.mobile.portrait .refuse-pile.len18 .cd.f {
							margin-left: -52.4px;
						}
				        .board.desktop .refuse-pile.len17 .cd.f,
				        .board.mobile.portrait .refuse-pile.len17 .cd.f {
							margin-left: -52px;
						}
				        .board.desktop .refuse-pile.len16 .cd.f,
				        .board.mobile.portrait .refuse-pile.len16 .cd.f {
							margin-left: -51.7px;
						}
				        .board.desktop .refuse-pile.len15 .cd.f,
				        .board.mobile.portrait .refuse-pile.len15 .cd.f {
							margin-left: -51.5px;
						}
				        .board.desktop .refuse-pile.len14 .cd.f,
				        .board.mobile.portrait .refuse-pile.len14 .cd.f {
							margin-left: -51px;
						}
				        .board.desktop .refuse-pile.len13 .cd.f,
				        .board.mobile.portrait .refuse-pile.len13 .cd.f {
							margin-left: -50.7px;
						}
				        .board.desktop .refuse-pile.len12 .cd.f,
				        .board.mobile.portrait .refuse-pile.len12 .cd.f {
							margin-left: -50px;
						}
				        .board.desktop .refuse-pile.len11 .cd.f,
				        .board.mobile.portrait .refuse-pile.len11 .cd.f {
							margin-left: -49.7px;
						}
				        .board.desktop .refuse-pile.len10 .cd.f,
				        .board.mobile.portrait .refuse-pile.len10 .cd.f {
							margin-left: -49px;
						}
				        .board.desktop .refuse-pile.len9 .cd.f,
				        .board.mobile.portrait .refuse-pile.len9 .cd.f {
							margin-left: -48px;
						}
				        .board.desktop .refuse-pile.len8 .cd.f,
				        .board.mobile.portrait .refuse-pile.len8 .cd.f {
							margin-left: -46px;
						}
				        .board.desktop .refuse-pile.len7 .cd.f,
				        .board.mobile.portrait .refuse-pile.len7 .cd.f {
							margin-left: -44px;
						}
				        .board.desktop .refuse-pile.len6 .cd.f,
				        .board.mobile.portrait .refuse-pile.len6 .cd.f {
							margin-left: -41px;
						}
				        .board.desktop .refuse-pile.len5 .cd.f,
				        .board.mobile.portrait .refuse-pile.len5 .cd.f {
							margin-left: -37px;
						}
				        .board.desktop .refuse-pile.len4 .cd.f,
				        .board.mobile.portrait .refuse-pile.len4 .cd.f {
							margin-left: -28px;
						}
				        .board.desktop .refuse-pile.len3 .cd.f,
				        .board.mobile.portrait .refuse-pile.len3 .cd.f {
							margin-left: 4px;
						}
				        .board.desktop .refuse-pile.len2 .cd.f,
				        .board.mobile.portrait .refuse-pile.len2 .cd.f {
							margin-left: 4px;
						}
				        .board.desktop .refuse-pile .cd.f:first-child,
				        .board.mobile.portrait .refuse-pile .cd.f:first-child {
							margin-left: 0;
						}
						@media (max-width: 505px) {
				            .closets-area {
								clear: both;
							}
						}
				    </style>
				</head>
				<body>
				</body>
				<script type="text/javascript">
								(function() {
							var cards = [];
							var suits = ['h', 's', 'c', 'd'];
							var displays = {
									n1: 'A',
									n11: 'J',
									n12: 'Q',
									n13: 'K'
				    };
							var icons = {
									h: '<div class="icon heart"><span class="a"></span><span class="b"></span><span class="c"></span></div>',
									s: '<div class="icon spade"><span class="c"></span><span class="a"></span><span class="b"></span><span class="d"></span></div>',
									c: '<div class="icon club"><span class="a"></span><span class="b"></span><span class="c"></span><span class="d"></span></div>',
									d: '<div class="icon diamond"><span></span></div>'
				    };
							var lastLocation = {};
							var activeCards = [];
							var currentGame = {};
							var priorGame = {};
							var hasStarted = false;
							function renderStartBoard() {
								if (getCookie('currentGame') !== null) {
									currentGame = JSON.parse(getCookie('currentGame'));
								}
								document.body.innerHTML = '<div id="start-container" class="start-container"><h1>Solitaire</h1><button id="startnew">New game</button><br>' + (getCookie('currentGame') !== null ? '<button id="resume-game" class="resumer">Resume previous</button>' : '') + '</div>';
							}
							function historyPush() {
								currentGame.steps = currentGame.steps + 1;
								priorGame = window.history.state;
								window.history.pushState(currentGame, null, currentGame.steps > 0 ? '#step' + currentGame.steps : null);
								document.cookie = 'color=' + (getCookie('color') ? getCookie('color') : 'dark');
								document.cookie = 'currentGame=' + JSON.stringify(currentGame);
								renderBoard();
								priorGame = currentGame;
							}
							function getCookie(cookie) {
									var cookies = document.cookie.split('; ');
							for (var co = 0; co < cookies.length; co++) {
								var ident = cookie + '=';
								if (cookies[co].indexOf(ident) === 0) {
									return cookies[co].replace(ident, '');
								}
							}
							return null;
				    }
							function getAllIcons(n, s) {
								if (n < 11) {
									var htmls = '<div class="numd len' + n + '">';
									for (var b = 0; b < n; b++) {
										htmls += icons[s];
									}
									htmls += '</div>';
									return htmls;
								}
								return '<h2 class="numd">' + displays['n' + n] + '</h2>';
							}
							function strEndsWith(needle, haystack) {
								var needLen = needle.length;
								var hayLen = haystack.length;
								if (needLen < hayLen) {
									var lopped = haystack.slice(-needLen);
									if (needle === lopped) {
										return true;
									}
								}
								return false;
							}
							function shuffle(a) {
							for (let i = a.length - 1; i > 0; i--) {
				            const j = Math.floor(Math.random() * (i + 1));
				            [a[i], a[j]] = [a[j], a[i]];
							}
							return a;
				    }
							function cardContents(n, s) {
								return '<p>' + (displays['n' + n] ? displays['n' + n] : n) + '</p>' + icons[s] + '<hr/>' + getAllIcons(n, s);
							}
							window.onhashchange = function(e) {
								if (window.history.state) {
									currentGame = window.history.state;
									renderBoard();
									if (strEndsWith('step1', e.newURL) && strEndsWith('step2', e.oldURL)) {
										alert('You have reached the beginning of this game!');
									} else if (strEndsWith('step1', e.oldURL)) {
										window.history.go(-28);
										renderStartBoard();
									}
								}
							};
							window.onresize = function() {
								if (hasStarted) {
									renderBoard();
								}
							};
							document.addEventListener('click', function(e) {
								if (e.target.id === 'startnew') {
									startNewGame();
									return false;
								} else if (e.target.id === 'new-game') {
									if (window.confirm("Close this game and start a new one?")) {
										startNewGame();
									}
									return false;
								} else if (e.target.id === 'resume-game') {
									historyPush();
									return false;
								} else if (e.target.id === 'back-button') {
									window.history.back();
									return false;
								} else if (e.target.id === 'color') {
									e.preventDefault();
									var thisColor = e.target.checked ? 'dark' : 'light';
									document.cookie = 'color=' + thisColor;
									renderBoard();
									return false;
								}
							});
							function renderCard(data, extraClass) {
								var newCard = document.createElement('div');
								newCard.data = data;
								newCard.className = 'cd ';
								newCard.ontouchstart = function(e) {
									e.preventDefault();
									startDrag(e);
									return false;
								};
								newCard.ontouchmove = function(e) {
									var lastPosX = e.changedTouches[0].clientX;
									var lastPosY = e.changedTouches[0].clientY;
									moveDrag(e, lastPosX, lastPosY);
								};
								newCard.ontouchend = function(e) {
									e.preventDefault();
									var lastPosX = e.changedTouches[0].pageX;
									var lastPosY = e.changedTouches[0].pageY;
									stopDrag(e, lastPosX, lastPosY);
									return false;
								};
								newCard.onmousedown = function(e) {
									startDrag(e);
								};
								newCard.onmousemove = function(e) {
									var lastPosX = e.clientX;
									var lastPosY = e.clientY;
									moveDrag(e, lastPosX, lastPosY);
								};
								newCard.onmouseup = function(e) {
									var lastPosX = e.pageX
									var lastPosY = e.pageY;
									stopDrag(e, lastPosX, lastPosY);
								};
								if (data.folded) {
									newCard.className = newCard.className + 'f';
								} else {
									newCard.className += data.s + ' n' + data.n + (data.accepting ? ' a' : '') + (extraClass ? extraClass : '');
									newCard.innerHTML = cardContents(data.n, data.s);
								}
								return newCard;
							}
							function startDrag(e) {
									activeCards = [];
							if (e.target.className.indexOf('cd') > -1 && !e.target.data.folded) {
								lastLocation = e.target.parentNode;
								activeCards.push(e.target);
								var grabberCard = activeCards[0].nextElementSibling;
								while (lastLocation.id.indexOf('stack') > -1 && grabberCard !== null) {
									activeCards.push(grabberCard);
									grabberCard = grabberCard.nextElementSibling;
								}
							} else if (e.target.className.indexOf('cd f') > -1 && e.target.parentNode.className.indexOf('refuse') > -1) {
								if (e.target.nextElementSibling) {
									var thisLast = currentGame.refuse[currentGame.refuse.length - 1];
									thisLast.folded = true;
									currentGame.refuse.pop();
									currentGame.refuse.unshift(thisLast);
								}
								currentGame.refuse[currentGame.refuse.length - 1].folded = false;
								activeCards = [];
								historyPush();
							}
				    }
							function moveDrag(e, lastPosX, lastPosY) {
								if (activeCards.length > 0) {
									var left = lastPosX - 30;
									var top = lastPosY + 15;
									var zIndex = 999999;
									for (var ac = 0; ac < activeCards.length; ac++) {
										activeCards[ac].style = 'position: fixed; z-index: ' + zIndex + '; left: ' + left + 'px; top: ' + top + 'px';
										top = top + 20;
										zIndex = zIndex + 100;
									}
								}
							}
							function stopDrag(e, lastPosX, lastPosY) {
								var accepterNode = null;
								var giverNode = lastLocation.id;
								var successfulMove = false;
								if (activeCards.length > 0) {
									var movingSuit = activeCards[0].data.s;
									var movingNum = activeCards[0].data.n;
									var movingColor = activeCards[0].data.colr;
									var accepters = document.getElementsByClassName('a');
									for (var ac = 0; ac < accepters.length; ac++) {
										var accepter = accepters[ac];
										if (accepter.data && accepter.data.id == activeCards[0].data.id) {
											continue;
										}
										var aX0 = accepter.offsetLeft;
										var aX1 = aX0 + accepter.offsetWidth;
										var aY0 = accepter.offsetTop;
										var aY1 = aY0 + accepter.offsetHeight;
										var isStack = accepter.className.indexOf('stack') > -1 && accepter.children.length === 0;
										var isCloset = accepter.className.indexOf('closet') > -1 && accepter.children.length === 1;
										var isStackCard = accepter.parentNode.className.indexOf('stack') > -1;
										var isClosetCard = accepter.parentNode.className.indexOf('closet') > -1;
										if (lastPosX >= aX0 && lastPosX <= aX1 && lastPosY >= aY0 && lastPosY <= aY1) {
											if (isStack) {
												if (movingNum === 13) {
													accepterNode = currentGame.stacks[accepter.id];
													successfulMove = true;
													break;
												}
											} else if (isCloset) {
												var accepterSuit = accepter.getAttribute('data-suit');
												if (accepterSuit === movingSuit && movingNum === 1 && activeCards.length === 1) {
													accepterNode = currentGame.closets[accepter.id];
													successfulMove = true;
													break;
												}
											} else if (isClosetCard) {
												var accepterSuit = accepter.data.s;
												var accepterNum = accepter.data.n;
												if (accepterSuit === movingSuit && accepterNum + 1 === movingNum && activeCards.length === 1) {
													accepterNode = currentGame.closets[accepter.parentNode.id];
													successfulMove = true;
													break;
												}
											} else if (isStackCard) {
												var accepterNum = accepter.data.n;
												var accepterColor = accepter.data.colr;
												if (accepterColor !== movingColor && accepterNum - 1 === movingNum) {
													var accepterNode = currentGame.stacks[accepter.parentNode.id];
													var giverNode = lastLocation.id;
													successfulMove = true;
													break;
												}
											}
										}
									}
									if (successfulMove) {
										var oldStack = currentGame.stacks[giverNode];
										if (giverNode === 'refuse') {
											oldStack = currentGame['refuse'];
										} else if (giverNode.indexOf('stack') === -1) {
											oldStack = currentGame.closets[giverNode];
										}
										while (activeCards.length > 0) {
											if (activeCards.length === 1) {
												activeCards[0].data.accepting = true;
											}
											accepterNode.push(activeCards[0].data);
											oldStack.pop();
											activeCards.shift();
										}
										if (oldStack.length) {
											if (giverNode !== 'refuse') {
												oldStack[oldStack.length - 1].accepting = true;
											}
											oldStack[oldStack.length - 1].folded = false;
										}
										historyPush();
										checkIfFinished();
									} else {
										activeCards = [];
										renderBoard();
									}
								}
							}
							function checkIfFinished() {
								var isFinished = true;
								for (var re = 0; re < currentGame.refuse.length; re++) {
									if (currentGame.refuse[re].folded) {
										isFinished = false;
									}
								}
								for (var stac in currentGame.stacks) {
									for (var s = 0; s < currentGame.stacks[stac].length; s++) {
										if (currentGame.stacks[stac][s].folded) {
											isFinished = false;
										}
									}
								}
								if (isFinished) {
									var closs = currentGame.closets;
									var cardsLeft = 52 - (closs['c'].length + closs['d'].length + closs['h'].length + closs['s'].length);
									hasStarted = false;
									clearBoard(cardsLeft);
								}
							}
							function startNewGame() {
								cards = [];
								var game = {
										steps: -28,
										stacks: {
									stack1: [],
									stack2: [],
									stack3: [],
									stack4: [],
									stack5: [],
									stack6: [],
									stack7: [],
								},
								refuse: [],
								closets: {
									c: [],
									d: [],
									h: [],
									s: []
								}
				        };
								for (var s = 0; s < suits.length; s++) {
									for (var c = 1; c < 14; c++) {
										cards.push({
												suit: suits[s],
												num: c
				                });
									}
								}
								cards = shuffle(cards);
								for (var i = 0; i < cards.length; i++) {
									var cardHTML = document.createElement("div");
									cardHTML.className = "cd f";
									var data = {
											's': cards[i].suit,
											'n': cards[i].num,
											'id': cards[i].suit + cards[i].num,
											'colr': cards[i].suit === 'd' || cards[i].suit === 'h' ? 'r' : 'b',
											'folded': true,
											'accepting': false
				            };
									cardHTML.data = data;
									game.refuse.push(data);
								}
								var maxStack = 0;
								var nextStack = 2;
								var delay = 1;
								currentGame = game;
								historyPush();
								var interv = setInterval(fillBoard, 100);
								function fillBoard() {
									if (delay === 29) {
										clearInterval(interv)
									} else {
										delay++;
										var sortoObject = game.refuse[game.refuse.length - 1];
										game.refuse.pop();
										maxStack++;
										if (maxStack === 8 || maxStack === 1) {
											sortoObject.folded = false;
											sortoObject.accepting = true;
										}
										if (maxStack === 8) {
											maxStack = nextStack;
											nextStack++;
										}
										if (nextStack < 9) {
											game.stacks['stack' + maxStack].push(sortoObject)
										}
										currentGame = game;
										historyPush();
									}
								}
								hasStarted = true;
							}
							function renderBoard() {
								document.body.innerHTML = '';
								var outerBoard = document.createElement('div');
								outerBoard.className = 'board clear ' + (getCookie('color') ? getCookie('color') : 'dark');
								outerBoard.id = "gameboard";
								var board = document.createElement('div');
								board.className = 'inner clear';
								var bottomButtons = document.createElement('div');
								bottomButtons.className = 'nav-buttons';
								bottomButtons.innerHTML = '<div class="in"><button id="new-game" class="new">&#xff0b;</button><div class="toggle"><input type="checkbox" id="color" ' + (getCookie('color') === 'dark' ? 'checked' : '') + '><label for="color"></label></div><button id="back-button" class="back">&larr;</button></div>';
								board.appendChild(bottomButtons);
								var closets = document.createElement('div');
								closets.className = 'closets-area';
								for (var gc in currentGame.closets) {
									var closet = document.createElement('div');
									var cardsInCloset = currentGame.closets[gc];
									var priorCardsInCloset = priorGame && priorGame.closets ? priorGame.closets[gc] : [];
									var shouldAnimate = cardsInCloset.length > priorCardsInCloset.length ? ' glow' : '';
									closet.id = gc;
									closet.className = 'closet closet' + gc + (cardsInCloset.length ? '' : ' a');
									closet.innerHTML = icons[gc];
									closet.setAttribute('data-suit', gc);
									for (var c = 0; c < cardsInCloset.length; c++) {
										closet.appendChild(renderCard(cardsInCloset[c], shouldAnimate));
									}
									closets.appendChild(closet);
								}
								var refuse = document.createElement('div');
								var priorRefCard = priorGame && priorGame.refuse ? priorGame.refuse[priorGame.refuse.length - 1] : null;
								var currentRefCard = currentGame.refuse[currentGame.refuse.length - 1];
								var shouldAnimate = currentRefCard && priorRefCard && (currentRefCard.id !== priorRefCard.id || currentRefCard.folded !== priorRefCard.folded || currentGame.refuse.length !== priorGame.refuse.length);
								refuse.className = 'refuse-pile len' + (currentGame.refuse.length < 25 ? currentGame.refuse.length : ' all') + (shouldAnimate ? ' accordion' : '');
								refuse.id = 'refuse';
								for (var r = 0; r < currentGame.refuse.length; r++) {
									refuse.appendChild(renderCard(currentGame.refuse[r], (shouldAnimate && r === currentGame.refuse.length - 1 ? ' slide' : null)));
								}
								board.appendChild(refuse);
								board.appendChild(closets);
								var stacks = document.createElement('div');
								stacks.className = 'stacks';
								board.appendChild(stacks);
								var sn = 0;
								for (var st in currentGame.stacks) {
									sn++;
									var stack = document.createElement('div');
									var childStackCards = currentGame.stacks[st];
									var priorStack = priorGame && priorGame.stacks ? priorGame.stacks[st] : null;
									var growAnimation = '';
									if (priorStack && priorStack.length > childStackCards.length) {
										growAnimation = ' contract';
									} else if (priorStack && priorStack.length < childStackCards.length) {
										growAnimation = ' expand';
									}
									stack.id = 'stack' + sn;
									stack.className = 'stack len' + childStackCards.length + (childStackCards.length ? '' : ' a') + growAnimation;
									for (var f = 0; f < childStackCards.length; f++) {
										var animate = null;
										if (priorStack && f == childStackCards.length - 1 && !childStackCards[f].folded && priorStack[f] && priorStack[f].folded) {
											animate = ' flipover'
										}
										stack.appendChild(renderCard(childStackCards[f], animate));
									}
									board.appendChild(stack);
								}
								outerBoard.appendChild(board);
								var screenW = window.outerWidth;
								var screenH = window.outerHeight;
								var isDesktop = window.navigator.appVersion.indexOf('Phone') === -1 && window.navigator.appVersion.indexOf('Mobile') === -1;
								var ratio = screenW > screenH ? '690' : '530';
								var ratioClass = screenW > screenH ? ' landscape' : ' portrait';
								var browserColor = getCookie('color') === 'dark' ? '000000' : 'ffffff';
								outerBoard.className = outerBoard.className + ratioClass + (isDesktop ? ' desktop' : ' mobile');
								document.getElementById('metaColor').setAttribute("content", "#" + browserColor);
								document.getElementById('metaWidth').setAttribute("content", "width=" + ratio + ",user-scalable=no");
								document.body.appendChild(outerBoard);
								document.title = hasStarted && currentGame.steps > 0 ? currentGame.steps + ' - Solitaire' : 'Solitaire';
							}
							function clearBoard(cards) {
									var delay = 0;
							var finishingInterval = setInterval(wipeBoard, 200);
							function wipeBoard() {
								if (delay >= (cards - 1)) {
									clearInterval(finishingInterval);
									document.getElementById("gameboard").innerHTML = '<div class="won"><h1>You won!</h1><button id="startnew">Start new game</button></div>';
								} else {
									for (var clos in currentGame.closets) {
										var lastCloseted = currentGame.closets[clos].length ? currentGame.closets[clos][currentGame.closets[clos].length - 1] : {'s': clos, 'n': 0};
										for (var stac in currentGame.stacks) {
											var lastStacked = currentGame.stacks[stac][currentGame.stacks[stac].length - 1];
											var lastRefused = currentGame.refuse[currentGame.refuse.length - 1];
											if (lastStacked && lastStacked.s == lastCloseted.s && lastStacked.n === lastCloseted.n + 1) {
												currentGame.stacks[stac].pop();
												currentGame.closets[clos].push(lastStacked);
												delay++;
												break;
											} else if (lastRefused && lastRefused.s == lastCloseted.s && lastRefused.n === lastCloseted.n + 1) {
												currentGame.refuse.pop();
												currentGame.closets[clos].push(lastRefused);
												delay++;
												break;
											}
										}
									}
									historyPush();
								};
							}
				    }
							renderStartBoard()
						})();
				</script>
				</html>
								""";
	}

	@RequestMapping("/dino")
	public String dino() throws IOException {


		// Method-2
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/dino.html")), StandardCharsets.UTF_8);
	}

}

