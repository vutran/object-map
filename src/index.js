export default function (object, callback) {
  const newObject = Object.assign({}, object);
  Object.keys(object).forEach(prop => {
    newObject[prop] = callback.call(this, newObject[prop], prop, object);
  });
  return newObject;
}
