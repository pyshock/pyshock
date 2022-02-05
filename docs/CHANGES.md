# Version 0.8.1

- **[gamepad]**    increased tolerance on joystick direction
- **[gamepad]**    improved gamepad button mapping wizard
- **[randomizer]** fixed input validation error in web randomizer


# Version 0.8 released on 2022-01-26

- **[randomizer]** web page for configuration as alternative to the existing command line tool
- **[web]**        improved layout of webapp
- **[web]**        require authentication for static pages as well
- **[gamepad]**    experimental support for games with gamepads


# Version 0.7 released on 2021-11-14

- **[receiver]** added support for Patpet T150 shock collars operating on 915 MHz
- **[receiver]** added support for second kind of Wodondog style shock collars
- **[rest]**     provide additional information about receivers via the REST API.
- **[internal]** dedicated action for keep-awake message to improve logging


# Version 0.6 released on 2021-10-12

- **[fix]**      improved reliability for PAC receivers by tuning off frequency to reduce
                 internal interferences in the HackRF hardware. 
                 This is a fix for a regression introduced in version 0.5.
- **[cli]**      action parameter is now case insensitive
- **[rest]**     added support for Bearer authentication to REST webservice
            

# Version 0.5 released on 2021-08-22
- **[package]**  made remoshock available on pip3 Python-repository
- **[package]**  changed name from pyshock to remoshock
- **[setup]**    on first run, a setup assistant helps with creating remoshock.ini
- **[receiver]** renamed "nameless" to "wodondog" receiver
- **[receiver]** added support for Petrainer


# Version 0.4 released on 2021-08-09

- **[receiver]** added support for a Nameless "Dog Shock Collar" depicted with a yellow remote control
- **[change]**   renamed pyshock.ini-setting button to channel
- **[internal]** internal URH invokation now supports ASK / OOK
- **[internal]** implemented a scheduler (e. g. for keep awake messages)
- **[internal]** automatically lint code and run tests on commits and pull requests


# Version 0.3 released on 2021-07-27

- **[randomizer]**   added start_delay_min_minutes and start_delay_max_minutes parameters
- **[randomizer]** / **[serve]** try to inhibit operating system hibernation, warning users if that was not possible
- **[doc]**         improved troubleshooting documentation
- **[development]** fixed linter warnings and minor bugs


# Version 0.2 released on 2021-07-24

- **[randomizer]**  replaced max_runtime_minutes with runtime_min_minutes and runtime_max_minutes
- **[core]**        suppress SDR debug message, unless --verbose is specified
- **[development]** fixed broken log messages in SDR-mock mode


# Version 0.1 released 2021-07-23

The very first release. Please report bugs, request features and give feedback on documentation and error messages.
