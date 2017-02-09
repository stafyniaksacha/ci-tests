'use strict';

function isPrimitive(value) {
  return isUndefined(value) ||
      isNull(value) ||
      isBoolean(value) ||
      isNumber(value) ||
      isString(value);
}

function isNull(value) {
  return 'object' === typeof value && null ===value;
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

module.exports = isPrimitive;