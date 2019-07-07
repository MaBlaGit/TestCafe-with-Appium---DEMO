### TestCafe with Appium - DEMO

This repo contains demo how to configure and run TestCafe test on real Android mobile device with usage of Appium.

## Prerequisites

Installed node.js (8+) with npm - https://nodejs.org/en/


Installed Java (JDK)


Installed TestCafe - https://www.npmjs.com/package/testcafe


Installed Appium - http://appium.io/docs/en/about-appium/getting-started/


Installed and configured Android SDK


Installed git

## How to run demo test

1.Download this repo on test machine

2.Connect mobile device to configured test machine (see Prerequisites section)

3.On Android system unlock Developer Options and enable and allow USB debugging

4.On test machine open Terminal, run command __adb devices__

5.Start Appium server by entering command __appium__

6.Go to root of the project and type __npm run test__
