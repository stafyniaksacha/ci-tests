/* global describe, it */
'use strict';

const
  isPrimitive = require('../../src/index'),
  should = require('should');

describe('Testing if values are primitive', () => {

  describe('Boolean', () => {
    it('should be considered as primitive value', () => {
      should(isPrimitive(true)).be.true();
      should(isPrimitive(false)).be.true();
      should(isPrimitive(Boolean(true))).be.true();
      should(isPrimitive(Boolean(false))).be.true();
    });
  });

  describe('Numbers', () => {
    it('should be considered as primitive value', () => {
      should(isPrimitive(42)).be.true();
      should(isPrimitive(4.2)).be.true();
      should(isPrimitive(Number(42))).be.true();
      should(isPrimitive(Number(4.2))).be.true();
    });
  });

  describe('String', () => {
    it('should be considered as primitive value', () => {
      should(isPrimitive('foo')).be.true();
      should(isPrimitive(String('foo'))).be.true();
    });
  });

  describe('Symbol', () => {
    it('should be considered as primitive value', () => {
      should(isPrimitive(Symbol('foo'))).be.true();
    });
  });

  describe('Undefined', () => {
    it('should be considered as primitive value', () => {
      should(isPrimitive(undefined)).be.true();
    });
  });

  describe('Null', () => {
    it('should be considered as primitive value', () => {
      should(isPrimitive(null)).be.true();
    });
  });

  describe('Object', () => {
    it('pojo should not be considered as primitive value', () => {
      should(isPrimitive({})).be.false();
    });
  });

});
