/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        domains: ['image.tmdb.org'] //resimleri çekebilmemiz için bu kısım önemldir, yazmazsak resimler gelmez hata alırız.
    }

}

module.exports = nextConfig
 