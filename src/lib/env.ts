export interface Env {
  PORT: number;
  FRONTEND_URL: string;
  /**
   * Public base URL where this API is reachable from a browser. Used to build
   * absolute links (e.g. email unsubscribe URLs) that must be clickable in a
   * mail client. Falls back to FRONTEND_URL when unset.
   */
  PUBLIC_API_URL: string;
  /**
   * Path to a CA certificate (PEM file) used to validate the database server's TLS certificate.
   * If not set, the system's default CAs are used.
   */
  DB_SSL_CA_PATH?: string;
  REQUEST_TIMEOUT_MS: number;
  ADMIN_REQUEST_TIMEOUT_MS: number;
}

export function initEnv(): Env {
  const port = parseInt(process.env.PORT ?? "3001", 10);
  const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:3000";
  const publicApiUrl = process.env.PUBLIC_API_URL ?? frontendUrl;
  const dbSslCaPath = process.env.DB_SSL_CA_PATH;
  const requestTimeoutMs = parseInt(process.env.REQUEST_TIMEOUT_MS ?? "30000", 10);
  const adminRequestTimeoutMs = parseInt(process.env.ADMIN_REQUEST_TIMEOUT_MS ?? "60000", 10);

  return {
    PORT: port,
    FRONTEND_URL: frontendUrl,
    PUBLIC_API_URL: publicApiUrl,
    DB_SSL_CA_PATH: dbSslCaPath,
    REQUEST_TIMEOUT_MS: requestTimeoutMs,
    ADMIN_REQUEST_TIMEOUT_MS: adminRequestTimeoutMs,
  };
}
