const forever = require('forever');

/**

 */
class Monitor {

  static start(argv){
        var child = new (forever.Monitor)('index.js', {
          max: 1,
          args: [argv],
          logFile             : 'forever.log',
          outFile             : 'out.log',
          errFile : 'err.log'
        });

        child.on('exit', function () {
          console.log('exit event called');
        });

        // forever.startServer(child);
        forever.startDaemon('index.js', {
          max: 1,
          args: [argv],
          logFile             : 'forever.log',
          outFile             : 'out.log',
          errFile : 'err.log'
        });
        // child.start();
      }

}

module.exports = Monitor;
