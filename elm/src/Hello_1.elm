-- main = beginnerProgram { model = initModel, view=view, update=update}


module Hello_1 exposing (..)

-- I need the module name to be declared at the top of this file, like this.

import Html exposing (button, div, text)
import Html.Events exposing (onClick)


main =
    text """  
  <h1>Hello!<h1>
  """



-- multiline strings
--text (String.fromInt(1) ++ "ewfffe")
