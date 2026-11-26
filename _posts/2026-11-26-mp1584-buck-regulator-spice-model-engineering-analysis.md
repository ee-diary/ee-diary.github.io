---
title: "MP1584 Buck Regulator SPICE Model: Engineering Analysis"
date: 2026-11-26T09:50
categories:
  - Electronics
  - Power Electronics
  - Spice Model
tags:
  - MP1584
  - buck converter
  - DC-DC converter
  - SPICE
  - circuit analysis
description: Engineering analysis of an MP1584 12 V to 5 V buck regulator,
  including its operating principle, SPICE model, and test conditions.
math: false
---
This document analyzes a switch-mode step-down converter using the **MP1584** high-frequency buck regulator.

## 1. Circuit Overview

The MP1584 circuit converts a higher DC input voltage into a lower, regulated output voltage. The example circuit is designed for:

- Input voltage: 12 V DC
- Target output voltage: 5 V DC
- Maximum output current: approximately 3 A
- Switching frequency: adjustable up to 1.5 MHz

### Main Components

- **U1 — MP1584:** Monolithic high-frequency buck switching regulator with internal power MOSFETs.
- **B1 — Input source:** Provides the 12 V DC input.
- **C1 — Input capacitor:** Suppresses input switching ripple and stabilizes the input supply.
- **L1 — Output inductor:** Stores energy while the high-side switch is conducting and transfers energy to the output while the switch is off.
- **C2 — Output capacitor:** Smooths the output voltage and reduces ripple.
- **D1 — SS34 Schottky diode:** Provides a freewheeling path for the inductor current when the internal switch turns off.
- **R1 and R2:** Feedback divider that determines the regulated output voltage.
- **R3 and R4:** Enable-pin divider used for undervoltage lockout and startup sequencing.
- **RF, RC, and CC:** Frequency-setting and compensation components that affect switching behavior and control-loop stability.
- **L2 — Load:** 24 Ω output load used for the nominal operating test.

### MP1584 Schematic Diagram

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="269.3mm" height="104.2mm"
 viewBox="0 0 5386 2084"
 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  version="1.2" baseProfile="tiny">
<title>MP1584 buck converter circuit schematic</title>
<desc>Created by ee-diary.net</desc>
<defs>
</defs>
<g fill="none" stroke="black" stroke-width="1" fill-rule="evenodd" stroke-linecap="square" stroke-linejoin="bevel" >

<g fill="#001b2e" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="0" y="0" width="5386" height="2084"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2525,1012 L2525,722 L2200,722"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2525,1311 L2525,1215"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1362,905 L1362,722 L1641,722"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1108,620 L1641,620"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1108,620 L1108,722"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1824,214 L1514,214 L1514,519 L1641,519"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2342,519 L2342,214 L2028,214"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2342,519 L2200,519"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1108,1225 L1108,1347"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1108,1225 L1108,976"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1108,1225 L2297,1225 L2297,620 L2200,620"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1580,1814 L1580,824 L1641,824"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3531,519 L3851,519"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3851,681 L3851,519"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3851,1560 L3851,1814"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2525,1814 L2525,1565"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1108,1814 L1108,1601"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1362,1814 L1108,1814"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1362,1814 L1580,1814"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1362,1814 L1362,1159"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2063,1814 L1580,1814"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2063,1814 L2525,1814"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2063,1814 L2063,1855"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3851,519 L4146,519"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M4146,519 L4146,1006"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M4146,1210 L4146,1814"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M4146,1814 L3851,1814"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M813,620 L813,1108"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1108,620 L813,620"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M813,1814 L813,1311"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M1108,1814 L813,1814"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M625,991 L625,1179 L570,1179"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M813,620 L625,620 L625,991"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M625,991 L163,991 L163,1042"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M625,1443 L625,1230 L570,1230"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M813,1814 L625,1814 L625,1443"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M625,1443 L163,1443 L163,1398"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M4537,1083 L4466,1083 L4466,839"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M4466,839 L4466,519 L4146,519"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M4974,966 L4974,839 L4466,839"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M4537,1133 L4456,1133 L4456,1377"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M4456,1377 L4456,1814 L4146,1814"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M4974,1271 L4974,1377 L4456,1377"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2942,519 L3226,519"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2342,519 L2942,519"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2942,519 L2942,1113"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2937,1814 L3851,1814"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2525,1814 L2937,1814"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M2937,1814 L2937,1799 L2942,1799 L2942,1316"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3851,1144 L3851,1306"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3851,935 L3851,1144"/>
</g>

