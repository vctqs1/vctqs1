/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
console.log(process.env)
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://vctqs1.github.io/' : '',
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
}
