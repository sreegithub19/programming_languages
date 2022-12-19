module Functions_4 exposing (..)
import Html

-- 1. function "greet"
greet : String -> String
greet name = "Hello " ++ name ++ "!"

-- main = Html.text (greet "Salvador")

----------------------------------------------------------------

-- 2. function "escapeEarth"
escapeEarth myVelocity mySpeed =
    if myVelocity > 11.186 then
        "Godspeed"

    else if mySpeed == 7.67 then
        "Stay in orbit"

    else
        "Come back"


-- main = Html.text (escapeEarth 11.2 7.2)

----------------------------------------------------------------

-- 3. nested functions
add a b =a + b

multiply c d = c * d

divide e f = e / f

{--
main =
    divide 30 (multiply 30 (add 10 30))
        |> multiply 10
        |> add 5
        |> String.fromFloat
        |> Html.text
--}
main = Html.text(
    --String.fromInt(2+5)
    String.fromInt(2 |> add 5)++"\n"++
    String.fromInt((+) 5 5))

----------------------------------------------------------------
