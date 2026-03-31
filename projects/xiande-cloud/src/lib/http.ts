export function badRequest(message: string, status = 400) {
  return Response.json({ ok: false, message }, { status });
}

export function ok<T>(data: T, status = 200) {
  return Response.json({ ok: true, data }, { status });
}
