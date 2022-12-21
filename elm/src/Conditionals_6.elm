module Conditionals_6 exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)

-- 1. function "greet"
greet : String -> String
greet name = "Hello " ++ name ++ "!"

-- 2. function "greet1"
greet1 : String -> String   -- type annotation
greet1  name = 
    if 3>2 then 
        --String.fromInt(2+5)
        String.fromInt((+) 5 5)++"\n"++
        String.fromInt((+) 5 5)
    else
        --String.fromInt(2+5)
        String.fromInt((+) 15 5)++"\n"++
        String.fromInt((+) 15 5)

--main = Html.text(greet1 "Salvador")  


----------------------------------------------------------------
----------------------------------------------------------------
weekday1 dayInNumber =
    if dayInNumber == 0 then "Sunday"
    else if dayInNumber == 1 then "Monday"
    else if dayInNumber == 2 then "Tuesday"
    else if dayInNumber == 3 then "Wednesday"
    else if dayInNumber == 4 then "Thursday"
    else if dayInNumber == 5 then "Friday"
    else if dayInNumber == 6 then "Saturday"
    else "Unknown day"
    
-- or

weekday dayInNumber =
    case dayInNumber of
        0 ->"Sunday"
        1 ->"Monday"
        2 ->"Tuesday"
        3 ->"Wednesday"
        4 ->"Thursday"
        5 ->"Friday"
        6 ->"Saturday"
        _ ->"Unknown day"

weekday2 dayInNumber =
    case dayInNumber of
        "0" ->"Sunday"
        "1" ->"Monday"
        "2" ->"Tuesday"
        "3" ->"Wednesday"
        "4" ->"Thursday"
        "5" ->"Friday"
        "6" ->"Saturday"
        _ ->"Unknown day"
----------------------------------------------------------------

-- the display on the screen
view model =
    div [ class "jumbotron" ]
        [ h1 [] [ 
            text "Welcome to Dunder Mifflin!",
            text "Welcome to Dunder Mifflin!"
             ]
        , p []
            [ text "Dunder Mifflin Inc. (stock symbol "
            , strong [] [ text "DMI" ]
            , text <|
                """ 
                ) is a micro-cap regional paper and office 
                supply distributor with an emphasis on servicing 
                small-business clients.
                """
            ,text(greet1 "Salvador") ,
            text("\n") ,
            text <| weekday 5,
            text <| weekday2 "_"]
        ]


main =
    view "dummy model"