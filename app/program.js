var os = require("../modules/OSinfo") // zaimportowanie modułu "os"

process.stdin.setEncoding("utf-8"); // ustawienie odpowiedniego enkodowania, odczytanie wartości jako string kodowany z utf-8

process.stdin.on("readable", function() { // ustawienie nasłuchiwania na zdarzenia odczytu za pomocą .on
  var input = process.stdin.read(); // metoda .read() ma odczytać, co wpisał użytkownik
  if (input !== null) { // instrukcja warunkowa, która sprawdzająca, czy na wejściu podano jakąś wartość
    
    var instruction = input.toString().trim();
      switch (instruction) {
        case "/exit":
          process.stdout.write("Quitting app!\n");
          process.exit();
          break;

        case "/version":
          process.stdout.write("Your version of node.js is: " + process.versions.node + "\n");
          process.exit();
          break;

        case "/language":
          process.stdout.write("The language of your operating system is: " + process.env.lang + "\n");
          process.exit();
          break;

        case "/getOSinfo":
          os.print();
        break;        

        default:
          process.stderr.write("Wrong instruction!\n");
      }
    process.stdin.write(input);
  }
});
