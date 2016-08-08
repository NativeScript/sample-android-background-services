package com.tns;

@com.tns.JavaScriptImplementation(javaScriptFile = "./MyIntentService.js")
public class MyIntentService extends android.app.IntentService implements com.tns.NativeScriptHashCodeProvider {
	public MyIntentService(java.lang.String param_0){
		super(param_0);
		com.tns.Runtime.initInstance(this);
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = true;
		com.tns.Runtime.callJSMethod(this, "init", void.class, args);
	}

	protected void onHandleIntent(android.content.Intent param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onHandleIntent", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
