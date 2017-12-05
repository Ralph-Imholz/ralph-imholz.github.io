/* ----------------------------------------
|  Variabelen
|----------------------------------------*/

var advieswaarden = [
  {
    naam: "Anders",
    klein: 0.6,
    middel: 0.66,
    groot: 0.76,
  },
  {
    naam: "Behandelruimte",
    klein: 0.48,
    middel: 0.53,
    groot: 0.61,
  },
  {
    naam: "Collegezaal",
    klein: 0.6,
    middel: 0.66,
    groot: 0.64,
  },
  {
    naam: "Dagverblijf",
    klein: 0.50,
    middel: 0.55,
    groot: 0.64,
  },
  {
    naam: "Foyer",
    klein: 0.63,
    middel: 0.70,
    groot: 0.80,
  },
  {
    naam: "Gymzaal",
    klein: 0.70,
    middel: 0.77,
    groot: 0.89,
  },
  {
    naam: "Hal/gang",
    klein: 0.70,
    middel: 0.77,
    groot: 0.89,
  },
  {
    naam: "Home cinema",
    klein: 0.31,
    middel: 0.34,
    groot: 0.39,
  },
  {
    naam: "Huiskamer",
    klein: 0.48,
    middel: 0.53,
    groot: 0.61,
  },
  {
    naam: "Kantine",
    klein: 0.45,
    middel: 0.54,
    groot: 0.62,
  },
  {
    naam: "Kantoor",
    klein: 0.45,
    middel: 0.54,
    groot: 0.62,
  },
  {
    naam: "Kantoor (extra rustig)",
    klein: 0.44,
    middel: 0.48,
    groot: 0.55,
  },
  {
    naam: "Kantoortuin",
    klein: 0.47,
    middel: 0.52,
    groot: 0.60,
  },
  {
    naam: "Keuken",
    klein: 0.70,
    middel: 0.77,
    groot: 0.89,
  },
  {
    naam: "Kinderdagverblijf",
    klein: 0.60,
    middel: 0.66,
    groot: 0.76,
  },
  {
    naam: "Leslokaal",
    klein: 0.40,
    middel: 0.45,
    groot: 0.51,
  },
  {
    naam: "Luisterruimte",
    klein: 0.36,
    middel: 0.40,
    groot: 0.46,
  },
  {
    naam: "Restaurant",
    klein: 0.60,
    middel: 0.66,
    groot: 0.76,
  },
  {
    naam: "Studio/afmix",
    klein: 0.31,
    middel: 0.34,
    groot: 0.39,
  },
  {
    naam: "Vergaderruimte",
    klein: 0.44,
    middel: 0.48,
    groot: 0.55,
  },
  {
    naam: "Zaal/multifunctie",
    klein: 0.64,
    middel: 0.71,
    groot: 0.80,
  },
  {
    naam: "Winkelruimte",
    klein: 0.60,
    middel: 0.66,
    groot: 0.76,
  },

];

var producten = [
  {
    naam: "Ceiling Panel kader",
    factor: 0.86,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/akoestische_plafondpanelen_in_een_reaturant2.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
  },
  {
    naam: "Ceiling Panel randloos",
    factor: 0.87,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/akoestische_plafondpanelen_in_een_vergaderruimte.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
  },
  {
    naam: "Color Panel",
    factor: 0.86,
    imgUrl: "https://www.rivasono.nl/images/Producten_600x338/rivasono_akoestisch_wandpaneel_color_panel.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
  },
  {
    naam: "Design Panel 3.5",
    factor: 0.85,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/Akoestisch_wandpaneel_Design_Panel_bij_de_tafel.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
  },
  {
    naam: "Panel SAB",
    factor: 0.79,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/Rvasono-praktijkvoorbeeld-akoestiek-verbeteren-Panel-SAB.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
  },
  {
    naam: "Panel VQ",
    factor: 0.89,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/Rivasono-praktijkvoorbeeld-akoestiek-verbeteren-met-Panel-VQ1.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
  },
  {
    naam: "Plafondbaffle CT",
    factor: 0.63,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/rvasono_praktijkvoorbeeld_akoestiek_verbeteren_kerk_kapel_zorgcentrum_wiekendael_plafondbaffles_aan_haken.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
  },
  {
    naam: "Panel CA",
    factor: 0.68,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/rivasono_praktijkvoorbeeld_onzichtbaar_akoestiek_verbeteren_met_plafondpanelen_in_een_restaurant.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
  },
  {
    naam: "Wall Panel System",
    factor: 0.87,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/Akoestisch-wandpaneelsysteem-zwart.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
  },
];

