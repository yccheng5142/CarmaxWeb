function generateToken() {
  const arr = new Uint8Array(12);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}
const user = {
  id: '489567',
  avatar: '/avatars/2.png',
  firstName: 'Clara',
  lastName: 'Martinez',
  email: 'example@uifort.com',
};
class AuthClient {
  async signUp(_) {
    const token = generateToken();
    localStorage.setItem('uifort-authentication', token);
    return {};
  }
  async signInWithOAuth(_) {
    return {
      error: 'This functionality is not available in demo mode',
    };
  }
  async signInWithPassword(params) {
    const { email, password } = params;
    if (email !== 'example@uifort.com' || password !== 'DemoPass123') {
      return {
        error: 'Please ensure your credentials are correct',
      };
    }
    const token = generateToken();
    localStorage.setItem('uifort-authentication', token);
    return {};
  }
  async resetPassword(_) {
    return {
      error: 'This functionality is not available in demo mode',
    };
  }
  async updatePassword(_) {
    return {
      error: 'This functionality is not available in demo mode',
    };
  }
  async getUser() {
    const token = localStorage.getItem('uifort-authentication');
    if (!token) {
      return {
        data: null,
      };
    }
    return {
      data: user,
    };
  }
  async signOut() {
    localStorage.removeItem('uifort-authentication');
    return {};
  }
}
export const authClient = new AuthClient();
