-- packages: https://package.elm-lang.org/
-- official docs: https://guide.elm-lang.org/

{-- 
elm install elm/json
elm install 
--}

module Html_3 exposing (..)
import Browser
import Html exposing (Html, button, div, text,p,br)
-- import Style exposing (colStyles, rowStyles, rowStyles1, divStyles)
import Html.Events exposing (onClick)

main = Browser.sandbox { init = 1, update = update, view = view }

type Msg = Increment | Decrement | Multiply | Divide

update msg model =
  case msg of
    Increment ->
      model + 1

    Decrement ->
      model - 1

    Multiply ->
      model * 1

    Divide ->
      model // 1  -- integral division

view model =
  div []
    [ button [ onClick Multiply ] [ text "*" ]
    , br [] []
    , button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (String.fromInt model) ]
    , button [ onClick Increment ] [ text "+" ]
    , br [] []
    , button [ onClick Divide ] [ text "/" ]
    
    ]


-- -- functions
-- greet : String -> String
-- greet name =
--   Debug.log "foo is" "Hello " ++ name ++ "!"
--       --greet "xyz"

-- names = [1,2,3]
-- List.isEmpty names



