export function hydrate(ids, rows, keyName = 'id') {
  const lookup = rows.reduce((acc, row) => {
    acc[row[keyName]] = row;
    return acc;
  }, {});
  return ids.map((id) => lookup[id] || null);
}

export default hydrate;
