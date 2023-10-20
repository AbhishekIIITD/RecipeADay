import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

import loginHandler from '../src/pages/api/login.js';
import signupHandler from '../src/pages/api/signup.js';
import userformHandler from '../src/pages/api/userform.js';

app.use('/api/login', loginHandler);
app.use('/api/signup', signupHandler);
app.use('/api/userform', userformHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});