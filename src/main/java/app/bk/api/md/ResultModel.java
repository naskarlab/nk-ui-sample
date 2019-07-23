package app.bk.api.md;

public class ResultModel {

	private boolean success;
	private String message;
	
	public ResultModel() {
		this.success = true;
	}
	
	public ResultModel(String message) {
		this.success = false;
		this.message = message;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "ResultModel [success=" + success + ", message=" + message + "]";
	}

}