var app = {
  flipped: false,
};

var sVars = {
  constante: 0.161,

  ruimteNaam: "",
  gebruik: 0,
  personenAantal: 0,
  personenGedrag: 0.42,
  wensen: 1,

  oppervlakte: 0,
  hoogte: 0,
  inhoud: 0,

  ambiance: 1,
  plaatsing: 1,

  hz125: 0,
  hz250: 0,
  hz500: 0,
  hz1000: 0,
  hz2000: 0,
  hz4000: 0,
  metingAvg: 0,

  advieswaarde: 0,
  huidigeAbsorbtie: 0,

  kwaliteitsPercentage: 0,

  personenFactor: 0,

  useMeetwaarden: true,

};

/* ----------------------------------------
|  Sonar js
|----------------------------------------*/

function sonarCalculate() {
  console.log("-- Berekening gestart --");

  console.log("Oppervlakte \t\t= \t" + sVars.oppervlakte);
  console.log("Hoogte \t\t\t= \t" + sVars.hoogte);
  console.log("Inhoud \t\t\t= \t" + sVars.inhoud);

  sVars.metingAvg = (((sVars.hz125 + sVars.hz250 + sVars.hz500 + sVars.hz1000 + sVars.hz2000 + sVars.hz4000) / 6) + ((sVars.hz250 + sVars.hz500 + sVars.hz1000 + sVars.hz2000) / 4)) / 2;
  console.log("Meting gemiddelde \t= \t" + sVars.metingAvg);

  if (sVars.inhoud < 150) {
    sVars.advieswaarde = advieswaarden[sVars.gebruik]["klein"];
  } else if (sVars.inhoud >= 150 && sVars.inhoud <= 250) {
    sVars.advieswaarde = advieswaarden[sVars.gebruik]["middel"];
  } else {
    sVars.advieswaarde = advieswaarden[sVars.gebruik]["groot"];
  }
  sVars.advieswaarde = (sVars.advieswaarde * sVars.ambiance + sVars.advieswaarde * sVars.wensen) / 2;
  console.log("Advieswaarde \t\t= \t" + sVars.advieswaarde);

  sVars.benodigdeSabins = sVars.constante * sVars.inhoud / sVars.advieswaarde;
  console.log("Benodigde Sabins \t= \t" + sVars.benodigdeSabins);

  sVars.huidigeAbsorbtie = sVars.constante * sVars.inhoud / sVars.metingAvg;
  console.log("Huidige Absorbtie \t= \t" + sVars.huidigeAbsorbtie);
  
  sVars.toeTeVoegenSabins = sVars.benodigdeSabins - sVars.huidigeAbsorbtie;
  console.log("Toe te voegen sabins \t= \t" + sVars.toeTeVoegenSabins);

  sVars.kwaliteitsPercentage = roundTo(sVars.advieswaarde / sVars.metingAvg * 100, 0);
  console.log("Kwaliteits percentage \t= \t" + sVars.kwaliteitsPercentage + " %");

  if (sVars.personenGedrag == 0) {
    sVars.personenFactor = 0 - 0.422921667;
  } else {
    sVars.personenFactor = sVars.personenAantal * sVars.personenGedrag - 0.422921667;
  }
  console.log("Personen factor \t= \t" + sVars.personenFactor);

  $.each(producten, function (key, value) {
    value.m2hoorbaar = (sVars.constante * sVars.inhoud / sVars.advieswaarde - (sVars.huidigeAbsorbtie + sVars.personenFactor)) / value.factor * sVars.plaatsing * 0.5;
    value.m2goed = (sVars.constante * sVars.inhoud / sVars.advieswaarde - (sVars.huidigeAbsorbtie + sVars.personenFactor)) / value.factor * sVars.plaatsing * 0.75;
    value.m2optimaal = (sVars.constante * sVars.inhoud / sVars.advieswaarde - (sVars.huidigeAbsorbtie + sVars.personenFactor)) / value.factor * sVars.plaatsing;
  });

  $("#rProjectNaam").val(sVars.projectNaam);
  $("#rRuimteNaam").val(sVars.ruimteNaam);
  $("#rGebruik").val($("#gebruik option:selected").text());
  $("#rPersonenAantal").val(sVars.personenAantal);
  $("#rPersonenGedrag").val($("#personenGedrag option:selected").text());
  $("#rWensen").val($("#wensen option:selected").text());
  $("#rOppervlakte").text(roundTo(sVars.oppervlakte, 2));
  $("#rHoogte").text(roundTo(sVars.hoogte, 2));
  $("#rInhoud").text(roundTo(sVars.inhoud, 2));
  $("#rAmbiance").val($("#ambiance option:selected").text());
  $("#rPlaatsing").val($("#plaatsing option:selected").text());
  $("#rHuidigeGalmtijd").text(roundTo(sVars.metingAvg, 2));
  $("#rKwaliteitPercentage").text(sVars.kwaliteitsPercentage);
  $("#rAdvieswaarde").text(roundTo(sVars.advieswaarde, 2));

  $(".sonar-product-card").remove();

  $.each(producten, function (key, value) {
    $(".sonar-product-cards").append(
      "<div class=\"sonar-product-card\">" +
        "<div class=\"sonar-product-img\">" +
          "<img src=\"" + value.imgUrl + "\" alt=\"" + value.naam + "\">" +
        "</div>" +
        "<div class=\"sonar-product-content\">" +
          "<div class=\"sonar-product-title\">" +
            "<h3>" + value.naam + "</h3>" +
          "</div>" +
          "<div class=\"sonar-product-values\">" +
            "<div class=\"sonar-product-value\">" +
              "<p><span class=\"result\">" + roundTo(value.m2hoorbaar, 1) + "</span>&nbsp;m<sup>2</sup></p>" +
              "<p>Hoorbaar<br>50% resultaat</p>" +
            "</div>" +
            "<div class=\"sonar-product-value\">" +
              "<p><span class=\"result\">" + roundTo(value.m2goed, 1) + "</span>&nbsp;m<sup>2</sup></p>" +
              "<p>Goed<br>75% resultaat</p>" +
            "</div>" +
            "<div class=\"sonar-product-value\">" +
              "<p><span class=\"result\">" + roundTo(value.m2optimaal, 1) + "</span>&nbsp;m<sup>2</sup></p>" +
              "<p>Optimaal<br>100% resultaat</p>" +
            "</div>" +
          "</div>"+
        "</div>"+
      "</div>"
    );
  });

  console.log("-- Berekening voltooid --\n\n");
}

