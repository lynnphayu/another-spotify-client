import React from 'react';
import { useLocation } from 'react-router';
import CommonBriefCard from '../components/commonBriefCard';
import Tracks from '../components/tracks';
import { Playlist, Track } from '../types/tracks';
import { getSmallestSizeImage } from '../utils/dataHandling';

export default function PlaylistDetail() {
  const tracks = [
    {
      added_at: '2019-03-07T17:36:30Z',
      added_by: {
        external_urls: {
          spotify: 'https://open.spotify.com/user/21ghqdxovnpqd4ujaqb4dod5a'
        },
        href: 'https://api.spotify.com/v1/users/21ghqdxovnpqd4ujaqb4dod5a',
        id: '21ghqdxovnpqd4ujaqb4dod5a',
        type: 'user',
        uri: 'spotify:user:21ghqdxovnpqd4ujaqb4dod5a'
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/1Xylc3o4UrD53lo9CvFvVg'
              },
              href: 'https://api.spotify.com/v1/artists/1Xylc3o4UrD53lo9CvFvVg',
              id: '1Xylc3o4UrD53lo9CvFvVg',
              name: 'Zara Larsson',
              type: 'artist',
              uri: 'spotify:artist:1Xylc3o4UrD53lo9CvFvVg'
            }
          ],
          available_markets: [
            'AD',
            'AE',
            'AL',
            'AR',
            'AT',
            'AU',
            'BA',
            'BE',
            'BG',
            'BH',
            'BO',
            'BR',
            'BY',
            'CA',
            'CH',
            'CL',
            'CO',
            'CR',
            'CY',
            'CZ',
            'DE',
            'DK',
            'DO',
            'DZ',
            'EC',
            'EE',
            'EG',
            'ES',
            'FI',
            'FR',
            'GB',
            'GR',
            'GT',
            'HK',
            'HN',
            'HR',
            'HU',
            'ID',
            'IE',
            'IL',
            'IN',
            'IS',
            'IT',
            'JO',
            'JP',
            'KW',
            'KZ',
            'LB',
            'LI',
            'LT',
            'LU',
            'LV',
            'MA',
            'MC',
            'MD',
            'ME',
            'MK',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'OM',
            'PA',
            'PE',
            'PH',
            'PL',
            'PS',
            'PT',
            'PY',
            'QA',
            'RO',
            'RS',
            'RU',
            'SA',
            'SG',
            'SI',
            'SK',
            'SV',
            'TH',
            'TN',
            'TR',
            'TW',
            'UA',
            'US',
            'UY',
            'VN',
            'XK',
            'ZA'
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/2BM5FQCILC33Va2jOZ11Mu'
          },
          href: 'https://api.spotify.com/v1/albums/2BM5FQCILC33Va2jOZ11Mu',
          id: '2BM5FQCILC33Va2jOZ11Mu',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273ceedff6a709d5a9f6c86a0bc',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02ceedff6a709d5a9f6c86a0bc',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851ceedff6a709d5a9f6c86a0bc',
              width: 64
            }
          ],
          name: 'Ruin My Life',
          release_date: '2018-10-18',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:2BM5FQCILC33Va2jOZ11Mu'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1Xylc3o4UrD53lo9CvFvVg'
            },
            href: 'https://api.spotify.com/v1/artists/1Xylc3o4UrD53lo9CvFvVg',
            id: '1Xylc3o4UrD53lo9CvFvVg',
            name: 'Zara Larsson',
            type: 'artist',
            uri: 'spotify:artist:1Xylc3o4UrD53lo9CvFvVg'
          }
        ],
        available_markets: [
          'AD',
          'AE',
          'AL',
          'AR',
          'AT',
          'AU',
          'BA',
          'BE',
          'BG',
          'BH',
          'BO',
          'BR',
          'BY',
          'CA',
          'CH',
          'CL',
          'CO',
          'CR',
          'CY',
          'CZ',
          'DE',
          'DK',
          'DO',
          'DZ',
          'EC',
          'EE',
          'EG',
          'ES',
          'FI',
          'FR',
          'GB',
          'GR',
          'GT',
          'HK',
          'HN',
          'HR',
          'HU',
          'ID',
          'IE',
          'IL',
          'IN',
          'IS',
          'IT',
          'JO',
          'JP',
          'KW',
          'KZ',
          'LB',
          'LI',
          'LT',
          'LU',
          'LV',
          'MA',
          'MC',
          'MD',
          'ME',
          'MK',
          'MT',
          'MX',
          'MY',
          'NI',
          'NL',
          'NO',
          'NZ',
          'OM',
          'PA',
          'PE',
          'PH',
          'PL',
          'PS',
          'PT',
          'PY',
          'QA',
          'RO',
          'RS',
          'RU',
          'SA',
          'SG',
          'SI',
          'SK',
          'SV',
          'TH',
          'TN',
          'TR',
          'TW',
          'UA',
          'US',
          'UY',
          'VN',
          'XK',
          'ZA'
        ],
        disc_number: 1,
        duration_ms: 190931,
        episode: false,
        explicit: true,
        external_ids: {
          isrc: 'USSM11807704'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/5tAa8Uaqr4VvA3693mbIhU'
        },
        href: 'https://api.spotify.com/v1/tracks/5tAa8Uaqr4VvA3693mbIhU',
        id: '5tAa8Uaqr4VvA3693mbIhU',
        is_local: false,
        name: 'Ruin My Life',
        popularity: 75,
        preview_url:
          'https://p.scdn.co/mp3-preview/ecf6c9e17477f5d2a03c78626694fdbc95170d01?cid=774b29d4f13844c495f206cafdad9c86',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:5tAa8Uaqr4VvA3693mbIhU'
      },
      video_thumbnail: {
        url: null
      }
    },
    {
      added_at: '2019-03-07T17:44:43Z',
      added_by: {
        external_urls: {
          spotify: 'https://open.spotify.com/user/21ghqdxovnpqd4ujaqb4dod5a'
        },
        href: 'https://api.spotify.com/v1/users/21ghqdxovnpqd4ujaqb4dod5a',
        id: '21ghqdxovnpqd4ujaqb4dod5a',
        type: 'user',
        uri: 'spotify:user:21ghqdxovnpqd4ujaqb4dod5a'
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/5JZ7CnR6gTvEMKX4g70Amv'
              },
              href: 'https://api.spotify.com/v1/artists/5JZ7CnR6gTvEMKX4g70Amv',
              id: '5JZ7CnR6gTvEMKX4g70Amv',
              name: 'Lauv',
              type: 'artist',
              uri: 'spotify:artist:5JZ7CnR6gTvEMKX4g70Amv'
            },
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/3WGpXCj9YhhfX11TToZcXP'
              },
              href: 'https://api.spotify.com/v1/artists/3WGpXCj9YhhfX11TToZcXP',
              id: '3WGpXCj9YhhfX11TToZcXP',
              name: 'Troye Sivan',
              type: 'artist',
              uri: 'spotify:artist:3WGpXCj9YhhfX11TToZcXP'
            }
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/13yMsBNa2femeWzhcDOqFw'
          },
          href: 'https://api.spotify.com/v1/albums/13yMsBNa2femeWzhcDOqFw',
          id: '13yMsBNa2femeWzhcDOqFw',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273923d879fb957411a7504fa57',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02923d879fb957411a7504fa57',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851923d879fb957411a7504fa57',
              width: 64
            }
          ],
          name: "i'm so tired...",
          release_date: '2019-01-24',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:13yMsBNa2femeWzhcDOqFw'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5JZ7CnR6gTvEMKX4g70Amv'
            },
            href: 'https://api.spotify.com/v1/artists/5JZ7CnR6gTvEMKX4g70Amv',
            id: '5JZ7CnR6gTvEMKX4g70Amv',
            name: 'Lauv',
            type: 'artist',
            uri: 'spotify:artist:5JZ7CnR6gTvEMKX4g70Amv'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3WGpXCj9YhhfX11TToZcXP'
            },
            href: 'https://api.spotify.com/v1/artists/3WGpXCj9YhhfX11TToZcXP',
            id: '3WGpXCj9YhhfX11TToZcXP',
            name: 'Troye Sivan',
            type: 'artist',
            uri: 'spotify:artist:3WGpXCj9YhhfX11TToZcXP'
          }
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 162582,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'GBKPL1933763'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7COXchtUOMd6uIT6HvmRaI'
        },
        href: 'https://api.spotify.com/v1/tracks/7COXchtUOMd6uIT6HvmRaI',
        id: '7COXchtUOMd6uIT6HvmRaI',
        is_local: false,
        name: "i'm so tired...",
        popularity: 15,
        preview_url: null,
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:7COXchtUOMd6uIT6HvmRaI'
      },
      video_thumbnail: {
        url: null
      }
    },
    {
      added_at: '2019-03-07T17:48:24Z',
      added_by: {
        external_urls: {
          spotify: 'https://open.spotify.com/user/21ghqdxovnpqd4ujaqb4dod5a'
        },
        href: 'https://api.spotify.com/v1/users/21ghqdxovnpqd4ujaqb4dod5a',
        id: '21ghqdxovnpqd4ujaqb4dod5a',
        type: 'user',
        uri: 'spotify:user:21ghqdxovnpqd4ujaqb4dod5a'
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/1Xylc3o4UrD53lo9CvFvVg'
              },
              href: 'https://api.spotify.com/v1/artists/1Xylc3o4UrD53lo9CvFvVg',
              id: '1Xylc3o4UrD53lo9CvFvVg',
              name: 'Zara Larsson',
              type: 'artist',
              uri: 'spotify:artist:1Xylc3o4UrD53lo9CvFvVg'
            }
          ],
          available_markets: [
            'AD',
            'AL',
            'AR',
            'AT',
            'AU',
            'BA',
            'BE',
            'BG',
            'BO',
            'BR',
            'BY',
            'CA',
            'CH',
            'CL',
            'CO',
            'CR',
            'CY',
            'CZ',
            'DE',
            'DK',
            'DO',
            'DZ',
            'EC',
            'EE',
            'ES',
            'FI',
            'FR',
            'GR',
            'GT',
            'HK',
            'HN',
            'HR',
            'HU',
            'ID',
            'IE',
            'IL',
            'IN',
            'IS',
            'IT',
            'JP',
            'KZ',
            'LI',
            'LT',
            'LU',
            'LV',
            'MA',
            'MC',
            'MD',
            'ME',
            'MK',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'PA',
            'PE',
            'PH',
            'PL',
            'PT',
            'PY',
            'RO',
            'RS',
            'RU',
            'SG',
            'SI',
            'SK',
            'SV',
            'TH',
            'TN',
            'TR',
            'TW',
            'UA',
            'US',
            'UY',
            'VN',
            'XK',
            'ZA'
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5YLRVHDVRw3QqWbeTGpC5B'
          },
          href: 'https://api.spotify.com/v1/albums/5YLRVHDVRw3QqWbeTGpC5B',
          id: '5YLRVHDVRw3QqWbeTGpC5B',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2739e1683774b22648f4f178ed3',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e029e1683774b22648f4f178ed3',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048519e1683774b22648f4f178ed3',
              width: 64
            }
          ],
          name: 'So Good',
          release_date: '2017-03-17',
          release_date_precision: 'day',
          total_tracks: 15,
          type: 'album',
          uri: 'spotify:album:5YLRVHDVRw3QqWbeTGpC5B'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1Xylc3o4UrD53lo9CvFvVg'
            },
            href: 'https://api.spotify.com/v1/artists/1Xylc3o4UrD53lo9CvFvVg',
            id: '1Xylc3o4UrD53lo9CvFvVg',
            name: 'Zara Larsson',
            type: 'artist',
            uri: 'spotify:artist:1Xylc3o4UrD53lo9CvFvVg'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7uMh23xWiuR7zsNkuNcm2G'
            },
            href: 'https://api.spotify.com/v1/artists/7uMh23xWiuR7zsNkuNcm2G',
            id: '7uMh23xWiuR7zsNkuNcm2G',
            name: 'MNEK',
            type: 'artist',
            uri: 'spotify:artist:7uMh23xWiuR7zsNkuNcm2G'
          }
        ],
        available_markets: [
          'AD',
          'AL',
          'AR',
          'AT',
          'AU',
          'BA',
          'BE',
          'BG',
          'BO',
          'BR',
          'BY',
          'CA',
          'CH',
          'CL',
          'CO',
          'CR',
          'CY',
          'CZ',
          'DE',
          'DK',
          'DO',
          'DZ',
          'EC',
          'EE',
          'ES',
          'FI',
          'FR',
          'GR',
          'GT',
          'HK',
          'HN',
          'HR',
          'HU',
          'ID',
          'IE',
          'IL',
          'IN',
          'IS',
          'IT',
          'JP',
          'KZ',
          'LI',
          'LT',
          'LU',
          'LV',
          'MA',
          'MC',
          'MD',
          'ME',
          'MK',
          'MT',
          'MX',
          'MY',
          'NI',
          'NL',
          'NO',
          'NZ',
          'PA',
          'PE',
          'PH',
          'PL',
          'PT',
          'PY',
          'RO',
          'RS',
          'RU',
          'SG',
          'SI',
          'SK',
          'SV',
          'TH',
          'TN',
          'TR',
          'TW',
          'UA',
          'US',
          'UY',
          'VN',
          'XK',
          'ZA'
        ],
        disc_number: 1,
        duration_ms: 213427,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'SEWEE1500801'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/6hmhG1b4LEyNuashVvuIAo'
        },
        href: 'https://api.spotify.com/v1/tracks/6hmhG1b4LEyNuashVvuIAo',
        id: '6hmhG1b4LEyNuashVvuIAo',
        is_local: false,
        name: 'Never Forget You',
        popularity: 73,
        preview_url:
          'https://p.scdn.co/mp3-preview/0ce1f42d1a988c629df6fcaca5d3db5742b98f9e?cid=774b29d4f13844c495f206cafdad9c86',
        track: true,
        track_number: 7,
        type: 'track',
        uri: 'spotify:track:6hmhG1b4LEyNuashVvuIAo'
      },
      video_thumbnail: {
        url: null
      }
    },
    {
      added_at: '2019-03-07T17:52:38Z',
      added_by: {
        external_urls: {
          spotify: 'https://open.spotify.com/user/21ghqdxovnpqd4ujaqb4dod5a'
        },
        href: 'https://api.spotify.com/v1/users/21ghqdxovnpqd4ujaqb4dod5a',
        id: '21ghqdxovnpqd4ujaqb4dod5a',
        type: 'user',
        uri: 'spotify:user:21ghqdxovnpqd4ujaqb4dod5a'
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/5JZ7CnR6gTvEMKX4g70Amv'
              },
              href: 'https://api.spotify.com/v1/artists/5JZ7CnR6gTvEMKX4g70Amv',
              id: '5JZ7CnR6gTvEMKX4g70Amv',
              name: 'Lauv',
              type: 'artist',
              uri: 'spotify:artist:5JZ7CnR6gTvEMKX4g70Amv'
            }
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/7l6fTSFvlumnPFpOSrbnDV'
          },
          href: 'https://api.spotify.com/v1/albums/7l6fTSFvlumnPFpOSrbnDV',
          id: '7l6fTSFvlumnPFpOSrbnDV',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273fab48816b625e2a77a732400',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02fab48816b625e2a77a732400',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851fab48816b625e2a77a732400',
              width: 64
            }
          ],
          name: 'I Like Me Better',
          release_date: '2017-05-19',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:7l6fTSFvlumnPFpOSrbnDV'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5JZ7CnR6gTvEMKX4g70Amv'
            },
            href: 'https://api.spotify.com/v1/artists/5JZ7CnR6gTvEMKX4g70Amv',
            id: '5JZ7CnR6gTvEMKX4g70Amv',
            name: 'Lauv',
            type: 'artist',
            uri: 'spotify:artist:5JZ7CnR6gTvEMKX4g70Amv'
          }
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 197436,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'GBWWP1702907'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/1wjzFQodRWrPcQ0AnYnvQ9'
        },
        href: 'https://api.spotify.com/v1/tracks/1wjzFQodRWrPcQ0AnYnvQ9',
        id: '1wjzFQodRWrPcQ0AnYnvQ9',
        is_local: false,
        name: 'I Like Me Better',
        popularity: 10,
        preview_url: null,
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:1wjzFQodRWrPcQ0AnYnvQ9'
      },
      video_thumbnail: {
        url: null
      }
    },
    {
      added_at: '2019-03-07T17:57:22Z',
      added_by: {
        external_urls: {
          spotify: 'https://open.spotify.com/user/21ghqdxovnpqd4ujaqb4dod5a'
        },
        href: 'https://api.spotify.com/v1/users/21ghqdxovnpqd4ujaqb4dod5a',
        id: '21ghqdxovnpqd4ujaqb4dod5a',
        type: 'user',
        uri: 'spotify:user:21ghqdxovnpqd4ujaqb4dod5a'
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/1Xylc3o4UrD53lo9CvFvVg'
              },
              href: 'https://api.spotify.com/v1/artists/1Xylc3o4UrD53lo9CvFvVg',
              id: '1Xylc3o4UrD53lo9CvFvVg',
              name: 'Zara Larsson',
              type: 'artist',
              uri: 'spotify:artist:1Xylc3o4UrD53lo9CvFvVg'
            }
          ],
          available_markets: [
            'AD',
            'AL',
            'AR',
            'AT',
            'AU',
            'BA',
            'BE',
            'BG',
            'BO',
            'BR',
            'BY',
            'CA',
            'CH',
            'CL',
            'CO',
            'CR',
            'CY',
            'CZ',
            'DE',
            'DK',
            'DO',
            'DZ',
            'EC',
            'EE',
            'ES',
            'FI',
            'FR',
            'GR',
            'GT',
            'HK',
            'HN',
            'HR',
            'HU',
            'ID',
            'IE',
            'IL',
            'IN',
            'IS',
            'IT',
            'JP',
            'KZ',
            'LI',
            'LT',
            'LU',
            'LV',
            'MA',
            'MC',
            'MD',
            'ME',
            'MK',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'PA',
            'PE',
            'PH',
            'PL',
            'PT',
            'PY',
            'RO',
            'RS',
            'RU',
            'SG',
            'SI',
            'SK',
            'SV',
            'TH',
            'TN',
            'TR',
            'TW',
            'UA',
            'US',
            'UY',
            'VN',
            'XK',
            'ZA'
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5YLRVHDVRw3QqWbeTGpC5B'
          },
          href: 'https://api.spotify.com/v1/albums/5YLRVHDVRw3QqWbeTGpC5B',
          id: '5YLRVHDVRw3QqWbeTGpC5B',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2739e1683774b22648f4f178ed3',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e029e1683774b22648f4f178ed3',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048519e1683774b22648f4f178ed3',
              width: 64
            }
          ],
          name: 'So Good',
          release_date: '2017-03-17',
          release_date_precision: 'day',
          total_tracks: 15,
          type: 'album',
          uri: 'spotify:album:5YLRVHDVRw3QqWbeTGpC5B'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1Xylc3o4UrD53lo9CvFvVg'
            },
            href: 'https://api.spotify.com/v1/artists/1Xylc3o4UrD53lo9CvFvVg',
            id: '1Xylc3o4UrD53lo9CvFvVg',
            name: 'Zara Larsson',
            type: 'artist',
            uri: 'spotify:artist:1Xylc3o4UrD53lo9CvFvVg'
          }
        ],
        available_markets: [
          'AD',
          'AL',
          'AR',
          'AT',
          'AU',
          'BA',
          'BE',
          'BG',
          'BO',
          'BR',
          'BY',
          'CA',
          'CH',
          'CL',
          'CO',
          'CR',
          'CY',
          'CZ',
          'DE',
          'DK',
          'DO',
          'DZ',
          'EC',
          'EE',
          'ES',
          'FI',
          'FR',
          'GR',
          'GT',
          'HK',
          'HN',
          'HR',
          'HU',
          'ID',
          'IE',
          'IL',
          'IN',
          'IS',
          'IT',
          'JP',
          'KZ',
          'LI',
          'LT',
          'LU',
          'LV',
          'MA',
          'MC',
          'MD',
          'ME',
          'MK',
          'MT',
          'MX',
          'MY',
          'NI',
          'NL',
          'NO',
          'NZ',
          'PA',
          'PE',
          'PH',
          'PL',
          'PT',
          'PY',
          'RO',
          'RS',
          'RU',
          'SG',
          'SI',
          'SK',
          'SV',
          'TH',
          'TN',
          'TR',
          'TW',
          'UA',
          'US',
          'UY',
          'VN',
          'XK',
          'ZA'
        ],
        disc_number: 1,
        duration_ms: 224030,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'USSM11607151'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/0ADG9OgdVTL7fgREP75BrZ'
        },
        href: 'https://api.spotify.com/v1/tracks/0ADG9OgdVTL7fgREP75BrZ',
        id: '0ADG9OgdVTL7fgREP75BrZ',
        is_local: false,
        name: "Ain't My Fault",
        popularity: 69,
        preview_url:
          'https://p.scdn.co/mp3-preview/20a2b8cc9b444e7244ff5d6d379220e281bb4732?cid=774b29d4f13844c495f206cafdad9c86',
        track: true,
        track_number: 11,
        type: 'track',
        uri: 'spotify:track:0ADG9OgdVTL7fgREP75BrZ'
      },
      video_thumbnail: {
        url: null
      }
    },
    {
      added_at: '2019-04-19T08:58:53Z',
      added_by: {
        external_urls: {
          spotify: 'https://open.spotify.com/user/21ghqdxovnpqd4ujaqb4dod5a'
        },
        href: 'https://api.spotify.com/v1/users/21ghqdxovnpqd4ujaqb4dod5a',
        id: '21ghqdxovnpqd4ujaqb4dod5a',
        type: 'user',
        uri: 'spotify:user:21ghqdxovnpqd4ujaqb4dod5a'
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/64M6ah0SkkRsnPGtGiRAbb'
              },
              href: 'https://api.spotify.com/v1/artists/64M6ah0SkkRsnPGtGiRAbb',
              id: '64M6ah0SkkRsnPGtGiRAbb',
              name: 'Bebe Rexha',
              type: 'artist',
              uri: 'spotify:artist:64M6ah0SkkRsnPGtGiRAbb'
            }
          ],
          available_markets: [
            'AD',
            'AE',
            'AL',
            'AR',
            'AT',
            'AU',
            'BA',
            'BE',
            'BG',
            'BH',
            'BO',
            'BR',
            'BY',
            'CA',
            'CH',
            'CL',
            'CO',
            'CR',
            'CY',
            'CZ',
            'DE',
            'DK',
            'DO',
            'DZ',
            'EC',
            'EE',
            'EG',
            'ES',
            'FI',
            'FR',
            'GB',
            'GR',
            'GT',
            'HK',
            'HN',
            'HR',
            'HU',
            'ID',
            'IE',
            'IL',
            'IN',
            'IS',
            'IT',
            'JO',
            'JP',
            'KW',
            'KZ',
            'LB',
            'LI',
            'LT',
            'LU',
            'LV',
            'MA',
            'MC',
            'MD',
            'ME',
            'MK',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'OM',
            'PA',
            'PE',
            'PH',
            'PL',
            'PS',
            'PT',
            'PY',
            'QA',
            'RO',
            'RS',
            'RU',
            'SA',
            'SE',
            'SG',
            'SI',
            'SK',
            'SV',
            'TH',
            'TN',
            'TR',
            'TW',
            'UA',
            'US',
            'UY',
            'VN',
            'XK',
            'ZA'
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/4TOkZvtqNpg5UHyGxCn0mS'
          },
          href: 'https://api.spotify.com/v1/albums/4TOkZvtqNpg5UHyGxCn0mS',
          id: '4TOkZvtqNpg5UHyGxCn0mS',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b27361fe6d3a50c0beaa3cfe33e9',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e0261fe6d3a50c0beaa3cfe33e9',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d0000485161fe6d3a50c0beaa3cfe33e9',
              width: 64
            }
          ],
          name: 'Expectations',
          release_date: '2018-06-22',
          release_date_precision: 'day',
          total_tracks: 14,
          type: 'album',
          uri: 'spotify:album:4TOkZvtqNpg5UHyGxCn0mS'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/64M6ah0SkkRsnPGtGiRAbb'
            },
            href: 'https://api.spotify.com/v1/artists/64M6ah0SkkRsnPGtGiRAbb',
            id: '64M6ah0SkkRsnPGtGiRAbb',
            name: 'Bebe Rexha',
            type: 'artist',
            uri: 'spotify:artist:64M6ah0SkkRsnPGtGiRAbb'
          }
        ],
        available_markets: [
          'AD',
          'AE',
          'AL',
          'AR',
          'AT',
          'AU',
          'BA',
          'BE',
          'BG',
          'BH',
          'BO',
          'BR',
          'BY',
          'CA',
          'CH',
          'CL',
          'CO',
          'CR',
          'CY',
          'CZ',
          'DE',
          'DK',
          'DO',
          'DZ',
          'EC',
          'EE',
          'EG',
          'ES',
          'FI',
          'FR',
          'GB',
          'GR',
          'GT',
          'HK',
          'HN',
          'HR',
          'HU',
          'ID',
          'IE',
          'IL',
          'IN',
          'IS',
          'IT',
          'JO',
          'JP',
          'KW',
          'KZ',
          'LB',
          'LI',
          'LT',
          'LU',
          'LV',
          'MA',
          'MC',
          'MD',
          'ME',
          'MK',
          'MT',
          'MX',
          'MY',
          'NI',
          'NL',
          'NO',
          'NZ',
          'OM',
          'PA',
          'PE',
          'PH',
          'PL',
          'PS',
          'PT',
          'PY',
          'QA',
          'RO',
          'RS',
          'RU',
          'SA',
          'SE',
          'SG',
          'SI',
          'SK',
          'SV',
          'TH',
          'TN',
          'TR',
          'TW',
          'UA',
          'US',
          'UY',
          'VN',
          'XK',
          'ZA'
        ],
        disc_number: 1,
        duration_ms: 195519,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'USWB11800739'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/04ZTP5KsCypmtCmQg5tH9R'
        },
        href: 'https://api.spotify.com/v1/tracks/04ZTP5KsCypmtCmQg5tH9R',
        id: '04ZTP5KsCypmtCmQg5tH9R',
        is_local: false,
        name: "I'm a Mess",
        popularity: 76,
        preview_url:
          'https://p.scdn.co/mp3-preview/04bb66ab05bee040b9154d8e8a013aaf471d6f61?cid=774b29d4f13844c495f206cafdad9c86',
        track: true,
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:04ZTP5KsCypmtCmQg5tH9R'
      },
      video_thumbnail: {
        url: null
      }
    },
    {
      added_at: '2019-04-19T09:05:04Z',
      added_by: {
        external_urls: {
          spotify: 'https://open.spotify.com/user/21ghqdxovnpqd4ujaqb4dod5a'
        },
        href: 'https://api.spotify.com/v1/users/21ghqdxovnpqd4ujaqb4dod5a',
        id: '21ghqdxovnpqd4ujaqb4dod5a',
        type: 'user',
        uri: 'spotify:user:21ghqdxovnpqd4ujaqb4dod5a'
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/0X2BH1fck6amBIoJhDVmmJ'
              },
              href: 'https://api.spotify.com/v1/artists/0X2BH1fck6amBIoJhDVmmJ',
              id: '0X2BH1fck6amBIoJhDVmmJ',
              name: 'Ellie Goulding',
              type: 'artist',
              uri: 'spotify:artist:0X2BH1fck6amBIoJhDVmmJ'
            },
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/5fMUXHkw8R8eOP2RNVYEZX'
              },
              href: 'https://api.spotify.com/v1/artists/5fMUXHkw8R8eOP2RNVYEZX',
              id: '5fMUXHkw8R8eOP2RNVYEZX',
              name: 'Diplo',
              type: 'artist',
              uri: 'spotify:artist:5fMUXHkw8R8eOP2RNVYEZX'
            },
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/1zNqQNIdeOUZHb8zbZRFMX'
              },
              href: 'https://api.spotify.com/v1/artists/1zNqQNIdeOUZHb8zbZRFMX',
              id: '1zNqQNIdeOUZHb8zbZRFMX',
              name: 'Swae Lee',
              type: 'artist',
              uri: 'spotify:artist:1zNqQNIdeOUZHb8zbZRFMX'
            }
          ],
          available_markets: [
            'AD',
            'AE',
            'AL',
            'AR',
            'AT',
            'AU',
            'BA',
            'BE',
            'BG',
            'BH',
            'BO',
            'BR',
            'CA',
            'CH',
            'CL',
            'CO',
            'CR',
            'CY',
            'CZ',
            'DE',
            'DK',
            'DO',
            'DZ',
            'EC',
            'EE',
            'EG',
            'ES',
            'FI',
            'FR',
            'GB',
            'GR',
            'GT',
            'HK',
            'HN',
            'HR',
            'HU',
            'ID',
            'IE',
            'IL',
            'IN',
            'IS',
            'IT',
            'JO',
            'JP',
            'KW',
            'KZ',
            'LB',
            'LI',
            'LT',
            'LU',
            'LV',
            'MA',
            'MC',
            'MD',
            'ME',
            'MK',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'OM',
            'PA',
            'PE',
            'PH',
            'PL',
            'PS',
            'PT',
            'PY',
            'QA',
            'RO',
            'RS',
            'RU',
            'SA',
            'SE',
            'SG',
            'SI',
            'SK',
            'SV',
            'TH',
            'TN',
            'TR',
            'TW',
            'UA',
            'US',
            'UY',
            'VN',
            'XK',
            'ZA'
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/4bLCVUEB9YWKEeaJm8FfqQ'
          },
          href: 'https://api.spotify.com/v1/albums/4bLCVUEB9YWKEeaJm8FfqQ',
          id: '4bLCVUEB9YWKEeaJm8FfqQ',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273dd640dbca55836e23894212a',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02dd640dbca55836e23894212a',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851dd640dbca55836e23894212a',
              width: 64
            }
          ],
          name: 'Close To Me (feat. Swae Lee)',
          release_date: '2018-10-24',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:4bLCVUEB9YWKEeaJm8FfqQ'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0X2BH1fck6amBIoJhDVmmJ'
            },
            href: 'https://api.spotify.com/v1/artists/0X2BH1fck6amBIoJhDVmmJ',
            id: '0X2BH1fck6amBIoJhDVmmJ',
            name: 'Ellie Goulding',
            type: 'artist',
            uri: 'spotify:artist:0X2BH1fck6amBIoJhDVmmJ'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5fMUXHkw8R8eOP2RNVYEZX'
            },
            href: 'https://api.spotify.com/v1/artists/5fMUXHkw8R8eOP2RNVYEZX',
            id: '5fMUXHkw8R8eOP2RNVYEZX',
            name: 'Diplo',
            type: 'artist',
            uri: 'spotify:artist:5fMUXHkw8R8eOP2RNVYEZX'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1zNqQNIdeOUZHb8zbZRFMX'
            },
            href: 'https://api.spotify.com/v1/artists/1zNqQNIdeOUZHb8zbZRFMX',
            id: '1zNqQNIdeOUZHb8zbZRFMX',
            name: 'Swae Lee',
            type: 'artist',
            uri: 'spotify:artist:1zNqQNIdeOUZHb8zbZRFMX'
          }
        ],
        available_markets: [
          'AD',
          'AE',
          'AL',
          'AR',
          'AT',
          'AU',
          'BA',
          'BE',
          'BG',
          'BH',
          'BO',
          'BR',
          'CA',
          'CH',
          'CL',
          'CO',
          'CR',
          'CY',
          'CZ',
          'DE',
          'DK',
          'DO',
          'DZ',
          'EC',
          'EE',
          'EG',
          'ES',
          'FI',
          'FR',
          'GB',
          'GR',
          'GT',
          'HK',
          'HN',
          'HR',
          'HU',
          'ID',
          'IE',
          'IL',
          'IN',
          'IS',
          'IT',
          'JO',
          'JP',
          'KW',
          'KZ',
          'LB',
          'LI',
          'LT',
          'LU',
          'LV',
          'MA',
          'MC',
          'MD',
          'ME',
          'MK',
          'MT',
          'MX',
          'MY',
          'NI',
          'NL',
          'NO',
          'NZ',
          'OM',
          'PA',
          'PE',
          'PH',
          'PL',
          'PS',
          'PT',
          'PY',
          'QA',
          'RO',
          'RS',
          'RU',
          'SA',
          'SE',
          'SG',
          'SI',
          'SK',
          'SV',
          'TH',
          'TN',
          'TR',
          'TW',
          'UA',
          'US',
          'UY',
          'VN',
          'XK',
          'ZA'
        ],
        disc_number: 1,
        duration_ms: 182623,
        episode: false,
        explicit: true,
        external_ids: {
          isrc: 'GBUM71805350'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/5JEx7HbmvHQQswJCsoo9rA'
        },
        href: 'https://api.spotify.com/v1/tracks/5JEx7HbmvHQQswJCsoo9rA',
        id: '5JEx7HbmvHQQswJCsoo9rA',
        is_local: false,
        name: 'Close To Me (with Diplo) (feat. Swae Lee)',
        popularity: 71,
        preview_url: null,
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:5JEx7HbmvHQQswJCsoo9rA'
      },
      video_thumbnail: {
        url: null
      }
    }
  ];
  const { playlist: { name, images = [], owner, description } = {} } = useLocation()?.state as {
    playlist: Playlist;
  };
  const imageUrl = getSmallestSizeImage(images, 640 || 300);
  return (
    <div className="w-auto">
      <div className="flex flex-wrap justify-center w-full">
        <CommonBriefCard
          data={{
            title: name,
            imageUrl: imageUrl,
            subtitle: description
          }}
        />
        <Tracks tracks={tracks.map(({ track }) => track)} />
      </div>
    </div>
  );
}
