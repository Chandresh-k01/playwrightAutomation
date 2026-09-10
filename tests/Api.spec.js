import { test, expect } from '@playwright/test';

const data = {
  email: 'chandreshkhatri02@gmail.com',
  username: 'chandresh0001',
  password: 'ch@ndu12345'
};

test(
  'Users API Full Lifecycle Test (REGISTER, LOGIN, GET, PUT, PATCH, DELETE)',
  async ({ request }) => {

    // ==========================================
    // 1. REGISTER USER - POST
    // ==========================================

    const registerResponse = await request.post(
      'https://api-testing-postman.vercel.app/api/v1/users/register',
      {
        data: {
          fullname: 'chandresh khatri',
          email: data.email,
          username: data.username,
          password: data.password
        }
      }
    );

    const registerResult = await registerResponse.json();

    console.log('Register Response Status:', registerResponse.status());
    console.log('Register Response:', registerResult);

    // Registration should be successful
    expect([200, 201]).toContain(registerResponse.status());


    // ==========================================
    // 2. LOGIN USER - POST
    // ==========================================

    const response = await request.post(
      'https://api-testing-postman.vercel.app/api/v1/users/login',
      {
        data: data
      }
    );

    const loginResult = await response.json();

    console.log('Login Response:', loginResult);

    expect(response.status()).toBe(200);

    const token =
      loginResult.data?.accessToken ||
      loginResult.token;


    // ==========================================
    // 3. GET CURRENT USER - GET
    // ==========================================

    const getResponse = await request.get(
      'https://api-testing-postman.vercel.app/api/v1/users/current-user',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log('GET Response Status:', getResponse.status());

    expect(getResponse.status()).toBe(200);


    // ==========================================
    // 4. PUT REPLACE ACCOUNT
    // ==========================================

    const putResponse = await request.put(
      'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
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

    console.log('PUT Response Status:', putResponse.status());

    expect(putResponse.status()).toBe(200);


    // ==========================================
    // 5. PATCH UPDATE ACCOUNT
    // ==========================================

    const patchResponse = await request.patch(
      'https://api-testing-postman.vercel.app/api/v1/users/update-account',
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

    console.log('PATCH Response Status:', patchResponse.status());
    console.log('PATCH Response:', await patchResponse.json());

    expect(patchResponse.status()).toBe(200);


    // ==========================================
    // 6. DELETE USER ACCOUNT
    // ==========================================

    const deleteResponse = await request.delete(
      'https://api-testing-postman.vercel.app/api/v1/users/delete-account',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log('DELETE Response Status:', deleteResponse.status());
    console.log('DELETE Response:', await deleteResponse.json());

    expect(deleteResponse.status()).toBe(200);

  }
);