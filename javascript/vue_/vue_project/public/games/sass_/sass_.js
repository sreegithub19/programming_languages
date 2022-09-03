document.write(`
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.9.12/sass.sync.min.js"><\/script>
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
        
        <script>
            Sass.compile(document.querySelector("style[type=scss]").innerHTML,function(res){
    var s=document.createElement("style");
    s.innerHTML=res.text;
    res.formatted&&console.error(res.formatted); //if error console.error it.
    res.text&&document.head.appendChild(s);// append style element only if no error.
});
        <\/script>
    </head>
    <body>
        <h1 id="hello">Hello, this is styled using SCSS.</h1>
    </body>
</html>
`);
