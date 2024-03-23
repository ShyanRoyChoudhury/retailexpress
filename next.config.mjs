/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.istockphoto.com', 'rukminim2.flixcart.com', 'images.unsplash.com','plus.unsplash.com', 'shutterstock.com', 'img.freepik.com','images-eu.ssl-images-amazon.com'],
      },
      webpack: (config) => {
            config.externals = [...config.externals, 'bcrypt'];
            return config;
          },
};

export default nextConfig;
