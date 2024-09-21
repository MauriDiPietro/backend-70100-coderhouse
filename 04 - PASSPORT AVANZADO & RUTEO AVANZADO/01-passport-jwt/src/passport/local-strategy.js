import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import * as services from '../services/user.services.js';

const strategyConfig = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
};

const signup = async (req, email, password, done) => {
    try {
        const user = await services.getUserByEmail(email);
        if(user) return done(null, false, { message: 'User exists' });
        const newUser = await services.register(req.body);
        return done(null, newUser);
    } catch (error) {
        return done(error.message)
    }
};

const login = async(req, email, password, done) => {
    try {
        const user = { email, password };
        const userLogin = await services.login(user);
        if(!userLogin) return done(null, false, { message: 'Invalid Credentials' });
        return done(null, userLogin); 
    } catch (error) {
        return done(error.message)
    }
};

const loginStrategy = new LocalStrategy(strategyConfig, login);
const signUpStrategy = new LocalStrategy(strategyConfig, signup);

passport.use('login', loginStrategy);
passport.use('register', signUpStrategy);

/*
req.session.passport.user = user._id
*/

passport.serializeUser((user, done)=>{
    try {
        done(null, user._id);
    } catch (error) {
        return done(error);
    }
});

passport.deserializeUser(async(id, done)=>{
    try {
        const user = await services.getUserById(id);
        return done(null, user);
    } catch (error) {
        return done(error);
    }
});