const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`sever running on port ${port}`);
});