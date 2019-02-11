steps to reproduce: (linux)
===================

```
$ npx gatsby develop

    'a' should be displayed in the terminal

open browser and open console:

    'a' should be displayed in the console

edit entry.json, change data to 'b'

$ npx gatsby develop

    'b' should be displayed in the terminal

open browser and open console:

    'a' should be displayed in the console, this is wrong !
```
