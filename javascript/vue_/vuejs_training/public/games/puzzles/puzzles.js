  document.write(`
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
<\/script>
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
    <\/script>
    </div>
</body>
</html>
`)