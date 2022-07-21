import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useLocation, useMatch } from 'react-router-dom';

import Artists from '../components/artists';
import ArtistBriefCard from '../components/commonBriefCard';
import Tracks from '../components/tracks';
import { Artist } from '../types/tracks';
import { genreAggregate, getSmallestSizeImage, upperFirst } from '../utils/dataHandling';

export default function ArtistDetail() {
  const [key, setKey] = useState(Math.random);
  const history = useNavigate();
  let { path, url } = useMatch();
  const { artist: { name = '', images = [], genres } = {} } = useLocation()?.state as {
    artist: Artist;
  };
  const t = [
    {
      album: {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
            },
            href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
            id: '0QHgL1lAIqAw0HtD7YldmP',
            name: 'DJ Khaled',
            type: 'artist',
            uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4'
            },
            href: 'https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4',
            id: '3TVXtAsR1Inumwj472S9r4',
            name: 'Drake',
            type: 'artist',
            uri: 'spotify:artist:3TVXtAsR1Inumwj472S9r4'
          }
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/5nNtpPsSUgb9Hlb3dF1gXa'
        },
        href: 'https://api.spotify.com/v1/albums/5nNtpPsSUgb9Hlb3dF1gXa',
        id: '5nNtpPsSUgb9Hlb3dF1gXa',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273efaecb4b9cbae7c120d14617',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02efaecb4b9cbae7c120d14617',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851efaecb4b9cbae7c120d14617',
            width: 64
          }
        ],
        name: 'POPSTAR (feat. Drake)',
        release_date: '2020-07-17',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:5nNtpPsSUgb9Hlb3dF1gXa'
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
          },
          href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
          id: '0QHgL1lAIqAw0HtD7YldmP',
          name: 'DJ Khaled',
          type: 'artist',
          uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4'
          },
          href: 'https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4',
          id: '3TVXtAsR1Inumwj472S9r4',
          name: 'Drake',
          type: 'artist',
          uri: 'spotify:artist:3TVXtAsR1Inumwj472S9r4'
        }
      ],
      disc_number: 1,
      duration_ms: 200221,
      explicit: true,
      external_ids: {
        isrc: 'USSM12004501'
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/6EDO9iiTtwNv6waLwa1UUq'
      },
      href: 'https://api.spotify.com/v1/tracks/6EDO9iiTtwNv6waLwa1UUq',
      id: '6EDO9iiTtwNv6waLwa1UUq',
      is_local: false,
      is_playable: true,
      name: 'POPSTAR (feat. Drake)',
      popularity: 85,
      preview_url:
        'https://p.scdn.co/mp3-preview/f06dde25172503546a3b136fba9822a89866a2d3?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:6EDO9iiTtwNv6waLwa1UUq'
    },
    {
      album: {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
            },
            href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
            id: '0QHgL1lAIqAw0HtD7YldmP',
            name: 'DJ Khaled',
            type: 'artist',
            uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4'
            },
            href: 'https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4',
            id: '3TVXtAsR1Inumwj472S9r4',
            name: 'Drake',
            type: 'artist',
            uri: 'spotify:artist:3TVXtAsR1Inumwj472S9r4'
          }
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/3O6ywzP5LE5msmuBBTpaIN'
        },
        href: 'https://api.spotify.com/v1/albums/3O6ywzP5LE5msmuBBTpaIN',
        id: '3O6ywzP5LE5msmuBBTpaIN',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2737db0d21fc5696a3fcedfb933',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e027db0d21fc5696a3fcedfb933',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048517db0d21fc5696a3fcedfb933',
            width: 64
          }
        ],
        name: 'GREECE (feat. Drake)',
        release_date: '2020-07-16',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:3O6ywzP5LE5msmuBBTpaIN'
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
          },
          href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
          id: '0QHgL1lAIqAw0HtD7YldmP',
          name: 'DJ Khaled',
          type: 'artist',
          uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4'
          },
          href: 'https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4',
          id: '3TVXtAsR1Inumwj472S9r4',
          name: 'Drake',
          type: 'artist',
          uri: 'spotify:artist:3TVXtAsR1Inumwj472S9r4'
        }
      ],
      disc_number: 1,
      duration_ms: 218901,
      explicit: true,
      external_ids: {
        isrc: 'USSM12004502'
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/35RJhm1pEovTBwnNR0zWad'
      },
      href: 'https://api.spotify.com/v1/tracks/35RJhm1pEovTBwnNR0zWad',
      id: '35RJhm1pEovTBwnNR0zWad',
      is_local: false,
      is_playable: true,
      name: 'GREECE (feat. Drake)',
      popularity: 83,
      preview_url:
        'https://p.scdn.co/mp3-preview/730e8f890f342ab3efd4b734a314cfea2407efb7?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:35RJhm1pEovTBwnNR0zWad'
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
            },
            href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
            id: '0QHgL1lAIqAw0HtD7YldmP',
            name: 'DJ Khaled',
            type: 'artist',
            uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
          }
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/3HhZbSJdhOqMSaRbEt3gtw'
        },
        href: 'https://api.spotify.com/v1/albums/3HhZbSJdhOqMSaRbEt3gtw',
        id: '3HhZbSJdhOqMSaRbEt3gtw',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2737b219c19829e83a86cc9786c',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e027b219c19829e83a86cc9786c',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048517b219c19829e83a86cc9786c',
            width: 64
          }
        ],
        name: 'Grateful',
        release_date: '2017-06-22',
        release_date_precision: 'day',
        total_tracks: 23,
        type: 'album',
        uri: 'spotify:album:3HhZbSJdhOqMSaRbEt3gtw'
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
          },
          href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
          id: '0QHgL1lAIqAw0HtD7YldmP',
          name: 'DJ Khaled',
          type: 'artist',
          uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s'
          },
          href: 'https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s',
          id: '1uNFoZAHBGtllmzznpCI3s',
          name: 'Justin Bieber',
          type: 'artist',
          uri: 'spotify:artist:1uNFoZAHBGtllmzznpCI3s'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0VRj0yCOv2FXJNP47XQnx5'
          },
          href: 'https://api.spotify.com/v1/artists/0VRj0yCOv2FXJNP47XQnx5',
          id: '0VRj0yCOv2FXJNP47XQnx5',
          name: 'Quavo',
          type: 'artist',
          uri: 'spotify:artist:0VRj0yCOv2FXJNP47XQnx5'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1anyVhU62p31KFi8MEzkbf'
          },
          href: 'https://api.spotify.com/v1/artists/1anyVhU62p31KFi8MEzkbf',
          id: '1anyVhU62p31KFi8MEzkbf',
          name: 'Chance the Rapper',
          type: 'artist',
          uri: 'spotify:artist:1anyVhU62p31KFi8MEzkbf'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865'
          },
          href: 'https://api.spotify.com/v1/artists/55Aa2cqylxrFIXC767Z865',
          id: '55Aa2cqylxrFIXC767Z865',
          name: 'Lil Wayne',
          type: 'artist',
          uri: 'spotify:artist:55Aa2cqylxrFIXC767Z865'
        }
      ],
      disc_number: 1,
      duration_ms: 288876,
      explicit: true,
      external_ids: {
        isrc: 'USSM11703300'
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/1jYiIOC5d6soxkJP81fxq2'
      },
      href: 'https://api.spotify.com/v1/tracks/1jYiIOC5d6soxkJP81fxq2',
      id: '1jYiIOC5d6soxkJP81fxq2',
      is_local: false,
      is_playable: true,
      name: "I'm the One (feat. Justin Bieber, Quavo, Chance the Rapper & Lil Wayne)",
      popularity: 65,
      preview_url:
        'https://p.scdn.co/mp3-preview/f6fdecfbaae1ed54bcfbae1bc2b088e8807c9783?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 5,
      type: 'track',
      uri: 'spotify:track:1jYiIOC5d6soxkJP81fxq2'
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
            },
            href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
            id: '0QHgL1lAIqAw0HtD7YldmP',
            name: 'DJ Khaled',
            type: 'artist',
            uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
          }
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/3HhZbSJdhOqMSaRbEt3gtw'
        },
        href: 'https://api.spotify.com/v1/albums/3HhZbSJdhOqMSaRbEt3gtw',
        id: '3HhZbSJdhOqMSaRbEt3gtw',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2737b219c19829e83a86cc9786c',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e027b219c19829e83a86cc9786c',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048517b219c19829e83a86cc9786c',
            width: 64
          }
        ],
        name: 'Grateful',
        release_date: '2017-06-22',
        release_date_precision: 'day',
        total_tracks: 23,
        type: 'album',
        uri: 'spotify:album:3HhZbSJdhOqMSaRbEt3gtw'
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
          },
          href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
          id: '0QHgL1lAIqAw0HtD7YldmP',
          name: 'DJ Khaled',
          type: 'artist',
          uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H'
          },
          href: 'https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H',
          id: '5pKCCKE2ajJHZ9KAiaK11H',
          name: 'Rihanna',
          type: 'artist',
          uri: 'spotify:artist:5pKCCKE2ajJHZ9KAiaK11H'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/2EMAnMvWE2eb56ToJVfCWs'
          },
          href: 'https://api.spotify.com/v1/artists/2EMAnMvWE2eb56ToJVfCWs',
          id: '2EMAnMvWE2eb56ToJVfCWs',
          name: 'Bryson Tiller',
          type: 'artist',
          uri: 'spotify:artist:2EMAnMvWE2eb56ToJVfCWs'
        }
      ],
      disc_number: 1,
      duration_ms: 204664,
      explicit: true,
      external_ids: {
        isrc: 'USSM11705088'
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/45XhKYRRkyeqoW3teSOkCM'
      },
      href: 'https://api.spotify.com/v1/tracks/45XhKYRRkyeqoW3teSOkCM',
      id: '45XhKYRRkyeqoW3teSOkCM',
      is_local: false,
      is_playable: true,
      name: 'Wild Thoughts (feat. Rihanna & Bryson Tiller)',
      popularity: 63,
      preview_url:
        'https://p.scdn.co/mp3-preview/a1a92ff710bfbff7e7768922c5616f4571e2cc97?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 4,
      type: 'track',
      uri: 'spotify:track:45XhKYRRkyeqoW3teSOkCM'
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
            },
            href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
            id: '0QHgL1lAIqAw0HtD7YldmP',
            name: 'DJ Khaled',
            type: 'artist',
            uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
          }
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/1YgX8BWKleDlDeCOFklRfz'
        },
        href: 'https://api.spotify.com/v1/albums/1YgX8BWKleDlDeCOFklRfz',
        id: '1YgX8BWKleDlDeCOFklRfz',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273fa2741071b31bb94cb4232ae',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02fa2741071b31bb94cb4232ae',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851fa2741071b31bb94cb4232ae',
            width: 64
          }
        ],
        name: 'Father Of Asahd',
        release_date: '2019-05-17',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:1YgX8BWKleDlDeCOFklRfz'
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
          },
          href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
          id: '0QHgL1lAIqAw0HtD7YldmP',
          name: 'DJ Khaled',
          type: 'artist',
          uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s'
          },
          href: 'https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s',
          id: '1uNFoZAHBGtllmzznpCI3s',
          name: 'Justin Bieber',
          type: 'artist',
          uri: 'spotify:artist:1uNFoZAHBGtllmzznpCI3s'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1anyVhU62p31KFi8MEzkbf'
          },
          href: 'https://api.spotify.com/v1/artists/1anyVhU62p31KFi8MEzkbf',
          id: '1anyVhU62p31KFi8MEzkbf',
          name: 'Chance the Rapper',
          type: 'artist',
          uri: 'spotify:artist:1anyVhU62p31KFi8MEzkbf'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0VRj0yCOv2FXJNP47XQnx5'
          },
          href: 'https://api.spotify.com/v1/artists/0VRj0yCOv2FXJNP47XQnx5',
          id: '0VRj0yCOv2FXJNP47XQnx5',
          name: 'Quavo',
          type: 'artist',
          uri: 'spotify:artist:0VRj0yCOv2FXJNP47XQnx5'
        }
      ],
      disc_number: 1,
      duration_ms: 260000,
      explicit: true,
      external_ids: {
        isrc: 'USSM11806283'
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/03nPEoQOYMuDe7KmGljpmd'
      },
      href: 'https://api.spotify.com/v1/tracks/03nPEoQOYMuDe7KmGljpmd',
      id: '03nPEoQOYMuDe7KmGljpmd',
      is_local: false,
      is_playable: true,
      name: 'No Brainer (feat. Justin Bieber, Chance the Rapper & Quavo)',
      popularity: 62,
      preview_url:
        'https://p.scdn.co/mp3-preview/607449ba733224db80be0c262f96034c9ed28ae7?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 13,
      type: 'track',
      uri: 'spotify:track:03nPEoQOYMuDe7KmGljpmd'
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
            },
            href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
            id: '0QHgL1lAIqAw0HtD7YldmP',
            name: 'DJ Khaled',
            type: 'artist',
            uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
          }
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/1yX1ZzW6TBvQ1qeNpbiONH'
        },
        href: 'https://api.spotify.com/v1/albums/1yX1ZzW6TBvQ1qeNpbiONH',
        id: '1yX1ZzW6TBvQ1qeNpbiONH',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2735de048eb9ca94916178afb20',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e025de048eb9ca94916178afb20',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048515de048eb9ca94916178afb20',
            width: 64
          }
        ],
        name: 'Victory',
        release_date: '2010-03-02',
        release_date_precision: 'day',
        total_tracks: 12,
        type: 'album',
        uri: 'spotify:album:1yX1ZzW6TBvQ1qeNpbiONH'
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
          },
          href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
          id: '0QHgL1lAIqAw0HtD7YldmP',
          name: 'DJ Khaled',
          type: 'artist',
          uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3ipn9JLAPI5GUEo4y4jcoi'
          },
          href: 'https://api.spotify.com/v1/artists/3ipn9JLAPI5GUEo4y4jcoi',
          id: '3ipn9JLAPI5GUEo4y4jcoi',
          name: 'Ludacris',
          type: 'artist',
          uri: 'spotify:artist:3ipn9JLAPI5GUEo4y4jcoi'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3aQeKQSyrW4qWr35idm0cy'
          },
          href: 'https://api.spotify.com/v1/artists/3aQeKQSyrW4qWr35idm0cy',
          id: '3aQeKQSyrW4qWr35idm0cy',
          name: 'T-Pain',
          type: 'artist',
          uri: 'spotify:artist:3aQeKQSyrW4qWr35idm0cy'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG'
          },
          href: 'https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG',
          id: '7hJcb9fa4alzcOq3EaNPoG',
          name: 'Snoop Dogg',
          type: 'artist',
          uri: 'spotify:artist:7hJcb9fa4alzcOq3EaNPoG'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1sBkRIssrMs1AbVkOJbc7a'
          },
          href: 'https://api.spotify.com/v1/artists/1sBkRIssrMs1AbVkOJbc7a',
          id: '1sBkRIssrMs1AbVkOJbc7a',
          name: 'Rick Ross',
          type: 'artist',
          uri: 'spotify:artist:1sBkRIssrMs1AbVkOJbc7a'
        }
      ],
      disc_number: 1,
      duration_ms: 232506,
      explicit: true,
      external_ids: {
        isrc: 'USKO11000176'
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/12PNcnMsjsZ3eHm62t8hiy'
      },
      href: 'https://api.spotify.com/v1/tracks/12PNcnMsjsZ3eHm62t8hiy',
      id: '12PNcnMsjsZ3eHm62t8hiy',
      is_local: false,
      is_playable: true,
      name: 'All I Do Is Win (feat. T-Pain, Ludacris, Snoop Dogg & Rick Ross)',
      popularity: 69,
      preview_url:
        'https://p.scdn.co/mp3-preview/047bd65c02b96672dc8cfed3e7f8ecf527bc7eba?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 2,
      type: 'track',
      uri: 'spotify:track:12PNcnMsjsZ3eHm62t8hiy'
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
            },
            href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
            id: '0QHgL1lAIqAw0HtD7YldmP',
            name: 'DJ Khaled',
            type: 'artist',
            uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
          }
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/7FyxsUO4kVqRfo2ne1aUOg'
        },
        href: 'https://api.spotify.com/v1/albums/7FyxsUO4kVqRfo2ne1aUOg',
        id: '7FyxsUO4kVqRfo2ne1aUOg',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273dd87a2f68949c8fcbbec91be',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02dd87a2f68949c8fcbbec91be',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851dd87a2f68949c8fcbbec91be',
            width: 64
          }
        ],
        name: 'We The Best Forever',
        release_date: '2011-01-01',
        release_date_precision: 'day',
        total_tracks: 12,
        type: 'album',
        uri: 'spotify:album:7FyxsUO4kVqRfo2ne1aUOg'
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
          },
          href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
          id: '0QHgL1lAIqAw0HtD7YldmP',
          name: 'DJ Khaled',
          type: 'artist',
          uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4'
          },
          href: 'https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4',
          id: '3TVXtAsR1Inumwj472S9r4',
          name: 'Drake',
          type: 'artist',
          uri: 'spotify:artist:3TVXtAsR1Inumwj472S9r4'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1sBkRIssrMs1AbVkOJbc7a'
          },
          href: 'https://api.spotify.com/v1/artists/1sBkRIssrMs1AbVkOJbc7a',
          id: '1sBkRIssrMs1AbVkOJbc7a',
          name: 'Rick Ross',
          type: 'artist',
          uri: 'spotify:artist:1sBkRIssrMs1AbVkOJbc7a'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865'
          },
          href: 'https://api.spotify.com/v1/artists/55Aa2cqylxrFIXC767Z865',
          id: '55Aa2cqylxrFIXC767Z865',
          name: 'Lil Wayne',
          type: 'artist',
          uri: 'spotify:artist:55Aa2cqylxrFIXC767Z865'
        }
      ],
      disc_number: 1,
      duration_ms: 296146,
      explicit: true,
      external_ids: {
        isrc: 'USCM51100126'
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/608a1wIsSd5KzMEqm1O7w3'
      },
      href: 'https://api.spotify.com/v1/tracks/608a1wIsSd5KzMEqm1O7w3',
      id: '608a1wIsSd5KzMEqm1O7w3',
      is_local: false,
      is_playable: true,
      name: "I'm On One",
      popularity: 66,
      preview_url: null,
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:608a1wIsSd5KzMEqm1O7w3'
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
            },
            href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
            id: '0QHgL1lAIqAw0HtD7YldmP',
            name: 'DJ Khaled',
            type: 'artist',
            uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
          }
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/1YgX8BWKleDlDeCOFklRfz'
        },
        href: 'https://api.spotify.com/v1/albums/1YgX8BWKleDlDeCOFklRfz',
        id: '1YgX8BWKleDlDeCOFklRfz',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273fa2741071b31bb94cb4232ae',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02fa2741071b31bb94cb4232ae',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851fa2741071b31bb94cb4232ae',
            width: 64
          }
        ],
        name: 'Father Of Asahd',
        release_date: '2019-05-17',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:1YgX8BWKleDlDeCOFklRfz'
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
          },
          href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
          id: '0QHgL1lAIqAw0HtD7YldmP',
          name: 'DJ Khaled',
          type: 'artist',
          uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP'
          },
          href: 'https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP',
          id: '7tYKF4w9nC0nq9CsPZTHyP',
          name: 'SZA',
          type: 'artist',
          uri: 'spotify:artist:7tYKF4w9nC0nq9CsPZTHyP'
        }
      ],
      disc_number: 1,
      duration_ms: 221378,
      explicit: true,
      external_ids: {
        isrc: 'USSM11903537'
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/0BnTBAGmr9FtYwkZrwKhwS'
      },
      href: 'https://api.spotify.com/v1/tracks/0BnTBAGmr9FtYwkZrwKhwS',
      id: '0BnTBAGmr9FtYwkZrwKhwS',
      is_local: false,
      is_playable: true,
      name: 'Just Us (feat. SZA)',
      popularity: 64,
      preview_url:
        'https://p.scdn.co/mp3-preview/09e878fa6a338f9afb5755fa04b0e63823f35fcd?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 4,
      type: 'track',
      uri: 'spotify:track:0BnTBAGmr9FtYwkZrwKhwS'
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
            },
            href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
            id: '0QHgL1lAIqAw0HtD7YldmP',
            name: 'DJ Khaled',
            type: 'artist',
            uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
          }
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/1YgX8BWKleDlDeCOFklRfz'
        },
        href: 'https://api.spotify.com/v1/albums/1YgX8BWKleDlDeCOFklRfz',
        id: '1YgX8BWKleDlDeCOFklRfz',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273fa2741071b31bb94cb4232ae',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02fa2741071b31bb94cb4232ae',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851fa2741071b31bb94cb4232ae',
            width: 64
          }
        ],
        name: 'Father Of Asahd',
        release_date: '2019-05-17',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:1YgX8BWKleDlDeCOFklRfz'
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
          },
          href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
          id: '0QHgL1lAIqAw0HtD7YldmP',
          name: 'DJ Khaled',
          type: 'artist',
          uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/4kYSro6naA4h99UJvo89HB'
          },
          href: 'https://api.spotify.com/v1/artists/4kYSro6naA4h99UJvo89HB',
          id: '4kYSro6naA4h99UJvo89HB',
          name: 'Cardi B',
          type: 'artist',
          uri: 'spotify:artist:4kYSro6naA4h99UJvo89HB'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1URnnhqYAYcrqrcwql10ft'
          },
          href: 'https://api.spotify.com/v1/artists/1URnnhqYAYcrqrcwql10ft',
          id: '1URnnhqYAYcrqrcwql10ft',
          name: '21 Savage',
          type: 'artist',
          uri: 'spotify:artist:1URnnhqYAYcrqrcwql10ft'
        }
      ],
      disc_number: 1,
      duration_ms: 202625,
      explicit: true,
      external_ids: {
        isrc: 'USSM11903535'
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/1Hd2XLitkt1PYCWSbfF5qV'
      },
      href: 'https://api.spotify.com/v1/tracks/1Hd2XLitkt1PYCWSbfF5qV',
      id: '1Hd2XLitkt1PYCWSbfF5qV',
      is_local: false,
      is_playable: true,
      name: 'Wish Wish (feat. Cardi B & 21 Savage)',
      popularity: 64,
      preview_url:
        'https://p.scdn.co/mp3-preview/9f0f42ee3e0dee6590c4aaf3e639edc765b1ae4a?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 2,
      type: 'track',
      uri: 'spotify:track:1Hd2XLitkt1PYCWSbfF5qV'
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
            },
            href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
            id: '0QHgL1lAIqAw0HtD7YldmP',
            name: 'DJ Khaled',
            type: 'artist',
            uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
          }
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/1YgX8BWKleDlDeCOFklRfz'
        },
        href: 'https://api.spotify.com/v1/albums/1YgX8BWKleDlDeCOFklRfz',
        id: '1YgX8BWKleDlDeCOFklRfz',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273fa2741071b31bb94cb4232ae',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02fa2741071b31bb94cb4232ae',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851fa2741071b31bb94cb4232ae',
            width: 64
          }
        ],
        name: 'Father Of Asahd',
        release_date: '2019-05-17',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:1YgX8BWKleDlDeCOFklRfz'
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
          },
          href: 'https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP',
          id: '0QHgL1lAIqAw0HtD7YldmP',
          name: 'DJ Khaled',
          type: 'artist',
          uri: 'spotify:artist:0QHgL1lAIqAw0HtD7YldmP'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z'
          },
          href: 'https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z',
          id: '7bXgB6jMjp9ATFy66eO08Z',
          name: 'Chris Brown',
          type: 'artist',
          uri: 'spotify:artist:7bXgB6jMjp9ATFy66eO08Z'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865'
          },
          href: 'https://api.spotify.com/v1/artists/55Aa2cqylxrFIXC767Z865',
          id: '55Aa2cqylxrFIXC767Z865',
          name: 'Lil Wayne',
          type: 'artist',
          uri: 'spotify:artist:55Aa2cqylxrFIXC767Z865'
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh'
          },
          href: 'https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh',
          id: '0c173mlxpT3dSFRgMO8XPh',
          name: 'Big Sean',
          type: 'artist',
          uri: 'spotify:artist:0c173mlxpT3dSFRgMO8XPh'
        }
      ],
      disc_number: 1,
      duration_ms: 255101,
      explicit: true,
      external_ids: {
        isrc: 'USSM11903536'
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/6Dq8FZrvx9S28iyaKSwn9x'
      },
      href: 'https://api.spotify.com/v1/tracks/6Dq8FZrvx9S28iyaKSwn9x',
      id: '6Dq8FZrvx9S28iyaKSwn9x',
      is_local: false,
      is_playable: true,
      name: 'Jealous (feat. Chris Brown, Lil Wayne & Big Sean)',
      popularity: 62,
      preview_url:
        'https://p.scdn.co/mp3-preview/c76bb593280d7c5bc29998707a545bf375682087?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 3,
      type: 'track',
      uri: 'spotify:track:6Dq8FZrvx9S28iyaKSwn9x'
    }
  ];

  const a = [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/3wYyutjgII8LJVVOLrGI0D'
      },
      followers: {
        href: null,
        total: 822763
      },
      genres: [
        'adult standards',
        'brill building pop',
        'folk rock',
        'lounge',
        'rock-and-roll',
        'rockabilly'
      ],
      href: 'https://api.spotify.com/v1/artists/3wYyutjgII8LJVVOLrGI0D',
      id: '3wYyutjgII8LJVVOLrGI0D',
      images: [
        {
          height: 1266,
          url: 'https://i.scdn.co/image/ff6c6ecd90618f5fb0f8fbf51bf8477586c8843b',
          width: 1000
        },
        {
          height: 810,
          url: 'https://i.scdn.co/image/a6f9cbb13f743c1b397e73e77d564603ea8a7c1a',
          width: 640
        },
        {
          height: 253,
          url: 'https://i.scdn.co/image/6291c6dce69ccc5bf017a2a348c8b7e507882e0c',
          width: 200
        },
        {
          height: 81,
          url: 'https://i.scdn.co/image/b187258df5341858dbc1d4c09fc098a9a7aedbab',
          width: 64
        }
      ],
      name: 'Buddy Holly',
      popularity: 62,
      type: 'artist',
      uri: 'spotify:artist:3wYyutjgII8LJVVOLrGI0D'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/293zczrfYafIItmnmM3coR'
      },
      followers: {
        href: null,
        total: 1314671
      },
      genres: [
        'adult standards',
        'blues rock',
        'classic rock',
        'rock',
        'rock-and-roll',
        'rockabilly',
        'soul'
      ],
      href: 'https://api.spotify.com/v1/artists/293zczrfYafIItmnmM3coR',
      id: '293zczrfYafIItmnmM3coR',
      images: [
        {
          height: 1198,
          url: 'https://i.scdn.co/image/d58323616d4f5d22b51e9dfe0ba53aedabe53cd4',
          width: 1000
        },
        {
          height: 766,
          url: 'https://i.scdn.co/image/7cfff5d03c5f80539eebba8827e8569c71898ea4',
          width: 640
        },
        {
          height: 240,
          url: 'https://i.scdn.co/image/dd7b763fb49c35b1ebaadf3695156aeb7d9f9ca3',
          width: 200
        },
        {
          height: 77,
          url: 'https://i.scdn.co/image/127a6c846e601f5201e4e4bc19d43c388da97b99',
          width: 64
        }
      ],
      name: 'Chuck Berry',
      popularity: 72,
      type: 'artist',
      uri: 'spotify:artist:293zczrfYafIItmnmM3coR'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/2zyz0VJqrDXeFDIyrfVXSo'
      },
      followers: {
        href: null,
        total: 542424
      },
      genres: ['brill building pop', 'piano rock', 'rock-and-roll', 'rockabilly'],
      href: 'https://api.spotify.com/v1/artists/2zyz0VJqrDXeFDIyrfVXSo',
      id: '2zyz0VJqrDXeFDIyrfVXSo',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/cfa2ca7065e4e435b0ef28d1eb5f0e507b7d9cff',
          width: 640
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/b9d86330e56cea7c2d744b57ab65387e387ef7e3',
          width: 320
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/f3c411c43ce6bd8f64df0eefd9576f11a449bdf6',
          width: 160
        }
      ],
      name: 'Jerry Lee Lewis',
      popularity: 61,
      type: 'artist',
      uri: 'spotify:artist:2zyz0VJqrDXeFDIyrfVXSo'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/0JDkhL4rjiPNEp92jAgJnS'
      },
      followers: {
        href: null,
        total: 1183183
      },
      genres: [
        'adult standards',
        'brill building pop',
        'folk rock',
        'mellow gold',
        'rock-and-roll',
        'rockabilly'
      ],
      href: 'https://api.spotify.com/v1/artists/0JDkhL4rjiPNEp92jAgJnS',
      id: '0JDkhL4rjiPNEp92jAgJnS',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/846e8808178b1b66a5220f947185dc91b89f6f5b',
          width: 640
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/02f851191e49bdd2fa6ea0f48249c29bf3f83e02',
          width: 320
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/eb0071dff0b03dc8d7b3f91c92277c0480c30b32',
          width: 160
        }
      ],
      name: 'Roy Orbison',
      popularity: 69,
      type: 'artist',
      uri: 'spotify:artist:0JDkhL4rjiPNEp92jAgJnS'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/4ACplpEqD6JIVgKrafauzs'
      },
      followers: {
        href: null,
        total: 505955
      },
      genres: [
        'adult standards',
        'brill building pop',
        'bubblegum pop',
        'folk rock',
        'mellow gold',
        'rock-and-roll',
        'rockabilly',
        'sunshine pop'
      ],
      href: 'https://api.spotify.com/v1/artists/4ACplpEqD6JIVgKrafauzs',
      id: '4ACplpEqD6JIVgKrafauzs',
      images: [
        {
          height: 1035,
          url: 'https://i.scdn.co/image/143996e5147b6767719a60163488e342b3fc2efe',
          width: 1000
        },
        {
          height: 662,
          url: 'https://i.scdn.co/image/ecd862317d93b07ff51218eee3fcb1e971ced621',
          width: 640
        },
        {
          height: 207,
          url: 'https://i.scdn.co/image/8eee809edea1af0fc95620c95f8ecd6b7cdc6cc9',
          width: 200
        },
        {
          height: 66,
          url: 'https://i.scdn.co/image/0d0e09e6e99dcbe60af88d03ff8f6ffe9bfe6d08',
          width: 64
        }
      ],
      name: 'The Everly Brothers',
      popularity: 64,
      type: 'artist',
      uri: 'spotify:artist:4ACplpEqD6JIVgKrafauzs'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/1p0t3JtUTayV2wb1RGN9mO'
      },
      followers: {
        href: null,
        total: 209449
      },
      genres: ['adult standards', 'brill building pop', 'rock-and-roll', 'rockabilly'],
      href: 'https://api.spotify.com/v1/artists/1p0t3JtUTayV2wb1RGN9mO',
      id: '1p0t3JtUTayV2wb1RGN9mO',
      images: [
        {
          height: 1000,
          url: 'https://i.scdn.co/image/598642ecbc39004cdbb63dd018042db59b0385e5',
          width: 1000
        },
        {
          height: 743,
          url: 'https://i.scdn.co/image/55b746de045ed8ef3383ed9aef4efcfdb8537645',
          width: 640
        },
        {
          height: 232,
          url: 'https://i.scdn.co/image/8a6d73006026ed04e7cd4e942d0bc857cd4e629a',
          width: 200
        },
        {
          height: 74,
          url: 'https://i.scdn.co/image/8f65907593700fe5ba7b1e479e359b7be73f2bff',
          width: 64
        }
      ],
      name: 'Eddie Cochran',
      popularity: 56,
      type: 'artist',
      uri: 'spotify:artist:1p0t3JtUTayV2wb1RGN9mO'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/3MFp4cYuYtTZe3d3xkLLbr'
      },
      followers: {
        href: null,
        total: 199495
      },
      genres: ['adult standards', 'brill building pop', 'rock-and-roll', 'rockabilly'],
      href: 'https://api.spotify.com/v1/artists/3MFp4cYuYtTZe3d3xkLLbr',
      id: '3MFp4cYuYtTZe3d3xkLLbr',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2739060a2c0a01366ee03274597',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e029060a2c0a01366ee03274597',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048519060a2c0a01366ee03274597',
          width: 64
        }
      ],
      name: 'Bill Haley & His Comets',
      popularity: 57,
      type: 'artist',
      uri: 'spotify:artist:3MFp4cYuYtTZe3d3xkLLbr'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/4xls23Ye9WR9yy3yYMpAMm'
      },
      followers: {
        href: null,
        total: 607491
      },
      genres: ['brill building pop', 'rock-and-roll', 'rockabilly', 'soul'],
      href: 'https://api.spotify.com/v1/artists/4xls23Ye9WR9yy3yYMpAMm',
      id: '4xls23Ye9WR9yy3yYMpAMm',
      images: [
        {
          height: 596,
          url: 'https://i.scdn.co/image/8482a715712ad99032f35870bd2430b9b71b7283',
          width: 477
        },
        {
          height: 250,
          url: 'https://i.scdn.co/image/0d374a6e20f8bb052cbe2a73f90f2dadfd46c7bc',
          width: 200
        },
        {
          height: 80,
          url: 'https://i.scdn.co/image/f399df3b8c85af0054b31a2118fa39f20fe77cde',
          width: 64
        }
      ],
      name: 'Little Richard',
      popularity: 61,
      type: 'artist',
      uri: 'spotify:artist:4xls23Ye9WR9yy3yYMpAMm'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/73sSFVlM6pkweLXE8qw1OS'
      },
      followers: {
        href: null,
        total: 273936
      },
      genres: [
        'adult standards',
        'brill building pop',
        'bubblegum pop',
        'folk rock',
        'lounge',
        'rock-and-roll',
        'rockabilly'
      ],
      href: 'https://api.spotify.com/v1/artists/73sSFVlM6pkweLXE8qw1OS',
      id: '73sSFVlM6pkweLXE8qw1OS',
      images: [
        {
          height: 1129,
          url: 'https://i.scdn.co/image/99ee90438c46d52c9007866740f5504834d20f99',
          width: 1000
        },
        {
          height: 723,
          url: 'https://i.scdn.co/image/3c0b0278e7cc5a8f062f7797993e099683b10e1e',
          width: 640
        },
        {
          height: 226,
          url: 'https://i.scdn.co/image/53705a46b8496509b92c70268dabdc8a41899fb6',
          width: 200
        },
        {
          height: 72,
          url: 'https://i.scdn.co/image/534d374e547c994f09b030f3921fca41f0e1750f',
          width: 64
        }
      ],
      name: 'Ricky Nelson',
      popularity: 62,
      type: 'artist',
      uri: 'spotify:artist:73sSFVlM6pkweLXE8qw1OS'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/09C0xjtosNAIXP36wTnWxd'
      },
      followers: {
        href: null,
        total: 341062
      },
      genres: [
        'adult standards',
        'brill building pop',
        'louisiana blues',
        'lounge',
        'new orleans blues',
        'piano blues',
        'rhythm and blues',
        'rock-and-roll',
        'rockabilly',
        'soul'
      ],
      href: 'https://api.spotify.com/v1/artists/09C0xjtosNAIXP36wTnWxd',
      id: '09C0xjtosNAIXP36wTnWxd',
      images: [
        {
          height: 1170,
          url: 'https://i.scdn.co/image/795ae538a48341d36523c1644b0da31a542db7e5',
          width: 1000
        },
        {
          height: 749,
          url: 'https://i.scdn.co/image/87c3cd1c4917dc6961fafa5b679fafc7c00cb1eb',
          width: 640
        },
        {
          height: 234,
          url: 'https://i.scdn.co/image/e1ecb1edaf668afe7eb974bae90fd7bf00679108',
          width: 200
        },
        {
          height: 75,
          url: 'https://i.scdn.co/image/aa497e48f8054c5a5838e9372bdceaa38237f8a3',
          width: 64
        }
      ],
      name: 'Fats Domino',
      popularity: 60,
      type: 'artist',
      uri: 'spotify:artist:09C0xjtosNAIXP36wTnWxd'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/6KWcxMWVNVIYbdOQyJtsSy'
      },
      followers: {
        href: null,
        total: 474668
      },
      genres: [
        'adult standards',
        'brill building pop',
        'doo-wop',
        'lounge',
        'rock-and-roll',
        'rockabilly'
      ],
      href: 'https://api.spotify.com/v1/artists/6KWcxMWVNVIYbdOQyJtsSy',
      id: '6KWcxMWVNVIYbdOQyJtsSy',
      images: [
        {
          height: 1000,
          url: 'https://i.scdn.co/image/8e58bf02119a781665fd69dcacce9235b32377e7',
          width: 1000
        },
        {
          height: 796,
          url: 'https://i.scdn.co/image/e4f4bb87efc9cd4847e33d61e8e261e2996415a7',
          width: 640
        },
        {
          height: 249,
          url: 'https://i.scdn.co/image/bf1868731dcfdf654a491591ccdd0df3c6749d2a',
          width: 200
        },
        {
          height: 80,
          url: 'https://i.scdn.co/image/2f67a97cc103d16bdf6be6a09de0f98e904cffa1',
          width: 64
        }
      ],
      name: 'The Platters',
      popularity: 65,
      type: 'artist',
      uri: 'spotify:artist:6KWcxMWVNVIYbdOQyJtsSy'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/5Y9xEAGW4GwGJgbiI6W85P'
      },
      followers: {
        href: null,
        total: 354634
      },
      genres: ['adult standards', 'brill building pop', 'rock-and-roll', 'rockabilly'],
      href: 'https://api.spotify.com/v1/artists/5Y9xEAGW4GwGJgbiI6W85P',
      id: '5Y9xEAGW4GwGJgbiI6W85P',
      images: [
        {
          height: 1124,
          url: 'https://i.scdn.co/image/c0797b7eeb72ffd9760fa5a026641d14b3fd547a',
          width: 1000
        },
        {
          height: 719,
          url: 'https://i.scdn.co/image/bfa2d94ae1da800701ceb6fd4e2d4ed278ac1700',
          width: 640
        },
        {
          height: 225,
          url: 'https://i.scdn.co/image/9e428b0f0a17c0d9ff108340f6f304919af7c435',
          width: 200
        },
        {
          height: 72,
          url: 'https://i.scdn.co/image/47a1ce1e030d6f5487e988d7ab6899808fa6116a',
          width: 64
        }
      ],
      name: 'Ritchie Valens',
      popularity: 59,
      type: 'artist',
      uri: 'spotify:artist:5Y9xEAGW4GwGJgbiI6W85P'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/5N6GwJzOcOY5kv8p0NjhYL'
      },
      followers: {
        href: null,
        total: 308331
      },
      genres: [
        'adult standards',
        'brill building pop',
        'bubblegum pop',
        'easy listening',
        'folk rock',
        'lounge',
        'mellow gold',
        'rockabilly',
        'soft rock'
      ],
      href: 'https://api.spotify.com/v1/artists/5N6GwJzOcOY5kv8p0NjhYL',
      id: '5N6GwJzOcOY5kv8p0NjhYL',
      images: [
        {
          height: 1000,
          url: 'https://i.scdn.co/image/131c254129758c4951b09c4ffc07e5c09a7dcbec',
          width: 1000
        },
        {
          height: 640,
          url: 'https://i.scdn.co/image/c90b9a4e05771345c7ab6b85af6a7e4dd49302a1',
          width: 640
        },
        {
          height: 200,
          url: 'https://i.scdn.co/image/21f3544ff17435fb877ecaf81904b3c0a8d4e7d8',
          width: 200
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/796c4145b78175343e650ca79325dec1d7771a60',
          width: 64
        }
      ],
      name: 'Neil Sedaka',
      popularity: 62,
      type: 'artist',
      uri: 'spotify:artist:5N6GwJzOcOY5kv8p0NjhYL'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/4cPHsZM98sKzmV26wlwD2W'
      },
      followers: {
        href: null,
        total: 199298
      },
      genres: ['adult standards', 'brill building pop', 'vocal jazz'],
      href: 'https://api.spotify.com/v1/artists/4cPHsZM98sKzmV26wlwD2W',
      id: '4cPHsZM98sKzmV26wlwD2W',
      images: [
        {
          height: 1000,
          url: 'https://i.scdn.co/image/2873f90f994289db10fcbbab0c5a789ab6670a0f',
          width: 1000
        },
        {
          height: 640,
          url: 'https://i.scdn.co/image/43dcfeea9a7ef5253d0a1d1acf01d568384cce47',
          width: 640
        },
        {
          height: 200,
          url: 'https://i.scdn.co/image/b21cdf8c43a575ccd2baaf79e9d181858847c8f6',
          width: 200
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/8232bd2c9c7a848a085dd75ee1ca55b954170fe8',
          width: 64
        }
      ],
      name: 'Brenda Lee',
      popularity: 74,
      type: 'artist',
      uri: 'spotify:artist:4cPHsZM98sKzmV26wlwD2W'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/7qQJQ3YtcGlqaLg5tcypN2'
      },
      followers: {
        href: null,
        total: 204965
      },
      genres: ['adult standards', 'brill building pop', 'rock-and-roll', 'rockabilly'],
      href: 'https://api.spotify.com/v1/artists/7qQJQ3YtcGlqaLg5tcypN2',
      id: '7qQJQ3YtcGlqaLg5tcypN2',
      images: [
        {
          height: 1250,
          url: 'https://i.scdn.co/image/4b719e0ecea3eb92d294b838db79874318f35da1',
          width: 1000
        },
        {
          height: 800,
          url: 'https://i.scdn.co/image/115419ce22f5572aadae7318cf4d1b9ece82397b',
          width: 640
        },
        {
          height: 250,
          url: 'https://i.scdn.co/image/117a1d78e1aa00ebac7c8b2cad631d79be813b24',
          width: 200
        },
        {
          height: 80,
          url: 'https://i.scdn.co/image/c16b2df508a1c6412444dcc99da6275b42269647',
          width: 64
        }
      ],
      name: 'Chubby Checker',
      popularity: 58,
      type: 'artist',
      uri: 'spotify:artist:7qQJQ3YtcGlqaLg5tcypN2'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/0EodhzA6yW1bIdD5B4tcmJ'
      },
      followers: {
        href: null,
        total: 342584
      },
      genres: [
        'adult standards',
        'big band',
        'brill building pop',
        'easy listening',
        'lounge',
        'rock-and-roll',
        'rockabilly',
        'soul',
        'swing',
        'vocal jazz'
      ],
      href: 'https://api.spotify.com/v1/artists/0EodhzA6yW1bIdD5B4tcmJ',
      id: '0EodhzA6yW1bIdD5B4tcmJ',
      images: [
        {
          height: 1263,
          url: 'https://i.scdn.co/image/ae8a8b9d9b6a35f00b87fdae31f46db6a13fcd0e',
          width: 1000
        },
        {
          height: 808,
          url: 'https://i.scdn.co/image/0145d946866cb2205bba2f17ab445e290eb1ec4c',
          width: 640
        },
        {
          height: 253,
          url: 'https://i.scdn.co/image/0ca3415278b5ae71a13f475bc4d00b568e73af21',
          width: 200
        },
        {
          height: 81,
          url: 'https://i.scdn.co/image/99c37f6288d2933d59d2342e762beb5f640ab478',
          width: 64
        }
      ],
      name: 'Bobby Darin',
      popularity: 65,
      type: 'artist',
      uri: 'spotify:artist:0EodhzA6yW1bIdD5B4tcmJ'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/4b0WsB47XCa9F83BmwQ7WX'
      },
      followers: {
        href: null,
        total: 343505
      },
      genres: [
        'adult standards',
        'brill building pop',
        'bubblegum pop',
        'folk rock',
        'mellow gold',
        'motown',
        'rock-and-roll'
      ],
      href: 'https://api.spotify.com/v1/artists/4b0WsB47XCa9F83BmwQ7WX',
      id: '4b0WsB47XCa9F83BmwQ7WX',
      images: [
        {
          height: 1292,
          url: 'https://i.scdn.co/image/21584a935b760f20b4b08f7f9ddd012c12437798',
          width: 1000
        },
        {
          height: 827,
          url: 'https://i.scdn.co/image/e97b7cd22945863ebc926c5c8e4e92bd2b8698d9',
          width: 640
        },
        {
          height: 258,
          url: 'https://i.scdn.co/image/04ac9d38712494d9347ecc5115b22115c9f34717',
          width: 200
        },
        {
          height: 83,
          url: 'https://i.scdn.co/image/b101249b1356e58639c151a4772258caea50197d',
          width: 64
        }
      ],
      name: 'The Righteous Brothers',
      popularity: 65,
      type: 'artist',
      uri: 'spotify:artist:4b0WsB47XCa9F83BmwQ7WX'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/1FqqOl9itIUpXr4jZPIVoT'
      },
      followers: {
        href: null,
        total: 330952
      },
      genres: [
        'adult standards',
        'brill building pop',
        'bubblegum pop',
        'folk rock',
        'lounge',
        'motown',
        'rock-and-roll',
        'rockabilly',
        'soul'
      ],
      href: 'https://api.spotify.com/v1/artists/1FqqOl9itIUpXr4jZPIVoT',
      id: '1FqqOl9itIUpXr4jZPIVoT',
      images: [
        {
          height: 1000,
          url: 'https://i.scdn.co/image/9cebb08480116550d85b6268d9adb1c2aee718f7',
          width: 1000
        },
        {
          height: 640,
          url: 'https://i.scdn.co/image/3361d8c88dc781f3a76657778454051db42e6d9e',
          width: 640
        },
        {
          height: 200,
          url: 'https://i.scdn.co/image/ed6c740fd6ad7faa31964b7a7762009b4b7826bd',
          width: 200
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/686750d79b66f2658a84cda6d2e25de97aa85faa',
          width: 64
        }
      ],
      name: 'The Drifters',
      popularity: 64,
      type: 'artist',
      uri: 'spotify:artist:1FqqOl9itIUpXr4jZPIVoT'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/15FyiY3ChN0QRspHIQYq0W'
      },
      followers: {
        href: null,
        total: 133370
      },
      genres: [
        'adult standards',
        'brill building pop',
        'doo-wop',
        'lounge',
        'rock-and-roll',
        'rockabilly'
      ],
      href: 'https://api.spotify.com/v1/artists/15FyiY3ChN0QRspHIQYq0W',
      id: '15FyiY3ChN0QRspHIQYq0W',
      images: [
        {
          height: 1263,
          url: 'https://i.scdn.co/image/28bf7291b822222629d722d8fae7223d9193d597',
          width: 1000
        },
        {
          height: 808,
          url: 'https://i.scdn.co/image/7a86dcb7c043db8c8c8a8e9e6737cc5ed1808032',
          width: 640
        },
        {
          height: 253,
          url: 'https://i.scdn.co/image/489d4673dc61a8704f7e692ab41dca2255cbe048',
          width: 200
        },
        {
          height: 81,
          url: 'https://i.scdn.co/image/e163e5d5861c5465e66292d1edd2a5eea70eaf7f',
          width: 64
        }
      ],
      name: 'Dion',
      popularity: 61,
      type: 'artist',
      uri: 'spotify:artist:15FyiY3ChN0QRspHIQYq0W'
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/3EY5DxGdy7x4GelivOjS2Q'
      },
      followers: {
        href: null,
        total: 252839
      },
      genres: [
        'adult standards',
        'brill building pop',
        'easy listening',
        'lounge',
        'rock-and-roll',
        'rockabilly'
      ],
      href: 'https://api.spotify.com/v1/artists/3EY5DxGdy7x4GelivOjS2Q',
      id: '3EY5DxGdy7x4GelivOjS2Q',
      images: [
        {
          height: 1196,
          url: 'https://i.scdn.co/image/8bdcb1cc65a0ca1d54018e308bd2471e9c4820ce',
          width: 1000
        },
        {
          height: 765,
          url: 'https://i.scdn.co/image/f21c10c96a065f438d1511fb493847c301f8ae9c',
          width: 640
        },
        {
          height: 239,
          url: 'https://i.scdn.co/image/4a241bc89998f11920f10bd354374c4e8f3b90d3',
          width: 200
        },
        {
          height: 77,
          url: 'https://i.scdn.co/image/bf2ff77d590d81b37682813dd8f7e3ac3928922f',
          width: 64
        }
      ],
      name: 'Connie Francis',
      popularity: 59,
      type: 'artist',
      uri: 'spotify:artist:3EY5DxGdy7x4GelivOjS2Q'
    }
  ];

  useEffect(() => console.log(url, path), []);
  const imageUrl = getSmallestSizeImage(images, 640 || 300);
  return (
    <div>
      <ArtistBriefCard
        title={name}
        imageUrl={imageUrl}
        subtitle={upperFirst(genreAggregate(genres))}
      />
      <div className="grid grid-cols-2 gap-2 my-2">
        <Link to={`${url}/top-tracks`} onClick={() => setKey(Math.random())}>
          <button className="w-full border-2 p-2 rounded-md">Top Tracks</button>
        </Link>
        <Link to={`${url}/related-artists`} onClick={() => setKey(Math.random())}>
          <button className="w-full border-2 p-2 rounded-md">Related Artists</button>
        </Link>
        <div className="col-span-2">
          <Routes>
            <Route path={`${path}/top-tracks`} element={<Tracks tracks={t} />} />
            <Route path={`${path}/related-artists`} element={<Artists artists={a} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
