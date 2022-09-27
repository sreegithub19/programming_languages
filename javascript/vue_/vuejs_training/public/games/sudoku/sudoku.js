document.write(`<!DOCTYPE html>
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
        html,
        body {
            width: 100%;
            height: 100%;
            border: 0px;
            overflow: auto;
        }

        body {
            margin: 0px;
            padding: 0px;
            background: #E10A04 url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/backgroundx.png') repeat-x;
            font-family: Arial;
            color: #FFAEAE;
            font-size: 12px;
        }

        body,
        table,
        tr,
        td,
        div {
            margin: 0px;
            padding: 0px;
            border: 0px;
        }

        b {
            color: #FFFFFF;
            font-weight: bold;
        }

        #Wrapper {
            background: url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/background.png') no-repeat top center;
            min-height: 720px;
        }



        #Main,
        #Content,
        #Footer {
            width: 980px;
            margin: 0 auto;
        }

        #PageTitle {
            font-family: Segoe UI, Arial;
            font-weight: normal;
            color: #FFFFFF;
            font-size: 33px;
        }

        a {
            color: #FFAEAE;
            text-decoration: none;
        }

        a:hover {
            color: #FFFFFF;
            text-decoration: none;
        }

        #Content {
            float: left;
        }

        #Column1 {
            width: 300px;
            float: left;
        }

        #sudokuBoard {
            width: 426px;
            margin-left: 40px;
            float: left;
            box-shadow: 0px 0px 30px #680301;
            -moz-box-shadow: 0px 0px 30px #680301;
            -webkit-box-shadow: 0 0 30px #680301;
        }

        #Column2 {
            width: 174px;
            margin-left: 40px;
            float: left;
        }

        #Footer {
            margin-top: 600px;
            color: #910502;
        }

        #FooterDetails {
            float: left;
            font-size: 11px;
        }

        #Copyright {
            float: right;
            font-size: 10px;
        }

        td.boardCellGroupA,
        td.boardCellGroupB {
            background-color: #940302;
        }

        td.boardCellGroupA td.boardCell {
            width: 44px;
            height: 44px;
            border: 1px solid #EC0904;
            background-color: #DA0603;
        }

        td.boardCellGroupB td.boardCell {
            width: 44px;
            height: 44px;
            border: 1px solid #D40703;
            background-color: #C40502;
        }

        .staticValue {
            font-family: Segoe UI, Arial;
            text-align: center;
            vertical-align: middle;
            font-size: 30px;
            color: #6C0000;
        }

        .staticValue,
        .editValue {
            width: 42px;
            height: 42px;
            padding: 0px;
            margin: 0px;
            border: 1px solid #DA0603;
        }

        .editValue:hover {
            background: #940302;
        }

        label {
            position: relative;
            top: 3px;
            line-height: 24px;
            font-size: 15px;
            color: #FFFFFF;
        }

        select {
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

        #timeFinished {
            font-family: Segoe UI, Arial;
            font-size: 46px;
            font-weight: bold;
            line-height: 40px;
        }

        .finishedLabel,
        #timeFinished {
            color: #FBF2A8;
        }

        .editValue input {
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

        input[type="submit"] {
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

        input[type="submit"].gameControls {
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

        .gameControlSet {
            height: 142px;
            position: relative;
            top: -8px;
        }

        #buttonSolve {
            margin-top: 119px;
            color: #FFAEAE;
        }

        #youWon {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            right: 0px;
            background: url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/shade.png') repeat;
        }

        #youWon div {
            width: 400px;
            background: #940302;
            font-size: 40px;
            color: #FFFFFF;
            text-align: center;
            padding: 40px;
            margin: 100px auto 0px auto;
        }

        small {
            font-size: 14px;
            color: #FFFD7B;
        }

        .noErrors {
            font-size: 18px;
            font-weight: bold;
            color: #FFFFFF;
        }

        .errorsFound {
            font-size: 18px;
            font-weight: bold;
            color: #ED823F;
        }

        .error {
            border: 1px solid #ED823F;
        }
    </style>
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
</head>

<body>
    <div id="Wrapper">
        <div id="Main">
            <h1 id="PageTitle">HTML5 Sudoku</h1>
            <div id="Content">
                <div id="Column1">
                    <span role="tab" aria-selected="true" aria-controls="demoIntro" tabindex="100">In this demo we take
                        the well-known game of Sudoku, and demonstrate how developers can use HTML5 and JavaScript to
                        create an efficient algorithm to solve these puzzles. The algorithms draw heavily on the Chakra
                        engine’s support for ECMAScript 5 standard array operations to rapidly solve many Sudoku games.
                        You can also manually solve Sudoku puzzles.</span>
                    <br />
                    <br />
                    <br />
                    <label># of Games:</label>&nbsp;&nbsp;
                    <select id="difficulty">
                        <option value="1">1000</option>
                        <option value="2" selected>5000</option>
                        <option value="3">10000</option>
                    </select>
                    <input id="amazeButton" type="submit" value="SOLVE GAMES" />
                    <br />
                    <br />
                    <div id="calculating" style="display: none;">
                        <img src="https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/iconTime.png" alt="Calculating Clock" /><span class="finishedLabel">Solving
                            puzzles...</span>
                    </div>
                    <div role="tab" aria-selected="true" aria-controls="perfResults" tabindex="200"
                        id="finishedCalculating" style="display: none;">
                        <img src="https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/iconTime.png" alt="Calculating Clock" /><span class="finishedLabel">Finished
                            In:</span>
                        <br />
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
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="02" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="10" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="11" class="editValue">
                                                <input />
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
                                                <input />
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
                                                <input />
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
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="14" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="15" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="23" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="24" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="25" class="editValue">
                                                <input />
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
                                                <input />
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
                                                <input />
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
                                                <input />
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
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="31" class="staticValue">
                                                <span>6</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="32" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="40" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="41" class="staticValue">
                                                <span>9</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="42" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="50" class="editValue">
                                                <input />
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
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="34" class="staticValue">
                                                <span>8</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="35" class="editValue">
                                                <input />
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
                                                <input />
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
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="54" class="staticValue">
                                                <span>2</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="55" class="editValue">
                                                <input />
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
                                                <input />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="46" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="47" class="staticValue">
                                                <span>8</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="48" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="56" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="57" class="staticValue">
                                                <span>9</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="58" class="editValue">
                                                <input />
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
                                                <input />
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
                                                <input />
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
                                                <input />
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
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="64" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="65" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="73" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="74" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="75" class="editValue">
                                                <input />
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
                                                <input />
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
                                                <input />
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
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="78" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="86" class="editValue">
                                                <input />
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="87" class="editValue">
                                                <input />
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
                        <input id="newGameButton" type="submit" value="NEW GAME" class="gameControls" />
                        <br />
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
                        <input id="checkButton" type="submit" value="CHECK &#x2713;" class="gameControls" />
                        <br />
                        <span id="errorsFound" class="errorsFound" style="display: none;" role="tab"
                            aria-selected="true" aria-controls="ErrorsFound" tabindex="300">MISTAKE FOUND</span>
                        <span id="noErrors" class="noErrors" style="display: none;" role="tab" aria-selected="true"
                            aria-controls="NoErrorsFound" tabindex="400">LOOKIN GOOD</span>
                    </div>
                    <div class="gameControlSet">
                        <input id="solveButton" type="submit" value="SOLVE" class="gameControls" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="youWon" style="display: none;">
        <div>
            <span role="alert" aria-selected="true" aria-controls="youWin" tabindex="500">YOU WIN!</span>
            <br />
            <small role="tab" aria-selected="true" aria-controls="youWinText" tabindex="600">
                Great job. Can you do it again?
            </small>
            <br />
            <br />
            <input id="winNewGameButton" type="submit" value="NEW GAME" class="gameControls" />
            <input id="winCloseButton" type="submit" value="CLOSE" class="gameControls" />
        </div>
    </div>
    <script>
        function solveSudoku(inputBoard, stats) {

            var stats = stats || {};
            stats['easy'] = true;
            var board = JSON.parse(JSON.stringify(inputBoard));
            var possibilities = [[], [], [], [], [], [], [], [], []];

            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    possibilities[i][j] = [false, true, true, true, true, true, true, true, true, true];
                }
            }

            var solved = false;
            var impossible = false;
            var mutated = false;
            var needCheckFreedoms = false;

            //TODO: check input is a valid puzzle

            var loopCount = 0;

            outerLoop: while (!solved && !impossible) {
                solved = true;
                mutated = false;
                loopCount++;

                var leastFree = [];
                var leastRemaining = 9;

                for (var i = 0; i < 9; i++) {
                    for (var j = 0; j < 9; j++) {

                        if (board[i][j] === 0) {

                            solved = false;
                            var currentPos = possibilities[i][j];

                            var zoneRow;
                            var zoneCol;

                            if (loopCount === 1) {
                                zoneRow = getZone(i) * 3;
                                zoneCol = getZone(j) * 3;
                                currentPos[10] = zoneRow;
                                currentPos[11] = zoneCol;
                            } else {
                                zoneRow = currentPos[10];
                                zoneCol = currentPos[11];
                            }

                            var wasMutated = reducePossibilities(board, i, j, currentPos, zoneRow, zoneCol);

                            if (wasMutated) {
                                mutated = true;
                            }


                            // check if the contraints above left us with only one valid option
                            var remaining = 0;
                            var lastDigit = 0;

                            for (var k = 1; k <= 9; k++) {
                                if (currentPos[k]) {
                                    remaining++;
                                    lastDigit = k;
                                }
                            }

                            if (remaining === 0) {
                                //console.log("no remaining " + i + " " + j);
                                impossible = true;
                                break outerLoop;
                            }
                            else if (remaining === 1) {
                                board[i][j] = lastDigit;
                                mutated = true;
                                continue;
                            }

                            if (needCheckFreedoms) {
                                var solution = checkFreedoms(board, i, j, possibilities, zoneRow, zoneCol);

                                if (solution !== 0) {

                                    board[i][j] = solution;
                                    mutated = true;
                                    continue;
                                }

                                if (remaining === leastRemaining) {
                                    leastFree.push([i, j]);
                                }
                                else if (remaining < leastRemaining) {
                                    leastRemaining = remaining;
                                    leastFree = [[i, j]];
                                }
                            }

                        }
                    }
                }

                if (mutated === false && solved === false) {

                    // time to break out freedom checking
                    if (needCheckFreedoms === false) {
                        needCheckFreedoms = true;
                        stats['medium'] = true;
                        continue;
                    }

                    // we're stuck, time to start guessing
                    return solveByGuessing(board, possibilities, leastFree, stats);

                }
            }

            if (impossible) {
                //window.console && console.log("board is impossible");
                return null;
            }
            else {
                return board;
            }
        }

        function getZone(i) {
            if (i < 3) {
                return 0;
            }
            else if (i < 6) {
                return 1;
            }
            else {
                return 2;
            }
        }


        function reducePossibilities(board, row, column, currentPos, zoneRow, zoneCol) {

            var mutated = false;

            //eliminate items already taken in the column and row
            for (var k = 0; k < 9; k++) {
                if (currentPos[board[row][k]] || currentPos[board[k][column]]) {
                    mutated = true;
                }
                currentPos[board[row][k]] = false;
                currentPos[board[k][column]] = false;
            }

            //eliminate items already taken in the region
            for (var x = zoneRow; x <= (zoneRow + 2); x++) {
                for (var y = zoneCol; y <= (zoneCol + 2); y++) {
                    var zoneDigit = board[x][y];

                    if (currentPos[zoneDigit]) {
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

            for (var k = 0; k < 9; k++) {
                for (var l = 1; l <= 9; l++) {
                    if (board[i][k] === 0 && possibilities[i][k][l] && k !== j) {
                        uniquePosRow[l] = false;
                    }
                    if (board[k][j] === 0 && possibilities[k][j][l] && k !== i) {
                        uniquePosCol[l] = false;
                    }
                }
            }

            var remainingRow = 0;
            var remainingCol = 0;
            var lastDigitRow = 0;
            var lastDigitCol = 0;

            for (var k = 1; k <= 9; k++) {
                if (uniquePosRow[k]) {
                    remainingRow++;
                    lastDigitRow = k;
                }
                if (uniquePosCol[k]) {
                    remainingCol++;
                    lastDigitCol = k;
                }
            }

            if (remainingRow === 1) {
                answer = lastDigitRow;
                return answer;
            }

            if (remainingCol === 1) {
                answer = lastDigitCol;
                return answer;
            }

            for (var x = zoneRow; x <= (zoneRow + 2); x++) {
                for (var y = zoneCol; y <= (zoneCol + 2); y++) {
                    for (var l = 1; l <= 9; l++) {
                        if (board[x][y] === 0 && possibilities[x][y][l] && (x !== i || y !== j)) {
                            uniquePosCube[l] = false;
                        }
                    }
                }
            }

            var remainingCube = 0;
            var lastDigitCube = 0;

            for (var k = 1; k <= 9; k++) {
                if (uniquePosCube[k]) {
                    remainingCube++;
                    lastDigitCube = k;
                }
            }

            if (remainingCube == 1) {
                answer = lastDigitCube;
            }

            return answer;

        }

        function solveByGuessing(board, possibilities, leastFree, stats) {
            if (leastFree.length < 1) {
                return null;
            }

            if ('hard' in stats) {
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

            for (var i = 1; i <= 9; i++) {
                if (currentPos[i]) {
                    guesses.push(i);
                }
            }

            shuffleArray(guesses);

            for (var i = 0; i < guesses.length; i++) {
                board[randSpot[0]][randSpot[1]] = guesses[i];
                var result = solveSudoku(board, stats);
                if (result != null) {
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

            if (i !== 0) {
                while (--i) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }

        // for benchmarking, use a random generator from a seed
        (function () {

            // some dummy value to start with
            var last = 31337;
            var randomBackup = Math.random;

            // Linear Congruential Generator
            var fakeRandom = function () {
                var a = 214013;
                var c = 2531011;
                //2^32
                var m = 4294967296;

                var next = (a * last + c) % m;

                last = next;
                return next / m;
            }

            Math.enableFakeRandom = function () {
                Math.random = fakeRandom;
            }

            Math.disableFakeRandom = function () {
                Math.random = randomBackup;
            }

            Math.fakeRandomSeed = function (seed) {
                last = seed;
            }

        })();


        function generatePuzzle(difficulty) {

            if (difficulty !== 1 && difficulty !== 2 &&
                difficulty !== 3 && difficulty !== 4 &&
                difficulty !== 5) {

                difficulty = 1;
            }

            var solvedPuzzle = solveSudoku(emptyPuzzle);

            var indexes = new Array(81);

            for (var i = 0; i < 81; i++) {
                indexes[i] = i;
            }

            shuffleArray(indexes);

            var knownCount = 81;

            for (var i = 0; i < 81; i++) {

                if (knownCount <= 25) {
                    break;
                }

                //easy check
                if (difficulty == 1 && knownCount <= 35) {
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
                if (difficulty <= 2 && state.medium) {
                    undo = true;
                } else if (difficulty <= 3 && state.hard) {
                    undo = true;
                } else if (difficulty <= 4 && state.vhard) {
                    undo = true;
                }

                if (undo) {
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

            if (board === null) {
                window.console && console.log("Not a board");
                resp['invalidBoard'] = "Board was null";
                return resp;
            }

            var rows = [];
            var cols = [];
            var cubes = [[[], [], []], [[], [], []], [[], [], []]];
            for (var i = 0; i < 9; i++) {
                rows.push([]);
                cols.push([]);
            }

            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    var digit = board[i][j];

                    if (digit === 0) {
                        if (onlyFullySolved) {
                            resp['notFullySolved'] = "Board still has unknowns";
                            return resp;
                        } else {
                            continue;
                        }
                    }

                    if (digit in rows[i]) {
                        resp['badRow'] = i;
                        return resp;
                    }
                    else {
                        rows[i][digit] = true;
                    }

                    if (digit in cols[j]) {
                        resp['badCol'] = j;
                        return resp;
                    }
                    else {
                        cols[j][digit] = true;
                    }

                    var cube = cubes[getZone(i)][getZone(j)];

                    if (digit in cube) {
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
            var intervalId = window.setInterval(function () {
                intervalCount++;
                if (intervalCount > 500) {
                    window.console && console.log("finished");
                    window.clearInterval(intervalId);
                }
                var newPuzzle = solveSudoku(emptyPuzzle);
                var resp = verifySolution(newPuzzle);

                if (resp['valid'] === false) {
                    window.console && console.log("Boo! " + intervalCount);
                    printBoard(newPuzzle);
                }

            }, 1);

        }

        function cellInputHandler(event) {
            if (!this.value.match(/^[1-9]$/)) {
                this.value = "";
            }
        }

        function renderBoard(board) {
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    var id = "" + i + j;
                    var el = document.getElementById(id);
                    var val = board[i][j];
                    var child;
                    var elClass;

                    if (val === 0) {
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
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    var id = "" + i + j;
                    var el = document.getElementById(id);
                    var val = board[i][j];
                    var child = el.children[0];
                    if (child.tagName === 'INPUT') {
                        child.value = val;
                    }
                }
            }
        }

        function getCurrentBoard() {

            var board = new Array(9);

            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    if (j === 0) {
                        board[i] = new Array(9);
                    }
                    var id = "" + i + j;
                    var el = document.getElementById(id);
                    var child = el.children[0];
                    var value = "0";
                    if (child.tagName === 'INPUT') {
                        value = child.value;
                    }
                    else if (child.tagName == 'SPAN') {
                        value = child.textContent;
                    }
                    if (value.match(/^[1-9]$/)) {
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
            for (var i = 0; i < 9; i++) {
                var line = "";
                for (var j = 0; j < 9; j++) {
                    line += " " + board[i][j];
                }
                window.console && console.log(line);
            }
        }

        function solveTest(level, after) {

            var easyCount = 2000;
            var hardCount = 200;

            switch (level) {
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
            tests.push(function () {
                timeElapsed += solveTestHelper(easyPuzzle, easyCount);
            });
            tests.push(function () {
                timeElapsed += solveTestHelper(easyPuzzle2, easyCount);
            });
            tests.push(function () {
                timeElapsed += solveTestHelper(mediumPuzzle, hardCount);
            });
            tests.push(function () {
                timeElapsed += solveTestHelper(hardPuzzle, hardCount);
            });
            tests.push(function () {
                Math.disableFakeRandom();
                document.getElementById("timeFinished").textContent = timeElapsed.toFixed(3) + "s";
            });
            tests.push(after);

            var current = 0;

            var timeoutFunc = function () {
                if (current < tests.length) {
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
            for (var i = 0; i < iterations; i++) {
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

            var clearErrors = function () {

                errorsFoundSpan.style.display = 'none';
                noErrorsSpan.style.display = 'none';

                for (var i = 0; i < currentErrors.length; i++) {
                    currentErrors[i].setAttribute('class', currentErrors[i].getAttribute('class').replace(" error", ''))
                }
                currentErrors = [];
            }

            amazeButton.addEventListener('click', function () {
                if (!amazing) {
                    var level = parseInt(difficulty.options[difficulty.selectedIndex].value);
                    amazing = true;
                    clearErrors();
                    finishedCalculatingDiv.style.display = 'none';
                    calculatingDiv.style.display = 'block';

                    solveTest(level, function () {
                        finishedCalculatingDiv.style.display = 'block';
                        calculatingDiv.style.display = 'none';
                        amazing = false;
                        currentPuzzle = hardPuzzle;
                    });
                }
            }, false);

            var checkButton = document.getElementById('checkButton');

            checkButton.addEventListener('click', function () {

                clearErrors();

                var board = getCurrentBoard();
                var result = verifySolution(board);
                if (result['valid']) {

                    var validMessages = ["LOOKIN GOOD", "KEEP GOING", "AWESOME", "EXCELLENT",
                        "NICE", "SWEET", "LOOKS GOOD TO ME"];

                    if (verifySolution(board, true)['valid']) {
                        winBlock.style.display = 'block';
                    }
                    else {
                        var randIndex = getRandom(validMessages.length);
                        noErrorsSpan.textContent = validMessages[randIndex];
                        noErrorsSpan.style.display = 'block';
                    }
                }
                else {
                    if ('badRow' in result) {
                        var row = result['badRow'];
                        for (var i = 0; i < 9; i++) {
                            var id = "" + row + i;
                            var el = document.getElementById(id);
                            el.setAttribute("class", el.getAttribute('class') + " error");
                            currentErrors.push(el);
                        }
                    }
                    else if ('badCol' in result) {
                        var col = result['badCol'];
                        for (var i = 0; i < 9; i++) {
                            var id = "" + i + col;
                            var el = document.getElementById(id);
                            el.setAttribute("class", el.getAttribute('class') + " error");
                            currentErrors.push(el);
                        }
                    }
                    else if ('badCube' in result) {
                        var cubeRow = result['badCube'][0];
                        var cubeCol = result['badCube'][1];
                        for (var x = cubeRow + 2; x >= cubeRow; x--) {
                            for (var y = cubeCol + 2; y >= cubeCol; y--) {
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

            winCloseButton.addEventListener('click', function () {
                winBlock.style.display = 'none';
            }, false);

            var winNewGameButton = document.getElementById('winNewGameButton');

            winNewGameButton.addEventListener('click', function () {
                clearErrors();
                var value = parseInt(difficulty.options[difficulty.selectedIndex].value);
                currentPuzzle = generatePuzzle(value);
                renderBoard(currentPuzzle);
                winBlock.style.display = 'none';
            }, false);

            var newGameButton = document.getElementById('newGameButton');

            newGameButton.addEventListener('click', function () {
                clearErrors();
                var value = parseInt(difficulty.options[difficulty.selectedIndex].value);
                currentPuzzle = generatePuzzle(value);
                renderBoard(currentPuzzle);
            }, false);

            var solveButton = document.getElementById('solveButton');

            solveButton.addEventListener('click', function () {
                clearErrors();
                renderSolvedBoard(solveSudoku(currentPuzzle));
            }, false);

            addEventListener('mouseup', function (event) {
                if (event.which === 1) {
                    noErrorsSpan.style.display = 'none';
                }
            }, false);

        }

        addEventListener('DOMContentLoaded', initialize, false);
    </script>
</body >
</html >
`);