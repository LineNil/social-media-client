import { logout } from './logout';
import * as storage from '../../storage/index';

jest.mock('../../storage/index');

describe('logout function', () => {
  it('should clear the token from browser storage', () => {
    logout();
    expect(storage.remove).toHaveBeenCalledWith('token');
    expect(storage.remove).toHaveBeenCalledWith('profile');
  });
});
