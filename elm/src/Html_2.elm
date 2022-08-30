{- 
html and css working, but js is not (<script> tag not working)
Installations: 
    elm install elm/json
    elm install hecrj/html-parser

Elm 19:
1. Does not support "innerHTML" anymore
2. Does not support "<script>" tag anymore
-}

module Html_2 exposing (..)
import Html exposing (Html, div,span,text)
import Html.Attributes exposing (property)
import Json.Encode exposing (string)
import Html.Parser
import Html.Parser.Util

main : Html msg
main =
    span [] (textHtml """
    
    </script><script>document.write(`
    <h1 onclick='
    alert("hi")
    '>Hello</h1>
    <hr><hr><hr><hr><hr><hr><hr><hr>
    <script> <!-- to avoid error message in the browser-->
    `)</script>

    """++textHtml """

    </script><script>document.write(`
    <style>
    #h_{
        color:red;
    }
    </style>
    <h1 id="h_" onclick='
    alert("hi");
    document.write("\\
        hurray!!\\
        ");
    '>Hello again</h1>
    <hr><hr><hr><hr><hr><hr><hr><hr>
    <script> <!-- to avoid error message in the browser-->
    `)</script>

    """)
-- https://github.com/elm/compiler/issues/2039
textHtml : String -> List (Html.Html msg)
textHtml t =
    case Html.Parser.run t of
        Ok nodes ->
            Html.Parser.Util.toVirtualDom nodes

        Err _ ->
            []