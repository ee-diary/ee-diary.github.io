---
title: "R2104 IC Explorer : High- and low-side MOSFET/IGBT gate driver"
date: 2026-11-08T10:43
categories:
  - integrated-circuits
  - power-electronics
tags:
  - IR2104
  - gate-driver
  - MOSFET
  - half-bridge
description: Explore the IR2104 DIP-8 pinout, key specifications, and typical
  half-bridge gate-driver applications.
math: false
---


```
<div class="aw-hdr">
  <div class="aw-hdr-l">
    <svg class="aw-logo" viewBox="0 0 100 100" aria-hidden="true">
      <rect x="18" y="18" width="64" height="64" rx="8"
            fill="none" stroke="currentColor" stroke-width="5"/>
      <rect x="30" y="30" width="40" height="40" rx="4"
            fill="currentColor" opacity=".12"/>
      <path d="M18 30H4M18 46H4M18 62H4
               M82 30h14M82 46h14M82 62h14
               M30 18V4M50 18V4M70 18V4
               M30 82v14M50 82v14M70 82v14"
            fill="none" stroke="currentColor" stroke-width="4"
            stroke-linecap="round"/>
    </svg>
    <div>
      <span class="aw-title" id="hdrTitle">IR2104</span>
      <span class="aw-sub" id="hdrSub">Interactive IC Explorer</span>
    </div>
  </div>
  <div style="align-items:center;display:flex;gap:8px">
    <span class="aw-badge" id="hdrBadge">DIP-8</span>
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
      <svg id="A13"
           style="display:block;height:auto;overflow:visible;width:100%"
           xmlns="http://www.w3.org/2000/svg"></svg>
    </div>

    <div class="aw-screen-canvas" id="awScreenCanvas">
      <canvas id="awOutputCanvas"
              style="background:#0d1117;display:block;width:100%"></canvas>
    </div>

    <div id="awScreenDS"
         style="display:none;height:100%;overflow-y:auto;padding:14px">
      <div id="awDSContent"
           style="color:#8b949e;font-size:14px;line-height:1.7"></div>
    </div>
  </div>

  <div class="aw-ctrl" id="awCtrl">

    <!-- Pin explorer controls -->
    <div id="ctrl-pin" style="display:flex;flex-direction:column;gap:8px">
      <div class="aw-det" id="awDET">
        <div class="aw-det-empty" id="awEMPTY">
          <p>Click a pin in the explorer to see its specifications.</p>
        </div>
        <div class="aw-dc" id="awDC">
          <div class="aw-dbar">
            <div class="aw-dbadge" id="awBADGE"></div>
            <div>
              <span class="aw-dpid" id="awDID"></span>
              <span class="aw-dfull" id="awDFULL"></span>
            </div>
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
        <div class="aw-plist" id="awPLIST">
          <div id="awROWS"></div>
        </div>
        <div class="aw-leg" id="awLEG"></div>
      </div>
    </div>

    <!-- Design files controls -->
    <div id="ctrl-design" style="display:none;flex-direction:column;gap:8px">
      <div class="aw-ctrl-hdr">
        <span id="hdrDesign">Design Files — IR2104</span>
      </div>
      <div class="aw-stabs" id="awStabs">
        <div class="aw-stab on" data-st="schematic">SCHEMATIC</div>
        <div class="aw-stab" data-st="symbol">SYMBOL</div>
        <div class="aw-stab" data-st="footprint">FOOTPRINT</div>
      </div>
      <div id="awSnapStatus">
        <span id="awSnapStatusTxt">Choose a design-file source to look for available files.</span>
      </div>
      <div class="aw-actions">
        <span class="aw-act-title" id="awDesignTitle">Schematic Symbol</span>
        <div style="background:#0d1117;border:1px solid #21262d;border-radius:4px;display:flex;gap:4px;margin-bottom:8px;padding:4px">
          <button class="aw-src-btn on" data-src="snapeda">SnapMagic</button>
          <button class="aw-src-btn" data-src="local">Local Render</button>
        </div>
        <div class="aw-btn-row">
          <button class="aw-btn aw-btn-blue" id="awCanZoomIn">＋ Zoom</button>
          <button class="aw-btn aw-btn-blue" id="awCanZoomOut">－ Zoom</button>
          <button class="aw-btn aw-btn-blue" id="awCanReset">⊙ Reset</button>
        </div>
        <div id="awPartMeta" style="display:none">
          <div id="awPartName"></div>
          <div id="awPartDesc"></div>
          <div id="awPartBadges"></div>
        </div>
        <div class="aw-btn-row" style="margin-top:4px">
          <button class="aw-btn aw-btn-green" id="awBtnSnapEDA">View on SnapMagic</button>
          <button class="aw-btn aw-btn-gold" id="awBtnDownload">Download</button>
        </div>
        <div id="awDesignInfo"></div>
      </div>
      <div id="awLayerLeg" style="display:none"></div>
    </div>

    <!-- Datasheet controls -->
    <div id="ctrl-ds" style="display:none;flex-direction:column;gap:8px">
      <div class="aw-ctrl-hdr">Datasheet Analyzer</div>
      <div class="aw-upload" id="awUploadArea">
        <div id="awUploadLabel">
          Choose an IR2104 datasheet PDF. Processing is performed in your browser.
        </div>
        <input id="awPdfInput" type="file" accept=".pdf" style="display:none">
        <button class="aw-upload-btn"
                onclick="document.getElementById('awPdfInput').click()">
          CHOOSE PDF
        </button>
        <div id="awFileInfo">No file selected</div>
        <div id="awProgress" style="display:none">
          <div class="aw-prog">
            <div class="aw-prog-bar" id="awProgressBar"></div>
          </div>
        </div>
      </div>

      <div class="aw-actions" id="awDsQuick">
        <span class="aw-act-title" id="awQsTitle">Quick Specs — IR2104</span>
        <div id="awDsQuickBody"></div>
      </div>

      <div class="aw-actions">
        <span class="aw-act-title">Resources</span>
        <div class="aw-btn-row">
          <button class="aw-btn aw-btn-blue" id="awBtnPdf">↗ Official Datasheet</button>
        </div>
        <div class="aw-btn-row">
          <button class="aw-btn aw-btn-green" id="awLoadSample">Load Sample Data</button>
          <button class="aw-btn aw-btn-red" id="awNewUpload" style="display:none">New Upload</button>
        </div>
      </div>
    </div>

  </div>
</div>
```



