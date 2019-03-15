const containerProccesses = {
  Titles: [
    'UID',
    'PID',
    'PPID',
    'C',
    'STIME',
    'TTY',
    'TIME',
    'CMD',
  ],
  Processes: [
    [
      'root',
      '13642',
      '882',
      '0',
      '17:03',
      'pts/0',
      '00:00:00',
      '/bin/bash',
    ],
    [
      'root',
      '13735',
      '13642',
      '0',
      '17:06',
      'pts/0',
      '00:00:00',
      'sleep 10',
    ],
  ],
};

module.exports = containerProccesses;
