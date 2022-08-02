fork { exec '''

ruby -e "
puts(\"Hi\")
"

node -e `console.log("Hi")`

''' }