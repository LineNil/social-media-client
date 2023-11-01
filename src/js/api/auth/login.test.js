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

  it('should fetch and store a token in browser storage on success', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ accessToken: 'mocked-token' }),
    });

    const email = 'test@example.com';
    const password = 'password123';

    const result = await login(email, password);

    expect(result).toEqual({ accessToken: 'mocked-token' });
    expect(localStorageMock.setItem()).toHaveBeenCalledWith(
      'token',
      'mocked-token',
    );
    expect(localStorageMock.setItem()).toHaveBeenCalledWith('profile', {
      accessToken: 'mocked-token',
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
