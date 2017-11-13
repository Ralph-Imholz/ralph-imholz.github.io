// Variables
const constant = 0.161;

let projectName;
let roomName;

let surface;
let height;
let volume;

let ambianceFactor;
let wishesFactor;
let locationFactor;

let peopleCount;
let peopleType;
let peopleFactor;

let measurements = {
  hz125: 0,
  hz250: 0,
  hz500: 0,
  hz1000: 0,
  hz2000: 0,
  hz4000: 0,
  total: 0,
  avg: 0
}

let usageKey1;
let usageKey2;

let currentAbsorbtion;

let adviceValue;
let adviceValueFactored;

let difference;

let qualityPerc;

let ceilingPanel = 0.87;
let wallPanel = 0.87;
let designPanel = 0.85;
let flatPanelSAB = 0.79;
let fabricPanel = 0.85;
let paneelVQ = 0.79;
let systeemplafondplaat = 0.91;
let plafondbaffleCT = 0.63;

// Events
$(document).ready( function () {

  $("#height").keyup(function () {
    fetchRoomSpecs();
    $("#volume").val(dec2(height * surface));
  });

  $("#surface").keyup(function () {
    fetchRoomSpecs();
    $("#volume").val(dec2(height * surface));
  });

});

// Fetch Functions
function fetchNames() {
  projectName = $("#projectName").val();
  roomName = $("#roomName").val();
}

function fetchRoomSpecs() {
  surface = parseFloat($("#surface").val());
  height = parseFloat($("#height").val());
  volume = height * surface;
}

function fetchFactors() {
  ambianceFactor = $("#conditions").val();
  wishesFactor = $("#wishes").val();
  locationFactor = $("#location").val();
  peopleCount = $("#peopleCount").val();
  peopleType = $("#peopleType").val();
  peopleFactor = peopleCount * peopleType;
}

function fetchMeasurements() {
  measurements.hz125 = parseFloat($("#hz125").val());
  measurements.hz250 = parseFloat($("#hz250").val());
  measurements.hz500 = parseFloat($("#hz500").val());
  measurements.hz1000 = parseFloat($("#hz1000").val());
  measurements.hz2000 = parseFloat($("#hz2000").val());
  measurements.hz4000 = parseFloat($("#hz4000").val());
  measurements.avg = dec2((((measurements.hz125 + measurements.hz250 + measurements.hz500 + measurements.hz1000 + measurements.hz2000 + measurements.hz4000) / 6) + ((measurements.hz250 + measurements.hz500 + measurements.hz1000 + measurements.hz2000) / 4)) / 2);
}

function fetchUsageKeys() {
  usageKey1 = $("#usage").val();
  if (volume < 150) {
    usageKey2 = "small";
  } else if (volume > 149 && volume < 250) {
    usageKey2 = "medium";
  } else {
    usageKey2 = "large";
  }
}

function fetchAdviceValue() {
  adviceValue = ruimte[usageKey1][usageKey2];
}

// Process Functions
function processCurrentAbsorbtion() {
  if (peopleType == 0) {
    currentAbsorbtion = (constant * volume) / measurements.avg;
  } else {
    currentAbsorbtion = ((constant * volume) / measurements.avg) * peopleFactor;
  }
}

function incorporateFactors() {
  adviceValueFactored = dec2(adviceValue * ambianceFactor * wishesFactor);
}

function processGoalAbsorbtion() {
  goalAbsorbtion = ((constant * volume) / adviceValueFactored) * locationFactor;
}

function processDifference() {
  difference = goalAbsorbtion - currentAbsorbtion;
}

function processQualityPerc() {
  qualityPerc = Math.round(1 / ((measurements.avg / adviceValue) / 100));
}

// General Functions
function fetchValues() {
  fetchNames();
  fetchRoomSpecs();
  fetchFactors();
  fetchMeasurements();
  fetchUsageKeys();
  fetchAdviceValue();
}

function processValues() {
  processCurrentAbsorbtion();
  incorporateFactors();
  processGoalAbsorbtion();
  processDifference();
  processQualityPerc();
}

// Extra Functions
function dec2(x) {
  return Math.round(x * 100) / 100;
}

function dec0(y) {
  return Math.round(y);
}

function calcProductEffect(prod) {
  return dec2(difference / prod);
}

// Push Functions

