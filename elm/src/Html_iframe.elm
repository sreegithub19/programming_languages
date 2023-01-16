{-
   html and css working, but js is not (<script> tag not working)
   Installations:
       elm install elm/json
       elm install hecrj/html-parser

   Elm 19:
   1. Does not support "innerHTML" anymore
   2. Does not support "<script>" tag anymore
-}


module Html_iframe exposing (..)

import Html exposing (..)
import Html.Attributes exposing (height, property, srcdoc, width)
import Html.Parser
import Html.Parser.Util
import Json.Encode exposing (string)


main =
    div []
        [ div [] [ text "Outside the iframe" ]
        , iframe
            [ width 1000, height 1000, srcdoc """
<div>
<h1 onclick='
alert(2);
document.write(`
<h1>Hi</h1>
<h1 id="turn">Hi2</h1>


<script>
alert(2);
alert(33123123213)
document.getElementById("turn").onclick = function(){
  document.write(\\`
  <h1 style="color:red" onclick="
  alert(222222222);
  alert(-222222222);
  ">finish</h1>
  \\`)
}
<\\/script>


`);
'>Inside the iframe</h1>
</div>
""" ]
            []
        ]


textHtml : String -> List (Html.Html msg)
textHtml t =
    case Html.Parser.run t of
        Ok nodes ->
            Html.Parser.Util.toVirtualDom nodes

        Err _ ->
            []
