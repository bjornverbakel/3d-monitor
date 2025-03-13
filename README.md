# 3D monitor & operating system

This is a portfolio website in the style of a Windows 98 operating system. It includes various openable applications, that are displayed inside their individual windows. The opened applications are displayed on the bottom taskbar. The website is shown on top of a 3D-model of a monitor, with the use of [ThreeJS Drei](https://github.com/pmndrs/drei). Furthermore, the website contains a comment system in the form of a guestbook.

## Features

- Fully interactable windows
- Taskbar that shows opened application
- Fullscreen mode
- 3D-environment
- File Explorer directory navigation system
- Comment system
- Account login/registration

## Demo video

![Demo](os/portfolio-website/img/monitor-vid.mp4)

## Installation

1. Install Drei

```bash
  npm install
```

2. Build your project when ready

```bash
  npm run build
```

### To get the comment system to work

3. Install [XAMPP](https://www.apachefriends.org/index.html)

4. Open XAMPP.

5. Open your XAMPP folder by pressing the `Explorer` button on the control panel

6. Drag the project file into the `htdocs` folder

7. Start the `Apache` and `MySQL` modules

6. Search for [localhost/[project-filename]](localhost/project-filename) in your browser

## License

[Operating System Portfolio Website](https://git.fhict.nl/I529052/portfolio) © 2024 by [Bjorn Verbakel](https://git.fhict.nl/I529052) is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1)
