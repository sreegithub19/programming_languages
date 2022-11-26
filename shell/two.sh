packageCC(){
  PACKAGE=$(curl --location --request POST "$IPADDR:8080/fabric/lifecycle/package" \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "cc_source_name": "asset-transfer-basic",
      "label": "basic_1.0",
      "language": "go",
      "package_name": "basic.tar.gz"
  }')
  echo $PACKAGE
}