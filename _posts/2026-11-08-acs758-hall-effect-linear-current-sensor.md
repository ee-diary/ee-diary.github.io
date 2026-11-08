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
The **ACS758LCB-050B-PFF-T** is a bidirectional Hall-effect current sensor for measuring AC or DC current. This popular ±50 A version has a typical sensitivity of 40 mV/A at a 5 V supply and an output near 2.5 V when no current flows. The measured current passes through the sensor’s isolated primary conductor; the VIOUT pin provides an analog signal for a suitable ADC.

> **Pinout display note:** The explorer below is a functional pinout visualization. The ACS758 uses a CB-PFF package with a high-current conductor, not a physical DIP-5 package. Check the manufacturer datasheet for package dimensions, pin identification, limits, and design requirements.

<!-- IC Explorer: shared assets and part configuration -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ee-diary/ic-explorer-assets@main/core/ic-explorer-core.css">
<script src="https://cdn.jsdelivr.net/gh/ee-diary/ic-explorer-assets@6fface9535e2117ecf24038a3e5fd6e41a09eadb/configs/analog/acs758-config.js"></script>

<!-- IC Explorer scaffold -->
<div id="a13wrap">
  <div class="aw">
    <div class="aw-hdr">
      <div class="aw-hdr-l">
        <svg class="aw-logo" viewBox="0 0 100 100" aria-hidden="true">
          <rect x="18" y="18" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-width="5"/>
          <rect x="30" y="30" width="40" height="40" rx="4" fill="currentColor" opacity=".12"/>
          <path d="M18 30H4M18 46H4M18 62H4M82 30h14M82 46h14M82 62h14M30 18V4M50 18V4M70 18V4M30 82v14M50 82v14M70 82v14" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
        </svg>
        <div>
          <span class="aw-title" id="hdrTitle">IC</span>
          <span class="aw-sub" id="hdrSub">Interactive IC Explorer</span>
        </div>
      </div>
      <div style="align-items:center;display:flex;gap:8px">
        <span class="aw-badge" id="hdrBadge">IC</span>
        <div class="aw-dot"></div>
      </div>
    </div>

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
  </div>
  <div class="aw-tt" id="awTT"></div>
</div>

<!-- PDF.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>
<script>
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
}
</script>

<!-- Shared IC Explorer scripts. Keep this load order. -->
<script src="https://cdn.jsdelivr.net/gh/ee-diary/ic-explorer-assets@main/renderers/renderer-factory.js"></script>
<script src="https://cdn.jsdelivr.net/gh/ee-diary/ic-explorer-assets@main/renderers/dip-renderer.js"></script>
<script src="https://cdn.jsdelivr.net/gh/ee-diary/ic-explorer-assets@main/renderers/qfp-renderer.js"></script>
<script src="https://cdn.jsdelivr.net/gh/ee-diary/ic-explorer-assets@main/renderers/custom-board-renderer.js"></script>
<script src="https://cdn.jsdelivr.net/gh/ee-diary/ic-explorer-assets@main/core/ic-explorer-base.js"></script>

<script>
(function() {
  var C = window.IC_CONFIG;
  if (!C) {
    console.error('ACS758 IC Explorer config failed to load.');
    return;
  }

  document.getElementById('hdrTitle').textContent = C.partName;
  document.getElementById('hdrSub').textContent =
    'Interactive IC Explorer • ' + C.package + ' • ' + C.pinCount + ' pins';
  document.getElementById('hdrBadge').textContent = C.package;
  document.getElementById('hdrDesign').textContent = 'Design Files — ' + C.partName;
  document.getElementById('awQsTitle').textContent = 'Quick Specs — ' + C.partName;

  if (C.datasheetURL) {
    document.getElementById('awBtnPdf').onclick = function() {
      window.open(C.datasheetURL, '_blank', 'noopener');
    };
  }

  var renderer = RendererFactory.getRenderer(C.package, C.partName);
  ICExplorer.init(C, renderer);
})();
</script>

## ACS758LCB-050B-PFF-T quick facts

- **Measurement range:** ±50 A, bidirectional
- **Typical sensitivity:** 40 mV/A at 5 V
- **Zero-current output:** approximately VCC/2 (about 2.5 V at 5 V supply)
- **Supply range:** 3.0–5.5 V
- **Output:** ratiometric analog VIOUT

For microcontroller use, confirm the sensor output remains within the ADC’s permitted input range. The sensor’s primary current path and signal-side connections have different functions; use the datasheet and properly rated wiring for the intended current and installation.