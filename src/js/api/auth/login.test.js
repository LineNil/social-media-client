import { login } from './login';
import localStorageMock from './localStorageMock';

jest.mock('../constants', () => ({ apiPath: 'mocked-api-path' }));
jest.mock('../headers', () => ({ headers: jest.fn() }));

describe('login function', () => {
  beforeAll(() => {
    global.localStorage = localStorageMock;
  });

  afterAll(() => {
    global.localStorage = null;
  });

  it('should fetch and store a token, name, and email in browser storage on success', async () => {
    const name = 'test_user';
    const email = 'test@example.com';
    const password = 'password123';

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        name,
        email,
        accessToken: 'mocked-token',
      }),
    });

    const result = await login(email, password);

    expect(result).toEqual({
      name: 'test_user',
      email: 'test@example.com',
    });

    expect(localStorageMock.setItem).toHaveBeenCalledTimes(2);
    expect(localStorageMock.setItem).toHaveBeenNthCalledWith(
      1,
      'token',
      'mocked-token',
    );
    expect(localStorageMock.setItem).toHaveBeenNthCalledWith(2, 'profile', {
      name: 'test_user',
      email: 'test@example.com',
    });
  });

  it('should throw an error on API request failure', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      statusText: 'Unauthorized',
    });

    await expect(login('test@example.com', 'password123')).rejects.toThrow(
      'Unauthorized',
    );
  });
});
