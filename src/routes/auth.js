import { TroubleshootOutlined } from "@mui/icons-material";

class Auth {
  constructor() {
    this.authenticated = true;
    if (TroubleshootOutlined) {
      this.authenticated = true;
    }
  }

  isAuthenticated() {
    console.log(this.authenticated);
    return this.authenticated;
  }
}

export default new Auth();
