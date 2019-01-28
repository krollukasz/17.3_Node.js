var os = require("os"); // zaimportowanie modułu "os"

function conversionTime(uptime) { // funkcja konwertująca czas
  
  var hours = parseInt(uptime / 3600); // zapisanie w zmiennej ilości obliczonych godzin; wartość "uptime" / 3600 (sekund) daje ilość godzin
  var remainingSeconds = parseInt(uptime % 3600); // zapisanie w zmiennej ilości pozostałych sekund po obliczniu godzin ( % - modulo = reszta z dzielenia)
  var minutes = parseInt(remainingSeconds / 60); // zamipasnie w zmennej ilości mimut (pozostałe sekundy / 60 sekund)
  var seconds = parseInt(remainingSeconds % 60); // zapisanie w zmiennej ilości sekund pozostałych sekund

  if (minutes > 0) {
    if (hours > 0) {
      return (hours + " hrs " + minutes + " min " + seconds + " sec");
    } else {
      return (minutes + " min " + seconds + " sec");
    }
  } else {
    return (seconds + " sec");
  }
}

exports.conversionTime = conversionTime; // udostępnenie modułu