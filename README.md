# AutoRightClick (Skysim)

**Version:** 4  
**Creator:** Fear  
**Minecraft Version:** 1.8.9 

---

## Description

**AutoRightClick** is a Minecraft mod designed for the Skysim server that automates right-clicking with a specific tool (the *Rocky Ultra-Fusion Drill ZQ-9000*) while maintaining full control over your mouse. It also includes mouse release functionality, prevents accidental slot changes during automation, and supports a toggleable mouse ungrab feature.  

This mod is perfect for players who want to automate repetitive actions while playing other games or AFK.  

---

## Features

- **Auto Right-Click**  
  Automatically right-clicks with the *Rocky Ultra-Fusion Drill ZQ-9000* in your hotbar.  
  - Automatically finds the drill in your hotbar.  
  - Locks your hotbar slot to the drill while active.  
  - Prevents manual slot changes to avoid breaking automation.  

- **Mouse Release GUI**  
  Opens a GUI that releases your mouse cursor while AutoRightClick is active, allowing you to interact with other windows or chat without breaking the automation.  

- **Toggle Command**  
  - Command: `/autorightclick`  
  - Toggles the AutoRightClick feature on/off.  
  - Restores your previous hotbar slot when disabled.  
  - Displays status messages in chat.  

- **Automatic Disable on GUI Close**  
  If the Mouse Release GUI is closed manually, AutoRightClick automatically disables and restores your mouse control.  

- **Mouse Ungrab Toggle**  
  - Press **U** to toggle mouse ungrab independently of AutoRightClick.  
  - Allows free mouse movement outside the game without closing the mod.  

- **Packet Interception**  
  - Blocks slot change packets while AutoRightClick is active to prevent accidental slot changes.  


---

## Installation

1. Make sure you have **ChatTriggers** installed for your Minecraft client.  
2. Place the unzipped folder in your `ChatTriggers/modules/` folder.  
3. Launch Minecraft  
4. Use `/autorightclick` to toggle the module on or off.  **U** to toggle mouse ungrab

---

## Usage

1. Ensure the *Rocky Ultra-Fusion Drill ZQ-9000* is in your hotbar.  
2. Type `/autorightclick` to enable AutoRightClick.  
3. The mod will automatically:  
   - Select the drill in your hotbar.  
   - Open the mouse release GUI.  
   - Start right-clicking at a set interval.  
4. To disable, type `/autorightclick` again or close the mouse release GUI.  
5. Press **U** to toggle mouse ungrab independently if needed.  

---

## Notes

- Designed specifically for the **Skysim** server.  
- Prevents manual hotbar changes while AutoRightClick is active.  
- Click interval can be adjusted in the code (`250ms` currently).  
- The mod outputs all status messages and errors in the in-game chat.  


