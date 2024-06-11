'use strict';

/**
 * FFLive - live video component-based display component
 *
 * ####Example:
 *
 *     const live = new FFLive({ path, width: 500, height: 350, loop: true });
 *     scene.addChild(live);
 *
 *
 * @class
 */
const FFImage = require('./image');

class FFLive extends FFImage {
  constructor(conf = { x: 0, y: 0, animations: [] }) {
    super({ type: 'live', ...conf });
  }

  /**
   * Add live ffmpeg input
   * ex: loop 1 -t 20  -i imgs/logo.png
   * @private
   */
  addInput(command) {
    command.addInput(this.getPath());
  }
  
  addOutput(command) {
    if (this.conf.audio) {
      command.outputOptions(["-map", `${this.index}:a`]);
    }
  }

  isReady() {
    return new Promise(resolve => resolve());
  }
}

module.exports = FFLive;
