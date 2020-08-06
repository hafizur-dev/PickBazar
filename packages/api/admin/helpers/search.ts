import Fuse from 'fuse.js';

// const options: Fuse.FuseOptions<any> = {
//   keys: ['author', 'tags'],
// };

export default function search(
  dataToSearch: any,
  basedOnOptionsKey: string[],
  searchByValue: string = ''
) {
  if (searchByValue.trim()) {
    let fuse = new Fuse(dataToSearch, {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: basedOnOptionsKey,
    });
    let result = fuse.search(searchByValue).map((r) => r.item);

    return result;
  }

  return dataToSearch;
}
