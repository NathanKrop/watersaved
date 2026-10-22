export async function readFormApiResponse(response: Response): Promise<Record<string, unknown>> {
  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    throw new Error("The server returned an invalid response. Please try again.");
  }

  if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
    throw new Error("The server returned an invalid response. Please try again.");
  }

  const result = payload as Record<string, unknown>;
  if (!response.ok) {
    throw new Error(
      typeof result.error === "string" ? result.error : "Something went wrong. Please try again.",
    );
  }

  return result;
}
