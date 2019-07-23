package app.bk.api.md;

public class UserModel {

	private String username;
	private String name;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "UserModel [username=" + username + ", name=" + name + "]";
	}

}
