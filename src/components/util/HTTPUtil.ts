export default class HTTPUtil {
  private headers = new Headers();

  constructor() {
    this.headers.set('Content-type', 'application/json');
    // TODO: Move auth out of localStorage
    this.headers.set('Authorization', localStorage.getItem('auth') || '');
  }

  public async GET(path: string, customHeaders?: Headers) {
    return await fetch(path, {
      method: 'GET',
      headers: customHeaders || this.headers,
      credentials: 'include'
    });
  }

  public async POST(
    path: string,
    body:
      | string
      | Blob
      | ArrayBufferView
      | ArrayBuffer
      | FormData
      | URLSearchParams
      | ReadableStream<Uint8Array>
      | null
      | undefined,
    customHeaders?: Headers
  ) {
    return await fetch(path, {
      headers: customHeaders || this.headers,
      method: 'POST',
      body: body
    });
  }

  public async DELETE(
    path: string,
    body?:
      | string
      | Blob
      | ArrayBufferView
      | ArrayBuffer
      | FormData
      | URLSearchParams
      | ReadableStream<Uint8Array>
      | null
      | undefined,
    customHeaders?: Headers
  ) {
    return await fetch(path, {
      headers: customHeaders || this.headers,
      method: 'DELETE',
      body: body
    });
  }

  public async PUT(
    path: string,
    body:
      | string
      | Blob
      | ArrayBufferView
      | ArrayBuffer
      | FormData
      | URLSearchParams
      | ReadableStream<Uint8Array>
      | null
      | undefined,
    customHeaders?: Headers
  ) {
    return await fetch(path, {
      headers: customHeaders || this.headers,
      method: 'PUT',
      body: body
    });
  }
}
