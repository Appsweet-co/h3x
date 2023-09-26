import { expect, test } from "bun:test";
import { convert } from "./convert.js";

test('should return the correct h3cell for lat, lng, and res', () => {
  const { h3cell } = convert({});
  expect(h3cell).toBe('84754a9ffffffff');
});

test('should return the correct h3cell for cell', () => {
  const { h3cell } = convert({ cell: '84754a9ffffffff' });
  expect(h3cell).toBe('84754a9ffffffff');
});

test('should return the correct h3resolution for lat, lng, and res', () => {
  const { h3resolution } = convert({});
  expect(h3resolution).toBe(4);
});

test('should return the correct h3resolution for cell', () => {
  const { h3resolution } = convert({ cell: '84754a9ffffffff' });
  expect(h3resolution).toBe(4);
});

test('should return the correct h3center for lat, lng, and res', () => {
  const { h3center } = convert({});
  expect(h3center).toEqual([-0.17830069939109103, -0.054174542564932905]);
});


test('should return the correct h3center for cell', () => {
  const { h3center } = convert({ cell: '84754a9ffffffff' });
  expect(h3center).toEqual([-0.17830069939109103, -0.054174542564932905]);
});

test('should return the correct inputs for lat, lng, and res', () => {
  const { inputs } = convert({});
  expect(inputs).toEqual([0, 0, 4]);
});

test('should return the correct inputs for cell', () => {
  const { inputs } = convert({ cell: '84754a9ffffffff' });
  expect(inputs).toEqual(['84754a9ffffffff']);
});