<g fill="none" stroke="#ffd700" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3851,1144 L3516,1144 L3516,824 L2200,824"/>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="1743" y="468" width="356" height="406"/>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2200,519 2099,519 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2006.74,534.461)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >SW</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2149,510.165)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >1</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2200,620 2099,620 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2015.57,635.461)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >EN</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2149,611.165)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >2</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2200,722 2099,722 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1949.31,737.461)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >COMP</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2149,713.165)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >3</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2200,824 2099,824 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2019.99,839.461)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >FB</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2149,815.165)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >4</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1641,519 1743,519 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1768,534.461)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >BST</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1669.91,510.165)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >8</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1641,620 1743,620 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1768,635.461)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >VIN</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1669.91,611.165)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >7</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1641,722 1743,722 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1768,737.461)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >FREQ</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1669.91,713.165)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >6</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1641,824 1743,824 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1768,839.461)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >GND</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1669.91,815.165)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >5</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1736,447.333)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >U1</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1736,920.758)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >MP1584ICS</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="763" y="1169" width="101" height="25"/>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="763" y="1225" width="101" height="25"/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="813,1250 813,1260 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="813,1169 813,1159 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="788,1225 763,1250 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="813,1225 788,1250 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="839,1225 813,1250 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="864,1225 839,1250 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="813,1108 813,1159 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="813,1311 813,1260 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,896,1211.22)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >C1</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,896,1267.76)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >10uF</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="4095" y="1067" width="102" height="26"/>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="4095" y="1123" width="102" height="26"/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4146,1149 4146,1159 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4146,1067 4146,1057 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4171,1123 4197,1149 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4146,1123 4171,1149 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4120,1123 4146,1149 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4095,1123 4120,1149 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4146,1006 4146,1057 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4146,1210 4146,1159 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,4229,1110.22)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >C2</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,4229,1166.76)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >22uF</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3277,519 C3277,493 3292,468 3303,468 "/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3328,519 C3328,493 3318,468 3303,468 "/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3328,519 C3328,493 3343,468 3353,468 "/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3379,519 C3379,493 3369,468 3353,468 "/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3379,519 C3379,493 3389,468 3404,468 "/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3430,519 C3430,493 3414,468 3404,468 "/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3430,519 C3430,493 3440,468 3455,468 "/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M3480,519 C3480,493 3465,468 3455,468 "/>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="3226,519 3277,519 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="3531,519 3480,519 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,3352,427.333)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >L1</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,3347,575.758)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >15uH</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2967,1240 2942,1189 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2942,1189 2917,1240 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2917,1177 2917,1189 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2917,1189 2942,1189 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2917,1240 2942,1240 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2942,1240 2967,1240 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2942,1189 2967,1189 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2917,1177 2922,1177 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2967,1189 2967,1202 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2962,1202 2967,1202 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2942,1266 2942,1240 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2942,1164 2942,1189 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2942,1316 2942,1266 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2942,1113 2942,1164 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2995,1220.22)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >D1</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2995,1277.76)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >SS34</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="3831" y="732" width="41" height="153"/>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="3851,935 3851,885 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="3851,681 3851,732 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,3904,785.223)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >R1</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,3904,841.758)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >210k</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="3831" y="1357" width="41" height="152"/>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="3851,1306 3851,1357 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="3851,1560 3851,1509 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,3904,1409.22)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >R2</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,3904,1466.76)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >40.2k</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2475,1128 2576,1128 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2475,1098 2576,1098 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2525,1098 2525,1062 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2525,1128 2525,1164 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2525,1215 2525,1164 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2525,1012 2525,1062 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2608,1115.22)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >CC</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2608,1171.76)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >150pF</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="2505" y="1362" width="41" height="152"/>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2525,1565 2525,1514 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2525,1311 2525,1362 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2578,1414.22)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >RC</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,2578,1471.76)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >125k</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="1342" y="956" width="40" height="152"/>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1362,905 1362,956 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1362,1159 1362,1108 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1414,1008.22)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >RF</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1419,1074.76)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >100k</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="1088" y="773" width="40" height="152"/>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1108,722 1108,773 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1108,976 1108,925 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1160,825.223)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >R3</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1160,881.758)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >100k</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="1108" cy="620" r="13"/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1911,163 1911,265 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1941,163 1941,265 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1941,214 1977,214 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1911,214 1875,214 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1824,214 1875,214 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2028,214 1977,214 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1869,143.333)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >C4</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1869,310.758)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >100nF</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="2342" cy="519" r="13"/>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="1088" y="1398" width="40" height="152"/>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1108,1347 1108,1398 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="1108,1601 1108,1550 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1160,1450.22)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >R4</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,1160,1506.76)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >24.9k</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="87,1093 239,1093 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="138,1118 189,1118 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="87,1321 239,1321 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="138,1347 189,1347 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="163,1144 163,1169 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="163,1194 163,1220 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="163,1245 163,1271 " />
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="163,1296 163,1321 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="163,1042 163,1093 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="163,1398 163,1347 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,271,1145.22)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >B1</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,271,1201.76)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >12V</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="1108" cy="1225" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="1580" cy="1814" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="3851" cy="519" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="3851" cy="1814" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="2525" cy="1814" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="1108" cy="1814" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="1362" cy="1814" r="13"/>
</g>

