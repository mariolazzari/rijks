import Result from "./interfaces/Result";

async function fetchData<T>(uri: string) {
  let result: Result<T> = {
    success: false,
    status: 500,
    data: undefined,
    error: undefined,
  };

  try {
    const res = await fetch(uri);
    result.status = res.status;

    if (res.ok) {
      result.success = true;
      result.data = await res.json();
    } else {
      result.error = res.statusText;
    }
  } catch (ex) {
    if (ex instanceof Error) {
      result.error = ex.message;
    } else {
      result.error = JSON.stringify(ex);
    }
  } finally {
    return result;
  }
}

export { fetchData };
