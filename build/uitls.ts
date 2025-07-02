export function wrapperEnv(env: Record<string, string>) {
  return {
    VITE_APP_TITLE: env.VITE_APP_TITLE,
    VITE_PORT: Number(env.VITE_PORT),
  };
}