$(document).ready(function () {

  var gebruikDropdown = $("#gebruik");
  var i = 0;

  $.each(advieswaarden, function (key, value) {
    gebruikDropdown.append($("<option />").val(i).text(value.naam));
    i++;
  });

  $(".sonar-results-panel").css("display", "none");

  $(".resultaatButton").click( function () {
    if (app.flipped == false) {

      if(invalidCheck()) {
        return;
      }

      $(".sonar-input-panel").toggle("drop");
      $(".sonar-results-panel").toggle("drop", {direction: "right"});

      $("#invoerButton").toggleClass("active");
      $("#resultaatNavButton").toggleClass("active");
      app.flipped = !app.flipped;

      sonarCalculate();
    }
  });

  $("#invoerButton").click ( function () {
    if (app.flipped == true) {

      $(".sonar-input-panel").toggle("drop");
      $(".sonar-results-panel").toggle("drop", {direction: "right"});
      
      $("#resultaatNavButton").toggleClass("active");
      $(this).toggleClass("active");
      app.flipped = !app.flipped;
    }
  });

  $("select").change( function () {
    sVars[$(this).attr("id")] =  parseFloat($(this).val());
  });
  
  $("input[type=text]").on("keyup", function () {
    sVars[$(this).attr("id")] = $(this).val();
  });
  
  $("input[type=number]").on("keyup", function () {
    sVars[$(this).attr("id")] = parseFloat($(this).val());
  });

  $("#oppervlakte, #hoogte").on("keyup", function () {
    $("#inhoud").val(roundTo(sVars["oppervlakte"] * sVars["hoogte"], 2));
    sVars["inhoud"] = sVars["oppervlakte"] * sVars["hoogte"];
  });

  $("#meetwaardenCheck").change(function () {
    if (sVars.useMeetwaarden) {
      $(".sonar-meetwaarden-input-columns").css("opacity", "0");
      $(".sonar-meetwaarden-overlay").css("display", "flex");
      sVars.useMeetwaarden = !sVars.useMeetwaarden;
    } else {
      $(".sonar-meetwaarden-input-columns").css("opacity", "1");
      $(".sonar-meetwaarden-overlay").css("display", "none");
      sVars.useMeetwaarden = !sVars.useMeetwaarden;
    }
  });

  $("#sonar-dump-button").click(function () {
    $("#sonar-dump-table").remove();
    $("#sonar-dump-values").append(
      "<table id=\"sonar-dump-table\">" + 
      "<tr><td>Klant/projectnaam</td><td>" + sVars.projectNaam + "</td></tr>" +
      "<tr><td>Ruimtenaam</td><td>" + sVars.ruimteNaam + "</td></tr>" +
      "<tr><td>Gebruik</td><td>" + $("#gebruik option:selected").text() + "</td></tr>" +
      "<tr><td>Aantal personen</td><td>" + sVars.personenAantal + "</td></tr>" +
      "<tr><td>Gedrag Personen</td><td>" + $("#personenGedrag option:selected").text() + "</td></tr>" +
      "<tr><td>Extra wensen akoestiek</td><td>" + $("#wensen option:selected").text() + "</td></tr>" +
      "<tr><td>Oppervlakte</td><td>" + sVars.oppervlakte + "</td></tr>" +
      "<tr><td>Hoogte</td><td>" + sVars.hoogte + "</td></tr>" +
      "<tr><td>Inhoud</td><td>" + sVars.inhoud + "</td></tr>" +
      "<tr><td>Ambiance</td><td>" + $("#ambiance option:selected").text() + "</td></tr>" +
      "<tr><td>Plaatsing akoestische materialen</td><td>" + $("#plaatsing option:selected").text() + "</td></tr>" +
      "</table>"
    );
  });

});

