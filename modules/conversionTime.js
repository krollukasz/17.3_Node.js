function conversionTime(time) {
  if (time < 60) { // sprawdzenie, czy wartość jest mniejsza niz 60, wtedy wyświetl sekundy
    return time + " sec";
  } else if (time >= 60) { // dla wartości większej lub równej 60 sekund, wyświetl minuty, resztę z dzielenia jako sekundy
    return (Math.floor(time / 60) + " min " + Math.floor(time % 60) + " sec");
  } else { // dla wartości większej lub równej 3600 sekund, podziel i wyświetl godziny, resztę podziel przez 60 i wyświel jako minuty, resztę jako sekundy
    return (Math.floor(time / 3600) + " hour/s" + (Math.floor(time % 3600)/60) + " min " + Math.floor(time % 60) + " sec");
  }
}

exports.print = conversionTime; // udostępnenie modułu