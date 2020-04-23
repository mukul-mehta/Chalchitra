const baseurl = 'https://api.iit-techambit.in/';
const issuecdn = 'https://cdn.iit-techambit.in/issue/';
const basecms = 'https://cms.iit-techambit.in/jsonapi/node/'
const endpoints = {
  subscribe: 'post/subscribe',
  user: {
    getFollowedTags: 'user/followedTags',
    getFeed: 'user/getFeed',
    getPayment: 'user/get_payment',
    postPayment: 'user/payment',
    postInfoUpdate: 'user/update',
    getUser: 'user',
    getSavedArticles: 'user/savedArticles'
  },

  auth: {
    postLogin: 'auth/login',
    getLogout: 'auth/logout',
    postSignUp: 'auth/signup',
    postForgotPassword: 'auth/reset/request'
  },
  post: {
    getByTags: 'post/by_tags',
    getAll: 'post/getAll',
    postCreate: 'post/create',
    postRate: 'post/rate',
    postSave: 'post/save',
    postuploadImg: 'post/uploadImg',
    getPost: 'post',
    subscribe: 'post/subscribe'
  },
  tag: {
    getAll: 'tag/getAll',
    postPriority: 'tag/setPriority'
  },

  issue: {
    getAll: 'issues/getAll'
  },

  newsletter: {
    getLatest: 'newsletter/getLatest'
  },

  cms: {
    article: 'article'
  }
};

let config = {
  baseurl,
  endpoints,
  issuecdn,
  basecms
};

export default config;
