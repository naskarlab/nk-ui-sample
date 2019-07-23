package app.ft;

import app.bk.api.md.UserModel;
import app.ft.ctr.UserController;
import app.ft.vw.LoginView;
import app.ft.vw.MainView;
import def.dom.Globals;
import nk.ft.ui.ext.UIX;
import nk.ft.ui.im.UIImpl;
import nk.ft.vw.ViewManager;
import nk.ft.vw.im.ViewManagerImpl;

public class App {
	
	public static void main(String[] args) {
		new App().init();
	}
	
	private UIX ui;
	private ViewManager vm;
	
	private UserController userController;
	
	public App() {
		this.ui = new UIX(new UIImpl(Globals.window.document));
		this.vm = new ViewManagerImpl(Globals.window, Globals.window.document, "#app");
		
		this.userController = new UserController(this::error);
	}
	
	private void init() {
		openLogin();
	}
	
	private void openLogin() {
		vm.open((onClose) -> new LoginView(ui, onClose, userController).init((user) -> {
			openMainView(user);
		}));
	}
	
	private void openMainView(UserModel user) {
		vm.open((onClose) -> new MainView(ui, onClose, user).init(() -> {
			openLogin();
		}));
	}
	
	private void error(String error) {
		Globals.window.alert(error);
	}
	
}
