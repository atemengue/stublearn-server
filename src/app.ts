import cookieParser from 'cookie-parser';
import express, { Express, Request, Response } from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import path from 'path';
import indexRoutes from './routes';

const app : Express = express();

// view engine setup
app.set('views', path.join(path.resolve(), 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), 'public')));


app.use(indexRoutes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});




// error handler
app.use((err: any, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
