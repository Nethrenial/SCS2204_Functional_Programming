import dotenv from "dotenv";
dotenv.config();

// importing packages
import express from "express";
import engine from "express-engine-jsx";
import cookieParser from "cookie-parser";
import session from "express-session";
import connectSqlite3 from "connect-sqlite3";
import passport from "passport";

// importing auth
import { localStrategy } from "./auth/index.js";

// importing routes
import { authRouter, homeRouter } from "./routes/index.js";

// creating the express application
const app = express();

// session store
const SQLiteStore = connectSqlite3(session);

//setup session management
app.use(
  session({
    store: new SQLiteStore({ db: "sessionsDB.db" }),
    secret: process.env.SESSION_SECRET || "ohNoIforgotToAddASecret",
    saveUninitialized: true,
    cookie: {
      maxAge: Number(process.env.SESSION_EXPIRATION_TIME),
    },
    resave: true,
  })
);

//setup passport

passport.use(localStrategy);
passport.serializeUser((user, done) => {
  done(null, {
    ...user,
    password: undefined,
  });
});

passport.deserializeUser((userObj, done) => {
  done(null, userObj);
});

app.use(passport.initialize());
app.use(passport.session());

// setup static file serving
app.use(express.static("public"));
//setup parsing form data
app.use(express.urlencoded({ extended: true }));
// setup parsing cookies
app.use(cookieParser());
// setup render engine
app.set("views", "./views");
app.engine("jsx", engine);
app.set("view engine", "jsx");

//setting up routes
app.use("/", homeRouter);
app.use("/auth", authRouter);

const PORT = Number(process.env.PORT);
app.listen(PORT, () => {
  console.log(
    `Server started listening on port ${PORT}.\nVisit : http://localhost:${PORT}`
  );
});
