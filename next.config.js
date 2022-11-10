/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images : {
    domains : [
      'links.papareact.com',
      'jsonkeeper.com'
    ],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoibW9uMi1kZXYiLCJhIjoiY2xhYWhpMXQ1MDJwaTNwc3prN3RqZDh4ZyJ9.2jX9aEz2wQYxGS6r9sRLbg'
  }
}