function roundTo(value, sig) {
  return value.toFixed(sig);
}

function invalidCheck() {



  if ($("#projectNaam").val() == "") {
    alert("Vul de Klant/projectnaam in.");
    return true;
  }
  if ($("#ruimteNaam").val() == "") {
    alert("Vul de Ruimtenaam in.");
    return true;
  }
  if ($("#personenAantal").val() == "") {
    alert("Vul het aantal personen in.");
    return true;
  }
  if ($("#inhoud").val() == "" || $("#inhoud").val() == 0) {
    alert("Vul de inhoud of de oppervlakte en hoogte in.");
    return true;
  }
  if ($("#meetwaardenCheck:checked").length == 1) {
    if ($("#hz125").val() == "") {
      alert("Vul de meetwaarde bij 125 Hz in.");
      return true;
    }
    if ($("#hz250").val() == "") {
      alert("Vul de meetwaarde bij 250 Hz in.");
      return true;
    }
    if ($("#hz500").val() == "") {
      alert("Vul de meetwaarde bij 500 Hz in.");
      return true;
    }
    if ($("#hz1000").val() == "") {
      alert("Vul de meetwaarde bij 1000 Hz in.");
      return true;
    }
    if ($("#hz2000").val() == "") {
      alert("Vul de meetwaarde bij 2000 Hz in.");
      return true;
    }
    if ($("#hz4000").val() == "") {
      alert("Vul de meetwaarde bij 4000 Hz in.");
      return true;
    }
  }
}

/* ----------------------------------------
|  Bulma js
|----------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");

      });
    });
  }
  
});

/* ----------------------------------------
|  JQuery Modal
|----------------------------------------*/

$("#sonar-dump-button").click(function () {
  
  $("#sonar-dump-modal").modal({
    closeClass: "sonar-dump-modal-close",
    closeText: "<i class=\"fa fa-times\" aria-hidden=\"true\"></i>",
  });

});