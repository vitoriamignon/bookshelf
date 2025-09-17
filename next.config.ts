import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // permitir domínios usados nas capas (ex: example.com). Adicione mais domínios conforme necessário.
    domains: ["example.com"],
  },
};

export default nextConfig;