<g fill="#000000" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="4974" cy="1118" r="102"/>
</g>

<g fill="none" stroke="#606060" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M5020,1144 C5015,1159 5004,1174 4974,1169 "/>
</g>

<g fill="none" stroke="#606060" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M4969,1118 C4969,1128 4979,1133 4984,1133 "/>
</g>

<g fill="none" stroke="#606060" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M5020,1093 C5020,1121 4994,1133 4984,1133 "/>
</g>

<g fill="none" stroke="#606060" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M5020,1093 C5015,1078 5004,1062 4974,1067 "/>
</g>

<g fill="none" stroke="#606060" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M4969,1118 C4969,1108 4979,1103 4984,1103 "/>
</g>

<g fill="none" stroke="#606060" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4974,1017 4974,1067 " />
</g>

<g fill="none" stroke="#606060" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4974,1169 4974,1220 " />
</g>

<g fill="none" stroke="#606060" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<path vector-effect="none" fill-rule="evenodd" d="M5020,1144 C5020,1115 4994,1103 4984,1103 "/>
</g>

<g fill="none" stroke="#feffff" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="5050,1017 5070,986 " />
</g>

<g fill="none" stroke="#feffff" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="5091,1067 5121,1047 " />
</g>

<g fill="none" stroke="#feffff" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="5101,1118 5136,1118 " />
</g>

<g fill="none" stroke="#feffff" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="5091,1169 5121,1189 " />
</g>

<g fill="none" stroke="#feffff" stroke-opacity="1" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="5050,1220 5070,1250 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4974,966 4974,1017 " />
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4974,1271 4974,1220 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,5159,1078.22)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >LAMP</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,5129,987.758)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >5V</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,5007,921.758)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >LOAD=24Ohms</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#e69b00" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2063,1855 2063,1906 " />
</g>

