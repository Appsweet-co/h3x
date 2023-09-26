import { expect, test } from "bun:test";
import { convert } from "./convert.js";

test('should return the correct h3cell', () => {
  const { h3cell } = convert({});
  expect(h3cell).toBe('84754a9ffffffff');
});

test('should return the correct h3resolution', () => {
  const { h3resolution } = convert({});
  expect(h3resolution).toBe(4);
});

test('should return the correct h3center', () => {
  const { h3center } = convert({});
  expect(h3center).toEqual([-0.17830069939109103, -0.054174542564932905]);
});

test('should return the correct inputs', () => {
  const { inputs } = convert({});
  expect(inputs).toEqual([0, 0, 4]);
});
