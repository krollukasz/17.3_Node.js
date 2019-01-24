var os = require("os"); // zaimportowanie modułu "os"

function conversionTime() { // funkcja konwertująca czas
  var uptime = os.uptime(); // zapisane w zmiennej wartości "uptime" pobranej z modułu "os"

  var hours = parseInt(uptime / 3600); // zapisanie w zmiennej ilości obliczonych godzin; wartość "uptime" / 3600 (sekund) daje ilość godzin
  var remainingSeconds = parseInt(uptime % 3600); // zapisanie w zmiennej ilości pozostałych sekund po obliczniu godzin ( % - modulo = reszta z dzielenia)
  var minutes = parseInt(remainingSeconds / 60); // zamipasnie w zmennej ilości mimut (pozostałe sekundy / 60 sekund)
  var seconds = parseInt(remainingSeconds % 60) // zapisanie w zmiennej ilości sekund pozostałych sekund

  if (minutes < 0) {
    console.log("Uptime: " + seconds + " sec");
  } else if (minutes > 0) {
    if (hours > 0) {
      console.log("Uptime: " + hours + " hrs " + minutes + " min " + seconds + " sec")
    } else {
      console.log("Uptime: " + minutes + " min " + seconds + " sec")
    }
  }
}

exports.conversionTime = conversionTime; // udostępnenie modułu