<g fill="none" stroke="#e69b00" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2012,1906 2114,1906 " />
</g>

<g fill="none" stroke="#e69b00" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2038,1931 2088,1931 " />
</g>

<g fill="none" stroke="#e69b00" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="2058,1956 2068,1956 " />
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="2063" cy="1814" r="13"/>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="4639" y="1032" width="101" height="152"/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4674,1083 4639,1083 " />
</g>

<g fill="#feffff" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="4689" cy="1133" r="15"/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4674,1133 4639,1133 " />
</g>

<g fill="#feffff" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="4689" cy="1083" r="15"/>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4537,1083 4639,1083 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,4565.91,1074.16)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >1</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="4537,1133 4639,1133 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,4565.91,1124.16)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >2</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,4632,1011.33)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >J2</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,4632,1230.76)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >CONN-H2</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="4146" cy="519" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="4146" cy="1814" r="13"/>
</g>

<g fill="#1a1a1a" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<rect x="366" y="1128" width="102" height="153"/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="432,1179 468,1179 " />
</g>

<g fill="#feffff" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="417" cy="1230" r="15"/>
</g>

<g fill="none" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="432,1230 468,1230 " />
</g>

<g fill="#feffff" fill-opacity="1" stroke="#b4b9be" stroke-opacity="1" stroke-width="13" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="417" cy="1179" r="15"/>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="570,1179 468,1179 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,519,1170.16)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >1</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<polyline fill="none" vector-effect="none" points="570,1230 468,1230 " />
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,519,1221.16)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#c8c8c8" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >2</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,360,1108.33)"
font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="62" font-weight="400" font-style="normal" 
 >J1</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="14" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#ffffff" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,360,1326.76)"
font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
>
<text fill="#ffffff" fill-opacity="1" stroke="none" xml:space="preserve" x="0" y="0" font-family="Arial" font-size="40" font-weight="400" font-style="normal" 
 >CONN-H2</text>
</g>

<g fill="none" stroke="none" transform="matrix(1,0,0,1,0,0)"
font-family="Arial" font-size="9" font-weight="400" font-style="normal" 
>
</g>

<g fill="none" stroke="#c8c8c8" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="813" cy="620" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="813" cy="1814" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="625" cy="991" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="625" cy="1443" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="4466" cy="839" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="4456" cy="1377" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="2942" cy="519" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="2937" cy="1814" r="13"/>
</g>

<g fill="#004000" fill-opacity="1" stroke="#c4a000" stroke-opacity="1" stroke-width="8" stroke-linecap="round" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"
font-family="MS Shell Dlg 2" font-size="58.2083" font-weight="400" font-style="normal" 
>
<circle cx="3851" cy="1144" r="13"/>
</g>
</g>
</svg>

## 2. Operating Principle

### 1. Switch-on interval

When the internal high-side switch turns on, current flows from the input source through the output inductor L1 and into the output. The inductor current rises, storing energy in its magnetic field.

### 2. Switch-off interval

When the switch turns off, the inductor maintains current flow. It discharges through the catch diode D1, output capacitor C2, and load.

### 3. Closed-loop regulation

The feedback pin measures a portion of the output voltage through the R1/R2 divider. The internal error amplifier adjusts the PWM duty cycle to maintain the regulated output voltage when the input voltage or load changes.

## 3. Graphical Analysis

### DC output waveform

The output voltage waveform should settle near 5 V after the startup transient. Startup time depends on the soft-start implementation, feedback divider, compensation components, output capacitance, and load.

![MP1584 PWM and output voltage signal waveform](</assets/img/posts/blog-images/MP1584 PWM and output voltage signal waveform.png>)

### Switching-node waveform

The switching node toggles between approximately 0 V and 12 V. The precise transition shape depends on parasitic inductance, capacitance, diode recovery, MOSFET switching speed, and PCB layout.

