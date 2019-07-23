package app.bk.api;

import app.bk.api.md.ResultModel;
import app.bk.api.md.UserModel;

public interface UserAPI extends Api {

	ResultModel login(String username, String password);
	
	UserModel findByUsername(String username);
	
}
