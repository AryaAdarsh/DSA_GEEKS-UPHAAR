var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var contactRouter = require('./routes/contact');
var aboutRouter = require('./routes/about');
var subscriptionRouter = require('./routes/subscription');
var campaignerRouter = require('./routes/campaigner');
var volunteerRouter = require('./routes/volunteer');
var vdRouter = require('./routes/vd');
var paymentRouter = require('./routes/payment');
var volunteersignupRouter = require('./routes/volunteer-signup');
var campaigndashboardRouter = require('./routes/campaign-dashboard');
var karmaRouter = require('./routes/karmaboard');
var campaignRouter = require('./routes/campaign');
var campaigncRouter = require('./routes/campaignc');
var cdetailRouter = require('./routes/cdetail');
var cdetail2Router = require('./routes/cdetail2');
var citizenRouter = require('./routes/citizen');
var PageFRouter = require('./routes/PageF');
var PageGRouter = require('./routes/PageG');
var PageHRouter = require('./routes/PageH');
var PageIRouter = require('./routes/PageI');
var PageJRouter = require('./routes/PageJ');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/about', aboutRouter);
app.use('/payment', paymentRouter);
app.use('/subscription', subscriptionRouter);
app.use('/campaigner', campaignerRouter);
app.use('/volunteer', volunteerRouter);
app.use('/vd', vdRouter);
app.use('/karma', karmaRouter);
app.use('/campaign-dashboard', campaigndashboardRouter);
app.use('/volunteer-signup', volunteersignupRouter);
app.use('/campaign', campaignRouter);
app.use('/campaignc', campaigncRouter);
app.use('/cdetail', cdetailRouter);
app.use('/cdetail2', cdetail2Router);
app.use('/citizen', citizenRouter);
app.use('/PageF', PageFRouter);
app.use('/PageG', PageGRouter);
app.use('/PageH', PageHRouter);
app.use('/PageI', PageIRouter);
app.use('/PageJ', PageJRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //next(createError(404));
  res.render('error');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
