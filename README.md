# Back4App-SoundCloud-example
An example app to demonstrate the auth process using SoundCloud login.

## Install

    $ git clone https://github.com/alencarlucas/Back4App-SoundCloud-example.git
    $ cd Back4App-SoundCloud-example
    $ npm install

## Configure

  - Create a Back4App App. You can follow [this tutorial](https://www.back4app.com/docs/platform/get-started/new-parse-app)
  - Create a SoundCloud App [Here](http://soundcloud.com/you/apps/new)
  - Paste your Back4App and SoundCloud credentials in the index.html file
  - Deploy a package.json with the below code. You can follow [this tutorial](https://www.back4app.com/docs/platform/get-started/cloud-functions)
  
  ```
    ...
    {
        "dependencies": {
            "@nataliacs/soundcloud-auth-parse": "^3.0.2",
        }
    }
    ...
  ```
  
  - [Contact Back4App Support](mailto:community@back4app.com) and pass the APP ID asking for SoundCloud server-side configurations

## Try It

  - Run `npm start` in your terminal
  - Open [http://localhost:8080](http://localhost:8080)
