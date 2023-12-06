1. Videos:
	https://www.youtube.com/watch?v=kEitFAY7Gc8

2. Official page: https://elm-lang.org/

3. Online playground: https://elm-lang.org/try

4. Installation:
    1. brew install elm
    2. elm --version (to verify the installation)

5. 
    1. Functional language
    2. Statically typed + inference
    3. All data is immutable
    4. All functions are pure
    5. 'null' / 'undefined' / Exceptions do not exist

    6. Structure:
        i. We define "Model", "Msg" values
        ii. We write "Update","View" functions
        iii. Elm does the rest

    7. Ways to compile Elm:
        i. (<script> not working in embedded html as string) elm make Main.elm  -> then open index.html in browser
        ii. (Not working) elm make src/Hello_1.elm --output=elm.js -> src="elm.js" in index.html (https://riptutorial.com/elm#embedding-into-html)


===================================================

Execution:
1. (In the elm folder),
	elm init
2. elm make src/hello.elm   # after filling in some code in the Hello.elm file
3. 
	-- Single line comment
	{- Multi-line comment -}

4. Embedding Elm in HTML: https://riptutorial.com/elm#embedding-into-html


===================================================
1. Elm install and running (in Mac):

(i) brew install elm
(ii)(In the elm folder),
elm init
(iii) elm make src/Hello_1.elm   # after filling in some code in the Hello.elm file
(iv) elm-live src/Hello_1.elm --open --start-page=index.html -- --output=elm_app.js

#Hello.elm:
module Hello exposing (..)
import Html exposing (text)
main = text "Hello!"
-- Single line comment
{- Multi-line comment -}

(For sample codes: https://elm-lang.org/examples)
(v) Open the generated index.html file.

===================================================