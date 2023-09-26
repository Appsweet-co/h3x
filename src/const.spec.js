import { describe, expect, test } from 'bun:test';
import { H3_RESOLUTIONS } from './const';

describe('H3_RESOLUTIONS', () => {

  test('should return resolutions as defined', () => {
    expect(Object.keys(H3_RESOLUTIONS).length).toBe(2);
    expect(H3_RESOLUTIONS.SIX_HUNDRED_SQ_MILES).toBe(4);
    expect(H3_RESOLUTIONS.ONE_HUNDRED_SQ_MILES).toBe(5);
  });

});
