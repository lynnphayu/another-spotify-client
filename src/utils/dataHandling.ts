export function getSmallestSizeImage(images, size) {
  let url = images.find(({ width }) => width === size)?.url;
  images.length > 0 && !url && (url = images[images.length - 1].url);
  return url;
}

export function getArtistsNames(artists: Record<string, unknown>[] = []) {
  const artistName = artists.reduce((acc, { name }, i) => {
    if (i === 1) return acc.concat("ft. ").concat(name + " ");
    return acc.concat(name + " ");
  }, "");
  return artistName;
}

export function genreAggregate(genres: string[] = []) {
  let genre = genres[0];
  genres.length > 1 && (genre = genre.concat(", " + genres[1] + " "));
  if (genres.length > 3) {
    const more = (
      <p key={"voerflow"} className="inline text-gray-500">
        {"+" + (genres.length - 3) + " more"}
      </p>
    );
    genre = [genre, more];
  }
  return genre;
}

export function upperFirst(
  operandString = "",
  splitter = " ",
  replaceWithSpace = true
) {
  return operandString
    .split(splitter)
    .reduce(
      (acc, w) =>
        w[0]
          ? acc.concat(
              w[0].toUpperCase() +
                w.slice(1, w.length) +
                (replaceWithSpace ? " " : splitter)
            )
          : acc,
      ""
    );
}