![MP1584 PWM signal waveform](</assets/img/posts/blog-images/MP1584 PWM signal waveform.png>)

### Fourier analysis

The Fourier spectrum of the switching node contains energy at the fundamental switching frequency and its harmonics. A switching regulator therefore requires a suitably designed output filter and PCB layout to control ripple and electromagnetic interference.

![Fourier Spectrum of MP1584 PWM signal](</assets/img/posts/blog-images/Fourier Spectrum of MP1584 PWM signal.png>)

### PWM Switching Frequency

The MP1584 switching frequency is set by the resistor **RF** connected from the FREQ pin to ground. In this circuit, RF is **100 kΩ**, giving an estimated switching frequency of approximately **1.1 MHz**. The frequency can be estimated using the following relationship:

**fSW (Hz) ≈ 1.1 × 1011 RF (Ω)**

Substituting RF = 100 kΩ:

**fSW ≈ (1.1 × 1011) / (100 × 103) = 1.1 × 106 Hz = 1.1 MHz**

This is a nominal estimate; the actual switching frequency can vary with device and component tolerances. Also, the behavioral SPICE model may not reproduce the datasheet frequency exactly unless its oscillator is calibrated, so verify the simulated switching-node waveform or measure the hardware.

## 4. MP1584 SPICE Model

This document uses a behavioral MP1584 SPICE subcircuit for circuit simulation. Its characteristics include:

- 8-pin MP1584 pin-order mapping
- Behavioral oscillator
- Error amplifier
- Soft-start ramp
- Peak-current comparator
- Enable and undervoltage-lockout logic
- High-side switch model
- Bootstrap charging behavior
- Thermal shutdown: **not modeled**
- Full production tolerances: **not modeled**

MP1584 Spice Code