function pushValues() {

  document.getElementById("resultProjectName").textContent = projectName;
  document.getElementById("resultRoomName").textContent = roomName;
  document.getElementById("resultUsage").textContent = $("#usage").children("option:selected").text();
  document.getElementById("resultVolume").textContent = volume;

  document.getElementById("resultAmbiance").textContent = $("#conditions").children("option:selected").text();
  document.getElementById("resultWishes").textContent = $("#wishes").children("option:selected").text();
  document.getElementById("resultLocation").textContent = $("#location").children("option:selected").text();
  document.getElementById("resultPeopleCount").textContent = peopleCount;

  document.getElementById("resultCurrentAvg").textContent = measurements.avg;
  document.getElementById("resultQualityPerc").textContent = qualityPerc;
  document.getElementById("resultAdviceAvg").textContent = adviceValueFactored;

  //optimaal  1.0
  //goed      0.8
  //hoorbaar  0.6

  document.getElementById("resultCeilingPanel1").textContent = dec0((currentAbsorbtion - adviceValueFactored) / ceilingPanel * 0.6);
  document.getElementById("resultCeilingPanel2").textContent = dec0((currentAbsorbtion - adviceValueFactored) / ceilingPanel * 0.8);
  document.getElementById("resultCeilingPanel3").textContent = dec0((currentAbsorbtion - adviceValueFactored) / ceilingPanel);

  document.getElementById("resultWallPanel1").textContent = dec0((currentAbsorbtion - adviceValueFactored) / wallPanel * 0.6);
  document.getElementById("resultWallPanel2").textContent = dec0((currentAbsorbtion - adviceValueFactored) / wallPanel * 0.8);
  document.getElementById("resultWallPanel3").textContent = dec0((currentAbsorbtion - adviceValueFactored) / wallPanel);

  document.getElementById("resultDesignPanel1").textContent = dec0((currentAbsorbtion - adviceValueFactored) / designPanel * 0.6);
  document.getElementById("resultDesignPanel2").textContent = dec0((currentAbsorbtion - adviceValueFactored) / designPanel * 0.8);
  document.getElementById("resultDesignPanel3").textContent = dec0((currentAbsorbtion - adviceValueFactored) / designPanel);

  document.getElementById("resultFlatPanelSAB1").textContent = dec0((currentAbsorbtion - adviceValueFactored) / flatPanelSAB * 0.6);
  document.getElementById("resultFlatPanelSAB2").textContent = dec0((currentAbsorbtion - adviceValueFactored) / flatPanelSAB * 0.8);
  document.getElementById("resultFlatPanelSAB3").textContent = dec0((currentAbsorbtion - adviceValueFactored) / flatPanelSAB);

  document.getElementById("resultFabricPanel1").textContent = dec0((currentAbsorbtion - adviceValueFactored) / fabricPanel * 0.6);
  document.getElementById("resultFabricPanel2").textContent = dec0((currentAbsorbtion - adviceValueFactored) / fabricPanel * 0.8);
  document.getElementById("resultFabricPanel3").textContent = dec0((currentAbsorbtion - adviceValueFactored) / fabricPanel);

  document.getElementById("resultPaneelVQ1").textContent = dec0((currentAbsorbtion - adviceValueFactored) / paneelVQ * 0.6);
  document.getElementById("resultPaneelVQ2").textContent = dec0((currentAbsorbtion - adviceValueFactored) / paneelVQ * 0.8);
  document.getElementById("resultPaneelVQ3").textContent = dec0((currentAbsorbtion - adviceValueFactored) / paneelVQ);

  document.getElementById("resultSysteemplafondplaat1").textContent = dec0((currentAbsorbtion - adviceValueFactored) / systeemplafondplaat * 0.6);
  document.getElementById("resultSysteemplafondplaat2").textContent = dec0((currentAbsorbtion - adviceValueFactored) / systeemplafondplaat * 0.8);
  document.getElementById("resultSysteemplafondplaat3").textContent = dec0((currentAbsorbtion - adviceValueFactored) / systeemplafondplaat);

  document.getElementById("resultPlafondbaffleCT1").textContent = dec0((currentAbsorbtion - adviceValueFactored) / plafondbaffleCT * 0.6);
  document.getElementById("resultPlafondbaffleCT2").textContent = dec0((currentAbsorbtion - adviceValueFactored) / plafondbaffleCT * 0.8);
  document.getElementById("resultPlafondbaffleCT3").textContent = dec0((currentAbsorbtion - adviceValueFactored) / plafondbaffleCT);
}

function calculate() {
  fetchValues();
  processValues();
  pushValues();
}