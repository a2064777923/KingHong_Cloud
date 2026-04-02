export function badRequest(message: string, status = 400) {
  return Response.json({ ok: false, message }, { status });
}

export function ok<T>(data: T, status = 200) {
  return Response.json({ ok: true, data }, { status });
}

export type ApiResult<T = unknown> = {
  ok?: boolean;
  message?: string;
  data?: T;
};

export async function readApiResult<T>(response: Response): Promise<ApiResult<T>> {
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return (await response.json()) as ApiResult<T>;
  }

  const text = (await response.text()).trim();
  return {
    ok: response.ok,
    message: text || `请求失败（${response.status}）`,
  };
}
