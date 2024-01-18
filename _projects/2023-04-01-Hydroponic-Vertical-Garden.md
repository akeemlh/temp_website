---
title: Hydroponic Vertical Garden
excerpt: "Making a hydroponic vertical garden with ESP32 based greenhouse monitoring and data logging"
collection: portfolio
---
This post is in-progress: When I get round to it this will summarize the project I recently completed to construct a hydroponic vertical tower and enable wifi based monitoring of my garden greenhouse and data logging with the ESP32 microcontroller. This post ~~may~~ wont be updated  with progress pictures throughout the growing season. 

For now, in short: I constructed a hydroponic rain tower from inexpensive PVC materials enabled with envirnoment monitoring, utilising the ESP-32 WROOM Wi-Fi and BT enabled microcontroller, all powered by a small 5-10W solar panel. The PCB schematics for the electronics behind this will be uploaded later

# Construction:
Lines were cut into 100mm diameter 1m length PVC pipe; 3 5cm lines, equally spaced around the radius of the pipe were cut, this was done for several layers of lines, each subsequent layer offset by 60 degrees from the last and vertically 10cm from each other layer. The areas around these cuts were heated with a heat gun to soften the tube and then a 5cm tube was used as a mold to deform these cuts into circular holes hydroponic net cups to rest in. A 100mm hole was cut in the centre of the lid of a 10L PVC bucket through which the PVC tube is inserted. A 5W DC submersible aquarium pump is placed in the bucket and a hose runs from it, through the PVC pipeto the top. The bucket is filled with a nutrient solution made from water soluble plant feed, water and plant-friendly pH buffer. When the pump is on the nutrient solution is pumped to the top of the tower, where it passes through a sheet with several small holes drilled through, the solution drips through these holes falling down the pipe, passing the net cups and plant roots as it falls, providing the roots with aerated, nutrient-imbued water
# Electronics:
<!-- [Schematics] --> The driving constraint on the electronics side was minimising the new components, instead using components that I already had left over from other projects. A custom pcb based on the ESP32-WROOM module was made. The system is powered by 4 18650 batteries, charged by a small 5W solar panel tied to the roof of my greenhouse. Pre-made charging and step-up converter modules were used
## PCB Manufacture
The PCB was made from double sided copper clad fibreglass board using photoresist dry film and liquid solder resist. The method used was based on [this instructable](https://www.instructables.com/PCB-Etching-prototyping/). Vias were made from copper rivets. The process is described in depth [here](/projects/2023-05-01-Making-PCB-at-Home).
<br/>
<img src='images/hydroponicsPCB3.jpg' alt='Printed Circuit Board' width = '350'>
<img src='images/hydroponicsPCB2.jpg' alt='Printed Circuit Board' width = '350'>
<img src='images/hydroponicsPCB1.jpg' alt='Printed Circuit Board' width = '350'>

## ESP32 software
The software behind this project will be uploaded later (NTS: Make sure no personal info like WiFi passwords first). The ESP32 connects to my home WiFi and at 15 minute intervals reads the temperature, humidity and water level within the hydroponic tower and submits this into a google spreadsheet using HTML POST methods and and a google script, then it enters deep sleep mode to conserve energy. At predetermined intervals (Every 2 wake cycles/30 mins during the day and 4 wake cylcles/60 mins at night), the ESP32 flips an electomechanical relay activating a 12v 5W pump for 60 seconds circulating the nutrient bath around the tower. The software is loaded onto the ESP32-WROOM module before being soldered to the PCB using a programmer board, after which all future updates are performed OTA, with the ESP32 module checking for any new software versions everytime it wakes.

# Plants
The system was initially filled with Basil (See image), but is now filled with Lettuce, Pak Choi and Strawberries. Technically shouldn't mix such different plants together but YOLO. 
<br/><img src='images/hydroponicsTower.jpeg' alt='Hydroponic vertical tower with Basil in it' width = '500'>

# Updates:
Wont be here for the best part of the growing season because I'll be away on LTA :(, so no updates, maybe next year
# Notes for version 2:
* Use conductive paint and copper electroplating for more aesthetic/professional looking vias.
* Don't use dry film photoresist, use liquid or pre-sensitised board, they have too poor adhesion with the boards for smaller traces
* Look into using more enviromentally friendly materials than PVC (Thick bamboo??)
* Experiment with using white solder-resist as silkscreen - more professional looking PCB
* Use more rigid sheet to press solder-resist onto board = more even application & more professional looking PCB
* Take more pictures throughout process to make future blog posts less texty/boring
* Don't use pre-made chrager and step up modules, make from scratch
