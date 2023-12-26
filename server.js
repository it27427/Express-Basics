const app = require('./app');

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(
    `🚀 Server is successfully listening at: http://localhost:${port} in ${process.env.NODE_ENV} mode`
      .bgMagenta
  );
});
