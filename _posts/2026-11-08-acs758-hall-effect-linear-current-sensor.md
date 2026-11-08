---
title: ACS758 ±50A Hall-Effect Current Sensor Pinout Explorer
date: 2026-11-08T09:04
categories:
  - sensor
tags:
  - ACS758
  - current-sensor
  - Allegro
  - IC-Explorer
description: Explore the ACS758LCB-050B-PFF-T pinout, specifications, and
  typical current-sensing connections with the interactive IC Explorer.
math: false
---
---



&nbsp;

&nbsp;

&nbsp;

IC Interactive IC Explorer

IC

```
<div class="aw-mtabs">
  <div class="aw-mtab on" data-mt="pin">PIN EXPLORER</div>
  <div class="aw-mtab" data-mt="design">DESIGN FILES</div>
  <div class="aw-mtab" data-mt="ds">DATASHEET</div>
</div>

<div class="aw-body">
  <div class="aw-screen" id="awScreen">
    <span class="aw-screen-label" id="awScreenLabel">IC PIN EXPLORER</span>
    <div class="aw-screen-ic" id="awScreenIC">
      <svg id="A13" style="display:block;height:auto;overflow:visible;width:100%" xmlns="http://www.w3.org/2000/svg"></svg>
    </div>
    <div class="aw-screen-canvas" id="awScreenCanvas">
      <canvas id="awOutputCanvas" style="background:#0d1117;display:block;width:100%"></canvas>
    </div>
    <div id="awScreenDS" style="display:none;height:100%;overflow-y:auto;padding:14px">
      <div id="awDSContent" style="color:#8b949e;font-size:14px;line-height:1.7"></div>
    </div>
  </div>

  <div class="aw-ctrl" id="awCtrl">
    <div id="ctrl-pin" style="display:flex;flex-direction:column;gap:8px">
      <div class="aw-det" id="awDET">
        <div class="aw-det-empty" id="awEMPTY">
          <p>Click a pin in the explorer to see its specifications.</p>
        </div>
        <div class="aw-dc" id="awDC">
          <div class="aw-dbar">
            <div class="aw-dbadge" id="awBADGE"></div>
            <div><span class="aw-dpid" id="awDID"></span><span class="aw-dfull" id="awDFULL"></span></div>
          </div>
          <div class="aw-funcs" id="awFUNCS"></div>
          <div class="aw-igrid" id="awIGRID"></div>
          <div class="aw-alts" id="awALTS" style="display:none">
            <span class="aw-albl">Alt Functions</span>
            <div class="aw-achips" id="awACHIPS"></div>
          </div>
          <div class="aw-note" id="awNOTE"></div>
        </div>
      </div>

      <div class="aw-filt">
        <div class="aw-fpbox">
          <span class="aw-fplbl">Highlight by Function</span>
          <div class="aw-fbtns" id="awFBTNS"></div>
        </div>
        <div class="aw-ltog" onclick="awTogList()">
          <span>PIN LIST &nbsp;<b id="awCNT"></b></span>
          <span id="awTICON">▼ SHOW</span>
        </div>
        <div class="aw-plist" id="awPLIST"><div id="awROWS"></div></div>
        <div class="aw-leg" id="awLEG"></div>
      </div>
    </div>

    <div id="ctrl-design" style="display:none;flex-direction:column;gap:8px">
      <div class="aw-ctrl-hdr"><span id="hdrDesign">Design Files</span></div>
      <div class="aw-stabs" id="awStabs">
        <div class="aw-stab on" data-st="schematic">SCHEMATIC</div>
        <div class="aw-stab" data-st="symbol">SYMBOL</div>
        <div class="aw-stab" data-st="footprint">FOOTPRINT</div>
      </div>
      <div id="awSnapStatus"><span id="awSnapStatusTxt">Design-file lookup availability depends on the configured source.</span></div>
      <div class="aw-actions">
        <span class="aw-act-title" id="awDesignTitle">Schematic Symbol</span>
        <div class="aw-btn-row">
          <button class="aw-btn aw-btn-blue" id="awCanZoomIn">＋ Zoom</button>
          <button class="aw-btn aw-btn-blue" id="awCanZoomOut">－ Zoom</button>
          <button class="aw-btn aw-btn-blue" id="awCanReset">⊙ Reset</button>
        </div>
        <div id="awPartMeta">
          <div id="awPartName"></div>
          <div id="awPartDesc"></div>
          <div id="awPartBadges"></div>
        </div>
        <div class="aw-btn-row">
          <button class="aw-btn aw-btn-green" id="awBtnSnapEDA">View on SnapMagic</button>
          <button class="aw-btn aw-btn-gold" id="awBtnDownload">Download</button>
        </div>
        <div id="awDesignInfo"></div>
      </div>
      <div id="awLayerLeg"></div>
    </div>

    <div id="ctrl-ds" style="display:none;flex-direction:column;gap:8px">
      <div class="aw-ctrl-hdr">Datasheet Analyzer</div>
      <div class="aw-upload" id="awUploadArea">
        <div id="awUploadLabel">Choose a datasheet PDF. Processing is performed in your browser.</div>
        <input id="awPdfInput" type="file" accept=".pdf" style="display:none">
        <button class="aw-upload-btn" onclick="document.getElementById('awPdfInput').click()">CHOOSE PDF</button>
        <div id="awFileInfo">No file selected</div>
        <div id="awProgress" style="display:none"><div class="aw-prog"><div class="aw-prog-bar" id="awProgressBar"></div></div></div>
      </div>
      <div class="aw-actions" id="awDsQuick">
        <span class="aw-act-title" id="awQsTitle">Quick Specs</span>
        <div id="awDsQuickBody"></div>
      </div>
      <div class="aw-actions">
        <span class="aw-act-title">Resources</span>
        <div class="aw-btn-row"><button class="aw-btn aw-btn-blue" id="awBtnPdf">↗ Official Datasheet</button></div>
        <div class="aw-btn-row">
          <button class="aw-btn aw-btn-green" id="awLoadSample">Load Sample Data</button>
          <button class="aw-btn aw-btn-red" id="awNewUpload" style="display:none">New Upload</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

> **Pinout display note:** The explorer below is a functional pinout visualization. The ACS758 uses a CB-PFF package with a high-current conductor, not a physical DIP-5 package. Check the manufacturer datasheet for package dimensions, pin identification, limits, and design requirements.

The **ACS758LCB-050B-PFF-T** is a bidirectional Hall-effect current sensor for measuring AC or DC current. This popular ±50 A version has a typical sensitivity of 40 mV/A at a 5 V supply and an output near 2.5 V when no current flows. The measured current passes through the sensor’s isolated primary conductor; the VIOUT pin provides an analog signal for a suitable ADC.

## ACS758LCB-050B-PFF-T quick facts

- **Measurement range:** ±50 A, bidirectional
- **Typical sensitivity:** 40 mV/A at 5 V
- **Zero-current output:** approximately VCC/2 (about 2.5 V at 5 V supply)
- **Supply range:** 3.0–5.5 V
- **Output:** ratiometric analog VIOUT

For microcontroller use, confirm the sensor output remains within the ADC’s permitted input range. The sensor’s primary current path and signal-side connections have different functions; use the datasheet and properly rated wiring for the intended current and installation.