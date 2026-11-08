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
The **ACS758LCB-050B-PFF-T** is a bidirectional Hall-effect current sensor for measuring AC or DC current. This popular ±50 A version has a typical sensitivity of 40 mV/A at a 5 V supply and an output near 2.5 V when no current flows. The measured current passes through the sensor’s isolated primary conductor; the VIOUT pin provides an analog signal for a suitable ADC.

> **Pinout display note:** The explorer below is a functional pinout visualization. The ACS758 uses a CB-PFF package with a high-current conductor, not a physical DIP-5 package. Check the manufacturer datasheet for package dimensions, pin identification, limits, and design requirements.



&nbsp;

&nbsp;

IC Interactive IC Explorer

IC

PIN EXPLORER

DESIGN FILES

DATASHEET

IC PIN EXPLORER

Click a pin in the explorer to see its specifications.

Alt Functions

## ACS758LCB-050B-PFF-T quick facts

- **Measurement range:** ±50 A, bidirectional
- **Typical sensitivity:** 40 mV/A at 5 V
- **Zero-current output:** approximately VCC/2 (about 2.5 V at 5 V supply)
- **Supply range:** 3.0–5.5 V
- **Output:** ratiometric analog VIOUT

For microcontroller use, confirm the sensor output remains within the ADC’s permitted input range. The sensor’s primary current path and signal-side connections have different functions; use the datasheet and properly rated wiring for the intended current and installation.