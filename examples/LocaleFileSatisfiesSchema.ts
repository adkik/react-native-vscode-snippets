import { TranslationSchema } from './schema';

const localeFileSatisfiesSchema = {
  appName: 'My App',

  common: {
    ok: 'OK',
    cancel: 'Cancel',
    close: 'Close',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    loading: 'Loading...',
  },

  errors: {
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    minLength: 'Must be at least {min} characters',
    maxLength: 'Must be at most {max} characters',
    unknown: 'Something went wrong. Please try again.',
    network: 'Network error. Check your connection.',
    unauthorized: 'You are not authorized to perform this action',
  },

  auth: {
    login: 'Log in',
    logout: 'Log out',
    signup: 'Sign up',
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot password?',
    resetPassword: 'Reset password',
    rememberMe: 'Remember me',
  },


  navigation: {
    home: 'Home',
    profile: 'Profile',
    settings: 'Settings',
    search: 'Search',
  },

  forms: {
    optional: 'Optional',
    placeholder: {
      email: 'Enter your email',
      password: 'Enter your password',
      search: 'Search...',
    },
  },
} satisfies TranslationSchema;

export default localeFileSatisfiesSchema;