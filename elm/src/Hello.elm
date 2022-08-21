module Hello exposing (..)  -- I need the module name to be declared at the top of this file, like this.
import Html exposing (text,button,div )
import Html.Events exposing (onClick)


main =
  text ("Hello!")

-- main = beginnerProgram { model = initModel, view=view, update=update}

