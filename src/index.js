'use strict';

function isPrimitive(value) {
  return isUndefined(value) ||
      isNull(value) ||
      isBoolean(value) ||
      isNumber(value) ||
      isString(value) ||
      isSymbol(value);
}

function isNull(value) {
  return null === value;
}

function isUndefined(value) {
  return 'undefined' === typeof value;
}

function isBoolean(value) {
  return 'boolean' === typeof value;
}

function isNumber(value) {
  return 'number' === typeof value;
}

function isString(value) {
  return 'string' === typeof value;
}

function isSymbol(value) {
  return 'symbol' === typeof value;
}

module.exports = isPrimitive;
