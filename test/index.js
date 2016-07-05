import test from 'ava';
import objectMap from '../src/index';

test('appends an "!" to each property', t => {
  const a = {
    firstName: 'Vu',
    lastName: 'Tran',
  };
  const b = {
    firstName: 'Vu!',
    lastName: 'Tran!',
  };
  const m = v => `${v}!`;
  t.deepEqual(objectMap(a, m), b);
});

test('multiplies each property by 2', t => {
  const a = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4,
  };
  const b = {
    num1: 2,
    num2: 4,
    num3: 6,
    num4: 8,
  };
  const m = v => v * 2;
  t.deepEqual(objectMap(a, m), b);
});

test('matches the callback parameters', t => {
  t.plan(4);
  const a = {
    firstName: 'Vu',
    lastName: 'Tran',
  };
  const b = {
    firstName: 'Vu!',
    lastName: 'Tran!',
  };
  let objCheck = false;
  const m = (v, p, o) => {
    if (p === 'firstName') {
      t.is(v, 'Vu');
    } else if (p === 'lastName') {
      t.is(v, 'Tran');
    }
    // if haven't yet checked the object
    if (!objCheck) {
      // deep match the callback object and the original object
      t.deepEqual(o, a);
      // prevent re-checking
      objCheck = true;
    }
    return `${v}!`;
  };
  t.deepEqual(objectMap(a, m), b);
});
