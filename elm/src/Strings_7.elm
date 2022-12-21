module Strings_7 exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import String exposing (..)
import List exposing (..)


revelation =
    """
    It became very clear to me sitting out there today
    that every decision I've made in my entire life has
    been wrong. My life is the complete "opposite" of
    everything I want it to be. Every instinct I have,
    in every aspect of life, be it something to wear,
    something to eat - it's all been wrong.
    """

-- String length
main =
    div[ class "jumbotron" ]
        [p [] [ 
            Html.text(String.fromInt(String.length revelation)++"\n"),
            Html.text(String.fromInt(String.length revelation))
             ]
        ]