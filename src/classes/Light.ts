import fetch from 'node-fetch';
import { HueAPIOptions } from '../sdk';
import { Light, LightOnOptions } from '../types';

export class Lights {
  options: HueAPIOptions;
  private url: string;

  constructor(options: HueAPIOptions) {
    this.options = options;
    this.url = `${this.options.huburl}/api/${this.options.username}`;
  }

  getAll(): Promise<Light[]> {
    return fetch(`${this.url}/lights`)
      .then(res => res.json())
      .then(json =>
        Object.keys(json).map(x => {
          const light = json[x] as Light;
          light.id = x;
          return light;
        })
      );
  }

  getLight(id: string) {
    return fetch(`${this.url}/lights/${id}`)
      .then(res => res.json())
      .then(json => {
        if (Array.isArray(json)) {
          return { success: !!json[0]['error'], message: json };
        }
        return Object.keys(json).map(x => {
          const light = json[x] as Light;
          light.id = x;
          return light;
        })[0];
      });
  }

  /**
   * @param {string} id The ID of the light
   * @param {number} brightness Optional, brightness of the builb
   * @param {number} hue Optional, hue *ONLY FOR COLOR BULBS*
   * @param {number} sat Optional, saturation of light
   * @param {number[]} xy Optional, the x and y coordinates of a color in CIE color space
   * @param {number} ct Optional, The Mired color temperature of the light. 2012 connected lights are capable of 153 (6500K) to 500 (2000K).
   * @param {'none' | 'select' | 'lselect'} alert Optional,The alert effect,is a temporary change to the bulb’s state, and has one of the following values:
                                                    “none” – The light is not performing an alert effect.
                                                    “select” – The light is performing one breathe cycle.
                                                    “lselect” – The light is performing breathe cycles for 15 seconds or until an "alert": "none" command is received
   * @param {'none' | 'colorloop'} effect Optional, The dynamic effect of the light. Currently “none” and “colorloop” are supported.
   * @param {number} transitiontime Optional, The duration of the transition from the light’s current state to the new state.
   * @param {number} bri_inc Optional, Increments or decrements the value of the brightness.
   * @param {number} sat_inc Optional, Increments or decrements the value of the sat.
   * @param {number} hue_inc Optional, Increments or decrements the value of the hue. 
   * @param {number} ct_inc Optional, Increments or decrements the value of the ct.
   * @param {number} xy_inc Optional, Increments or decrements the value of the xy.
   */
  lightOn(id: string, options: LightOnOptions) {
    const body: any = { on: true };

    // SET BODY PARAMS
    if (options.brightness) {
      body['bri'] = options.brightness;
    }

    if (options.hue) {
      body['hue'] = options.hue;
    }

    if (options.sat) {
      body['sat'] = options.sat;
    }

    if (options.xy) {
      body['xy'] = options.xy;
    }

    if (options.ct) {
      body['ct'] = options.ct;
    }

    if (options.alert) {
      body['alert'] = options.alert;
    }

    if (options.effect) {
      body['effect'] = options.effect;
    }

    if (options.transitiontime) {
      body['transitiontime'] = options.transitiontime;
    }

    if (options.bri_inc) {
      body['bri_inc'] = options.bri_inc;
    }

    if (options.sat_inc) {
      body['sat_inc'] = options.sat_inc;
    }

    if (options.hue_inc) {
      body['hue_inc'] = options.hue_inc;
    }

    if (options.ct_inc) {
      body['ct_inc'] = options.ct_inc;
    }

    if (options.xy_inc) {
      body['xy_inc'] = options.xy_inc;
    }

    return fetch(`${this.url}/lights/${id}/state`, {
      method: 'PUT',
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(json => {
        return { success: !!json[0].success, message: json };
      });
  }

  lightOff(id: string) {
    return fetch(`${this.url}/lights/${id}/state`, {
      method: 'PUT',
      body: JSON.stringify({ on: false })
    })
      .then(res => res.json())
      .then(json => {
        return { success: !!json[0].success, message: json };
      });
  }

  setLightName(id: string, name: string) {
    return fetch(`${this.url}/lights/${id}/state`, {
      method: 'PUT',
      body: JSON.stringify({ name: name })
    })
      .then(res => res.json())
      .then(json => {
        return { success: !!json[0].success, message: json };
      });
  }
}
