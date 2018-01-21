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
    value.m2hoorbaar = (sVars.constante * sVars.inhoud / sVars.advieswaarde - (sVars.huidigeAbsorbtie + sVars.personenFactor)) / value.factor * sVars.plaatsing * 0.6;
    value.m2goed = (sVars.constante * sVars.inhoud / sVars.advieswaarde - (sVars.huidigeAbsorbtie + sVars.personenFactor)) / value.factor * sVars.plaatsing * 0.8;
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
  if (sVars.kwaliteitsPercentage < 80) {
    $("#rKwaliteitPercentage").css("color", "#cc0000");
  } else if (sVars.kwaliteitsPercentage >= 80 && sVars.kwaliteitsPercentage < 100) {
    $("#rKwaliteitPercentage").css("color", "#cc9900");
  } else {
    $("#rKwaliteitPercentage").css("color", "#29a329");
  }

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
            "<h3><a href=\"" + value.productUrl + "\">" + value.naam + "</a><button class=\"product-card-toggle\" productId=\"" + value.id + "\"><i class=\"fa fa-square-o\" aria-hidden=\"true\"></i></button></h3>" +
          "</div>" +
          "<div class=\"sonar-product-values\">" +
            "<div class=\"sonar-product-value\">" +
              "<p><span class=\"result\">" + roundTo(value.m2hoorbaar, 1) + "</span>&nbsp;m<sup>2</sup></p>" +
              "<p>Hoorbaar<br>60% resultaat</p>" +
            "</div>" +
            "<div class=\"sonar-product-value\">" +
              "<p><span class=\"result\">" + roundTo(value.m2goed, 1) + "</span>&nbsp;m<sup>2</sup></p>" +
              "<p>Goed<br>80% resultaat</p>" +
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

  $(".product-card-toggle").click(function () {
    toggleProduct(this);
  });

  function toggleProduct(element) {
    var closestCard = $(element).closest(".sonar-product-card");
    var cardImg = closestCard.find(".sonar-product-img");
    var cardValues = closestCard.find(".sonar-product-values");
    if (producten[$(element).attr("productId")].shown == true) {
      cardImg.css("flex-grow", "0");
      cardValues.css("height", "0");
      producten[$(element).attr("productId")].shown = false;
      $(element).html("<i class=\"fa fa-square-o\" aria-hidden=\"true\"></i>");
    } else {
      cardImg.css("flex-grow", "1");
      cardValues.css("height", "6rem");
      producten[$(element).attr("productId")].shown = true;
      $(element).html("<i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>");
    }
  }

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
    dumpTextProducten = "";
    dumpText = "";
    $("#sonar-dump-table").remove();
    $.each(producten, function (key, value) {
      if (value.shown == true) {
        dumpTextProducten = dumpTextProducten + "<p style=\"margin: 0\">" + value.naam + ": <b>" + roundTo(value.m2hoorbaar, 2) + "</b> m<sup>2</sup> / <b>" + roundTo(value.m2goed, 2) + "</b> m<sup>2</sup> / <b>" + roundTo(value.m2optimaal, 2) + " m<sup>2</sup></b></p><br>";
      }
    });
    dumpText = "<div id=\"sonar-dump-table\"><h2>Samenvatting akoestisch adviesrapport</h2><br>" + 
    "<hr><br>" +
    "<p>Voor: <b>" + sVars.projectNaam + "</b></p>" +
    "<p>Betreft: <b>" + sVars.ruimteNaam + "</b></p><br>" +
    "<h3>Kenmerken van de ruimte</h3>" +
    "<hr><br>" +
    "<p>Oppervlakte (m<sup>2</sup>): <b>" + roundTo(sVars.oppervlakte, 2) + "</b></p>" +
    "<p>Hoogte (m): <b>" + roundTo(sVars.hoogte, 2) + "</b></p>" +
    "<p>Inhoud (m<sup>3</sup>): <b>" + roundTo(sVars.inhoud, 2) + "</b></p><br>" +
    "<p>Gebruik van de ruimte: <b>" + $("#gebruik option:selected").text() + "</b></p>" +
    "<p>Ambiance: <b>" + $("#ambiance option:selected").text() + "</b></p>" +
    "<p>Aantal aanwezige personen en gedrag: <b>" + sVars.personenAantal + "</b>, <b>" + $("#personenGedrag option:selected").text() + "</b></p>" +
    "<p>Extra wensen akoestiek: <b>" + $("#wensen option:selected").text() + "</b></p>" +
    "<p>Te verwachten plaatsing akoestische materialen: <b>" + $("#plaatsing option:selected").text() + "</b></p><br>" +
    "<h3>Huidige akoestiek van de ruimte</h3><hr><br>" + 
    "<p>Analyse van de huidige akoestiek: op basis van de akoestische meting, uitgevoerd op: <b>" + date.getDate()  + "-" + date.getMonth() + "-" + date.getFullYear() + "</b></p>" +
    "<p>De huidige gewogen gemiddelde galmtijd in deze ruimte is <b>" + roundTo(sVars.metingAvg, 2) + "</b> sec.</p>" +
    "<p>Dit komt overeen met <b>" + roundTo(sVars.kwaliteitsPercentage, 0) + "</b>% van de advieswaarde.</p><br>" +
    "<h3>Advies voor optimale akoestiek in deze ruimte</h3>" +
    "<hr><br>" +
    "<p>Advieswaarde voor optimale akoestiek in deze ruimte: <b>" + roundTo(sVars.advieswaarde, 2) + "</b> sec.</p>" +
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