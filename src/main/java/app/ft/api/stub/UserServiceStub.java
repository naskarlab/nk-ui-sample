package app.ft.api.stub;

import app.bk.api.UserAPI;
import app.bk.api.md.ResultModel;
import app.bk.api.md.UserModel;

public class UserServiceStub implements UserAPI {
	
	@Override
	public ResultModel login(String username, String password) {
		throw new UnsupportedOperationException();
	}

	@Override
	public UserModel findByUsername(String username) {
		throw new UnsupportedOperationException();
	}

}
