export const Auth = `#graphql
  type Login {
    accessToken: String!
    refreshToken: String!
  }

  input ILogin {
    username: String!
    password: String!
  }

  type RefreshToken {
    accessToken: String!
  }

  input IRefreshToken {
    refreshToken: String!
  }

  type Logout {
    message: String!
  }
`
