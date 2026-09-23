const testData = {
    pageUrls: {
        homePageUrl: 'https://prestocard.ca/en',
    },

    loginPage: {
        loginPageMessage: 'PRESTO Account Sign In',
        goodUsername: 'mrqaanalysttester@gmail.com',
        badUsername: 'badUserName@gmail.com',
        badUsernameFormat: 'msqaanalysttester gmail.com',
        goodPassword: 'Thisisatest123.',
        badPassword: 'badPassword',
        emptyField: '',
        badLoginMessage: 'Invalid email address or password.',
        badEmailFormatMessage: 'Please enter a valid email address.',
        noEmailMessage: 'A valid input is required.',
        noPaswordMessage: 'A valid password is required.',
        passwordRecoveryEmail: 'mrqaanalysttester.com',
    },
   
    portalHomepage: {
        welcomeMessage: 'Welcome, QA'
    },

    signUpPage: {
        goodUsername: 'msqaanalysttester@gmail.com',
        usernameWSpecialChar: 'fatfinger!£$%^&*()-+@gmail.com',
        mismatchUsername: 'drqaanalysttester@gmail.com',
        existingUsername: 'mrqaanalysttester@gmail.com',
        badUsernameFormat: 'msqaanalysttester gmail.com',
    }
};

module.exports = testData;