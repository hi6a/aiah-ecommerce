export interface iSignInRequest{
  username: string,
  password: string
  }
  
  export interface iSignInResponse{
    Login: {
      AccessToken:      string;
      ExpiresIn:        number;
      RefreshExpiresIn: number;
      RefreshToken:     string;
      TokenType:        string;
      NotBeforePolicy:  number;
      SessionState:     string;
      Scope:            string;
    }
  }
  
  export interface iSignUpRequest{
    Firstname: string;
    Lastname:  string;
    Email:     string;
    Password:  string;
    RoleName:  string;
    }
  
    export interface iSignUpResponse{
      id:                         string;
      createdTimestamp:           number;
      username:                   string;
      enabled:                    boolean;
      totp:                       boolean;
      emailVerified:              boolean;
      firstName:                  string;
      lastName:                   string;
      email:                      string;
      disableableCredentialTypes: any[];
      requiredActions:            any[];
      notBefore:                  number;
      access: {
        manageGroupMembership: boolean;
        view:                  boolean;
        mapRoles:              boolean;
        impersonate:           boolean;
        manage:                boolean;
      }
      attributes:                 null;
    }