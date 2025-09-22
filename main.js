let url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/res"
let myURL = new URL(url)
const data = "202202"

myURL.searchParams.append("date", data)
myURL.searchParams.append("json", "")

console.log(myURL.toString())