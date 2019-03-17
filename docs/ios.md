# iOS Deployment Information

[Ionic 4](https://ionicframework.com/) allows us to deploy the application on iOS. This can only be done using macOS.

## Project Setup

To get started, we must first open the project's `platforms/ios` folder in [Xcode](https://developer.apple.com/xcode/). We then select the project root, enable the **Automatically manage signing** option under the **Signing** section, and select a development team.
Xcode will now attempt to automatically prepare provisioning and signing. The app can now be run.


## Running the project

Before running, everytime significant changes are made to the project, we must run the following command :
```shell
$ ionic cordova prepare ios
```
Once this is done, we simply need to select the target device in Xcode and press play.