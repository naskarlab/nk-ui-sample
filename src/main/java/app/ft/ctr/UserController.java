package app.ft.ctr;

import java.util.function.Consumer;

import app.bk.api.UserAPI;
import app.bk.api.md.ResultModel;
import app.bk.api.md.UserModel;
import app.ft.api.stub.UserServiceStub;
import nk.ft.http.im.BusClient;

public class UserController {
	
	private BusClient<UserAPI> bus;
	private Consumer<String> onError;
	
	public UserController(Consumer<String> onError) {
		this.onError = onError;
		bus = new BusClient<UserAPI>(new UserServiceStub());
		bus.addFactory(ResultModel.class, () -> new ResultModel());
		bus.addFactory(UserModel.class, () -> new UserModel());
	}

	public void login(String username, String pw, Consumer<ResultModel> call) {
		bus.on(i -> i.login(username, pw)).then((m) -> {
			call.accept(m);
		}, onError);
	}
	
	public void findByUsername(String username, Consumer<UserModel> call) {
		bus.on(i -> i.findByUsername(username)).then((m) -> {
			call.accept(m);
		}, onError);
	}
	
}
