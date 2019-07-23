package app.bk.bn.srv.im;

import app.bk.api.UserAPI;
import app.bk.api.md.ResultModel;
import app.bk.api.md.UserModel;

public class UserServiceImpl implements UserAPI {
	
	@Override
	public ResultModel login(String username, String pw) {
		if(username != null && pw != null && username.equals(pw)) {
			return new ResultModel();
		} else {
			return new ResultModel("Invalid user: " + username);
		}
	}
	
	@Override
	public UserModel findByUsername(String username) {
		UserModel user = new UserModel();
		
		user.setUsername(username);
		user.setName("Test User: " + username);
		
		return user;
	}
	
}