&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## About the IR2104

The IR2104 is a high-voltage half-bridge gate-driver IC designed to drive one high-side and one low-side MOSFET or IGBT. Its **HO** output drives the high-side switch relative to the floating **VS** pin, while **LO** drives the low-side switch relative to **COM**.

The IR2104 uses a logic input (**IN**) and shutdown input (**SD**). It includes internal dead-time behavior and undervoltage lockout. It is a gate driver—not a complete motor controller, inverter, or power supply. Consult the current manufacturer datasheet for the truth table, limits, and design details for your exact package and suffix.

## IR2104 Specifications


| Parameter | Summary |
| ----------------------- | --------------------------------------------------------------------------------------- |
| Device function | High- and low-side MOSFET/IGBT gate driver |
| Outputs | HO (floating high-side output) and LO (low-side output) |
| Logic inputs | IN and SD |
| Driver supply (VCC) | Typically operated within 10–20 V; confirm conditions and limits in the datasheet |
| High-side offset rating | Up to 600 V, subject to datasheet conditions; this is not the gate-drive supply voltage |
| Package shown | DIP-8 configuration; confirm the suffix and package of the device you have |
| Protection and timing | Undervoltage lockout and internal dead-time behavior |


Electrical limits and switching performance depend on operating conditions. Do not treat the IC Explorer visualization as a substitute for the manufacturer datasheet.

## IR2104 Applications

- Half-bridge MOSFET or IGBT power stages
- Switching DC–DC converter stages
- Motor-drive power stages when used with a suitable control circuit
- Inverter legs and other half-bridge switching circuits

Typical high-side operation uses a bootstrap diode and capacitor between the driver supply and floating supply pins. Component selection, gate resistance, decoupling, layout, and switch timing must follow the datasheet and the requirements of the power stage.

**Safety:** Half-bridge circuits may contain dangerous voltages and high fault currents. Use appropriate isolation, current limiting, rated components, and safe test procedures. The 600 V offset rating is not permission to handle or test an energized high-voltage circuit without suitable expertise and equipment.