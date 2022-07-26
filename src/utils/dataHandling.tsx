import { Image } from '../types';

export function getSmallestSizeImage(images: Image[] = [], size: number) {
  let url = images.find(({ width }) => width === size)?.url;
  images.length > 0 && !url && (url = images[images.length - 1].url);
  return url;
}

export function getArtistsNames(artists: Record<string, unknown>[] = []) {
  const artistName = artists.reduce((acc, { name }, i) => {
    if (i === 1) return acc.concat('ft. ').concat(name + ' ');
    return acc.concat(name + ' ');
  }, '');
  return artistName;
}

export function genreAggregate(genres: string[] = []) {
  // if genre length is 0, return
  if (genres.length === 0) return '';
  let genre = genres[0];
  genres.length > 1 && (genre = genre.concat(', ' + genres[1] + ' '));
  if (genres.length > 3) {
    // const more = (
    //   <p key={'overflow'} className="inline text-gray-500">
    //     {'+' + (genres.length - 3) + ' more'}
    //   </p>
    // );
    return genre.concat('+' + (genres.length - 3) + ' more');
  }
  return genre;
}

export function upperFirst(operandString = '', splitter = ' ', replaceWithSpace = true) {
  return operandString
    .split(splitter)
    .reduce(
      (acc, w) =>
        w[0]
          ? acc.concat(
              w[0].toUpperCase() + w.slice(1, w.length) + (replaceWithSpace ? ' ' : splitter)
            )
          : acc,
      ''
    );
}
