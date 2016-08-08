package com.tns.activities;

@com.tns.JavaScriptImplementation(javaScriptFile = "./activities/NotificationActivity.js")
public class NotificationActivity extends android.app.Activity implements com.tns.NativeScriptHashCodeProvider {
	public NotificationActivity(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	protected void onCreate(android.os.Bundle param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onCreate", void.class, args);
	}

	public void onCreate(android.os.Bundle param_0, android.os.PersistableBundle param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onCreate", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
