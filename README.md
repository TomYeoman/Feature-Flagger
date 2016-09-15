Incorporate flag driven development into your development today!

This repo contains everything you need to adjust features in real time, whilst getting important feedback on your new system.

Contains:

  Server: An express server running on node handles the fetching / updating of feature flags, aswell as powering the front end admin panel for controlling your system flags
  
  Admin Panel: A react page served up by our express server establishes a socket connection allowing for instant updates back to the server
  
  Example application using feature flagger: This is a simple standalone HTML5 web page which is being served up the flags onLoad via websockets. Any changes done on the Admin panel will be reported back to here in real time (This would be your application)
  
  Technology:
  
    - Node
    - React (Webpacked)
    - ES6 (Transpiled by Babel)
    - Socket.IO
    - Express
