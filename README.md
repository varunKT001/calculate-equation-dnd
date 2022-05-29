# 🖥️ CALCULATE EQUATION DnD

## ✅ Test the App

**[https://calculate-equation-dnd.herokuapp.com/](https://calculate-equation-dnd.herokuapp.com/)**

## 💾 Database schemas

#### Alphabet schema

| **Field** | **Type** | **Required** |
| --------- | -------- | ------------ |
| alphabet  | String   | True         |
| value     | String   | True         |

## 🌍 APIs

| Method | Route             | Parameters | Query parameters | Body | Description   |
| ------ | ----------------- | ---------- | ---------------- | ---- | ------------- |
| GET    | /api/get-alphabet | -          | -                | -    | Get alphabets |

## 🛠 Installation and setup

1. Clone the repo to your local machine.
2. Install the required dependency for server using :

   ```javascript
   npm install
   ```

3. Install the required dependency for client using :

   ```javascript
   cd client
   npm install
   ```

4. Create a .env file inside the root folder and provide the following environment variables:

   ```env
   DB_URI=<mongo_uri>
   ```

5. Start the backend dev server using :

   ```javascript
   npm run dev

   ```

6. Start the client dev server using :

   ```javascript
   cd client
   npm start
   ```

## 😎 Developed by

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/83509023?v=4" width="150px" alt="GSSoC'22" />
      <br/>
      Varun Kumar Tiwari
      <br/>
      <a href="https://www.linkedin.com/in/varun-tiwari-454591178/">LinkedIn</a>
      <a href="https://github.com/varunKT001">Github</a>
    </td> 
  </tr>
</table>
