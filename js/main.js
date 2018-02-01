var devMode = false;

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
    id: 0,
    naam: "Ceiling Panel kader",
    factor: 0.86,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/akoestische_plafondpanelen_in_een_reaturant2.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
    productUrl: "https://www.rivasono.nl/akoestische-producten/aan-het-plafond/plafondpanelen",
    shown: false,
    subText: "Plafondpaneel in aluminium frame",
    customm2: 0,
    customsec: 0,
    customperc: 0
  },
  {
    id: 1,
    naam: "Ceiling Panel randloos",
    factor: 0.87,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/akoestische_plafondpanelen_in_een_vergaderruimte.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
    productUrl: "https://www.rivasono.nl/akoestische-producten/aan-het-plafond/plafondpanelen/ceiling-panel-randloos-wit-akoestisch-plafondpaneel",
    shown: false,
    subText: "Plafondpaneel met minimalistisch strak uiterlijk",
    customm2: 0,
    customsec: 0,
    customperc: 0
  },
  {
    id: 2,
    naam: "Color Panel",
    factor: 0.86,
    imgUrl: "https://www.rivasono.nl/images/Producten_600x338/rivasono_akoestisch_wandpaneel_color_panel.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
    productUrl: "https://www.rivasono.nl/akoestische-producten/aan-de-wand/wandpanelen",
    shown: false,
    subText: "Wandpaneel met strak oppervlak",
    customm2: 0,
    customsec: 0,
    customperc: 0
  },
  {
    id: 3,
    naam: "Design Panel 3.5",
    factor: 0.85,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/Akoestisch_wandpaneel_Design_Panel_bij_de_tafel.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
    productUrl: "https://www.rivasono.nl/akoestische-producten/aan-de-wand/wandpanelen/rivasono-akoestisch-design-paneel",
    shown: false,
    subText: "Wandpaneel met foto of afbeelding",
    customm2: 0,
    customsec: 0,
    customperc: 0
  },
  {
    id: 4,
    naam: "Panel SAB",
    factor: 0.79,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/Rvasono-praktijkvoorbeeld-akoestiek-verbeteren-Panel-SAB.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
    productUrl: "https://www.rivasono.nl/akoestische-producten/aan-de-wand/wandpanelen/rivasono-flat-panel-sab-akoestisch-wandpaneel-en-plafondpaneel",
    shown: false,
    subText: "Wand- en plafondpaneel met facet-rand",
    customm2: 0,
    customsec: 0,
    customperc: 0
  },
  {
    id: 5,
    naam: "Panel VQ",
    factor: 0.89,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/Rivasono-praktijkvoorbeeld-akoestiek-verbeteren-met-Panel-VQ1.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
    productUrl: "https://www.rivasono.nl/akoestische-producten/aan-de-wand/wandpanelen/rivasono-panel-vq-akoestisch-wand-en-plafondpaneel",
    shown: false,
    subText: "Wandpaneel met strak en stevig oppervlak",
    customm2: 0,
    customsec: 0,
    customperc: 0
  },
  {
    id: 6,
    naam: "Plafondbaffle CT",
    factor: 0.63,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/rvasono_praktijkvoorbeeld_akoestiek_verbeteren_kerk_kapel_zorgcentrum_wiekendael_plafondbaffles_aan_haken.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
    productUrl: "https://www.rivasono.nl/akoestische-producten/plafondbattle-ct-akoestische-plafondbaffle",
    shown: false,
    subText: "Plafondbaffle, voor verticale montage, met strak randloos uiterlijk",
    customm2: 0,
    customsec: 0,
    customperc: 0
  },
  {
    id: 7,
    naam: "Panel CA",
    factor: 0.68,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/rivasono_praktijkvoorbeeld_onzichtbaar_akoestiek_verbeteren_met_plafondpanelen_in_een_restaurant.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
    productUrl: "https://www.rivasono.nl/akoestische-producten/aan-het-plafond/plafondpanelen",
    shown: false,
    subText: "Akoestisch plafondpaneel, op maat te snijden",
    customm2: 0,
    customsec: 0,
    customperc: 0
  },
  {
    id: 8,
    naam: "Wall Panel System",
    factor: 0.87,
    imgUrl: "https://www.rivasono.nl/images/Praktijkvoorbeelden_600x338/Akoestisch-wandpaneelsysteem-zwart.jpg",
    m2hoorbaar: 0,
    m2goed: 0,
    m2optimaal: 0,
    productUrl: "https://www.rivasono.nl/akoestische-producten/aan-de-wand/wandsystemen/rivasono-akoestisch-wandpaneel-systeem",
    shown: false,
    subText: "Wandpanelen, aan elkaar te verbinden tot groter totaaloppervlak",
    customm2: 0,
    customsec: 0,
    customperc: 0
  },
];

