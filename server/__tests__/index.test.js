import request from 'supertest'
import mysql from 'mysql2';
import cors from "cors";
import app from '../index'

describe('Express App Endpoints', () => {

  // Test the '/' endpoint

  test('GET / should return "hello this is backend"', async () => {

    const response = await request(app).get('/');

    expect(response.status).toBe(200);

    expect(response.text).toBe('"hello this is backend"');

  });

 

  // Test the '/home' endpoint

  test('GET /home should return data from the "nons" table', async () => {

    const response = await request(app).get('/home');

    expect(response.status).toBe(200);

    expect(Array.isArray(JSON.parse(response.text))).toBe(true);

  });

 

  // Test the '/items' endpoint

  test('GET /items should return data from the "items" table', async () => {

    const response = await request(app).get('/items');

    expect(response.status).toBe(200);

    expect(Array.isArray(JSON.parse(response.text))).toBe(true);

  });

 

  // Test the '/floors' endpoint

  test('GET /floors should return data from the "floors" table', async () => {

    const response = await request(app).get('/floors');

    expect(response.status).toBe(200);

    expect(Array.isArray(JSON.parse(response.text))).toBe(true);

  });

 

  // Test the '/floordiff' endpoint

  test('GET /floordiff should return data from the "floor diff" table', async () => {

    const response = await request(app).get('/floordiff');

    expect(response.status).toBe(200);

    expect(Array.isArray(JSON.parse(response.text))).toBe(true);

  });

 

  // Test the '/s' endpoint

  test('GET /s should return data from the "s" table', async () => {

    const response = await request(app).get('/s');

    expect(response.status).toBe(200);

    expect(Array.isArray(JSON.parse(response.text))).toBe(true);

  });

 

  // Test the '/nons' endpoint

  test('GET /nons should return data from the "nons" table', async () => {

    const response = await request(app).get('/nons');

    expect(response.status).toBe(200);

    expect(Array.isArray(JSON.parse(response.text))).toBe(true);

  });

});