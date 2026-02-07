import type { NextConfig } from "next";

// Disable TLS verification for development (Aiven SSL issue)
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
