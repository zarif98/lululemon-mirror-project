# MagicMirror Configuration Walkthrough

I have updated your MagicMirror configuration to set the location to **San Francisco**, enable **Monitor Power Control**, fix the **Screen Orientation**, and add **Sound Controls**.

## Changes Made

### 1. Clock Module
- **Timezone**: Set to `America/Los_Angeles` so the clock displays the correct local time.
- **Coordinates**: Updated latitude and longitude to San Francisco (Lat: 37.77493, Lon: -122.41942) for accurate sun/moon times.

### 2. Weather Modules
- **Location**: Changed from "Los Angeles" to "San Francisco" for both the **Current Weather** and **Weather Forecast** modules.
- **Coordinates**: Switched to using specific latitude and longitude for San Francisco to ensure maximum accuracy with the OpenWeatherMap API.

### 3. Monitor Control (MMM-Remote-Control)
- **Power On**: Changed command to `ddcutil setvcp D6 01` (uses Monitor DDC standard).
    - **Persistence Fix**: Added a chained command to force rotation on wake: `ddcutil setvcp D6 01 && sleep 0.5 && wlr-randr --output HDMI-A-2 --transform 90`. This ensures the screen is always portrait when turned on via the remote.
    - **Optimization**: Set delay to `0.5` seconds. Removed delay caused issues, but 0.5s should be fast enough to feel instant while remaining stable.
- **Power Off**: Changed command to `ddcutil setvcp D6 04`.
- **Power Status**: Implemented file-based state persistence (`monitor_status.txt`) to ensure instant and reliable status reporting to the remote control, bypassing slow hardware queries.
- **Configuration Fix**: Updated the configuration keys to `monitorOnCommand` and `monitorOffCommand` to match the module's requirements.

### 4. Screen Orientation (Wayfire)
- **Output Config**: Updated `~/.config/wayfire.ini` to target `HDMI-A-2` (the currently active display).
- **Rotation**: Set `transform = 90` (Standard Portrait). 

### 5. Sound Control
- **Volume Slider**: I have executed a **custom modification** to the `MMM-Remote-Control` module to add a genuine volume slider.
    - Located in the **Edit Menu** (pencil icon) of the remote.
    - Controls monitor volume (0-100%) via `ddcutil` directly.
- **Mute Toggle**: Click the volume icon next to the slider to Mute/Unmute. The icon changes to a crossed-out speaker when muted.
- **Brightness (Power) Toggle**: Click the **Sun icon** next to the brightness slider to Toggle Monitor Power.
    - Click to Turn OFF (Icon becomes a circle).
    - Click again to Turn ON (Icon becomes a sun).
    - **Sync**: The icon state now syncs across all connected devices in real-time.
    - **Initial State**: The remote now reads the stored state file (`monitor_status.txt`) on connect, guaranteeing the correct icon is shown.
    - Note: Turning ON automatically applies the correct portrait rotation.
- **Volume Feedback**: The mirror now plays a "ding" sound (`Front_Center.wav`) whenever the volume is adjusted or muted, providing auditory confirmation.

### 6. Video Playback
- **YouTube Playback**: I successfully tested launching a specific YouTube video on the mirror's display using `chromium`. 
- **Return to Dashboard**: I can bring back the MagicMirror dashboard by restarting the browser process.

## Troubleshooting

- **Display Refresh Issue**: The mirror display wasn't automatically updating after the process restart. This happens because the browser process (Chromium) is separate from the MagicMirror server process.
- **Resolution**: Triggered a remote refresh command via the `MMM-Remote-Control` API (`action=REFRESH`), which successfully updated the display.

## Verification
I verified the `config/config.js` file and confirmed that:
- The `clock` module now has explicit `timezone`, `lat`, and `lon` settings.
- Both `weather` modules have been updated with San Francisco coordinates.
- **Remote Control** commands use `ddcutil` which was verified to work with your monitor (VCP D6 supported).

Your MagicMirror should now reflect the correct time and weather for San Francisco, and the screen should stay in portrait mode.
