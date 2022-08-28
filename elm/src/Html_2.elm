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
import Html exposing (Html, div,span)
import Html.Attributes exposing (property)
import Json.Encode exposing (string)
import Html.Parser
import Html.Parser.Util

main : Html msg
main =
    span [] (textHtml """
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style> 
    input[type=text] {
    width: 130px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    }

    input[type=text]:focus {
    width: 100%;
    }

    #para {
        color:red
    }
    </style>
    </head>
    <body>

    <p id="para" onclick = "alert('hi')">Animated search form:</p>

    <form>
    <input type="text" name="search" placeholder="Search..">
    </form>
    </body>
    """)

textHtml : String -> List (Html.Html msg)
textHtml t =
    case Html.Parser.run t of
        Ok nodes ->
            Html.Parser.Util.toVirtualDom nodes

        Err _ ->
            []