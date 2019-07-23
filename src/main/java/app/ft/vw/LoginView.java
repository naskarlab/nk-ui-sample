package app.ft.vw;

import java.util.function.Consumer;

import app.bk.api.md.UserModel;
import app.ft.ctr.UserController;
import nk.ft.ui.Action;
import nk.ft.ui.Component;
import nk.ft.ui.Input;
import nk.ft.ui.Segment;
import nk.ft.ui.ext.UIX;

public class LoginView {

	private UIX ui;
	private Action onClose;
	private UserController userController;

	public LoginView(UIX ui, Action onClose, UserController userController) {
		this.ui = ui;
		this.onClose = onClose;
		this.userController = userController;
	}
	
	public Component init(Consumer<UserModel> onLogin) {
		return ui.wrapper()
			.add(ui.heading().title("nk ui sample"))
			.add(ui.box()
				.add(createForm(onLogin))
			);
	}

	private Segment createForm(Consumer<UserModel> onLogin) {
		
		Input username = ui.input().hint("Username").label("Username");
		Input pw = ui.input().hint("Password").label("Password").typePassword();
		
		return ui.segment().add(ui.vertical()
			.add(username)
			.add(pw)
			.add(ui.button("Login").primary().click(() -> {
				userController.login(username.value(), pw.value(), (result) -> {
					if(result.isSuccess()) {
						
						userController.findByUsername(username.value(), (user) -> {
							onClose.call();
							onLogin.accept(user);	
						});
						
					} else {
						username.msg(result.getMessage());
					}
				});
			}))
		);
	}
	
}
