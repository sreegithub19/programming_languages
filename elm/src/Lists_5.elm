module Lists_5 exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import String exposing (..)
import List exposing (..)


revelation =
    [ 1, 2, 3 ]

-- String length
main =
    div[ class "jumbotron" ]
        [p [] [ 
            Html.text(String.fromInt(List.length revelation)++"\n"),
            Html.text(String.fromInt(List.length revelation))
             ]
        ]