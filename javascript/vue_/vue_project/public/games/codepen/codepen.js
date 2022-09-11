document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Code Editor</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    body {
        text-align: center;
    }
    
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
        
        document.body.onkeyup = function(){
            code.open();
            code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "<\\/script>");
            code.close();
        };
        };
    
    compile();
    <\/script>
</body>
</html>
`);