var app = {
  flipped: false,
};

var sVars = {
  constante: 0.161,

  projectNaam: "",
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

var date = new Date();

var dumpTextProducten = "";
var dumpText = "";

/* ----------------------------------------
|  Sonar js
|----------------------------------------*/

function sonarCalculate() {
  console.log("-- Berekening gestart --");

  console.log("Input");
  sVars.projectNaam = $("#projectNaam").val();

  sVars.ruimteNaam = $("#ruimteNaam").val();
  sVars.gebruik = parseFloat($("#gebruik").val());
  sVars.personenAantal = parseFloat($("#personenAantal").val());
  sVars.personenGedrag = parseFloat($("#personenGedrag").val());
  sVars.wensen = parseFloat($("#wensen").val());
  sVars.oppervlakte = parseFloat($("#oppervlakte").val());
  sVars.hoogte = parseFloat($("#hoogte").val());
  sVars.inhoud = parseFloat($("#inhoud").val());
  sVars.ambiance = parseFloat($("#ambiance").val());
  sVars.plaatsing = parseFloat($("#plaatsing").val());
  sVars.hz125 = parseFloat($("#hz125").val());
  sVars.hz250 = parseFloat($("#hz250").val());
  sVars.hz500 = parseFloat($("#hz500").val());
  sVars.hz1000 = parseFloat($("#hz1000").val());
  sVars.hz2000 = parseFloat($("#hz2000").val());
  sVars.hz4000 = parseFloat($("#hz4000").val());

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
    value.m2hoorbaar = (sVars.constante * sVars.inhoud / (sVars.advieswaarde / 0.6) - (sVars.huidigeAbsorbtie + sVars.personenFactor)) / value.factor * sVars.plaatsing;
    value.m2goed = (sVars.constante * sVars.inhoud / (sVars.advieswaarde / 0.8) - (sVars.huidigeAbsorbtie + sVars.personenFactor)) / value.factor * sVars.plaatsing;
    value.m2optimaal = (sVars.constante * sVars.inhoud / sVars.advieswaarde - (sVars.huidigeAbsorbtie + sVars.personenFactor)) / value.factor * sVars.plaatsing;
  });

  $("#rProjectNaam").val(sVars.projectNaam);
  $("#rRuimteNaam").val(sVars.ruimteNaam);
  $("#rGebruik").val($("#gebruik option:selected").text());
  $("#rPersonenAantal").val(sVars.personenAantal);
  $("#rPersonenGedrag").val($("#personenGedrag option:selected").text());
  $("#rWensen").val($("#wensen option:selected").text());
  $("#rOppervlakte").text(dotToComma(roundTo(sVars.oppervlakte, 2)));
  $("#rHoogte").text(dotToComma(roundTo(sVars.hoogte, 2)));
  $("#rInhoud").text(dotToComma(roundTo(sVars.inhoud, 2)));
  $("#rAmbiance").val($("#ambiance option:selected").text());
  $("#rPlaatsing").val($("#plaatsing option:selected").text());
  $("#rHuidigeGalmtijd").text(dotToComma(roundTo(sVars.metingAvg, 2)));
  $("#rKwaliteitPercentage").text(sVars.kwaliteitsPercentage);
  if (sVars.kwaliteitsPercentage < 80) {
    $("#rKwaliteitPercentage").css("color", "#cc0000");
  } else if (sVars.kwaliteitsPercentage >= 80 && sVars.kwaliteitsPercentage < 100) {
    $("#rKwaliteitPercentage").css("color", "#cc9900");
  } else {
    $("#rKwaliteitPercentage").css("color", "#29a329");
  }

  $("#rAdvieswaarde").text(dotToComma(roundTo(sVars.advieswaarde, 2)));

  $(".sonar-product-card").remove();

  $.each(producten, function (key, value) {
    $(".sonar-product-cards").append(
      "<div class=\"sonar-product-card\">" +
        "<div class=\"sonar-product-img\"> " + 
          "<img src=\"" + value.imgUrl + "\" alt=\"" + value.naam + "\">" +
        "</div>" +
        "<div class=\"sonar-product-content\">" +
          "<div class=\"sonar-product-title\">" +
            "<h3>" + value.naam + "<button class=\"product-card-toggle\" productId=\"" + value.id + "\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button></h3>" +
            "<small>" + value.subText + "</small>" +
          "</div>" +
          "<div class=\"sonar-product-card-hideables\">" +
            "<div class=\"sonar-product-values\">" +
              "<div class=\"sonar-product-value\">" +
                "<p><span class=\"result\">" + dotToComma(roundTo(value.m2hoorbaar, 1)) + "</span>&nbsp;m<sup>2</sup></p>" +
                "<p><span class=\"result\">" + dotToComma(roundTo(sVars.advieswaarde / 0.6, 2)) + "</span> sec<br>60% resultaat</p>" +
              "</div>" +
              "<div class=\"sonar-product-value\">" +
                "<p><span class=\"result\">" + dotToComma(roundTo(value.m2goed, 1)) + "</span>&nbsp;m<sup>2</sup></p>" +
                "<p><span class=\"result\">" + dotToComma(roundTo(sVars.advieswaarde / 0.8, 2)) + "</span> sec<br>80% resultaat</p>" +
              "</div>" +
              "<div class=\"sonar-product-value\">" +
                "<p><span class=\"result\">" + dotToComma(roundTo(value.m2optimaal, 1)) + "</span>&nbsp;m<sup>2</sup></p>" +
                "<p><span class=\"result\">" + dotToComma(roundTo(sVars.advieswaarde, 2)) + "</span> sec<br>100% resultaat</p>" +
              "</div>" +
            "</div>" +
            "<div class=\"sonar-product-card-area-input\">" +
              "<div class=\"sonar-input\">" +
                "<label>Oppervlakte (m<sup>2</sup>)</label>" +
                "<input class=\"sonar-product-card-area-input-field\" placeholder=\"0,00\" step=\"0.01\" type=\"number\" productId=\"" + value.id + "\"></input>" +
              "</div>" +
              "<div>" +
                "<i class=\"fa fa-calculator\" aria-hidden=\"true\"></i>&nbsp;<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>" +
              "</div>" +
              "<div>" +
              "<p><span class=\"result\">" + "0,0" + "</span> sec<br><span class=\"resultPerc\">0</span>% resultaat</p>" +
              "</div>" +
            "</div>" +
            "<a class=\"sonar-product-card-link\" target=\"_blank\" href=\""+ value.productUrl + "\">Bekijk product &nbsp;<i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></a>" +
          "</div>"+
        "</div>"+
      "</div>"
    );

  });

  $(".product-card-toggle").click(function () {
    toggleProduct(this);
  });

  function toggleProduct(element) {
    var closestCard = $(element).closest(".sonar-product-card");
    var cardImg = closestCard.find(".sonar-product-img");
    var cardHideables = closestCard.find(".sonar-product-card-hideables");
    if (producten[$(element).attr("productId")].shown == true) {
      producten[$(element).attr("productId")].shown = false;
      $(element).find("i").css("opacity", "0");
      cardImg.css("max-height", "0");
      cardHideables.css("max-height", "0");
    } else {
      producten[$(element).attr("productId")].shown = true;
      $(element).find("i").css("opacity", "1");
      cardImg.css("max-height", "400px");
      cardHideables.css("max-height", "800px");
    }
  }

  $(".sonar-product-card-area-input-field").on("keyup", function() {
    var self = $(this);
    var parent = self.closest(".sonar-product-card-area-input");
    var result = parent.find(".result");
    var resultPerc = parent.find(".resultPerc");
    var resultVal = sVars.constante * sVars.inhoud / (sVars.huidigeAbsorbtie + sVars.personenFactor + parseFloat(self.val()) * producten[self.attr("productid")].factor * sVars.plaatsing);
    result.text(dotToComma(roundTo(resultVal, 2)));
    resultPerc.text(roundTo(100/(resultVal/sVars.advieswaarde), 0));
    producten[self.attr("productid")].customm2 = self.val();
    producten[self.attr("productid")].customsec = dotToComma(roundTo(resultVal, 2));
    producten[self.attr("productid")].customperc = roundTo(100/(resultVal/sVars.advieswaarde), 0);
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

      if (!devMode) {
        
        if(invalidCheck()) {
          return;
        }

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

  $("#oppervlakte, #hoogte").on("keyup", function () {
    var area = $("#oppervlakte").val().toString().replace(/,/g, ".");
    var height = $("#hoogte").val().toString().replace(/,/g, ".");
    $("#inhoud").val((area * height).toFixed(2));
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
    dumpTextProducten = "";
    dumpText = "";
    $("#sonar-dump-table").remove();
    $.each(producten, function (key, value) {
      if (value.shown == true) {
        dumpTextProducten += "<p style=\"margin: 0\">" + value.naam + ": <b>" + dotToComma(roundTo(value.m2hoorbaar, 2)) + "</b> m<sup>2</sup> / <b>" + dotToComma(roundTo(value.m2goed, 2)) + "</b> m<sup>2</sup> / <b>" + dotToComma(roundTo(value.m2optimaal, 2)) + "</b> m<sup>2</sup></p>";
      }
      if (value.customm2 != 0) {
        dumpTextProducten += "<p> - Aangepaste waarde: <b>" + value.customm2 + "</b> m<sup>2</sup> geeft <b> " + value.customsec + "</b> sec = <b>" + value.customperc + "</b>%</p><br>";
      } else {
        dumpTextProducten += "<br>";
      }
    });
    dumpText = "<div id=\"sonar-dump-table\"><h2>Samenvatting akoestisch adviesrapport</h2><br>" + 
    "<hr><br>" +
    "<p>Voor: <b>" + sVars.projectNaam + "</b></p>" +
    "<p>Betreft: <b>" + sVars.ruimteNaam + "</b></p><br>" +
    "<h3>Kenmerken van de ruimte</h3>" +
    "<hr><br>" +
    "<p>Oppervlakte (m<sup>2</sup>): <b>" + dotToComma(roundTo(sVars.oppervlakte, 2)) + "</b></p>" +
    "<p>Hoogte (m): <b>" + dotToComma(roundTo(sVars.hoogte, 2)) + "</b></p>" +
    "<p>Inhoud (m<sup>3</sup>): <b>" + dotToComma(roundTo(sVars.inhoud, 2)) + "</b></p><br>" +
    "<p>Gebruik van de ruimte: <b>" + $("#gebruik option:selected").text() + "</b></p>" +
    "<p>Ambiance: <b>" + $("#ambiance option:selected").text() + "</b></p>" +
    "<p>Aantal aanwezige personen en gedrag: <b>" + sVars.personenAantal + "</b>, <b>" + $("#personenGedrag option:selected").text() + "</b></p>" +
    "<p>Extra wensen akoestiek: <b>" + $("#wensen option:selected").text() + "</b></p>" +
    "<p>Te verwachten plaatsing akoestische materialen: <b>" + $("#plaatsing option:selected").text() + "</b></p><br>" +
    "<h3>Huidige akoestiek van de ruimte</h3><hr><br>" + 
    "<p>Analyse van de huidige akoestiek: op basis van de akoestische meting, uitgevoerd op: <b>" + date.getDate()  + "-" + date.getMonth() + "-" + date.getFullYear() + "</b></p>" +
    "<p>De huidige gewogen gemiddelde galmtijd in deze ruimte is <b>" + dotToComma(roundTo(sVars.metingAvg, 2)) + "</b> sec.</p>" +
    "<p>Dit komt overeen met <b>" + roundTo(sVars.kwaliteitsPercentage, 0) + "</b>% van de advieswaarde.</p><br>" +
    "<h3>Advies voor optimale akoestiek in deze ruimte</h3>" +
    "<hr><br>" +
    "<p>Advieswaarde voor optimale akoestiek in deze ruimte: <b>" + dotToComma(roundTo(sVars.advieswaarde, 2)) + "</b> sec.</p>" +
    "<br><h3>Akoestische producten en geadviseerde hoeveelheid ervan</h3>" +
    "<hr><br>" +
    "<p>(Productnaam: 60% resultaat / 80% resultaat / 100% resultaat)</p><br>" +
    "<div id=\"dump-producten\">" + dumpTextProducten + "</div>" +
    "<br><h3>Disclaimer</h3>" +
    "<hr><br>" +
    "<p><small>De calculaties zijn gebaseerd op akoestische modellen volgens ISO-354 en schattingen voor algemene situaties. Eventuele metingen zijn ad-hoc uitgevoerd, volgens de RT60 methode, zonder dat alle bouwkundige eigenschappen bekend zijn. De meetresultaten en calculaties zijn bedoeld ter indicatie; er kunnen geen rechten aan worden ontleend.</small></p>" +
    "</div>";
    $("#sonar-dump-values").append(dumpText);
  });

});

function roundTo(value, sig) {
  return Number(value.toFixed(sig));
}

function dotToComma(value) {
  return value.toString().replace(/\./g, ",");
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
|  EmailJS
|----------------------------------------*/

$(document).ready(function () {
  var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+.([a-zA-Z])+([a-zA-Z])+/;

  $("#dumpmailButton").click(function () {
    var dumpAddress = $("#dumpmail").val();
    var addressIsValid = pattern.test(dumpAddress);
    if (addressIsValid) {
      $("#dumpmail-confirm").hide();
      $("#dumpmailButton").addClass("is-loading");
      emailjs.send("gmail", "sonar_dump_mail", {"email":$("#dumpmail").val(),"date":date.getDate()  + "-" + date.getMonth() + "-" + date.getFullYear(),"project":sVars.projectNaam,"content":dumpText}).then(function () {
        setTimeout(function() {
          $("#dumpmailButton").removeClass("is-loading");
          $("#dumpmail-confirm").show();
          $("#dumpmail").val("");
        }, 1000);
      });
    } else {
      if (dumpAddress == "") {
        alert("Vul alstublieft een e-mail adres in.");
      } else {
        alert("Vul alstublieft een geldig e-mail adres in.");
      }
    }
  });
});