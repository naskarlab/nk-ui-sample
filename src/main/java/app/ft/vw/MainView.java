package app.ft.vw;

import app.bk.api.md.UserModel;
import nk.ft.ui.Action;
import nk.ft.ui.Component;
import nk.ft.ui.ext.UIX;

public class MainView {

	private UIX ui;
	private Action onClose;
	
	private UserModel userModel;

	public MainView(UIX ui, Action onClose, UserModel userModel) {
		this.ui = ui;
		this.onClose = onClose;
		this.userModel = userModel;
	}
	
	public Component init(Action onLogout) {
		return ui.wrapper()
			.add(ui.heading().title("Welcome, " + userModel.getName()))
			.add(ui.button("Logout").click(() -> {
				onClose.call();
				onLogout.call();
			}));
	}

}