```
* ============================================================================
* MP1584 Spice Model
* Direct Current Source Model
* Version : 1.2
* Author  : ee-diary.net
* Date    : 2026-11-26
*
* Change log
*   1.0  Original behavioural model
*   1.2  2026-11-26  Faster COMP start-up: EA current limit x10 (gm and DC gain unchanged),
*                    COMP clamped by a current source (-0.9 V .. 1.42 V)
*   1.1  2026-11-26  Error amp converted to a direct current source (Norton form of
*                    the old BEA voltage source + REA 3.33MEG); soft-start ramp
*                    shortened 1.5 ms -> 150U for quick simulations (see SOFT-START note)
*
* SOFT-START note: the ramp time is the PULSE rise time of V1 below.
*   1.5M = 1.5 ms (original, realistic), 150U = 0.15 ms (quick simulation).
* Pin order = package pin order:  
* 1 SW, 2 EN, 3 COMP, 4 FB, 5 GND, 6 FREQ, 7 VIN, 8 BST
* ============================================================================
.SUBCKT MP1584 SW EN COMP FB GND FREQ VIN BST

* ---------------- Oscillator: ramp current = 8.5 * (1V / RFREQ) -----------
VBIAS  NBIAS GND DC 0 PULSE(0 1 10N 10N 1M 10 20)
VSENS  NBIAS FREQ DC 0
F1     GND SAW VSENS 8.5
CSAW   SAW GND 100P
RSAW   SAW GND 1G
S1     SAW GND SAW GND SWRST
* clock: CLK is pulled to 5 V through 200 ohm while the ramp is low
S2     CLK V5CLK SAW GND SWCLK
V10    V5CLK GND DC 5
RCLK   CLK GND 10K

* ---------------- Soft start + error amplifier (gm = 200/3.33MEG) ---------
V1     NSS GND DC 0 PULSE(0 0.8 0 150U 150U 10 20)
* Error amp: gm = 60 uS (same as original), output limit +/-4.3 uA (10x the original +/-0.43 uA)
* so COMP charges 10x faster during start-up; DC gain 200 and COMP range unchanged
BEA    GND COMP I=0.5*(abs(60E-6*(V(NSS,GND)-V(FB,GND))+4.3E-6)-abs(60E-6*(V(NSS,GND)-V(FB,GND))-4.3E-6))
* COMP voltage limits -0.9 V ... 1.42 V (same as the original EA output range)
BCLMP  COMP GND I=(V(COMP,GND)-0.5*(abs(V(COMP,GND)+0.9)-abs(V(COMP,GND)-1.42)+0.52))/10
REA    COMP GND 3.33MEG

* ---------------- Current sense (R_SENSE 25 mohm, gain 4.44) --------------
RSENSE VIN DRN 25M
BISNS  ISO GND V=0.5*(abs(4.44*(V(VIN,GND)-V(DRN,GND)))-abs(4.44*(V(VIN,GND)-V(DRN,GND))-5)+5)
RISO   ISO NBLK 100
RBLANK NBLK NSNS 1K
CBLANK NSNS GND 100P

* ---------------- Slope compensation: 0.85 V + 0.5 * ramp ----------------
EAVS   NSL NOFF SAW GND 0.5
V3     NOFF GND DC 0.85
BSUM1  NSUM GND V=V(NSNS,GND)+V(NSL,GND)

* ---------------- Peak-current comparator (gain 1E3, 0..5 V) --------------
BPEAK  NPK GND V=0.5*(abs(1E3*(V(NSUM,GND)-V(COMP,GND)))-abs(1E3*(V(NSUM,GND)-V(COMP,GND))-5)+5)

* ---------------- SR latch: two cross-coupled NOR gates -------------------
*   NQ  = NOR(NPK , NQB)     (U3, SR_LATCH_A)
*   NQB = NOR(NQ  , CLK)     (U4, SR_LATCH_B)
BU3    NQR GND V=5*(0.5-0.5*(abs(4*(V(NPK,GND)-2.5)+0.5)-abs(4*(V(NPK,GND)-2.5)-0.5)))*(0.5-0.5*(abs(4*(V(NQB,GND)-2.5)+0.5)-abs(4*(V(NQB,GND)-2.5)-0.5)))
RU3    NQR NQ 1K
CU3    NQ GND 8.7P
BU4    NQBR GND V=5*(0.5-0.5*(abs(4*(V(NQ,GND)-2.5)+0.5)-abs(4*(V(NQ,GND)-2.5)-0.5)))*(0.5-0.5*(abs(4*(V(CLK,GND)-2.5)+0.5)-abs(4*(V(CLK,GND)-2.5)-0.5)))
RU4    NQBR NQB 1K
CU4    NQB GND 8.7P
* U5 now a non-inverting buffer: NQ high = switch ON (set by CLK, reset by TRIP)
BU5    NON GND V=5*(0.5+0.5*(abs(4*(V(NQ,GND)-2.5)+0.5)-abs(4*(V(NQ,GND)-2.5)-0.5)))

* ---------------- Enable / UVLO ------------------------------------------
R1EN   EN NENP 3MEG
V8     NENP GND DC 3
V6     NUVT GND DC 3
V7     NENT GND DC 1.35
BUVLO  NUV GND V=0.5*(abs(100*(V(VIN,GND)-V(NUVT,GND)))-abs(100*(V(VIN,GND)-V(NUVT,GND))-5)+5)
BENC   NEN GND V=0.5*(abs(100*(V(EN,GND)-V(NENT,GND)))-abs(100*(V(EN,GND)-V(NENT,GND))-5)+5)
* U10 EN_UVLO_AND
BU10   NEUR GND V=5*(0.5+0.5*(abs(4*(V(NUV,GND)-2.5)+0.5)-abs(4*(V(NUV,GND)-2.5)-0.5)))*(0.5+0.5*(abs(4*(V(NEN,GND)-2.5)+0.5)-abs(4*(V(NEN,GND)-2.5)-0.5)))
RU10   NEUR NEU 1K
CU10   NEU GND 7P
* U11 DRIVE_ENABLE_AND
BU11   NDER GND V=5*(0.5+0.5*(abs(4*(V(NEU,GND)-2.5)+0.5)-abs(4*(V(NEU,GND)-2.5)-0.5)))*(0.5+0.5*(abs(4*(V(NON,GND)-2.5)+0.5)-abs(4*(V(NON,GND)-2.5)-0.5)))
RU11   NDER NDRV 1K
CU11   NDRV GND 7P

* ---------------- High-side switch and gate drive -------------------------
BSUM2  NDRS GND V=V(NDRV,GND)+V(SW,GND)
RG     NDRS NGATE 50
RPD    NGATE SW 100K
M1     DRN NGATE SW SW NMOSFET
C1     SW GND 100P

* ---------------- Bootstrap supply: floating 5 V source riding on SW -------
* No voltage source / diode: BST is charged by a current source toward SW+5 V
* (ideal diode + 5 ohm, written with abs()). SW+5 is computed, not a circuit node.
BCHG   GND BST I=0.5*((V(SW,GND)+5-V(BST,GND))+abs(V(SW,GND)+5-V(BST,GND)))/5
RBST   BST GND 100MEG

* ---------------- Models --------------------------------------------------
.MODEL SWRST SW(VT=0.55 VH=0.45 RON=200 ROFF=1G)
.MODEL SWCLK SW(VT=0.55 VH=0.45 RON=200 ROFF=1G)
.MODEL NMOSFET NMOS(VTO=2 KP=2.2 RD=0.02)
.MODEL DIODE D(IS=2.52N RS=0.1 CJO=4P N=1.75 M=0.4)

.ENDS MP1584
```

