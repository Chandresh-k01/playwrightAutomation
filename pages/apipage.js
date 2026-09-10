export class ApiPage {

  constructor(request) {
    this.request = request;

    this.baseURL = 'https://api-testing-postman.vercel.app/api/v1';
  }


  // ==========================================
  // POST - Login User
  // ==========================================

  async login(data) {

    const response = await this.request.post(
      `${this.baseURL}/users/login`,
      {
        data: data
      }
    );

    return response;
  }


  // ==========================================
  // GET - Current User
  // ==========================================

  async getCurrentUser(token) {

    const response = await this.request.get(
      `${this.baseURL}/users/current-user`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response;
  }


  // ==========================================
  // PUT - Replace Account
  // ==========================================

  async replaceAccount(token) {

    const response = await this.request.put(
      `${this.baseURL}/users/replace-account`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },

        data: {
          fullname: 'chandresh khatri',
          email: 'chandresh10012@gmail.com',
          username: 'chandresh0001'
        }
      }
    );

    return response;
  }


  // ==========================================
  // PATCH - Update Account
  // ==========================================

  async updateAccount(token) {

    const response = await this.request.patch(
      `${this.baseURL}/users/update-account`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },

        data: {
          fullname: 'chandresh khatri',
          email: 'chandresh10012@gmail.com'
        }
      }
    );

    return response;
  }


  // ==========================================
  // DELETE - Delete Account
  // ==========================================

  async deleteAccount(token) {

    const response = await this.request.delete(
      `${this.baseURL}/users/delete-account`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response;
  }
}
