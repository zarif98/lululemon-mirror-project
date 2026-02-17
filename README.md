# Lululemon Mirror Project

A customized MagicMirror² installation running on a Raspberry Pi 5 with an **LM40SAMFHD700AG25WV** controller board.

This project is configured for a vertical (portrait) display used as a smart mirror, featuring advanced hardware control and remote management.

## Hardware
*   **Computer**: Raspberry Pi 5 (running Wayfire/Wayland)
*   **Display Controller**: LM40SAMFHD700AG25WV
*   **Control Interface**: DDC/CI via `ddcutil`
*   **Power System**:
    *   **Integrated Supply**: MEGMEET MP118TX (Monitor's internal PSU).
    *   **Integration**: Tapping into the **12V rail**.
    *   **Conversion**: [Klnuoxj 12V to 5V 3A USB-C Buck Converter](https://www.amazon.com/Klnuoxj-Converter-Interface-Waterproof-Compatible/dp/B0CRVW7N2J) powering the Raspberry Pi 5 directly from the monitor board.

## Key Features

### 🖥️ Display Control
*   **Portrait Mode**: The system is permanently configured for 90-degree rotation.
*   **Smart Power**:
    *   Turn the monitor ON/OFF remotely.
    *   **Auto-Rotation Fix**: Automatically re-applies rotation rules when the monitor wakes up to prevent orientation reset issues.
    *   **State Persistence**: Uses a file-based lock (`monitor_status.txt`) to ensure the remote control always shows the correct power state, even after reboots or browser refreshes.

### 🔊 Sound Management
*   **Hardware Volume**: Direct control of the monitor's built-in speakers via DDC commands.
*   **Mute Toggle**: One-click mute/unmute from the remote interface.
*   **Auditory Feedback**: Plays a subtle "ding" sound when volume is adjusted to confirm the command was received.

### 📱 Remote Interface
*   **Enhanced UI**: Custom brightness and volume sliders added to `MMM-Remote-Control`.
*   **Real-time Sync**: Power and volume changes are synchronized instantly across all connected remote devices.

## Configuration Details
*   **Location**: San Francisco, CA (TimeZone: `America/Los_Angeles`).
*   **Weather**: Localized for SF coordinates for maximum accuracy.

## Installation

This repository is a fork of [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror).
To use this configuration, clone this repository and install dependencies:

```bash
git clone https://github.com/zarif98/lululemon-mirror-project.git
cd lululemon-mirror-project
npm install
```

## Credits
Based on the amazing work by the [MagicMirror² Community](https://magicmirror.builders/).