**Simulation note:** The model is intended for functional and educational analysis. It is not a replacement for the manufacturer’s qualified device model or hardware validation.

### Pin Mapping


| Subcircuit pin | MP1584 pin | Function |
| -------------- | ---------- | ----------------- |
| SW | 1 | Switching node |
| EN | 2 | Enable input |
| COMP | 3 | Compensation node |
| FB | 4 | Feedback input |
| GND | 5 | Ground |
| FREQ | 6 | Frequency setting |
| VIN | 7 | Input supply |
| BST | 8 | Bootstrap supply |


## 5. Test-Circuit Configuration

- Input voltage: 12 V
- Target output voltage: 5 V
- Typical switching frequency: 100 kHz to 1.5 MHz, depending on RF
- Load: 24 Ω resistive load
- Output-capacitor ripple must be verified using the selected ESR
- PCB layout and loop-area routing should follow the MP1584 datasheet

### MP1584 Test Circuit Schematic

![](</assets/img/posts/blog-images/MP1584 test circuit diagram.png>)

Before constructing the converter:

1. Verify the feedback-divider ratio.
2. Confirm that RF produces an acceptable switching frequency.
3. Verify the inductor saturation-current and RMS-current ratings.
4. Check the input and output capacitor voltage and ripple-current ratings.
5. Confirm that the diode and PCB copper can handle the required current.
6. Measure the switching node, feedback node, and output with suitable probes.

## 6. Downloadable Files

- [MP1584 SPICE model](https://github.com/ee-diary/ee-diary.github.io/blob/main/assets/download/models/spice/MP1584IC.LIB)

## 7. Performance Summary


| Parameter | Specification |
| ---------------------- | ----------------------------------------------------------- |
| Input voltage range | 4.5 V to 28 V |
| Nominal input voltage | 12 V |
| Output voltage | 5 V, adjustable through the feedback divider |
| Maximum output current | Up to 3 A |
| Switching frequency | Up to 1.5 MHz |
| Typical efficiency | 80% to 90%, depending on load and component selection |
| Protection features | Over-current protection and thermal shutdown on the real IC |


